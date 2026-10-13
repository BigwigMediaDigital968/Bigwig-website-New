"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import aboutImg from "../../Assets/hero/2 (1).png";
import { clients } from "@/data/clients";
import { EASE, PillLead, PillLink, Reveal, fadeUp, focusRing, inView, maskUp, stagger, wipeUp } from "../ui";

/**
 * The "Trusted by" row: full-colour logos that read on the light background, cropped to their edges
 * (public/clients-logo/trimmed). `aspect` is width ÷ height of each file; `weight` tones down icon-heavy marks.
 */
const AREA = 4800;
const TRUSTED: { name: string; src: string; aspect: number; weight?: number }[] = [
  { name: "Rehnoor Jewels", src: "/clients-logo/trimmed/rehnoorjewels.png", aspect: 1.8 },
  { name: "RPH Realty", src: "/clients-logo/trimmed/rphrealty.png", aspect: 4.62 },
  { name: "Homes and Land Goa", src: "/clients-logo/trimmed/homesandlandgoa.png", aspect: 1.12 },
  { name: "Granth Dream Homes", src: "/clients-logo/trimmed/granthdreamhomes.png", aspect: 2.25 },
  { name: "Global Technologies India", src: "/clients-logo/trimmed/globaltechnologies.png", aspect: 1.33, weight: 0.7 },
  // more logos that read on the light background, so the loop fills a wide screen (white-lettered logos stay out)
  { name: "Gear Tek", src: "/clients-logo/trimmed/gear-tek.png", aspect: 1.51, weight: 0.8 },
  { name: "Stellar Binge", src: "/clients-logo/trimmed/stellarbinge.png", aspect: 1.75, weight: 0.85 },
  { name: "AVF Care Workshop", src: "/clients-logo/trimmed/avfcareworkshop.png", aspect: 1.93 },
  { name: "Ethical Infrastructures", src: "/clients-logo/trimmed/ethicalinfrastructure.png", aspect: 1.45 },
  { name: "Destiny by Numbers", src: "/clients-logo/trimmed/destinybynumbbers.png", aspect: 1.83 },
  { name: "The Stellar Gymkhana", src: "/clients-logo/trimmed/thestellargymkhana.png", aspect: 2.51 },
];

const stats = [
  { value: 70, suffix: "+", label: "Digital Experts" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Global Clients" },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{to}</span>;
}

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <motion.div {...inView} variants={stagger(0.12)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            We build digital experiences that create impact
          </motion.p>
          <h2 className="h-display mt-4 max-w-5xl">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                About Bigwig Media Digital.
              </motion.span>
            </span>
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block text-[var(--muted)]">
                A Leading Digital Marketing Agency in Delhi.
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            {...inView}
            variants={wipeUp}
            className="relative overflow-hidden rounded-[28px] bg-[var(--ink)] lg:col-span-5 lg:min-h-[440px]"
          >
            {/* image settles from a slight zoom as the frame opens */}
            <motion.div
              className="h-full w-full lg:absolute lg:inset-0"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              <Image
                src={aboutImg}
                alt="The Bigwig team reviewing campaign results"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <Reveal delay={0.15} className="flex flex-col lg:col-span-7">
            <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--muted)]">
              Bigwig Media Digital is a 360° Digital Marketing Agency in Delhi delivering SEO, SMM,
              performance marketing, websites, content, and creative solutions that help brands grow
              faster in the digital world. With 5+ years of expertise, our team blends creativity,
              data, and smart strategies to help businesses scale with measurable results.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PillLead source="about-section">Book a Free Consultation</PillLead>
              <PillLink href="/our-works">View Our Work</PillLink>
            </div>

            <motion.dl
              {...inView}
              variants={stagger(0.1, 0.2)}
              className="mt-auto grid grid-cols-2 border-t border-[var(--line)] pt-2 sm:grid-cols-4 lg:mt-12"
            >
              {stats.map((s, i) => (
                <motion.div
                  variants={fadeUp}
                  key={s.label}
                  className={`flex flex-col py-6 pr-4${i > 0 ? "sm:border-l sm:border-[var(--line)] sm:pl-5" : ""} ${i % 2 === 1 ? "border-l border-[var(--line)] pl-5" : ""}`}
                >
                  <dt className="text-sm text-[var(--muted)]">{s.label}</dt>
                  <dd className="serif order-first mt-1 text-[3.5rem] leading-none tabular-nums md:text-[4.25rem]">
                    <Counter to={s.value} />
                    <span className="text-[var(--teal)]">{s.suffix}</span>
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </Reveal>
        </div>

        <motion.div
          {...inView}
          variants={stagger(0.08)}
          className="mt-12 flex flex-col gap-4 border-t border-[var(--line)] pt-8 md:flex-row md:items-center md:gap-10"
        >
          <motion.p variants={fadeUp} className="flex-none text-sm font-medium text-[var(--muted)]">
            Trusted by 50+ brands
          </motion.p>
          {/* a slow loop (see .marquee in brand.css): the list is doubled so moving by half is seamless; the copies are
              hidden from screen readers and the tab order. Pauses on hover/focus; stops and scrolls by hand with
              reduced motion. */}
          <motion.div
            variants={fadeUp}
            className="marquee-mask min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto"
          >
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
                    // a touch muted at rest; full strength and a small lift on hover or keyboard focus
                    className="h-[calc(var(--h)*0.8)] w-auto object-contain opacity-100 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 md:h-[var(--h)]"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
