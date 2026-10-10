"use client";

import { ArrowUpRight } from "lucide-react";
import { focusRing } from "../ui";
import { usePlanner } from "./Planner";

// same pill-with-chip as the site's PillLead; ink on light sections, cyan on dark ones
const TONES = {
  ink: {
    btn: "bg-[var(--ink)] text-white hover:bg-[var(--ink-2)]",
    chip: "bg-[var(--cyan)] text-[var(--ink)]",
  },
  cyan: {
    btn: "bg-[var(--cyan)] text-[var(--ink)] hover:bg-white",
    chip: "bg-[var(--ink)] text-[var(--cyan)]",
  },
} as const;

/** Every CTA on the page: scrolls to the nearest planner, optionally answering "what are you marketing?". */
export default function PlanButton({
  industry,
  source,
  tone = "ink",
  className = "",
  children = "Get my free growth plan",
}: {
  industry?: string;
  source: string;
  tone?: keyof typeof TONES;
  className?: string;
  children?: React.ReactNode;
}) {
  const { goTo } = usePlanner();
  return (
    <button
      type="button"
      onClick={() => goTo({ industry, source: `dubai-v3-${source}` })}
      className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full pl-6 pr-1.5 text-[0.95rem] font-semibold cursor-pointer transition-[color,background-color,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.97] ${TONES[tone].btn} ${focusRing} ${className}`}
    >
      {children}
      <span
        aria-hidden
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${TONES[tone].chip}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}
