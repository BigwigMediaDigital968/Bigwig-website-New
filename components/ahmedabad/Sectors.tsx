"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin, Search } from "lucide-react";
import { EASE_OUT, focusRing } from "../ui";
import { sectors } from "./content";
import { KiteMark } from "./motifs";

/**
 * Ahmedabad's main kinds of business as tabs: where they are, what their customers search, what we do, and what
 * the monthly report shows. Arrow keys move between tabs.
 */
export default function Sectors() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();  const uid = useId();
  const s = sectors[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = sectors.length - 1;
    const to = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: last }[
      e.key
    ];
    if (to === undefined) return;
    e.preventDefault();
    const i = to < 0 ? last : to > last ? 0 : to;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <section id="sectors" className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <p className="text-[0.95rem] font-medium text-[var(--link)]">Who we work with</p>
        <h2 className="h-section mt-3 max-w-[22ch]">Built for how Ahmedabad does business.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="Kinds of business"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {sectors.map((x, i) => {
              const on = i === active;
              return (
                <button
                  key={x.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  id={`${uid}-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`${uid}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative flex-none cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 text-left text-sm font-semibold ring-1 ring-inset transition-colors duration-150 lg:rounded-none lg:border-b lg:border-[var(--line)] lg:px-0 lg:py-4 lg:text-lg lg:ring-0 ${focusRing} ${
                    on
                      ? "bg-[var(--ink)] text-white ring-[var(--ink)] lg:bg-transparent lg:text-[var(--ink)]"
                      : "text-[var(--muted)] ring-[var(--line)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`hidden h-2.5 w-2.5 rotate-45 rounded-[1px] transition-colors duration-150 lg:inline-block ${on ? "bg-[var(--teal)]" : "bg-[var(--line-strong)]"}`}
                    />
                    {x.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${active}`}
            className="rounded-[28px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)] sm:p-8 lg:col-span-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={s.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
              >
                <p className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--link)]" aria-hidden />
                  {s.where}
                </p>

                <h3 className="mt-6 text-sm font-semibold">What your customers type into Google</h3>
                <ul className="mt-3 grid gap-2">
                  {s.searches.map((q) => (
                    <li key={q} className="flex items-center gap-3 rounded-full bg-[var(--paper)] px-4 py-2.5 text-[0.95rem]">
                      <Search className="h-4 w-4 flex-none text-[var(--muted)]" aria-hidden />
                      <span className="truncate">{q}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-7 text-sm font-semibold">What we do</h3>
                <ul className="mt-3 space-y-2.5">
                  {s.we.map((w) => (
                    <li key={w} className="flex items-baseline gap-3 leading-relaxed">
                      <KiteMark className="translate-y-[-2px]" />
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[var(--muted)]">
                    <span className="font-semibold text-[var(--ink)]">In your monthly report: </span>
                    {s.monthly.join(" · ")}
                  </p>
                  <a
                    href="#enquire"
                    className={`inline-flex flex-none items-center gap-1.5 rounded-sm text-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}
                  >
                    Get a free plan
                    <ArrowDown className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
