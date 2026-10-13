"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { clients } from "@/data/clients";
import { EASE, WhatsAppPill, fadeUp, focusRing, stagger } from "../ui";
import { GOA_WHATSAPP_HREF, photos } from "./content";
import { usePlan } from "./media";

/** what we do, at a glance (the full list is in the services section below) */
const heroServices = ["Google & Meta ads", "SEO & Google Maps", "Websites", "Social media", "Design & video", "Reputation"];

const trusted = ["Homes and Land Goa", "Mondus Properties", "Granth Dream Homes", "Rehnoor Jewels", "Ethical Infrastructures"]
  .map((n) => clients.find((c) => c.name === n))
  .filter((c): c is (typeof clients)[number] => Boolean(c));

/**
 * Full-bleed photographic hero in the site's rounded frame. The headline says what we do, and the service
 * chips list it. The photo settles from a slight zoom on load, then drifts and the copy fades as the page
 * scrolls away. Copy sits bottom-left on a soft dark gradient.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { toForm } = usePlan();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <section ref={ref} className="px-2 pt-3 md:px-3">
        <div className="relative mx-auto h-[min(86svh,820px)] min-h-[560px] max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)]">
          <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y }}>
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease: EASE }}
            >
              <Image src={photos.hero.src} alt={photos.hero.alt} fill priority unoptimized sizes="100vw" className="object-cover" />
            </motion.div>
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,28,64,0.35)_0%,rgba(1,28,64,0)_28%,rgba(1,28,64,0.25)_50%,rgba(1,28,64,0.9)_100%),linear-gradient(90deg,rgba(1,28,64,0.45)_0%,rgba(1,28,64,0)_60%)]"
          />

          <motion.div
            className="absolute inset-x-0 bottom-0"
            style={{ opacity: reduce ? 1 : fade }}
          >
            <motion.div
              className="wrap pb-10 text-white md:pb-14"
              initial="hidden"
              animate="show"
              variants={stagger(0.09, 0.5)}
            >
              <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <MapPin className="h-4 w-4" aria-hidden />
                Digital marketing agency in Goa, based in Mapusa
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="h-display mt-4 max-w-[19ch]"
              >
                Ads, SEO, websites and social media for Goa businesses.
              </motion.h1>
              <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="max-w-[48ch] text-lg leading-relaxed text-white/85">
                    The full-service digital team in Mapusa behind Goa’s stays, cafés, real estate and
                    brands, from the first post to the booked table.
                  </p>
                  <ul aria-label="Our services" className="mt-5 flex max-w-[44rem] flex-wrap gap-2">
                    {heroServices.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-white/12 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-md"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-none flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => toForm()}
                    className={`group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-6 pr-1.5 text-[0.95rem] font-semibold text-[var(--ink)] transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--cyan)] active:scale-[0.97] cursor-pointer ${focusRing}`}
                  >
                    Plan my season
                    <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-white transition-transform duration-300 group-hover:translate-y-0.5">
                      <ArrowDown className="h-4 w-4" />
                    </span>
                  </button>
                  <WhatsAppPill href={GOA_WHATSAPP_HREF} dark />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="wrap mt-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
          <p className="flex-none text-sm text-[var(--muted)]">Trusted by property and lifestyle brands</p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
            {trusted.map((c) => (
              <li key={c.name}>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className={`group block rounded-md ${focusRing}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-8 w-auto max-w-[130px] object-contain opacity-60 brightness-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
