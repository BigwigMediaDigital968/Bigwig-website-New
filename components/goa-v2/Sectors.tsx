"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { focusRing } from "../ui";
import { sectors } from "./content";
import { WipeIn, usePlan } from "./media";

/** grid placement per card: one wide pair on top, three below */
const SPAN = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

/**
 * Who we work with in Goa, as an editorial photo grid. Each photo wipes in as it enters the screen and eases in
 * closer on hover. A card is a button: it picks that business in the form and scrolls there.
 */
export default function Sectors() {
  const { toForm } = usePlan();

  return (
    <section className="py-16 md:py-24">
      <div className="wrap">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2 className="h-section lg:col-span-6">
            Built for the way Goa does business.
          </h2>
          <p className="max-w-[46ch] text-[var(--muted)] lg:col-span-5 lg:col-start-8">
            Stays, kitchens, homes and celebrations each fill up differently. Pick yours and we’ll start
            the plan from there.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-12">
          {sectors.map((s, i) => (
            <li key={s.id} className={`${SPAN[i]} ${i === 0 ? "sm:col-span-2 lg:col-span-7" : ""}`}>
              <WipeIn delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => toForm(s.id)}
                  className={`group relative block w-full overflow-hidden rounded-[24px] bg-[#d9e3e6] text-left cursor-pointer ${
                    i < 2 ? "h-[260px] md:h-[300px]" : "h-[220px] md:h-[240px]"
                  } ${focusRing}`}
                >
                  <Image
                    src={s.photo.src}
                    alt={s.photo.alt}
                    fill
                    unoptimized
                    loading="eager"
                    sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.06] motion-reduce:transition-none"
                  />
                  <span aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,28,64,0)_30%,rgba(1,28,64,0.55)_65%,rgba(1,28,64,0.92)_100%)]" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                    <span>
                      <span className="block text-lg font-semibold tracking-tight md:text-xl">{s.name}</span>
                      <span className="mt-1 block text-sm text-white/80">{s.line}</span>
                    </span>
                    <span
                      aria-hidden
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15 backdrop-blur transition-[background-color,color,transform] duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[var(--ink)]"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="sr-only">: plan for this business</span>
                </button>
              </WipeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
