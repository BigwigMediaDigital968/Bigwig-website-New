"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, inView, maskUp, stagger, wipeUp } from "../ui";
import { dubaiPhotos } from "./photos";

const strengths = [
  {
    title: "Creativity, data & technology",
    desc: "We combine all three to craft strategies that deliver meaningful results.",
  },
  {
    title: "Proven across industries",
    desc: "Lifestyle, tech, hospitality, and e-commerce brands have grown visibility, engagement, and revenue with us.",
  },
  {
    title: "Performance-led",
    desc: "Campaigns aren’t just creative. They’re measurable, scalable, and built for real business growth.",
  },
];

export default function DubaiIntro() {
  const imageRef = useRef<HTMLDivElement>(null);
  // Image drifts slightly slower than the page while it's on screen
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="py-24 md:py-32">
      {/* ---------- transform your business ---------- */}
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div
          ref={imageRef}
          {...inView}
          variants={wipeUp}
          className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[var(--ink)] lg:col-span-6"
        >
          <motion.div className="absolute inset-[-10%_0]" style={{ y: imageY }}>
            <Image
              src={dubaiPhotos.clientMeeting}
              alt="Our team reviewing campaign results with clients in a high-rise office overlooking the city"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div {...inView} variants={stagger(0.1)} className="min-w-0 lg:col-span-6">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Grow your brand in the UAE
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Transform your business
              </motion.span>
            </span>
          </h2>
          <motion.div variants={fadeUp} className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              At BigWig Media Digital, we believe every brand has the potential to shine in the digital world, and our
              mission is to make that happen. Recognized as one of the{" "}
              <strong className="font-semibold text-[var(--ink)]">best digital marketing agencies in Dubai, UAE</strong>
              , we deliver campaigns that truly make a difference.
            </p>
            <p>
              From startups to established companies, we design strategies that align with your unique goals. Our blend
              of data-driven insights and creative innovation ensures that your brand doesn’t just compete, it grows
              stronger and achieves long-term impact.
            </p>
            <p>
              With offices in UAE and India, we combine global expertise with local market understanding. Partner with
              us, and experience why businesses trust us as their go-to{" "}
              <strong className="font-semibold text-[var(--ink)]">digital marketing company in UAE</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- who we are / why trusted ---------- */}
      <div className="wrap mt-24 grid gap-12 md:mt-32 lg:grid-cols-12 lg:gap-16">
        <motion.div {...inView} variants={stagger(0.1)} className="min-w-0 lg:col-span-5">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Who we are
          </motion.p>
          <h2 className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Why BigWig Media Digital is trusted
              </motion.span>
            </span>
          </h2>
          <motion.div variants={fadeUp} className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              BigWig Media Digital is a full-service, performance-led digital marketing company in Dubai, UAE with roots
              in India. Our team blends creativity, technology, and data-driven approaches across SEO, social media,
              content, and performance marketing.
            </p>
            <p>
              From startups to enterprises, we empower brands to grow, scale, and dominate their digital landscape with
              confidence.
            </p>
          </motion.div>
        </motion.div>

        <motion.ul {...inView} variants={stagger(0.1, 0.15)} className="grid gap-2 lg:col-span-7">
          {strengths.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              className="group relative isolate grid gap-4 overflow-hidden rounded-[24px] bg-[var(--surface)] p-7 sm:grid-cols-[auto_1fr] sm:gap-6 md:p-8"
            >
              {/* navy fill that sweeps in from the left on hover */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[var(--ink)] transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <span
                aria-hidden
                className="serif text-5xl leading-none text-[var(--teal)] transition-[color,translate] duration-500 ease-out group-hover:translate-x-1 group-hover:text-[var(--cyan)] motion-reduce:transition-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)] transition-colors duration-500 group-hover:text-white/80">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
