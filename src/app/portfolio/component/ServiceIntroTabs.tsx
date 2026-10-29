"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Code2,
  Megaphone,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

// --- Types & Constants ---
type ServiceTab = {
  key: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  subheading: string;
  paragraphs: string[];
  highlights: string[];
  image: string;
  insetImage: string;
  floatingStat: { value: string; label: string };
  accentColor: string;
  href: string;
};

const SERVICE_TABS: ServiceTab[] = [
  {
    key: "web",
    label: "Web Development",
    icon: Code2,
    heading: "Bigwig Experties",
    subheading: "Website Design & Development",
    paragraphs: [
      "Hi, we are a web design and development team specializing in fast, conversion-focused websites built for growth.",
      "Over the past 5 years, we've built websites for businesses across ecommerce, healthcare, hospitality, education, NGOs, real estate, and service-based industries, turning their online presence into a reliable source of enquiries and sales.",
      "We don't design websites just to look good. Every page is planned around user journeys, speed, and SEO foundations, ensuring your website works as hard as your sales team.",
    ],
    highlights: [
      "Custom UI/UX",
      "Mobile-First",
      "SEO-Ready Builds",
      "eCommerce",
    ],
    image: "/website/website-intro.png",
    insetImage: "/ethical-infrastructures-showcase.png",
    floatingStat: { value: "100+", label: "Websites Launched" },
    accentColor: "#0284C7",
    href: "/services/website-development-company-in-delhi",
  },
  {
    key: "performance",
    label: "Performance",
    icon: Megaphone,
    heading: "Paid Marketing",
    subheading: "Meta Ads and Marketing",
    paragraphs: [
      "Hi, we are a digital marketing strategist specializing in Meta Ads and performance marketing.",
      "Over the past 5 years, we've worked with businesses across ecommerce, healthcare, hospitality, education, NGOs, real estate, and service-based industries, helping them acquire customers profitably through paid advertising.",
      "We don't run ads blindly. Every campaign is structured around testing, learning, and scaling, ensuring that ad spend is invested where results are proven.",
    ],
    highlights: ["Meta Ads", "Google Ads", "Lead Generation", "ROAS Scaling"],
    image: "/home/lead-growth.png",
    insetImage: "/home/ecom-growth.png",
    floatingStat: { value: "3X", label: "Avg. Lead Growth" },
    accentColor: "#0891B2",
    href: "/services/performance-marketing",
  },
  {
    key: "seo",
    label: "SEO",
    icon: Search,
    heading: "SEO, AEO, GEO, and AIO",
    subheading: "Search Engine Optimization",
    paragraphs: [
      "Hi, we are an SEO team specializing in technical, local, and content-led search growth.",
      "Over the past 5 years, we've helped businesses across ecommerce, healthcare, hospitality, education, NGOs, real estate, and service-based industries rank for high-intent keywords and earn customers without paying for every click.",
      "We don't chase vanity rankings. Every strategy is built on keyword research, technical audits, and content that converts, ensuring organic traffic turns into measurable revenue.",
    ],
    highlights: [
      "Technical SEO",
      "Local SEO",
      "Content Strategy",
      "Link Building",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    insetImage: "/pearls-india-showcase.png",
    floatingStat: { value: "500+", label: "Page-1 Keywords" },
    accentColor: "#2563EB",
    href: "/services/search-engine-optimization",
  },
  {
    key: "smo",
    label: "SMO",
    icon: Share2,
    heading: "Social Media Growth",
    subheading: "Social Media Optimization",
    paragraphs: [
      "Hi, we are a social media team specializing in brand building, content, and community growth.",
      "Over the past 5 years, we've managed social presence for businesses across ecommerce, healthcare, hospitality, education, NGOs, real estate, and service-based industries, helping them stay visible and trusted where their customers spend time.",
      "We don't post just to fill a calendar. Every piece of content is planned around audience insights, engagement data, and brand consistency, ensuring your profiles grow followers who actually convert.",
    ],
    highlights: [
      "Profile Optimization",
      "Content Calendars",
      "Reels & Creatives",
      "Community Growth",
    ],
    image: "/home/social-growth.png",
    insetImage: "/smm-hero.png",
    floatingStat: { value: "10K+", label: "Monthly Engagements" },
    accentColor: "#7C3AED",
    href: "/services/social-media-optimization",
  },
];

// --- Sub-components ---

function TabVisual({ tab }: { tab: ServiceTab }) {
  return (
    <div className="relative w-full min-h-[380px] md:min-h-[460px]">
      {/* Accent glow behind the visual */}
      <div
        className="absolute inset-10 rounded-full blur-[90px] opacity-20 pointer-events-none"
        style={{ backgroundColor: tab.accentColor }}
      />

      {/* Main browser-framed image */}
      <div className="absolute top-0 right-0 w-[88%] rounded-[1.5rem] border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-300/50">
        <div className="h-9 bg-slate-100 flex items-center px-4 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>
        <img
          src={tab.image}
          alt={`${tab.subheading} illustration`}
          className="w-full h-[260px] md:h-[320px] object-cover"
        />
      </div>

      {/* Inset secondary image */}
      <div className="absolute bottom-0 left-0 w-[52%] rounded-2xl border-4 border-white overflow-hidden shadow-xl shadow-slate-400/40 bg-white">
        <img
          src={tab.insetImage}
          alt=""
          aria-hidden="true"
          className="w-full h-[140px] md:h-[170px] object-cover object-top"
        />
      </div>

      {/* Floating stat card */}
      <div className="absolute bottom-6 right-2 md:right-6 px-5 py-4 rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-300/50 backdrop-blur-xl">
        <span
          className="block text-2xl md:text-3xl font-bold"
          style={{ color: tab.accentColor }}
        >
          {tab.floatingStat.value}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          {tab.floatingStat.label}
        </span>
      </div>
    </div>
  );
}

export default function ServiceIntroTabs() {
  const [activeKey, setActiveKey] = useState(SERVICE_TABS[0].key);
  const activeTab =
    SERVICE_TABS.find((tab) => tab.key === activeKey) ?? SERVICE_TABS[0];

  return (
    <section className="bg-slate-50 text-slate-900 pt-32 pb-8 px-4 md:px-8 relative overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-blue-600" />
            <span className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em]">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-8 font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text pe-2 bg-gradient-to-r from-slate-900 to-slate-500">
              Expertise
            </span>
          </h2>

          {/* Tab System Layout */}
          <div
            role="tablist"
            aria-label="Our expertise"
            className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 border-b border-slate-200"
          >
            {SERVICE_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeKey === tab.key}
                aria-controls={`expertise-panel-${tab.key}`}
                id={`expertise-tab-${tab.key}`}
                onClick={() => setActiveKey(tab.key)}
                className={`pb-4 text-xs font-bold uppercase tracking-widest relative transition-all cursor-pointer whitespace-nowrap ${
                  activeKey === tab.key
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
                {activeKey === tab.key && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Active Tab Panel */}
        <div
          key={activeTab.key}
          role="tabpanel"
          id={`expertise-panel-${activeTab.key}`}
          aria-labelledby={`expertise-tab-${activeTab.key}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 p-8 md:p-12 xl:p-16 animate-[expertiseFadeIn_0.5s_ease-out]"
        >
          <style>{`
            @keyframes expertiseFadeIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              [role="tabpanel"] { animation: none !important; }
            }
          `}</style>

          {/* --- Left Side: Content --- */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
                <activeTab.icon
                  className="w-5 h-5"
                  style={{ color: activeTab.accentColor }}
                />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: activeTab.accentColor }}
              >
                {activeTab.heading}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-8">
              {activeTab.subheading}
            </h3>

            <div className="space-y-5 mb-8">
              {activeTab.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {activeTab.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-200 bg-slate-50 text-slate-600"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={activeTab.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-blue-600 transition-all duration-300 group"
              >
                Explore Now
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <div>
                <p className="text-lg font-bold text-white">Hello, everyone</p>
                <p className="text-sm italic font-bold text-slate-400">
                  Let&apos;s build together
                </p>
              </div> */}
            </div>
          </div>

          {/* --- Right Side: Visuals --- */}
          <TabVisual tab={activeTab} />
        </div>
      </div>
    </section>
  );
}
