"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../ui";
import PlanButton from "./PlanButton";
import { usePlanner } from "./Planner";

/**
 * Desktop floating bar that keeps the one goal in reach. It only shows while the hero and both planner copies are off screen,
 * and once someone has started it reports how far they got. Phones already have the site-wide dock.
 */
export default function PlanBar() {
  const { state } = usePlanner();
  const reduce = useReducedMotion();
  const [plannerVisible, setPlannerVisible] = useState(true);

  useEffect(() => {
    // the hero has its own CTA, so it counts as "in view" too
    const copies = Array.from(
      document.querySelectorAll("[data-planner], #hero"),
    );
    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting ? seen.add(e.target) : seen.delete(e.target),
        );
        setPlannerVisible(seen.size > 0);
      },
      { threshold: 0.1 },
    );
    copies.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const started = state.step > 0;
  const show = !plannerVisible && !state.done;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, transform: "translate(-50%, 24px)" }
          }
          animate={{ opacity: 1, transform: "translate(-50%, 0px)" }}
          exit={
            reduce
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  transform: "translate(-50%, 16px)",
                  transition: { duration: 0.18, ease: EASE_OUT },
                }
          }
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="fixed bottom-6 left-1/2 z-40 hidden lg:block"
        >
          <div className="flex items-center gap-4 rounded-full bg-white/85 p-1.5 pl-6 shadow-[0_24px_60px_-24px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] backdrop-blur-xl">
            <p className="whitespace-nowrap text-sm text-[var(--muted)]">
              {started ? (
                <>
                  Your growth plan:{" "}
                  <span className="font-semibold text-[var(--ink)]">
                    step {state.step + 1} of 4
                  </span>
                </>
              ) : (
                "Free growth plan for your business"
              )}
            </p>
            <PlanButton source="plan-bar">
              {started ? "Continue" : "Start my plan"}
            </PlanButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
