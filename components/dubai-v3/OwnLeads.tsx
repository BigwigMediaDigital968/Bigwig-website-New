"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { SectionHead, fadeUp, inView, stagger } from "../ui";
import PlanButton from "./PlanButton";
import { comparison as dubaiComparison } from "./content";

type Row = { topic: string; portal: string; own: string };

/**
 * The problem, framed as a choice: the usual way (portal enquiries, on Dubai) vs a lead engine you own. A real
 * table, so it reads row by row for screen readers; on phones each row stacks into a block. `portal` is the
 * left column whatever it's called.
 */
export default function OwnLeads({
  lead = "Why portals aren’t enough",
  title = "Portal leads are shared. Yours shouldn’t be.",
  before = "Portal-only",
  caption = "Portal-only enquiries compared with your own lead engine",
  rows = dubaiComparison,
}: {
  lead?: string;
  title?: string;
  /** heading of the left column */
  before?: string;
  caption?: string;
  rows?: Row[];
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead={lead}
          title={title}
          actions={
            <PlanButton source="own-leads">Build my lead engine</PlanButton>
          }
        />

        <motion.table
          {...inView}
          variants={stagger(0.06)}
          className="mt-14 w-full border-collapse text-left md:mt-16"
        >
          <caption className="sr-only">{caption}</caption>
          <thead className="hidden md:table-header-group">
            <tr className="text-sm text-[var(--muted)]">
              <th scope="col" className="w-[22%] pb-4 font-medium">
                <span className="sr-only">Topic</span>
              </th>
              <th scope="col" className="pb-4 pr-6 font-medium">
                {before}
              </th>
              <th scope="col" className="pb-4 font-semibold text-[var(--ink)]">
                Your own lead engine, built by us
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <motion.tr
                key={row.topic}
                variants={fadeUp}
                className="grid gap-3 border-t border-[var(--line)] py-6 md:table-row md:py-0"
              >
                <th
                  scope="row"
                  className="text-lg font-semibold tracking-tight md:py-7 md:pr-6 md:align-top"
                >
                  {row.topic}
                </th>
                <td className="flex items-start gap-3 text-[var(--muted)] md:py-7 md:pr-6 md:align-top">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ring-1 ring-inset ring-[var(--line-strong)]"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="sr-only md:hidden">{before}: </span>
                    {row.portal}
                  </span>
                </td>
                <td className="md:py-7 md:align-top">
                  <span className="flex items-start gap-3 rounded-2xl bg-[var(--surface)] p-4 font-medium ring-1 ring-[var(--line)] md:-my-4 md:p-4">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--ink)] text-[var(--cyan)]"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="sr-only md:hidden">With us: </span>
                      {row.own}
                    </span>
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </section>
  );
}
