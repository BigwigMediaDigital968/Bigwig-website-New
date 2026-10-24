import type { Metadata } from "next";
import {
  BadgeCheck,
  BarChart3,
  Building2,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  Share2,
  UserCheck,
} from "lucide-react";
import heroImg from "../../../../Assets/industry/real-estate-hero.png";
import introImg from "../../../../Assets/industry/real-estate-intro.png";
import IndustryHero from "../../../../components/industry/IndustryHero";
import {
  ServiceCards,
  ServiceFaq,
  ServiceIntro,
  ServiceTimeline,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import {
  FeatureChecklist,
  MarketingTabs,
  RealEstateCta,
  RealEstateStats,
  RealEstateTrust,
  RealEstateWorkGrid,
  RelatedLinks,
  WhyGrid,
  type RealEstateWork,
} from "../../../../components/industry/real-estate/Sections";
import RealEstateClients from "./RealEstateClients";

const PATH = "/industries/real-estate-digital-marketing-web-development";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title =
  "Real Estate Web Development & Digital Marketing Agency | Bigwig Media";
const description =
  "Bigwig Media Digital builds high-converting real estate websites and runs lead-generation marketing for developers, brokers and property portals. Get a free consultation.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.bigwigmediadigital.com/og-bigwig.png" }],
  },
};

const platformServices: ServiceItem[] = [
  {
    title: "Real Estate Website Design",
    desc: "Premium, mobile-first websites for developers, brokers and consultants.",
  },
  {
    title: "Property Listing Portals",
    desc: "Searchable listings with filters for location, budget, BHK and type.",
  },
  {
    title: "Project Microsites & Landing Pages",
    desc: "Dedicated pages for each launch, optimised for ad campaigns.",
  },
  {
    title: "CRM & Lead Management Integration",
    desc: "Leads routed automatically to your sales team and CRM.",
  },
  {
    title: "Virtual Tours & 3D Walkthroughs",
    desc: "Immersive project experiences embedded in the site.",
  },
  {
    title: "WhatsApp, Call and Enquiry Automation",
    desc: "Instant response to every enquiry.",
  },
  {
    title: "Admin Dashboards",
    desc: "Easy property uploads and inventory updates.",
  },
  {
    title: "Speed, Security & Hosting",
    desc: "Fast, secure, scalable infrastructure.",
  },
];

const marketingTabs = [
  {
    name: "SEO",
    icon: <Search size={18} />,
    benefit: "Rank for property and location keywords buyers actually search.",
    items: [
      {
        title: "SEO",
        desc: 'Rank for property and location keywords (e.g. "2 BHK in [location]", "plots in Goa").',
      },
      {
        title: "Local SEO and Google Business Profile",
        desc: 'Show up in "near me" searches.',
      },
      {
        title: "Content Marketing",
        desc: "Blogs, area guides and investment guides.",
      },
    ],
  },
  {
    name: "Paid Ads",
    icon: <Megaphone size={18} />,
    benefit: "Campaigns built to bring site visits, not just clicks.",
    items: [
      {
        title: "Google Ads (PPC)",
        desc: "Search, display and YouTube campaigns for projects.",
      },
      { title: "Meta Ads", desc: "Facebook and Instagram lead-gen campaigns." },
      {
        title: "Email and WhatsApp Marketing",
        desc: "Follow-up sequences that nurture leads.",
      },
    ],
  },
  {
    name: "Social",
    icon: <Share2 size={18} />,
    benefit: "Keep your project in front of buyers through a long sales cycle.",
    items: [
      {
        title: "Social Media Marketing",
        desc: "Project launches, walkthrough reels and community building.",
      },
      {
        title: "Branding and Creative",
        desc: "Brochures, videos, hoardings and project identity.",
      },
      { title: "Reputation Management", desc: "Reviews and trust-building." },
    ],
  },
  {
    name: "Content",
    icon: <BarChart3 size={18} />,
    benefit: "Be the answer when buyers research a location or builder.",
    items: [
      {
        title: "Area and Investment Guides",
        desc: "Long-form pages that rank for location and investment searches.",
      },
      {
        title: "Project Walkthrough Content",
        desc: "Videos, reels and virtual tours that move buyers towards a site visit.",
      },
      {
        title: "Blogs",
        desc: "Regular articles that build authority and organic traffic.",
      },
    ],
  },
];

