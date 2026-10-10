"use client";

import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { branches } from "@/data/offices";
import { WhatsAppPill, focusRing } from "../ui";
import { useBrief, useBriefLabels } from "./Brief";
import { BHOPAL_WHATSAPP_HREF, areas } from "./content";

const office = branches.find((b) => b.city === "Bhopal")!;

/**
 * Bhopal's two lakes and a few main roads, drawn loosely (not to scale) in a 1000×600 box. Area pins in
 * content.ts are percentages of the same box. Used on this section's map and in the hero's preview.
 */
export function Lakes({
  className = "",
  lake,
  road,
  labels,
}: {
  className?: string;
  lake: string;
  road: string;
  /** colour for the lake names; omit to leave them out */
  labels?: string;
}) {
  return (
    // stretched (not cropped) to its box, so percentage pins stay where they belong at any aspect ratio
    <svg viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden className={className}>
      <g fill="none" stroke={road} strokeWidth="6" strokeLinecap="round">
        <path d="M0 150 C 180 140, 330 170, 470 190 S 760 230, 1000 210" />
        <path d="M520 0 C 540 160, 560 300, 600 420 S 700 560, 760 600" />
        <path d="M600 330 C 720 300, 860 280, 1000 300" />
        <path d="M380 600 C 420 480, 470 400, 560 360" />
        <path d="M640 420 C 740 470, 860 520, 1000 560" />
      </g>
      {/* Upper Lake (Bada Talab) */}
      <path
        fill={lake}
        d="M40 268 C 70 212, 150 196, 228 210 C 292 222, 334 206, 384 228 C 430 248, 438 292, 392 310 C 340 330, 290 326, 236 346 C 172 368, 96 360, 58 330 C 36 312, 30 288, 40 268 Z"
      />
      {/* Lower Lake (Chhota Talab) */}
      <path
        fill={lake}
        d="M448 262 C 470 240, 512 238, 540 252 C 562 264, 560 290, 534 300 C 506 310, 470 306, 452 292 C 440 282, 440 270, 448 262 Z"
      />
      {labels && (
        <g fill={labels} fontSize="22" fontStyle="italic" fontFamily="var(--font-numeral), Georgia, serif">
          <text x="150" y="285">Upper Lake</text>
          <text x="462" y="336">Lower Lake</text>
        </g>
      )}
    </svg>
  );
}

/**
 * The local case: the office on the left, a map of the city on the right. Each neighbourhood on the map is a
 * button that fills the "from people around …" blank in the hero sentence.
 */
export default function Local() {
  const { brief, set, toForm } = useBrief();
  const { area } = useBriefLabels();

  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="h-section max-w-[16ch]">A Bhopal team, a few streets away.</h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]">
              We plan around the neighbourhoods your customers live in, and you can always drop by
              the office.
            </p>
            <p className="mt-6 flex items-start gap-3 leading-relaxed">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-[var(--teal)]" aria-hidden />
              {office.address}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold">
              <a href={office.phoneHref} className={`inline-flex items-center gap-2 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}>
                <Phone className="h-4 w-4" aria-hidden />
                {office.phoneDisplay}
              </a>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
            <WhatsAppPill href={BHOPAL_WHATSAPP_HREF} className="mt-7" />
          </div>

          <div className="lg:col-span-7">
            <div
              role="group"
              aria-label="Neighbourhoods of Bhopal"
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[var(--ink)] sm:aspect-[16/10]"
            >
              <Lakes
                className="absolute inset-0 h-full w-full"
                lake="#0b4a7d"
                road="rgba(255,255,255,0.07)"
                labels="rgba(255,255,255,0.45)"
              />
              {areas.map((a) => {
                const on = brief.area === a.id;
                // the dot sits on the point; near the right edge the label goes to its left
                const flip = a.x > 72;
                return (
                  <button
                    key={a.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => set({ area: a.id }, "bhopal-map")}
                    style={flip ? { right: `${100 - a.x}%`, top: `${a.y}%` } : { left: `${a.x}%`, top: `${a.y}%` }}
                    className={`group absolute flex -translate-y-1/2 items-center gap-1.5 rounded-full p-1.5 cursor-pointer ${
                      flip ? "translate-x-3 flex-row-reverse" : "-translate-x-3"
                    } ${focusRing}`}
                  >
                    <span
                      aria-hidden
                      className={`block h-3 w-3 flex-none rounded-full transition-[background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] ${
                        on
                          ? "bg-[var(--cyan)] shadow-[0_0_0_5px_rgba(167,235,242,0.3)]"
                          : "bg-white/60 group-hover:scale-125 group-hover:bg-white"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ${
                        on ? "bg-[var(--cyan)] text-[var(--ink)]" : "text-white/75 group-hover:text-white max-sm:sr-only"
                      }`}
                    >
                      {a.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <p className="text-[var(--muted)]" aria-live="polite">
                {area ? (
                  <>
                    Planning for people around <span className="font-semibold text-[var(--ink)]">{area.label}</span>. Tap
                    another area to change it.
                  </>
                ) : (
                  "Tap your area to plan for the people around it."
                )}
              </p>
              <button
                type="button"
                onClick={() => toForm("bhopal-map")}
                className={`inline-flex items-center gap-1.5 rounded-sm font-semibold text-[var(--link)] hover:underline cursor-pointer ${focusRing}`}
              >
                Finish my plan
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
