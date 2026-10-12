"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WhatsAppPill, focusRing, whatsappHref } from "../ui";
import { DEFAULT_CAMPAIGN, campaigns } from "./campaigns";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * After a squeeze-page lead: confirms what happens next and offers WhatsApp for anyone who can't wait. Counts the
 * ad conversion here (Meta Pixel "Lead" and a dataLayer event for Google Ads in GTM), once per lead: the form
 * leaves a flag in sessionStorage, and this page clears it, so reloads and direct visits don't count.
 */
export default function ThankYou() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setName(q.get("n") ?? "");
    setSlug(q.get("c") ?? "");
    try {
      const lead = sessionStorage.getItem("lp-lead");
      if (lead) {
        sessionStorage.removeItem("lp-lead");
        window.fbq?.("track", "Lead");
        window.dataLayer?.push({ event: "lp_conversion", lead_source: `lp-${lead}` });
      }
    } catch {
      /* storage blocked: no conversion counted */
    }
  }, []);

  const campaign = campaigns[slug] ?? campaigns[DEFAULT_CAMPAIGN];
  const whatsapp = whatsappHref(campaign.whatsappMessage);

  return (
    <main className="wrap flex min-h-[100svh] flex-col items-center justify-center py-16 text-center">
      <span className="flex items-center gap-2">
        <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-8 w-auto" priority />
        <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-5 w-auto" priority />
      </span>

      <div className="mt-10 w-full max-w-lg rounded-[28px] bg-[var(--surface)] p-8 shadow-[0_30px_60px_-36px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cyan)]">
          <Check className="h-7 w-7" aria-hidden />
        </span>
        <h1 className="mt-6 text-[clamp(1.6rem,3vw,2.1rem)] font-semibold leading-tight tracking-tight">
          {name ? `Thanks, ${name}. ` : "Thanks. "}Your plan is on its way.
        </h1>
        <p className="mx-auto mt-3 max-w-[38ch] leading-relaxed text-[var(--muted)]">
          We’ll call you within one working day to ask a few questions, then send your written plan.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <WhatsAppPill href={whatsapp}>Can’t wait? Chat now</WhatsAppPill>
          <a href={PHONE_HREF} className={`inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}>
            <Phone className="h-4 w-4" aria-hidden />
            Or call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}
