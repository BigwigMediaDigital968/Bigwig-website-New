"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_OUT, PillLead, PillLink, SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import { coreServices } from "./content";

/**
 * Three highlighted core services (each links to its main service page), then a link to all services.
 * Hovering, focusing or tapping a row makes it active: it turns brand blue and the frame on the right
 * cross-fades to that service's image.
 */
export default function RealEstateServices() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = coreServices[active];

  return (
    <section id="services" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            lead="Core services"
            title="Our core services for property brands."
            actions={<PillLead source="dubai-v2-services">Get a free consultation</PillLead>}
          />

          <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-14">
            {/* image frame: first on phones, sticky beside the list on desktop */}
            <div className="lg:order-2 lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[var(--paper)] ring-1 ring-[var(--line)] lg:sticky lg:top-28">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={current.title}
                    className="absolute inset-0"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, transition: { duration: 0.2, ease: EASE_OUT } }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                  >
                    <Image
                      src={current.img}
                      alt={current.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,11,33,0.7),transparent_45%)]"
                />
                <p
                  aria-live="polite"
                  className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium backdrop-blur-md"
                >
                  {current.title}
                </p>
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-6">
              <motion.ol {...inView} variants={stagger(0.06)} className="border-t border-[var(--line)]">
                {coreServices.map((s, i) => {
                  const on = active === i;
                  return (
                    <motion.li
                      key={s.title}
                      variants={fadeUp}
                      onMouseEnter={() => setActive(i)}
                      className={`relative border-b border-[var(--line)] transition-colors duration-200 ease ${on ? "bg-[var(--paper)]" : ""}`}
                    >
                      {/* active marker */}
                      <span
                        aria-hidden
                        className={`absolute left-0 top-0 h-full w-0.5 origin-top bg-[var(--teal)] transition-transform duration-300 ease-[var(--ease-out)] ${on ? "scale-y-100" : "scale-y-0"}`}
                      />
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        aria-pressed={on}
                        className={`grid w-full grid-cols-[auto_1fr] gap-x-5 py-8 pl-6 pr-2 text-left cursor-pointer md:gap-x-7 md:py-10 ${focusRing}`}
                      >
                        <span
                          aria-hidden
                          className={`serif text-4xl leading-none transition-colors duration-200 ease ${on ? "text-[var(--teal)]" : "text-[var(--ink)]/25"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span
                            className={`block text-2xl font-semibold leading-tight tracking-tight transition-colors duration-200 ease md:text-[1.75rem] ${
                              on ? "text-[var(--link)]" : "text-[var(--ink)]"
                            }`}
                          >
                            {s.title}
                          </span>
                          <span
                            className={`mt-3 block max-w-[52ch] leading-relaxed transition-colors duration-200 ease ${on ? "text-[var(--ink)]/80" : "text-[var(--muted)]"}`}
                          >
                            {s.desc}
                          </span>
                        </span>
                      </button>
                      <Link
                        href={s.href}
                        // indented to line up with the title: left padding + number column + gap
                        className={`mb-7 ml-[4.75rem] inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-[var(--link)] hover:underline md:ml-[5.1rem] ${focusRing}`}
                      >
                        Explore {s.title.split(" (")[0]}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ol>
              {/* these three are the highlights; the full list lives on the services page */}
              <motion.div {...inView} variants={fadeUp} className="mt-10">
                <PillLink href="/services" tone="ghost">
                  Explore all services
                </PillLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
