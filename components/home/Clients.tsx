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
            {clientLogos.map((c) => {
              const inner = `flex h-full w-full items-center justify-center rounded-[20px] ${c.tile ? "p-1 md:p-2" : "p-6 md:p-8"}`;
              const logo = (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.tile ?? c.img}
                  alt={c.name}
                  loading="lazy"
                  draggable={false}
                  className={c.tile ? "h-full w-full object-contain" : "max-h-14 w-full object-contain"}
                />
              );
              return (
                <motion.li
                  key={c.name}
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                  // light logos sit on a navy card with a thin ring so it still reads as a card on the navy panel
                  className={`aspect-[3/2] rounded-[20px] transition-shadow duration-300 hover:shadow-[0_20px_40px_-18px_rgba(0,0,0,0.6)] ${
                    c.square === "navy" ? "bg-[var(--ink-2)] ring-1 ring-inset ring-white/15" : "bg-white"
                  }`}
                >
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      title={c.name}
                      className={`${inner} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]`}
                    >
                      {logo}
                      <span className="sr-only">(opens {c.name} website in a new tab)</span>
                    </a>
                  ) : (
                    <div className={inner}>{logo}</div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
