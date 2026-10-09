"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { EASE_OUT, SectionHead, focusRing } from "../ui";
import PlanButton from "./PlanButton";
import { playbooks } from "./content";

/**
 * The real-estate focus: one playbook per kind of property business, as ARIA tabs (arrow keys move between
 * them). Each playbook's CTA answers the planner's first question for the visitor.
 */
export default function Playbooks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const p = playbooks[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const last = playbooks.length - 1;
    const next =
      e.key === "ArrowRight"
        ? i === last
          ? 0
          : i + 1
        : e.key === "ArrowLeft"
          ? i === 0
            ? last
            : i - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="px-2 py-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            lead="Built for property"
            title="A playbook for how your property business sells."
          />

          <div
            role="tablist"
            aria-label="Property playbooks"
            className="mt-12 inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-[var(--paper)] p-1 ring-1 ring-inset ring-[var(--line)] md:mt-14"
          >
            {playbooks.map((pb, i) => {
              const on = i === active;
              return (
                <button
                  key={pb.id}
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
                  onKeyDown={(e) => onKey(e, i)}
                  className={`relative h-11 flex-none whitespace-nowrap rounded-full px-5 text-sm font-semibold cursor-pointer transition-colors duration-200 ease ${focusRing} ${
                    on
                      ? "text-white"
                      : "text-[var(--ink)] hover:text-[var(--link)]"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={`${uid}-pill`}
                      aria-hidden
                      className="absolute inset-0 -z-0 rounded-full bg-[var(--ink)]"
                      transition={{
                        type: "spring",
                        duration: 0.4,
                        bounce: 0.15,
                      }}
                    />
                  )}
                  <span className="relative">{pb.tab}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${active}`}
            className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-14"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[var(--paper)] lg:col-span-6">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={p.id}
                  className="absolute inset-0"
                  initial={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, transform: "scale(1.03)" }
                  }
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: EASE_OUT },
                  }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={p.id}
                className="lg:col-span-6 lg:self-center"
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, transform: "translateY(10px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.26, ease: EASE_OUT }}
              >
                <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[var(--muted)]">
                  {p.desc}
                </p>
                <ul className="mt-8 space-y-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
                <PlanButton
                  industry={p.id}
                  source={`playbook-${p.id}`}
                  className="mt-10"
                >
                  {p.cta}
                </PlanButton>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
