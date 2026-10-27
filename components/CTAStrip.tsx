"use client";

import { PillLead, WhatsAppPill } from "./ui";

interface CTAStripProps {
  title?: React.ReactNode;
  intro?: string;
  ctaText?: string;
  kicker?: string;
  className?: string;
}

export default function CTAStrip({
  title = "Ready to Build Your Brand & Break Limits?",
  intro = "Take the first step toward high-performance digital marketing. Partner with Delhi's leading growth agency.",
  ctaText = "Get a free strategy session",
  kicker = "LET'S CONNECT",
  className = "",
}: CTAStripProps) {
  return (
    <section className={`w-full px-4 py-4 ${className}`}>
      <div className="relative mx-auto flex h-[40vh] min-h-[220px] max-w-6xl flex-col justify-between overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-r from-[var(--ink,#011c40)] via-slate-900 to-[#022859] p-6 shadow-2xl backdrop-blur-2xl sm:p-8 md:flex-row md:items-center lg:h-[20vh] lg:px-10">
        
        {/* Subtle Ambient Radial Glow for Depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[var(--cyan,#00f0ff)]/10 blur-3xl"
        />

        {/* Left Side Text Content */}
        <div className="relative z-10 flex max-w-2xl flex-col justify-center gap-1.5">
          {kicker && (
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--cyan)] sm:text-sm">
              {kicker}
            </span>
          )}

          <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
            {title}
          </h2>

          <p className="line-clamp-2 text-xs font-normal text-white/80 sm:text-sm md:line-clamp-none lg:text-base">
            {intro}
          </p>
        </div>

        {/* Right Side Buttons (Both directly visible with high contrast) */}
        <div className="relative z-10 flex flex-wrap items-center justify-start sm:justify-end gap-3 pt-2 md:pt-0">
          <PillLead source="cta_strip" tone="cyan">
            {ctaText}
          </PillLead>
          <WhatsAppPill dark />
        </div>

      </div>
    </section>
  );
}