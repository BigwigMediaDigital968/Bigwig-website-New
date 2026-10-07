"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { serviceCards } from "@/data/servicesData";
import { PillLead, SectionHead, fadeUp, focusRing, inView, maskUp, scaleIn, stagger, wipeUp } from "../ui";
import { AccordionItem, AskCard } from "../ui/Accordion";

/* Building blocks for /services/* pages. Content lives in src/data/services/*. */

export type ServiceItem = { title: string; desc: React.ReactNode };
export type ServiceFaqItem = { q: string; a: string };

type CollageImage = { src: StaticImageData | string; alt: string };

export type IntroCollage = {
  /** two smaller photos stacked over the bottom of the main one: [left, right] */
  images: [CollageImage, CollageImage];
  /** floating stat card, e.g. { value: "100+", label: "Delhi businesses" } */
  stat?: { value: string; label: string };
  /** floating rating pill, e.g. "5.0 Google rating" */
  rating?: string;
  /** text in the browser bar over the main photo; an empty address pill when omitted */
  url?: string;
};

/** Static stacked photos with UI chips. No motion, so the art can be swapped for designed images. */
function Collage({ image, imageAlt, collage }: { image: StaticImageData; imageAlt: string; collage: IntroCollage }) {
  const [left, right] = collage.images;
  // the paper-coloured ring makes the small photos look cut out of the main one
  const cutout = "absolute overflow-hidden rounded-[20px] bg-[var(--ink)] ring-[6px] ring-[var(--paper)]";
  return (
    <div className="relative mx-auto aspect-[10/11] w-full max-w-[560px] lg:col-span-5">
      {/* main */}
      <div className="absolute right-0 top-0 h-[78%] w-[86%] overflow-hidden rounded-[24px] bg-[var(--ink)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 36vw, 86vw"
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-x-3 top-3 flex items-center gap-3 rounded-full bg-white/85 px-3 py-2 backdrop-blur-md">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </span>
          {collage.url ? (
            <span className="truncate rounded-full bg-[var(--paper)] px-3 py-0.5 text-[0.7rem] text-[var(--muted)]">
              {collage.url}
            </span>
          ) : (
            <span aria-hidden className="h-4 w-2/5 rounded-full bg-[var(--paper)]" />
          )}
        </div>
      </div>

      {/* small, bottom left */}
      <div className={`${cutout} bottom-0 left-0 aspect-[4/5] w-[44%]`}>
        <Image src={left.src} alt={left.alt} fill sizes="(min-width: 1024px) 18vw, 44vw" className="object-cover" />
      </div>

      {/* small, bottom right */}
      <div className={`${cutout} bottom-[4%] right-[6%] aspect-square w-[34%]`}>
        <Image src={right.src} alt={right.alt} fill sizes="(min-width: 1024px) 14vw, 34vw" className="object-cover" />
      </div>

      {collage.stat && (
        <div className="absolute left-0 top-[14%] rounded-[18px] bg-[var(--surface)] px-4 py-3 shadow-[0_20px_40px_-20px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] md:px-5 md:py-4">
          <p className="serif text-3xl leading-none md:text-4xl">{collage.stat.value}</p>
          <p className="mt-1.5 text-xs font-medium text-[var(--muted)]">{collage.stat.label}</p>
        </div>
      )}

      {collage.rating && (
        <div className="absolute bottom-[38%] right-[2%] flex items-center gap-2 rounded-full bg-[var(--ink)] px-3.5 py-2 text-xs font-medium text-white shadow-[0_16px_32px_-16px_rgba(1,28,64,0.6)] sm:bottom-[40%]">
          <span aria-hidden className="text-[#f5b301]">
            ★★★★★
          </span>
          {collage.rating}
        </div>
      )}
    </div>
  );
}

/** Lead + heading + body copy beside an image, or beside a stacked `collage` of photos. */
export function ServiceIntro({
  lead,
  title,
  body,
  image,
  imageAlt,
  collage,
}: {
  lead: string;
  title: string;
  body: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
  collage?: IntroCollage;
}) {
  return (
    <section className="py-14 md:py-20">
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

        {collage ? (
          <Collage image={image} imageAlt={imageAlt} collage={collage} />
        ) : (
          <ParallaxImage image={image} imageAlt={imageAlt} />
        )}
      </div>
    </section>
  );
}

