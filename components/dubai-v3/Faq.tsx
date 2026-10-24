"use client";

import { useState } from "react";
import { AccordionItem } from "../ui/Accordion";
import { SectionHead } from "../ui";
import PlanButton from "./PlanButton";
import { faqs } from "./content";

/** The objections people raise before they enquire. The side card sends them to the planner, not away. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHead lead="Questions" title="Before you ask." />
          <div className="mt-8 rounded-[24px] bg-[var(--surface)] p-7 ring-1 ring-[var(--line)]">
            <p className="text-xl font-semibold tracking-tight">
              Still deciding on a digital marketing agency in Dubai?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
              The plan is free, and you’ll get real numbers for your business,
              not a sales pitch.
            </p>
            <PlanButton source="faq" className="mt-6">
              Get my free plan
            </PlanButton>
          </div>
        </div>
        <div className="border-t border-[var(--line)] lg:col-span-8">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-[var(--line)]">
              <AccordionItem
                question={f.q}
                answer={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
