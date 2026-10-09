"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { EASE, SectionHead, WhatsAppPill } from "../ui";
import { DUBAI_WHATSAPP_HREF } from "../dubai/DubaiHero";
import { reviews } from "./content";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

/**
 * Real Google reviews on dark glass cards (backdrop blur over soft light blooms). The row drifts slowly and
 * pauses on hover or keyboard focus; with reduced motion it becomes a plain horizontal scroller.
 */
export default function RealEstateTestimonials() {
  return (
    <section className="px-2 md:px-3">
      <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--night)] py-20 text-white md:py-28">
        {/* light blooms for the glass to blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[520px] rounded-full bg-[var(--teal)]/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[360px] w-[460px] rounded-full bg-[var(--link)]/35 blur-[120px]"
        />

        <div className="wrap">
          <SectionHead
            dark
            lead="Client reviews"
            title="What our clients say."
            actions={<WhatsAppPill href={DUBAI_WHATSAPP_HREF} dark />}
          />
        </div>

        <motion.div
          className="marquee-mask mt-14 overflow-hidden motion-reduce:overflow-x-auto md:mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <ul className="marquee items-stretch" style={{ animationDuration: "70s" }}>
            {[...reviews, ...reviews].map((r, i) => {
              const copy = i >= reviews.length;
              return (
                <li
                  key={`${r.name}-${i}`}
                  aria-hidden={copy || undefined}
                  className="flex w-[min(85vw,420px)] flex-none px-2"
                >
                  <figure className="flex w-full flex-col rounded-[24px] bg-white/[0.06] p-7 ring-1 ring-inset ring-white/12 backdrop-blur-[12px] md:p-8">
                    <div className="flex gap-1 text-[var(--cyan)]" aria-label={`Rated ${r.rating} out of 5`}>
                      {Array.from({ length: r.rating }, (_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-white/85">
                      “{r.review}”
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-3">
                      {r.image ? (
                        // eslint-disable-next-line @next/next/no-img-element -- Google avatar URLs aren't in next.config images
                        <img src={r.image} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                      ) : (
                        <span
                          aria-hidden
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cyan)] text-sm font-semibold text-[var(--ink)]"
                        >
                          {initials(r.name)}
                        </span>
                      )}
                      <span>
                        <span className="block font-semibold">{r.name}</span>
                        <span className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/75">
                          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
                          Google review
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
