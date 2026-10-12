"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Heart, Play } from "lucide-react";
import { PillLink, fadeUp, inView, stagger } from "../ui";
import { type Creative, creatives, festivals, socialIncludes } from "./content";

const glass = "bg-[rgba(1,28,64,0.4)] ring-1 ring-inset ring-white/25 backdrop-blur-md";

/**
 * Social media: a bento of real studio creatives (CGI and AI ads), each with a glass format chip like the hero's,
 * and one navy card for the festive calendar. What's included runs underneath.
 */
export default function Social() {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <motion.div {...inView} variants={stagger(0.08)} className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium ring-1 ring-[var(--line)]"
            >
              Social media
            </motion.span>
            <motion.h2 variants={fadeUp} className="h-section mt-4 max-w-[20ch]">
              Social media that brings in customers, not just likes.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-[44ch] leading-relaxed text-[var(--muted)]">
              Reels, posts and ads for Instagram, Facebook and LinkedIn, made by our own studio and measured by the
              enquiries they bring.
            </p>
            <PillLink href="#enquire" tone="ink" className="mt-5">
              Plan my social media
            </PillLink>
          </motion.div>
        </motion.div>

        {/* the bento: tall | two squares | tall | square over the festive card */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:h-[480px] md:grid-rows-2 md:gap-4 lg:h-[560px]">
          <Card c={creatives.tall} className="row-span-2 aspect-[2/3] md:aspect-auto" />
          <Card c={creatives.shake} className="aspect-square md:aspect-auto" />
          <Card c={creatives.chefs} className="row-span-2 aspect-[2/3] md:col-start-3 md:row-start-1 md:aspect-auto" />
          <Card c={creatives.donut} className="aspect-square md:col-start-2 md:row-start-2 md:aspect-auto" />
          <Card c={creatives.berries} className="aspect-square md:aspect-auto" />

          <div className="flex aspect-square flex-col justify-between rounded-[24px] bg-[var(--ink)] p-5 text-white md:aspect-auto">
            <CalendarDays className="h-6 w-6 text-[var(--cyan)]" aria-hidden />
            <div>
              <p className="text-lg font-medium leading-snug">Festive campaigns, ready a month early</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {festivals.map((f) => (
                  <li key={f} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-8 lg:grid-cols-4">
          {socialIncludes.map((s) => (
            <li key={s.name} className="border-t-2 border-[var(--ink)] pt-4">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{s.does}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ c, className = "" }: { c: Creative; className?: string }) {
  const reel = c.format === "Reel";
  return (
    <figure className={`group relative isolate overflow-hidden rounded-[24px] bg-[var(--paper)] ${className}`}>
      <Image
        src={c.src}
        alt={c.alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="-z-10 object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.7),transparent_45%)]" />
      <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-white ${glass}`}>
        {reel && <Play className="h-3 w-3 fill-current" aria-hidden />}
        {c.format}
      </span>
      <figcaption className="absolute inset-x-4 bottom-3.5 flex items-end justify-between gap-3 text-sm font-medium text-white">
        {c.caption}
        <Heart className="h-4 w-4 flex-none" aria-hidden />
      </figcaption>
    </figure>
  );
}
