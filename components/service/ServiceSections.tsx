"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serviceCards } from "@/data/servicesData";
import { PillLead, SectionHead, fadeUp, focusRing, inView, maskUp, stagger, wipeUp } from "../ui";
import { AccordionItem, AskCard } from "../ui/Accordion";

/* Building blocks for /services/* pages. Content lives in src/data/services/*. */

export type ServiceItem = { title: string; desc: React.ReactNode };
export type ServiceFaqItem = { q: string; a: string };

/** Lead + heading + body copy beside an image. */
export function ServiceIntro({
  lead,
  title,
  body,
  image,
  imageAlt,
}: {
  lead: string;
  title: string;
  body: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div {...inView} variants={stagger(0.1)} className="min-w-0 lg:col-span-7">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            {lead}
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                {title}
              </motion.span>
            </span>
          </h2>
          <motion.div variants={fadeUp} className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            {body}
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          {...inView}
          variants={wipeUp}
          className="relative aspect-square overflow-hidden rounded-[24px] bg-[var(--ink)] lg:col-span-5"
        >
          <motion.div className="absolute inset-[-10%_0]" style={{ y: imageY }}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Numbered card grid. `dark` puts it on a navy panel. */
export function ServiceCards({
  lead,
  title,
  intro,
  subtitle,
  items,
  cta,
  source,
  dark = false,
  id,
}: {
  id?: string;
  lead: string;
  title: string;
  intro?: React.ReactNode;
  subtitle?: string;
  items: ServiceItem[];
  cta: string;
  source: string;
  dark?: boolean;
}) {
  const body = (
    <div className="wrap">
      <SectionHead
        dark={dark}
        lead={lead}
        title={title}
        actions={
          <PillLead source={source} tone={dark ? "cyan" : "ink"}>
            {cta}
          </PillLead>
        }
      />
      {intro && (
        <motion.p
          {...inView}
          variants={fadeUp}
          className={`mt-6 max-w-3xl text-lg leading-relaxed ${dark ? "text-white/70" : "text-[var(--muted)]"}`}
        >
          {intro}
        </motion.p>
      )}
      {subtitle && (
        <h3 className="mt-12 text-xl font-semibold tracking-tight md:text-2xl">{subtitle}</h3>
      )}

      <motion.ul
        {...inView}
        variants={stagger(0.06, 0.1)}
        className={`grid gap-px overflow-hidden rounded-[24px] sm:grid-cols-2 lg:grid-cols-3 ${subtitle ? "mt-6" : "mt-14 md:mt-16"} ${
          dark ? "bg-white/10" : "bg-[var(--line)]"
        }`}
      >
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            className={`flex flex-col gap-6 p-7 transition-colors duration-300 md:p-8 ${
              dark ? "bg-[var(--ink)] hover:bg-[var(--ink-2)]" : "bg-[var(--surface)] hover:bg-[var(--paper)]"
            }`}
          >
            <span
              aria-hidden
              className={`serif text-4xl leading-none ${dark ? "text-[var(--cyan)]" : "text-[var(--teal)]"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl font-semibold leading-snug tracking-tight">{item.title}</h3>
              <p className={`mt-2 leading-relaxed ${dark ? "text-white/70" : "text-[var(--muted)]"}`}>{item.desc}</p>
            </div>
          </motion.li>
        ))}
        {/* fill the last row of the 3-column grid so no grey gap shows */}
        {Array.from({ length: (3 - (items.length % 3)) % 3 }).map((_, i) => (
          <li
            key={`filler-${i}`}
            aria-hidden
            className={`hidden lg:block ${dark ? "bg-[var(--ink)]" : "bg-[var(--surface)]"}`}
          />
        ))}
      </motion.ul>
    </div>
  );

  if (!dark)
    return (
      <section id={id} className="scroll-mt-24 py-24 md:py-32">
        {body}
      </section>
    );
  return (
    <section id={id} className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">{body}</div>
    </section>
  );
}

/** Long-form copy block on a white panel. */
export function ServiceArticle({
  lead,
  title,
  body,
  cta,
  source,
}: {
  lead: string;
  title: string;
  body: React.ReactNode;
  cta: string;
  source: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-10 rounded-[32px] bg-[var(--surface)] p-8 md:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
          <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-5">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
              {lead}
            </motion.p>
            <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.4rem]">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  {title}
                </motion.span>
              </span>
            </h2>
            <motion.div variants={fadeUp} className="mt-8">
              <PillLead source={source}>{cta}</PillLead>
            </motion.div>
          </motion.div>
          <motion.div
            {...inView}
            variants={fadeUp}
            className="space-y-5 text-lg leading-relaxed text-[var(--muted)] lg:col-span-7"
          >
            {body}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** FAQ accordion with the "Still have a question?" card. Emit FAQPage JSON-LD from the page. */
export function ServiceFaq({ title, faqs, source }: { title: string; faqs: ServiceFaqItem[]; source: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div {...inView} variants={stagger(0.1)} className="lg:sticky lg:top-28">
              <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
                Frequently asked questions
              </motion.p>
              <h2 className="h-section mt-3">
                <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={maskUp} className="block">
                    {title}
                  </motion.span>
                </span>
              </h2>
              <motion.div variants={fadeUp}>
                <AskCard source={source} className="mt-10" />
              </motion.div>
            </motion.div>
          </div>

          <motion.ul {...inView} variants={stagger(0.05, 0.15)} className="border-t border-[var(--line)] lg:col-span-7">
            {faqs.map((f, i) => (
              <motion.li key={f.q} variants={fadeUp} className="border-b border-[var(--line)]">
                <AccordionItem
                  question={f.q}
                  answer={f.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/** Links to every other service page. */
export function OtherServices({ current }: { current: string }) {
  const others = serviceCards.filter((s) => s.href !== current);
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead lead="Explore more" title="Our other services" />
        <motion.ul {...inView} variants={stagger(0.04)} className="mt-12 flex flex-wrap gap-2 md:mt-14">
          {others.map((s) => (
            <motion.li key={s.href} variants={fadeUp}>
              <Link
                href={s.href}
                className={`group inline-flex h-12 items-center gap-3 rounded-full bg-[var(--surface)] pl-5 pr-1.5 text-[0.95rem] font-medium ring-1 ring-inset ring-[var(--line)] transition-colors duration-300 hover:bg-[var(--ink)] hover:text-white hover:ring-[var(--ink)] ${focusRing}`}
              >
                {s.title}
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-[transform,background-color] duration-300 group-hover:rotate-45 group-hover:bg-[var(--cyan)]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
