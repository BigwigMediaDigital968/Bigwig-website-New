"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Star, Users } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const PortifolioHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax video background matching ServiceHero scroll dynamics
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex overflow-hidden bg-[#011c40] text-white lg:h-[100svh] lg:min-h-[700px] lg:max-h-[980px] lg:items-center"
    >
      {/* Background Video Layer with Parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={reduce ? undefined : { scale: videoScale, y: videoY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="portfolio-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Navy gradient washes matching ServiceHero overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(1,28,64,0.82)_0%,rgba(1,28,64,0.92)_100%)] lg:bg-[linear-gradient(100deg,rgba(1,28,64,0.94)_0%,rgba(1,28,64,0.78)_45%,rgba(2,56,89,0.4)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.6),transparent_40%)]"
      />

      {/* Main Content Area - exact padding specs matching ServiceHero (pt-28 md:pt-32 lg:pt-24) */}
      <div className="wrap grid w-full gap-8 pb-12 pt-28 md:pt-32 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow / Lead */}
            <p className="text-[0.95rem] font-medium text-[#a7ebf2] tracking-wide mb-2">
              PORTFOLIO SHOWCASE
            </p>

            {/* Main Title matching ServiceHero typography scaling */}
            <h1 className="mx-auto max-w-4xl text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-[clamp(2.5rem,3.2vw,3rem)] text-white">
              50+ Digital Products Built for the{" "}
              <span className="block italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ccdaff] via-[#a7ebf2] to-[#ffffff]">
                World&apos;s Leading Enterprises.
              </span>
            </h1>

            {/* Intro Copy */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Explore how BigWig Media Digital Engineers Digital Solutions that
              move Markets across 20+ Industries.
            </p>

            {/* CTA Button */}
            <div className="mt-7 flex justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-bold text-[#011c40] shadow-md transition-all duration-300 ease-out hover:bg-[#a7ebf2] hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-120%] transition-transform duration-700 ease-in-out group-hover:translate-x-[120%]" />

                <span className="relative z-10 flex items-center gap-2">
                  Book a Portfolio Demo
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 items-end md:mt-14 md:grid-cols-12">
            {/* 50+ Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center rounded-[20px] bg-white p-5 text-left shadow-xl md:col-span-2"
            >
              <h3 className="text-3xl font-bold text-[#4e6cba] md:text-4xl">50+</h3>
              <p className="mt-1 text-xs font-bold leading-snug text-[#011c40]">
                Digital Solutions <br /> Developed
              </p>
            </motion.div>

            {/* Rating Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex h-full min-h-[125px] flex-col justify-between rounded-[20px] border border-white/15 bg-[#023859]/70 p-4 backdrop-blur-md md:col-span-2"
            >
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-white text-white" />
                <span className="text-lg font-semibold italic text-white">
                  4.9 / 5.0
                </span>
              </div>
              <div className="mt-auto text-left">
                <p className="text-[10px] font-semibold uppercase leading-tight tracking-wider text-white/70">
                  Client-Verified <br /> Platforms
                </p>
              </div>
            </motion.div>

            {/* Center Image Feature Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="group relative h-[180px] overflow-hidden rounded-[20px] shadow-2xl md:col-span-4 md:h-[200px]"
            >
              <img
                src="/portfolio-hero-image-1.png"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Digital Growth Team"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow-sm backdrop-blur-md">
                <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#4e6cba]">
                  <Users className="h-2 w-2 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-black">
                  Digital Growth
                </span>
              </div>
            </motion.div>

            {/* 20+ Industries Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex h-full min-h-[125px] flex-col justify-between rounded-[20px] border border-white/15 bg-[#023859]/70 p-4 backdrop-blur-md md:col-span-2"
            >
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white md:text-3xl">20+</h3>
                <p className="mt-0.5 text-[10px] font-medium text-white/70">
                  Industries Served
                </p>
              </div>
              <div className="flex h-9 items-end justify-end gap-1.5 pt-2">
                <div className="h-[30%] w-2 rounded-full bg-white/30" />
                <div className="h-[50%] w-2 rounded-full bg-white/30" />
                <div className="h-[80%] w-2 rounded-full bg-[#4e6cba]" />
                <div className="h-[100%] w-2 rounded-full bg-[#a7ebf2]" />
              </div>
            </motion.div>

            {/* 80% Faster Metric Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative flex h-full min-h-[125px] flex-col justify-between overflow-hidden rounded-[20px] bg-white p-4 shadow-xl md:col-span-2"
            >
              <div className="z-10 text-left">
                <h4 className="mb-0.5 text-xl font-bold text-[#011c40]">
                  80% Faster
                </h4>
                <p className="text-[9px] font-medium uppercase leading-tight text-gray-500">
                  Time-to-Market Powered by AI
                </p>
              </div>

              {/* Decorative Slinky Rings */}
              <div className="absolute right-[-10px] bottom-[-10px] flex flex-col items-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-11 w-11 rounded-full border-[4px] border-[#023859]"
                    style={{
                      marginTop: "-32px",
                      opacity: 0.8 - i * 0.15,
                      transform: `translateX(${i * 4}px)`,
                    }}
                  />
                ))}
                <div className="absolute -left-1 top-0 h-2.5 w-2.5 animate-pulse rounded-full bg-[#4e6cba]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortifolioHero;