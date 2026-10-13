"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { branches, headOffice, type Office } from "@/data/offices";
import { EASE_OUT, SectionHead, focusRing } from "../ui";

/** every office, head office first; each gets a map (Delhi has its own embed, the rest search by address) */
const offices: (Office & { mapEmbed?: string })[] = [headOffice, ...branches];

const embedSrc = (o: Office & { mapEmbed?: string }) =>
  o.mapEmbed ?? `https://maps.google.com/maps?q=${encodeURIComponent(`Bigwig Media Digital, ${o.address}`)}&z=15&output=embed`;

/** the UAE branch is the only one outside India */
const country = (o: Office) => (o.city === "Dubai" ? "UAE" : "India");

/**
 * Our offices as a list you pick from, with one large map and the details of the chosen office beside it.
 * On phones the list becomes a row of city buttons above the map. Arrow keys move between offices.
 */
export default function Offices() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const uid = useId();
  const o = offices[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = offices.length - 1;
    const to = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: last }[
      e.key
    ];
    if (to === undefined) return;
    e.preventDefault();
    const i = to < 0 ? last : to > last ? 0 : to;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <section className="px-2 py-14 md:px-3 md:py-20">
      <div className="wrap">
        <SectionHead lead="Our offices" title="Find a Bigwig location near you." />

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-10">
          {/* the offices */}
          <div
            role="tablist"
            aria-label="Offices"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {offices.map((x, i) => {
              const on = i === active;
              return (
                <button
                  key={x.city}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  id={`${uid}-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`${uid}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex flex-none cursor-pointer items-center justify-between gap-6 rounded-full px-5 py-2.5 text-left font-semibold ring-1 ring-inset transition-colors duration-150 lg:rounded-[20px] lg:px-6 lg:py-4 ${focusRing} ${
                    on
                      ? "bg-[var(--ink)] text-white ring-[var(--ink)]"
                      : "bg-[var(--surface)] text-[var(--ink)] ring-[var(--line)] hover:ring-[var(--line-strong)]"
                  }`}
                >
                  <span>
                    <span className="block text-base lg:text-xl">{x.city}</span>
                    <span className={`hidden text-sm font-normal lg:block ${on ? "text-white/65" : "text-[var(--muted)]"}`}>
                      {x.label}, {country(x)}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className={`hidden h-5 w-5 flex-none transition-transform duration-200 lg:block ${on ? "text-[var(--cyan)]" : "text-[var(--link)]"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* the chosen office: map and details */}
          <div
            id={`${uid}-panel`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${active}`}
            className="overflow-hidden rounded-[28px] bg-[var(--surface)] ring-1 ring-[var(--line)] lg:col-span-8"
          >
            <iframe
              key={o.city}
              src={embedSrc(o)}
              title={`Map of the Bigwig Media Digital ${o.city} office`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[280px] w-full border-0 md:h-[380px]"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={o.city}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                className="flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-8"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--link)]">
                    {o.label}, {country(o)}
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{o.city}</h3>
                  <p className="mt-4 flex max-w-md items-start gap-2.5 leading-relaxed text-[var(--muted)]">
                    <MapPin className="mt-1 h-4 w-4 flex-none text-[var(--link)]" aria-hidden />
                    {o.address}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:flex-none">
                  <a
                    href={o.phoneHref}
                    className={`inline-flex items-center gap-2 rounded-sm font-semibold hover:underline ${focusRing}`}
                  >
                    <Phone className="h-4 w-4 text-[var(--link)]" aria-hidden />
                    {o.phoneDisplay}
                  </a>
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--ink)] pl-6 pr-1.5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] ${focusRing}`}
                  >
                    Get directions
                    <span className="sr-only">to our {o.city} office (opens in a new tab)</span>
                    <span
                      aria-hidden
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
