// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import tableImg from "../../Assets/map-lying-wooden-table.jpg";
// import { EASE, fadeUp, maskUp, stagger } from "../ui";

// const facts = [
//   { value: "8+", label: "Years" },
//   { value: "50+", label: "Experts" },
//   { value: "500+", label: "Clients" },
//   { value: "360°", label: "Digital marketing" },
// ];

// export default function AboutHero() {
//   const imageRef = useRef<HTMLDivElement>(null);
//   // Image drifts slightly slower than the page while it's on screen
//   const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
//   const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

//   return (
//     <section className="pb-20 pt-14 md:pb-28 md:pt-20">
//       <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.12, 0.3)}>
//         <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
//           About Bigwig Media Digital
//         </motion.p>
//         <h1 className="mt-4 text-[clamp(3.25rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
//           <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
//             <motion.span variants={maskUp} className="block">
//               Who we are
//             </motion.span>
//           </span>
//         </h1>

//         <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:items-end">
//           <motion.p variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-[var(--muted)] lg:col-span-5">
//             A 360° digital marketing agency in New Delhi, India. Google & Meta Partner.
//           </motion.p>
//           <motion.dl variants={stagger(0.08)} className="grid grid-cols-2 border-t border-[var(--line)] sm:grid-cols-4 lg:col-span-7">
//             {facts.map((f, i) => (
//               <motion.div
//                 key={f.label}
//                 variants={fadeUp}
//                 className={`flex flex-col pt-5 pr-4 ${i > 0 ? "sm:border-l sm:border-[var(--line)] sm:pl-5" : ""} ${i % 2 === 1 ? "border-l border-[var(--line)] pl-5" : ""}`}
//               >
//                 <dt className="text-sm text-[var(--muted)]">{f.label}</dt>
//                 <dd className="serif order-first text-5xl leading-none md:text-6xl">{f.value}</dd>
//               </motion.div>
//             ))}
//           </motion.dl>
//         </div>
//       </motion.div>

//       <div className="mt-14 px-2 md:mt-20 md:px-3">
//         <motion.div
//           ref={imageRef}
//           className="relative mx-auto aspect-[4/3] max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)] md:aspect-[21/9]"
//           initial={{ clipPath: "inset(18% 8% 18% 8% round 32px)" }}
//           animate={{ clipPath: "inset(0% 0% 0% 0% round 32px)" }}
//           transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
//         >
//           <motion.div className="absolute inset-[-10%_0]" style={{ y: imageY }}>
//             <Image
//               src={tableImg}
//               alt="The Bigwig team planning a digital marketing strategy"
//               fill
//               priority
//               sizes="100vw"
//               placeholder="blur"
//               className="object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import tableImg from "../../Assets/map-lying-wooden-table.jpg";
import { EASE, PillLead, PillLink, fadeUp, maskUp, stagger } from "../ui";

const facts = [
  { value: "8+", label: "Years" },
  // { value: "50+", label: "Experts" },
  // { value: "500+", label: "Clients" },
  { value: "360°", label: "Digital marketing" },
];

export default function AboutHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  // Image drifts slightly slower than the page while it's on screen
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="wrap  pb-20 pt-14 md:pb-28 md:pt-20 grid gap-10 lg:grid-cols-2">
      <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.12, 0.3)}>
        <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
          About Bigwig Media Digital
        </motion.p>
        <h1 className="mt-4 text-[clamp(2.25rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
            <motion.span variants={maskUp} className="block">
              Who we are
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 md:mt-14 lg:items-end">
          <motion.p variants={fadeUp} className="max-w-xl text-lg leading-relaxed text-[var(--muted)] lg:col-span-5">
            A 360° digital marketing agency in New Delhi, India. Google & Meta Partner.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillLead source="about-hero">Get a free strategy session</PillLead>
            <PillLink href="/our-works">View our work</PillLink>
          </motion.div>
          <motion.dl variants={stagger(0.08)} className="mt-10 md:mt-14 grid grid-cols-2 border-t border-[var(--line)] lg:col-span-7">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className={`flex flex-col pt-5 pr-4 ${i > 0 ? "sm:border-l sm:border-[var(--line)] sm:pl-5" : ""} ${i % 2 === 1 ? "border-l border-[var(--line)] pl-5" : ""}`}
              >
                <dt className="text-sm text-[var(--muted)]">{f.label}</dt>
                <dd className="serif order-first text-5xl leading-none md:text-6xl">{f.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      <div className="px-2 md:px-3">
        <motion.div
          ref={imageRef}
          className="relative mx-auto aspect-[4/3] max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--ink)]"
          initial={{ clipPath: "inset(18% 8% 18% 8% round 32px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 32px)" }}
          transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
        >
          <motion.div className="absolute inset-[-10%_0]" style={{ y: imageY }}>
            <Image
              src={tableImg}
              alt="The Bigwig team planning a digital marketing strategy"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
