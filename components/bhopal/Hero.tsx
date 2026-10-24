"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, MapPin, Search, Star } from "lucide-react";
import useSubmitLead from "../../hooks/useSubmitLead";
import { trackLeadEvent } from "../../utils/leadTracking";
import RecaptchaNotice from "../contact/RecaptchaNotice";
import { EASE_OUT, PHONE_DISPLAY, PHONE_HREF, WhatsAppPill, focusRing } from "../ui";
import TrustedStrip from "../ui/TrustedStrip";
import { reachOptions, useBrief, useBriefLabels } from "./Brief";
import { Lakes } from "./Local";
import { BHOPAL_WHATSAPP_HREF, areas, budgets, businesses, wants, wider } from "./content";

/**
 * The hero is the form. The visitor finishes a sentence about their business (each blank opens a small list),
 * and a Google Maps preview beside it shows their listing climbing to the top of the search they described.
 * "Make my free plan" reveals a second sentence for contact details.
 */
export default function Hero() {
  const { brief, set, formRef } = useBrief();
  const { business } = useBriefLabels();
  const { submitLead, loading } = useSubmitLead();
  const [stage, setStage] = useState<"brief" | "contact" | "done">("brief");
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof contact, string>>>({});
  const [status, setStatus] = useState("");
  const [doneName, setDoneName] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (stage === "contact") nameRef.current?.focus({ preventScroll: true });
    if (stage === "done") doneRef.current?.focus({ preventScroll: true });
  }, [stage]);

  const validate = () => {
    const next: typeof errors = {};
    if (!contact.name.trim()) next.name = "Add your name.";
    if (contact.phone.replace(/\D/g, "").length !== 10) next.phone = "Add a 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) next.email = "Add a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stage === "brief") {
      trackLeadEvent("lead_cta_click", "bhopal-make-plan");
      setStage("contact");
      return;
    }
    setStatus("");
    if (!validate()) return;
    const want = wants.find((w) => w.id === brief.want) ?? wants[0];
    const reach = reachOptions.find((r) => r.id === brief.area)?.label ?? brief.area;
    const result = await submitLead({
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: `+91${contact.phone.replace(/\D/g, "")}`,
      services: want.services,
      message: [
        "Bhopal growth plan request",
        `I run ${business.label} and want more ${want.label} from people ${reach}.`,
        `Monthly budget: ${brief.budget}`,
      ].join("\n"),
    });
    if (!result.ok) {
      setStatus(result.message);
      return;
    }
    trackLeadEvent("lead_submitted", "bhopal-sentence");
    setDoneName(contact.name.trim().split(/\s+/)[0]);
    setStage("done");
  };

  const errorList = Object.values(errors).filter(Boolean);

  return (
    <section className="relative isolate overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_50%_at_85%_30%,rgba(167,235,242,0.6),transparent_70%)]"
      />
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="min-w-0 lg:col-span-7">
          <h1 className="h-display max-w-[16ch]">Digital marketing agency in Bhopal</h1>
          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[var(--muted)]">
            Bigwig is a digital marketing agency in Bhopal that runs ads, Google Maps, websites and
            social media for local businesses, from an office in the city.
          </p>

          <form
            ref={(el) => {
              formRef.current = el;
            }}
            id="plan"
            tabIndex={-1}
            onSubmit={submit}
            noValidate
            aria-labelledby={`${uid}-title`}
            className="mt-7 scroll-mt-28 rounded-[24px] bg-[var(--surface)] p-5 shadow-[0_30px_60px_-36px_rgba(1,28,64,0.4)] ring-1 ring-[var(--line)] focus:outline-none sm:p-7"
          >
            <h2 id={`${uid}-title`} className="text-sm font-semibold text-[var(--link)]">
              Your free growth plan
            </h2>
            <AnimatePresence mode="wait" initial={false}>
              {stage === "done" ? (
                <motion.div
                  key="done"
                  role="status"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="mt-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--cyan)]">
                      <Check className="h-5 w-5" aria-hidden />
                    </span>
                    <h3
                      ref={doneRef}
                      tabIndex={-1}
                      className="text-xl font-semibold leading-snug tracking-tight focus:outline-none sm:text-2xl"
                    >
                      Thanks, {doneName}. Your plan for {business.label} is on its way.
                    </h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
                    Our Bhopal team will reach out on WhatsApp or email shortly.
                  </p>
                  <WhatsAppPill href={BHOPAL_WHATSAPP_HREF} className="mt-5">
                    Talk to us now
                  </WhatsAppPill>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, transition: { duration: 0.12 } }}>
                  <fieldset>
                    <legend className="sr-only">About your business</legend>
                    <p className="mt-3 text-[clamp(1.3rem,2vw,1.65rem)] font-medium leading-[1.6] tracking-[-0.015em]">
                      I run{" "}
                      <Slot
                        label="Your business"
                        value={brief.business}
                        onChange={(v) => set({ business: v })}
                        groups={[{ options: businesses.map((b) => ({ id: b.id, label: b.label })) }]}
                      />{" "}
                      and want more{" "}
                      <Slot
                        label="What you want more of"
                        value={brief.want}
                        onChange={(v) => set({ want: v })}
                        groups={[{ options: wants }]}
                      />{" "}
                      from people{" "}
                      <Slot
                        label="Where your customers are"
                        value={brief.area}
                        onChange={(v) => set({ area: v })}
                        groups={[
                          { label: "In Bhopal", options: reachOptions.slice(0, areas.length) },
                          { label: "Wider", options: reachOptions.slice(areas.length, areas.length + wider.length) },
                        ]}
                      />
                      . My monthly budget is{" "}
                      <Slot
                        label="Monthly budget"
                        value={brief.budget}
                        onChange={(v) => set({ budget: v })}
                        groups={[{ options: budgets.map((b) => ({ id: b, label: b })) }]}
                      />
                      .
                    </p>
                  </fieldset>

                  <AnimatePresence initial={false}>
                    {stage === "contact" && (
                      <motion.fieldset
                        key="contact"
                        initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <legend className="sr-only">Where to send your plan</legend>
                        <p className="mt-4 border-t border-[var(--line)] pt-4 text-[clamp(1.3rem,2vw,1.65rem)] font-medium leading-[1.6] tracking-[-0.015em]">
                          Send it to{" "}
                          <Blank
                            ref={nameRef}
                            label="Your name"
                            placeholder="your name"
                            autoComplete="name"
                            width="7.5em"
                            value={contact.name}
                            error={errors.name}
                            onChange={(v) => setContact((c) => ({ ...c, name: v }))}
                          />{" "}
                          on WhatsApp at +91{" "}
                          <Blank
                            label="Mobile number"
                            placeholder="98765 43210"
                            autoComplete="tel-national"
                            type="tel"
                            inputMode="tel"
                            width="6.6em"
                            value={contact.phone}
                            error={errors.phone}
                            onChange={(v) => setContact((c) => ({ ...c, phone: v }))}
                          />{" "}
                          and email{" "}
                          <Blank
                            label="Email"
                            placeholder="you@business.com"
                            autoComplete="email"
                            type="email"
                            width="10em"
                            value={contact.email}
                            error={errors.email}
                            onChange={(v) => setContact((c) => ({ ...c, email: v }))}
                          />
                          .
                        </p>
                      </motion.fieldset>
                    )}
                  </AnimatePresence>

                  {(errorList.length > 0 || status) && (
                    <ul role="alert" className="mt-3 space-y-0.5 text-sm font-medium text-red-700">
                      {errorList.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                      {status && <li>{status}</li>}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 cursor-pointer ${focusRing}`}
                    >
                      {stage === "brief" ? "Make my free plan" : loading ? "Sending…" : "Send me my plan"}
                      <span
                        aria-hidden
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                    <p className="text-sm text-[var(--muted)]">
                      {stage === "brief" ? (
                        "Change any underlined words."
                      ) : (
                        <>
                          Or call{" "}
                          <a href={PHONE_HREF} className="font-semibold text-[var(--link)] hover:underline">
                            {PHONE_DISPLAY}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                  {stage === "contact" && <RecaptchaNotice className="mt-3 text-[var(--muted)]" />}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <MapsPreview />
        </div>
      </div>

      {/* clients */}
      <div className="wrap mt-12">
        <TrustedStrip label="Trusted by businesses across India" />
      </div>
    </section>
  );
}

/* ---------- a blank in the sentence: a select-only combobox, sized to its chosen words ---------- */

type Option = { id: string; label: string };

function Slot({
  label,
  value,
  onChange,
  groups,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  groups: { label?: string; options: Option[] }[];
}) {
  const id = useId();
  const reduce = useReducedMotion();
  const all = groups.flatMap((g) => g.options);
  const selected = Math.max(0, all.findIndex((o) => o.id === value));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(selected);
  const [up, setUp] = useState(false);
  const [shift, setShift] = useState(0);
  const rootRef = useRef<HTMLSpanElement>(null);
  const listRef = useRef<HTMLSpanElement>(null);
  const typed = useRef({ text: "", timer: 0 });

  const show = () => {
    const r = rootRef.current?.getBoundingClientRect();
    if (r) setUp(window.innerHeight - r.bottom < 280 && r.top > window.innerHeight - r.bottom);
    setShift(0);
    setActive(selected);
    setOpen(true);
  };
  const choose = (i: number) => {
    onChange(all[i].id);
    setOpen(false);
  };

  // close on a press anywhere else
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  // keep the panel inside the viewport's side gutters
  useEffect(() => {
    if (!open || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    const gutter = 12;
    if (r.right > window.innerWidth - gutter) setShift(window.innerWidth - gutter - r.right);
    else if (r.left < gutter) setShift(gutter - r.left);
  }, [open]);

  useEffect(() => {
    if (open) document.getElementById(`${id}-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, id]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = all.length - 1;
    const move = (i: number) => {
      e.preventDefault();
      if (!open) show();
      else setActive(Math.min(last, Math.max(0, i)));
    };
    switch (e.key) {
      case "ArrowDown":
        return move(open ? active + 1 : selected);
      case "ArrowUp":
        return move(open ? active - 1 : selected);
      case "Home":
        return move(0);
      case "End":
        return move(last);
      case "PageDown":
        return move(active + 6);
      case "PageUp":
        return move(active - 6);
      case "Enter":
      case " ":
        e.preventDefault();
        return open ? choose(active) : show();
      case "Escape":
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        return;
      case "Tab":
        if (open) choose(active);
        return;
    }
    // typeahead: jump to the first option whose words start with what was typed
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      window.clearTimeout(typed.current.timer);
      typed.current.text += e.key.toLowerCase();
      typed.current.timer = window.setTimeout(() => (typed.current.text = ""), 600);
      const q = typed.current.text;
      const hit = all.findIndex((o) => o.label.toLowerCase().replace(/^(a|an) /, "").startsWith(q) || o.label.toLowerCase().startsWith(q));
      if (hit >= 0) {
        if (!open) show();
        setActive(hit);
      }
    }
  };

  let index = -1;
  return (
    // the chosen words are plain text (so they sit on the sentence's baseline and set the width); a transparent
    // button covers them and opens the list
    <span
      ref={rootRef}
      className={`relative inline-block max-w-full rounded-md align-baseline transition-colors duration-150 hover:bg-[var(--cyan)]/30 has-[:focus-visible]:bg-[var(--cyan)]/50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--link)] ${open ? "bg-[var(--cyan)]/40" : ""}`}
    >
      {/* no overflow clipping here: it would move the blank's baseline to its bottom edge */}
      <span aria-hidden className="block whitespace-nowrap pr-[0.95em] font-semibold text-[var(--link)]">
        {all[selected]?.label}
      </span>
      <button
        type="button"
        role="combobox"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-activedescendant={open ? `${id}-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        onKeyDown={onKeyDown}
        onBlur={() => setOpen(false)}
        className="absolute inset-0 h-full w-full cursor-pointer rounded-md opacity-0 focus:outline-none"
      >
        {all[selected]?.label}
      </button>
      <ChevronDown
        aria-hidden
        className={`pointer-events-none absolute bottom-[0.45em] right-[0.1em] h-[0.6em] w-[0.6em] text-[var(--link)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      />
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[0.12em] h-[2px] rounded-full bg-[var(--teal)]" />

      <AnimatePresence>
        {open && (
          <motion.span
            ref={listRef}
            id={`${id}-list`}
            role="listbox"
            aria-label={label}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: up ? 4 : -4 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.18, ease: EASE_OUT }}
            style={{ marginLeft: shift, transformOrigin: up ? "bottom left" : "top left" }}
            // keep focus on the button so the keyboard keeps working while the pointer picks
            onMouseDown={(e) => e.preventDefault()}
            className={`absolute left-0 z-40 block max-h-[min(15rem,45vh)] w-max min-w-full max-w-[min(20rem,calc(100vw-24px))] overflow-y-auto overscroll-contain rounded-2xl bg-[var(--surface)] p-1.5 text-left text-[0.95rem] font-medium leading-snug tracking-normal text-[var(--ink)] shadow-[0_24px_48px_-20px_rgba(1,28,64,0.35)] ring-1 ring-[var(--line)] ${up ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"}`}
          >
            {groups.map((g, gi) => (
              <span
                key={gi}
                role={g.label ? "group" : undefined}
                aria-labelledby={g.label ? `${id}-g${gi}` : undefined}
                className={`block ${gi > 0 ? "mt-1 border-t border-[var(--line)] pt-1" : ""}`}
              >
                {g.label && (
                  <span
                    id={`${id}-g${gi}`}
                    className="block px-3 pb-1 pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
                  >
                    {g.label}
                  </span>
                )}
                {g.options.map((o) => {
                  const i = ++index;
                  const isSelected = i === selected;
                  return (
                    <span
                      key={o.id}
                      id={`${id}-${i}`}
                      role="option"
                      aria-selected={isSelected}
                      onPointerMove={() => i !== active && setActive(i)}
                      onClick={() => choose(i)}
                      className={`flex cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-xl px-3 py-2 transition-colors duration-100 ${i === active ? "bg-[var(--cyan)]/35" : ""} ${isSelected ? "font-semibold text-[var(--link)]" : ""}`}
                    >
                      {o.label}
                      <Check aria-hidden className={`h-4 w-4 flex-none text-[var(--teal)] ${isSelected ? "" : "invisible"}`} />
                    </span>
                  );
                })}
              </span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/* ---------- a blank for typing ---------- */

function Blank({
  ref,
  label,
  width,
  error,
  value,
  onChange,
  ...rest
}: {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  width: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "width">) {
  return (
    <input
      ref={ref}
      aria-label={label}
      aria-invalid={!!error}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width }}
      className="inline-block max-w-full rounded-md border-0 border-b-2 border-[var(--teal)] bg-transparent p-0 align-baseline font-semibold text-[var(--ink)] [font-size:inherit] [letter-spacing:inherit] placeholder:font-medium placeholder:text-[var(--muted)]/50 focus:bg-[var(--cyan)]/30 focus:outline-none aria-[invalid=true]:border-red-500"
      {...rest}
    />
  );
}

/* ---------- the Google Maps preview ---------- */

/**
 * The search the visitor described, with their listing as the result we aim for. It starts third and climbs
 * to first, replaying whenever the sentence changes: the page's one choreographed moment.
 */
function MapsPreview() {
  const { brief } = useBrief();
  const { business, query, area } = useBriefLabels();
  const reduce = useReducedMotion();
  const [top, setTop] = useState(!!reduce);

  useEffect(() => {
    if (reduce) return setTop(true);
    setTop(false);
    const t = window.setTimeout(() => setTop(true), 700);
    return () => window.clearTimeout(t);
  }, [brief.business, brief.area, reduce]);

  const rows = top ? ["you", "a", "b"] : ["a", "b", "you"];
  const pin = area ? { x: area.x, y: area.y } : { x: 62, y: 52 };

  return (
    <figure className="mx-auto max-w-md overflow-hidden rounded-[24px] bg-[var(--surface)] shadow-[0_40px_80px_-40px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] lg:max-w-none">
      <figcaption className="sr-only">
        A Google Maps search for “{query}”, with your {business.noun} as the first result.
      </figcaption>
      <div aria-hidden>
        <div className="m-3 flex items-center gap-3 rounded-full bg-[var(--paper)] px-4 py-2.5 text-[0.95rem]">
          <Search className="h-4 w-4 flex-none text-[var(--muted)]" />
          <span className="truncate">{query}</span>
        </div>
        <div className="relative mx-3 hidden aspect-[5/2] overflow-hidden rounded-2xl bg-[#e5eef1] sm:block">
          <Lakes className="absolute inset-0 h-full w-full" lake="#bfdde6" road="rgba(1,28,64,0.08)" />
          <motion.span
            className="absolute -translate-x-1/2 -translate-y-full"
            animate={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            transition={{ duration: reduce ? 0 : 0.5, ease: EASE_OUT }}
          >
            <MapPin className="h-7 w-7 fill-[var(--cyan)] text-[var(--ink)]" />
          </motion.span>
          <span className="absolute left-[30%] top-[70%] h-2.5 w-2.5 rounded-full bg-[var(--muted)]/40" />
          <span className="absolute left-[80%] top-[28%] h-2.5 w-2.5 rounded-full bg-[var(--muted)]/40" />
        </div>
        <ol className="px-3 pb-2">
          {rows.map((r) => (
            <motion.li
              key={r}
              layout={!reduce}
              transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
              className="border-b border-[var(--line)] px-2 py-3 last:border-0"
            >
              {r === "you" ? (
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--ink)] text-xs font-bold text-[var(--cyan)]">
                    {top ? 1 : 3}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#1a0dab]">Your {business.noun}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm">
                      4.9
                      <span className="flex text-[#FBBC04]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </span>
                      <span className="text-[var(--muted)]">(214)</span>
                      <span className="text-[var(--muted)]">· Open now</span>
                    </p>
                    <div className="mt-2 flex gap-2 text-xs font-semibold text-[#1a73e8]">
                      {["Call", "WhatsApp", "Directions"].map((b) => (
                        <span key={b} className="rounded-full px-3 py-1 ring-1 ring-[var(--line)]">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 opacity-60">
                  <span className="mt-0.5 h-6 w-6 flex-none rounded-full bg-[var(--paper)]" />
                  <div className="flex-1 space-y-2 pt-1">
                    <span className={`block h-3 rounded-full bg-[var(--line-strong)] ${r === "a" ? "w-2/5" : "w-1/2"}`} />
                    <span className="block h-2.5 w-1/3 rounded-full bg-[var(--line)]" />
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
