"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { PillLead, SectionHead, fadeUp, inView, stagger } from "../../ui";

export type GalleryPost = { image: StaticImageData | string; alt: string };

/** two 4:5 portraits, then four squares */
export type GalleryPosts = [GalleryPost, GalleryPost, GalleryPost, GalleryPost, GalleryPost, GalleryPost];

const smoPosts: GalleryPosts = [
  { image: "/assets/graphic/8.jpg", alt: "Social media post designed by BigWig" },
  { image: "/assets/graphic/9.jpg", alt: "Social media post designed by BigWig" },
  { image: "/assets/graphic/13.jpg", alt: "Social media post designed by BigWig" },
  { image: "/assets/graphic/14.jpg", alt: "Social media post designed by BigWig" },
  { image: "/assets/graphic/10.jpg", alt: "Social media post designed by BigWig" },
  { image: "/assets/graphic/12.jpg", alt: "Social media post designed by BigWig" },
];

// desktop placement by position: portraits on the outer columns, squares 2×2 in the middle
// (literal class names so Tailwind generates them)
const places = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "lg:col-start-4 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

/**
 * Bento gallery of static posts, sized to fit one screen on desktop. Column widths are set so the 4:5
 * portraits and the squares keep their shape: portrait width 0.8H + square width 0.5H, twice, makes the
 * grid 2.6 times as wide as it is tall. Defaults are the SMO page's copy and photos.
 */
export default function StaticWorkGallery({
  lead = "Static creatives",
  title = "Scroll-Stopping Posts, Designed In-House",
  intro = "Every static post is built for the feed it lives in: bold enough to stop the scroll, clear enough to read in a second, and on-brand every time. A few recent creatives from our design team.",
  cta = "Get creatives for your brand",
  source = "smo-gallery",
  posts = smoPosts,
}: {
  lead?: string;
  title?: string;
  intro?: React.ReactNode;
  cta?: string;
  source?: string;
  posts?: GalleryPosts;
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead={lead} title={title} actions={<PillLead source={source}>{cta}</PillLead>} />
        <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          {intro}
        </motion.p>
      </div>

      <motion.ul
        {...inView}
        variants={stagger(0.07, 0.1)}
        // tiles separated by a thin gap in the page colour
        className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-1 overflow-hidden md:mt-12 lg:aspect-[2.6/1] lg:grid-cols-[1.6fr_1fr_1fr_1.6fr] lg:grid-rows-2 bg-white"
      >
        {posts.map((p, i) => {
          const tall = i < 2;
          return (
            <motion.li
              key={p.alt}
              variants={fadeUp}
              className={`group relative overflow-hidden bg-[var(--ink)] lg:aspect-auto ${tall ? "aspect-[4/5]" : "aspect-square"} ${places[i]}`}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                placeholder={typeof p.image === "string" ? "empty" : "blur"}
                sizes={tall ? "(min-width: 1024px) 31vw, 50vw" : "(min-width: 1024px) 19vw, 50vw"}
                className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
