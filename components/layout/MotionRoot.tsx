"use client";

import { LazyMotion, MotionConfig } from "framer-motion";

/**
 * Honours the visitor's reduced-motion setting for every animation on the page, and loads framer-motion's
 * animation features in a separate chunk (components use the lightweight `m` component, imported as `motion`).
 */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={() => import("./motionFeatures").then((mod) => mod.default)}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
