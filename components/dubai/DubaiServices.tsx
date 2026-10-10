"use client";

import { useId, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { dubaiServices } from "@/data/dubaiData";
import { DUBAI_PHONE_NUMBER, PillLead, SectionHead, WhatsAppPill, fadeUp, inView, stagger, whatsappHref } from "../ui";
import { MuseumOfTheFutureLine, PalmJumeirahLine } from "./Landmarks";
import { serviceDetails } from "./content";
import { servicePreviews } from "./photos";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

/** True on mouse/trackpad devices, where rows open on hover. */
function useFinePointer() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(FINE_POINTER);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );
}

/**
 * Service list as an accordion. Opening a row (hover on desktop, tap or keyboard anywhere) grows it,
 * fades that service's Dubai photo in behind a navy wash, and reveals what's included plus the CTAs.
 */
export default function DubaiServices() {
  const [open, setOpen] = useState<number | null>(null);
  const fine = useFinePointer();
  const baseId = useId();

  return (
    <section id="services" className="scroll-mt-24 px-2 md:px-3">
      <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        {/* landmark watermarks */}
        <MuseumOfTheFutureLine className="pointer-events-none absolute -right-24 -top-8 -z-10 w-[560px] max-w-[90vw] text-[var(--ink)] opacity-[0.06]" />
        <PalmJumeirahLine className="pointer-events-none absolute -bottom-28 -left-24 -z-10 hidden w-[460px] text-[var(--ink)] opacity-[0.06] md:block" />

        <div className="wrap">
          <SectionHead
            lead="Our digital marketing services in Dubai, UAE"
            title="Your trusted digital marketing partner in Dubai, UAE"
            actions={<PillLead source="dubai-services">Get a free recommendation</PillLead>}
          />
          <motion.p
            {...inView}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
          >
            We combine deep market understanding, innovation, and performance-driven strategies to ensure your brand
            achieves measurable results.
          </motion.p>

          <motion.ul
            {...inView}
            variants={stagger(0.05)}
            onMouseLeave={() => fine && setOpen(null)}
            className="mt-14 border-t border-[var(--line)]"
          >
            {dubaiServices.map((s, i) => {
              const photo = servicePreviews[s.href];
              const details = serviceDetails[s.href];
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <motion.li
                  variants={fadeUp}
                  key={s.href}
                  data-open={isOpen}
                  onMouseEnter={() => fine && setOpen(i)}
                  className="group relative isolate overflow-hidden border-b border-[var(--line)]"
                >
                  {/* background photo + navy wash, shown while the row is open */}
                  {photo && (
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-out group-data-[open=true]:opacity-100 motion-reduce:transition-none"
                    >
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        sizes="(min-width: 1600px) 1600px, 100vw"
                        className="scale-110 object-cover transition-transform duration-[1200ms] ease-out group-data-[open=true]:scale-100 motion-reduce:transition-none"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,28,64,0.92)_10%,rgba(1,28,64,0.78)_65%,rgba(1,28,64,0.55)_100%)]" />
                    </div>
                  )}

                  {/* header row: the button's hit area stretches across the whole header */}
                  <div className="relative grid gap-3 py-7 transition-[padding] duration-500 ease-out motion-reduce:transition-none max-md:group-data-[open=true]:px-5 md:grid-cols-12 md:items-center md:gap-8 md:px-6 md:py-8 md:group-data-[open=true]:pt-12">
                    <h3 className="md:col-span-5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen && !fine ? null : i)}
                        className="cursor-pointer rounded-sm pr-14 text-left text-[1.45rem] font-semibold leading-tight tracking-tight transition-[color,translate] duration-500 ease-out after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--link)] group-data-[open=true]:text-white group-data-[open=true]:focus-visible:outline-[var(--cyan)] md:pr-0 md:text-[1.75rem] md:group-data-[open=true]:translate-x-3"
                      >
                        {s.title}
                      </button>
                    </h3>
                    <p className="max-w-[62ch] pr-14 leading-relaxed text-[var(--muted)] transition-colors duration-500 group-data-[open=true]:text-white/85 md:col-span-6 md:pr-0">
                      {s.desc}
                    </p>
                    {/* click-through: taps on the icon land on the button's stretched hit area underneath */}
                    <div className="pointer-events-none absolute right-0 top-7 transition-[right] duration-500 ease-out motion-reduce:transition-none max-md:group-data-[open=true]:right-5 md:static md:col-span-1 md:flex md:justify-end">
                      <span
                        aria-hidden
                        className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors duration-300 group-data-[open=true]:bg-[var(--cyan)] group-data-[open=true]:text-[var(--ink)] group-data-[open=true]:ring-[var(--cyan)]"
                      >
                        <Plus className="h-5 w-5 transition-transform duration-300 group-data-[open=true]:rotate-45" />
                      </span>
                    </div>
                  </div>

                  {/* what's included + CTAs; collapses to zero height when closed */}
                  <div
                    id={panelId}
                    role="region"
                    aria-label={`${s.title}: what's included`}
                    inert={!isOpen}
                    className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-data-[open=true]:grid-rows-[1fr] motion-reduce:transition-none"
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid gap-8 px-5 pb-10 md:grid-cols-12 md:gap-8 md:px-6 md:pb-12">
                        {details && (
                          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:col-span-6 md:col-start-6">
                            {details.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-[0.95rem] leading-snug text-white/90">
                                <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--cyan)]" aria-hidden />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-3 md:col-span-6 md:col-start-6">
                          <PillLead source={`dubai-service-${i}`} tone="cyan">
                            Get a free proposal
                          </PillLead>
                          <WhatsAppPill
                            dark
                            href={whatsappHref(`Hi BigWig Media Digital! I'm interested in ${s.title} in Dubai, UAE.`, DUBAI_PHONE_NUMBER)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
