"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import useSubmitLead from "../../hooks/useSubmitLead";
import { trackLeadEvent } from "../../utils/leadTracking";
import CountrySelect, { countryByIso } from "../contact/CountrySelect";
import RecaptchaNotice from "../contact/RecaptchaNotice";
import { DUBAI_WHATSAPP_HREF } from "../dubai/DubaiHero";
import {
  DUBAI_PHONE_DISPLAY,
  DUBAI_PHONE_HREF,
  EASE_OUT,
  WhatsAppPill,
  focusRing,
} from "../ui";
import {
  budgets,
  goals,
  otherIndustries,
  propertyIndustries,
  type Industry,
} from "./content";

/**
 * The page's one conversion: a four-step "free growth plan" form (business → priorities → budget → contact).
 * It appears twice (hero and closing section). Both copies read one shared state from PlannerProvider, so a
 * visitor who starts in the hero finds their answers waiting at the bottom. Any CTA on the page calls
 * `usePlanner().goTo()` to scroll to the nearest copy, optionally pre-answering the first question.
 * Everything city-specific (industries, budgets, contact details) comes from a PlannerConfig, Dubai by default.
 */

export type PlannerConfig = {
  /** "Dubai", "Bhopal": used in copy ("Our Dubai team") and the lead message */
  city: string;
  /** analytics source prefix, e.g. "dubai-v3" */
  source: string;
  /** big tiles with an icon; more than three are laid out two to a row */
  featured: Industry[];
  /** small chips under "Or another business"; hidden when empty */
  others: Industry[];
  budgets: string[];
  /** default phone country (CountrySelect iso) */
  country: string;
  phonePlaceholder: string;
  whatsappHref: string;
  phoneDisplay: string;
  phoneHref: string;
  /** what the plan contains, listed beside each planner copy */
  youGet: string[];
};

export const DUBAI_PLANNER: PlannerConfig = {
  city: "Dubai",
  source: "dubai-v3",
  featured: propertyIndustries,
  others: otherIndustries,
  budgets,
  country: "ae",
  phonePlaceholder: "50 123 4567",
  whatsappHref: DUBAI_WHATSAPP_HREF,
  phoneDisplay: DUBAI_PHONE_DISPLAY,
  phoneHref: DUBAI_PHONE_HREF,
  youGet: [
    "The channels worth your budget, and how to split it",
    "Campaign and creative ideas for your projects",
    "A 30-day launch plan with clear next steps",
  ],
};

const STEPS = ["Your business", "Priorities", "Budget", "Contact"] as const;
type Step = 0 | 1 | 2 | 3;

type Contact = { name: string; email: string; country: string; phone: string };
type Errors = Partial<Record<keyof Contact, string>>;

type PlannerState = {
  step: Step;
  /** +1 forward, -1 back: which way the step content slides */
  dir: 1 | -1;
  industry?: string;
  goals: string[];
  budget?: string;
  contact: Contact;
  done: boolean;
  /** first name, for the thank-you */
  doneName: string;
};

type PlannerContextValue = {
  config: PlannerConfig;
  state: PlannerState;
  setStep: (step: Step, from: string) => void;
  pickIndustry: (id: string, from: string) => void;
  toggleGoal: (id: string) => void;
  pickBudget: (b: string, from: string) => void;
  setContact: (c: Partial<Contact>) => void;
  finish: (name: string) => void;
  /** scroll to the nearest planner copy; with an industry, answer step 1 and continue to step 2 */
  goTo: (opts?: { industry?: string; source?: string }) => void;
  /** which copy should take focus after the next step change */
  focusTarget: string | null;
  clearFocus: () => void;
};

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner must be used inside <PlannerProvider>");
  return ctx;
}

const initialState = (country: string): PlannerState => ({
  step: 0,
  dir: 1,
  goals: [],
  contact: { name: "", email: "", country, phone: "" },
  done: false,
  doneName: "",
});

