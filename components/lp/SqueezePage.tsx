"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Star } from "lucide-react";
import { clients } from "@/data/clients";
import { testimonials } from "@/data/homeData";
import { PHONE_DISPLAY, PHONE_HREF, focusRing } from "../ui";
import type { Campaign } from "./campaigns";
import LeadForm from "./LeadForm";

const LOGOS = ["Global Technologies India", "Rehnoor Jewels", "Dr. Himanshu Verma", "Granth Dream Homes", "Mondus Properties"]
  .map((n) => clients.find((c) => c.name === n))
  .filter((c): c is (typeof clients)[number] => Boolean(c));
const REVIEW = testimonials.find((t) => t.name === "Manjot Singh");

/**
 * A squeeze page for ad traffic: no site nav, footer or outbound links, one form. On phones the headline and the
 * form fill the first screen, with the proof below. On desktop the promise and proof sit on the left and the
 * form card on the right, all in one screen.
 */
export default function SqueezePage({ campaign }: { campaign: Campaign }) {
  return (
    <div className="relative isolate flex min-h-[100svh] flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%] bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,rgba(167,235,242,0.5),transparent_70%)]"
      />

      {/* the logo is not a link: nothing here leads off the page */}
      <header className="wrap flex items-center justify-between py-4 md:py-6">
        <span className="flex items-center gap-2">
          <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-8 w-auto" priority />
          <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-5 w-auto" priority />
        </span>
        <a
          href={PHONE_HREF}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[var(--ink)] ring-1 ring-inset ring-[var(--line-strong)] transition-colors hover:bg-white ${focusRing}`}
        >
          <Phone className="h-4 w-4 text-[var(--link)]" aria-hidden />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </header>

      <main className="wrap grid flex-1 gap-x-14 gap-y-6 pb-28 md:pb-16 lg:grid-cols-12 lg:content-center lg:pb-16">
        {/* 1. the promise (above the form on phones) */}
        <div className="lg:col-span-7 lg:row-start-1 lg:self-end">
          <h1 className="text-[clamp(1.75rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
            {campaign.headline}
          </h1>
          <p className="mt-3 hidden max-w-[48ch] text-lg leading-relaxed text-[var(--muted)] sm:block lg:mt-5">{campaign.sub}</p>
        </div>

        {/* 2. the form: right column on desktop, straight after the headline on phones */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="rounded-[24px] bg-[var(--surface)] p-5 shadow-[0_30px_60px_-36px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] sm:p-6">
            <p className="mb-3 text-lg font-semibold leading-snug">Get your free growth plan</p>
            <LeadForm campaign={campaign} />
          </div>
        </div>

        {/* 3. why trust us (below the form on phones) */}
        <div className="lg:col-span-7 lg:row-start-2 lg:self-start">
          <p className="max-w-[48ch] leading-relaxed text-[var(--muted)] sm:hidden">{campaign.sub}</p>
          <ul className="mt-5 space-y-2.5 sm:mt-0">
            {campaign.points.map((p) => (
              <li key={p} className="flex items-start gap-3 leading-snug">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--cyan)]">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>

          {REVIEW && (
            <figure className="mt-8 max-w-[52ch] border-l-2 border-[var(--teal)] pl-5">
              <span className="flex text-[var(--teal)]" aria-hidden>
                {Array.from({ length: REVIEW.rating }, (_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <blockquote className="mt-2 leading-relaxed text-[var(--ink)]/85">“{REVIEW.review}”</blockquote>
              <figcaption className="mt-2 text-sm">
                <span className="font-semibold">{REVIEW.name}</span>
                <span className="text-[var(--muted)]">
                  <span className="sr-only">, {REVIEW.rating} out of 5 stars</span>, Google review
                </span>
              </figcaption>
            </figure>
          )}

          <div className="mt-8">
            <p className="text-sm text-[var(--muted)]">Trusted by businesses across India</p>
            {/* logos only, not links */}
            <ul className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-4">
              {LOGOS.map((c) => (
                <li key={c.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.name} loading="lazy" className="h-6 w-auto max-w-[110px] object-contain opacity-50 brightness-0 md:h-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-5 pb-28 text-xs text-[var(--muted)] md:pb-5">
        <span>© {new Date().getFullYear()} BigWig Media Digital</span>
        <span className="flex gap-4">
          <Link href="/privacy-policy" className={`rounded-sm hover:text-[var(--ink)] ${focusRing}`}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-condition" className={`rounded-sm hover:text-[var(--ink)] ${focusRing}`}>
            Terms
          </Link>
        </span>
      </footer>
    </div>
  );
}
