"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { EASE, PillLink, WhatsAppPill, fadeUp, focusRing, stagger } from "../ui";
import { AHMEDABAD_WHATSAPP_HREF, photos, strip } from "./content";

const MID = (strip.length - 1) / 2;

/**
 * The hero, centred on the page's paper: a small office badge, the headline, one line about what we do, and a
 * curved row of cards (the city and our work, alternating) seen as if from inside a cylinder: cards turn toward
 * the centre and grow toward the edges, which the section crops. The call to action sits under the row. One
 * entrance: the copy rises, then the cards fan out from flat.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pb-14 pt-10 text-center md:pb-20 md:pt-14">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/3 -z-10 h-[60%] bg-[radial-gradient(ellipse_50%_55%_at_50%_55%,rgba(167,235,242,0.55),transparent_70%)]"
      />

      <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.08, 0.05)}>
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cyan)] px-3.5 py-1.5 text-sm font-medium text-[var(--ink)]"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          Office in Ahmedabad
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-5 max-w-[16ch] text-[clamp(2.4rem,5.2vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] [text-wrap:balance]"
        >
          Digital marketing agency in Ahmedabad
        </motion.h1>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[50ch] text-lg leading-relaxed text-[var(--muted)]">
          Ads, Google Maps, websites and social media for every kind of local business, run by a team with an
          office in the city.
        </motion.p>
      </motion.div>

      {/* the curved row */}
      <ul
        className="mt-10 flex items-center justify-center gap-3 md:mt-12 md:gap-4"
        style={{ perspective: "1100px" }}
      >
        {strip.map((s, i) => {
          const d = i - MID;
          const far = Math.abs(d);
          return (
            <motion.li
              key={s.src}
              className="relative flex-none overflow-hidden rounded-[22px] bg-[var(--surface)] shadow-[0_30px_60px_-30px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)]"
              style={{
                width: "clamp(116px, 13vw, 210px)",
                height: `calc(clamp(150px, 16vw, 250px) + ${far} * clamp(10px, 1.5vw, 24px))`,
              }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, rotateY: 0, z: 0 }}
              animate={reduce ? { opacity: 1, rotateY: -d * 9, z: far * far * 6 } : { opacity: 1, y: 0, rotateY: -d * 9, z: far * far * 6 }}
              transition={{ duration: reduce ? 0.3 : 1.8, delay: reduce ? 0 : 0.4 + far * 0.14, ease: EASE }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="210px"
                priority={far < 2}
                className={`object-cover ${s.top ? "object-top" : ""}`}
              />
            </motion.li>
          );
        })}
      </ul>

      <div className="wrap relative mt-10 md:mt-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PillLink href="#enquire" tone="ink">
            Get a free growth plan
          </PillLink>
          <WhatsAppPill href={AHMEDABAD_WHATSAPP_HREF} />
        </div>
        {/* a hand-drawn note pointing at the button, as in a margin */}
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-[calc(100%+15rem)] -translate-y-1/2 items-center gap-2 lg:flex"
        >
          <span className="serif rotate-[-8deg] text-lg italic text-[var(--link)]">It’s free</span>
          <svg viewBox="0 0 60 30" className="h-6 w-12 text-[var(--link)]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M2 22C16 6 34 4 54 14" />
            <path d="M46 8L55 14L46 19" />
          </svg>
        </p>
      </div>
    </section>
  );
}

const glass = "bg-white/12 ring-1 ring-inset ring-white/25 backdrop-blur-md";

/**
 * Under the hero: the promise and the call to action on the left, two photo cards on the right. The first card
 * goes to the work, the second carries the monthly-report line beneath it.
 */
export function Intro() {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
        <motion.div className="lg:col-span-5" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0px" }} variants={stagger(0.08)}>
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-full bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium ring-1 ring-[var(--line)]"
          >
            Why Bigwig
          </motion.span>
          <motion.p variants={fadeUp} className="mt-5 max-w-[24ch] text-[clamp(1.5rem,2.3vw,2rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            Enquiries you can count,{" "}
            <span className="text-[var(--muted)]">for manufacturers, builders, clinics, schools and shops across the city.</span>
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7">
            <PillLink href="#enquire" tone="ink">
              Get a free growth plan
            </PillLink>
          </motion.div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <a
            href="#work"
            className={`group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-[24px] p-5 text-white sm:aspect-[4/3.4] ${focusRing}`}
          >
            <Image
              src={photos.temple.src}
              alt={photos.temple.alt}
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
              className="-z-10 object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
            />
            <span aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.8),rgba(1,28,64,0)_60%)]" />
            <span className="flex items-end justify-between gap-4">
              <span className="max-w-[14ch] text-lg font-medium leading-snug">See real results from our clients</span>
              <span
                aria-hidden
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </a>

          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] sm:aspect-[4/2.6]">
              <Image
                src={photos.bridge.src}
                alt={photos.bridge.alt}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white ${glass}`}>
                Every month
              </span>
            </div>
            <figcaption className="mt-4 max-w-[36ch] leading-relaxed text-[var(--muted)]">
              A report with the calls, enquiries and orders we brought in, and what each one cost. No vanity numbers.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
