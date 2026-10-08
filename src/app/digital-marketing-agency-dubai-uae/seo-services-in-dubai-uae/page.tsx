import type { Metadata } from "next";
import heroImg from "../../../../Assets/dubai.jpg";
import introImg from "../../../../Assets/Dubai/transformBuisness.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import DubaiWhyUs from "../../../../components/dubai/DubaiWhyUs";
import {
  OtherServices,
  ServiceCards,
  ServiceCarousel,
  ServiceIntro,
  ServiceResults,
  ServiceStats,
  type ServiceItem,
  type ServiceStat,
} from "../../../../components/service/ServiceSections";
import { dubaiServices } from "@/data/dubaiData";

const PATH = "/digital-marketing-agency-dubai-uae/seo-services-in-dubai-uae";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "SEO Services in Dubai, UAE | BigWig Media Digital";
const description =
  "Rank higher and grow your business online with professional SEO Services in Dubai, UAE. BigWig Media Digital delivers results-driven SEO strategies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Bigwig Media Digital",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032945/WhatsApp_Image_2026-02-02_at_4.12.04_PM_2_qj4azj.jpg",
      },
    ],
  },
};

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const unsplash = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const approach = [
  { title: "Keyword Analysis", desc: "Targeting what your Dubai audience is searching for." },
  { title: "Backlink Building", desc: "Establishing authority and trust online." },
  { title: "Content Creation", desc: "Crafting engaging, localized, and SEO-friendly content." },
  { title: "Technical SEO", desc: "Ensuring smooth website performance across devices." },
];

const companyStats = [
  { value: "10+", label: "Years of expertise in global & Dubai-focused SEO" },
  { value: "10,000+", label: "Campaigns managed successfully" },
  { value: "95%", label: "Client retention rate, showcasing trust and results" },
];

const marketStats: ServiceStat[] = [
  {
    value: "53%",
    label: "Organic search",
    desc: "Over 53% of website traffic worldwide comes from organic search.",
    image: unsplash("1460925895917-afdab827c52f", 600),
    imageAlt: "Website traffic analytics on a laptop",
  },
  {
    value: "$122.11B",
    label: "Global SEO industry",
    desc: "The global SEO industry will exceed $122.11 billion by 2028.",
    image: unsplash("1543286386-713bdd548da4", 600),
    imageAlt: "Rising growth chart on paper",
  },
  {
    value: "60%+",
    label: "Mobile-first Dubai",
    desc: "In Dubai, mobile-first searches dominate with 60%+ on smartphones.",
    image: unsplash("1512941937669-90a1b58e7e9c", 600),
    imageAlt: "Apps on a smartphone home screen",
  },
  {
    value: "92%",
    label: "Google market share",
    desc: "Google holds 92% market share, making SEO essential for growth.",
    image: unsplash("1573804633927-bfcbcd909acd", 600),
    imageAlt: "Neon Google logo",
  },
];

const services: ServiceItem[] = [
  {
    title: "Local SEO (Dubai & UAE)",
    desc: "Appear in “near me” searches, optimize your Google Business Profile for maps and the local pack, build local citations, manage ratings & reviews, and create location-based content for Dubai audiences.",
    image: unsplash("1512453979798-5ea266f8880c", 800),
    imageAlt: "Dubai skyline with the Burj Khalifa at sunrise",
  },
  {
    title: "App Store Optimization (ASO)",
    desc: "Increase app visibility & rankings on the Apple App Store and Google Play with keyword-driven strategies, positive reviews, and Dubai-focused app marketing.",
    image: unsplash("1512941937669-90a1b58e7e9c", 800),
    imageAlt: "Apps on a smartphone home screen",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    desc: "Win featured snippets & People Also Ask, rank for voice searches in English & Arabic, use schema markup, and write conversational content that matches how Dubai users search.",
    image: unsplash("1543512214-318c7553f230", 800),
    imageAlt: "Smart speaker for voice search",
  },
  {
    title: "Geo-Targeted SEO (GEO)",
    desc: "Rank across Dubai, Abu Dhabi, Sharjah, and Ajman with localized landing pages and geo-specific keywords. Perfect for businesses with multiple branches across the UAE.",
    image: unsplash("1518684079-3c830dcef090", 800),
    imageAlt: "Aerial view of the Burj Al Arab and Palm Jumeirah",
  },
  {
    title: "E-commerce SEO in Dubai, UAE",
    desc: "Boost store visibility and product rankings, optimize descriptions, URLs, and UX for conversions, fix technical SEO, and grow sustainable organic sales with less reliance on ads.",
    image: unsplash("1586880244406-556ebe35f282", 800),
    imageAlt: "Online store builder open on a laptop",
  },
  {
    title: "International SEO",
    desc: "Expand your Dubai-based business globally with multi-language (Arabic, English, Hindi) and multi-region optimization, hreflang tags, and geo-targeting, while strengthening your Dubai presence.",
    image: unsplash("1526778548025-fa2f459cd5c1", 800),
    imageAlt: "World map carved into wood",
  },
];

