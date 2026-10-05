"use client";

import { motion } from "framer-motion";
import { logos } from "./partnerLogos";
import { EASE } from "../ui";

export default function Partners() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]">
      <motion.div
        className="wrap flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="flex-none text-sm font-semibold leading-snug text-[var(--ink)] md:max-w-[10rem]">
          Technology & Platform Partnerships
        </h2>
        <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
          <div role="list" aria-label="Partners and platforms" className="marquee items-center" style={{ animationDuration: "45s" }}>
            {[...logos, ...logos].map((l, i) => {
              const hidden = i >= logos.length;
              const Logo = l.component;
              return (
                <div
                  key={i}
                  role={hidden ? undefined : "listitem"}
                  aria-hidden={hidden || undefined}
                  aria-label={hidden ? undefined : l.name}
                  title={l.name}
                  className="flex h-14 flex-none items-center border-r border-[var(--line)] px-8 text-[var(--ink)] md:px-10"
                >
                  <Logo />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
