"use client";

import { motion } from "framer-motion";
import { PillLead, Reveal, fadeUp, inView, maskUp, stagger } from "../ui";

export default function Story() {
  return (
    <section className="border-t border-[var(--line)] py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-5">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            The Bigwig story
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Building Brands That Win in the Digital Age
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-relaxed">
            <p>
              <span className="text-[var(--ink)]">
                At Bigwig Media Digital, we don’t just deliver marketing - we craft digital
                experiences that connect, convert, and create lasting impact.
              </span>{" "}
              Based in New Delhi, India, we are a full-stack Digital Marketing Powerhouse driven by
              Creative Thinkers, Strategic Planners, and Platform-Obsessed Specialists who live and
              breathe the online world.
            </p>
            <p>
              From the moment an algorithm shifts on Google, Instagram, YouTube, Facebook, or
              Twitter, Our Team is already two steps ahead. With more than Eight Years of
              deep-rooted expertise, we design integrated, data-powered strategies that help
              businesses grow, compete, and dominate their digital landscapes.
            </p>
          </div>
          <PillLead source="about-story" className="mt-10">
            Get in Touch
          </PillLead>
        </Reveal>
      </div>
    </section>
  );
}
