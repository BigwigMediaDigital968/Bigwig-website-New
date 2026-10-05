"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, maskUp, stagger } from "../ui";

const MOTTO = "“We create super-rich experiences online!”";

export default function Motto() {
  return (
    <section className="pt-24 md:pt-32">
      <motion.div {...inView} variants={stagger(0.07)} className="wrap">
        <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
          We live by our motto
        </motion.p>
        <p className="mt-5 max-w-6xl text-[clamp(2.4rem,6.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          <span className="sr-only">{MOTTO}</span>
          {MOTTO.split(" ").map((word, i) => (
            <span key={i} aria-hidden className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
              <motion.span variants={maskUp} className="inline-block">
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
