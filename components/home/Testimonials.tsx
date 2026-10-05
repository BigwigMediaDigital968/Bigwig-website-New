"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/homeData";
import { EASE, PillLead, Reveal, fadeUp, focusRing, inView, maskUp, stagger } from "../ui";

const ROTATE_MS = 7000;
const average = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <span className="flex gap-0.5 text-[#f5b301]" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" stroke="none" />
      ))}
    </span>
  );
}

function Avatar({ item }: { item: Testimonial }) {
  return item.image ? (
    <img src={item.image} alt="" referrerPolicy="no-referrer" draggable={false} className="h-12 w-12 rounded-full object-cover" />
  ) : (
    <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cyan)] text-lg font-semibold text-[var(--ink)]">
      {item.name.charAt(0).toUpperCase()}
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setTimeout(() => go(active + 1), ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reduce, go]);

  const current = testimonials[active];

  return (
    <section className="py-24 md:py-32" aria-roledescription="carousel" aria-label="Client testimonials">
      <div
        className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <motion.div {...inView} variants={stagger(0.1)} className="flex flex-col lg:col-span-4">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">Client reviews</motion.p>
          <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.4rem]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                What Our Clients Say About the Best Digital Marketing Agency in Delhi
              </motion.span>
            </span>
          </h2>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <p className="serif text-[5rem] leading-none tabular-nums">{average.toFixed(1)}</p>
            <div>
              <Stars count={Math.round(average)} size={18} />
              <p className="mt-1.5 text-sm text-[var(--muted)]">Average from {count} client reviews</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 border-t border-[var(--line)] pt-8 lg:mt-auto">
            <p className="font-semibold">Want results like these?</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Tell us about your business and we’ll plan your next step.</p>
            <PillLead source="testimonials" className="mt-5">
              Get a free strategy session
            </PillLead>
          </motion.div>
        </motion.div>

        <Reveal delay={0.15} y={40} className="flex flex-col rounded-[28px] bg-[var(--surface)] p-7 sm:p-10 md:p-14 lg:col-span-8">
          <motion.span
            key={`q-${active}`}
            aria-hidden
            className="serif block h-16 origin-bottom-left text-[8rem] leading-[0.9] text-[var(--teal)]"
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            “
          </motion.span>

          <div id="review-panel" aria-live={paused ? "polite" : "off"} className="min-h-[300px] flex-1 md:min-h-[280px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={active}
                className="flex h-full flex-col"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <motion.blockquote
                  className="text-xl font-medium leading-snug tracking-[-0.015em] md:text-[1.75rem]"
                  initial="hidden"
                  animate="show"
                  variants={stagger(0.018)}
                >
                  <span className="sr-only">{current.review}</span>
                  {current.review.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      aria-hidden
                      className="inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
                        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: EASE } },
                      }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.blockquote>
                <figcaption className="mt-auto flex items-center gap-4 pt-8">
                  <Avatar item={current} />
                  <div>
                    <p className="font-semibold">{current.name}</p>
                    <div className="mt-1">
                      <Stars count={current.rating} size={14} />
                      <span className="sr-only">{current.rating} out of 5 stars</span>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-[var(--line)] pt-6">
            <div className="flex flex-1 gap-1.5" role="group" aria-label="Choose a review">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Review by ${t.name}`}
                  aria-current={i === active || undefined}
                  className={`group h-6 flex-1 cursor-pointer ${focusRing}`}
                >
                  <span
                    className={`relative block h-1 overflow-hidden rounded-full transition-colors duration-300 ${
                      i < active ? "bg-[var(--ink)]" : "bg-[var(--line-strong)] group-hover:bg-[var(--teal)]"
                    }`}
                  >
                    {/* active segment fills over the time until the next review */}
                    {i === active && (
                      <motion.span
                        key={`${active}-${paused}`}
                        className="absolute inset-y-0 left-0 rounded-full bg-[var(--ink)]"
                        initial={{ width: paused || reduce ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-sm tabular-nums text-[var(--muted)]">
              {active + 1} / {count}
            </p>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous review"
              className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors hover:bg-[var(--paper)] cursor-pointer ${focusRing}`}
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next review"
              className={`flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-white transition-colors hover:bg-[var(--ink-2)] cursor-pointer ${focusRing}`}
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
