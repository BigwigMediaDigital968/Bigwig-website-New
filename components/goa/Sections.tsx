"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { branches } from "@/data/offices";
import { focusRing } from "../ui";
import ReviewStrip from "../ui/ReviewStrip";
import { AzulejoBorder } from "./motifs";
import { faqs, reviews } from "./content";

const office = branches.find((b) => b.city === "Goa")!;

/* ---------- reviews: a strip of cards under a band of azulejo tiles ---------- */

/** Real Google reviews as a slow strip of cards, as on the Bhopal page (see ui/ReviewStrip). */
export function Reviews() {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--porcelain,var(--paper))]">
        <AzulejoBorder className="block h-10 w-full" ink="#26658c" />
        <div className="py-12 md:py-16">
          <h2 className="wrap serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">In our clients’ words.</h2>
          <div className="mt-8">
            <ReviewStrip reviews={reviews} starClassName="text-[var(--ochre-deep)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ, with the office beside it ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.05]">Questions Goa asks us.</h2>
          <div className="mt-8 rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
            <p className="text-sm text-[var(--muted)]">Our Goa office</p>
            <p className="mt-2 leading-relaxed">{office.address}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={office.phoneHref} className={`rounded-sm text-[var(--link)] hover:underline ${focusRing}`}>
                {office.phoneDisplay}
              </a>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-[var(--line-strong)] last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-6 py-4 text-left font-semibold cursor-pointer ${focusRing}`}
                  >
                    {f.q}
                    <Plus
                      aria-hidden
                      className={`h-5 w-5 flex-none text-[var(--link)] transition-transform duration-200 ease-[var(--ease-out)] ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div id={`${uid}-${i}`} hidden={!isOpen} className="max-w-[62ch] pb-5 leading-relaxed text-[var(--muted)]">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
