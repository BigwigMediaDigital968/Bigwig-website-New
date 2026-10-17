"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE, PillLink, WhatsAppPill, fadeUp, maskUp, stagger, whatsappHref } from "../ui";
import EnquiryForm from "../contact/EnquiryForm";

/**
 * Photo hero for /industries/* pages, which are not in Nav's OVERLAY_PATHS, so the nav is a solid sticky bar.
 * The hero slides up behind that bar (-mt) so no page-coloured strip shows above the photo, and grows with
 * the enquiry form instead of clipping it. Same look as components/service/ServiceHero.
 */
export default function IndustryHero({
  image,
  lead,
  title,
  intro,
  cta,
  whatsappMessage,
  formSource,
  formServices,
}: {
  image: StaticImageData;
  lead: string;
  title: string;
  intro: React.ReactNode;
  cta: { label: string; href: string };
  whatsappMessage?: string;
  formSource: string;
  formServices?: string[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate -mt-[5.5rem] flex overflow-hidden bg-[var(--ink)] text-white lg:min-h-[100svh] lg:items-center"
    >
      <motion.div aria-hidden className="absolute inset-0 -z-20" style={reduce ? undefined : { scale: imageScale, y: imageY }}>
        <Image src={image} alt="" fill priority sizes="100vw" placeholder="blur" className="object-contain" />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,28,64,0.82)_0%,rgba(1,28,64,0.92)_100%)] lg:bg-[linear-gradient(100deg,rgba(1,28,64,0.88)_0%,rgba(1,28,64,0.4)_45%,rgba(2,56,89,0.4)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.6),transparent_40%)]" />

      {/* top padding clears the nav bar the hero slides under */}
      <div className="wrap grid w-full gap-12 pb-16 pt-32 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-28">
        <motion.div className="min-w-0 lg:col-span-7" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
            {lead}
          </motion.p>
          <h1 className="mt-4 max-w-2xl text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[clamp(3rem,2.6vw,2.5rem)]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                {title}
              </motion.span>
            </span>
          </h1>
          <motion.div variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {intro}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <PillLink href={cta.href} tone="cyan">
              {cta.label}
            </PillLink>
            <WhatsAppPill href={whatsappMessage ? whatsappHref(whatsappMessage) : undefined} dark />
          </motion.div>
        </motion.div>

        <motion.div
          className="min-w-0 rounded-[28px] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7 lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <p className="text-sm font-medium text-[var(--link)]">Send us a message</p>
          <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">Get in Touch</h2>
          <div className="mt-5">
            <EnquiryForm source={formSource} defaultServices={formServices} compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
