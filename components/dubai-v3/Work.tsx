"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHead, fadeUp, inView, stagger } from "../ui";
import PlanButton from "./PlanButton";
import { BrowserFrame } from "./mocks";
import { creatives, sites } from "./content";

/**
 * Proof in pictures: real property websites (hover one to scroll through the full page) and a slow strip of
 * ad creatives and social posts. The strip pauses on hover (see .marquee in brand.css) and stops for reduced motion.
 */
export default function Work() {
  // doubled so the -50% marquee loop is seamless
  const strip = [...creatives, ...creatives];

  return (
    <section className="px-2 py-2 md:px-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap">
          <SectionHead
            lead="Selected work"
            title="Real websites and creative from a digital marketing agency in Dubai."
            actions={<PlanButton source="work">Get work like this</PlanButton>}
          />

          <motion.ul
            {...inView}
            variants={stagger(0.08)}
            className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3"
          >
            {sites.map((s) => (
              <motion.li key={s.name} variants={fadeUp} className="group">
                <BrowserFrame
                  url={s.url}
                  src={s.src}
                  width={s.width}
                  height={s.height}
                  hoverScroll
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="text-[13px]"
                />
                <p className="mt-4 font-semibold">{s.name}</p>
                <p className="text-sm text-[var(--muted)]">{s.tag}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <p className="wrap mt-16 text-sm text-[var(--muted)] md:mt-20">
          Ad creatives and social posts from our design team
        </p>
        <div className="marquee-mask mt-5 overflow-hidden">
          <ul className="marquee gap-3" style={{ animationDuration: "60s" }}>
            {strip.map((c, i) => (
              <li
                key={i}
                aria-hidden={i >= creatives.length || undefined}
                className="relative h-56 w-44 flex-none overflow-hidden rounded-2xl md:h-72 md:w-56"
              >
                <Image
                  src={c.src}
                  alt={i >= creatives.length ? "" : c.alt}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
