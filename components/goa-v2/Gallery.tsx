"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { focusRing } from "../ui";
import { work } from "./content";

/** an arch frame's height as a share of its width (3:4 portrait) */
const FRAME = 4 / 3;

/**
 * The work, hung like a row of arched windows. The row scrolls sideways (snap, arrows, trackpad); hovering a
 * frame glides its site from top to bottom. Each frame is a link to the live site with its real result below.
 */
export default function Gallery() {
  const row = useRef<HTMLUListElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = row.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow = `flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors duration-200 hover:bg-[var(--ink)] hover:text-white cursor-pointer ${focusRing}`;

  return (
    <section id="work" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--surface)] py-14 md:py-20">
        <div className="wrap flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">Work that brings people in.</h2>
            <p className="mt-3 max-w-[48ch] text-[var(--muted)]">
              Sites and campaigns for property, lifestyle and local brands.
              <span className="hidden md:inline"> Hover a frame to walk through the site.</span>
            </p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => nudge(-1)} aria-label="Previous project" className={arrow}>
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => nudge(1)} aria-label="Next project" className={arrow}>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>

        {/* the first frame lines up with the heading (the .wrap gutter); snapping uses the same inset, or it
            would pull the first frame to the edge */}
        <ul
          ref={row}
          style={{ "--gutter": "max(1rem, calc((100% - 1320px) / 2 + 2rem))" } as React.CSSProperties}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-4 [scroll-padding-inline:var(--gutter)] [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
        >
          {work.map((w) => {
            const scrollTo = `${-(1 - FRAME / (w.height / w.width)) * 100}%`;
            return (
              // relative: keeps the sr-only text of off-screen cards inside the scroller instead of widening the page
              <li key={w.id} className="relative w-[260px] flex-none snap-start sm:w-[300px]">
                <a href={w.href} target="_blank" rel="noopener noreferrer" className={`group block rounded-t-[999px] ${focusRing}`}>
                  <span className="block rounded-t-[999px] bg-[var(--ink)] p-[7px]">
                    <span className="relative block aspect-[3/4] overflow-hidden rounded-t-[999px] bg-[var(--paper)]">
                      <Image
                        src={w.img}
                        alt={`The ${w.name} website`}
                        width={w.width}
                        height={w.height}
                        sizes="300px"
                        className="site-scroll site-scroll-hover h-auto w-full"
                        style={{ "--scroll-to": scrollTo } as React.CSSProperties}
                      />
                    </span>
                  </span>
                  <span className="mt-5 flex items-baseline gap-2.5">
                    <span className="serif text-4xl leading-none">{w.stat}</span>
                    <span className="text-sm leading-snug">{w.statLabel}</span>
                  </span>
                  <span className="mt-2 flex items-center gap-1 font-semibold group-hover:text-[var(--link)]">
                    {w.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                  <span className="block text-sm text-[var(--muted)]">{w.kind}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
