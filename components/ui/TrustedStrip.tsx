"use client";

import { clients } from "@/data/clients";
import { focusRing } from ".";

/**
 * The "Trusted by" row: full-colour logos that read on the light background, cropped to their edges
 * (public/clients-logo/trimmed). `aspect` is width ÷ height of each file; `weight` tones down icon-heavy marks.
 */
const AREA = 4800;
const TRUSTED: { name: string; src: string; aspect: number; weight?: number }[] = [
  { name: "Rehnoor Jewels", src: "/clients-logo/trimmed/rehnoorjewels.png", aspect: 1.8 },
  { name: "RPH Realty", src: "/clients-logo/trimmed/rphrealty.png", aspect: 4.62 },
  { name: "Marketrixa", src: "/clients-logo/trimmed/marktrixa.png", aspect: 5.99 },
  { name: "AVF Care Workshop", src: "/clients-logo/trimmed/avfcareworkshop.png", aspect: 1.93 },
  { name: "Homes and Land Goa", src: "/clients-logo/trimmed/homesandlandgoa.png", aspect: 1.12 },
  { name: "Granth Dream Homes", src: "/clients-logo/trimmed/granthdreamhomes.png", aspect: 2.25 },
  { name: "Global Technologies India", src: "/clients-logo/trimmed/globaltechnologies.png", aspect: 1.33, weight: 0.7 },
  // more logos that read on the light background, so the loop fills a wide screen (white-lettered logos stay out)
  // { name: "Gear Tek", src: "/clients-logo/trimmed/gear-tek.png", aspect: 1.51, weight: 0.8 },
  // { name: "Stellar Binge", src: "/clients-logo/trimmed/stellarbinge.png", aspect: 1.75, weight: 0.85 },
  // { name: "Ethical Infrastructures", src: "/clients-logo/trimmed/ethicalinfrastructure.png", aspect: 1.45 },
  { name: "Destiny by Numbers", src: "/clients-logo/trimmed/destinybynumbbers.png", aspect: 1.83 },
  // { name: "The Stellar Gymkhana", src: "/clients-logo/trimmed/thestellargymkhana.png", aspect: 2.51 },
];

/**
 * A label and a slow loop of client logos (see .marquee in brand.css), shared by the home and city pages. Every
 * logo links to the client's site. The list is doubled so moving by half is seamless; the copies are hidden from
 * screen readers and the tab order. Pauses on hover/focus; stops and scrolls by hand with reduced motion.
 * Put it inside a `.wrap`.
 */
export default function TrustedStrip({
  label,
  bordered = true,
  className = "",
}: {
  label: string;
  /** a hairline above, as in the page heroes */
  bordered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-10 ${bordered ? "border-t border-[var(--line)] pt-7" : ""} ${className}`}
    >
      <p className="flex-none text-sm font-medium text-[var(--muted)]">{label}</p>
      <div className="marquee-mask min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto">
        <ul className="marquee items-center gap-x-12 py-2 md:gap-x-14" style={{ animationDuration: "45s" }}>
          {[...TRUSTED, ...TRUSTED].map((l, i) => {
            const copy = i >= TRUSTED.length;
            // same visual weight for every logo: the box keeps one area, so stacked logos get more height and
            // long wordmarks less (height = √(area ÷ aspect))
            const h = Math.round(Math.sqrt((AREA * (l.weight ?? 1)) / l.aspect));
            const link = clients.find((c) => c.name === l.name)?.link;
            const logo = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={l.src}
                alt={copy ? "" : l.name}
                draggable={false}
                style={{ "--h": `${h}px` } as React.CSSProperties}
                // full strength at rest; a small lift on hover or keyboard focus
                className="h-[calc(var(--h)*0.8)] drop-shadow-xl w-auto object-contain transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 md:h-[var(--h)]"
              />
            );
            return (
              <li key={i} aria-hidden={copy || undefined} className="flex-none">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title={l.name}
                    tabIndex={copy ? -1 : undefined}
                    className={`group block rounded-md p-1 ${focusRing}`}
                  >
                    {logo}
                    {!copy && <span className="sr-only">(opens {l.name} website in a new tab)</span>}
                  </a>
                ) : (
                  <span className="group block p-1">{logo}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
