"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_OUT, focusRing } from "../ui";
import { projects } from "./content";

/** the screen's height as a share of its width (16:10) */
const SCREEN = 10 / 16;

/**
 * Our work as a project viewer: pick a client on the left and their real site glides top to bottom inside one
 * large screen, with that project's result beside the list. Hovering the screen pauses it.
 */
export default function Showcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const p = projects[active];
  // travel just far enough that the bottom of the page reaches the bottom of the screen
  const scrollTo = `${-(1 - SCREEN / (p.height / p.width)) * 100}%`;

  return (
    <section id="work" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-14 md:py-20">
        <div className="wrap">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="h-section max-w-[24ch]">
              Websites built by a digital marketing agency in Bhopal, live and working.
            </h2>
            <p className="max-w-[40ch] text-[var(--muted)]">
              Real client sites, not mockups. Pick one to scroll through it and see the results it
              brought, like 3× more appointments for an orthopaedic clinic.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="flex min-w-0 flex-col lg:col-span-4">
              <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-col lg:overflow-visible">
                {projects.map((pr, i) => {
                  const on = i === active;
                  return (
                    <li key={pr.id} className="flex-none">
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => setActive(i)}
                        className={`w-full rounded-2xl px-4 py-3 text-left transition-colors duration-200 ease cursor-pointer ${focusRing} ${
                          on ? "bg-[var(--ink)] text-white" : "hover:bg-[var(--paper)]"
                        }`}
                      >
                        <span className="block whitespace-nowrap font-semibold">{pr.name}</span>
                        <span className={`block whitespace-nowrap text-sm ${on ? "text-white/65" : "text-[var(--muted)]"}`}>
                          {pr.kind}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div aria-live="polite" className="mt-6 border-t border-[var(--line)] pt-6 lg:mt-auto">
                <p className="flex items-baseline gap-3">
                  <span className="serif text-5xl leading-none text-[var(--teal)]">{p.stat}</span>
                  <span className="font-medium leading-snug">{p.statLabel}</span>
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.did}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}
                >
                  Visit {p.url}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            {/* the screen */}
            <div className="min-w-0 lg:col-span-8">
              <div className="rounded-[20px] bg-[var(--ink)] p-2 shadow-[0_40px_80px_-40px_rgba(1,28,64,0.55)] sm:p-2.5">
                <div className="flex items-center gap-3 px-2 pb-2 pt-0.5" aria-hidden>
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  </span>
                  <span className="mx-auto truncate rounded-full bg-white/10 px-4 py-1 text-xs text-white/70">{p.url}</span>
                  <span className="w-[42px]" />
                </div>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[12px] bg-white">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={p.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3, ease: EASE_OUT }}
                    >
                      <Image
                        src={p.img}
                        alt={`The ${p.name} website, scrolling from top to bottom`}
                        width={p.width}
                        height={p.height}
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="site-scroll h-auto w-full group-hover:[animation-play-state:paused]"
                        style={{ "--scroll-to": scrollTo } as React.CSSProperties}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div aria-hidden className="mx-auto h-2.5 w-[34%] rounded-b-xl bg-[var(--ink-2)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
