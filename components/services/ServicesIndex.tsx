"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serviceCards, type ServiceCard } from "@/data/servicesData";
import { useLeadPopup } from "../LeadPopup";
import { PillLead, WhatsAppPill, fadeUp, focusRing, inView, maskUp, stagger } from "../ui";

export default function ServicesIndex() {
  return (
    <>
      {/* ---------- header ---------- */}
      <section className="pb-14 pt-14 md:pb-20 md:pt-20">
        <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Digital marketing services in Delhi
          </motion.p>
          <h1 className="mt-4 text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Our Services
              </motion.span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-end">
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] lg:col-span-7"
            >
              <span className="text-[var(--ink)]">Everything your brand needs to grow online, under one roof.</span>{" "}
              SEO, social media, performance marketing, websites, content and more, planned together so every channel
              pulls in the same direction.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <PillLead source="services-hero">Get a free recommendation</PillLead>
              <WhatsAppPill />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ---------- services grid ---------- */}
      <section className="pb-4 md:pb-8">
        <div className="wrap">
          <motion.ul
            {...inView}
            variants={stagger(0.05)}
            aria-label="Our services"
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceCards.map((s, i) => (
              <motion.li key={s.href} variants={fadeUp}>
                <Card service={s} index={i} />
              </motion.li>
            ))}
            {/* 11 services + this tile fill the 2- and 3-column grids */}
            <motion.li variants={fadeUp}>
              <HelpTile />
            </motion.li>
          </motion.ul>
        </div>
      </section>
    </>
  );
}

function Card({ service, index }: { service: ServiceCard; index: number }) {
  return (
    <Link
      href={service.href}
      className={`group flex h-full flex-col rounded-[24px] bg-[var(--surface)] p-7 ring-1 ring-inset ring-transparent transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(1,28,64,0.45)] hover:ring-[var(--line)] md:p-8 ${focusRing}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--paper)] transition-colors duration-300 group-hover:bg-[var(--cyan)]/40">
          <Image src={service.icon} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
        </span>
        <span aria-hidden className="serif text-3xl leading-none text-[var(--teal)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-8 text-[1.4rem] font-semibold leading-tight tracking-tight md:text-2xl">{service.title}</h2>
      <p className="mt-2 font-medium text-[var(--link)]">{service.tagline}</p>
      <p className="mt-3 leading-relaxed text-[var(--muted)]">{service.desc}</p>

      <span className="mt-auto flex items-center justify-between gap-3 pt-8 text-[0.95rem] font-semibold">
        Explore service
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors duration-300 group-hover:bg-[var(--ink)] group-hover:text-white group-hover:ring-[var(--ink)]"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </span>
    </Link>
  );
}

function HelpTile() {
  const { open } = useLeadPopup();
  return (
    <button
      type="button"
      onClick={() => open("services-grid")}
      className={`group flex h-full min-h-[280px] w-full flex-col justify-between rounded-[24px] bg-[var(--ink)] p-7 text-left text-white transition-colors duration-300 hover:bg-[var(--ink-2)] cursor-pointer md:p-8 ${focusRing}`}
    >
      <span>
        <span className="block text-2xl font-semibold leading-tight tracking-tight md:text-[1.75rem]">
          Not sure what you need?
        </span>
        <span className="mt-3 block leading-relaxed text-white/70">
          Tell us about your business and we’ll recommend the right mix of services.
        </span>
      </span>
      <span className="flex items-center justify-between gap-3 pt-8 text-[0.95rem] font-semibold text-[var(--cyan)]">
        Get a free recommendation
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </span>
    </button>
  );
}
