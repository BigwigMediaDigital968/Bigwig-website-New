import { useId } from "react";

/**
 * The page's two Goan motifs, drawn in SVG so they stay crisp and light:
 * - Carepa: the diamond lattice of Goa's oyster-shell windows (common in Bardez, where our Mapusa office is),
 *   used as the fanlight of an arched window.
 * - Azulejo: a simple blue-and-white tile, repeated as a border.
 */

/** Diamond lattice with pearly panes. Fills its box; `line` is the lattice colour. */
export function CarepaLattice({ className = "", line = "rgba(217,164,65,0.55)" }: { className?: string; line?: string }) {
  const id = useId();
  return (
    <svg aria-hidden className={className} width="100%" height="100%">
      <defs>
        <pattern id={`${id}-p`} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          {/* a pane: shell-white, slightly translucent, inside a thin wooden bar */}
          <rect width="22" height="22" fill="rgba(255,255,255,0.16)" />
          <path d="M0 0H22M0 0V22" stroke={line} strokeWidth="2.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-p)`} />
    </svg>
  );
}

/**
 * An Indo-Portuguese arched window: a photo seen through it, a carepa fanlight in the arch, a transom bar and
 * a painted frame. `children` sit inside the frame over the photo (e.g. a caption).
 */
export function ArchWindow({
  children,
  aspect = 0.8,
  shutters = true,
  className = "",
  frame = "var(--ink)",
}: {
  children: React.ReactNode;
  /** width ÷ height */
  aspect?: number;
  /** draw the centre bar below the fanlight */
  shutters?: boolean;
  className?: string;
  frame?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-[999px] p-[10px] ${className}`}
      style={{ background: frame, aspectRatio: aspect }}
    >
      <div className="relative h-full overflow-hidden rounded-t-[999px] bg-[var(--paper)]">
        {children}
        {/* fanlight: the half-circle at the top of the arch (its height is half the width) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[2/1] overflow-hidden rounded-t-[999px]">
          <CarepaLattice className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-x-0 bottom-0 h-[10px]" style={{ background: frame }} />
        </div>
        {/* a centre bar below the fanlight, like a pair of shutters; the fanlight ends at half the width */}
        {shutters && (
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 w-[8px] -translate-x-1/2"
            style={{ background: frame, top: `${aspect * 50}%` }}
          />
        )}
      </div>
    </div>
  );
}

/**
 * The view through the hero's window, drawn rather than photographed: a Goan dusk over the sea, a laterite
 * headland with a small whitewashed chapel, and the sun's path on the water. Fills its box (cropped, not
 * stretched).
 */
export function GoaView({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7ead0" />
          <stop offset="0.55" stopColor="#f2cf96" />
          <stop offset="1" stopColor="#e9a877" />
        </linearGradient>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a5aa3" />
          <stop offset="1" stopColor="#0b2340" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6e2" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff6e2" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="340" fill={`url(#${id}-sky)`} />
      {/* sun, low over the water */}
      <circle cx="262" cy="300" r="70" fill={`url(#${id}-glow)`} />
      <circle cx="262" cy="304" r="26" fill="#fff4dc" />
      {/* far coast */}
      <path d="M200 334 C 260 326, 330 328, 400 322 L400 340 L200 340 Z" fill="#7d6a74" opacity="0.45" />
      {/* laterite headland */}
      <path d="M0 262 C 40 250, 78 252, 112 268 C 146 284, 176 312, 214 334 L214 340 L0 340 Z" fill="#7a3a2a" />
      <path d="M0 290 C 50 284, 110 300, 170 330 L170 340 L0 340 Z" fill="#5c2b20" />
      {/* whitewashed chapel: nave, pediment, bell tower and a cross */}
      <g fill="#fbfaf7">
        <rect x="54" y="232" width="34" height="24" />
        <path d="M52 233 L71 220 L90 233 Z" />
        <rect x="88" y="222" width="12" height="34" />
        <rect x="93.2" y="212" width="1.6" height="10" />
        <rect x="90" y="215.2" width="8" height="1.6" />
      </g>
      <rect x="67" y="243" width="8" height="13" rx="4" fill="#7a3a2a" opacity="0.55" />
      {/* the sea, with the sun's path on it */}
      <rect y="338" width="400" height="162" fill={`url(#${id}-sea)`} />
      <g fill="#ffe9c2">
        <rect x="236" y="346" width="52" height="2" rx="1" opacity="0.8" />
        <rect x="244" y="356" width="38" height="2" rx="1" opacity="0.6" />
        <rect x="230" y="368" width="58" height="2" rx="1" opacity="0.45" />
        <rect x="248" y="382" width="30" height="2" rx="1" opacity="0.35" />
        <rect x="238" y="398" width="46" height="2" rx="1" opacity="0.25" />
        <rect x="252" y="416" width="22" height="2" rx="1" opacity="0.18" />
      </g>
      <g fill="#ffffff" opacity="0.12">
        <rect x="40" y="380" width="70" height="1.5" rx="0.75" />
        <rect x="120" y="430" width="90" height="1.5" rx="0.75" />
        <rect x="300" y="452" width="60" height="1.5" rx="0.75" />
      </g>
    </svg>
  );
}

/** One azulejo tile: a four-petal flower in a square, quartered at the edges so tiles join into a pattern. */
export function AzulejoBorder({ className = "", ink = "#1D4E9E" }: { className?: string; ink?: string }) {
  const id = useId();
  return (
    <svg aria-hidden className={className} width="100%" height="100%" preserveAspectRatio="none">
      <defs>
        <pattern id={`${id}-t`} width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#ffffff" />
          <g fill="none" stroke={ink} strokeWidth="1.6">
            {/* petals */}
            <path d="M20 8c4 5 4 7 0 12c-4-5-4-7 0-12z" fill={ink} fillOpacity="0.85" />
            <path d="M20 32c4-5 4-7 0-12c-4 5-4 7 0 12z" fill={ink} fillOpacity="0.85" />
            <path d="M8 20c5-4 7-4 12 0c-5 4-7 4-12 0z" fill={ink} fillOpacity="0.85" />
            <path d="M32 20c-5-4-7-4-12 0c5 4 7 4 12 0z" fill={ink} fillOpacity="0.85" />
            {/* quarter circles at the corners join neighbouring tiles into rings */}
            <path d="M0 9A9 9 0 0 0 9 0M31 0A9 9 0 0 0 40 9M40 31A9 9 0 0 0 31 40M9 40A9 9 0 0 0 0 31" />
            <circle cx="20" cy="20" r="2.2" fill="#ffffff" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-t)`} />
    </svg>
  );
}
