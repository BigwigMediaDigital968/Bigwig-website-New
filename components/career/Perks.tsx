"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { SectionHead, fadeUp, inView, stagger } from "../ui";

const perks = [
  { title: "Professional Growth", desc: "Real-world learning on live brands and campaigns.", Icon: Star },
  { title: "Skill Enhancement", desc: "Tools and mentorship to sharpen your craft.", Icon: Users },
  { title: "Creative Freedom", desc: "Your ideas matter, and they get heard.", Icon: Sparkles },
  { title: "Precision Execution", desc: "Ship work that makes an impact.", Icon: Rocket },
  { title: "Fair Compensation", desc: "Pay that reflects the value of your talent.", Icon: TrendingUp },
];

export default function Perks() {
  return (
    <section className="px-2 md:px-3">
      <div className="mx-auto max-w-[1600px] rounded-[32px] bg-[var(--ink)] py-20 text-white md:py-28">
        <div className="wrap">
          <SectionHead dark lead="Why work with us" title="A few reasons people love working here." />

          <motion.ul
            {...inView}
            variants={stagger(0.08, 0.15)}
            className="mt-14 grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-5"
          >
            {perks.map(({ title, desc, Icon }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="group flex min-h-[220px] flex-col gap-10 bg-[var(--ink)] p-7 transition-colors duration-300 hover:bg-[var(--ink-2)] md:p-8"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:-rotate-12"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
