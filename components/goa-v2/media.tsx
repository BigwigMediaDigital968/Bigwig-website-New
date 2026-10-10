"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE_IN_OUT } from "../ui";
import type { Photo } from "./content";

/**
 * A photo that drifts against the scroll inside its frame: the image is taller than the frame (by `travel`
 * on each side) and moves from +travel to -travel while the frame crosses the screen. Static for reduced
 * motion. The frame is whatever box wraps it; give that box a size and `overflow-hidden`.
 */
export function ParallaxPhoto({
  photo,
  sizes,
  travel = 10,
  priority = false,
  className = "",
}: {
  photo: Photo;
  sizes: string;
  /** percent of the frame's height the photo moves each way */
  travel?: number;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${travel}%`, `-${travel}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={{ top: `-${travel}%`, bottom: `-${travel}%`, y: reduce ? 0 : y }}
      >
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} unoptimized className="object-cover" />
      </motion.div>
    </div>
  );
}

/**
 * Reveals its child (usually a photo frame) with an upward wipe the first time it scrolls into view. Opacity
 * only for reduced motion.
 */
export function WipeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, delay, ease: EASE_IN_OUT }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- the form, reachable from anywhere on the page ---------- */

type PlanContextValue = {
  kind: string;
  setKind: (k: string) => void;
  /** scroll to the form, optionally choosing "what do you run" first */
  toForm: (kind?: string) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [kind, setKind] = useState("");
  const toForm = useCallback((k?: string) => {
    if (k) setKind(k);
    const el = document.getElementById("plan");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);
  const value = useMemo(() => ({ kind, setKind, toForm }), [kind, toForm]);
  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}
