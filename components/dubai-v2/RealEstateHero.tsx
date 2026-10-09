"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import EnquiryForm from "../contact/EnquiryForm";
import { DUBAI_WHATSAPP_HREF } from "../dubai/DubaiHero";
import { EASE, EASE_IN_OUT, PillLink, WhatsAppPill, fadeUp, stagger } from "../ui";
import { photos } from "./content";

// non-breaking hyphen (U+2011) keeps "Empire-Grade" on one line on small screens
const lines = ["We Scale Empire‑Grade", "Real Estate & Luxury Brands."];

/**
 * Full-bleed night hero. On load the skyline settles from 1.05× to 1× while the copy rises out of masks,
 * the page's one orchestrated entrance. Listed in Nav's OVERLAY_PATHS so the nav floats over it.
 */
export default function RealEstateHero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[var(--night)] text-white lg:items-center"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        initial={reduce ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image src={photos.hero} alt="" fill priority sizes="100vw" className="object-cover object-[50%_55%]" />
      </motion.div>
      {/* deep navy mask: heaviest at the bottom and behind the copy */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,11,33,0.55)_0%,rgba(0,11,33,0.72)_45%,rgba(0,11,33,0.97)_100%)] lg:bg-[linear-gradient(100deg,rgba(0,11,33,0.96)_0%,rgba(0,11,33,0.8)_45%,rgba(0,11,33,0.35)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(to_top,var(--night),transparent)]"
      />

      <div className="wrap grid w-full gap-12 pb-16 pt-32 md:pb-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pt-28">
        <motion.div className="min-w-0 lg:col-span-7" initial="hidden" animate="show" variants={stagger(0.08, 0.35)}>
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.22em] text-[var(--cyan)]">
            <span aria-hidden>✦ </span>DUBAI REAL ESTATE PERFORMANCE MARKETING
          </motion.p>
          <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[clamp(2.6rem,3.6vw,3.5rem)]">
            {lines.map((l) => (
              <span key={l} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: "105%", opacity: 0 },
                    show: { y: "0%", opacity: 1, transition: { duration: 1, ease: EASE_IN_OUT } },
                  }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            High-converting websites, targeted social media campaigns, and top-ranking SEO for Dubai developers and
            brokerages.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#services" tone="cyan">
              Explore our services
            </PillLink>
            <WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-8 text-sm text-white/55">
            Trusted by Fortune Asia Realty, Riverfront and Mondus Properties.
          </motion.p>
        </motion.div>

        {/* the site's standard enquiry form, same as the main Dubai page */}
        <motion.div
          className="min-w-0 rounded-[28px] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7 lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
        >
          <p className="text-sm font-medium text-[var(--link)]">Send us a message</p>
          <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">Get a free consultation</h2>
          <div className="mt-5">
            <EnquiryForm source="dubai-v2-hero" defaultCountry="ae" compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
