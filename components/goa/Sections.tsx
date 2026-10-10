"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, Star } from "lucide-react";
import { branches } from "@/data/offices";
import { EASE_OUT, focusRing } from "../ui";
import { AzulejoBorder } from "./motifs";
import { faqs, reviews } from "./content";

const office = branches.find((b) => b.city === "Goa")!;

/* ---------- reviews: one at a time, under a band of azulejo tiles ---------- */

/** Real Google reviews, one at a time; the visitor moves between them. Nothing advances on its own. */
export function Reviews() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const reduce = useReducedMotion();
  const r = reviews[i];
  if (!r) return null;

  const go = (d: 1 | -1) => {
    setDir(d);
    setI((x) => (x + d + reviews.length) % reviews.length);
  };
  const arrow = `flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors duration-200 hover:bg-[var(--ink)] hover:text-white cursor-pointer ${focusRing}`;

  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--surface)]">
        <AzulejoBorder className="block h-10 w-full" ink="#26658c" />
        <div className="wrap grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">In our clients’ words.</h2>
            <div className="mt-6 flex items-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous review" className={arrow}>
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next review" className={arrow}>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <p className="ml-2 text-sm tabular-nums text-[var(--muted)]">
                {i + 1} of {reviews.length}
              </p>
            </div>
          </div>

          <div className="min-h-[14rem] lg:col-span-8" aria-live="polite">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.figure
                key={r.name}
                initial={reduce ? { opacity: 0 } : { opacity: 0, transform: `translateX(${dir * 16}px)` }}
                animate={{ opacity: 1, transform: "translateX(0px)" }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                <blockquote className="serif max-w-[40ch] text-[clamp(1.35rem,1.9vw,1.7rem)] leading-[1.32]">“{r.review}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="flex text-[var(--ochre-deep)]" aria-hidden>
                    {Array.from({ length: r.rating }, (_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <span className="text-[var(--muted)]">
                    <span className="sr-only">{r.rating} out of 5 stars, </span>Google review
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ, with the office beside it ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">Questions Goa asks us.</h2>
          <div className="mt-8 rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
            <p className="text-sm text-[var(--muted)]">Our Goa office</p>
            <p className="mt-2 leading-relaxed">{office.address}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={office.phoneHref} className={`rounded-sm text-[var(--link)] hover:underline ${focusRing}`}>
                {office.phoneDisplay}
              </a>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
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
                    className={`flex w-full items-center justify-between gap-6 py-4 text-left font-semibold cursor-pointer ${focusRing}`}
                  >
                    {f.q}
                    <Plus
                      aria-hidden
                      className={`h-5 w-5 flex-none text-[var(--link)] transition-transform duration-200 ease-[var(--ease-out)] ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div id={`${uid}-${i}`} hidden={!isOpen} className="max-w-[62ch] pb-5 leading-relaxed text-[var(--muted)]">
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
