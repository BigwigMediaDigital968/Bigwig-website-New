"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { EASE, contactFor, focusRing } from "./ui";

const WHATSAPP_GREEN = "#25D366";
/** show "back to top" once the visitor is this far down the page */
const SHOW_TOP_AFTER = 600;
/** pages with their own desktop WhatsApp bar (lg+), where the global pill would be a duplicate */
const OWN_WHATSAPP_BAR = ["/v2/digital-marketing-agency-dubai-uae"];

/**
 * Site-wide floating actions.
 * Desktop: social fan bottom-left; back-to-top above a "Chat with us" WhatsApp pill, bottom-right.
 * Mobile: one dock at the bottom (call and WhatsApp) with back-to-top floating above it.
 * The reCAPTCHA badge is hidden (see brand.css), so nothing here has to dodge it.
 */
export default function FloatingCTA() {
  const pathname = usePathname() ?? "/";
  const { scrollY, scrollYProgress } = useScroll();
  const { whatsapp } = contactFor(pathname);
  const [showTop, setShowTop] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShowTop(y > SHOW_TOP_AFTER));

  if (pathname.startsWith("/admin")) return null;

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="fixed bottom-6 left-10 z-50 hidden md:block">
        <SocialFan />
      </div>

      {/* WhatsApp above back-to-top; the back-to-top slot is always reserved so WhatsApp never jumps */}
      <div className="fixed bottom-6 right-6 z-50 hidden w-14 flex-col items-center gap-3 md:flex">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-[var(--ink)] shadow-[0_18px_40px_-14px_rgba(1,28,64,0.55)] transition-[filter] duration-300 hover:brightness-105 ${
            OWN_WHATSAPP_BAR.includes(pathname) ? "lg:hidden" : ""
          } ${focusRing}`}
        >
          <span className="sr-only">Chat with us on WhatsApp (opens in a new tab)</span>
          <FontAwesomeIcon
            icon={faWhatsapp}
            aria-hidden
            className="text-[1.6rem] transition-transform duration-300 group-hover:scale-110"
          />
          {/* always-on chat bubble above the button; its tail points down at it. Part of the link, so it's clickable too */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, delay: 1, ease: EASE }}
            style={{ transformOrigin: "bottom right" }}
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm font-semibold text-[var(--ink)] shadow-[0_14px_32px_-12px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)]"
          >
            Chat with us 👋
            <span className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-white ring-1 ring-[var(--line)] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
          </motion.span>
        </a>
        <div className="flex h-12 w-14 justify-center">
          <BackToTop show={showTop} progress={scrollYProgress} onClick={toTop} />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] right-3 z-50 md:hidden">
        <BackToTop show={showTop} progress={scrollYProgress} onClick={toTop} small />
      </div>
      <MobileDock />
    </>
  );
}

/* ---------- back to top: white disc with a teal ring that fills as you scroll ---------- */

function BackToTop({
  show,
  progress,
  onClick,
  small = false,
}: {
  show: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={onClick}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25, ease: EASE }}
          className={`group relative flex items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-[0_14px_32px_-12px_rgba(1,28,64,0.45)] ring-1 ring-[var(--line)] transition-colors hover:bg-[var(--ink)] hover:text-white cursor-pointer ${
            small ? "h-11 w-11" : "h-12 w-12"
          } ${focusRing}`}
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
            <circle cx="24" cy="24" r="22" fill="none" stroke="var(--line)" strokeWidth="2" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp
            className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------- social fan (desktop, bottom-left): the main button fans out our social profiles ---------- */

const SOCIALS = [
  {
    name: "Facebook",
    icon: faFacebookF,
    href: "https://www.facebook.com/profile.php?id=61575340735142",
    open: "translate-x-[75px]",
    tone: "text-white",
    bg: "#173e62",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/bigwig.media.digital?igsh=ODhpeTJzcDRpa25q",
    open: "translate-x-[55px] -translate-y-[55px]",
    tone: "text-[#173e62]",
    bg: "#fff",
  },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/company/bigwig-media-digital/",
    open: "-translate-y-[75px]",
    tone: "text-white",
    bg: "#173e62",
  },
];

function SocialFan() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // collapse on a click/tap outside or Escape while open
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      // collapse once focus leaves the fan (tabbing away, or clicking elsewhere)
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      className="relative flex items-center justify-center"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Hide our social profiles" : "Show our social profiles"}
        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform duration-200 ease-[var(--ease-out)] active:scale-[0.94] cursor-pointer ${focusRing}`}
        style={{ background: "linear-gradient(135deg,#173e62,#ccc)", color: "white" }}
      >
        <FontAwesomeIcon
          icon={faShareNodes}
          className={`text-[18px] transition-transform duration-300 ease-[var(--ease-out)] ${open ? "rotate-[135deg]" : ""}`}
          aria-hidden
        />
      </button>

      {SOCIALS.map((s, i) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.name} (opens in a new tab)`}
          tabIndex={open ? undefined : -1}
          aria-hidden={!open}
          className={`absolute flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-[transform,opacity] cursor-pointer ${s.tone} ${
            open
              ? `${s.open} scale-100 opacity-100 duration-[350ms] ease-[var(--ease-out)]`
              : "pointer-events-none scale-50 opacity-0 duration-200 ease-in"
          } ${focusRing}`}
          // open: fan out one after another; close: fold back in reverse, a little faster
          style={{
            background: s.bg,
            transitionDelay: `${(open ? i : SOCIALS.length - 1 - i) * (open ? 45 : 30)}ms`,
          }}
        >
          <FontAwesomeIcon icon={s.icon} className="text-[14px]" aria-hidden />
        </a>
      ))}
    </div>
  );
}

/* ---------- mobile dock: two equal buttons, call and WhatsApp ---------- */

function MobileDock() {
  const { phoneDisplay, phoneHref, whatsapp } = contactFor(usePathname());
  const btn = `flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full text-[0.95rem] font-semibold ${focusRing}`;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="flex items-center gap-1.5 rounded-full bg-[var(--ink)] p-1.5 shadow-[0_20px_44px_-16px_rgba(1,28,64,0.7)] ring-1 ring-white/10">
        <a href={phoneHref} aria-label={`Call ${phoneDisplay}`} className={`${btn} bg-white/10 text-white`}>
          <Phone className="h-5 w-5" aria-hidden />
          Call
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          className={`${btn} text-[var(--ink)]`}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-[1.35rem]" aria-hidden />
          WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </nav>
  );
}
