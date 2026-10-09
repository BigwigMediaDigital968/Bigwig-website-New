"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PillLead, SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import { industries } from "./content";

/**
 * Three tall cards. On desktop the active one widens (real estate starts open) and the others collapse to a
 * title; hover, focus or click switches. On smaller screens every card is open and stacked.
 */
export default function RealEstateIndustries() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Industries"
          title="Sector expertise, led by real estate."
          actions={<PillLead source="dubai-v2-industries">Talk to a sector specialist</PillLead>}
        />

        <motion.ul {...inView} variants={stagger(0.1, 0.1)} className="mt-14 grid gap-3 md:mt-16 lg:flex lg:h-[560px]">
          {industries.map((ind, i) => {
            const open = active === i;
            return (
              <motion.li
                key={ind.name}
                variants={fadeUp}
                data-open={open}
                onMouseEnter={() => setActive(i)}
                className="group relative isolate min-h-[420px] overflow-hidden rounded-[28px] bg-[var(--ink)] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none lg:min-h-0 lg:flex-1 lg:data-[open=true]:flex-[2.6]"
              >
                <Image
                  src={ind.img}
                  alt={ind.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="-z-20 object-cover transition-transform duration-[1200ms] ease-out group-data-[open=true]:scale-105 motion-reduce:transition-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,11,33,0.94)_0%,rgba(0,11,33,0.55)_45%,rgba(0,11,33,0.15)_100%)]"
                />

                {/* the button covers the card so it's reachable by keyboard and tap */}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={open}
                  className={`absolute inset-0 z-10 hidden rounded-[28px] cursor-pointer lg:block ${focusRing}`}
                >
                  <span className="sr-only">{ind.name}</span>
                </button>

                <div className="flex h-full flex-col justify-end p-7 text-white md:p-9">
                  {i === 0 && (
                    <span className="mb-4 self-start rounded-full bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                      Primary focus
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                    <span className="lg:hidden lg:group-data-[open=true]:inline">{ind.name}</span>
                    <span className="hidden lg:inline lg:group-data-[open=true]:hidden">{ind.short}</span>
                  </h3>
                  {/* details: always shown when stacked; on desktop only on the open card */}
                  <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-data-[open=true]:grid-rows-[1fr] lg:group-data-[open=true]:opacity-100">
                    <div className="min-h-0 overflow-hidden">
                      <p className="mt-3 max-w-md leading-relaxed text-white/80">{ind.desc}</p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {ind.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-[0.95rem] text-white/90">
                            <Check className="h-4 w-4 flex-none text-[var(--cyan)]" aria-hidden />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
