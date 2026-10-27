"use client";

import { cases } from "@/data/homeData";
import { motion } from "framer-motion";
import { EASE, PillLead, SectionHead, fadeUp, inView, scaleIn, stagger, wipeUp } from "../ui";

export default function CaseStudies() {
  return (
    <section className="border-t border-[var(--line)] py-18">
      <div className="wrap">
        <SectionHead
          lead="Why businesses trust our digital marketing agency in Delhi"
          title="Creative intelligence powering real growth"
          actions={<PillLead source="case-studies">Get a free strategy session</PillLead>}
        />

        <motion.div {...inView} variants={stagger(0.15)} className="-mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {cases.map((c) => (
            <motion.article key={c.title} variants={stagger(0.12)} className="group w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
              <motion.div variants={wipeUp} className="relative overflow-hidden rounded-[24px] bg-[var(--ink)]">
                <div className="transition-transform duration-700 group-hover:scale-[1.04]">
                <motion.img
                  variants={{ hidden: { scale: 1.25 }, show: { scale: 1, transition: { duration: 1.4, ease: EASE } } }}
                  src={c.image}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="aspect-[16/9] w-full object-cover"
                />
                </div>
                <motion.ul variants={stagger(0.08, 0.6)} className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5" aria-label="Services used">
                  {c.tags.map((tag) => (
                    <motion.li variants={scaleIn} key={tag} className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--ink)] backdrop-blur">
                      {tag}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.h3 variants={fadeUp} className="mt-6 text-xl font-semibold leading-snug tracking-tight md:text-[1.4rem]">{c.title}</motion.h3>
              <motion.p variants={fadeUp} className="mt-2 leading-relaxed text-[var(--muted)]">{c.description}</motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
