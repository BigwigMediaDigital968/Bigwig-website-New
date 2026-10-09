"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PillLead, SectionHead, fadeUp, inView, stagger } from "../ui";
import { industries } from "./content";

// Tile placement on the 4-column desktop grid: one large tile, then a mix of wide and square ones.
const PLACEMENT = ["lg:col-span-2 lg:row-span-2", "lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2"];

/** Industries we grow in the UAE, as a photo mosaic. */
export default function DubaiIndustries() {
  return (
    <section id="industries" className="scroll-mt-24 pt-24 md:pt-32">
      <div className="wrap">
        <SectionHead
          lead="Industries we grow in the UAE"
          title="Marketing shaped by how your sector sells."
          actions={<PillLead source="dubai-industries">Talk to a sector specialist</PillLead>}
        />

        <motion.ul
          {...inView}
          variants={stagger(0.07, 0.1)}
          className="mt-14 grid auto-rows-[300px] gap-3 sm:grid-cols-2 md:mt-16 lg:auto-rows-[260px] lg:grid-cols-4"
        >
          {industries.map((ind, i) => (
            <motion.li
              key={ind.name}
              variants={fadeUp}
              className={`group relative isolate overflow-hidden rounded-[24px] bg-[var(--ink)] ${PLACEMENT[i] ?? ""} ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={ind.img}
                alt={ind.alt}
                fill
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                }
                className="-z-20 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.92)_0%,rgba(1,28,64,0.45)_45%,rgba(1,28,64,0.05)_75%)]"
              />
              <div className="flex h-full flex-col justify-end p-6 text-white md:p-7">
                <h3
                  className={`font-semibold leading-tight tracking-tight ${i === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}
                >
                  {ind.name}
                </h3>
                <p
                  className={`mt-2 leading-relaxed text-white/80 ${i === 0 ? "max-w-md text-lg" : "max-w-xs text-[0.95rem]"}`}
                >
                  {ind.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
