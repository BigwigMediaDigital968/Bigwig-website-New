"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE, PillLink, WhatsAppPill, fadeUp, maskUp, stagger, whatsappHref } from "../ui";
import EnquiryForm from "../contact/EnquiryForm";
import { dubaiPhotos } from "./photos";

const WHATSAPP_MESSAGE = "Hi BigWig Media Digital! I'm interested in your digital marketing services in Dubai, UAE.";
/** WhatsApp chat link used across the Dubai pages. */
export const DUBAI_WHATSAPP_HREF = whatsappHref(WHATSAPP_MESSAGE);

const facts = [
  { value: "8+", label: "Years in digital marketing" },
  { value: "360°", label: "Digital marketing" },
  { value: "UAE & India", label: "Offices", small: true },
];

/**
 * The form fields take their fill and outline from --paper and --line, so re-pointing those inside
 * the card gives white fields with the brand-blue outline without touching the shared form.
 */
const blueFields = {
  "--paper": "#f7fafc",
  "--line": "rgba(38, 101, 140, 0.45)",
  "--line-strong": "#26658c",
} as React.CSSProperties;

/**
 * Twilight Downtown skyline under a ~65% navy wash, deepened behind the copy so the white type
 * keeps its contrast. Listed in Nav's OVERLAY_PATHS so the nav floats over the photo.
 */
export default function DubaiHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
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
        <Image
          src={dubaiPhotos.heroSkyline}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[47%_40%]"
        />
      </motion.div>
      {/* even navy wash over the whole skyline */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[rgba(1,28,64,0.65)]" />
      {/* extra depth behind the copy: left on desktop, top-to-bottom on phones */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,28,64,0.35)_0%,rgba(1,28,64,0.6)_100%)] lg:bg-[linear-gradient(100deg,rgba(1,28,64,0.6)_0%,rgba(1,28,64,0.35)_42%,rgba(1,28,64,0)_72%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.55),transparent_35%)]"
      />

      <div className="wrap grid w-full gap-12 pb-16 pt-28 md:pt-32 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-10 lg:pt-24">
        <motion.div className="min-w-0 lg:col-span-7" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
            Digital marketing agency in Dubai, UAE
          </motion.p>
          <h1 className="mt-4 max-w-2xl text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[clamp(2.5rem,3.2vw,3rem)]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Transform your business with the best digital marketing agency in Dubai, UAE
              </motion.span>
            </span>
          </h1>
          <motion.div variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            <p>
              <span className="text-white">We help brands grow with proven digital marketing strategies</span> in SEO,
              social media, and performance marketing.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <PillLink href="#services" tone="cyan">
              Explore our services
            </PillLink>
            <WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark />
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/20">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col pt-4 pr-3 ${i > 0 ? "border-l border-white/20 pl-4 md:pl-5" : ""}`}
              >
                <dt className="mt-1.5 text-sm leading-snug text-white/70">{f.label}</dt>
                <dd className={`serif order-first leading-none ${f.small ? "text-[1.6rem] md:text-3xl" : "text-4xl"}`}>
                  {f.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          style={blueFields}
          className="min-w-0 rounded-[28px] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-7 lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
        >
          <p className="text-sm font-medium text-[var(--link)]">Send us a message</p>
          <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">Get a free consultation</h2>
          <div className="mt-5">
            <EnquiryForm source="dubai-hero" defaultCountry="ae" compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
