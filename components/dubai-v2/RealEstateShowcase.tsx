"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PillLead, SectionHead, fadeUp, inView, stagger } from "../ui";
import { showcase } from "./content";

/** Bento / masonry gallery of the kind of work we build. Tiles stagger in on scroll and zoom on hover. */
export default function RealEstateShowcase() {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            lead="Showcase"
            title="Campaigns, websites and rankings for Dubai property."
            actions={<PillLead source="dubai-v2-showcase">Get work like this</PillLead>}
          />
          <motion.p
            {...inView}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            A look at the kind of creative, web and search work we build for developers and brokerages.
          </motion.p>

          <motion.ul
            {...inView}
            variants={stagger(0.06, 0.1)}
            className="mt-14 grid auto-rows-[300px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,230px)]"
          >
            {showcase.map((s) => (
              <motion.li
                key={s.title}
                variants={fadeUp}
                className={`group relative isolate overflow-hidden rounded-[24px] bg-[var(--ink)] ${s.layout}`}
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes={s.sizes}
                  className="-z-20 object-cover transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.04] motion-reduce:transition-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,11,33,0.88)_0%,rgba(0,11,33,0.25)_50%,transparent_75%)]"
                />
                <div className="flex h-full flex-col justify-end p-6 text-white md:p-7">
                  <span className="self-start rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight md:text-2xl">{s.title}</h3>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
