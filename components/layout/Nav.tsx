"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { services } from "@/data/homeData";
import { useLeadPopup } from "../LeadPopup";
import { EASE, EMAIL, PHONE_DISPLAY, PHONE_HREF, stagger } from "../ui";

const itemIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

// Mobile menu links rise in one after another
const drawerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const links = [
  { title: "Clients", slug: "/clients" },
  { title: "About", slug: "/about" },
  { title: "Blog", slug: "/blogs" },
  { title: "Contact", slug: "/contact" },
];

const ring =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]";

/**
 * overlay: floats transparent over a full-bleed hero (homepage) and turns solid on scroll.
 * Default: a solid sticky bar that takes up space, for every other page.
 */
export default function Nav({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname() ?? "/";
  const isActive = (slug: string) => pathname === slug || pathname.startsWith(`${slug}/`);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open } = useLeadPopup();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menus after navigating
  useEffect(() => {
    setDrawerOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const solid = !overlay || scrolled || servicesOpen;

  return (
    <header className={`${overlay ? "fixed inset-x-0" : "sticky"} top-0 z-50 px-2 pt-2 md:px-3 md:pt-3`}>
      <motion.div
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={`relative mx-auto flex max-w-[1320px] items-center justify-between gap-6 rounded-full pl-5 pr-2 transition-[background-color,box-shadow,padding] duration-300 md:pl-7
          ${solid ? "bg-[var(--ink)]/92 py-2 shadow-[0_12px_40px_-20px_rgba(1,28,64,0.8)] backdrop-blur-md" : "bg-transparent py-3"}`}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium text-white/80">
            <li onMouseEnter={openServices} onMouseLeave={closeServicesSoon}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:text-white cursor-pointer ${ring} ${
                  servicesOpen || isActive("/services") ? "text-white" : ""
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
            </li>
            {links.map((l) => (
              <li key={l.slug}>
                <Link
                  href={l.slug}
                  aria-current={isActive(l.slug) ? "page" : undefined}
                  className={`relative block rounded-full px-4 py-2 transition-colors hover:text-white ${ring} ${
                    isActive(l.slug) ? "text-white" : ""
                  }`}
                >
                  {l.title}
                  {isActive(l.slug) && (
                    <motion.span
                      layoutId="nav-active-dot"
                      aria-hidden
                      className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--cyan)]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-white/80 transition-colors hover:text-white xl:flex ${ring}`}
          >
            <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => open("nav")}
            className={`hidden h-11 rounded-full bg-[var(--cyan)] px-5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-white sm:block cursor-pointer ${ring}`}
          >
            Get in touch
          </button>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden cursor-pointer ${ring}`}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {/* Services panel (desktop) */}
        <AnimatePresence>
          {servicesOpen && (
        <motion.div
          id="services-menu"
          onMouseEnter={openServices}
          onMouseLeave={closeServicesSoon}
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18 } }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          style={{ transformOrigin: "top center" }}
          className="absolute left-0 right-0 top-full hidden pt-3 lg:block"
        >
          <div className="grid grid-cols-[17rem_1fr] gap-10 rounded-[28px] bg-white p-8 text-[var(--ink)] shadow-[0_30px_80px_-30px_rgba(1,28,64,0.55)]">
            <div className="flex flex-col border-r border-[var(--line)] pr-8">
              <p className="text-2xl font-semibold leading-tight tracking-tight">
                Everything you need to grow online, under one roof.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Strategy, creative and media from one Delhi team with 8+ years behind it.
              </p>
              <Link
                href="/services"
                className="mt-6 w-fit rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-[var(--line-strong)] transition-colors hover:bg-[var(--ink)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link)]"
              >
                See all services
              </Link>
              <a href={`mailto:${EMAIL}`} className="mt-auto pt-8 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
                {EMAIL}
              </a>
            </div>
            <motion.ul
              className="grid grid-cols-2 content-start gap-x-6"
              initial="hidden"
              animate="show"
              variants={stagger(0.03, 0.05)}
            >
              {services.map((s) => (
                <motion.li key={s.slug} variants={itemIn} className="border-b border-[var(--line)]">
                  <Link
                    href={s.slug}
                    className="flex items-center justify-between gap-3 rounded-md py-3 text-[0.95rem] font-medium transition-colors hover:text-[var(--link)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--link)]"
                  >
                    {s.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${drawerOpen ? "" : "pointer-events-none"}`} aria-hidden={!drawerOpen}>
        <div
          className={`absolute inset-0 bg-[var(--ink)] transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!drawerOpen}
          className={`relative flex h-full flex-col text-white transition-[opacity,transform] duration-300 ${
            drawerOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 cursor-pointer ${ring}`}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-6">
            <motion.ul initial="hidden" animate={drawerOpen ? "show" : "hidden"} variants={stagger(0.07, 0.1)}>
              {links.map((l) => (
                <motion.li key={l.slug} variants={drawerItem} className="overflow-hidden border-b border-white/10">
                  <Link href={l.slug} onClick={() => setDrawerOpen(false)} className={`block py-4 text-3xl font-semibold tracking-tight ${ring}`}>
                    {l.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              className="mt-8 text-sm text-[var(--cyan)]"
              animate={{ opacity: drawerOpen ? 1 : 0 }}
              transition={{ delay: drawerOpen ? 0.4 : 0 }}
            >
              Services
            </motion.p>
            <motion.ul
              className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-2"
              initial="hidden"
              animate={drawerOpen ? "show" : "hidden"}
              variants={stagger(0.03, 0.4)}
            >
              {services.map((s) => (
                <motion.li key={s.slug} variants={itemIn}>
                  <Link href={s.slug} onClick={() => setDrawerOpen(false)} className={`block py-2 text-white/75 hover:text-white ${ring}`}>
                    {s.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <div className="space-y-3 border-t border-white/10 px-5 py-5">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-white/75">
              <Phone className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                open("nav");
              }}
              className={`h-12 w-full rounded-full bg-[var(--cyan)] text-sm font-semibold text-[var(--ink)] cursor-pointer ${ring}`}
            >
              Get in touch
            </button>
          </div>
        </aside>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" aria-label="BigWig Media Digital home" className={`flex items-center gap-2 rounded-md ${ring}`}>
      <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-9 w-auto" priority />
      <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-6 w-auto" priority />
    </Link>
  );
}