// Real figures only, from the portfolio page (src/app/portfolio/component/PortfolioGrid.tsx)
const work: RealEstateWork[] = [
  {
    name: "RPH Realty",
    market: "India",
    site: "https://rphrealty.com/",
    image: "/portfolio/rphrealty.webp",
    tags: ["Website development"],
  },
  {
    name: "Fortune Asia",
    market: "UAE",
    site: "https://www.fortuneasia.ae/",
    image: "/portfolio/fortuneasia.webp",
    tags: ["Real estate website"],
  },
  {
    name: "Crown Point Estates",
    market: "Gurgaon, India",
    site: "https://www.crownpointestates.com/",
    image: "/crownpoint-estates-leads.png",
    tags: ["Local SEO", "Performance marketing"],
    result: { value: "420%", label: "growth in local search visibility" },
  },
  {
    name: "Homes and Land Goa",
    market: "Goa property",
    site: "https://www.homesandlandgoa.com",
    image: "/portfolio/homesandlandgoa.webp",
    tags: ["Real estate website"],
  },
];

const whyUs = [
  {
    icon: <Building2 size={20} />,
    title: "Development and marketing under one roof",
    desc: "One team builds the site and runs the campaigns that send it traffic.",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Experience across multiple property markets",
    desc: "Projects in India, the UAE and Goa.",
  },
  {
    icon: <UserCheck size={20} />,
    title: "Lead quality, not just traffic",
    desc: "We optimise for site visits and bookings, not clicks.",
  },
  {
    icon: <LineChart size={20} />,
    title: "Transparent monthly reporting",
    desc: "See leads, cost per lead and where they came from.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Dedicated account manager",
    desc: "One person who knows your project and answers your calls.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Built for long sales cycles",
    desc: "Follow-up that nurtures buyers until they are ready.",
  },
];

const features = [
  "Advanced property search and filters",
  "Interactive maps and location highlights",
  "Floor plans, galleries and video tours",
  "EMI and loan calculators",
  "Enquiry forms with a click-to-call/WhatsApp button",
  "Multilingual and multi-currency support (valuable for UAE audiences)",
  "Page speed and Core Web Vitals optimisation",
  "SEO-ready structure and schema",
];

