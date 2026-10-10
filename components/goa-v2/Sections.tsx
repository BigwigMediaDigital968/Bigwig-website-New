"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Plus, Star } from "lucide-react";
import { branches } from "@/data/offices";
import { fadeUp, focusRing, inView, stagger } from "../ui";
import { faqs, photos, reviews } from "./content";
import { ParallaxPhoto, WipeIn } from "./media";

const office = branches.find((b) => b.city === "Goa")!;

/* ---------- local: a full-width Fontainhas photo with the office over it ---------- */

/** The local case in one frame: Panjim's Latin Quarter drifting behind a short statement and the office. */
export function Local() {
  return (
    <section className="px-2 md:px-3">
      <div className="relative mx-auto h-[min(78svh,640px)] min-h-[480px] max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)]">
        <ParallaxPhoto photo={photos.fontainhas} sizes="100vw" travel={14} />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,28,64,0.88)_0%,rgba(1,28,64,0.55)_45%,rgba(1,28,64,0.05)_80%)]" />
        <motion.div
          {...inView}
          variants={stagger(0.1)}
          className="wrap relative flex h-full flex-col justify-center text-white"
        >
          <motion.h2 variants={fadeUp} className="serif max-w-[16ch] text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05]">
            A Goa team, not a call centre in another city.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-[42ch] text-lg leading-relaxed text-white/80">
            We know a Calangute crowd from an Assagao guest, and plan for both. Come and see us in
            Mapusa, or we’ll come to you.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7">
            <span className="flex items-center gap-2 text-white/85">
              <MapPin className="h-4 w-4 flex-none text-[var(--cyan)]" aria-hidden />
              {office.address}
            </span>
            <a href={office.phoneHref} className={`inline-flex items-center gap-2 rounded-sm font-semibold hover:underline ${focusRing}`}>
              <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
              {office.phoneDisplay}
            </a>
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-sm font-semibold hover:underline ${focusRing}`}
            >
              Get directions
              <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- reviews ---------- */

/** Real Google reviews as three calm cards that rise in one after another. */
export function Reviews() {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-16 md:py-24">
        <div className="wrap">
          <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">In our clients’ words.</h2>
          <motion.ul {...inView} variants={stagger(0.1)} className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
            {reviews.map((r) => (
              <motion.li key={r.name} variants={fadeUp} className="flex flex-col rounded-[24px] bg-[var(--paper)] p-7">
                <span aria-hidden className="serif text-6xl leading-[0.5] text-[var(--teal)]">“</span>
                <blockquote className="mt-5 leading-relaxed text-[var(--ink)]/85">{r.review}</blockquote>
                <figure className="mt-auto flex items-center justify-between gap-3 pt-7 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="flex items-center gap-1.5 text-[var(--muted)]">
                    <span className="flex text-[var(--teal)]" aria-hidden>
                      {Array.from({ length: r.rating }, (_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="sr-only">{r.rating} out of 5 stars, </span>Google
                  </span>
                </figure>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ, with a photo that stays in view beside it ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="py-16 md:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">Questions Goa asks us.</h2>
            <WipeIn className="mt-8 hidden lg:block">
              <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-[var(--paper)]">
                <ParallaxPhoto photo={photos.church} sizes="(min-width: 1024px) 36vw, 0px" travel={10} />
              </div>
            </WipeIn>
          </div>
        </div>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-[var(--line-strong)] last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-6 py-5 text-left font-semibold cursor-pointer ${focusRing}`}
                  >
                    {f.q}
                    <Plus
                      aria-hidden
                      className={`h-5 w-5 flex-none text-[var(--link)] transition-transform duration-200 ease-[var(--ease-out)] ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div id={`${uid}-${i}`} hidden={!isOpen} className="max-w-[62ch] pb-6 leading-relaxed text-[var(--muted)]">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
