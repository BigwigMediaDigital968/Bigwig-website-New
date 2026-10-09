"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "../contact/EnquiryForm";
import { fadeUp, inView, maskUp, stagger } from "../ui";
import { photos } from "./content";

/** Closing hook: the site's standard enquiry form in a floating card over the night skyline. */
export default function RealEstateCta() {
  return (
    <section id="contact" className="mt-2 scroll-mt-24 px-2 md:mt-3 md:px-3">
      <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--night)] px-4 py-24 text-white md:py-32">
        <Image
          src={photos.nightSkyline}
          alt=""
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(0,11,33,0.55),rgba(0,11,33,0.9)_100%)]"
        />

        <motion.div {...inView} variants={stagger(0.1)} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
            Free consultation
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Ready to scale your next launch?
              </motion.span>
            </span>
          </h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Tell us about your project and we’ll get back to you with a plan across your website, search and social.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 max-w-2xl rounded-[28px] bg-[var(--surface)] p-6 text-left text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:p-8"
          >
            <EnquiryForm source="dubai-v2-cta" defaultCountry="ae" compact />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
