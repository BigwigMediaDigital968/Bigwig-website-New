"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp, ArrowUpRight, Phone, Share2 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useLeadPopup } from "./LeadPopup";
import { EASE, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF, focusRing } from "./ui";

const WHATSAPP_GREEN = "#25D366";
/** show "back to top" once the visitor is this far down the page */
const SHOW_TOP_AFTER = 600;
/** pages with their own desktop WhatsApp bar (lg+), where the global pill would be a duplicate */
const OWN_WHATSAPP_BAR = ["/v2/digital-marketing-agency-dubai-uae"];

/**
 * Site-wide floating actions.
 * Desktop: social fan bottom-left; back-to-top above a "Chat with us" WhatsApp pill, bottom-right.
 * Mobile: one dock at the bottom (call, WhatsApp, share, free quote) with back-to-top floating above it.
 * The reCAPTCHA badge is hidden (see brand.css), so nothing here has to dodge it.
 */
export default function FloatingCTA() {
  const pathname = usePathname() ?? "/";
  const { scrollY, scrollYProgress } = useScroll();
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

      {/* anchored to the bottom, so the WhatsApp pill stays put when back-to-top appears above it */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 md:flex">
        {/* centred over the pill's WhatsApp icon */}
        <div className="flex w-14 justify-center">
          <BackToTop show={showTop} progress={scrollYProgress} onClick={toTop} />
        </div>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          className={`group flex h-14 items-center rounded-full pl-6 text-[var(--ink)] shadow-[0_18px_40px_-14px_rgba(1,28,64,0.55)] transition-[filter] duration-300 hover:brightness-105 ${
            OWN_WHATSAPP_BAR.includes(pathname) ? "lg:hidden" : ""
          } ${focusRing}`}
        >
          <span className="whitespace-nowrap text-[0.95rem] font-semibold">Chat with us</span>
          <span className="sr-only">on WhatsApp (opens in a new tab)</span>
          <span aria-hidden className="flex h-14 w-14 flex-none items-center justify-center">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-[1.6rem] transition-transform duration-300 group-hover:scale-110"
            />
          </span>
        </a>
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

/* ---------- page title + URL, for the mobile dock's native share ---------- */

function usePageInfo() {
  const [page, setPage] = useState({ url: "", title: "" });
  const pathname = usePathname();
  useEffect(() => setPage({ url: window.location.href, title: document.title }), [pathname]);
  return page;
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
  return (
    <div className="relative flex items-center justify-center">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Hide our social profiles" : "Show our social profiles"}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 cursor-pointer ${focusRing}`}
        style={{ background: "linear-gradient(135deg,#173e62,#ccc)", color: "white" }}
      >
        <FontAwesomeIcon
          icon={faShareNodes}
          className={`text-[18px] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden
        />
      </button>

      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.name} (opens in a new tab)`}
          tabIndex={open ? undefined : -1}
          aria-hidden={!open}
          className={`absolute flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all duration-300 cursor-pointer ${s.tone} ${
            open ? `${s.open} opacity-100` : "pointer-events-none opacity-0"
          } ${focusRing}`}
          style={{ background: s.bg }}
        >
          <FontAwesomeIcon icon={s.icon} className="text-[14px]" aria-hidden />
        </a>
      ))}
    </div>
  );
}

/* ---------- mobile dock: call, WhatsApp, share, and the primary "free quote" ---------- */

function MobileDock() {
  const { open } = useLeadPopup();
  const page = usePageInfo();
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator !== "undefined" && "share" in navigator), []);

  const share = async () => {
    try {
      await navigator.share({ title: page.title, url: page.url });
    } catch {
      /* dismissed */
    }
  };

  const icon = `flex h-12 w-12 flex-none items-center justify-center rounded-full ${focusRing}`;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="flex items-center gap-1.5 rounded-full bg-[var(--ink)] p-1.5 shadow-[0_20px_44px_-16px_rgba(1,28,64,0.7)] ring-1 ring-white/10">
        <a href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`} className={`${icon} bg-white/10 text-white`}>
          <Phone className="h-5 w-5" aria-hidden />
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp (opens in a new tab)"
          style={{ backgroundColor: WHATSAPP_GREEN }}
          className={`${icon} text-[var(--ink)]`}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-[1.35rem]" aria-hidden />
        </a>
        {canShare && (
          <button
            type="button"
            onClick={share}
            aria-label="Share this page"
            className={`${icon} bg-white/10 text-white cursor-pointer`}
          >
            <Share2 className="h-5 w-5" aria-hidden />
          </button>
        )}
        <button
          type="button"
          onClick={() => open("mobile-dock")}
          className={`flex h-12 min-w-0 flex-1 items-center justify-between gap-2 rounded-full bg-[var(--cyan)] pl-5 pr-1.5 text-[0.95rem] font-semibold text-[var(--ink)] cursor-pointer ${focusRing}`}
        >
          <span className="truncate">Get a free quote</span>
          <span
            aria-hidden
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--ink)] text-[var(--cyan)]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </nav>
  );
}
