"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useLeadPopup } from "../LeadPopup";

/* ---------- motion primitives ---------- */

export const EASE = [0.2, 0.7, 0.2, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
/** Strong ease-out for quick UI responses (matches --ease-out in brand.css). */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Spread onto a motion parent: plays its variants once when scrolled into view. */
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-10% 0px" },
} as const;

export const stagger = (each = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Image wipe: the frame opens upward from the bottom edge. */
export const wipeUp: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0% round 24px)" },
  show: { clipPath: "inset(0% 0% 0% 0% round 24px)", transition: { duration: 1.1, ease: EASE_IN_OUT } },
};

/** Text slides up from behind a mask. Use inside a parent that runs `inView`. */
export const maskUp: Variants = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE_IN_OUT } },
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Heading whose text rises out of a mask. Runs on its own when scrolled into view. */
export function MaskHeading({
  as = "h2",
  className = "",
  children,
}: {
  as?: "h2" | "p";
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = as === "h2" ? motion.h2 : motion.p;
  return (
    <Tag className={className} {...inView} variants={stagger()}>
      <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
        <motion.span className="block" variants={maskUp}>
          {children}
        </motion.span>
      </span>
    </Tag>
  );
}

export const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link)]";

// ink: on light sections. cyan: on dark sections. ghost / ghostDark: secondary actions.
const TONES = {
  ink: { btn: "bg-[var(--ink)] text-white hover:bg-[var(--ink-2)]", chip: "bg-[var(--cyan)] text-[var(--ink)]" },
  cyan: { btn: "bg-[var(--cyan)] text-[var(--ink)] hover:bg-white", chip: "bg-[var(--ink)] text-[var(--cyan)]" },
  ghost: { btn: "text-[var(--ink)] ring-1 ring-inset ring-[var(--line-strong)] hover:bg-white", chip: "" },
  ghostDark: {
    btn: "text-white ring-1 ring-inset ring-white/30 bg-white/5 backdrop-blur-md hover:bg-white/15",
    chip: "",
  },
} as const;

type Tone = keyof typeof TONES;

function classes(tone: Tone, className: string) {
  const hasChip = Boolean(TONES[tone].chip);
  return `group inline-flex h-12 items-center justify-center gap-3 rounded-full text-[0.95rem] font-semibold cursor-pointer
    transition-[color,background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.97]
    ${hasChip ? "pl-6 pr-1.5" : "px-6"} ${TONES[tone].btn} ${focusRing} ${className}`;
}

function Chip({ tone }: { tone: Tone }) {
  if (!TONES[tone].chip) return null;
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${TONES[tone].chip}`}
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

/** Pill button that opens the site lead popup. */
export function PillLead({
  source,
  tone = "ink",
  className = "",
  children,
}: {
  source: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useLeadPopup();
  return (
    <button type="button" onClick={() => open(source)} className={classes(tone, className)}>
      {children}
      <Chip tone={tone} />
    </button>
  );
}

/** Pill link. `external` opens in a new tab. */
export function PillLink({
  href,
  tone = "ghost",
  external = false,
  className = "",
  children,
}: {
  href: string;
  tone?: Tone;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes(tone, className)}>
        {children}
        <span className="sr-only">(opens in a new tab)</span>
        <Chip tone={tone} />
      </a>
    );
  }
  return (
    <Link href={href} className={classes(tone, className)}>
      {children}
      <Chip tone={tone} />
    </Link>
  );
}

/** Section intro: short lead-in line, heading, optional actions on the right. */
export function SectionHead({
  lead,
  title,
  actions,
  dark = false,
  className = "",
}: {
  lead: string;
  title: React.ReactNode;
  actions?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      {...inView}
      variants={stagger(0.1)}
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        <motion.p
          variants={fadeUp}
          className={`text-[0.95rem] font-medium ${dark ? "text-[var(--cyan)]" : "text-[var(--link)]"}`}
        >
          {lead}
        </motion.p>
        <h2 className="h-section mt-3">
          <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
            <motion.span className="block" variants={maskUp}>
              {title}
            </motion.span>
          </span>
        </h2>
      </div>
      {actions && (
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 md:flex-none">
          {actions}
        </motion.div>
      )}
    </motion.div>
  );
}

/** wa.me link to our number (India by default) with a pre-filled message. */
export const whatsappHref = (message: string, number = "919685892813") =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your services and would like to discuss more.",
);

const WHATSAPP_GREEN = "#25D366";

/**
 * Secondary pill for WhatsApp chats: outlined like `ghost`, with a WhatsApp-green chip carrying
 * the logo. The green stays on the chip (an ink glyph on it reads clearly) so the pill never
 * outweighs the primary CTA. `dark` for navy sections.
 */
export function WhatsAppPill({
  href = WHATSAPP_HREF,
  dark = false,
  className = "",
  children = "Chat on WhatsApp",
}: {
  href?: string;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex h-12 items-center justify-center gap-3 rounded-full pl-6 pr-1.5 text-[0.95rem] font-semibold cursor-pointer ring-1 ring-inset transition-[color,background-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.97] ${
        dark
          ? "bg-white/5 text-white ring-white/30 backdrop-blur-md hover:bg-[#25D366]/15 hover:ring-[#25D366]/70"
          : "text-[var(--ink)] ring-[var(--line-strong)] hover:bg-[#25D366]/10 hover:ring-[#25D366]"
      } ${focusRing} ${className}`}
    >
      {children}
      <span className="sr-only">(opens WhatsApp in a new tab)</span>
      <span
        aria-hidden
        style={{ backgroundColor: WHATSAPP_GREEN }}
        className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink)] transition-transform duration-300 group-hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-[1.15rem]" />
      </span>
    </a>
  );
}
export const PHONE_DISPLAY = "+91 96858 92813";
export const PHONE_HREF = "tel:+919685892813";
/** UAE number, used on the Dubai pages for calls and WhatsApp. */
export const DUBAI_PHONE_NUMBER = "971588486324";
export const DUBAI_PHONE_DISPLAY = "+971 58 848 6324";
export const DUBAI_PHONE_HREF = `tel:+${DUBAI_PHONE_NUMBER}`;
/** Call and WhatsApp links for site-wide UI: the UAE number on Dubai routes, India elsewhere. */
export const contactFor = (pathname: string | null) =>
  pathname?.includes("dubai")
    ? {
        phoneDisplay: DUBAI_PHONE_DISPLAY,
        phoneHref: DUBAI_PHONE_HREF,
        whatsapp: whatsappHref(
          "Hi BigWig Media Digital! I'm interested in your digital marketing services in Dubai, UAE.",
          DUBAI_PHONE_NUMBER,
        ),
      }
    : { phoneDisplay: PHONE_DISPLAY, phoneHref: PHONE_HREF, whatsapp: WHATSAPP_HREF };
export const EMAIL = "support@bigwigmediadigital.com";
/** Ad landing pages (/lead/...): no site nav, footer or desktop extras, so the form is the only way forward. */
export const isLanding = (pathname: string | null) => pathname === "/lead" || !!pathname?.startsWith("/lead/");
