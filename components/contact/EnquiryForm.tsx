"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import useSubmitLead from "../../hooks/useSubmitLead";
import { trackLeadEvent } from "../../utils/leadTracking";
import { focusRing } from "../ui";
import CountrySelect, { countryByIso } from "./CountrySelect";
import ServicesSelect from "./ServicesSelect";

const SERVICES = [
  "SEO",
  "SMM",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "SMO",
  "Email Marketing",
  "Graphic Designing",
  "Influencer Marketing",
  "Affiliate Marketing",
  "ORM",
];

const EMPTY = { fullName: "", email: "", country: "in", phone: "", services: [] as string[], message: "" };

type Errors = { fullName?: string; email?: string; phone?: string };

const field =
  "rounded-2xl bg-[var(--paper)] px-4 text-[0.95rem] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)]/70 transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--link)] aria-[invalid=true]:ring-red-400";

/**
 * `defaultCountry` is the dial-code country the form starts on (ISO code, e.g. "ae").
 * `compact` swaps the service buttons for a dropdown and shortens the message box, for hero cards.
 * `defaultServices` are pre-ticked (names from SERVICES), e.g. ["SEO"] on the SEO page.
 */
export default function EnquiryForm({
  source = "contact-page",
  defaultCountry = "in",
  compact = false,
  defaultServices = [],
}: {
  source?: string;
  defaultCountry?: string;
  compact?: boolean;
  defaultServices?: string[];
}) {
  const start = { ...EMPTY, country: defaultCountry, services: defaultServices };
  const [form, setForm] = useState(start);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { submitLead, loading } = useSubmitLead();

  const set = <K extends keyof typeof EMPTY>(k: K, v: (typeof EMPTY)[K]) => setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s: string) =>
    set("services", form.services.includes(s) ? form.services.filter((x) => x !== s) : [...form.services, s]);

  const validate = () => {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 15) next.phone = "Please enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    const result = await submitLead({
      name: form.fullName,
      email: form.email,
      phone: `${countryByIso(form.country).dial}${form.phone.replace(/\s/g, "")}`,
      services: form.services,
      message: form.message,
    });

    if (!result.ok) {
      setStatus(result.message);
      return;
    }
    trackLeadEvent("lead_submitted", source);
    setForm(start);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]">
          <Check className="h-7 w-7" aria-hidden />
        </span>
        <p className="text-3xl font-semibold tracking-tight">Thank you!</p>
        <p className="max-w-md text-lg leading-relaxed text-[var(--muted)]">
          Your message has been sent. Our team will review your details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={`mt-2 rounded-sm text-[0.95rem] font-semibold text-[var(--link)] hover:underline cursor-pointer ${focusRing}`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? "space-y-4" : "space-y-6"}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 [&>*]:min-w-0 ${compact ? "gap-4" : "gap-5"}`}>
        <Field id="contact-name" label="Name" error={errors.fullName}>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "contact-name-error" : undefined}
            className={`h-12 w-full ${field}`}
          />
        </Field>

        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`h-12 w-full ${field}`}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-phone" label="Phone" error={errors.phone}>
            <div className="flex gap-2">
              <CountrySelect
                value={form.country}
                onChange={(iso) => set("country", iso)}
                className="w-[7.25rem] shrink-0"
              />
              <input
                id="contact-phone"
                type="tel"
                autoComplete="tel-national"
                placeholder="98765 43210"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                className={`h-12 min-w-0 flex-1 ${field}`}
              />
            </div>
          </Field>
        </div>
      </div>

      {compact ? (
        <div>
          <label htmlFor="contact-services" className="mb-1.5 block text-sm font-medium">
            Services <span className="font-normal text-[var(--muted)]">(optional)</span>
          </label>
          <ServicesSelect
            id="contact-services"
            options={SERVICES}
            value={form.services}
            onChange={(next) => set("services", next)}
          />
        </div>
      ) : (
        <fieldset>
          <legend className="mb-3 text-sm font-medium">
            What can we help with? <span className="font-normal text-[var(--muted)]">(pick any)</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const on = form.services.includes(s);
              return (
                <label key={s} className="cursor-pointer">
                  <input type="checkbox" checked={on} onChange={() => toggleService(s)} className="peer sr-only" />
                  <span
                    className={`inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--link)] ${
                      on
                        ? "bg-[var(--ink)] text-white"
                        : "bg-[var(--paper)] ring-1 ring-inset ring-[var(--line)] hover:ring-[var(--line-strong)]"
                    }`}
                  >
                    {on && <Check className="h-3.5 w-3.5 text-[var(--cyan)]" aria-hidden />}
                    {s}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <Field id="contact-message" label="Message" optional>
        <textarea
          id="contact-message"
          rows={compact ? 2 : 4}
          placeholder="Tell us about your business and goals…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={`w-full resize-y py-3 ${field}`}
        />
      </Field>

      {status && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {status}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className={`group inline-flex h-12 items-center justify-between gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:bg-[var(--ink-2)] cursor-pointer disabled:cursor-wait disabled:opacity-70 ${focusRing}`}
        >
          {loading ? "Sending…" : "Send message"}
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </button>
        <p className="text-xs text-[var(--muted)]">Protected by reCAPTCHA.</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-[var(--muted)]"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