export function PlannerProvider({
  config = DUBAI_PLANNER,
  children,
}: {
  config?: PlannerConfig;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<PlannerState>(() =>
    initialState(config.country),
  );
  const [focusTarget, setFocusTarget] = useState<string | null>(null);
  const started = useRef(false);

  /** first answer counts as opening the lead form, same as a CTA click elsewhere on the site */
  const markStarted = (source: string) => {
    if (started.current) return;
    started.current = true;
    trackLeadEvent("lead_cta_click", source);
  };

  const setStep = useCallback((step: Step, from: string) => {
    setState((s) => ({ ...s, step, dir: step >= s.step ? 1 : -1 }));
    setFocusTarget(from);
  }, []);

  const pickIndustry = useCallback((id: string, from: string) => {
    markStarted(from);
    setState((s) => ({ ...s, industry: id, step: 1, dir: 1 }));
    setFocusTarget(from);
  }, []);

  const toggleGoal = useCallback(
    (id: string) =>
      setState((s) => ({
        ...s,
        goals: s.goals.includes(id)
          ? s.goals.filter((g) => g !== id)
          : [...s.goals, id],
      })),
    [],
  );

  const pickBudget = useCallback((budget: string, from: string) => {
    setState((s) => ({ ...s, budget, step: 3, dir: 1 }));
    setFocusTarget(from);
  }, []);

  const setContact = useCallback(
    (c: Partial<Contact>) =>
      setState((s) => ({ ...s, contact: { ...s.contact, ...c } })),
    [],
  );

  const finish = useCallback(
    (name: string) =>
      setState({
        ...initialState(config.country),
        done: true,
        doneName: name,
      }),
    [config.country],
  );

  const goTo = useCallback<PlannerContextValue["goTo"]>(
    ({ industry, source = `${config.source}-cta` } = {}) => {
      const copies = Array.from(
        document.querySelectorAll<HTMLElement>("[data-planner]"),
      );
      if (!copies.length) return;
      // nearest copy to the middle of the screen, so a CTA never sends people further than it has to
      const mid = window.innerHeight / 2;
      const target = copies.reduce((best, el) => {
        const d = (el2: HTMLElement) => {
          const r = el2.getBoundingClientRect();
          return Math.abs(r.top + r.height / 2 - mid);
        };
        return d(el) < d(best) ? el : best;
      });
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });

      markStarted(source);
      if (industry) {
        setState((s) =>
          s.done
            ? s
            : { ...s, industry, step: s.step === 0 ? 1 : s.step, dir: 1 },
        );
      }
      setFocusTarget(target.dataset.planner ?? null);
    },
    [config.source],
  );

  const value = useMemo(
    () => ({
      config,
      state,
      setStep,
      pickIndustry,
      toggleGoal,
      pickBudget,
      setContact,
      finish,
      goTo,
      focusTarget,
      clearFocus: () => setFocusTarget(null),
    }),
    [
      config,
      state,
      setStep,
      pickIndustry,
      toggleGoal,
      pickBudget,
      setContact,
      finish,
      goTo,
      focusTarget,
    ],
  );

  return (
    <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
  );
}

/* ---------- the card ---------- */

const slide: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    transform: `translateX(${dir * 24}px)`,
  }),
  center: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.24, ease: EASE_OUT },
  },
  exit: (dir: number) => ({
    opacity: 0,
    transform: `translateX(${dir * -16}px)`,
    transition: { duration: 0.12, ease: EASE_OUT },
  }),
};

const fade: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

