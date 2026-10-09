/**
 * Line-art Dubai landmarks used as faint watermarks behind light sections. Strokes use currentColor
 * and don't scale with the drawing, so set colour and opacity on the wrapper. All are decorative.
 */

type Props = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke",
} as const;

// Burj Khalifa: half-widths of each setback from the spire down, mirrored around x = 60
const TIERS: [number, number][] = [
  [1, 0],
  [2.5, 70],
  [5, 130],
  [8, 180],
  [12, 235],
  [16, 290],
  [21, 345],
  [26, 400],
  [32, 455],
  [39, 510],
  [46, 560],
  [52, 600],
];
// down the right side: drop to the next setback, then step out; back up the left as its mirror
const steps = TIERS.slice(1).map(([hw, y], i) => ({ prev: TIERS[i][0], hw, y, prevY: TIERS[i][1] }));
const right = steps.map((s) => `L${60 + s.prev} ${s.y} L${60 + s.hw} ${s.y}`).join(" ");
const left = [...steps]
  .reverse()
  .map((s) => `L${60 - s.hw} ${s.y} L${60 - s.prev} ${s.y} L${60 - s.prev} ${s.prevY}`)
  .join(" ");
const BURJ_PATH = `M${60 + TIERS[0][0]} 0 ${right} ${left} Z`;

export function BurjKhalifaLine({ className = "" }: Props) {
  return (
    <svg viewBox="-2 -2 124 606" aria-hidden className={className}>
      <path d={BURJ_PATH} {...stroke} />
      {/* the three wings read as a centre seam and two flanking seams */}
      <path d="M60 70 V600 M48 300 V600 M72 300 V600" {...stroke} opacity={0.6} />
    </svg>
  );
}

export function DubaiFrameLine({ className = "" }: Props) {
  const rungs = Array.from({ length: 9 }, (_, i) => 100 + i * 30);
  return (
    <svg viewBox="0 0 300 400" aria-hidden className={className}>
      <path d="M40 20 H260 V380 H40 Z" {...stroke} />
      <path d="M85 75 H215 V380 M85 380 V75" {...stroke} />
      {/* bridge glazing across the top */}
      <path d="M40 48 H260" {...stroke} opacity={0.6} />
      {/* lattice on both legs */}
      {rungs.map((y) => (
        <path key={y} d={`M40 ${y} H85 M215 ${y} H260`} {...stroke} opacity={0.5} />
      ))}
      <path d="M10 380 H290" {...stroke} />
    </svg>
  );
}

export function MuseumOfTheFutureLine({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 420 320" aria-hidden className={className}>
      {/* torus and its off-centre void */}
      <ellipse cx="210" cy="145" rx="180" ry="120" {...stroke} />
      <ellipse cx="226" cy="140" rx="98" ry="52" {...stroke} />
      {/* calligraphy-like bands wrapping the shell */}
      <path d="M58 95 q22 -14 44 0 t44 0 t44 -6" {...stroke} opacity={0.55} />
      <path d="M42 150 q18 12 36 0 t36 0" {...stroke} opacity={0.55} />
      <path d="M60 205 q24 14 48 0 t48 4 t48 -2" {...stroke} opacity={0.55} />
      <path d="M300 230 q16 -10 32 0 t30 -8" {...stroke} opacity={0.55} />
      <path d="M318 70 q14 10 28 0 t26 6" {...stroke} opacity={0.55} />
      {/* podium */}
      <path d="M95 252 L70 300 H350 L325 252" {...stroke} />
      <path d="M30 300 H390" {...stroke} />
    </svg>
  );
}

export function PalmJumeirahLine({ className = "" }: Props) {
  const fronds = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg viewBox="0 0 400 420" aria-hidden className={className}>
      {/* crescent breakwater */}
      <path d="M48 330 A165 190 0 1 1 352 330" {...stroke} />
      <path d="M62 326 A150 175 0 1 1 338 326" {...stroke} opacity={0.6} />
      {/* trunk out from the shore */}
      <path d="M194 410 V112 M206 410 V112" {...stroke} />
      <circle cx="200" cy="100" r="16" {...stroke} />
      {/* fronds, curving up and out on both sides */}
      {fronds.map((i) => {
        const y = 140 + i * 26;
        const len = 92 + Math.sin(((i + 1) / 9) * Math.PI) * 40;
        return (
          <path
            key={i}
            d={`M194 ${y} Q${194 - len * 0.6} ${y - 4} ${194 - len} ${y - 22} M206 ${y} Q${206 + len * 0.6} ${y - 4} ${206 + len} ${y - 22}`}
            {...stroke}
          />
        );
      })}
    </svg>
  );
}
