"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import tabletImg from "../../Assets/1759473431835.jpg";
import { EASE, PillLink, fadeUp, inView, maskUp, stagger, wipeUp } from "../ui";

const stats = [
  { value: "5+", unit: "Years", label: "Industry Experience" },
  { value: "25+", unit: "Industries", label: "We’ve Worked Across" },
];

export default function WhoWeAre() {
  return (
    <section className="px-2 md:px-3">
      <div className="rounded-[32px] bg-[var(--surface)] py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div {...inView} variants={wipeUp} className="relative overflow-hidden rounded-[24px] lg:col-span-5">
            <motion.div variants={{ hidden: { scale: 1.2 }, show: { scale: 1, transition: { duration: 1.4, ease: EASE } } }}>
              <Image
                src={tabletImg}
                alt="Digital marketing channels: SEO, ads, email, video and social"
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5]"
              />
            </motion.div>
          </motion.div>

          <motion.div {...inView} variants={stagger(0.1, 0.15)} className="lg:col-span-7">
            <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
              Who we are
            </motion.p>
            <h2 className="h-section mt-3">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  A team built to power brands digitally.
                </motion.span>
              </span>
            </h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-[62ch] text-lg leading-relaxed text-[var(--muted)]">
              We are a team of curious minds and problem-solvers who blend creativity with precision.
              As a 360° digital marketing agency, our mission is simple, to power brands with smart,
              scalable digital strategies that help them rise, compete, and lead. Whether you’re an
              emerging startup or an established enterprise, we build digital journeys that attract,
              engage, and convert.
            </motion.p>

            <dl className="mt-10 grid grid-cols-2 border-t border-[var(--line)]">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className={`flex flex-col pt-6 pr-4 ${i === 1 ? "border-l border-[var(--line)] pl-6" : ""}`}
                >
                  <dt className="text-sm text-[var(--muted)]">{s.label}</dt>
                  <dd className="order-first mb-2 flex flex-wrap items-baseline gap-x-2">
                    <span className="serif text-5xl leading-none sm:text-6xl md:text-7xl">{s.value}</span>
                    <span className="text-lg font-semibold">{s.unit}</span>
                  </dd>
                </motion.div>
              ))}
            </dl>
            <motion.div variants={fadeUp} className="mt-10">
              <PillLink href="/services" tone="ink">
                Explore our services
              </PillLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
