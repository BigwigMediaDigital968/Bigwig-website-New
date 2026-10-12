"use client";

import { useEffect, useState } from "react";
import { seasons } from "./content";
import { ParallaxPhoto, WipeIn } from "./media";

/** which season a month (0 = Jan) falls in */
const seasonOf = (m: number) => (m >= 9 || m <= 2 ? "peak" : m <= 4 ? "shoulder" : m <= 6 ? "monsoon" : "pre");

/**
 * Goa's year in four photographs, each drifting gently inside its frame as the page scrolls. The season we're
 * in now is marked.
 */
export default function Seasons() {
  const [now, setNow] = useState<string | null>(null);
  // the current month is only known in the browser
  useEffect(() => setNow(seasonOf(new Date().getMonth())), []);

  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-16 md:py-24">
        <div className="wrap">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
            <h2 className="h-section lg:col-span-6">
              Goa runs on seasons. So does our plan.
            </h2>
            <p className="max-w-[46ch] text-[var(--muted)] lg:col-span-5 lg:col-start-8">
              Most of your year is decided between October and March. We plan all twelve months around
              it, including the quiet ones.
            </p>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {seasons.map((s, i) => (
              <li key={s.id}>
                <WipeIn delay={i * 0.08}>
                  <div className="relative h-[220px] overflow-hidden rounded-[22px] bg-[#d9e3e6] md:h-[260px]">
                    <ParallaxPhoto photo={s.photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" travel={12} />
                    {now === s.id && (
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--ink)] shadow-sm">
                        We’re here now
                      </span>
                    )}
                  </div>
                </WipeIn>
                <p className="mt-4 text-sm font-medium text-[var(--link)]">{s.months}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
