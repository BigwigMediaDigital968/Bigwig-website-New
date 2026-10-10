"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Play, Star } from "lucide-react";
import { testimonials } from "@/data/homeData";
import { SectionHead, inView, stagger } from "../ui";
import PlanButton from "../dubai-v3/PlanButton";
import { Tile } from "../dubai-v3/Services";
import {
  BrowserFrame,
  InboxMock,
  PhoneAd,
  ReviewMock,
  TrendMock,
} from "../dubai-v3/mocks";
import { creatives, heroCreatives } from "../dubai-v3/content";
import { sites } from "./content";

// real Google reviews from the site's testimonial data
const review =
  testimonials.find((t) => t.name === "Aparajita Pandey") ?? testimonials[0];
const review2 =
  testimonials.find((t) => t.name === "Kashvi Chhabra") ?? testimonials[1];

/**
 * Every service we sell, each shown as the thing it produces, as on the Dubai v3 page, with examples drawn
 * from different local businesses. Local SEO gets a Google Maps card, since that's where Bhopal searches end.
 */
export default function Services() {
  const site = sites[1];

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="wrap">
        <SectionHead
          lead="What we do"
          title="Every channel your customers use, under one roof."
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
            desc="Fast, mobile-first websites and landing pages, built to turn visits into calls and enquiries."
          >
            <div className="absolute inset-x-8 top-8 md:inset-x-12">
              <BrowserFrame
                url={site.url}
                src={site.src}
                width={site.width}
                height={site.height}
                sizes="(min-width: 1024px) 50vw, 90vw"
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-5"
            title="SEO & Google Maps"
            desc="Show up in the map pack and on page one when people nearby search for what you sell."
          >
            <div className="absolute inset-x-6 top-8 space-y-3">
              <MapsCard />
              <TrendMock label="Calls from Google" className="ml-auto w-[70%]" />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Performance marketing"
            desc="Google, Meta and YouTube campaigns optimised for cost per lead, not clicks."
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
            desc="Content calendars, reels and community management that keep you in your customers’ feeds."
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
            desc="Scroll-stopping CGI, AI product shots and video shoots at your shop, clinic or site."
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
            title="Email & WhatsApp marketing"
            desc="Offers, reminders and updates that bring past customers back."
          >
            <div className="absolute inset-x-6 top-8">
              <InboxMock
                rows={[
                  {
                    from: "Lakeside Café",
                    subject: "Your weekend table is waiting",
                  },
                  {
                    from: "SmileCare Dental",
                    subject: "Time for your six-month check-up",
                  },
                  {
                    from: "Apex Coaching",
                    subject: "New batch starts Monday: 5 seats left",
                  },
                ]}
              />
            </div>
          </Tile>

          <Tile
            className="lg:col-span-4"
            title="Content, influencer & affiliate"
            desc="Blogs, local creator collaborations and referral programmes that keep demand growing."
          >
            <ul
              aria-hidden
              className="absolute inset-6 flex flex-wrap content-center justify-center gap-2"
            >
              {[
                "Blog & PR",
                "Local creators",
                "Referral partners",
                "Graphic design",
                "Landing page tests",
                "Social optimisation",
                "Festive campaigns",
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

/** A Google Maps local-pack result, em-sized like the other mocks. */
function MapsCard() {
  return (
    <div
      aria-hidden
      className="rounded-[1em] bg-[var(--surface)] p-[1em] shadow-[0_1.5em_3em_-1.2em_rgba(1,28,64,0.35)] ring-1 ring-[var(--line)]"
    >
      <p className="text-[0.8em] text-[var(--muted)]">
        coaching institute near me
      </p>
      <div className="mt-[0.7em] flex items-start gap-[0.7em]">
        <span className="flex h-[2.2em] w-[2.2em] flex-none items-center justify-center rounded-full bg-[#EA4335] text-white">
          <MapPin className="h-[1.1em] w-[1.1em]" />
        </span>
        <span className="min-w-0 leading-snug">
          <span className="block font-semibold text-[#1a0dab]">
            Apex Coaching Classes
          </span>
          <span className="flex items-center gap-[0.3em] text-[0.85em]">
            4.9
            <span className="flex text-[#FBBC04]">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-[0.9em] w-[0.9em] fill-current" />
              ))}
            </span>
            <span className="text-[var(--muted)]">(312)</span>
          </span>
          <span className="block text-[0.85em] text-[var(--muted)]">
            MP Nagar, Bhopal · Open now
          </span>
        </span>
      </div>
      <div className="mt-[0.8em] flex gap-[0.5em] text-[0.8em] font-semibold text-[#1a73e8]">
        <span className="rounded-full px-[0.9em] py-[0.35em] ring-1 ring-[var(--line)]">
          Call
        </span>
        <span className="rounded-full px-[0.9em] py-[0.35em] ring-1 ring-[var(--line)]">
          Directions
        </span>
        <span className="rounded-full px-[0.9em] py-[0.35em] ring-1 ring-[var(--line)]">
          Website
        </span>
      </div>
    </div>
  );
}
