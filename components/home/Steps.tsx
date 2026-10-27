"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { processSteps } from "@/data/homeData";
import { PillLead, SectionHead } from "../ui";

// Each stage stands taller than the last: the process drawn as a growth chart.
const HEIGHTS = [44, 58, 72, 86, 100]; // % of the chart height (desktop)
const WIDTHS = [64, 73, 82, 91, 100]; // % of the row width (mobile)
const FILLS = [
  { bg: "#ffffff", fg: "var(--ink)", sub: "var(--muted)" },
  { bg: "#dbf4f7", fg: "var(--ink)", sub: "var(--muted)" },
  { bg: "var(--cyan)", fg: "var(--ink)", sub: "rgba(1,28,64,0.72)" },
  { bg: "var(--teal)", fg: "var(--ink)", sub: "rgba(1,28,64,0.8)" },
  { bg: "var(--ink)", fg: "#ffffff", sub: "rgba(255,255,255,0.72)" },
];

const EASE = [0.65, 0, 0.35, 1] as const;
const BARS_START = 0.35; // after the heading has started its own reveal
const BAR_STAGGER = 0.12;
const LINE_START = BARS_START + 0.7;

// Trend line through the bar tops (x at each column centre, y just above the bar)
const LINE = HEIGHTS.map((h, i) => `${10 + i * 20},${100 - h - 4}`).join(" ");

// All pieces run off one trigger on the <section>; `custom` is the step index.
const barUp: Variants = {
  hidden: { scaleY: 0 },
  show: (i: number) => ({
    scaleY: 1,
    transition: { duration: 0.9, delay: BARS_START + i * BAR_STAGGER, ease: EASE },
  }),
};
const barRight: Variants = {
  hidden: { scaleX: 0 },
  show: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.9, delay: BARS_START + i * BAR_STAGGER, ease: EASE },
  }),
};
const barContent: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: BARS_START + 0.45 + i * BAR_STAGGER },
  }),
};
const lineDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, delay: LINE_START, ease: EASE },
  },
};
const dotPop: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 18, delay: LINE_START + 0.1 + i * 0.2 },
  }),
};

const hoverLift = { y: -10, transition: { type: "spring" as const, stiffness: 320, damping: 20 } };

export default function Steps() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="py-18"
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      // fires as soon as the top of the section is on screen
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="wrap">
        <SectionHead
          lead="How we work"
          title={
            <>
              A Journey That Builds Brands, <br className="hidden md:block" />
              Step by Step
            </>
          }
          actions={<PillLead source="process-steps">Start with a free strategy session</PillLead>}
        />

        {/* Desktop: rising bars */}
        <div className="relative mt-16 hidden h-[560px] md:block">
          <ol className="grid h-full grid-cols-5 items-end gap-3">
            {processSteps.map((s, i) => {
              const f = FILLS[i];
              return (
                <motion.li
                  key={s.num}
                  custom={i}
                  variants={barUp}
                  whileHover={hoverLift}
                  style={{ height: `${HEIGHTS[i]}%`, background: f.bg, color: f.fg, transformOrigin: "bottom" }}
                  className={`flex flex-col justify-between rounded-[24px] p-6 lg:p-7 ${i === 0 ? "ring-1 ring-inset ring-[var(--line)]" : ""}`}
                >
                  <motion.span custom={i} variants={barContent} className="serif text-6xl leading-none lg:text-7xl" aria-hidden>
                    {s.num}
                  </motion.span>
                  <motion.div custom={i} variants={barContent}>
                    <h3 className="text-lg font-semibold leading-snug tracking-tight lg:text-xl">
                      <span className="sr-only">Step {s.num}: </span>
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: f.sub }}>
                      {s.desc}
                    </p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>

          {/* trend line, drawn after the bars rise */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <motion.polyline
              points={LINE}
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              variants={lineDraw}
            />
          </svg>
          {HEIGHTS.map((h, i) => (
            <motion.span
              key={i}
              aria-hidden
              custom={i}
              variants={dotPop}
              className="absolute h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[var(--ink)] bg-[var(--paper)]"
              style={{ left: `${10 + i * 20}%`, bottom: `${h + 4}%` }}
            />
          ))}
        </div>

        {/* Mobile: widening rows */}
        <ol className="mt-12 space-y-2 md:hidden">
          {processSteps.map((s, i) => {
            const f = FILLS[i];
            return (
              <motion.li
                key={s.num}
                custom={i}
                variants={barRight}
                style={{ width: `${WIDTHS[i]}%`, background: f.bg, color: f.fg, transformOrigin: "left" }}
                className={`rounded-[20px] p-5 ${i === 0 ? "ring-1 ring-inset ring-[var(--line)]" : ""}`}
              >
                <motion.div custom={i} variants={barContent}>
                  <span className="serif block text-4xl leading-none" aria-hidden>
                    {s.num}
                  </span>
                  <h3 className="mt-3 font-semibold leading-snug">
                    <span className="sr-only">Step {s.num}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: f.sub }}>
                    {s.desc}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.section>
  );
}
