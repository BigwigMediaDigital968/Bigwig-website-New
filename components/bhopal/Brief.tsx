"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { trackLeadEvent } from "../../utils/leadTracking";
import { areas, budgets, businesses, wants, wider } from "./content";

/**
 * The visitor's sentence ("I run a clinic and want more phone calls from people around MP Nagar…"), shared by
 * the whole page: the hero edits it, the map sets the area, and other sections echo it back.
 */

export type Brief = { business: string; want: string; area: string; budget: string };

/** Every option for the "from people …" slot, in sentence form. */
export const reachOptions = [
  ...areas.map((a) => ({ id: a.id, label: `around ${a.label}` })),
  ...wider.map((w) => ({ id: w.id, label: w.label })),
];

type BriefContextValue = {
  brief: Brief;
  set: (patch: Partial<Brief>, source?: string) => void;
  /** scroll to the sentence and put focus on it */
  toForm: (source: string) => void;
  formRef: React.RefObject<HTMLElement | null>;
};

const BriefContext = createContext<BriefContextValue | null>(null);

export function useBrief() {
  const ctx = useContext(BriefContext);
  if (!ctx) throw new Error("useBrief must be used inside <BriefProvider>");
  return ctx;
}

export function BriefProvider({ children }: { children: React.ReactNode }) {
  const [brief, setBrief] = useState<Brief>({
    business: "clinic",
    want: "calls",
    area: "mp-nagar",
    budget: budgets[1],
  });
  const formRef = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  // the first change counts as opening the lead form, as a CTA click does elsewhere on the site
  const markStarted = useCallback((source: string) => {
    if (started.current) return;
    started.current = true;
    trackLeadEvent("lead_cta_click", source);
  }, []);

  const set = useCallback(
    (patch: Partial<Brief>, source = "bhopal-sentence") => {
      markStarted(source);
      setBrief((b) => ({ ...b, ...patch }));
    },
    [markStarted],
  );

  const toForm = useCallback(
    (source: string) => {
      markStarted(source);
      const el = formRef.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      el.focus({ preventScroll: true });
    },
    [markStarted],
  );

  const value = useMemo(() => ({ brief, set, toForm, formRef }), [brief, set, toForm]);
  return <BriefContext.Provider value={value}>{children}</BriefContext.Provider>;
}

/** Labels for the current sentence, for sections that echo it. */
export function useBriefLabels() {
  const { brief } = useBrief();
  const business = businesses.find((b) => b.id === brief.business) ?? businesses[0];
  const want = wants.find((w) => w.id === brief.want) ?? wants[0];
  const reach = reachOptions.find((r) => r.id === brief.area) ?? reachOptions[0];
  const area = areas.find((a) => a.id === brief.area);
  // what a customer would type into Google Maps
  const query = area
    ? `${business.search} near ${area.label}`
    : brief.area === "bhopal"
      ? `${business.search} in Bhopal`
      : `best ${business.search} near me`;
  return { business, want, reach, area, query };
}
