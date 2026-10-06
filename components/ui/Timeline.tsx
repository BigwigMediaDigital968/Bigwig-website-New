"use client";

import { motion, type Variants } from "framer-motion";
import { EASE, EASE_IN_OUT } from ".";

// One trigger on the list: the rule draws left to right, each step follows the line.
const STEP = 0.18;
const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.2, ease: EASE_IN_OUT } },
};
const ruleDown: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.2, ease: EASE_IN_OUT } },
};
const step: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 + i * STEP, ease: EASE } }),
};
const dot: Variants = {
  hidden: { scale: 0 },
  show: (i: number) => ({ scale: 1, transition: { type: "spring", stiffness: 420, damping: 18, delay: 0.15 + i * STEP } }),
};

/** Numbered steps on a line: horizontal from md up, vertical on phones. Built for five steps. */
export default function Timeline({
  steps,
  className = "",
}: {
  steps: { title: string; desc: string }[];
  className?: string;
}) {
  return (
    <motion.ol
      className={`relative grid gap-10 md:grid-cols-5 md:gap-6 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* the line every step sits on (desktop) */}
      <motion.span
        aria-hidden
        variants={rule}
        style={{ transformOrigin: "left" }}
        className="absolute inset-x-0 top-[5px] hidden h-px bg-[var(--line-strong)] md:block"
      />
      {/* mobile: vertical line */}
      <motion.span
        aria-hidden
        variants={ruleDown}
        style={{ transformOrigin: "top" }}
        className="absolute bottom-0 left-[5px] top-0 w-px bg-[var(--line-strong)] md:hidden"
      />

      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-8 md:pl-0">
          <motion.span
            aria-hidden
            custom={i}
            variants={dot}
            className="absolute left-0 top-0 h-[11px] w-[11px] rounded-full bg-[var(--ink)] ring-4 ring-[var(--paper)] md:relative md:block"
          />
          <motion.div custom={i} variants={step} className="md:mt-8">
            <span className="serif block text-5xl leading-none text-[var(--teal)] md:text-6xl" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight md:text-xl">{s.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">{s.desc}</p>
          </motion.div>
        </li>
      ))}
    </motion.ol>
  );
}
