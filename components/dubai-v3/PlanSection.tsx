"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  MaskHeading,
  DUBAI_PHONE_DISPLAY as PHONE_DISPLAY,
  DUBAI_PHONE_HREF as PHONE_HREF,
  fadeUp,
  inView,
  stagger,
} from "../ui";
import Planner from "./Planner";

const youGet = [
  "The channels worth your budget, and how to split it",
  "Campaign and creative ideas for your projects",
  "A 30-day launch plan with clear next steps",
];

/**
 * A home for the planner: once straight after the hero and once to close the page. `id` names the copy for
 * analytics and focus; both copies share one set of answers.
 */
export default function PlanSection({
  id,
  sectionId,
  title,
  className = "",
}: {
  id: string;
  sectionId?: string;
  title: string;
  className?: string;
}) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-24 px-2 md:px-3 ${className}`}
    >
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            {...inView}
            variants={stagger(0.08)}
            className="lg:col-span-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-[0.95rem] font-medium text-[var(--link)]"
            >
              Free growth plan
            </motion.p>
            <MaskHeading className="h-section mt-3">{title}</MaskHeading>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]"
            >
              Four quick questions, about two minutes. Our digital marketing
              agency in Dubai sends back:
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-6 space-y-3.5">
              {youGet.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </motion.ul>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-sm text-[var(--muted)]"
            >
              Rather talk?{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-[var(--link)] hover:underline"
              >
                Call {PHONE_DISPLAY}
              </a>
            </motion.p>
          </motion.div>
          <div className="min-w-0 lg:col-span-7 xl:col-span-6 xl:col-start-7">
            <Planner id={id} />
          </div>
        </div>
      </div>
    </section>
  );
}
