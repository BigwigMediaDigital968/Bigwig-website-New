"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  EMAIL,
  DUBAI_PHONE_DISPLAY as PHONE_DISPLAY,
  DUBAI_PHONE_HREF as PHONE_HREF,
  PillLead,
  WhatsAppPill,
  fadeUp,
  focusRing,
  inView,
  maskUp,
  scaleIn,
  stagger,
} from "../ui";
import { DUBAI_WHATSAPP_HREF } from "./DubaiHero";

/* ---------- map projection ---------- */

// Simple equirectangular projection of the Dubai coast; the view is framed so Business Bay sits dead centre.
const proj = (lon: number, lat: number): [number, number] => [(lon - 55.02) * 2100, (25.3 - lat) * 2310];
const VIEW = { x: 114, y: -44, w: 800, h: 620 };
const line = (pts: [number, number][]) =>
  pts
    .map(
      ([lon, lat], i) =>
        `${i ? "L" : "M"}${proj(lon, lat)
          .map((n) => n.toFixed(1))
          .join(" ")}`,
    )
    .join(" ");
/** Position of a point as a percentage of the map box, for HTML pins laid over the SVG. */
const pct = (lon: number, lat: number) => {
  const [x, y] = proj(lon, lat);
  return { left: `${((x - VIEW.x) / VIEW.w) * 100}%`, top: `${((y - VIEW.y) / VIEW.h) * 100}%` };
};

const COAST: [number, number][] = [
  [55.0, 25.0],
  [55.05, 25.03],
  [55.1, 25.065],
  [55.135, 25.09],
  [55.17, 25.115],
  [55.185, 25.14],
  [55.21, 25.16],
  [55.25, 25.2],
  [55.26, 25.225],
  [55.275, 25.26],
  [55.295, 25.27],
  [55.32, 25.285],
  [55.36, 25.3],
  [55.42, 25.34],
  [55.47, 25.37],
];
const LAND = `${line(COAST)} L945 700 L-42 700 Z`;

const CREEK = line([
  [55.297, 25.268],
  [55.315, 25.245],
  [55.33, 25.22],
  [55.34, 25.195],
  [55.345, 25.18],
]);
// Dubai Water Canal: Ras Al Khor through Business Bay out to the Jumeirah coast
const CANAL = line([
  [55.345, 25.18],
  [55.31, 25.183],
  [55.29, 25.185],
  [55.27, 25.188],
  [55.255, 25.196],
  [55.243, 25.206],
]);
const SHEIKH_ZAYED = line([
  [55.03, 25.0],
  [55.12, 25.065],
  [55.17, 25.1],
  [55.21, 25.135],
  [55.26, 25.18],
  [55.28, 25.215],
  [55.29, 25.235],
  [55.3, 25.25],
]);
const AL_KHAIL = line([
  [55.06, 24.99],
  [55.15, 25.05],
  [55.2, 25.09],
  [55.25, 25.13],
  [55.3, 25.17],
  [55.33, 25.2],
]);

// Palm Jumeirah, drawn in its own frame: trunk along +y towards the shore, rotated into place at Atlantis
const [palmX, palmY] = proj(55.127, 25.123);
const PALM_FRONDS = [6, 14, 22, 30, 38, 46, 54];

// The World islands, a loose oval cluster off Jumeirah
const [worldX, worldY] = proj(55.185, 25.222);
const WORLD = Array.from({ length: 26 }, (_, i) => {
  const a = i * 2.399; // golden angle keeps the scatter even
  const r = Math.sqrt(i / 26);
  return { cx: worldX + Math.cos(a) * r * 34, cy: worldY + Math.sin(a) * r * 22, r: 2.2 + ((i * 7) % 3) * 0.6 };
});

const PINS = [
  { name: "Business Bay", at: pct(55.265, 25.185), primary: true, side: "right" as const },
  { name: "DIFC", at: pct(55.28, 25.212), side: "left" as const },
  { name: "Dubai Internet City", at: pct(55.155, 25.095), side: "right" as const },
];

