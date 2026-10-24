"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { testimonials } from "@/data/homeData";
import { PillLink, SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import PlanButton from "./PlanButton";
import {
  BrowserFrame,
  InboxMock,
  PhoneAd,
  ReviewMock,
  SearchCard,
  TrendMock,
} from "./mocks";
import { creatives, granthSite, heroCreatives } from "./content";

// real Google reviews from the site's testimonial data
const review =
  testimonials.find((t) => t.name === "Amit Paal Siingh") ?? testimonials[0];
const review2 =
  testimonials.find((t) => t.name === "Manjot Singh") ?? testimonials[1];

/**
 * Every service we sell, each shown as the thing it produces rather than an icon: a site, a search result, an
 * ad, a feed, a creative, a review, an inbox. Titles use the names from the Dubai service list. Bento on a 12-column grid; one column on phones.
 */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead="What we do"
          title="One digital marketing agency in Dubai for every channel your buyers use."
          actions={
            <>
              <PlanButton source="services">Plan my marketing</PlanButton>
              <PillLink href="/services" tone="ghost">
                View all services
              </PillLink>
            </>
          }
        />

        <motion.ul
          {...inView}
          variants={stagger(0.06)}
          className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-12"
        >
          <Tile
            className="md:col-span-2 lg:col-span-7"
            title="Website design & development"
            href="/services/website-development-company-in-delhi"
            desc="Fast property sites and project landing pages, built to turn visits into enquiries."
          >
            <div className="absolute inset-x-8 top-8 md:inset-x-12">
              <BrowserFrame
                url={granthSite.url}
                src={granthSite.src}
                sizes="(min-width: 1024px) 50vw, 90vw"
                height={1000}
                width={1000}
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-5"
            title="Search engine optimisation"
            href="/services/search-engine-optimization"
            desc="Rank for the searches buyers make before they call an agent, such as off-plan apartments in Dubai Marina."
          >
            <div className="absolute inset-x-6 top-8 space-y-3">
              <SearchCard
                query="villas for sale palm jumeirah"
                url="yourbrand.ae › palm-jumeirah"
                title="Palm Jumeirah Villas for Sale | Floor Plans & Prices"
                desc="Browse signature villas with private beaches. Compare layouts, prices and payment plans."
              />
              <TrendMock label="Organic visits" className="ml-auto w-[70%]" />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Performance marketing"
            href="/services/performance-marketing"
            desc="Google, Meta, TikTok and LinkedIn campaigns optimised for cost per qualified lead, not clicks."
          >
            <div className="absolute left-1/2 top-8 w-[52%] -translate-x-1/2">
              <PhoneAd
                img={creatives[4].src}
                brand="Bigwig Digital"
                caption="Ideas that fly. Campaigns that land."
                cta="Learn more"
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Social media marketing"
            href="/services/social-media-marketing"
            desc="Content calendars, reels and community management that keep your projects in the feed."
          >
            <div
              aria-hidden
              className="absolute inset-6 grid grid-cols-3 content-start gap-1.5"
            >
              {creatives
                .map((c) => c.src)
                .slice(0, 9)
                .map((c, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={c}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Graphic designing & video editing"
            href="/services/graphic-designing"
            desc="Logos, ad creatives and edited video that make every launch and listing stand out."
          >
            <div
              aria-hidden
              className="absolute inset-6 overflow-hidden rounded-2xl"
            >
              <Image
                src={heroCreatives.cgi}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-[var(--ink)] backdrop-blur">
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </span>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Online reputation management"
            href="/services/online-reputation-management"
            desc="More five-star Google reviews, and fast, careful replies to the rest."
          >
            <div className="absolute inset-x-6 top-8 space-y-3">
              <ReviewMock name={review.name} text={review.review} />
              <ReviewMock
                name={review2.name}
                text={review2.review}
                className="ml-8"
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Email marketing"
            href="/services/email-marketing"
            desc="Launch announcements and investor newsletters that bring past enquiries back."
          >
            <div className="absolute inset-x-6 top-8">
              <InboxMock
                rows={[
                  {
                    from: "Palm Vista Residences",
                    subject: "Launch day: first look at the waterfront homes",
                  },
                  {
                    from: "Palm Vista Residences",
                    subject: "Your brochure and floor plans",
                  },
                  {
                    from: "Palm Vista Residences",
                    subject: "3 units left in the first release",
                  },
                ]}
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Content, influencer & affiliate marketing"
            desc="Blogs and guides, creator partnerships and affiliate programmes, plus profiles optimised to convert."
          >
            {/* the remaining services, each a link to its main service page */}
            <ul className="absolute inset-6 flex flex-wrap content-center justify-center gap-2">
              {[
                { name: "Content Marketing", href: "/services/content-marketing" },
                { name: "Influencer Marketing", href: "/services/influencer-marketing" },
                { name: "Affiliate Marketing", href: "/services/affiliate-marketing" },
                { name: "Social Media Optimization", href: "/services/social-media-optimization" },
              ].map((s, i) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${focusRing} ${
                      i % 3 === 0
                        ? "bg-[var(--ink)] text-white"
                        : i % 3 === 1
                          ? "bg-[var(--cyan)]"
                          : "bg-[var(--surface)] ring-1 ring-[var(--line)]"
                    }`}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>          </Tile>
        </motion.ul>
      </div>
    </section>
  );
}

function Tile({
  title,
  desc,
  href,
  className = "",
  children,
}: {
  title: string;
  desc: string;
  /** the service's main page; shown as a "Learn more" link */
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      variants={fadeUp}
      // hover: the card lifts (framer, so it doesn't fight the entrance animation) and its shadow deepens; the picture
      // inside zooms slowly and the link's arrow nudges. Reduced motion turns the movement off (see MotionRoot).
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 26 } }}
      className={`group flex flex-col overflow-hidden rounded-[28px] bg-[var(--surface)] ring-1 ring-[var(--line)] transition-[box-shadow] duration-300 hover:shadow-[0_30px_60px_-30px_rgba(1,28,64,0.35)] hover:ring-[var(--line-strong)] motion-reduce:transition-none ${className}`}
    >
      {/* picture of the service; mocks are em-sized, so 13px sets their scale */}
      <div className="relative m-2 h-72 overflow-hidden rounded-[22px] bg-[var(--paper)] text-[13px] md:h-80">
        <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          {children}
        </div>
      </div>
      <div className="px-7 pb-7 pt-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-[48ch] leading-relaxed text-[var(--muted)]">
          {desc}
        </p>
        {href && (
          <Link
            href={href}
            className={`mt-4 inline-flex items-center gap-1 rounded-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}
          >
            Learn more
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden
            />
            <span className="sr-only"> about {title}</span>
          </Link>
        )}
      </div>
    </motion.li>
  );
}
