"use client";

import { MapPin, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import EnquiryForm from "../contact/EnquiryForm";
import { PHONE_DISPLAY, PHONE_HREF, focusRing } from "../ui";
import { AHMEDABAD_WHATSAPP_HREF } from "./content";

/** White fields with the brand-blue outline inside the card (as in DubaiHero), without touching the shared form. */
const blueFields = {
  "--paper": "#f7fafc",
  "--line": "rgba(38, 101, 140, 0.45)",
  "--line-strong": "#26658c",
} as React.CSSProperties;

/** What happens after the form is sent, in order. */
const steps = [
  { title: "You send this form", desc: "Two minutes. Tell us what you sell and who you want to reach." },
  { title: "We call you", desc: "Within one working day, on WhatsApp or phone." },
  { title: "Your plan arrives", desc: "Channels, budget and what to expect, in writing. Free." },
];

/**
 * The page's lead form: one navy card. On the left, the promise and what happens next (a real sequence, so it's
 * numbered), with the other ways to reach us at the foot. On the right, the compact enquiry form on a white card.
 * Sized to fit one screen on a laptop. Every "free plan" button on the page scrolls here.
 */
export default function Enquire() {
  const alt = `inline-flex items-center gap-2 rounded-sm text-sm text-white/75 transition-colors hover:text-white ${focusRing}`;

  return (
    <section id="enquire" className="scroll-mt-28 px-2 pb-14 md:px-3 md:pb-20">
      <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-[var(--ink)] text-white md:rounded-[32px]">
        {/* a soft teal light behind the form */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_70%_at_75%_50%,rgba(84,172,191,0.28),transparent_70%)]"
        />

        <div className="wrap grid gap-10 py-10 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="h-section max-w-[14ch]">Get your free growth plan.</h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-white/70">
              No pitch deck, no lock-in. A clear plan for your business, from our team in Ahmedabad.
            </p>

            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="serif flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10 text-lg text-[var(--cyan)] ring-1 ring-inset ring-white/15"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5">
              <a href={AHMEDABAD_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={alt}>
                <FontAwesomeIcon icon={faWhatsapp} className="text-base text-[#25D366]" />
                WhatsApp us
                <span className="sr-only">(opens WhatsApp in a new tab)</span>
              </a>
              <a href={PHONE_HREF} className={alt}>
                <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
                {PHONE_DISPLAY}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-white/75">
                <MapPin className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
                Office in Ahmedabad
              </span>
            </div>
          </div>

          {/* compact form (services as a dropdown, short message box) so the whole card fits one screen */}
          <div
            style={blueFields}
            className="rounded-[24px] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] sm:p-8 lg:col-span-7"
          >
            <EnquiryForm source="ahmedabad-enquire" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