/** `id` names this copy for analytics and focus ("hero", "final"). */
export default function Planner({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const { config, state, setStep, focusTarget, clearFocus } = usePlanner();
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  const source = `${config.source}-${id}`;

  // after a step change started from this copy (or a CTA that chose it), move focus to the new question
  useEffect(() => {
    if (focusTarget !== id) return;
    const t = window.setTimeout(() => {
      headingRef.current?.focus({ preventScroll: true });
      clearFocus();
    }, 260);
    return () => window.clearTimeout(t);
  }, [focusTarget, id, state.step, state.done, clearFocus]);

  const variants = reduce ? fade : slide;

  return (
    <section
      data-planner={id}
      aria-labelledby={titleId}
      className={`scroll-mt-28 rounded-[28px] bg-[var(--surface)] p-5 text-[var(--ink)] shadow-[0_40px_80px_-40px_rgba(1,28,64,0.4)] ring-1 ring-[var(--line)] sm:p-7 ${className}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={titleId} className="text-lg font-semibold tracking-tight">
          Your free growth plan
        </h2>
        {!state.done && (
          <p className="text-sm tabular-nums text-[var(--muted)]">
            Step {state.step + 1} of {STEPS.length}
          </p>
        )}
      </div>

      {/* progress: one segment per step */}
      <ol className="mt-3 grid grid-cols-4 gap-1.5" aria-label="Progress">
        {STEPS.map((label, i) => {
          const filled = state.done || i <= state.step;
          return (
            <li
              key={label}
              className="h-1 overflow-hidden rounded-full bg-[var(--line)]"
            >
              <span className="sr-only">
                {label}
                {state.done || i < state.step
                  ? " (done)"
                  : i === state.step
                    ? " (current)"
                    : ""}
              </span>
              <span
                aria-hidden
                className={`block h-full origin-left rounded-full bg-[var(--teal)] transition-transform duration-300 ease-[var(--ease-out)] motion-reduce:transition-none ${
                  filled ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </li>
          );
        })}
      </ol>

      <div className="relative mt-6 min-h-[23rem] sm:min-h-[22rem]">
        <AnimatePresence mode="wait" initial={false} custom={state.dir}>
          <motion.div
            key={state.done ? "done" : state.step}
            custom={state.dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {state.done ? (
              <Done headingRef={headingRef} />
            ) : state.step === 0 ? (
              <StepIndustry headingRef={headingRef} copy={id} />
            ) : state.step === 1 ? (
              <StepGoals headingRef={headingRef} copy={id} />
            ) : state.step === 2 ? (
              <StepBudget headingRef={headingRef} copy={id} />
            ) : (
              <StepContact headingRef={headingRef} source={source} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {!state.done && state.step > 0 && (
        <button
          type="button"
          onClick={() => setStep((state.step - 1) as Step, id)}
          className={`mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer ${focusRing}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
      )}
    </section>
  );
}

type StepProps = { headingRef: React.RefObject<HTMLHeadingElement | null> };

function Question({
  headingRef,
  children,
  note,
}: StepProps & { children: React.ReactNode; note?: string }) {
  return (
    <div className="mb-5">
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-semibold leading-tight tracking-tight focus:outline-none"
      >
        {children}
      </h3>
      {note && <p className="mt-1.5 text-sm text-[var(--muted)]">{note}</p>}
    </div>
  );
}

const option = `cursor-pointer rounded-2xl text-left ring-1 ring-inset transition-[background-color,box-shadow,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.98] ${focusRing}`;
const optionIdle =
  "bg-[var(--paper)] ring-[var(--line)] hover:ring-[var(--line-strong)]";
const optionOn = "bg-[var(--ink)] text-white ring-[var(--ink)]";

function StepIndustry({ headingRef, copy }: StepProps & { copy: string }) {
  const { config, state, pickIndustry } = usePlanner();
  const { featured, others } = config;
  // a short list reads best stacked; a long one (no single focus) goes two to a row with compact tiles
  const many = featured.length > 3;
  return (
    <div>
      <Question headingRef={headingRef}>What are you marketing?</Question>
      <div className={`grid gap-2 ${many ? "sm:grid-cols-2" : ""}`}>
        {featured.map((ind) => {
          const Icon = ind.icon;
          const on = state.industry === ind.id;
          return (
            <button
              key={ind.id}
              type="button"
              aria-pressed={on}
              onClick={() => pickIndustry(ind.id, copy)}
              className={`flex items-center ${many ? "gap-3 px-3 py-2.5" : "gap-4 px-4 py-3.5"} ${option} ${on ? optionOn : optionIdle}`}
            >
              {Icon && (
                <span
                  aria-hidden
                  className={`flex flex-none items-center justify-center rounded-xl ${
                    many ? "h-9 w-9" : "h-10 w-10"
                  } ${
                    on
                      ? "bg-[var(--cyan)] text-[var(--ink)]"
                      : "bg-[var(--surface)] text-[var(--link)]"
                  }`}
                >
                  <Icon className={many ? "h-[18px] w-[18px]" : "h-5 w-5"} />
                </span>
              )}
              <span className="min-w-0">
                <span className="block font-semibold leading-snug">
                  {ind.label}
                </span>
                {ind.hint && (
                  <span
                    className={`block text-sm ${on ? "text-white/70" : "text-[var(--muted)]"}`}
                  >
                    {ind.hint}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      {others.length > 0 && (
        <>
          <p className="mb-2.5 mt-5 text-sm font-medium text-[var(--muted)]">
            Or another business
          </p>
          <Chips copy={copy} />
        </>
      )}
    </div>
  );
}

function Chips({ copy }: { copy: string }) {
  const { config, state, pickIndustry } = usePlanner();
  return (
    <div className="flex flex-wrap gap-2">
      {config.others.map((ind) => {
        const on = state.industry === ind.id;
        return (
          <button
            key={ind.id}
            type="button"
            aria-pressed={on}
            onClick={() => pickIndustry(ind.id, copy)}
            className={`h-10 rounded-full px-4 text-sm font-medium ${option} ${on ? optionOn : optionIdle}`}
          >
            {ind.label}
          </button>
        );
      })}
    </div>
  );
}

function StepGoals({ headingRef, copy }: StepProps & { copy: string }) {
  const { state, toggleGoal, setStep } = usePlanner();
  const [tried, setTried] = useState(false);
  const none = state.goals.length === 0;
  const hintId = useId();

  return (
    <div>
      <Question headingRef={headingRef} note="Pick as many as you like.">
        What should we fix first?
      </Question>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {goals.map((g) => {
          const on = state.goals.includes(g.id);
          return (
            <label key={g.id} className="cursor-pointer">
              <input
                type="checkbox"
                checked={on}
                onChange={() => toggleGoal(g.id)}
                className="peer sr-only"
              />
              <span
                className={`flex h-full items-start gap-3 px-4 py-3 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--link)] ${option} ${
                  on ? optionOn : optionIdle
                }`}
              >
                <span
                  aria-hidden
                  className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md ring-1 ring-inset ${
                    on
                      ? "bg-[var(--cyan)] text-[var(--ink)] ring-[var(--cyan)]"
                      : "bg-[var(--surface)] ring-[var(--line-strong)]"
                  }`}
                >
                  {on && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold leading-snug">
                    {g.label}
                  </span>
                  <span
                    className={`block text-sm ${on ? "text-white/70" : "text-[var(--muted)]"}`}
                  >
                    {g.hint}
                  </span>
                </span>
              </span>
            </label>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="button"
          aria-describedby={tried && none ? hintId : undefined}
          onClick={() => (none ? setTried(true) : setStep(2, copy))}
          className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] cursor-pointer ${focusRing}`}
        >
          Continue
          <ArrowChip />
        </button>
        {tried && none && (
          <p id={hintId} role="alert" className="text-sm text-red-600">
            Pick at least one to continue.
          </p>
        )}
      </div>
    </div>
  );
}

function StepBudget({ headingRef, copy }: StepProps & { copy: string }) {
  const { config, state, pickBudget } = usePlanner();
  return (
    <div>
      <Question
        headingRef={headingRef}
        note="Including ad spend. A rough figure is fine."
      >
        What’s your monthly marketing budget?
      </Question>
      <div className="grid gap-2">
        {config.budgets.map((b) => {
          const on = state.budget === b;
          return (
            <button
              key={b}
              type="button"
              aria-pressed={on}
              onClick={() => pickBudget(b, copy)}
              className={`flex h-12 items-center justify-between px-4 font-semibold tabular-nums ${option} ${on ? optionOn : optionIdle}`}
            >
              {b}
              {on && (
                <Check className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const field =
  "h-12 w-full rounded-2xl bg-[var(--paper)] px-4 text-base text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)]/70 transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--link)] aria-[invalid=true]:ring-red-400";

function StepContact({ headingRef, source }: StepProps & { source: string }) {
  const { config, state, setContact, finish } = usePlanner();
  const { submitLead, loading } = useSubmitLead();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const uid = useId();
  const c = state.contact;

  const validate = () => {
    const next: Errors = {};
    if (!c.name.trim()) next.name = "Enter your name.";
    const digits = c.phone.replace(/\D/g, "");
    if (digits.length < 6 || digits.length > 15)
      next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))
      next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    const chosen = goals.filter((g) => state.goals.includes(g.id));
    const industry =
      [...config.featured, ...config.others].find(
        (i) => i.id === state.industry,
      )?.label ?? "Not given";
    const result = await submitLead({
      name: c.name.trim(),
      email: c.email.trim(),
      phone: `${countryByIso(c.country).dial}${c.phone.replace(/\s/g, "")}`,
      services: Array.from(new Set(chosen.flatMap((g) => g.services))),
      message: [
        `${config.city} growth plan request`,
        `Business: ${industry}`,
        `Priorities: ${chosen.map((g) => g.label).join(", ") || "Not given"}`,
        `Monthly budget: ${state.budget ?? "Not given"}`,
      ].join("\n"),
    });

    if (!result.ok) {
      setStatus(result.message);
      return;
    }
    trackLeadEvent("lead_submitted", source);
    finish(c.name.trim().split(/\s+/)[0]);
  };

  const ids = {
    name: `${uid}-name`,
    phone: `${uid}-phone`,
    email: `${uid}-email`,
  };

  return (
    <form onSubmit={submit} noValidate>
      <Question
        headingRef={headingRef}
        note={`Our ${config.city} team will send your plan and a few quick ideas.`}
      >
        Where should we send your plan?
      </Question>
      <div className="space-y-3.5">
        <Field id={ids.name} label="Name" error={errors.name}>
          <input
            id={ids.name}
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={c.name}
            onChange={(e) => setContact({ name: e.target.value })}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${ids.name}-error` : undefined}
            className={field}
          />
        </Field>
        <Field id={ids.phone} label="WhatsApp or phone" error={errors.phone}>
          <div className="flex gap-2">
            <CountrySelect
              value={c.country}
              onChange={(iso) => setContact({ country: iso })}
              className="w-[7.25rem] shrink-0"
            />
            <input
              id={ids.phone}
              type="tel"
              autoComplete="tel-national"
              inputMode="tel"
              placeholder={config.phonePlaceholder}
              value={c.phone}
              onChange={(e) => setContact({ phone: e.target.value })}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${ids.phone}-error` : undefined}
              className={`min-w-0 flex-1 ${field}`}
            />
          </div>
        </Field>
        <Field id={ids.email} label="Email" error={errors.email}>
          <input
            id={ids.email}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={c.email}
            onChange={(e) => setContact({ email: e.target.value })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${ids.email}-error` : undefined}
            className={field}
          />
        </Field>
      </div>

      {status && (
        <p
          role="alert"
          className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {status}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`group mt-5 inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.98] cursor-pointer disabled:cursor-wait disabled:opacity-70 sm:w-auto ${focusRing}`}
      >
        {loading ? "Sending…" : "Get my free plan"}
        <ArrowChip />
      </button>
      <RecaptchaNotice className="mt-3 text-[var(--muted)]" />
    </form>
  );
}

function Done({ headingRef }: StepProps) {
  const { config, state } = usePlanner();
  return (
    <div role="status" className="flex flex-col items-start">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]">
        <Check className="h-7 w-7" aria-hidden />
      </span>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-5 text-3xl font-semibold tracking-tight focus:outline-none"
      >
        Thanks{state.doneName ? `, ${state.doneName}` : ""}. Your request is in.
      </h3>
      <p className="mt-3 max-w-md leading-relaxed text-[var(--muted)]">
        Our {config.city} team will review your answers and reach out on
        WhatsApp or email shortly with your growth plan.
      </p>
      <p className="mt-8 text-sm font-medium">Want to talk sooner?</p>
      <WhatsAppPill href={config.whatsappHref} className="mt-3">
        Message us on WhatsApp
      </WhatsAppPill>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
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

function ArrowChip() {
  return (
    <span
      aria-hidden
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}
