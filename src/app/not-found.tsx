"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, PillLink, WhatsAppPill, focusRing } from "../../components/ui";

/** Where most lost visitors were trying to go. */
const links = [
  { label: "Our services", desc: "SEO, ads, social media, websites and more", href: "/services" },
  { label: "Our work", desc: "Clients and the results we brought them", href: "/clients" },
  { label: "Blog", desc: "Guides on growing your business online", href: "/blogs" },
  { label: "Contact us", desc: "Talk to the team about your plans", href: "/contact" },
];

/**
 * 404, in the site's own look. The site nav and footer come from the root layout, so this is only the middle:
 * a large serif 404, a plain explanation, a way home, and the pages people usually want.
 */
export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80%] bg-[radial-gradient(ellipse_50%_60%_at_25%_30%,rgba(167,235,242,0.5),transparent_70%)]"
      />

      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <p aria-hidden className="serif text-[clamp(6rem,16vw,11rem)] leading-[0.85] text-[var(--teal)]">
            404
          </p>
          <h1 className="h-section mt-6 max-w-[16ch]">This page doesn’t exist.</h1>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]">
            The link may be old, or the page has moved. Head back home, or try one of these popular pages.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PillLink href="/" tone="ink">
              Back to home
            </PillLink>
            <WhatsAppPill />
          </div>
        </div>

        <nav aria-label="Popular pages" className="lg:col-span-6">
          <ul className="overflow-hidden rounded-[24px] bg-[var(--surface)] ring-1 ring-[var(--line)]">
            {links.map((l) => (
              <li key={l.href} className="border-b border-[var(--line)] last:border-0">
                <Link
                  href={l.href}
                  className={`group flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-[var(--paper)] sm:px-7 ${focusRing}`}
                >
                  <span>
                    <span className="block font-semibold">{l.label}</span>
                    <span className="mt-0.5 block text-sm text-[var(--muted)]">{l.desc}</span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 flex-none text-[var(--link)] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Rather talk?{" "}
            <a href={PHONE_HREF} className={`rounded-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}>
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </nav>
      </div>
    </main>
  );
}
