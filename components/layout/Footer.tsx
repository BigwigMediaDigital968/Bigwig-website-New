"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, PillLead, PillLink, WHATSAPP_HREF, fadeUp, inView, maskUp, stagger } from "../ui";

const HEADLINE = "Ready to grow your brand online?";

const companyLinks = [
  { name: "About", path: "/about" },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/career" },
  { name: "Blog", path: "/blogs" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
  { name: "Services in Dubai", path: "/digital-marketing-agency-dubai-uae" },
];

const serviceLinks = [
  { name: "Search Engine Optimization", path: "/services/search-engine-optimization" },
  { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  { name: "Performance Marketing", path: "/services/performance-marketing" },
  { name: "Content Marketing", path: "/services/content-marketing" },
  { name: "Website Designing & Development", path: "/services/website-development-company-in-delhi" },
  { name: "Email Marketing", path: "/services/email-marketing" },
  { name: "Social Media Optimization", path: "/services/social-media-optimization" },
  { name: "Graphic Designing & Video Editing", path: "/services/graphic-designing" },
  { name: "Affiliate Marketing", path: "/services/affiliate-marketing" },
  { name: "Influencer Marketing", path: "/services/influencer-marketing" },
  { name: "Online Reputation Management", path: "/services/online-reputation-management" },
];

const industries = ["Real Estate", "Beauty", "Education", "Finance/Lending", "Healthcare", "Manufacturer", "Events", "Astrology"];

const legalLinks = [
  { name: "Terms & Conditions", path: "/terms-and-condition" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Sitemap", path: "/sitemap.xml" },
];

const socials = [
  { icon: faFacebookF, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575340735142" },
  { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/bigwig.media.digital?igsh=ODhpeTJzcDRpa25q" },
  { icon: faYoutube, label: "YouTube", href: "https://www.youtube.com/@BigwigMediaDigital" },
  { icon: faXTwitter, label: "X", href: "https://x.com/bigwig_digital" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/106698073/admin/dashboard/" },
  { icon: faPinterest, label: "Pinterest", href: "https://in.pinterest.com/bigwigmediadigital/" },
];

const ring = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]";
const linkClass = `rounded-sm text-white/65 transition-colors hover:text-white ${ring}`;

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-sm font-medium text-[var(--cyan)]">{children}</h3>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 px-2 md:mt-32 md:px-3">
      <div className="rounded-t-[32px] bg-[var(--ink)] text-white">
        <div className="wrap">
          <motion.div
            {...inView}
            variants={stagger(0.08)}
            className="grid gap-10 border-b border-white/10 py-16 md:py-24 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              {/* each word rises out of its own mask */}
              <p className="text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]">
                <span className="sr-only">{HEADLINE}</span>
                {HEADLINE.split(" ").map((word, i) => (
                  <span key={i} aria-hidden className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
                    <motion.span variants={maskUp} className="inline-block">
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </p>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/65">
                Tell us your goals and we’ll come back with a plan built around them.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <PillLead source="footer" tone="cyan">
                Get a free strategy session
              </PillLead>
              <PillLink href={WHATSAPP_HREF} external tone="ghostDark">
                Chat on WhatsApp
              </PillLink>
            </motion.div>
          </motion.div>

          <motion.div {...inView} variants={stagger(0.1)} className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)_minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1.25fr)] lg:gap-8">
            <motion.div variants={fadeUp} className="col-span-2 lg:col-span-1">
              <Link href="/" aria-label="BigWig Media Digital home" className={`inline-flex items-center gap-2 rounded-md ${ring}`}>
                <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-11 w-auto" />
                <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-7 w-auto" />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
                Elevating your media presence with innovative solutions and unmatched creativity. Let’s
                build something extraordinary together.
              </p>
              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Follow us">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white/75 ring-1 ring-inset ring-white/15 transition-colors hover:bg-[var(--cyan)] hover:text-[var(--ink)] ${ring}`}
                    >
                      <FontAwesomeIcon icon={s.icon} className="text-sm" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.nav variants={fadeUp} aria-label="Company">
              <Heading>Company</Heading>
              <ul className="space-y-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className={linkClass}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav variants={fadeUp} aria-label="Popular services" className="order-last col-span-2 lg:order-none lg:col-span-1">
              <Heading>Popular services</Heading>
              <ul className="space-y-2.5 text-sm">
                {serviceLinks.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className={linkClass}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div variants={fadeUp}>
              <Heading>Industries we serve</Heading>
              <ul className="space-y-2.5 text-sm text-white/65">
                {industries.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-2 lg:col-span-1">
              <Heading>Contact</Heading>
              <address className="space-y-3 text-sm not-italic">
                <a href={`mailto:${EMAIL}`} className={`block break-all ${linkClass}`}>{EMAIL}</a>
                <a href={PHONE_HREF} className={`block ${linkClass}`}>{PHONE_DISPLAY}</a>
                <p className="text-white/65">Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India</p>
              </address>
            </motion.div>
          </motion.div>

          <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 pb-24 pt-6 text-sm text-white/55 md:flex-row md:justify-between md:pb-8">
            <p>© {year} Bigwig Media Digital. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className={`transition-colors hover:text-white ${ring}`}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
