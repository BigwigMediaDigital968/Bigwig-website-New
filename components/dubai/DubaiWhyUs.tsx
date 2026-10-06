"use client";

import { motion } from "framer-motion";
import { dubaiProcess, dubaiReasons } from "@/data/dubaiData";
import { PillLead, SectionHead, WhatsAppPill, fadeUp, inView, stagger } from "../ui";
import Timeline from "../ui/Timeline";
import { DUBAI_WHATSAPP_HREF } from "./DubaiHero";

/** How we work (timeline) followed by why brands choose us (navy panel). */
export default function DubaiWhyUs() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHead
            lead="Our process"
            title="From first call to sustainable growth."
            actions={<PillLead source="dubai-process">Start with a free consultation</PillLead>}
          />
          <Timeline steps={dubaiProcess} className="mt-16" />
        </div>
      </section>

      <section className="px-2 md:px-3">
        <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">
          <div className="wrap">
            <SectionHead
              dark
              lead="Why BigWig"
              title="Why brands in the UAE choose us."
              actions={<WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark />}
            />

            <motion.ul
              {...inView}
              variants={stagger(0.06, 0.15)}
              className="mt-14 grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
            >
              {dubaiReasons.map((r, i) => (
                <motion.li
                  key={r.title}
                  variants={fadeUp}
                  className="flex min-h-[200px] flex-col gap-8 bg-[var(--ink)] p-7 transition-colors duration-300 hover:bg-[var(--ink-2)] md:p-8"
                >
                  <span aria-hidden className="serif text-4xl leading-none text-[var(--cyan)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/70">{r.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
}
