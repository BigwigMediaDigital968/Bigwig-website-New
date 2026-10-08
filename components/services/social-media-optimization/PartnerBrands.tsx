"use client";

import { motion } from "framer-motion";
import { logos as allLogos } from "../../home/partnerLogos";
import { fadeUp, inView } from "../../ui";

// only the marketing and social platforms; the dev stack (Next.js, React, …) isn't relevant to SMO
const SMO_PARTNERS = ["Meta Business Partner", "TikTok", "Google Partner", "HubSpot", "Microsoft Partner", "Shopify"];
const logos = SMO_PARTNERS.flatMap((name) => allLogos.filter((l) => l.name === name));

/** Partner logo marquee on a white panel, sized to sit between service page sections. */
export default function PartnerBrands() {
  return (
    <section className="py-6 md:py-8">
      <motion.div
        {...inView}
        variants={fadeUp}
        className="wrap"
      >
        <div className="flex flex-col gap-4 rounded-[24px] bg-[var(--surface)] p-5 ring-1 ring-inset ring-[var(--line)] md:flex-row md:items-center md:gap-10 md:px-8 md:py-6">
          <h2 className="flex-none text-sm font-semibold leading-snug md:max-w-[10rem]">
            Technology & Platform Partnerships
          </h2>
          <div className="marquee-mask min-w-0 flex-1 overflow-hidden">
            <div role="list" aria-label="Partners and platforms" className="marquee items-center" style={{ animationDuration: "25s" }}>
              {[...logos, ...logos].map((l, i) => {
                // the second set only exists to make the loop seamless
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
        </div>
      </motion.div>
    </section>
  );
}
