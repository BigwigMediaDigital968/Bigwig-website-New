"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { branches } from "@/data/offices";
import {
  SectionHead,
  WhatsAppPill,
  fadeUp,
  focusRing,
  inView,
  stagger,
} from "../ui";
import PlanButton from "../dubai-v3/PlanButton";
import { BHOPAL_WHATSAPP_HREF, areas, nearby } from "./content";

const office = branches.find((b) => b.city === "Bhopal")!;

/**
 * Bhopal's answer to Dubai's buyer-markets chart: the case for a local team. Left, why local matters and the
 * CTA; right, the office card and the neighbourhoods and cities we run campaigns in.
 */
export default function Office() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHead
            lead="Local team"
            title="Marketing from people who know Bhopal."
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            We plan around how Bhopal actually buys: the neighbourhoods your
            customers live in, the searches they make in Hindi and English,
            and the festive and admission seasons that move demand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlanButton source="office">Plan my local campaign</PlanButton>
            <WhatsAppPill href={BHOPAL_WHATSAPP_HREF} />
          </div>
        </div>

        <motion.div
          {...inView}
          variants={stagger(0.08)}
          className="grid gap-4 lg:col-span-7"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] bg-[var(--surface)] p-7 ring-1 ring-[var(--line)] md:p-10"
          >
            <p className="text-sm text-[var(--muted)]">Our Bhopal office</p>
            <p className="mt-3 flex items-start gap-3 text-xl font-semibold leading-snug tracking-tight">
              <MapPin
                className="mt-1 h-5 w-5 flex-none text-[var(--teal)]"
                aria-hidden
              />
              {office.address}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem] font-semibold">
              <a
                href={office.phoneHref}
                className={`inline-flex items-center gap-2 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}
              >
                <Phone className="h-4 w-4" aria-hidden />
                {office.phoneDisplay}
              </a>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-sm text-[var(--link)] hover:underline ${focusRing}`}
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[28px] bg-[var(--surface)] p-7 ring-1 ring-[var(--line)] md:p-10"
          >
            <p className="text-sm text-[var(--muted)]">
              Local campaigns across Bhopal
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-[var(--paper)] px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset ring-[var(--line)]"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm text-[var(--muted)]">
              And beyond, across Madhya Pradesh and India
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-[var(--ink)] px-3.5 py-1.5 text-sm font-medium text-white"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
