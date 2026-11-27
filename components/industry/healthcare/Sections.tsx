"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m as motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Globe,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  EASE_OUT,
  PillLink,
  SectionHead,
  WhatsAppPill,
  fadeUp,
  focusRing,
  inView,
  maskUp,
  stagger,
  whatsappHref,
} from "../../ui";
import EnquiryForm from "../../contact/EnquiryForm";

/*
 * Sections specific to the healthcare industry page. Shared blocks live in components/service and
 * components/industry/real-estate. The page sets the clinical palette as CSS variables on <main>:
 * --hc-deep (#0B3C5D), --hc-teal (#1AA6A6), --hc-bg (#F6FAFB) and --hc-cta (the "Book" button in the
 * mock phone). Real buttons use the site's own navy pills.
 */

/* ---------- hero: copy on the left, a photo with a booking phone and notifications on the right ---------- */

export function HealthcareHero({
  eyebrow,
  title,
  intro,
  support,
  cta,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  support: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
}) {
  return (
    <section className="px-2 pt-2 md:px-3">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--hc-bg)]">
        {/* soft clinical wash */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_30%,rgba(26,166,166,0.16),transparent_70%),radial-gradient(50%_60%_at_10%_100%,rgba(11,60,93,0.08),transparent_70%)]"
        />
        <div className="wrap relative grid gap-14 pb-16 pt-28 md:pt-28 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-24">
          {/* Copy is plain server-rendered HTML (no entrance animation) so the LCP text paints immediately. */}
          <div className="min-w-0 lg:col-span-6">
            <p className="text-[0.95rem] font-medium text-[var(--hc-teal)]">{eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-[clamp(1.85rem,6.6vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--hc-deep)] lg:text-[clamp(2.4rem,3.1vw,3.1rem)]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{intro}</p>
            <div className="mt-8">
              <PillLink href={cta.href} tone="ink">
                {cta.label}
              </PillLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-[var(--muted)]">
              <MapPin aria-hidden size={16} className="flex-none text-[var(--hc-teal)]" />
              {support}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <HeroVisual image={image.src} alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Photo with a phone showing the booking screen and two notifications arriving. */
function HeroVisual({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative mx-auto max-w-[560px] pb-8 pl-6 sm:pb-10 sm:pl-10">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-[var(--hc-deep)] shadow-[0_40px_80px_-40px_rgba(11,60,93,0.55)]">
        <Image src={image} alt={alt} fill priority sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,60,93,0.35),transparent_45%)]" />
      </div>

      {/* phone with the booking screen */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[34%] min-w-[118px] rounded-[24px] bg-[var(--hc-deep)] p-1.5 shadow-[0_30px_60px_-25px_rgba(11,60,93,0.6)]"
      >
        <div className="overflow-hidden rounded-[19px] bg-white">
          <div className="bg-[linear-gradient(135deg,var(--hc-teal),var(--hc-deep))] px-2.5 pb-3 pt-4 text-white">
            <p className="text-[0.62rem] font-semibold leading-tight">Lung &amp; Sleep Clinic</p>
            <p className="text-[0.5rem] text-white/75">Pulmonologist, Delhi</p>
          </div>
          <div className="space-y-1.5 p-2.5">
            <p className="text-[0.55rem] font-semibold text-[var(--hc-deep)]">Book a visit</p>
            <span className="block h-3.5 rounded bg-[var(--hc-bg)] ring-1 ring-[var(--line)]" />
            <span className="block h-3.5 rounded bg-[var(--hc-bg)] ring-1 ring-[var(--line)]" />
            <div className="flex gap-1 pt-0.5">
              <span className="flex h-5 flex-1 items-center justify-center rounded-full bg-[#25D366] text-[0.48rem] font-semibold text-[var(--ink)]">
                WhatsApp
              </span>
              <span className="flex h-5 flex-1 items-center justify-center rounded-full bg-[var(--hc-cta)] text-[0.48rem] font-semibold text-[var(--ink)]">
                Book
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* the one orchestrated moment on the page: two notifications arrive after load */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease: EASE_OUT }}
        className="absolute bottom-[18%] right-2 flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 shadow-[0_18px_40px_-18px_rgba(11,60,93,0.45)] ring-1 ring-[var(--line)] sm:-right-6"
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--hc-teal)]/15 text-[var(--hc-teal)]">
          <CalendarCheck size={16} />
        </span>
        <span>
          <span className="block text-xs font-semibold text-[var(--hc-deep)]">New appointment request</span>
          <span className="block text-[0.68rem] text-[var(--muted)]">Sleep study, tomorrow 11:00</span>
        </span>
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: EASE_OUT }}
        className="absolute -top-4 right-4 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_18px_40px_-18px_rgba(11,60,93,0.45)] ring-1 ring-[var(--line)] sm:right-8"
      >
        <span className="flex gap-0.5 text-[#f5b301]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </span>
        <span className="text-xs font-semibold text-[var(--hc-deep)]">New Google review</span>
      </motion.div>
    </div>
  );
}

