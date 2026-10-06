"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { branches, headOffice, type Office } from "@/data/offices";
import { SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";

export default function Offices() {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">
        <div className="wrap">
          <SectionHead dark lead="Our offices" title="Find a Bigwig location near you." />

          <motion.div
            {...inView}
            variants={stagger(0.1, 0.15)}
            className="mt-14 grid gap-3 md:mt-16 lg:grid-cols-12"
          >
            {/* head office with the map */}
            <motion.article
              variants={fadeUp}
              className="overflow-hidden rounded-[24px] bg-[var(--ink-2)] lg:col-span-7 lg:row-span-2"
            >
              <iframe
                src={headOffice.mapEmbed}
                title="Map of the Bigwig Media Digital head office in Gulabi Bagh, Delhi"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[280px] w-full border-0 md:h-[360px]"
              />
              <OfficeBody office={headOffice} />
            </motion.article>

            {branches.map((b) => (
              <motion.article
                key={b.city}
                variants={fadeUp}
                className="flex flex-col rounded-[24px] bg-[var(--ink-2)] lg:col-span-5"
              >
                <OfficeBody office={b} />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OfficeBody({ office }: { office: Office }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 p-7 md:p-8">
      <div>
        <p className="text-sm font-medium text-[var(--cyan)]">{office.label}</p>
        <h3 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{office.city}</h3>
        <p className="mt-4 max-w-sm leading-relaxed text-white/70">{office.address}</p>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={office.phoneHref}
          className={`inline-flex items-center gap-2 rounded-sm text-[0.95rem] text-white/85 hover:text-white ${focusRing}`}
        >
          <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
          {office.phoneDisplay}
        </a>
        <a
          href={office.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex h-11 items-center gap-2 rounded-full bg-white/10 pl-5 pr-1.5 text-[0.95rem] font-semibold transition-colors hover:bg-white/20 ${focusRing}`}
        >
          Get directions
          <span className="sr-only">to our {office.city} office (opens in a new tab)</span>
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  );
}
