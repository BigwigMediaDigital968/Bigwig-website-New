"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Phone, X } from "lucide-react";
import EnquiryForm from "./contact/EnquiryForm";
import { EASE_OUT, PHONE_DISPLAY, PHONE_HREF, WhatsAppPill, focusRing } from "./ui";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  /** Which CTA opened the popup, for analytics */
  source?: string;
}

/** White fields with the brand-blue outline inside the card (as in DubaiHero), without touching the shared form. */
const blueFields = {
  "--paper": "#f7fafc",
  "--line": "rgba(38, 101, 140, 0.45)",
  "--line-strong": "#26658c",
} as React.CSSProperties;

const promises = [
  "A reply within one working day",
  "A free plan for your business",
  "No lock-in, no obligation",
];

/**
 * The site-wide lead popup, in the site's own look: a navy panel with what happens next (desktop only) beside the
 * standard enquiry form, so its leads reach the lead system in the same shape as every other form. Escape, the
 * close button and a click outside all close it; focus moves into the form on open and back to the page on close.
 */
export default function PopupForm({ isOpen, onClose, source = "popup" }: PopupFormProps) {
  const reduce = useReducedMotion();
  const titleId = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    returnTo.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // keep Tab inside the dialog
      if (e.key === "Tab" && cardRef.current) {
        const items = cardRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // after the entrance starts, put the cursor in the first field
    const t = window.setTimeout(() => cardRef.current?.querySelector<HTMLElement>("input")?.focus({ preventScroll: true }), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      document.body.style.overflow = "";
      returnTo.current?.focus?.({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lead-popup"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[rgba(1,28,64,0.55)] backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="relative grid max-h-[92svh] w-full max-w-4xl overflow-hidden rounded-t-[28px] bg-[var(--surface)] text-[var(--ink)] shadow-[0_40px_100px_-30px_rgba(1,28,64,0.6)] sm:rounded-[28px] md:grid-cols-12"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className={`absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white ${focusRing}`}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            {/* left: what happens next (desktop) */}
            <div className="relative isolate hidden flex-col justify-between gap-10 bg-[var(--ink)] p-8 text-white md:col-span-5 md:flex">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgba(84,172,191,0.35),transparent_70%)]"
              />
              <div>
                <p className="h-section max-w-[12ch] text-[2.1rem]">Let’s grow your business.</p>
                <ul className="mt-7 space-y-3">
                  {promises.map((p) => (
                    <li key={p} className="flex items-start gap-3 leading-snug text-white/85">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <WhatsAppPill dark />
                <a href={PHONE_HREF} className={`flex w-fit items-center gap-2 rounded-sm text-sm font-semibold hover:underline ${focusRing}`}>
                  <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* right: the form (scrolls inside the card on short screens) */}
            <div style={blueFields} className="overflow-y-auto p-6 pt-7 sm:p-8 md:col-span-7">
              <p className="text-sm font-medium text-[var(--link)]">Send us a message</p>
              <h2 id={titleId} className="mt-1 pr-12 text-2xl font-semibold leading-tight tracking-tight">
                Get a free consultation
              </h2>
              <div className="mt-5">
                <EnquiryForm source={source} compact />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
