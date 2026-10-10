"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { branches } from "@/data/offices";
import useSubmitLead from "../../hooks/useSubmitLead";
import { trackLeadEvent } from "../../utils/leadTracking";
import RecaptchaNotice from "../contact/RecaptchaNotice";
import { EASE_OUT, WhatsAppPill, focusRing } from "../ui";
import { GOA_WHATSAPP_HREF, areas, goals, kinds, photos } from "./content";
import { ParallaxPhoto, WipeIn, usePlan } from "./media";

const office = branches.find((b) => b.city === "Goa")!;

type Fields = { kind: string; goal: string; area: string; name: string; phone: string; email: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { kind: "", goal: "", area: "", name: "", phone: "", email: "" };

/**
 * The page's lead form, all on one card: what you run, what you want, where you are, and how to reach you.
 * Choices are radio chips (real radios, so arrow keys work). Errors sit under the field they belong to.
 * A sector card elsewhere on the page can choose "what do you run" before the visitor arrives (usePlan).
 */
export default function Plan() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [doneName, setDoneName] = useState("");
  const started = useRef(false);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const { submitLead, loading } = useSubmitLead();
  const uid = useId();
  const plan = usePlan();

  // a sector card picked a business: reflect it here
  useEffect(() => {
    if (plan.kind) setF((x) => ({ ...x, kind: plan.kind }));
  }, [plan.kind]);

  const set = (patch: Partial<Fields>) => {
    if (!started.current) {
      started.current = true;
      trackLeadEvent("lead_cta_click", "goa-v2-plan");
    }
    setF((x) => ({ ...x, ...patch }));
  };

  const validate = () => {
    const e: Errors = {};
    if (!f.kind) e.kind = "Pick what you run.";
    if (!f.goal) e.goal = "Pick what you want more of.";
    if (!f.name.trim()) e.name = "Add your name.";
    if (f.phone.replace(/\D/g, "").length !== 10) e.phone = "Add a 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Add a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;
    const kind = kinds.find((k) => k.id === f.kind)?.label ?? f.kind;
    const goal = goals.find((g) => g.id === f.goal);
    const result = await submitLead({
      name: f.name.trim(),
      email: f.email.trim(),
      phone: `+91${f.phone.replace(/\D/g, "")}`,
      services: goal?.services ?? [],
      message: [
        "Goa season plan request",
        `Business: ${kind}`,
        `Wants: ${goal?.label ?? "Not given"}`,
        `Area: ${f.area || "Not given"}`,
      ].join("\n"),
    });
    if (!result.ok) {
      setStatus(result.message);
      return;
    }
    trackLeadEvent("lead_submitted", "goa-v2-plan");
    setDoneName(f.name.trim().split(/\s+/)[0]);
    window.setTimeout(() => doneRef.current?.focus(), 50);
  };

  const field =
    "h-12 w-full rounded-xl bg-[var(--porcelain)] px-4 text-base ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)]/70 transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--link)] aria-[invalid=true]:ring-red-400";

  return (
    <section id="plan" className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">Plan your season with us.</h2>
          <p className="mt-4 max-w-[44ch] text-lg leading-relaxed text-[var(--muted)]">
            Tell us a little about your place. Our Goa team sends back a free written plan: the channels,
            how to split the budget, and a month-by-month calendar.
          </p>
          <WipeIn className="mt-8 hidden lg:block">
            <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-[var(--paper)]">
              <ParallaxPhoto photo={photos.door} sizes="(min-width: 1024px) 34vw, 0px" travel={10} />
            </div>
          </WipeIn>
          <div className="mt-6 border-t border-[var(--line)] pt-6">
            <p className="text-sm text-[var(--muted)]">
              Rather talk?{" "}
              <a href={office.phoneHref} className="font-semibold text-[var(--link)] hover:underline">
                {office.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-[28px] bg-[var(--surface)] p-5 shadow-[0_40px_80px_-48px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] sm:p-8 lg:col-span-7">
          <AnimatePresence mode="wait" initial={false}>
            {doneName ? (
              <motion.div
                key="done"
                role="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                className="py-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--ochre)]">
                  <Check className="h-6 w-6" aria-hidden />
                </span>
                <h3 ref={doneRef} tabIndex={-1} className="serif mt-5 text-3xl leading-tight focus:outline-none">
                  Thanks, {doneName}. Your season plan is on its way.
                </h3>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-[var(--muted)]">
                  Our Goa team will reach out on WhatsApp or email shortly.
                </p>
                <WhatsAppPill href={GOA_WHATSAPP_HREF} className="mt-6">
                  Talk to us now
                </WhatsAppPill>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0, transition: { duration: 0.12 } }}>
                <Chips
                  legend="What do you run?"
                  name={`${uid}-kind`}
                  options={kinds}
                  value={f.kind}
                  error={errors.kind}
                  onChange={(v) => set({ kind: v })}
                />
                <Chips
                  legend="What do you want more of?"
                  name={`${uid}-goal`}
                  options={goals}
                  value={f.goal}
                  error={errors.goal}
                  onChange={(v) => set({ goal: v })}
                  className="mt-6"
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field id={`${uid}-area`} label="Where are you?" optional>
                    <div className="relative">
                      <select
                        id={`${uid}-area`}
                        value={f.area}
                        onChange={(e) => set({ area: e.target.value })}
                        className={`${field} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Pick an area</option>
                        {areas.map((r) => (
                          <optgroup key={r.region} label={r.region}>
                            {r.places.map((p) => (
                              <option key={p} value={`${p} (${r.region})`}>
                                {p}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" aria-hidden />
                    </div>
                  </Field>
                  <Field id={`${uid}-name`} label="Your name" error={errors.name}>
                    <input
                      id={`${uid}-name`}
                      autoComplete="name"
                      placeholder="Your full name"
                      value={f.name}
                      onChange={(e) => set({ name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                      className={field}
                    />
                  </Field>
                  <Field id={`${uid}-phone`} label="WhatsApp number" error={errors.phone}>
                    <div className="flex">
                      <span className="flex h-12 items-center rounded-l-xl bg-[var(--paper)] px-3 text-sm font-medium ring-1 ring-inset ring-[var(--line)]">
                        +91
                      </span>
                      <input
                        id={`${uid}-phone`}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel-national"
                        placeholder="98765 43210"
                        value={f.phone}
                        onChange={(e) => set({ phone: e.target.value })}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
                        className={`${field} rounded-l-none`}
                      />
                    </div>
                  </Field>
                  <Field id={`${uid}-email`} label="Email" error={errors.email}>
                    <input
                      id={`${uid}-email`}
                      type="email"
                      autoComplete="email"
                      placeholder="you@yourplace.com"
                      value={f.email}
                      onChange={(e) => set({ email: e.target.value })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${uid}-email-error` : undefined}
                      className={field}
                    />
                  </Field>
                </div>

                {status && (
                  <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {status}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 cursor-pointer ${focusRing}`}
                  >
                    {loading ? "Sending…" : "Send me my season plan"}
                    <span
                      aria-hidden
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ochre)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                  <RecaptchaNotice className="max-w-[34ch] text-[var(--muted)]" />
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Chips({
  legend,
  name,
  options,
  value,
  error,
  onChange,
  className = "",
}: {
  legend: string;
  name: string;
  options: { id: string; label: string }[];
  value: string;
  error?: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <fieldset className={className} aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="mb-3 text-sm font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {options.map((o) => {
          const on = value === o.id;
          return (
            <label key={o.id} className="cursor-pointer">
              <input
                type="radio"
                name={name}
                value={o.id}
                checked={on}
                onChange={() => onChange(o.id)}
                className="peer sr-only"
              />
              <span
                className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium sm:h-10 sm:px-4 sm:text-sm ring-1 ring-inset transition-[background-color,color,box-shadow] duration-150 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--link)] ${
                  on ? "bg-[var(--ink)] text-white ring-[var(--ink)]" : "bg-[var(--porcelain)] ring-[var(--line)] hover:ring-[var(--line-strong)]"
                }`}
              >
                {on && <Check className="h-3.5 w-3.5 text-[var(--ochre)]" aria-hidden />}
                {o.label}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
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
