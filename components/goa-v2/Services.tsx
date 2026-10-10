"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, MapPin, Play, Search, Star } from "lucide-react";
import { fadeUp, focusRing, inView, stagger } from "../ui";
import { moreServices, services, type Proof } from "./content";
import { WipeIn, usePlan } from "./media";

/**
 * What we do, made obvious: six core services, each a Goa photo with the thing it produces laid over it (an
 * ad, a Maps result, a booking site, a reel, a shoot, a review), then the rest of the services as links, so
 * every service the agency offers is on the page.
 */
export default function Services() {
  const { toForm } = usePlan();

  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[var(--link)]">What we do</p>
            <h2 className="serif mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">
              Every channel your guests and customers use, from one team.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <button
              type="button"
              onClick={() => toForm()}
              className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] cursor-pointer ${focusRing}`}
            >
              Plan my marketing
              <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>

        <ul className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.name}>
              <Link href={s.href} className={`group block rounded-[24px] ${focusRing}`}>
                <WipeIn delay={(i % 3) * 0.08}>
                  <span className="relative block h-[220px] overflow-hidden rounded-[24px] bg-[#d9e3e6] md:h-[240px]">
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      unoptimized
                      loading="eager"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.06] motion-reduce:transition-none"
                    />
                    <span aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,28,64,0)_40%,rgba(1,28,64,0.45)_100%)]" />
                    <ProofCard proof={s.proof} />
                  </span>
                </WipeIn>
                <span className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold tracking-tight group-hover:text-[var(--link)]">{s.name}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-5 w-5 flex-none text-[var(--link)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-[var(--muted)]">{s.line}</span>
              </Link>
            </li>
          ))}
        </ul>

        <motion.div {...inView} variants={stagger(0.04)} className="mt-12 border-t border-[var(--line)] pt-8">
          <motion.p variants={fadeUp} className="text-sm text-[var(--muted)]">
            Also from the same team
          </motion.p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {moreServices.map((m) => (
              <motion.li key={m.href} variants={fadeUp}>
                <Link
                  href={m.href}
                  className={`inline-flex h-10 items-center gap-1.5 rounded-full bg-[var(--surface)] px-4 text-sm font-medium ring-1 ring-inset ring-[var(--line)] transition-[box-shadow,color] duration-200 hover:text-[var(--link)] hover:ring-[var(--line-strong)] ${focusRing}`}
                >
                  {m.name}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/** A small, glassy card over the photo showing what the service produces. Decorative: the text below says it. */
function ProofCard({ proof }: { proof: Proof }) {
  const card =
    "absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-3 text-[var(--ink)] shadow-[0_18px_40px_-18px_rgba(1,28,64,0.6)] ring-1 ring-white/60 backdrop-blur-md transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 sm:right-auto sm:min-w-[72%]";

  switch (proof.kind) {
    case "ad":
      return (
        <span aria-hidden className={card}>
          <span className="flex items-center gap-2 text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--teal),var(--ink))] text-[10px] font-bold text-white">Y</span>
            <span className="font-semibold">{proof.brand}</span>
            <span className="text-[var(--muted)]">Sponsored</span>
          </span>
          <span className="mt-1.5 block text-sm leading-snug">{proof.text}</span>
          <span className="mt-2 flex items-center justify-between rounded-lg bg-[var(--paper)] px-2.5 py-1.5 text-xs font-semibold">
            {proof.cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </span>
      );
    case "maps":
      return (
        <span aria-hidden className={card}>
          <span className="flex items-center gap-2 rounded-full bg-[var(--paper)] px-3 py-1.5 text-xs text-[var(--muted)]">
            <Search className="h-3.5 w-3.5" />
            {proof.query}
          </span>
          <span className="mt-2 flex items-center gap-2.5">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#EA4335] text-white">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-[#1a0dab]">{proof.name}</span>
              <span className="flex items-center gap-1 text-xs">
                {proof.rating}
                <Star className="h-3 w-3 fill-[#FBBC04] text-[#FBBC04]" />
                <span className="text-[var(--muted)]">· Open now</span>
              </span>
            </span>
          </span>
        </span>
      );
    case "site":
      return (
        <span aria-hidden className={card}>
          <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Globe className="h-3.5 w-3.5" />
            {proof.url}
          </span>
          <span className="mt-2 grid grid-cols-3 gap-1.5 text-[11px]">
            {["Check-in", "Check-out", "Guests"].map((l) => (
              <span key={l} className="rounded-md bg-[var(--paper)] px-2 py-1 text-[var(--muted)]">
                {l}
              </span>
            ))}
          </span>
          <span className="mt-2 block rounded-lg bg-[var(--ink)] px-2.5 py-1.5 text-center text-xs font-semibold text-white">{proof.cta}</span>
        </span>
      );
    case "reel":
      return (
        <span aria-hidden className={`${card} flex items-center gap-3`}>
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af)] text-white">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{proof.caption}</span>
            <span className="text-xs text-[var(--muted)]">Reel · {proof.views} views</span>
          </span>
        </span>
      );
    case "shoot":
      return (
        <span aria-hidden className={`${card} flex items-center gap-3`}>
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--ink)] text-white">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{proof.label}</span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Recording 4K
            </span>
          </span>
        </span>
      );
    case "review":
      return (
        <span aria-hidden className={`${card} flex items-center gap-3`}>
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-sm font-bold text-[#4285F4] ring-1 ring-[var(--line)]">G</span>
          <span className="leading-tight">
            <span className="flex text-[#FBBC04]">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="mt-0.5 block text-xs font-semibold">{proof.text}</span>
          </span>
        </span>
      );
  }
}