const process = [
  {
    title: "Discover",
    desc: "Understand your project, buyers and competitors.",
  },
  { title: "Strategy", desc: "Define keywords, channels and the lead funnel." },
  { title: "Build", desc: "Design and develop the website or landing pages." },
  { title: "Launch", desc: "Run SEO and paid campaigns." },
  { title: "Optimise", desc: "Track leads and reduce cost per lead." },
  { title: "Scale", desc: "Expand to new projects and markets." },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "Why does a real estate company need a specialised digital marketing agency?",
    a: "Property buyers research for weeks or months, choose by location and compare many projects. A specialist agency knows how to target by geography and intent, nurture long sales cycles and build the trust a high-value purchase needs.",
  },
  {
    q: "How much does a real estate website cost?",
    a: "Cost depends on the number of pages, whether you need a listing portal with search filters, CRM and WhatsApp integration, virtual tours, multilingual support and an admin dashboard. Share your requirements and we will send a clear quote.",
  },
  {
    q: "How long does it take to build a property website?",
    a: "A project microsite or landing page can be ready much sooner than a full listing portal. Timelines depend on scope and how quickly content, floor plans and images are shared. We confirm a schedule at the strategy stage.",
  },
  {
    q: "Can you integrate our CRM and WhatsApp with the website?",
    a: "Yes. We route enquiries from forms, calls and WhatsApp to your sales team and CRM automatically, so every lead gets a fast response.",
  },
  {
    q: "Do you provide SEO and Google Ads for real estate projects?",
    a: "Yes. We run SEO, local SEO, Google Ads, Meta Ads and email and WhatsApp follow-up, so campaigns, landing pages and lead handling work as one system.",
  },
  {
    q: "How do you measure real estate lead generation success?",
    a: "We track leads, cost per lead, lead quality, site visits and bookings where your team shares that data, and report on them every month.",
  },
  {
    q: "Do you work with developers outside India, such as UAE?",
    a: "Yes. We work with property businesses in India, the UAE and Goa, including multilingual and multi-currency websites for international buyers.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Website Development & Digital Marketing",
    serviceType: "Real estate web development and digital marketing",
    url: URL,
    provider: {
      "@type": "Organization",
      name: "Bigwig Media Digital",
      url: "https://www.bigwigmediadigital.com",
    },
    areaServed: ["India", "United Arab Emirates", "Goa"],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bigwigmediadigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Real Estate Web Development & Digital Marketing",
        item: URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const waMessage =
  "Hi BigWig Media Digital! I'm interested in real estate website development and digital marketing.";

export default function RealEstateIndustryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <IndustryHero
        image={heroImg}
        lead="Real estate industry"
        title="Real Estate Websites & Digital Marketing That Generate Leads"
        intro={
          <p>
            We design, develop and market real estate websites that turn
            visitors into site visits and bookings, for developers, brokers and
            property consultants.
          </p>
        }
        cta={{ label: "Get a Free Strategy Call", href: "#enquire" }}
        whatsappMessage={waMessage}
        formSource="real-estate-hero"
        formServices={["Website Development", "Performance Marketing"]}
      />

      <RealEstateClients label="Trusted by leading real estate developers" />

      <ServiceIntro
        lead="Why real estate needs a specialist agency"
        title="The Property Buying Journey Starts Online"
        image={introImg}
        imageAlt="Home buyers searching for property online"
        body={
          <>
            <p>
              The real estate buying journey now starts online. Buyers search on
              Google, browse listings on mobile, watch virtual tours and compare
              projects before they ever call a developer.
            </p>
            <p>
              At Bigwig Media Digital, we combine platform development and
              performance marketing so your project is visible, credible and
              always generating enquiries.
            </p>
            <ul className="space-y-3 pt-2 text-base">
              <li>
                <strong className="text-[var(--ink)]">
                  Long sales cycles:
                </strong>{" "}
                we nurture leads, not just collect them.
              </li>
              <li>
                <strong className="text-[var(--ink)]">
                  High-value, location-based buyers:
                </strong>{" "}
                we target the right audience by geography and intent.
              </li>
              <li>
                <strong className="text-[var(--ink)]">
                  Heavy competition:
                </strong>{" "}
                we build visibility with SEO and paid media.
              </li>
            </ul>
          </>
        }
      />

      <ServiceCards
        lead="Online platform development"
        title="Real Estate Website & Platform Development Built to Convert"
        intro={
          <>
            Looking for the full build? See our{" "}
            <a
              href="/services/website-development-company-in-delhi"
              className="text-[var(--link)] underline underline-offset-4"
            >
              website development services
            </a>
            .
          </>
        }
        items={platformServices}
        cta="Get a free quote"
        source="real-estate-platform"
      />

      <MarketingTabs tabs={marketingTabs} source="real-estate-marketing" />

      <ServiceTimeline
        heading="How We Grow Your Real Estate Business Online"
        lead="Our process."
        rest="Six steps from first conversation to scaling across projects and markets."
        steps={process}
      />

      <RealEstateWorkGrid work={work} />

      <RealEstateStats
        items={[
          {
            value: "420%",
            label: "growth in local search visibility, Crown Point Estates",
          },
          {
            value: "500+",
            label: "monthly qualified leads, Crown Point Estates",
          },
          {
            value: "300%+",
            label: "qualified property enquiries, Ethical Infrastructures",
          },
          { value: "3×", label: "qualified property leads, Mondus Properties" },
        ]}
        quote={{
          text: "The SEO and lead generation strategy transformed our digital presence into a reliable source of high-quality property inquiries and investment opportunities.",
          by: "Crownpoint Estates Team",
        }}
      />

      <FeatureChecklist features={features} source="real-estate-features" />

      <WhyGrid items={whyUs} />

      <ServiceFaq
        title="Real estate marketing, answered"
        faqs={faqs}
        source="real-estate-faq"
      />

      {/* <RealEstateCta source="real-estate-cta" whatsappMessage={waMessage} /> */}

      <RelatedLinks
        links={[
          {
            label: "Website development services",
            href: "/services/website-development-company-in-delhi",
          },
          {
            label: "Real estate SEO services",
            href: "/services/search-engine-optimization",
          },
          {
            label: "Performance marketing and PPC",
            href: "/services/performance-marketing",
          },
          {
            label: "Social media marketing",
            href: "/services/social-media-marketing",
          },
          { label: "Our portfolio", href: "/portfolio" },
          {
            label: "Digital marketing agency in Dubai",
            href: "/digital-marketing-agency-dubai-uae",
          },
          {
            label: "Digital marketing agency in Goa",
            href: "/digital-marketing-agency-goa",
          },
        ]}
      />
    </main>
  );
}
