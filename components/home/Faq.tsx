"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Plus } from "lucide-react";
import { faqs } from "@/data/homeData";
import { EASE, EMAIL, PHONE_DISPLAY, PHONE_HREF, PillLead, fadeUp, focusRing, inView, maskUp, stagger } from "../ui";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="px-2 md:px-3">
      <div className="rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div {...inView} variants={stagger(0.1)} className="lg:sticky lg:top-28">
              <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
                Your questions about digital marketing in Delhi, answered
              </motion.p>
              <h2 className="h-section mt-3">
                <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={maskUp} className="block">FAQs</motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Straight answers on how we work, what it costs to get started, and when to expect results.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 rounded-[24px] bg-[var(--ink)] p-7 text-white">
                <p className="text-xl font-semibold tracking-tight">Still have a question?</p>
                <p className="mt-1.5 text-sm text-white/70">Talk to our team and get an answer for your business.</p>
                <div className="mt-5 space-y-2.5 text-sm">
                  <a href={PHONE_HREF} className="flex items-center gap-2.5 text-white/85 hover:text-white">
                    <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 break-all text-white/85 hover:text-white">
                    <Mail className="h-4 w-4 shrink-0 text-[var(--cyan)]" aria-hidden />
                    {EMAIL}
                  </a>
                </div>
                <PillLead source="faq" tone="cyan" className="mt-6">
                  Ask our team
                </PillLead>
              </motion.div>
            </motion.div>
          </div>

          <motion.ul {...inView} variants={stagger(0.05, 0.15)} className="border-t border-[var(--line)] lg:col-span-7">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              const btnId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <motion.li variants={fadeUp} key={i} className="border-b border-[var(--line)]">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className={`flex w-full items-center justify-between gap-6 rounded-md py-6 text-left cursor-pointer ${focusRing}`}
                    >
                      <span className="text-[1.05rem] font-semibold leading-snug md:text-lg">{faq.question.trim()}</span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          open ? "bg-[var(--ink)] text-white" : "ring-1 ring-inset ring-[var(--line-strong)]"
                        }`}
                      >
                        <Plus className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <motion.p
                        className="max-w-[68ch] pb-7 pr-12 leading-relaxed text-[var(--muted)]"
                        initial={false}
                        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, delay: open ? 0.1 : 0, ease: EASE }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