function DubaiMap() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`} className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <clipPath id={`land-${id}`}>
          <path d={LAND} />
        </clipPath>
        <pattern id={`grid-${id}`} width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(-48)">
          <path d="M0 0 H18 M0 0 V18" stroke="#011c40" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>

      {/* sea */}
      <rect x={VIEW.x} y={VIEW.y} width={VIEW.w} height={VIEW.h} fill="#cfe8ee" />
      <text x="250" y="70" className="serif" fontSize="30" fontStyle="italic" fill="#011c40" fillOpacity="0.35">
        Arabian Gulf
      </text>

      {/* land with a faint street grid */}
      <path d={LAND} fill="#ffffff" stroke="#011c40" strokeOpacity="0.18" strokeWidth="1.5" />
      <rect
        x={VIEW.x}
        y={VIEW.y}
        width={VIEW.w}
        height={VIEW.h}
        fill={`url(#grid-${id})`}
        clipPath={`url(#land-${id})`}
      />

      {/* creek and canal */}
      <path d={CREEK} fill="none" stroke="#cfe8ee" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d={CANAL} fill="none" stroke="#cfe8ee" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

      {/* main roads */}
      <path d={AL_KHAIL} fill="none" stroke="#011c40" strokeOpacity="0.14" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d={SHEIKH_ZAYED}
        fill="none"
        stroke="#54acbf"
        strokeOpacity="0.7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* islands */}
      <g transform={`translate(${palmX} ${palmY}) rotate(-48.7)`} fill="none" stroke="#ffffff" strokeLinecap="round">
        <path d="M0 -6 V68" strokeWidth="7" />
        {PALM_FRONDS.map((y) => (
          <path key={y} d={`M-3 ${y} L-27 ${y - 6} M3 ${y} L27 ${y - 6}`} strokeWidth="3.5" />
        ))}
        <path d="M-42 52 A48 48 0 1 1 42 52" strokeWidth="5" />
      </g>
      <g fill="#ffffff">
        {WORLD.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
        ))}
      </g>
    </svg>
  );
}

function Pin({ name, at, primary = false, side }: (typeof PINS)[number] & { primary?: boolean }) {
  return (
    <motion.li variants={scaleIn} className="absolute" style={at}>
      {/* the dot sits exactly on the coordinate; the label hangs to one side */}
      <span className="absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2">
        {primary && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-[var(--teal)] opacity-60 motion-reduce:animate-none"
          />
        )}
        <span
          className={`relative block rounded-full ring-4 ring-white ${primary ? "h-4 w-4 bg-[var(--ink)]" : "h-3 w-3 bg-[var(--link)]"}`}
        />
      </span>
      <span
        className={`absolute top-0 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold shadow-[0_8px_20px_-10px_rgba(1,28,64,0.5)] sm:text-sm ${
          side === "right" ? "left-4" : "right-4"
        } ${primary ? "bg-[var(--ink)] text-white" : "bg-white text-[var(--ink)]"}`}
      >
        {name}
      </span>
    </motion.li>
  );
}

/** Where we work in Dubai: contact details beside a map cutout with pins on the main business districts. */
export default function DubaiLocation() {
  return (
    <section aria-labelledby="dubai-location" className="pt-24 md:pt-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <motion.div {...inView} variants={stagger(0.1)} className="min-w-0 lg:col-span-5">
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Where we work in Dubai
          </motion.p>
          <h2 id="dubai-location" className="h-section mt-3">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Close to Dubai’s business hubs.
              </motion.span>
            </span>
          </h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            Our UAE team works with brands across the city, from Dubai Internet City and the Marina to Business Bay and
            DIFC. Call, email or message us to set up a meeting.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 space-y-3">
            <li>
              <a
                href={PHONE_HREF}
                className={`inline-flex items-center gap-3 rounded-sm text-lg font-medium hover:text-[var(--link)] ${focusRing}`}
              >
                <Phone className="h-5 w-5 text-[var(--link)]" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className={`inline-flex items-center gap-3 break-all rounded-sm text-lg font-medium hover:text-[var(--link)] ${focusRing}`}
              >
                <Mail className="h-5 w-5 flex-none text-[var(--link)]" aria-hidden />
                {EMAIL}
              </a>
            </li>
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PillLead source="dubai-location">Book a meeting</PillLead>
            <WhatsAppPill href={DUBAI_WHATSAPP_HREF} />
          </motion.div>
        </motion.div>

        <motion.figure
          {...inView}
          variants={fadeUp}
          aria-label="Map of Dubai with Business Bay, DIFC and Dubai Internet City marked"
          className="lg:col-span-7"
        >
          <div className="relative aspect-[800/620] overflow-hidden rounded-[28px] bg-[#cfe8ee] shadow-[0_40px_80px_-40px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)]">
            <DubaiMap />
            <motion.ul {...inView} variants={stagger(0.12, 0.3)} className="absolute inset-0">
              {PINS.map((p) => (
                <Pin key={p.name} {...p} />
              ))}
            </motion.ul>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
