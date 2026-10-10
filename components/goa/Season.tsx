"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { EASE_OUT, focusRing } from "../ui";
import { MONTHS, phases, type Phase } from "./content";

/** fill for each kind of month on the strip */
const TONE: Record<Phase["tone"], string> = {
  peak: "bg-[var(--ochre)]",
  shoulder: "bg-[#e6d3a8]",
  // rain: fine diagonal lines over the site's link blue
  monsoon: "bg-[var(--link)] bg-[repeating-linear-gradient(115deg,transparent_0_7px,rgba(255,255,255,0.25)_7px_8px)]",
  build: "bg-[var(--teal)]",
};

const phaseOf = (month: number) => phases.find((p) => p.months.includes(month)) ?? phases[0];

/**
 * Goa's year as one strip of twelve months, coloured by season, with what we do in each. Choosing a season
 * (the buttons, or a month on the strip) shows its plan. It opens on the season we're in now.
 */
export default function Season() {
  const [active, setActive] = useState(phases[0].id);
  const [now, setNow] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // the current month is only known in the browser
  useEffect(() => {
    const m = new Date().getMonth();
    setNow(m);
    setActive(phaseOf(m).id);
  }, []);

  const phase = phases.find((p) => p.id === active) ?? phases[0];

  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05] lg:col-span-6">
            Goa runs on seasons. So does our plan.
          </h2>
          <p className="max-w-[48ch] text-[var(--muted)] lg:col-span-5 lg:col-start-8">
            Most of your year is decided between October and March. We plan the whole year around it,
            including the quiet months.
          </p>
        </div>

        {/* season picker */}
        <div role="group" aria-label="Seasons" className="mt-10 flex flex-wrap gap-2">
          {phases.map((p) => {
            const on = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(p.id)}
                className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors duration-200 ease cursor-pointer ${focusRing} ${
                  on ? "bg-[var(--ink)] text-white" : "bg-[var(--surface)] ring-1 ring-inset ring-[var(--line)] hover:ring-[var(--line-strong)]"
                }`}
              >
                <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${TONE[p.tone]}`} />
                {p.name}
              </button>
            );
          })}
        </div>

        {/* the strip: a picture of the year, mouse shortcut to the buttons above */}
        <div aria-hidden className="mt-6 grid grid-cols-6 gap-x-1 gap-y-3 sm:grid-cols-12">
          {MONTHS.map((m, i) => {
            const p = phaseOf(i);
            const on = p.id === active;
            return (
              <button
                key={m}
                type="button"
                tabIndex={-1}
                onClick={() => setActive(p.id)}
                className="group relative cursor-pointer pt-6 text-left"
              >
                {now === i && (
                  <span className="absolute left-0 top-0 whitespace-nowrap text-xs font-semibold text-[var(--ink)]">
                    Now
                  </span>
                )}
                <span
                  className={`block h-9 rounded-md transition-[opacity,transform] duration-300 ease-[var(--ease-out)] sm:h-12 ${TONE[p.tone]} ${
                    on ? "opacity-100" : "opacity-45 group-hover:opacity-75"
                  } ${now === i ? "ring-2 ring-[var(--ink)] ring-offset-2 ring-offset-[var(--paper)]" : ""}`}
                />
                <span className={`mt-2 block text-xs ${on ? "font-semibold text-[var(--ink)]" : "text-[var(--ink)]/70"}`}>
                  {m}
                </span>
              </button>
            );
          })}
        </div>

        {/* the plan for the chosen season */}
        <div className="mt-8 min-h-[13rem] rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)] md:p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={phase.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(8px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="grid gap-6 md:grid-cols-12 md:gap-10"
              aria-live="polite"
            >
              <div className="md:col-span-5">
                <p className="text-sm text-[var(--muted)]">
                  {MONTHS[phase.months[0]]} to {MONTHS[phase.months[phase.months.length - 1]]}
                </p>
                <h3 className="serif mt-1 text-3xl leading-tight">{phase.name}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{phase.what}</p>
              </div>
              <ul className="space-y-3 md:col-span-7 md:self-center">
                {phase.we.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span aria-hidden className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--ink)] text-[var(--ochre)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
