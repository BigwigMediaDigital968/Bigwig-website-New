"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeUp, inView, maskUp, stagger, wipeUp } from "../ui";
import { photos } from "./content";

// Facts already stated elsewhere on the site; no invented results.
const metrics = [
  { value: "5+", label: "Years in digital marketing" },
  { value: "3", label: "Core services, one team" },
  { value: "UAE & India", label: "Offices", small: true },
];

/**
 * Asymmetric split: short copy and metrics stay pinned on the left while a tall villa frame scrolls past on
 * the right, its photo drifting slower than the page (parallax).
 */
export default function RealEstateAbout() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="py-24 md:py-[120px]">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <motion.div {...inView} variants={stagger(0.07)} className="lg:sticky lg:top-32">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
              About us
            </motion.p>
            <h2 className="h-section mt-3">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  Built for Dubai property brands.
                </motion.span>
              </span>
            </h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              We specialize strictly in helping Dubai real estate developers and brokerages build{" "}
              <strong className="font-semibold text-[var(--ink)]">high-converting websites</strong>, rank{" "}
              <strong className="font-semibold text-[var(--ink)]">#1 on Google</strong>, and acquire{" "}
              <strong className="font-semibold text-[var(--ink)]">international buyers</strong> through targeted social
              media campaigns.
            </motion.p>

            <motion.dl variants={fadeUp} className="mt-10 grid grid-cols-3 border-t border-[var(--line)]">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex flex-col pt-5 pr-3 ${i > 0 ? "border-l border-[var(--line)] pl-4 md:pl-5" : ""}`}
                >
                  <dt className="mt-2 text-sm leading-snug text-[var(--muted)]">{m.label}</dt>
                  <dd
                    className={`serif order-first leading-none text-[var(--ink)] ${m.small ? "text-[1.7rem] md:text-3xl" : "text-5xl"}`}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>

        <motion.div
          ref={frameRef}
          {...inView}
          variants={wipeUp}
          className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[var(--ink)] lg:col-span-7"
        >
          <motion.div className="absolute inset-[-14%_0]" style={reduce ? undefined : { y }}>
            <Image
              src={photos.villa}
              alt="A white modern villa with a private pool, in the style of a Palm Jumeirah villa"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(0,11,33,0.55),transparent)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
