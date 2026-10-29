"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /** Scale while hovered */
  hoverScale?: number;
  /** Show a moving glare highlight */
  glare?: boolean;
  /** Corner radius of the glare layer, match the card */
  radius?: string;
};

/**
 * Wraps a card in a perspective container and tilts it toward the cursor.
 * Mouse only: touch devices and reduced-motion users get the plain card.
 */
export default function TiltCard({
  children,
  className = "",
  max = 7,
  hoverScale = 1.015,
  glare = true,
  radius = "1rem",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 22 });
  const scale = useSpring(useMotionValue(1), { stiffness: 220, damping: 22 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glareBg = useMotionTemplate`radial-gradient(500px circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * max);
    rx.set(-(py - 0.5) * 2 * max);
    gx.set(px * 100);
    gy.set(py * 100);
    scale.set(hoverScale);
    glareOpacity.set(1);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    scale.set(1);
    glareOpacity.set(0);
  };

  return (
    <div className={`[perspective:1200px] ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={
          reduce
            ? undefined
            : { rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d" }
        }
        className="relative h-full will-change-transform"
      >
        {children}
        {glare && !reduce && (
          <motion.div
            aria-hidden
            style={{ background: glareBg, opacity: glareOpacity, borderRadius: radius }}
            className="pointer-events-none absolute inset-0 z-30 mix-blend-soft-light"
          />
        )}
      </motion.div>
    </div>
  );
}
