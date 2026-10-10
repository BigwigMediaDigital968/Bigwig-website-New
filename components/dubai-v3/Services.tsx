"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { testimonials } from "@/data/homeData";
import { SectionHead, fadeUp, inView, stagger } from "../ui";
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
  testimonials.find((t) => t.name === "Kashvi Chhabra") ?? testimonials[0];
const review2 =
  testimonials.find((t) => t.name === "Aparajita Pandey") ?? testimonials[1];

/**
 * Every service we sell, each shown as the thing it produces rather than an icon: a site, a search result, an
 * ad, a feed, a CGI film, a review, an inbox. Bento on a 12-column grid; one column on phones.
 */
export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead="What we do"
          title="Every channel your buyers use, under one roof."
          actions={<PlanButton source="services">Plan my marketing</PlanButton>}
        />

        <motion.ul
          {...inView}
          variants={stagger(0.06)}
          className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-12"
        >
          <Tile
            className="md:col-span-2 lg:col-span-7"
            title="Website design & development"
            desc="Fast property sites and project landing pages, built to turn visits into enquiries."
          >
            <div className="absolute inset-x-8 top-8 md:inset-x-12">
              <BrowserFrame
                url={granthSite.url}
                src={granthSite.src}
                sizes="(min-width: 1024px) 50vw, 90vw"
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-5"
            title="Search engine optimisation"
            desc="Rank for the searches buyers make before they call an agent."
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
            desc="Google, Meta, TikTok and LinkedIn campaigns optimised for cost per qualified lead."
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
            title="CGI, AI ads & video"
            desc="Scroll-stopping CGI, AI product shots and on-site video shoots for launches."
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
            title="Reputation management"
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
            title="Content, influencer & affiliate"
            desc="Blogs, area guides, creator partnerships and referral programmes that keep demand growing."
          >
            <ul
              aria-hidden
              className="absolute inset-6 flex flex-wrap content-center justify-center gap-2"
            >
              {[
                "Area guides",
                "Blog & PR",
                "Creator collabs",
                "Referral partners",
                "Graphic design",
                "Landing page tests",
                "Social optimisation",
              ].map((t, i) => (
                <li
                  key={t}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    i % 3 === 0
                      ? "bg-[var(--ink)] text-white"
                      : i % 3 === 1
                        ? "bg-[var(--cyan)]"
                        : "bg-[var(--surface)] ring-1 ring-[var(--line)]"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </Tile>
        </motion.ul>
      </div>
    </section>
  );
}

function Tile({
  title,
  desc,
  className = "",
  children,
}: {
  title: string;
  desc: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      variants={fadeUp}
      className={`flex flex-col overflow-hidden rounded-[28px] bg-[var(--surface)] ring-1 ring-[var(--line)] ${className}`}
    >
      {/* picture of the service; mocks are em-sized, so 13px sets their scale */}
      <div className="relative m-2 h-72 overflow-hidden rounded-[22px] bg-[var(--paper)] text-[13px] md:h-80">
        {children}
      </div>
      <div className="px-7 pb-7 pt-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 max-w-[48ch] leading-relaxed text-[var(--muted)]">
          {desc}
        </p>
      </div>
    </motion.li>
  );
}
