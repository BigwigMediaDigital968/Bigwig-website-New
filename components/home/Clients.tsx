"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clientLogos } from "@/data/homeData";
import { PillLink, fadeUp, inView, maskUp, scaleIn, stagger } from "../ui";

export default function Clients() {
  const ref = useRef<HTMLElement>(null);
  // The navy panel opens out to full width as it scrolls into view
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 32]);

  return (
    <section ref={ref} className="px-2 md:px-3">
      <motion.div style={{ scale, borderRadius: radius }} className="bg-[var(--ink)] py-20 text-white md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-5">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
              Brands that believe in what we build
            </motion.p>
            <h2 className="h-section mt-3">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  Our Clientele
                </motion.span>
              </span>
            </h2>
            <motion.div variants={fadeUp} className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                As a trusted digital marketing agency in Delhi, we’ve partnered with brands across
                industries to deliver measurable growth and strong digital presence.
              </p>
              <p>
                These logos represent businesses that chose the best digital marketing agency in
                Delhi to scale their visibility, leads, and revenue through strategic online
                marketing solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <PillLink href="/clients" tone="cyan" className="mt-9">
                View All Clients
              </PillLink>
            </motion.div>
          </motion.div>

          <motion.ul
            {...inView}
            variants={stagger(0.08, 0.2)}
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:col-span-7"
            aria-label="Client logos"
          >
            {clientLogos.map((src) => (
              <motion.li
                key={src}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className="flex aspect-[3/2] items-center justify-center rounded-[20px] bg-white p-6 md:p-8"
              >
                <img src={src} alt="" loading="lazy" draggable={false} className="max-h-14 w-full object-contain" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
