"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  EASE,
  EASE_IN_OUT,
  EASE_OUT,
  WhatsAppPill,
  fadeUp,
  focusRing,
  stagger,
} from "../ui";
import PlanButton from "../dubai-v3/PlanButton";
import {
  BrowserFrame,
  LeadToast,
  PhoneAd,
  SearchCard,
} from "../dubai-v3/mocks";
import { BHOPAL_WHATSAPP_HREF, heroAd, heroClients, sites } from "./content";

const lines = [
  "Ads, SEO, websites",
  "and social media",
  "that grow Bhopal",
  "businesses.",
];

const services = [
  "Google & Meta ads",
  "SEO & Google Maps",
  "Websites",
  "Social media",
  "CGI & video",
  "Reputation",
];

/**
 * Light hero, same composition as the Dubai v3 hero. The stage deliberately mixes sectors (a jewellery store's
 * site, a café's Instagram ad, a clinic's Google listing) so the page reads as "any local business", then the
 * WhatsApp lead they all produce. Mocks are em-sized off the stage's container width, so it scales as one.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const site = sites[0];

  const land = (delay: number) => ({
    initial: reduce
      ? { opacity: 0 }
      : { opacity: 0, transform: "translateY(24px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-14 pt-8 md:pb-20 md:pt-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_55%_at_78%_38%,rgba(167,235,242,0.75),transparent_70%),radial-gradient(ellipse_30%_40%_at_10%_90%,rgba(84,172,191,0.14),transparent_70%)]"
      />

      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div
          className="min-w-0 lg:col-span-5"
          initial="hidden"
          animate="show"
          variants={stagger(0.08, 0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.95rem] font-medium text-[var(--link)]"
          >
            Digital marketing agency in Bhopal
          </motion.p>
          <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[3.25rem] lg:text-[clamp(2.6rem,3.7vw,3.6rem)]">
            {lines.map((l) => (
              <span
                key={l}
                className="-mb-[0.14em] block overflow-hidden pb-[0.14em]"
              >
                <motion.span
                  className="block"
                  variants={{
                    hidden: { transform: "translateY(105%)" },
                    show: {
                      transform: "translateY(0%)",
                      transition: { duration: 0.9, ease: EASE_IN_OUT },
                    },
                  }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]"
          >
            A full-service marketing team with an office in Bhopal, for shops,
            clinics, schools, restaurants and every business that wants more
            customers calling.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <PlanButton source="hero">Get my free growth plan</PlanButton>
            <WhatsAppPill href={BHOPAL_WHATSAPP_HREF} />
          </motion.div>
          <motion.ul
            variants={fadeUp}
            aria-label="Our services"
            className="mt-10 flex max-w-lg flex-wrap gap-2"
          >
            {services.map((s) => (
              <li
                key={s}
                className="rounded-full bg-[var(--surface)] px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset ring-[var(--line)]"
              >
                {s}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* creative stage */}
        <div className="@container min-w-0 lg:col-span-7">
          <p className="sr-only">
            Examples of our work: the {site.name} website we built, an
            Instagram ad for a café, a Google search result for a clinic and
            the WhatsApp lead alert they lead to.
          </p>
          <div className="relative aspect-[6/5] text-[2.5cqw] lg:text-[1.95cqw]">
            <motion.div
              className="absolute left-0 top-[5%] w-[72%]"
              {...land(0.35)}
            >
              <Tag>Website design</Tag>
              <BrowserFrame
                url={site.url}
                src={site.src}
                width={site.width}
                height={site.height}
                scrollTo="-55%"
                sizes="(min-width: 1024px) 40vw, 72vw"
              />
            </motion.div>

            <motion.div
              className="absolute right-0 top-[11%] z-10 w-[31%]"
              {...land(0.55)}
            >
              <Tag>Instagram ads</Tag>
              <PhoneAd
                img={heroAd}
                brand="Lakeside Café"
                caption="New summer shakes are here. Show this post for 20% off."
                cta="Get directions"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-[3%] left-[5%] z-10 w-[50%]"
              {...land(0.7)}
            >
              <Tag>Google Ads &amp; SEO</Tag>
              <SearchCard
                query="dental clinic near me bhopal"
                url="smilecare.in › arera-colony"
                title="Dental Clinic in Arera Colony | Book an Appointment"
                desc="Painless treatment, evening slots and free first check-up. Call or book online today."
              />
            </motion.div>

            {/* the payoff: the lead arrives last */}
            <motion.div
              className="absolute bottom-[12%] right-[2%] z-20 w-[44%]"
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, transform: "translateY(16px) scale(0.96)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
              transition={{ duration: 0.5, delay: 1.5, ease: EASE_OUT }}
            >
              <LeadToast
                title="New enquiry from Google"
                body="Wants an appointment this Saturday. Tap to reply."
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* clients */}
      <div className="wrap mt-14 md:mt-20">
        <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:flex-row md:items-center md:gap-10">
          <p className="flex-none text-sm text-[var(--muted)]">
            Trusted by growing businesses across India
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {heroClients.map((c) => (
              <li key={c.name}>
                {/* muted at rest; full ink with a small lift on hover (kept monochrome: some logos are white artwork) */}
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-md ${focusRing}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-8 w-auto max-w-[140px] object-contain opacity-50 brightness-0 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 md:h-9"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Names the service a mock stands for. */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="absolute -top-[1.1em] left-[1em] z-10 whitespace-nowrap rounded-full bg-[var(--ink)] px-[0.9em] py-[0.35em] text-[0.68em] font-semibold text-white shadow-[0_0.6em_1.2em_-0.6em_rgba(1,28,64,0.6)]"
    >
      {children}
    </span>
  );
}
