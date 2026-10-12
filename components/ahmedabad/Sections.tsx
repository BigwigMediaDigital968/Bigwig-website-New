"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WhatsAppPill, focusRing } from "../ui";
import ReviewStrip from "../ui/ReviewStrip";
import { AHMEDABAD_WHATSAPP_HREF, faqs, reviews } from "./content";

/* ---------- reviews ---------- */

/** Real Google reviews as a slow strip of cards, as on the Bhopal page (see ui/ReviewStrip). */
export function Reviews() {
  return (
    <section className="pb-14 md:pb-20">
      <h2 className="wrap h-section">In our clients’ words.</h2>
      <div className="mt-10">
        <ReviewStrip reviews={reviews} />
      </div>
    </section>
  );
}

/* ---------- FAQ, with a way to talk beside it ---------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="pb-14 md:pb-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="h-section">Questions Ahmedabad asks us.</h2>
          <div className="mt-8 rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
            <p className="font-semibold">Rather talk it through?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
              Meet us at our Ahmedabad office or yours, or start on WhatsApp.
            </p>
            <WhatsAppPill href={AHMEDABAD_WHATSAPP_HREF} className="mt-5" />
            <a
              href={PHONE_HREF}
              className={`mt-4 block w-fit rounded-sm text-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}
            >
              Or call {PHONE_DISPLAY}
            </a>
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
