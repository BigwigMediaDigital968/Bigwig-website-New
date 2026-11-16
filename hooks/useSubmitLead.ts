"use client";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

export type SubmitLeadResult = {
  ok: boolean;
  message: string;
};

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// reCAPTCHA is loaded on demand: the first time anyone touches a form field (warmRecaptcha), or at submit if
// that didn't happen. This keeps its ~350 KiB of script off every page load.
let recaptchaScript: Promise<void> | null = null;
const loadRecaptcha = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.grecaptcha) return Promise.resolve();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return Promise.reject(new Error("reCAPTCHA site key missing"));
  if (!recaptchaScript) {
    recaptchaScript = new Promise<void>((resolve, reject) => {
      const el = document.createElement("script");
      el.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      el.async = true;
      el.onload = () => resolve();
      el.onerror = () => {
        recaptchaScript = null; // allow a retry
        reject(new Error("reCAPTCHA failed to load"));
      };
      document.head.appendChild(el);
    });
  }
  return recaptchaScript;
};

let warmRegistered = false;
const warmRecaptcha = () => {
  if (warmRegistered || typeof document === "undefined") return;
  warmRegistered = true;
  const start = () => {
    document.removeEventListener("focusin", start);
    document.removeEventListener("pointerdown", start);
    loadRecaptcha().catch(() => {});
  };
  document.addEventListener("focusin", start, { once: true });
  document.addEventListener("pointerdown", start, { once: true });
};

// Gets a reCAPTCHA v3 token.
const getRecaptchaToken = async (): Promise<string> => {
  await loadRecaptcha();
  return new Promise((resolve, reject) => {
    const grecaptcha = window.grecaptcha;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!grecaptcha || !siteKey) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    grecaptcha.ready(() => {
      try {
        grecaptcha
          .execute(siteKey, { action: "submit_lead" })
          .then(resolve, reject);
      } catch (err) {
        reject(err);
      }
    });
  });
};

// Sends a lead to the backend. Validation and UI stay in each form.
const useSubmitLead = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    warmRecaptcha();
  }, []);

  const submitLead = async (lead: LeadPayload): Promise<SubmitLeadResult> => {
    setLoading(true);
    try {
      let recaptchaToken: string;
      try {
        recaptchaToken = await getRecaptchaToken();
      } catch {
        return {
          ok: false,
          message: "Captcha failed to load. Please refresh and try again.",
        };
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/create-lead`,
        { ...lead, recaptchaToken },
      );
      return { ok: true, message: "Lead Saved Successfully!" };
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      return {
        ok: false,
        message: error.response?.data?.message || "Something went wrong.",
      };
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading };
};

export default useSubmitLead;
