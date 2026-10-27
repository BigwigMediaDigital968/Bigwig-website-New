"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/data/homeData";
import { fadeUp, inView, maskUp, stagger } from "../ui";
import { AccordionItem, AskCard } from "../ui/Accordion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-2 md:px-3">
      <div className="rounded-[32px] bg-[var(--surface)] py-18">
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

              <motion.div variants={fadeUp}>
                <AskCard source="faq" className="mt-10" />
              </motion.div>
            </motion.div>
          </div>

          <motion.ul {...inView} variants={stagger(0.05, 0.15)} className="border-t border-[var(--line)] lg:col-span-7">
            {faqs.map((faq, i) => (
              <motion.li variants={fadeUp} key={i} className="border-b border-[var(--line)]">
                <AccordionItem
                  question={faq.question.trim()}
                  answer={faq.answer}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
