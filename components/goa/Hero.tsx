"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { EASE, WhatsAppPill, fadeUp, focusRing, stagger } from "../ui";
import TrustedStrip from "../ui/TrustedStrip";
import { ArchWindow, GoaView } from "./motifs";
import { GOA_WHATSAPP_HREF, photos } from "./content";

/**
 * The hero: a calm serif headline on the left, and on the right a Goan dusk seen through an arched window with
 * a carepa fanlight. One quiet entrance: the copy rises and the window settles.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <motion.div
          className="min-w-0 lg:col-span-6"
          initial="hidden"
          animate="show"
          variants={stagger(0.08, 0.05)}
        >
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-[var(--link)]">
            <MapPin className="h-4 w-4" aria-hidden />
            Digital marketing agency in Goa, based in Mapusa
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="serif mt-5 max-w-[14ch] text-[clamp(2.6rem,4.6vw,4.1rem)] leading-[1.02] tracking-[-0.02em] [text-wrap:balance]"
          >
            Marketing for Goa, in season and out.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]">
            Direct bookings, enquiries and full tables for hotels, villas, cafés, real estate and every
            Goa business, planned around the months that matter.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#plan"
              className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] ${focusRing}`}
            >
              Plan my season
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ochre)] text-[var(--ink)] transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <ArrowDown className="h-4 w-4" />
              </span>
            </a>
            <WhatsAppPill href={GOA_WHATSAPP_HREF} />
          </motion.div>
        </motion.div>

        {/* the window */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[420px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(24px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mx-auto max-h-[72vh] w-[min(100%,calc(72vh*0.8))]"
          >
            <ArchWindow aspect={0.8} className="shadow-[0_50px_100px_-50px_rgba(1,28,64,0.6)]">
              {photos.hero.src ? (
                <Image
                  src={photos.hero.src}
                  alt={photos.hero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <GoaView className="absolute inset-0 h-full w-full" />
              )}
            </ArchWindow>
          </motion.div>

        </div>
      </div>

      <div className="wrap mt-12 md:mt-14">
        <TrustedStrip label="Trusted by property and lifestyle brands" />
      </div>
    </section>
  );
}
