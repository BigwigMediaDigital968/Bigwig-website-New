"use client";

import { motion } from "framer-motion";
import { PillLead, WhatsAppPill, fadeUp, inView, maskUp, stagger } from "../ui";

const reasons = [
  {
    title: "Built for the Modern Brand",
    desc: "We shape digital experiences that create visibility, value, and long-term impact.",
  },
  {
    title: "Powered by a Passionate Team",
    desc: "Strategists, creators, analysts & media experts working together to deliver excellence.",
  },
  {
    title: "A Strong Track Record",
    desc: "8+ years of transforming brands into industry leaders through digital innovation.",
  },
  {
    title: "Trusted by Leading Brands",
    desc: "Our clientele spans industries like eCommerce, retail, tech, events, and more.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-[var(--line)] py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-5">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Why we’re the right partner
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Digital Excellence, Delivered Consistently
              </motion.span>
            </span>
          </h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            We believe in going beyond the conventional. Every project we take on is powered by
            insight, creativity, and performance-driven execution.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillLead source="about-why-us">Book a free consultation</PillLead>
            <WhatsAppPill />
          </motion.div>
        </motion.div>

        <motion.ul
          {...inView}
          variants={stagger(0.1, 0.15)}
          className="grid gap-2 sm:grid-cols-2 lg:col-span-7"
        >
          {reasons.map((r) => (
            <motion.li
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 22 } }}
              className="flex min-h-[220px] flex-col justify-between rounded-[24px] bg-[var(--surface)] p-7 md:p-8"
            >
              <span aria-hidden className="h-2 w-8 rounded-full bg-[var(--cyan)]" />
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{r.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
