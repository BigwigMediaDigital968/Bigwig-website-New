"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import { usePlanner } from "./Planner";
import { sectors } from "./content";

/**
 * Everyone who isn't in property. Each sector is a button that answers the planner's first question and
 * takes the visitor straight to the second.
 */
export default function Sectors() {
  const { goTo } = usePlanner();

  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead="Beyond real estate"
          title="Not in property? The same lead engine works for you."
        />

        <motion.ul
          {...inView}
          variants={stagger(0.05)}
          className="mt-12 grid border-t border-[var(--line)] sm:grid-cols-2 md:mt-14 lg:grid-cols-3"
        >
          {sectors.map((s) => (
            <motion.li
              key={s.id}
              variants={fadeUp}
              className="border-b border-[var(--line)] sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <button
                type="button"
                onClick={() =>
                  goTo({ industry: s.id, source: `dubai-v3-sector-${s.id}` })
                }
                className={`group flex h-full w-full items-start justify-between gap-6 px-1 py-7 text-left cursor-pointer transition-colors duration-200 ease hover:bg-[var(--surface)] sm:px-6 ${focusRing}`}
              >
                <span>
                  <span className="block text-xl font-semibold tracking-tight">
                    {s.name}
                  </span>
                  <span className="mt-1.5 block text-[var(--muted)]">
                    {s.desc}
                  </span>
                  <span className="sr-only">: start a growth plan</span>
                </span>
                <span
                  aria-hidden
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-[background-color,color,transform] duration-200 ease-[var(--ease-out)] group-hover:rotate-45 group-hover:bg-[var(--ink)] group-hover:text-[var(--cyan)]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
