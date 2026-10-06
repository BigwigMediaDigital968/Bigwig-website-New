"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Plus } from "lucide-react";
import { EASE, EMAIL, PHONE_DISPLAY, PHONE_HREF, PillLead, focusRing } from ".";

/** One question/answer row. Controlled: the parent decides which rows are open. */
export function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const btnId = `${id}-q`;
  const panelId = `${id}-a`;

  return (
    <>
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center justify-between gap-6 rounded-md py-6 text-left cursor-pointer ${focusRing}`}
        >
          <span className="text-[1.05rem] font-semibold leading-snug md:text-lg">{question}</span>
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
            {answer}
          </motion.p>
        </div>
      </div>
    </>
  );
}

/** Navy card pointing people to the team when the FAQs don't cover their question. */
export function AskCard({ source, className = "" }: { source: string; className?: string }) {
  return (
    <div className={`rounded-[24px] bg-[var(--ink)] p-7 text-white ${className}`}>
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
      <PillLead source={source} tone="cyan" className="mt-6">
        Ask our team
      </PillLead>
    </div>
  );
}
