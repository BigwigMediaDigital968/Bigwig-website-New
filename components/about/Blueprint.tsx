"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_IN_OUT, PillLead, SectionHead } from "../ui";

const stages = [
  {
    title: "Understanding the Landscape",
    desc: "We analyze markets, competition, and audience behavior to uncover real opportunities.",
  },
  {
    title: "Strategic Blueprinting",
    desc: "We map clear, data-led directions that align with your brand’s objectives.",
  },
  {
    title: "Creative Engineering",
    desc: "Concepts turn into compelling visuals, content, and experiences.",
  },
  {
    title: "Precision Deployment",
    desc: "Campaigns go live with tactical execution across chosen platforms.",
  },
  {
    title: "Optimization & Evolution",
    desc: "We track, refine, and scale because great performance should never plateau.",
  },
];

// One trigger on the list: the rule draws left to right, each stage follows the line.
const STEP = 0.18;
const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.2, ease: EASE_IN_OUT } },
};
const stage: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 + i * STEP, ease: [0.2, 0.7, 0.2, 1] } }),
};
const dot: Variants = {
  hidden: { scale: 0 },
  show: (i: number) => ({ scale: 1, transition: { type: "spring", stiffness: 420, damping: 18, delay: 0.15 + i * STEP } }),
};

export default function Blueprint() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Our blueprint for success"
          title="Turning smart ideas into measurable outcomes."
          actions={<PillLead source="about-blueprint">Start with a free strategy session</PillLead>}
        />

        <motion.ol
          className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* the line all five stages sit on (desktop) */}
          <motion.span
            aria-hidden
            variants={rule}
            style={{ transformOrigin: "left" }}
            className="absolute inset-x-0 top-[5px] hidden h-px bg-[var(--line-strong)] md:block"
          />
          {/* mobile: vertical line */}
          <motion.span
            aria-hidden
            variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 1.2, ease: EASE_IN_OUT } } }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-0 left-[5px] top-0 w-px bg-[var(--line-strong)] md:hidden"
          />

          {stages.map((s, i) => (
            <li key={s.title} className="relative pl-8 md:pl-0">
              <motion.span
                aria-hidden
                custom={i}
                variants={dot}
                className="absolute left-0 top-0 h-[11px] w-[11px] rounded-full bg-[var(--ink)] ring-4 ring-[var(--paper)] md:relative md:block"
              />
              <motion.div custom={i} variants={stage} className="md:mt-8">
                <span className="serif block text-5xl leading-none text-[var(--teal)] md:text-6xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight md:text-xl">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">{s.desc}</p>
              </motion.div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
