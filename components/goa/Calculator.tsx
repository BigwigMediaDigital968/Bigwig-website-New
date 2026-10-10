"use client";

import { useId, useState } from "react";
import { ArrowDown } from "lucide-react";
import { focusRing } from "../ui";
import { CarepaLattice } from "./motifs";
import { bookings, commission } from "./content";

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

/** share of OTA bookings we assume can move to direct, for the "keep" line */
const SHIFT = 1 / 3;
/** months in the peak season */
const SEASON = 6;

/**
 * For stays: what OTA commission costs per month and per season, from two sliders, and what moving a third of
 * those bookings to direct would keep. Plain arithmetic, shown as it changes.
 */
export default function Calculator() {
  const [value, setValue] = useState(bookings.initial);
  const [rate, setRate] = useState(commission.initial);
  const uid = useId();

  const monthly = (value * rate) / 100;
  const season = monthly * SEASON;
  const keep = season * SHIFT;

  return (
    <section className="px-2 md:px-3">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-14 text-white md:py-20">
        <CarepaLattice className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-12 opacity-[0.07]" line="#ffffff" />
        <div className="wrap relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">What OTAs cost you this season.</h2>
            <p className="mt-4 max-w-[44ch] leading-relaxed text-white/70">
              Booking platforms typically take somewhere between 10% and 30% of every booking. Move the
              sliders to your numbers.
            </p>
            <a
              href="#plan"
              className={`mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[var(--ochre)] hover:underline ${focusRing}`}
            >
              Plan my direct bookings
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10 md:p-8 lg:col-span-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <Slider
                id={`${uid}-value`}
                label="Monthly bookings through OTAs"
                display={inr(value)}
                min={bookings.min}
                max={bookings.max}
                step={bookings.step}
                value={value}
                onChange={setValue}
              />
              <Slider
                id={`${uid}-rate`}
                label="Average commission"
                display={`${rate}%`}
                min={commission.min}
                max={commission.max}
                step={1}
                value={rate}
                onChange={setRate}
              />
            </div>

            <dl className="mt-8 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3" aria-live="polite">
              <div>
                <dt className="text-sm text-white/60">Paid to OTAs a month</dt>
                <dd className="serif mt-1 text-2xl md:text-[1.75rem]">{inr(monthly)}</dd>
              </div>
              <div>
                <dt className="text-sm text-white/60">Over a six-month season</dt>
                <dd className="serif mt-1 text-2xl md:text-[1.75rem]">{inr(season)}</dd>
              </div>
              <div>
                <dt className="text-sm text-[var(--ochre)]">Kept if a third book direct</dt>
                <dd className="serif mt-1 text-2xl text-[var(--ochre)] md:text-[1.75rem]">{inr(keep)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  id,
  label,
  display,
  min,
  max,
  step,
  value,
  onChange,
}: {
  id: string;
  label: string;
  display: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-white/70">
          {label}
        </label>
        <span className="text-[0.95rem] font-semibold">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: `linear-gradient(90deg, var(--ochre) ${pct}%, rgba(255,255,255,0.15) ${pct}%)` }}
        className="goa-range mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full focus:outline-none"
      />
    </div>
  );
}