/** Single intro photo that wipes in and drifts as the page scrolls. */
function ParallaxImage({ image, imageAlt }: { image: StaticImageData; imageAlt: string }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
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
  );
}

/** Numbered card grid. */
export function ServiceCards({
  lead,
  title,
  intro,
  subtitle,
  items,
  cta,
  source,
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
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} actions={<PillLead source={source}>{cta}</PillLead>} />
        {intro && (
          <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </motion.p>
        )}
        {subtitle && <h3 className="mt-12 text-xl font-semibold tracking-tight md:text-2xl">{subtitle}</h3>}

        <motion.ul
          {...inView}
          variants={stagger(0.06, 0.1)}
          className={`grid gap-px overflow-hidden rounded-[24px] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 ${
            subtitle ? "mt-6" : "mt-14 md:mt-16"
          }`}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="flex flex-col gap-6 bg-[var(--surface)] p-7 transition-colors duration-300 hover:bg-[var(--paper)] md:p-8"
            >
              <span aria-hidden className="serif text-4xl leading-none text-[var(--teal)]">
                {pad(i + 1)}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            </motion.li>
          ))}
          {/* fill the last row of the 3-column grid so no grey gap shows */}
          {Array.from({ length: (3 - (items.length % 3)) % 3 }).map((_, i) => (
            <li key={`filler-${i}`} aria-hidden className="hidden bg-[var(--surface)] lg:block" />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- horizontal tracks ---------- */

const pad = (n: number) => String(n).padStart(2, "0");

/** Scroll state for a horizontal snap track: progress (0–1, starting at the visible share) and card stepping. */
function useTrack() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  // share of the track that's visible; the progress line starts at this width
  const visible = useMotionValue(1);
  const [overflows, setOverflows] = useState(false);
  const progress = useTransform([scrollXProgress, visible], ([p, v]: number[]) => v + (1 - v) * p);

  useEffect(() => {
    const track = ref.current;
    if (!track) return;
    const measure = () => {
      visible.set(Math.min(1, track.clientWidth / track.scrollWidth));
      setOverflows(track.scrollWidth > track.clientWidth + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [visible]);

  const step = (dir: 1 | -1) => {
    const track = ref.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return { ref, progress, overflows, step };
}

/** 01 ——— 0N progress line with prev/next arrows. Renders nothing when the track fits. */
function TrackControls({
  track,
  count,
  dark = false,
  className = "",
}: {
  track: ReturnType<typeof useTrack>;
  count: number;
  dark?: boolean;
  className?: string;
}) {
  if (!track.overflows) return null;
  const arrow = `flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset transition-colors cursor-pointer ${focusRing} ${
    dark ? "ring-white/25 hover:bg-white/10" : "ring-[var(--line-strong)] hover:bg-[var(--surface)]"
  }`;
  return (
    <div
      className={`flex items-center gap-4 text-xs tabular-nums ${dark ? "text-white/50" : "text-[var(--muted)]"} ${className}`}
    >
      <span>01</span>
      <div className={`relative h-px flex-1 ${dark ? "bg-white/15" : "bg-[var(--line)]"}`}>
        <motion.div
          style={{ scaleX: track.progress }}
          className={`absolute inset-0 origin-left ${dark ? "bg-[var(--cyan)]" : "bg-[var(--ink)]"}`}
        />
      </div>
      <span>{pad(count)}</span>
      <div className="ml-2 flex gap-2">
        <button type="button" onClick={() => track.step(-1)} aria-label="Previous" className={arrow}>
          <ChevronLeft size={16} aria-hidden />
        </button>
        <button type="button" onClick={() => track.step(1)} aria-label="Next" className={arrow}>
          <ChevronRight size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}

const trackList = "scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 md:gap-4";

/**
 * Numbered cards in a horizontal track. A swipeable alternative to the `ServiceCards` grid, so long
 * lists don't stack into a tall column on phones.
 */
export function ServiceCarousel({
  id,
  lead,
  title,
  intro,
  subtitle,
  items,
  cta,
  source,
}: {
  id?: string;
  lead: string;
  title: string;
  intro?: React.ReactNode;
  subtitle?: string;
  items: ServiceItem[];
  cta: string;
  source: string;
}) {
  const track = useTrack();
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} actions={<PillLead source={source}>{cta}</PillLead>} />
        {intro && (
          <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </motion.p>
        )}
        {subtitle && <h3 className="mt-12 text-xl font-semibold tracking-tight md:text-2xl">{subtitle}</h3>}

        <motion.ul
          ref={track.ref}
          {...inView}
          variants={stagger(0.06, 0.1)}
          className={`${trackList} ${subtitle ? "mt-6" : "mt-12 md:mt-14"}`}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="group relative flex min-h-[340px] w-[80%] flex-none snap-start flex-col overflow-hidden rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-inset ring-[var(--line)] transition-[background-color,box-shadow] duration-500 hover:shadow-[0_24px_48px_-28px_rgba(1,28,64,0.35)] hover:ring-[var(--teal)]/40 sm:w-[340px] md:p-7"
            >
              {/* soft glow that fades in on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--teal)]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-baseline justify-between">
                <span aria-hidden className="serif text-5xl leading-none text-[var(--teal)]">
                  {pad(i + 1)}
                </span>
                <span aria-hidden className="text-xs tabular-nums text-[var(--muted)]/70">
                  / {pad(items.length)}
                </span>
              </div>
              <div className="mt-14">
                <span
                  aria-hidden
                  className="mb-5 block h-px w-10 bg-[var(--teal)] transition-[width] duration-500 group-hover:w-20"
                />
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <TrackControls track={track} count={items.length} className="mt-8" />
      </div>
    </section>
  );
}

/**
 * Navy panel split in two: heading, intro and CTA on the left, a track of light cards with a large
 * watermark number on the right. A second, contrasting take on `ServiceCarousel`.
 */
export function ServiceSplitCarousel({
  id,
  lead,
  title,
  intro,
  items,
  cta,
  source,
}: {
  id?: string;
  lead: string;
  title: string;
  intro?: React.ReactNode;
  items: ServiceItem[];
  cta: string;
  source: string;
}) {
  const track = useTrack();
  return (
    <section id={id} className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div {...inView} variants={stagger(0.1)} className="flex flex-col lg:col-span-4">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--cyan)]">
              {lead}
            </motion.p>
            <h2 className="h-section mt-3 text-[length:clamp(1.5rem,2.8vw,2.2rem)]!">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  {title}
                </motion.span>
              </span>
            </h2>
            {intro && (
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-white/70">
                {intro}
              </motion.p>
            )}
            <motion.div variants={fadeUp} className="mt-8">
              <PillLead source={source} tone="cyan">
                {cta}
              </PillLead>
            </motion.div>
            <TrackControls track={track} count={items.length} dark className="mt-auto hidden pt-12 lg:flex" />
          </motion.div>

          <div className="min-w-0 lg:col-span-8 lg:self-end">
            <motion.ul
              ref={track.ref}
              {...inView}
              variants={stagger(0.06, 0.1)}
              className={`${trackList} lg:mx-0 lg:scroll-px-0 lg:px-0`}
            >
              {items.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="group relative flex min-h-[380px] w-[78%] flex-none snap-start flex-col overflow-hidden rounded-[24px] bg-[var(--surface)] p-6 text-[var(--ink)] transition-transform duration-500 hover:-translate-y-1 sm:w-[300px] md:p-7 lg:min-h-[420px]"
                >
                  {/* big number bleeding off the bottom-right corner */}
                  <span
                    aria-hidden
                    className="serif pointer-events-none absolute -bottom-8 right-3 text-[8rem] leading-none text-[var(--ink)]/[0.07] transition-colors duration-500 group-hover:text-[var(--teal)]/25"
                  >
                    {pad(i + 1)}
                  </span>
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[var(--teal)]" />
                  <h3 className="relative mt-10 text-xl font-semibold leading-snug tracking-tight">{item.title}</h3>
                  <p className="relative mt-3 text-[0.95rem] leading-relaxed text-[var(--muted)]">{item.desc}</p>
                </motion.li>
              ))}
            </motion.ul>
            <TrackControls track={track} count={items.length} dark className="mt-8 lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

export type ServiceStat = { value: string; label: string; desc: string; image: string; imageAlt: string };

/** Horizontally scrolling stat cards, each with a photo, plus a scroll progress line and arrows. */
export function ServiceStats({ items, label }: { items: ServiceStat[]; label: string }) {
  const track = useTrack();

  return (
    <section className="py-16 md:py-20" aria-label={label}>
      <div className="wrap">
        <motion.ul
          ref={track.ref}
          {...inView}
          variants={stagger(0.08)}
          className={trackList}
        >
          {items.map((s) => (
            <motion.li
              key={s.label}
              variants={fadeUp}
              className="group grid w-[88%] flex-none snap-start grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-4 rounded-[24px] bg-[var(--surface)] p-3 ring-1 ring-inset ring-[var(--line)] sm:w-[440px] md:w-[520px] md:gap-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--ink)]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 768px) 240px, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-col py-2 pr-2">
                <p className="text-[2.4rem] font-semibold leading-none tracking-[-0.04em] md:text-5xl">{s.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">{s.label}</p>
                <p className="mt-auto pt-6 text-sm leading-relaxed text-[var(--muted)]">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <TrackControls track={track} count={items.length} className="mt-6" />
      </div>
    </section>
  );
}

export type ServiceFeature = { icon: React.ReactNode; title: string; desc: string };

/**
 * Image-led section: small heading, a large statement, then feature cards beside a big photo
 * with a quote over it.
 */
export function ServiceShowcase({
  heading,
  statement,
  body,
  features,
  image,
  imageAlt,
  quote,
  quoteBy,
  cta,
  source,
}: {
  heading: string;
  statement: string;
  body?: React.ReactNode;
  features: ServiceFeature[];
  image: string;
  imageAlt: string;
  quote: string;
  quoteBy: string;
  cta: string;
  source: string;
}) {
  const imageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <motion.div {...inView} variants={stagger(0.1)}>
          <motion.h2
            variants={fadeUp}
            className="flex items-start gap-2 text-sm font-semibold uppercase tracking-[0.06em]"
          >
            <span aria-hidden className="text-[var(--teal)]">
              ✱
            </span>
            {heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-5xl text-[1.55rem] font-medium leading-[1.2] tracking-[-0.025em] md:text-[2.2rem]"
          >
            {statement}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <PillLead source={source}>{cta}</PillLead>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-12">
          <motion.div
            {...inView}
            variants={stagger(0.08)}
            className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5"
          >
            {body && (
              <motion.div
                variants={fadeUp}
                className="space-y-4 pb-4 text-lg leading-relaxed text-[var(--muted)] lg:pr-6"
              >
                {body}
              </motion.div>
            )}
            <ul className="mt-auto grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((f) => (
                <motion.li
                  key={f.title}
                  variants={fadeUp}
                  className="flex min-h-[180px] flex-col gap-6 rounded-[20px] bg-[var(--surface)] p-4 ring-1 ring-inset ring-[var(--line)] sm:min-h-[200px] sm:gap-8 sm:p-5"
                >
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)]"
                  >
                    {f.icon}
                  </span>
                  <div className="mt-auto">
                    <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.06em] sm:text-sm">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.figure
            ref={imageRef}
            {...inView}
            variants={wipeUp}
            className="relative order-1 aspect-[4/5] overflow-hidden sm:aspect-[4/3] rounded-[28px] bg-[var(--ink)] lg:order-2 lg:col-span-7 lg:aspect-auto lg:min-h-[560px]"
          >
            <motion.div className="absolute inset-[-8%_0]" style={{ y: imageY }}>
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </motion.div>
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,28,64,0.78),rgba(1,28,64,0.1)_45%,transparent_70%)]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <blockquote className="max-w-md text-base leading-snug md:text-lg">“{quote}”</blockquote>
              <p className="mt-3 text-sm text-white/70">{quoteBy}</p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/** A technology tile: a logo URL, or an emoji when there's no logo. */
export type Tech = { name: string; logo?: string; emoji?: string };
export type TechDomain = { name: string; desc: string; icon: React.ReactNode; items: Tech[] };

/**
 * Tabbed technology panel: domains listed on the left (a swipeable row on phones), the chosen
 * domain's logos in a grid on the right, with a count and CTA underneath.
 */
export function ServiceTechTabs({
  lead,
  title,
  intro,
  domains,
  cta,
  source,
}: {
  lead: string;
  title: string;
  intro?: React.ReactNode;
  domains: TechDomain[];
  cta: string;
  source: string;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const domain = domains[active];

  // arrow keys move between tabs, as in a standard tablist
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + domains.length) % domains.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} />
        {intro && (
          <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </motion.p>
        )}

        <motion.div
          {...inView}
          variants={fadeUp}
          className="mt-12 grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[32px] bg-[var(--surface)] ring-1 ring-inset ring-[var(--line)] md:mt-14 lg:grid-cols-[320px_minmax(0,1fr)]"
        >
          {/* domains */}
          <div className="min-w-0 border-b border-[var(--line)] bg-[var(--paper)]/60 p-4 md:p-6 lg:border-b-0 lg:border-r lg:p-7">
            <p className="hidden px-2 pb-5 text-sm font-semibold uppercase tracking-[0.06em] lg:block">
              Technology domains
            </p>
            <div
              role="tablist"
              aria-label="Technology domains"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
            >
              {domains.map((d, i) => {
                const on = i === active;
                return (
                  <button
                    key={d.name}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tech-tab-${i}`}
                    aria-selected={on}
                    aria-controls="tech-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group flex flex-none items-center gap-3 rounded-2xl py-2 pl-2 pr-4 text-left text-[0.95rem] font-medium transition-colors duration-300 cursor-pointer lg:pr-3 ${focusRing} ${
                      on ? "bg-[var(--ink)] text-white" : "hover:bg-[var(--surface)]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors duration-300 ${
                        on ? "bg-[var(--cyan)] text-[var(--ink)]" : "bg-[var(--surface)] ring-1 ring-inset ring-[var(--line)]"
                      }`}
                    >
                      {d.icon}
                    </span>
                    <span className="whitespace-nowrap lg:flex-1">{d.name}</span>
                    <ChevronRight
                      size={16}
                      aria-hidden
                      className={`hidden flex-none transition-transform duration-300 lg:block ${
                        on ? "translate-x-0.5 text-[var(--cyan)]" : "text-[var(--muted)]/60 group-hover:translate-x-0.5"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* chosen domain */}
          <div
            id="tech-panel"
            role="tabpanel"
            aria-labelledby={`tech-tab-${active}`}
            className="flex min-w-0 flex-col p-6 md:p-10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                className="flex flex-1 flex-col"
              >
                <div className="flex items-center gap-4 border-b border-[var(--line)] pb-6 md:gap-5 md:pb-8">
                  <span
                    aria-hidden
                    className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--cyan)] shadow-[0_16px_32px_-16px_rgba(1,28,64,0.6)] md:h-16 md:w-16"
                  >
                    {domain.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{domain.name}</h3>
                    <p className="mt-1 text-[0.95rem] text-[var(--link)]">{domain.desc}</p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-8 xl:grid-cols-4">
                  {domain.items.map((t, i) => (
                    <motion.li
                      key={t.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 * i, ease: [0.2, 0.7, 0.2, 1] }}
                      className="flex flex-col items-center gap-3 rounded-[20px] bg-[var(--surface)] px-3 py-6 ring-1 ring-inset ring-[var(--line)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(1,28,64,0.35)]"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--paper)]">
                        {t.logo ? (
                          <img src={t.logo} alt="" loading="lazy" draggable={false} className="h-8 w-8 object-contain" />
                        ) : (
                          <span aria-hidden className="text-[1.7rem] leading-none">
                            {t.emoji}
                          </span>
                        )}
                      </span>
                      <span className="text-center text-[0.95rem] font-medium">{t.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.95rem] text-[var(--muted)]">
                <span className="font-semibold text-[var(--link)]">{domain.items.length}</span> technologies in{" "}
                {domain.name}
              </p>
              <PillLead source={source}>{cta}</PillLead>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Grid of named logo tiles, e.g. the technologies we build with. */
export function ServiceLogos({
  lead,
  title,
  items,
}: {
  lead: string;
  title: string;
  items: { name: string; img: string }[];
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} />
        <motion.ul
          {...inView}
          variants={stagger(0.04, 0.1)}
          className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-14 md:grid-cols-4 lg:grid-cols-5"
        >
          {items.map((t) => (
            <motion.li
              key={t.name}
              variants={scaleIn}
              className="flex flex-col items-center gap-4 rounded-[20px] bg-[var(--surface)] px-4 py-8 ring-1 ring-inset ring-[var(--line)] transition-colors duration-300 hover:bg-[var(--paper)]"
            >
              <img src={t.img} alt="" loading="lazy" draggable={false} className="h-11 w-11 object-contain" />
              <span className="text-[0.95rem] font-medium">{t.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
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
    <section className="py-14 md:py-20">
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
    <section className="py-14 md:py-20">
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
