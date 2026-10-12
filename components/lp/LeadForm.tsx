"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import useSubmitLead from "../../hooks/useSubmitLead";
import { trackLeadEvent } from "../../utils/leadTracking";
import CountrySelect, { countryByIso } from "../contact/CountrySelect";
import { SERVICES } from "../contact/EnquiryForm";
import RecaptchaNotice from "../contact/RecaptchaNotice";
import ServicesSelect from "../contact/ServicesSelect";
import { focusRing } from "../ui";
import type { Campaign } from "./campaigns";

/** ad parameters kept with each lead, so it shows which campaign, keyword and ad brought it */
const TRACKED = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

type Fields = {
  name: string;
  country: string;
  phone: string;
  email: string;
  business: string;
  services: string[];
  message: string;
};

/** the country picker takes its fill and outline from these, like the fields beside it */
const pickerTheme = {
  "--paper": "#f7fafc",
  "--line": "rgba(38, 101, 140, 0.4)",
  "--line-strong": "#26658c",
} as React.CSSProperties;
type Errors = Partial<Record<keyof Fields, string>>;

/**
 * The squeeze page's form: four fields, phone before email (calls and WhatsApp close better here), errors under
 * each field, typed values kept on failure. On success it goes to /lead/thank-you, where the ad conversion fires.
 */
