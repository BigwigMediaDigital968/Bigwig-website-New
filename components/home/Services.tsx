"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/homeData";
import { motion } from "framer-motion";
import { PillLead, PillLink, SectionHead, fadeUp, inView, stagger } from "../ui";

export default function Services() {
  return (
    <section className="px-2 md:px-3">
      <div className="rounded-[32px] bg-[var(--surface)] py-20">
        <div className="wrap">
          <SectionHead
            lead="Transforming brands with modern digital solutions"
            title="Our Digital Marketing Services in Delhi"
            actions={
              <>
                <PillLead source="services-header">Get a free recommendation</PillLead>
                <PillLink href="/services">View all services</PillLink>
              </>
            }
          />

          <motion.ul {...inView} variants={stagger(0.06)} className="mt-14 border-t border-[var(--line)]">
            {services.map((s) => (
              <motion.li
                variants={fadeUp}
                key={s.slug}
                className="group relative grid gap-3 border-b border-[var(--line)] py-7 transition-colors duration-300 hover:bg-[var(--paper)] md:grid-cols-12 md:items-center md:gap-8 md:px-4 md:py-8"
              >
                <h3 className="text-[1.45rem] font-semibold leading-tight tracking-tight transition-transform duration-500 ease-out md:col-span-5 md:text-[1.75rem] md:group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="max-w-[62ch] leading-relaxed text-[var(--muted)] md:col-span-6">{s.desc}</p>
                <div className="md:col-span-1 md:flex md:justify-end">
                  {/* stretched link: the whole row is clickable */}
                  <Link
                    href={s.slug}
                    aria-label={`Learn more about ${s.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)] transition-colors duration-300
                      after:absolute after:inset-0 after:content-[''] group-hover:bg-[var(--ink)] group-hover:text-white group-hover:ring-[var(--ink)]
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link)]"
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                  </Link>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
