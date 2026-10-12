"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { focusRing } from "../ui";
import { work } from "./content";

/** the frame's height as a share of its width (4:3 landscape) */
const FRAME = 3 / 4;

/**
 * The work as entries in the ledger: each result is the headline, ruled off like a total, with the live site in
 * a frame above it that glides from top to bottom on hover. A sideways row on phones, a grid from tablets up.
 */
export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-14 text-white md:py-20">
        <div className="wrap">
          <h2 className="h-section max-w-[20ch]">Results, not reach.</h2>
          <p className="mt-3 max-w-[48ch] text-white/70">
            Real sites and the numbers they moved.
            <span className="hidden md:inline"> Hover a frame to walk through the site.</span>
          </p>
        </div>

        <ul className="wrap mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {work.map((w) => {
            const scrollTo = `${-(1 - FRAME / (w.height / w.width)) * 100}%`;
            return (
              <li key={w.id} className="relative w-[78%] flex-none snap-start sm:w-[46%] md:w-auto">
                <a href={w.href} target="_blank" rel="noopener noreferrer" className={`group block rounded-[20px] ${focusRing}`}>
                  <span className="block overflow-hidden rounded-[20px] bg-white/10 p-1.5 ring-1 ring-white/10">
                    <span className="relative block aspect-[4/3] overflow-hidden rounded-[14px] bg-[var(--paper)]">
                      <Image
                        src={w.img}
                        alt={`The ${w.name} website`}
                        width={w.width}
                        height={w.height}
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 80vw"
                        className="site-scroll site-scroll-hover h-auto w-full"
                        style={{ "--scroll-to": scrollTo } as React.CSSProperties}
                      />
                    </span>
                  </span>
                  <span className="mt-5 flex items-baseline gap-3 border-b-[3px] border-double border-white/25 pb-3">
                    <span className="serif text-4xl leading-none text-[var(--cyan)]">{w.stat}</span>
                    <span className="text-sm leading-snug text-white/80">{w.statLabel}</span>
                  </span>
                  <span className="mt-3 flex items-center gap-1 font-semibold group-hover:text-[var(--cyan)]">
                    {w.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                  <span className="block text-sm text-white/60">{w.kind}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
