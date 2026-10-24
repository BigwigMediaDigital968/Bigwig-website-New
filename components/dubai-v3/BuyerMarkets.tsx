"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, SectionHead } from "../ui";
import PlanButton from "./PlanButton";
import { buyerMarkets } from "./content";

/** longest bar spans the track; the rest scale against it */
const MAX = Math.max(...buyerMarkets.map((m) => m.share));

/**
 * Where Dubai's international buyers come from, as one teal bar per market with the value printed beside it
 * (single series, so no legend). Bars grow from the left edge once when scrolled into view.
 */
export default function BuyerMarkets() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            lead="Who’s buying"
            title="Your next buyer probably isn’t in Dubai yet."
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            Most international buyers come from a handful of markets. Our digital
            marketing agency in Dubai plans campaigns around them: their
            platforms, their time zones, and the questions they ask before they
            fly in for a viewing.
          </p>
          <PlanButton source="buyer-markets" className="mt-8">
            Target my buyers
          </PlanButton>
        </div>

        <figure className="rounded-[28px] bg-[var(--surface)] p-7 ring-1 ring-[var(--line)] md:p-10 lg:col-span-7">
          <figcaption className="text-sm text-[var(--muted)]">
            Share of international property purchases in Dubai, early 2026
            (source: Khaleej Times)
          </figcaption>
          <ul className="mt-7 space-y-5">
            {buyerMarkets.map((m, i) => (
              <li
                key={m.country}
                className="grid grid-cols-[7rem_1fr_3.5rem] items-center gap-4 sm:grid-cols-[9.5rem_1fr_4rem]"
              >
                <span className="text-[0.95rem] font-medium">{m.country}</span>
                <span
                  className="h-3 overflow-hidden rounded-full bg-[var(--paper)]"
                  aria-hidden
                >
                  <span
                    className="block h-full"
                    style={{ width: `${(m.share / MAX) * 100}%` }}
                  >
                    <motion.span
                      className="block h-full origin-left rounded-full bg-[var(--teal)]"
                      initial={reduce ? false : { transform: "scaleX(0)" }}
                      whileInView={{ transform: "scaleX(1)" }}
                      viewport={{ once: true, margin: "-15% 0px" }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + i * 0.07,
                        ease: EASE_OUT,
                      }}
                    />
                  </span>
                </span>
                <span className="serif text-right text-2xl leading-none tabular-nums">
                  {m.share}%
                </span>
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}
