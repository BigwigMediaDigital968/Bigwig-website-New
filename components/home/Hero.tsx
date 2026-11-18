"use client";

import { useEffect, useRef } from "react";
import { m as motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PillLead, WhatsAppPill } from "../ui";

// Same content and the same video + navy overlay as the live homepage hero
const heroContent = {
  videoSrc: "/Bigwig-Website-Video.mp4",
  fallbackImage: "/home-hero.webp",
  kicker: "Google Partner and Meta Business Partner",
  title: (
    <>
      Best Digital Marketing Agency in Delhi <br className="hidden md:block" />
      That Builds Brands & Breaks Limits
    </>
  ),
  subtitle:
    "We don’t just run campaigns - we engineer digital experiences that make your brand impossible to ignore. As a results-driven digital marketing agency in Delhi, Bigwig Media Digital blends creativity with performance science to turn attention into loyal customers.",
  ctaText: "Get a free strategy session",
};

const EASE = [0.2, 0.7, 0.2, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll parallax: video slowly zooms, copy drifts up and fades as the hero leaves
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (reduce) videoRef.current?.pause();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-end md:h-[100svh] md:min-h-[640px] md:max-h-[980px] overflow-hidden bg-[var(--ink)] text-white"
    >
      {/* the poster is the first thing painted, so fetch it at high priority (React hoists this to <head>) */}
      <link rel="preload" as="image" href={heroContent.fallbackImage} fetchPriority="high" />
      <motion.video
        style={reduce ? undefined : { scale: videoScale, y: videoY }}
        ref={videoRef}
        autoPlay={!reduce}
        loop
        muted
        playsInline
        poster={heroContent.fallbackImage}
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={heroContent.videoSrc} type="video/mp4" />
      </motion.video>

      {/* navy wash, darker behind the copy */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(1,28,64,0.92)_0%,rgba(1,28,64,0.7)_45%,rgba(2,56,89,0.35)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.7),transparent_45%)]"
      />

      <div className="wrap pb-10 pt-28 md:pb-20 md:pt-0">
        <motion.div style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-[var(--cyan)] ring-1 ring-inset ring-[var(--cyan)]/30 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" aria-hidden />
            {heroContent.kicker}
          </motion.p>

          {/* plain h1: it is the LCP element, so it must be visible in the server HTML (no opacity/clip start state) */}
          <h1 className="mt-5 md:mt-6 max-w-5xl text-[clamp(1.8rem,7.4vw,2.5rem)] font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
            {heroContent.title}
          </h1>

          <div className="mt-5 grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <motion.p {...rise(0.45)} className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
              {heroContent.subtitle}
            </motion.p>
          
          </div>

            <motion.div {...rise(0.6)} className="flex flex-wrap items-center gap-3 mt-5">
              <PillLead source="hero" tone="cyan">
                {heroContent.ctaText}
              </PillLead>
              {/* <WhatsAppPill dark /> */}
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
