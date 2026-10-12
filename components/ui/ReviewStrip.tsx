"use client";

import { Star } from "lucide-react";
import type { testimonials } from "@/data/homeData";

type Review = (typeof testimonials)[number];

/**
 * Real Google reviews as a slow strip of cards that pauses on hover (see .marquee in brand.css). The list is
 * doubled so the -50% loop is seamless; the copies are hidden from screen readers. With reduced motion the
 * strip stops and scrolls sideways by hand instead. Pass enough reviews to fill a wide screen (six or more).
 */
export default function ReviewStrip({
  reviews,
  starClassName = "text-[var(--teal)]",
  duration = "70s",
  cardClassName = "bg-[var(--surface)] ring-1 ring-[var(--line)]",
}: {
  reviews: Review[];
  starClassName?: string;
  duration?: string;
  /** card fill; use a paper fill when the strip sits on a white panel */
  cardClassName?: string;
}) {
  const strip = [...reviews, ...reviews];
  return (
    <div className="marquee-mask overflow-hidden motion-reduce:overflow-x-auto">
      <ul className="marquee gap-4 py-2" style={{ animationDuration: duration }}>
        {strip.map((r, i) => {
          const copy = i >= reviews.length;
          return (
            <li
              key={i}
              aria-hidden={copy || undefined}
              className={`flex w-[300px] flex-none flex-col rounded-[22px] p-6 sm:w-[380px] ${cardClassName}`}
            >
              <span className={`flex ${starClassName}`} aria-hidden>
                {Array.from({ length: r.rating }, (_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <blockquote className="mt-4 leading-relaxed text-[var(--ink)]/85">“{r.review}”</blockquote>
              <p className="mt-auto pt-5 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-[var(--muted)]">
                  <span className="sr-only">, {r.rating} out of 5 stars</span>, Google review
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