const whyChoose: ServiceItem[] = [
  { title: "Local Expertise", desc: "Deep understanding of the Dubai business landscape & consumer behavior." },
  { title: "Transparent Growth", desc: "Transparent reporting & measurable growth." },
  {
    title: "Proven Success",
    desc: "Proven track record in real estate, hospitality, e-commerce, startups & corporates.",
  },
];

export default function SeoServicesInDubaiPage() {
  return (
    <main>
      <ServiceHero
        image={heroImg}
        lead="SEO services in Dubai, UAE"
        title="Search Engine Optimization Services in Dubai, UAE"
        intro={
          <p>
            <span className="text-white">Boost visibility & organic growth.</span> With our expert SEO services in
            Dubai, UAE, we help your business rank higher on search engines, attract qualified leads, and build
            long-term online visibility through proven, ethical optimization techniques.
          </p>
        }
        cta="Get a free SEO audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your SEO services in Dubai, UAE."
        formSource="dubai-seo-hero"
        formCountry="ae"
        formServices={["SEO"]}
      />

      <ServiceIntro
        lead="SEO in Dubai"
        title="What is SEO & Why is it Important for Your Business in Dubai, UAE?"
        image={introImg}
        imageAlt="SEO in Dubai"
        body={
          <>
            <p>
              Many businesses in Dubai believe SEO is a digital formality. In reality, Search Engine Optimization is
              the process of improving your website’s visibility on Google, Bing, and Yahoo. The higher you rank, the
              greater your chances of being discovered by potential customers. In Dubai’s highly competitive business
              hub, SEO is no longer optional; it’s essential.
            </p>
            <p className="text-[var(--ink)]">Our SEO approach in Dubai focuses on:</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {approach.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  <span>
                    <span className="font-semibold text-[var(--ink)]">{a.title}</span> – {a.desc}
                  </span>
                </li>
              ))}
            </ul>
          </>
        }
      />

      <ServiceResults
        lead="Best SEO company in Dubai, UAE"
        title="Drive Organic Traffic with the Best SEO Company in Dubai & UAE"
        intro="BigWig Media Digital is a leading SEO agency in Dubai, UAE. We’ve helped businesses across retail, real estate, e-commerce, hospitality, and corporate sectors achieve top rankings on Google and grow their digital presence."
        items={companyStats}
        cta="Get a free SEO audit"
        source="dubai-seo-results"
      />

      <ServiceStats
        lead="The numbers"
        title="Why Dubai Businesses Need SEO Now More Than Ever"
        label="SEO market statistics"
        items={marketStats}
      />

      <ServiceCarousel
        id="dubai-seo-services"
        lead="What we offer"
        title="All-in-One SEO Services in Dubai, UAE, Under One Roof"
        intro="Comprehensive SEO strategies for local, e-commerce, mobile apps, international markets and more, tailored specifically for Dubai & UAE businesses."
        items={services}
        cta="Plan your SEO strategy"
        source="dubai-seo-services"
      />

      <ServiceCards
        lead="Why BigWig"
        title="Why Choose BigWig Media Digital for SEO in Dubai, UAE?"
        items={whyChoose}
        cta="Talk to our SEO team"
        source="dubai-seo-why-us"
      />

      <DubaiWhyUs />

      <OtherServices current={PATH} services={dubaiServices} title="Our other services in Dubai, UAE" />
    </main>
  );
}
