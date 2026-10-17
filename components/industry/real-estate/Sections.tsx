"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { PillLead, SectionHead, WhatsAppPill, fadeUp, focusRing, inView, maskUp, stagger, whatsappHref } from "../../ui";
import TrustedStrip from "../../ui/TrustedStrip";
import EnquiryForm from "../../contact/EnquiryForm";

/* Sections specific to the real-estate industry page. Shared blocks live in components/service. */

/** "Trusted by" logo loop under the hero. */
export function RealEstateTrust() {
  return (
    <div className="wrap pt-10">
      <TrustedStrip label="Trusted by real estate brands across India, UAE and Goa" />
    </div>
  );
}

/* ---------- marketing services, tabbed ---------- */

type MarketingTab = { name: string; icon: React.ReactNode; benefit: string; items: { title: string; desc: string }[] };

export function MarketingTabs({ tabs, source }: { tabs: MarketingTab[]; source: string }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead
          lead="Digital marketing for real estate"
          title="Real Estate Digital Marketing Services That Fill Your Sales Pipeline"
          actions={<PillLead source={source}>Get a free audit</PillLead>}
        />
        <motion.div
          {...inView}
          variants={fadeUp}
          className="mt-12 overflow-hidden rounded-[28px] bg-[var(--surface)] ring-1 ring-inset ring-[var(--line)] md:mt-14"
        >
          <div role="tablist" aria-label="Marketing services" className="scrollbar-hide flex gap-2 overflow-x-auto border-b border-[var(--line)] bg-[var(--paper)]/60 p-3">
            {tabs.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                id={`re-tab-${i}`}
                aria-selected={i === active}
                aria-controls="re-panel"
                onClick={() => setActive(i)}
                className={`flex min-h-11 flex-none cursor-pointer items-center gap-2 rounded-full px-4 text-[0.95rem] font-medium transition-colors ${focusRing} ${
                  i === active ? "bg-[var(--ink)] text-white" : "hover:bg-[var(--surface)]"
                }`}
              >
                <span aria-hidden className={i === active ? "text-[var(--cyan)]" : "text-[var(--link)]"}>
                  {t.icon}
                </span>
                {t.name}
              </button>
            ))}
          </div>
          <div id="re-panel" role="tabpanel" aria-labelledby={`re-tab-${active}`} className="p-6 md:p-10">
            <p className="text-lg font-medium text-[var(--link)]">{tab.benefit}</p>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-[20px] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {tab.items.map((it) => (
                <li key={it.title} className="bg-[var(--surface)] p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- client work ---------- */

export type RealEstateWork = {
  name: string;
  market: string;
  site: string;
  image: string;
  tags: string[];
  /** only real, published figures */
  result?: { value: string; label: string };
};

export function RealEstateWorkGrid({ work }: { work: RealEstateWork[] }) {
  return (
    <section id="work" className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead="Our real estate work" title="Real Estate Brands We've Helped Grow Online" />
        <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          From developers and brokerages to land and property consultants, we&apos;ve delivered websites and marketing that
          build trust and generate enquiries.
        </motion.p>
        <motion.ul
          {...inView}
          variants={stagger(0.08, 0.1)}
          className="scrollbar-hide -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:overflow-visible md:px-0"
        >
          {work.map((w) => (
            <motion.li key={w.name} variants={fadeUp} className="w-[85%] flex-none snap-start md:w-auto">
              <a
                href={w.site}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col overflow-hidden rounded-[24px] bg-[var(--surface)] p-3 ring-1 ring-inset ring-[var(--line)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(1,28,64,0.35)] ${focusRing}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,var(--paper),var(--cyan))]">
                  <div className="absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-xl bg-white shadow-[0_20px_40px_-20px_rgba(1,28,64,0.5)]">
                    <div aria-hidden className="flex gap-1.5 border-b border-[var(--line)] bg-[var(--paper)] px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="relative h-full">
                      <Image
                        src={w.image}
                        alt={`${w.name} real estate website design by Bigwig Media Digital`}
                        fill
                        sizes="(min-width: 768px) 45vw, 85vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center bg-[var(--ink)]/60 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    View Project →
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-4 pt-5 md:px-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{w.name}</h3>
                      <p className="text-sm text-[var(--muted)]">{w.market}</p>
                    </div>
                    <ArrowUpRight aria-hidden className="mt-1 h-5 w-5 flex-none text-[var(--link)]" />
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <li key={t} className="rounded-full bg-[var(--paper)] px-3 py-1 text-xs font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {w.result && (
                    <p className="mt-auto pt-5 text-[0.95rem] text-[var(--muted)]">
                      <span className="serif mr-2 text-3xl text-[var(--link)]">{w.result.value}</span>
                      {w.result.label}
                    </p>
                  )}
                  <span className="sr-only">(opens {w.name} website in a new tab)</span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- stats ---------- */

export function RealEstateStats({
  items,
  quote,
}: {
  items: { value: string; label: string }[];
  quote?: { text: string; by: string };
}) {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-16 text-white md:py-20">
        <div className="wrap">
          <motion.dl {...inView} variants={stagger(0.08)} className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {items.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className={`flex flex-col pl-5 ${i % 2 ? "border-l border-white/20" : ""} ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}
              >
                <dd className="serif order-first text-5xl leading-none text-[var(--cyan)] md:text-6xl">{s.value}</dd>
                <dt className="mt-3 text-sm leading-snug text-white/70">{s.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
          {quote && (
            <motion.figure {...inView} variants={fadeUp} className="mt-14 max-w-3xl border-t border-white/15 pt-8">
              <div className="flex gap-1 text-[var(--cyan)]" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-snug md:text-xl">“{quote.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-white/60">{quote.by}</figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- features: checklist beside a phone mockup ---------- */

export function FeatureChecklist({ features, source }: { features: string[]; source: string }) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div {...inView} variants={stagger(0.08)} className="lg:col-span-7">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Key features
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Features That Help Property Websites Sell
              </motion.span>
            </span>
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {features.map((f) => (
              <motion.li key={f} variants={fadeUp} className="flex gap-3 leading-snug">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)]"
                >
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>
          <motion.div variants={fadeUp} className="mt-8">
            <PillLead source={source}>Plan your property website</PillLead>
          </motion.div>
        </motion.div>

        {/* phone mockup, drawn in CSS so it never goes stale */}
        <motion.div
          {...inView}
          variants={fadeUp}
          role="img"
          aria-label="Mobile-friendly property website with enquiry form"
          className="mx-auto w-[260px] rounded-[40px] bg-[var(--ink)] p-2.5 shadow-[0_40px_80px_-30px_rgba(1,28,64,0.6)] lg:col-span-5"
        >
          <div aria-hidden className="overflow-hidden rounded-[32px] bg-white">
            <div className="h-36 bg-[linear-gradient(135deg,var(--link),var(--teal))]" />
            <div className="space-y-3 p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold">3 BHK Residence</span>
                <span className="serif text-lg text-[var(--link)]">₹ 1.8 Cr</span>
              </div>
              <div className="flex gap-1.5">
                {["3 Bed", "2 Bath", "1,450 sq ft"].map((c) => (
                  <span key={c} className="rounded-full bg-[var(--paper)] px-2 py-1 text-[0.65rem] font-medium">
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative h-20 rounded-xl bg-[var(--paper)]">
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5484d] ring-4 ring-[#e5484d]/25" />
              </div>
              <div className="rounded-full bg-[var(--ink)] py-2.5 text-center text-xs font-semibold text-white">
                Book Site Visit
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- why us ---------- */

export function WhyGrid({ items }: { items: { icon: React.ReactNode; title: string; desc: string }[] }) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead="Why Bigwig" title="Why Real Estate Brands Choose Us" />
        <motion.ul {...inView} variants={stagger(0.06, 0.1)} className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {items.map((it) => (
            <motion.li
              key={it.title}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-inset ring-[var(--line)] md:p-7"
            >
              <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)]">
                {it.icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">{it.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- final CTA with form ---------- */

export function RealEstateCta({ source, whatsappMessage }: { source: string; whatsappMessage: string }) {
  return (
    <section id="enquire" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-16 text-white md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-6">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
              Free website and marketing audit
            </motion.p>
            <h2 className="h-section mt-3 text-white">Ready to Generate More Qualified Property Leads?</h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Talk to our real estate marketing experts and get a free website and digital marketing audit.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <WhatsAppPill href={whatsappHref(whatsappMessage)} dark />
            </motion.div>
          </motion.div>
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-[28px] bg-[var(--surface)] p-6 text-[var(--ink)] sm:p-8 lg:col-span-6"
          >
            <h3 className="text-2xl font-semibold tracking-tight">Book a Free Consultation</h3>
            <div className="mt-5">
              <EnquiryForm source={source} defaultServices={["Website Development", "Performance Marketing"]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- related links ---------- */

export function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead="Related services" title="Explore Our Real Estate Services" />
        <motion.ul {...inView} variants={stagger(0.04)} className="mt-12 flex flex-wrap gap-2 md:mt-14">
          {links.map((l) => (
            <motion.li key={l.href} variants={fadeUp}>
              <Link
                href={l.href}
                className={`inline-flex min-h-11 items-center rounded-full bg-[var(--surface)] px-5 text-[0.95rem] font-medium ring-1 ring-inset ring-[var(--line)] transition-colors hover:bg-[var(--ink)] hover:text-white ${focusRing}`}
              >
                {l.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
