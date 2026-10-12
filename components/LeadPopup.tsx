"use client";

import { createContext, useCallback, useContext, useState } from "react";
import PopupForm from "./PopupForm";
import { trackLeadEvent } from "../utils/leadTracking";

/**
 * One lead popup for the whole site. Rendered once in the root layout;
 * any component opens it with `useLeadPopup().open("where-it-was-clicked")`.
 * The source is pushed to the GTM dataLayer so you can see which CTAs convert.
 */

type LeadPopupContextValue = { open: (source?: string) => void };

const LeadPopupContext = createContext<LeadPopupContextValue | null>(null);

export function LeadPopupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("unknown");

  const open = useCallback((source = "unknown") => {
    trackLeadEvent("lead_cta_click", source);
    setSource(source);
    setIsOpen(true);
  }, []);
  // stable, so the popup's open/close effect doesn't re-run while it's open
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadPopupContext.Provider value={{ open }}>
      {children}
      <PopupForm isOpen={isOpen} onClose={close} source={source} />
    </LeadPopupContext.Provider>
  );
}

export function useLeadPopup() {
  const ctx = useContext(LeadPopupContext);
  if (!ctx) throw new Error("useLeadPopup must be used inside <LeadPopupProvider>");
  return ctx;
}

const VARIANTS = {
  // navy gradient, for light sections
  primary:
    "text-white bg-gradient-to-br from-[var(--color3)] to-[var(--color1)] shadow-[0_18px_38px_-16px_rgba(1,28,64,0.7)] hover:shadow-[0_22px_44px_-14px_rgba(1,28,64,0.8)] focus-visible:outline-[var(--color3)]",
  // cyan, for dark sections
  bright:
    "text-[var(--color1)] bg-[var(--color5)] shadow-[0_18px_40px_-18px_rgba(167,235,242,0.6)] hover:bg-white focus-visible:outline-white",
  // quiet outline, for light sections
  soft:
    "text-[var(--color1)] bg-white/80 backdrop-blur ring-1 ring-[var(--color3)]/20 shadow-[0_10px_24px_-16px_rgba(1,28,64,0.45)] hover:ring-[var(--color3)]/40 focus-visible:outline-[var(--color3)]",
} as const;

/** Button that opens the site lead popup. */
export function LeadButton({
  children,
  source,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  source: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const { open } = useLeadPopup();
  return (
    <button
      type="button"
      onClick={() => open(source)}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[0.95rem] font-semibold cursor-pointer
        transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5
        focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
