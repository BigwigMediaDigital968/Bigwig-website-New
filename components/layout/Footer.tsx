"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillLead,
  WhatsAppPill,
  contactFor,
  fadeUp,
  isLanding,
  inView,
  maskUp,
  stagger,
} from "../ui";

const HEADLINE = "Ready to grow your brand online?";
const SUBLINE = "Tell us your goals and we’ll come back with a plan built around them.";

// Pages with their own closing banner copy
const CTA_COPY: Record<string, { headline: string; subline: string }> = {
  "/digital-marketing-agency-dubai-uae": {
    headline: "Ready to grow with a digital marketing agency in Dubai?",
    subline: "Tell us your goals, and we will come back with a plan built around them.",
  },
};

// Core company links
const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/career" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blogs" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

// Branch / Regional landing pages (moved under logo section)
const branchLinks = [
  { name: "Delhi, HQ", path: "/contact" },
  { name: "Bhopal", path: "/digital-marketing-agency-bhopal" },
  { name: "Goa", path: "/digital-marketing-agency-goa" },
    { name: "Dubai, UAE", path: "/digital-marketing-agency-dubai-uae" },

];

const serviceLinks = [
  { name: "Website Design & Development", path: "/services/website-development-company-in-delhi" },
  { name: "Search Engine Optimization", path: "/services/search-engine-optimization" },
  { name: "Social Media Management", path: "/services/social-media-optimization" },
  { name: "Performance Marketing", path: "/services/performance-marketing" },
  { name: "ORM Services", path: "/services/online-reputation-management" },
  { name: "Influencer Marketing", path: "/services/influencer-marketing" },
  { name: "Email Marketing", path: "/services/email-marketing" },
  { name: "Graphic Design & Video", path: "/services/graphic-designing" },
  { name: "Affiliate Marketing", path: "/services/affiliate-marketing" },
  { name: "Content Marketing", path: "/services/content-marketing" },
];

// `path` only where an industry page exists
const industries: { name: string; path?: string }[] = [
  { name: "Real Estate" },
  { name: "Beauty" },
  { name: "Education" },
  { name: "Finance/Lending" },
  { name: "Healthcare" },
  { name: "Manufacturing" },
  { name: "Events" },
  { name: "Astrology" },
];

const legalLinks = [
  { name: "Terms & Conditions", path: "/terms-and-condition" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Sitemap", path: "/sitemap.html" },
];

const socials = [
  { icon: faFacebookF, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575340735142" },
  { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/bigwig.media.digital?igsh=ODhpeTJzcDRpa25q" },
  { icon: faYoutube, label: "YouTube", href: "https://www.youtube.com/@BigwigMediaDigital" },
  { icon: faXTwitter, label: "X", href: "https://x.com/bigwig_digital" },
  { icon: faLinkedin, label: "LinkedIn", href: "https://in.linkedin.com/company/bigwig-media-digital" },
];

const ring = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]";
const linkClass = `rounded-sm text-white/65 transition-colors hover:text-white ${ring}`;

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">{children}</h3>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const { whatsapp } = contactFor(pathname);
  if (isLanding(pathname)) return null;
  const custom = CTA_COPY[pathname];
  const headline = custom?.headline ?? HEADLINE;
  const subline = custom?.subline ?? SUBLINE;

  return (
    <footer className="mt-24 px-2 md:mt-32 md:px-3">
      <div className="rounded-t-[32px] bg-[var(--ink)] text-white">
        <div className="wrap">
          {/* Header Call To Action */}
          <motion.div
            {...inView}
            variants={stagger(0.08)}
            className="grid gap-10 border-b border-white/10 py-16 md:py-24 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <p
                className={`font-semibold leading-[0.98] tracking-[-0.04em] ${
                  custom ? "text-4xl sm:text-5xl lg:text-[4.25rem]" : "text-[2.6rem] sm:text-6xl lg:text-[5.5rem]"
                }`}
              >
                <span className="sr-only">{headline}</span>
                {headline.split(" ").map((word, i) => (
                  <span key={i} aria-hidden className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
                    <motion.span variants={maskUp} className="inline-block">
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </p>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/65">
                {subline}
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <PillLead source="footer" tone="cyan">
                Get a free strategy session
              </PillLead>
              <WhatsAppPill href={whatsapp} dark />
            </motion.div>
          </motion.div>

          {/* Structured Footer Grid */}
          <motion.div
            {...inView}
            variants={stagger(0.08)}
            className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-12 lg:gap-8"
          >
            {/* Column 1: Logo, Bio, Regional Branches & Socials */}
            <motion.div variants={fadeUp} className="col-span-2 md:col-span-3 lg:col-span-3 space-y-6">
              <div>
                <Link href="/" aria-label="BigWig Media Digital home" className={`inline-flex items-center gap-2 rounded-md ${ring}`}>
                  <Image src="/Bigwig_logo_icon.png" alt="" width={791} height={909} className="h-11 w-auto" />
                  <Image src="/Bigwig_brandname.png" alt="BigWig Media Digital" width={791} height={909} className="h-7 w-auto" />
                </Link>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                  Elevating your media presence with innovative solutions and unmatched creativity.
                </p>
              </div>

              {/* Branches placed under logo bio */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--cyan)] mb-2.5">
                  Our Locations
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {branchLinks.map((b) => (
                    <li key={b.path}>
                      <Link
                        href={b.path}
                        className={`inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition-colors hover:bg-[var(--cyan)] hover:text-[var(--ink)] hover:ring-[var(--cyan)] ${ring}`}
                      >
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Icons */}
              <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Follow us">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-white/75 ring-1 ring-inset ring-white/15 transition-colors hover:bg-[var(--cyan)] hover:text-[var(--ink)] ${ring}`}
                    >
                      <FontAwesomeIcon icon={s.icon} className="text-sm" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2">
              <Heading>Quick Links</Heading>
              <ul className="space-y-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className={linkClass}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services */}
            <motion.nav variants={fadeUp} aria-label="Popular services" className="col-span-1 lg:col-span-3">
              <Heading>Popular Services</Heading>
              <ul className="space-y-2.5 text-sm">
                {serviceLinks.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className={linkClass}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Column 4: Industries */}
            <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2">
              <Heading>Industries We Cover</Heading>
              <ul className="space-y-2.5 text-sm text-white/65">
                {industries.map((i) => (
                  <li key={i.name}>
                    {i.path ? <Link href={i.path} className={linkClass}>{i.name}</Link> : i.name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 5: Contact HQ */}
            <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2">
              <Heading>Contact HQ</Heading>
              <address className="space-y-2.5 text-sm not-italic">
                <a href={`mailto:${EMAIL}`} className={`block break-all ${linkClass}`}>{EMAIL}</a>
                <a href={PHONE_HREF} className={`block ${linkClass}`}>{PHONE_DISPLAY}</a>
                <p className="text-white/65 leading-relaxed pt-1">
                  Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
                </p>
              </address>
            </motion.div>
          </motion.div>

          {/* Bottom Legal Bar */}
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