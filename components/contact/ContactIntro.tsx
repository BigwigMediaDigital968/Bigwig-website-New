"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { headOffice } from "@/data/offices";
import { EASE, EMAIL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF, fadeUp, focusRing, maskUp, stagger } from "../ui";
import EnquiryForm from "./EnquiryForm";

// WhatsApp keeps its brand green, matching WhatsAppPill
const channels = [
  { label: "Call us", value: PHONE_DISPLAY, href: PHONE_HREF, icon: <Phone className="h-5 w-5" /> },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: <Mail className="h-5 w-5" /> },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    href: WHATSAPP_HREF,
    icon: <FontAwesomeIcon icon={faWhatsapp} className="text-[1.3rem]" />,
    external: true,
    whatsapp: true,
  },
];

export default function ContactIntro() {
  return (
    <section className="pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* on phones this wrapper dissolves so the form can sit between the intro and the details */}
        <div className="contents lg:block lg:min-w-0 lg:col-span-5">
          <motion.div className="order-1" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
              Contact Bigwig Media Digital
            </motion.p>
            <h1 className="mt-4 text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  Let’s talk
                </motion.span>
              </span>
            </h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
              <span className="text-[var(--ink)]">Tell us about your business and goals.</span> We’ll get back to you
              with a free consultation and a plan built around what you need.
            </motion.p>
          </motion.div>

          {/* ---------- ways to reach us ---------- */}
          <motion.div
            className="order-3 min-w-0 lg:mt-12"
            initial="hidden"
            animate="show"
            variants={stagger(0.08, 0.5)}
          >
            <ul className="border-t border-[var(--line-strong)]">
              {channels.map(({ label, value, href, icon, external, whatsapp }) => (
                <motion.li key={label} variants={fadeUp} className="border-b border-[var(--line)]">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-5 transition-colors hover:bg-[var(--surface)] ${focusRing}`}
                  >
                    <span
                      aria-hidden
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        whatsapp ? "bg-[#25D366] text-[var(--ink)]" : "bg-[var(--ink)] text-[var(--cyan)]"
                      }`}
                    >
                      {icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-[var(--muted)]">{label}</span>
                      <span className="block text-lg font-semibold tracking-tight [overflow-wrap:anywhere]">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300 group-hover:rotate-45 group-hover:text-[var(--ink)]"
                    />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </motion.li>
              ))}

              <motion.li variants={fadeUp} className="flex gap-4 border-b border-[var(--line)] py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--link)] ring-1 ring-inset ring-[var(--line)]">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-[var(--muted)]">Visit our head office</p>
                  <p className="mt-0.5 font-semibold leading-snug">{headOffice.address}</p>
                  <a
                    href={headOffice.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-1.5 inline-block rounded-sm text-sm font-medium text-[var(--link)] hover:underline ${focusRing}`}
                  >
                    Get directions<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </motion.li>

              <motion.li variants={fadeUp} className="flex gap-4 border-b border-[var(--line)] py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--link)] ring-1 ring-inset ring-[var(--line)]">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-[var(--muted)]">Business hours</p>
                  <p className="mt-0.5 font-semibold leading-snug">Mon – Sat: 10:30 am – 7 pm</p>
                  <p className="text-sm text-[var(--muted)]">Sat: 2nd &amp; 4th, Sun: Closed</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* ---------- form ---------- */}
        <motion.div
          className="order-2 min-w-0 rounded-[28px] bg-[var(--surface)] p-6 sm:p-8 md:p-10 lg:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE }}
        >
          <p className="text-[0.95rem] font-medium text-[var(--link)]">Send us a message</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Get a free consultation
          </h2>
          <div className="mt-8">
            <EnquiryForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
