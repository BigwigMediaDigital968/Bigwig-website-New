"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE, PillLink, WhatsAppPill, fadeUp, maskUp, stagger, whatsappHref } from "../ui";
import EnquiryForm from "../contact/EnquiryForm";

export type HeroFact = { value: string; label: string; small?: boolean };

/**
 * Full-screen photo hero with the enquiry form floating on the right. The page must be listed in
 * Nav's OVERLAY_PATHS so the nav floats over the photo. From lg up, copy and form fit one screen.
 */
export default function ServiceHero({
  image,
  lead,
  title,
  intro,
  cta,
  whatsappMessage,
  facts,
  formSource,
  formCountry,
  formServices,
}: {
  image: StaticImageData;
  lead: string;
  title: string;
  intro: React.ReactNode;
  /** label of the button that links to /contact, or a label and a link of its own */
  cta: string | { label: string; href: string };
  /** pre-filled WhatsApp text; the site-wide default when omitted */
  whatsappMessage?: string;
  facts?: HeroFact[];
  formSource: string;
  formCountry?: string;
  formServices?: string[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // photo slowly zooms and drifts as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex overflow-hidden bg-[var(--ink)] text-white lg:h-[100svh] lg:min-h-[700px] lg:max-h-[980px] lg:items-center"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={reduce ? undefined : { scale: imageScale, y: imageY }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" placeholder="blur" className="object-cover" />
      </motion.div>
      {/* navy wash, darker behind the copy (left on desktop, everywhere on phones) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,28,64,0.82)_0%,rgba(1,28,64,0.92)_100%)] lg:bg-[linear-gradient(100deg,rgba(1,28,64,0.94)_0%,rgba(1,28,64,0.78)_45%,rgba(2,56,89,0.4)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.6),transparent_40%)]"
      />

      {/* top padding clears the floating nav */}
      <div className="wrap grid w-full gap-12 pb-16 pt-28 md:pt-32 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-10 lg:pt-24">
        <motion.div className="min-w-0 lg:col-span-7" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
            {lead}
          </motion.p>
          <h1 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[clamp(2.5rem,3.2vw,3rem)]">
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
            <PillLink href={typeof cta === "string" ? "/contact" : cta.href} tone="cyan">
              {typeof cta === "string" ? cta : cta.label}
            </PillLink>
            <WhatsAppPill href={whatsappMessage ? whatsappHref(whatsappMessage) : undefined} dark />
          </motion.div>

          {facts && facts.length > 0 && (
            <motion.dl variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/20">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col pt-4 pr-3 ${i > 0 ? "border-l border-white/20 pl-4 md:pl-5" : ""}`}
                >
                  <dt className="mt-1.5 text-sm leading-snug text-white/65">{f.label}</dt>
                  <dd className={`serif order-first leading-none ${f.small ? "text-[1.6rem] md:text-3xl" : "text-4xl"}`}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>

        <motion.div
          className="min-w-0 rounded-[12px] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7 lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <p className="text-sm font-medium text-[var(--link)]">Send us a message</p>
          <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">Get in Touch</h2>
          <div className="mt-5">
            <EnquiryForm source={formSource} defaultCountry={formCountry} defaultServices={formServices} compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