/* ---------- trust strip: greyscale logos that take on colour on hover ---------- */

export function HealthcareTrust({
  label,
  logos,
}: {
  label: string;
  /** square 400 x 400 logo tiles (public/clients-logo/*.png), so every mark gets the same frame */
  logos: { name: string; src: string; href?: string }[];
}) {
  return (
    <section className="wrap py-10 md:py-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <h2 className="flex-none text-sm font-medium text-[var(--muted)] md:w-44">{label}</h2>
        <ul className="grid max-w-3xl flex-1 grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {logos.map((l) => {
            const tile = (
              <>
                <span className="relative block aspect-[3/2] overflow-hidden rounded-[12px] bg-white ring-1 ring-inset ring-[var(--line)]">
                  <Image
                    src={l.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 180px, 45vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="mt-2 block text-center text-sm font-medium text-[var(--hc-deep)]">{l.name}</span>
              </>
            );
            return (
              <li key={l.name}>
                {l.href ? (
                  <a href={l.href} target="_blank" rel="nofollow noopener noreferrer" className={`group relative block rounded-[12px] ${focusRing}`}>
                    {tile}
                    <span className="sr-only">(opens {l.name} website in a new tab)</span>
                  </a>
                ) : (
                  <span className="group block">{tile}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- why a specialist agency: copy, three reasons, then the patient journey ---------- */

const JOURNEY = [
  { label: "Search", icon: Search },
  { label: "Website", icon: Globe },
  { label: "Enquiry", icon: MessageSquareText },
  { label: "Follow-up", icon: PhoneCall },
  { label: "Appointment", icon: CalendarCheck },
];

export function WhySpecialist({
  lead,
  title,
  body,
  reasons,
  image,
}: {
  lead: string;
  title: string;
  body: string;
  reasons: { title: string; desc: string }[];
  image: { src: string; alt: string };
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHead lead={lead} title={title} />
            <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--muted)]">
              {body}
            </motion.p>
          </div>
          <motion.div {...inView} variants={fadeUp} className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[var(--hc-deep)]">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
            </div>
            {/* what the patient is typing */}
            <div
              aria-hidden
              className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-[0_18px_40px_-18px_rgba(11,60,93,0.45)] ring-1 ring-[var(--line)] sm:left-8 sm:right-auto sm:min-w-[20rem]"
            >
              <Search size={18} className="flex-none text-[var(--hc-teal)]" />
              <span className="text-sm font-medium text-[var(--hc-deep)]">pulmonologist in Pitampura</span>
            </div>
          </motion.div>
        </div>

        <motion.ul {...inView} variants={stagger(0.08, 0.1)} className="mt-14 grid gap-3 md:mt-16 md:grid-cols-3">
          {reasons.map((r) => (
            <motion.li key={r.title} variants={fadeUp} className="rounded-[12px] bg-[var(--surface)] p-6 ring-1 ring-inset ring-[var(--line)]">
              <h3 className="font-semibold tracking-tight text-[var(--hc-deep)]">{r.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">{r.desc}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* the patient journey is a real sequence, so it is numbered */}
        <motion.div {...inView} variants={fadeUp} className="mt-12 rounded-[24px] bg-[var(--hc-deep)] px-6 py-8 text-white md:mt-16 md:px-10 md:py-10">
          <h3 className="text-sm font-medium text-white/70">How a patient finds and books you</h3>
          <ol className="relative mt-6 grid gap-5 md:grid-cols-5 md:gap-4">
            <span aria-hidden className="absolute left-[1.375rem] top-2 bottom-2 w-px bg-white/20 md:left-[10%] md:right-[10%] md:top-[1.375rem] md:bottom-auto md:h-px md:w-auto" />
            {JOURNEY.map(({ label, icon: Icon }, i) => (
              <li key={label} className="relative flex items-center gap-4 md:flex-col md:gap-3 md:text-center">
                <span className="relative flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--hc-deep)] text-[var(--cyan)] ring-1 ring-inset ring-white/30">
                  <Icon aria-hidden size={18} />
                </span>
                <span>
                  <span className="serif block text-sm text-white/55">{i + 1}</span>
                  <span className="block font-semibold">{label}</span>
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- marketing services: tabs on desktop, an accordion on phones (one list, one state) ---------- */

export type ServiceTab = {
  name: string;
  icon: React.ReactNode;
  desc: string;
  benefit: string;
  image: { src: string; alt: string };
};

export function HealthcareServiceTabs({
  lead,
  title,
  intro,
  tabs,
}: {
  lead: string;
  title: string;
  intro: string;
  tabs: ServiceTab[];
}) {
  // phones can close every row (null); desktop always shows one panel
  const [active, setActive] = useState<number | null>(0);
  const shown = active ?? 0;

  return (
    <section id="marketing" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-16 md:py-24">
        <div className="wrap">
          <SectionHead lead={lead} title={title} />
          <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </motion.p>

          <div className="mt-10 grid gap-2 md:mt-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-x-10 md:gap-y-1">
            {tabs.map((t, i) => {
              const isShown = shown === i;
              const isOpen = active === i;
              return (
                <div key={t.name} className="contents">
                  <h3 className="md:col-start-1">
                    <button
                      type="button"
                      id={`hc-tab-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`hc-panel-${i}`}
                      onClick={() => setActive((a) => (a === i ? (window.matchMedia("(min-width: 768px)").matches ? i : null) : i))}
                      className={`flex min-h-14 w-full cursor-pointer items-center gap-3 rounded-[12px] px-4 text-left font-semibold transition-colors ${focusRing} ${
                        isShown ? "md:bg-[var(--hc-deep)] md:text-white" : "md:hover:bg-[var(--hc-bg)]"
                      } ${isOpen ? "bg-[var(--hc-bg)] md:bg-[var(--hc-deep)]" : "bg-[var(--hc-bg)] md:bg-transparent"}`}
                    >
                      <span aria-hidden className={isShown ? "text-[var(--hc-teal)] md:text-[var(--cyan)]" : "text-[var(--hc-teal)]"}>
                        {t.icon}
                      </span>
                      <span className="flex-1">{t.name}</span>
                      <ChevronDown aria-hidden size={18} className={`transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  </h3>
                  <div
                    id={`hc-panel-${i}`}
                    role="region"
                    aria-labelledby={`hc-tab-${i}`}
                    className={`${isOpen ? "block" : "hidden"} ${isShown ? "md:block" : "md:hidden"} px-1 pb-4 pt-3 md:col-start-2 md:row-span-7 md:row-start-1 md:self-start md:overflow-hidden md:rounded-[20px] md:bg-[var(--hc-bg)] md:p-0`}
                  >
                    {/* hidden panels are display:none, so their lazy images load only when opened */}
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-[var(--hc-deep)] md:aspect-[16/7] md:rounded-none">
                      <Image src={t.image.src} alt={t.image.alt} fill sizes="(min-width: 768px) 55vw, 92vw" className="object-cover" />
                      <span
                        aria-hidden
                        className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--hc-teal)] shadow-md"
                      >
                        {t.icon}
                      </span>
                    </div>
                    <div className="px-3 pt-5 md:px-10 md:pb-10 md:pt-8">
                      <p className="hidden text-2xl font-semibold tracking-tight text-[var(--hc-deep)] md:block">{t.name}</p>
                      <p className="max-w-[60ch] leading-relaxed text-[var(--muted)] md:mt-3 md:text-lg">{t.desc}</p>
                      <p className="mt-4 flex gap-2 font-medium text-[var(--hc-teal)] md:mt-5">
                        <Check aria-hidden size={18} className="mt-0.5 flex-none" />
                        <span>Benefit: {t.benefit}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- local promotion: copy and checklist beside a stylised Delhi NCR map ---------- */

// rough positions on a 400 x 320 map; not to scale
const PINS: { name: string; x: number; y: number }[] = [
  { name: "Rohini", x: 120, y: 62 },
  { name: "Pitampura", x: 158, y: 92 },
  { name: "Shalimar Bagh", x: 205, y: 70 },
  { name: "West Delhi", x: 95, y: 145 },
  { name: "Dwarka", x: 78, y: 205 },
  { name: "South Delhi", x: 200, y: 205 },
  { name: "Gurgaon", x: 120, y: 272 },
  { name: "Noida", x: 318, y: 210 },
];

export function LocalNcr({
  lead,
  title,
  body,
  setup,
  areas,
}: {
  lead: string;
  title: string;
  body: string;
  setup: string[];
  areas: string[];
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHead lead={lead} title={title} />
          <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--muted)]">
            {body}
          </motion.p>
          <motion.div {...inView} variants={fadeUp}>
            <h3 className="mt-8 font-semibold text-[var(--hc-deep)]">What we set up</h3>
            <ul className="mt-4 space-y-3">
              {setup.map((s) => (
                <li key={s} className="flex gap-3 leading-snug">
                  <span aria-hidden className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--hc-teal)]/15 text-[var(--hc-teal)]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.figure {...inView} variants={fadeUp} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[24px] bg-[var(--hc-bg)] p-4 ring-1 ring-inset ring-[var(--line)]">
            <svg viewBox="0 0 400 320" role="img" aria-label="Local SEO for clinics and hospitals in Delhi NCR: a map of Delhi NCR with clinic locations" className="h-auto w-full">
              <path
                d="M60 40 C120 10 250 20 300 50 C350 80 380 150 370 220 C360 280 280 310 190 305 C110 300 40 270 30 200 C20 130 20 60 60 40 Z"
                fill="#fff"
                stroke="rgba(11,60,93,0.15)"
                strokeWidth="1.5"
              />
              {/* Yamuna */}
              <path d="M255 20 C245 80 275 120 262 170 C250 220 280 260 270 320" fill="none" stroke="rgba(26,166,166,0.45)" strokeWidth="6" strokeLinecap="round" />
              {/* a few roads */}
              <path d="M40 150 C140 140 240 160 370 150" fill="none" stroke="rgba(11,60,93,0.08)" strokeWidth="3" />
              <path d="M150 20 C160 120 140 220 130 310" fill="none" stroke="rgba(11,60,93,0.08)" strokeWidth="3" />
              {PINS.map((p) => (
                <g key={p.name} transform={`translate(${p.x} ${p.y})`}>
                  <circle r="9" fill="rgba(26,166,166,0.2)" />
                  <circle r="4.5" fill="#0B3C5D" />
                  <text x="12" y="4" fontSize="11" fontWeight="600" fill="#0B3C5D">
                    {p.name}
                  </text>
                </g>
              ))}
            </svg>
            {/* listing card, Google Maps style */}
            <div aria-hidden className="absolute bottom-4 right-4 w-[min(15rem,60%)] rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_-18px_rgba(11,60,93,0.45)] ring-1 ring-[var(--line)]">
              <p className="text-sm font-semibold text-[var(--hc-deep)]">Your clinic</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[var(--muted)]">
                <span className="flex text-[#f5b301]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                </span>
                Open now
              </p>
              <div className="mt-2.5 flex gap-1.5">
                {["Directions", "Call", "Website"].map((a) => (
                  <span key={a} className="rounded-full bg-[var(--hc-bg)] px-2 py-1 text-[0.62rem] font-medium text-[var(--hc-deep)]">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <figcaption className="sr-only">Areas we serve in Delhi NCR</figcaption>
          <ul className="mt-5 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li key={a} className="rounded-full bg-[var(--surface)] px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset ring-[var(--line)]">
                {a}
              </li>
            ))}
          </ul>
        </motion.figure>
      </div>
    </section>
  );
}

/* ---------- tilt card: leans toward the mouse with a light sweep; still on touch and reduced motion ---------- */

const MAX_TILT = 10; // degrees

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const set = (rx: number, ry: number, gx: number, gy: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${gx}%`);
    el.style.setProperty("--gy", `${gy}%`);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => set((0.5 - y) * MAX_TILT * 2, (x - 0.5) * MAX_TILT * 2, x * 100, y * 100));
  };

  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    set(0, 0, 50, 50);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--hc-deep)] shadow-[0_10px_30px_-20px_rgba(11,60,93,0.4)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-out)] will-change-transform [backface-visibility:hidden] hover:shadow-[0_34px_60px_-26px_rgba(11,60,93,0.6)]"
    >
      {children}
      {/* light that follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.28), transparent 55%)" }}
      />
    </div>
  );
}

/* ---------- who we serve ---------- */

export function ServeChips({
  lead,
  title,
  chips,
  gallery,
}: {
  lead: string;
  title: string;
  chips: { label: string; icon: React.ReactNode; href?: string }[];
  /** four photos of practice types, captioned */
  gallery: { src: string; alt: string; label: string }[];
}) {
  return (
    <section className="pb-14 md:pb-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} />
        <motion.ul {...inView} variants={stagger(0.06, 0.1)} className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <motion.li
              key={g.label}
              variants={fadeUp}
              className={i % 2 ? "md:mt-10" : ""}
            >
              <TiltCard>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 24vw, 46vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,60,93,0.8),transparent_55%)]" />
                <span className="absolute bottom-4 left-4 right-4 font-semibold text-white">
                  {g.label}
                  <span
                    aria-hidden
                    className="mt-1.5 block h-0.5 w-0 rounded-full bg-[var(--cyan)] transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-10"
                  />
                </span>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
        <motion.ul {...inView} variants={stagger(0.03)} className="mt-10 flex flex-wrap gap-2.5 md:mt-12">
          {chips.map((c) => {
            const inner = (
              <>
                <span aria-hidden className="text-[var(--hc-teal)]">
                  {c.icon}
                </span>
                {c.label}
              </>
            );
            const cls = "inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--surface)] px-4 text-[0.95rem] font-medium ring-1 ring-inset ring-[var(--line)]";
            return (
              <motion.li key={c.label} variants={fadeUp}>
                {c.href ? (
                  <Link href={c.href} className={`${cls} transition-colors hover:bg-[var(--hc-bg)] ${focusRing}`}>
                    {inner}
                  </Link>
                ) : (
                  <span className={cls}>{inner}</span>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- client work ---------- */

export type HealthcareWork = {
  name: string;
  specialty: string;
  built: string;
  tags: string[];
  site?: string;
  /** screenshot of the live site; without one the card shows the logo */
  image?: string;
  logo?: { src: string; width: number; height: number };
  /** only real, published figures */
  result?: { value: string; label: string };
};

export function HealthcareWorkGrid({ lead, title, intro, work }: { lead: string; title: string; intro: string; work: HealthcareWork[] }) {
  return (
    <section id="work" className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} />
        <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--muted)]">
          {intro}
        </motion.p>
        <ul className="scrollbar-hide -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
          {work.map((w) => (
            <li key={w.name} className="relative flex w-[86%] flex-none snap-start flex-col overflow-hidden rounded-[24px] bg-[var(--surface)] p-3 ring-1 ring-inset ring-[var(--line)] md:w-auto">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,var(--hc-bg),rgba(26,166,166,0.35))]">
                {w.image ? (
                  <div className="absolute inset-x-5 bottom-0 top-5 overflow-hidden rounded-t-xl bg-white shadow-[0_20px_40px_-20px_rgba(11,60,93,0.5)]">
                    <div aria-hidden className="flex gap-1.5 border-b border-[var(--line)] bg-[var(--hc-bg)] px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="relative h-full">
                      <Image
                        src={w.image}
                        alt={`${w.name} ${w.specialty.toLowerCase()} website designed by Bigwig Media Digital`}
                        fill
                        sizes="(min-width: 768px) 45vw, 86vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  w.logo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src={w.logo.src} alt={`${w.name} logo`} width={w.logo.width} height={w.logo.height} sizes="200px" className="h-28 w-auto object-contain" />
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-1 flex-col px-3 pb-4 pt-5 md:px-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--hc-deep)]">{w.name}</h3>
                    <p className="text-sm text-[var(--muted)]">{w.specialty}</p>
                  </div>
                  {w.site && (
                    <a
                      href={w.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 flex-none items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-[var(--link)] ring-1 ring-inset ring-[var(--line-strong)] transition-colors hover:bg-[var(--hc-bg)] ${focusRing}`}
                    >
                      Visit website
                      <ArrowUpRight aria-hidden size={16} />
                      <span className="sr-only">(opens {w.name} website in a new tab)</span>
                    </a>
                  )}
                </div>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--muted)]">{w.built}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full bg-[var(--hc-bg)] px-3 py-1 text-xs font-medium text-[var(--hc-deep)]">
                      {t}
                    </li>
                  ))}
                </ul>
                {w.result && (
                  <p className="mt-auto pt-5 text-[0.95rem] text-[var(--muted)]">
                    <span className="serif mr-2 text-3xl text-[var(--hc-teal)]">{w.result.value}</span>
                    {w.result.label}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- responsible marketing ---------- */

export function CompliancePanel({
  title,
  body,
  points,
  image,
}: {
  title: string;
  body: string;
  points: string[];
  image: { src: string; alt: string };
}) {
  return (
    <section className="px-2 py-14 md:px-3 md:py-20">
      <motion.div
        {...inView}
        variants={fadeUp}
        className="mx-auto grid max-w-[1600px] gap-10 overflow-hidden rounded-[32px] bg-[rgba(26,166,166,0.1)] md:grid-cols-12 md:gap-0"
      >
        <div className="relative min-h-[260px] md:col-span-4">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          <span aria-hidden className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--hc-teal)] shadow-md">
            <ShieldCheck size={28} />
          </span>
        </div>
        <div className="grid gap-10 px-6 pb-12 md:col-span-8 md:px-12 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-16">
        <div>
          <h2 className="h-section text-[var(--hc-deep)]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                {title}
              </motion.span>
            </span>
          </h2>
          <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-[var(--muted)]">{body}</p>
        </div>
        <ul className="grid content-center gap-y-4">
          {points.map((p) => (
            <li key={p} className="flex gap-3 leading-snug">
              <span aria-hidden className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--hc-teal)] text-white">
                <Check size={14} strokeWidth={2.5} />
              </span>
              {p}
            </li>
          ))}
        </ul>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- final call to action with the enquiry form ---------- */

export function HealthcareCta({
  title,
  text,
  smallPrint,
  whatsappMessage,
  source,
}: {
  title: string;
  text: string;
  smallPrint: string;
  whatsappMessage: string;
  source: string;
}) {
  // white and compact (dropdown for services) so the heading and the whole form fit in one screen
  return (
    <section id="audit" className="scroll-mt-24 px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--surface)] py-12 md:py-14">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div {...inView} variants={stagger(0.1)} className="lg:col-span-5">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
              Free website, Google profile and social media audit
            </motion.p>
            <h2 className="h-section mt-3 text-[var(--ink)]">{title}</h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              {text}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7">
              <WhatsAppPill href={whatsappHref(whatsappMessage)} />
            </motion.div>
          </motion.div>
          <motion.div
            {...inView}
            variants={fadeUp}
            className="rounded-[24px] bg-[var(--paper)] p-6 text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] sm:p-7 lg:col-span-7"
          >
            <h3 className="text-xl font-semibold tracking-tight">Book a Free Audit</h3>
            <div className="mt-4">
              <EnquiryForm source={source} defaultServices={["Website Development", "SEO"]} compact />
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{smallPrint}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
