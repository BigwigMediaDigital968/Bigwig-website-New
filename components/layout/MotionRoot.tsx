"use client";

import { MotionConfig } from "framer-motion";

/** Honours the visitor's reduced-motion setting for every animation on the page. */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
