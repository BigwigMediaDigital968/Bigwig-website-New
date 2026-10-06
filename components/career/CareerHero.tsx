"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, PillLink, WhatsAppPill, fadeUp, maskUp, stagger } from "../ui";
import { CAREERS_WHATSAPP_HREF } from "./jobs";

// Unsplash (free licence); images.unsplash.com is allowed in next.config.ts
const TEAM_IMG =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80";

export default function CareerHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  // Image drifts slightly slower than the page while it's on screen
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div className="min-w-0 lg:col-span-7" initial="hidden" animate="show" variants={stagger(0.12, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Careers at Bigwig Media Digital
          </motion.p>
          <h1 className="mt-4 text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            {["Build the", "digital future", "with us"].map((line) => (
              <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--muted)] md:mt-10">
            <span className="text-[var(--ink)]">Join a team that crafts high-impact digital experiences.</span>{" "}
            We value curiosity, ownership, and collaboration.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillLink href="#openings" tone="ink">
              See open roles
            </PillLink>
            <WhatsAppPill href={CAREERS_WHATSAPP_HREF} />
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-[32px] bg-[var(--ink)] lg:col-span-5 lg:aspect-[4/5]"
          initial={{ clipPath: "inset(14% 10% 14% 10% round 32px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 32px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE }}
        >
          <motion.div className="absolute inset-[-10%_0]" style={{ y: imageY }}>
            <Image
              src={TEAM_IMG}
              alt="A team brainstorming with sticky notes on a whiteboard"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[35%_center]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
