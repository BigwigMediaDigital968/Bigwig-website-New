"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Plus, Star } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, focusRing } from "../ui";
import { useBrief, useBriefLabels } from "./Brief";
import { faqs, reviews, steps } from "./content";

/* ---------- what happens next, and what clients say ---------- */

export function Process() {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <h2 className="h-section max-w-[20ch]">What happens after you send your plan.</h2>
        <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-x-8 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-[var(--ink)] pt-5">
              <span aria-hidden className="serif text-3xl leading-none text-[var(--teal)]">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <Reviews />
    </section>
  );
}

/**
 * Real Google reviews as a slow strip of cards that pauses on hover (see .marquee in brand.css). The list is
 * doubled so the -50% loop is seamless; the copies are hidden from screen readers. With reduced motion the
 * strip stops and scrolls sideways by hand instead.
 */
function Reviews() {
  const strip = [...reviews, ...reviews];
  return (
    <div className="mt-12 md:mt-14">
      <h3 className="wrap text-sm font-medium text-[var(--muted)]">What clients say on Google</h3>
      <div className="marquee-mask mt-5 overflow-hidden motion-reduce:overflow-x-auto">
        <ul className="marquee gap-4 py-2" style={{ animationDuration: "70s" }}>
          {strip.map((r, i) => {
            const copy = i >= reviews.length;
            return (
              <li
                key={i}
                aria-hidden={copy || undefined}
                className="flex w-[300px] flex-none flex-col rounded-[22px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)] sm:w-[380px]"
              >
                <span className="flex text-[var(--teal)]" aria-hidden>
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
    </div>
  );
}

/* ---------- FAQ ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="pb-14 md:pb-20">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="h-section">Questions we get asked.</h2>
          <PlanNote />
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

/* ---------- the visitor's own sentence, read back beside the FAQ ---------- */

/**
 * A quiet reminder of what they picked, with a way back to the form. Kept small and light on purpose: the
 * site footer right below carries the page's closing call to action.
 */
function PlanNote() {
  const { toForm } = useBrief();
  const { business, want, reach } = useBriefLabels();
  return (
    <div className="mt-8 rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
      <p className="text-sm text-[var(--muted)]">Your plan so far</p>
      <p className="mt-2 text-lg font-semibold leading-snug tracking-tight">
        More {want.label} for {business.label}, from people {reach.label}.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="button"
          onClick={() => toForm("bhopal-faq")}
          className={`inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-[var(--link)] hover:underline cursor-pointer ${focusRing}`}
        >
          Finish my plan
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </button>
        <a href={PHONE_HREF} className={`rounded-sm text-sm text-[var(--muted)] hover:text-[var(--ink)] ${focusRing}`}>
          Or call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
