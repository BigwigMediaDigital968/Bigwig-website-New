"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dubaiProcess, dubaiReasons } from "@/data/dubaiData";
import { PillLead, SectionHead, WhatsAppPill, fadeUp, inView, stagger } from "../ui";
import Timeline from "../ui/Timeline";
import { DUBAI_WHATSAPP_HREF } from "./DubaiHero";
import { BurjKhalifaLine, DubaiFrameLine } from "./Landmarks";
import { dubaiPhotos } from "./photos";

/** How we work (timeline), then why brands choose us: the navy panel laid over Dubai Marina at night. */
export default function DubaiApproach() {
  return (
    <>
      {/* extra bottom room on desktop: the landmark outlines stand on the section's floor, under the timeline */}
      <section className="relative isolate overflow-hidden py-24 md:py-32 lg:pb-56">
        <DubaiFrameLine className="pointer-events-none absolute -bottom-px right-[16%] -z-10 hidden h-[220px] w-auto text-[var(--ink)] opacity-[0.08] lg:block" />
        <BurjKhalifaLine className="pointer-events-none absolute -bottom-px right-[5%] -z-10 hidden h-[420px] w-auto text-[var(--ink)] opacity-[0.08] lg:block" />
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
        <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">
          <Image
            src={dubaiPhotos.marinaNight}
            alt=""
            fill
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="-z-20 object-cover object-[50%_60%]"
          />
          {/* the panel's own navy over the photo: lighter at the top so the skyline shows, solid behind the grid */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,28,64,0.72)_40%,rgba(1,28,64,0.86)_85%,rgba(1,28,64,0.94)_100%)]"
          />

          <div className="wrap">
            <SectionHead
              dark
              lead="Why BigWig"
              title="Why brands in the UAE choose us."
              actions={<WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark />}
            />

            {/* hairlines are cell rings, so the cells can stay translucent over the photo */}
            <motion.ul
              {...inView}
              variants={stagger(0.06, 0.15)}
              className="mt-14 grid overflow-hidden rounded-[24px] ring-1 ring-inset ring-white/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
            >
              {dubaiReasons.map((r, i) => (
                <motion.li
                  key={r.title}
                  variants={fadeUp}
                  className="flex min-h-[200px] flex-col gap-8 bg-[rgba(1,28,64,0.55)] p-7 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors duration-300 hover:bg-[rgba(2,56,89,0.75)] md:p-8"
                >
                  <span aria-hidden className="serif text-4xl leading-none text-[var(--cyan)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/75">{r.desc}</p>
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
