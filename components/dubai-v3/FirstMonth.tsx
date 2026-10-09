"use client";

import { motion } from "framer-motion";
import { SectionHead, fadeUp, inView, stagger } from "../ui";
import { firstMonth } from "./content";

/** What happens after someone sends the planner: a short, dated timeline that makes the next step concrete. */
export default function FirstMonth() {
  return (
    <section className="px-2 py-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            lead="After you send your plan"
            title="Your first 30 days with us."
          />

          <motion.ol
            {...inView}
            variants={stagger(0.09)}
            className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-8"
          >
            {firstMonth.map((s, i) => (
              <motion.li
                key={s.title}
                variants={fadeUp}
                className="relative pt-8"
              >
                {/* the timeline: a rule with a dot per milestone, the last one filled */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-[var(--line-strong)]"
                />
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-3 w-3 -translate-y-1/2 rounded-full ring-4 ring-[var(--surface)] ${
                    i === firstMonth.length - 1
                      ? "bg-[var(--teal)]"
                      : "bg-[var(--ink)]"
                  }`}
                />
                <p className="serif text-4xl leading-none text-[var(--teal)]">
                  {s.when}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">
                  {s.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
