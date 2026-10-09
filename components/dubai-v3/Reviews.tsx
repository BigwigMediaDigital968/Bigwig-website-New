"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHead, fadeUp, inView, stagger } from "../ui";
import { reviews } from "./content";

/** Real Google reviews: the first is featured large, the other two sit beside it. */
export default function Reviews() {
  const [first, ...rest] = reviews;
  if (!first) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead="What clients say"
          title="Results our clients put in writing."
        />

        <motion.div
          {...inView}
          variants={stagger(0.1)}
          className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-12"
        >
          <motion.figure
            variants={fadeUp}
            className="flex flex-col rounded-[28px] bg-[var(--surface)] p-8 md:p-12 lg:col-span-7"
          >
            <span
              aria-hidden
              className="serif text-8xl leading-[0.6] text-[var(--teal)]"
            >
              “
            </span>
            <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]">
              {first.review}
            </blockquote>
            <Byline name={first.name} rating={first.rating} />
          </motion.figure>

          <div className="grid gap-4 lg:col-span-5">
            {rest.map((r) => (
              <motion.figure
                key={r.name}
                variants={fadeUp}
                className="flex flex-col rounded-[28px] bg-[var(--surface)] p-8"
              >
                <blockquote className="leading-relaxed text-[var(--ink)]/85">
                  {r.review}
                </blockquote>
                <Byline name={r.name} rating={r.rating} />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Byline({ name, rating }: { name: string; rating: number }) {
  return (
    <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
      <span className="font-semibold">{name}</span>
      <span className="flex items-center gap-2 text-sm text-[var(--muted)]">
        <span className="flex text-[var(--teal)]" aria-hidden>
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </span>
        <span className="sr-only">{rating} out of 5 stars, </span>Google review
      </span>
    </figcaption>
  );
}
