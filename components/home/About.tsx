"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, PillLead, PillLink, Reveal, fadeUp, inView, maskUp, stagger, wipeUp } from "../ui";
import TrustedStrip from "../ui/TrustedStrip";

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
            className="relative overflow-hidden rounded-[12px] bg-[var(--ink)] lg:col-span-5 lg:min-h-[440px]"
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
                src="/home/about-image-1.png"
                width={800}
                height={600}
                priority
                quality={100}
                alt="The Bigwig team working in the office, collaborating on digital marketing strategies and campaigns."
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

        <div className="mt-12">
          <TrustedStrip label="Trusted by 50+ brands" className="pt-8" />
        </div>
      </div>
    </section>
  );
}