export default function LeadForm({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  const uid = useId();
  const { submitLead, loading } = useSubmitLead();
  const [f, setF] = useState<Fields>({
    name: "",
    country: "in",
    phone: "",
    email: "",
    business: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const tracking = useRef<string[]>([]);
  const started = useRef(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    tracking.current = TRACKED.flatMap((k) => (q.get(k) ? [`${k}: ${q.get(k)}`] : []));
  }, []);

  const set = (patch: Partial<Fields>) => {
    if (!started.current) {
      started.current = true;
      trackLeadEvent("lead_cta_click", `lp-${campaign.slug}`);
    }
    setF((x) => ({ ...x, ...patch }));
  };

  const validate = () => {
    const e: Errors = {};
    if (!f.name.trim()) e.name = "Add your name.";
    // same rule as the site's EnquiryForm
    const digits = f.phone.replace(/\D/g, "").length;
    if (digits < 6 || digits > 15) e.phone = "Add a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Add a valid email address.";
    if (!f.business) e.business = "Pick what kind of business you run.";
    setErrors(e);
    // put the cursor in the first field that needs fixing
    const first = (["name", "phone", "email", "business"] as const).find((k) => e[k]);
    if (first) document.getElementById(`${uid}-${first}`)?.focus();
    return !first;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;
    const result = await submitLead({
      name: f.name.trim(),
      email: f.email.trim(),
      phone: `${countryByIso(f.country).dial}${f.phone.replace(/\D/g, "")}`,
      // nothing picked: the campaign's own services, so the lead never arrives without one
      services: f.services.length ? f.services : campaign.services,
      message: [
        ...(f.message.trim() ? [f.message.trim(), ""] : []),
        `Ad landing page: ${campaign.title} (/lead/${campaign.slug})`,
        `Business: ${f.business}`,
        ...(tracking.current.length ? ["", ...tracking.current] : []),
      ].join("\n"),
    });
    if (!result.ok) {
      setStatus(result.message);
      return;
    }
    trackLeadEvent("lead_submitted", `lp-${campaign.slug}`);
    try {
      // lets the thank-you page fire the ad conversion once, not on every reload
      sessionStorage.setItem("lp-lead", campaign.slug);
    } catch {
      /* storage blocked: the thank-you page simply skips the pixel */
    }
    const first = f.name.trim().split(/\s+/)[0];
    router.push(`/lead/thank-you?c=${campaign.slug}&n=${encodeURIComponent(first)}`);
  };

  const field = (bad?: string) =>
    `h-11 w-full rounded-xl bg-[#f7fafc] px-4 text-base text-[var(--ink)] ring-1 ring-inset placeholder:text-[var(--muted)]/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--link)] ${
      bad ? "ring-red-400" : "ring-[rgba(38,101,140,0.4)]"
    }`;

  const extras = [f.services.length ? `${f.services.length} service${f.services.length > 1 ? "s" : ""}` : "", f.message.trim() ? "a message" : ""]
    .filter(Boolean)
    .join(" and ");

  return (
    // one column, required fields only; services and message open on request, so the card stays short
    <form onSubmit={submit} noValidate className="space-y-3">
      <Field id={`${uid}-name`} label="Your name" error={errors.name}>
        <input
          id={`${uid}-name`}
          autoComplete="name"
          value={f.name}
          onChange={(e) => set({ name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${uid}-name-error` : undefined}
          className={field(errors.name)}
        />
      </Field>

      <Field id={`${uid}-phone`} label="WhatsApp number" error={errors.phone}>
        {/* the site's country picker, so numbers reach the lead system in the same "+<dial><digits>" form */}
        <div className="flex gap-2" style={pickerTheme}>
          <CountrySelect value={f.country} onChange={(iso) => set({ country: iso })} className="w-[7.25rem] shrink-0" />
          <input
            id={`${uid}-phone`}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="98765 43210"
            value={f.phone}
            onChange={(e) => set({ phone: e.target.value })}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
            className={`${field(errors.phone)} min-w-0 flex-1`}
          />
        </div>
      </Field>

      <Field id={`${uid}-email`} label="Email" error={errors.email}>
        <input
          id={`${uid}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@business.com"
          value={f.email}
          onChange={(e) => set({ email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${uid}-email-error` : undefined}
          className={field(errors.email)}
        />
      </Field>

      <Field id={`${uid}-business`} label="Your business" error={errors.business}>
        <div className="relative">
          <select
            id={`${uid}-business`}
            value={f.business}
            onChange={(e) => set({ business: e.target.value })}
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? `${uid}-business-error` : undefined}
            className={`${field(errors.business)} cursor-pointer appearance-none pr-10 ${f.business ? "" : "text-[var(--muted)]/80"}`}
          >
            <option value="" disabled>
              Pick one
            </option>
            {[...campaign.businesses, "Something else"].map((b) => (
              <option key={b} value={b} className="text-[var(--ink)]">
                {b}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" aria-hidden />
        </div>
      </Field>

      {/* optional details, closed by default; the summary says what's been added so nothing hidden is forgotten */}
      <details className="group/more rounded-xl">
        <summary
          className={`flex cursor-pointer list-none items-center gap-1.5 rounded-sm py-1 text-sm font-semibold text-[var(--link)] hover:underline [&::-webkit-details-marker]:hidden ${focusRing}`}
        >
          <Plus className="h-4 w-4 transition-transform duration-200 group-open/more:rotate-45" aria-hidden />
          {extras ? `Added ${extras}` : "Add services or a message"}
          <span className="font-normal text-[var(--muted)]">(optional)</span>
        </summary>
        <div className="mt-2 space-y-3">
          <div style={pickerTheme}>
            <label htmlFor={`${uid}-services`} className="mb-1 block text-sm font-semibold">
              Services
            </label>
            <ServicesSelect id={`${uid}-services`} options={SERVICES} value={f.services} onChange={(next) => set({ services: next })} />
          </div>
          <div>
            <label htmlFor={`${uid}-message`} className="mb-1 block text-sm font-semibold">
              Message
            </label>
            <textarea
              id={`${uid}-message`}
              rows={2}
              placeholder="Tell us about your business and goals…"
              value={f.message}
              onChange={(e) => set({ message: e.target.value })}
              className={`${field()} h-auto resize-y py-2.5`}
            />
          </div>
        </div>
      </details>

      {status && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {status}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`group flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--ink)] text-base font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 ${focusRing}`}
      >
        {loading ? "Sending…" : "Get my free plan"}
        {!loading && <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />}
      </button>
      <RecaptchaNotice className="text-center text-[var(--muted)]" />
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
