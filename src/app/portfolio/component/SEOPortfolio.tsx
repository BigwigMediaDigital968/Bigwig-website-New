"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import {
  TrendingUp,
  Search,
  ArrowUpRight,
  Globe,
  Award,
  BarChart2,
  CheckCircle2,
  Zap,
  ChevronRight,
  Layers,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export interface SEOMetric {
  label: string;
  value: string;
}

export interface SEOProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  url?: string;
  image?: string;
  overview?: string;
  keyMetrics: SEOMetric[];
  techPillars: Array<{ name: string; tag?: string; icon?: string }>;
  featuredDeliverables: Array<{ title: string; desc: string }>;
  highlights: string[];
}

const seoProjectsData: SEOProject[] = [
  {
    id: "seo-01",
    title: "Search Visibility for a Noida Restaurant",
    subtitle: "Growing impressions, traffic, and calls in 3 months",
    category: "Hospitality & Dining",
    client: "Stellar Binge",
    url: "https://www.stellarbinge.com/",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Engineered local SEO and search visibility campaigns to drive massive traffic, impression growth, and direct customer phone calls.",
    keyMetrics: [
      { label: "ORGANIC TRAFFIC", value: "+395%" },
      { label: "IMPRESSIONS", value: "+1,533%" },
      { label: "CTR", value: "+309%" },
      { label: "CALLS FROM GOOGLE", value: "+224%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      { name: "Local SEO", tag: "Google Business Profile", icon: "globe" },
      { name: "Content Strategy", tag: "Search-Led Content", icon: "search" },
      { name: "Social Media", tag: "Reels & Reach", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Local SEO Engine",
        desc: "Profile views +454% and interactions +217% on Google",
      },
      {
        title: "Social Growth Engine",
        desc: "Reel-led content on Instagram, Facebook and YouTube, followers +62%",
      },
    ],
    highlights: [
      "Search impressions grew more than sixteen times in 3 months",
      "Improved average ranking position by 38.3%",
      "Google Business Profile views rose 454%",
    ],
  },
  {
    id: "seo-02",
    title: "Putting a Premium Club on the Local Map",
    subtitle:
      "Greater Noida's members-only club, found for the right local searches",
    category: "Clubs & Leisure",
    client: "The Stellar Gymkhana",
    url: "https://www.stellargymkhana.com/",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Positioned Greater Noida's top members-only club at the forefront of local search intent across organic and map packs.",
    keyMetrics: [
      { label: "ORGANIC TRAFFIC", value: "+143%" },
      { label: "CLICKS", value: "+342%" },
      { label: "IMPRESSIONS", value: "+571%" },
      { label: "CALLS FROM GOOGLE", value: "+427%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      { name: "Local SEO", tag: "Google Business Profile", icon: "globe" },
      { name: "Content Strategy", tag: "Search-Led Content", icon: "search" },
      { name: "Social Media", tag: "Premium Content", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Local SEO Engine",
        desc: "Interactions +778% and profile views +376% on Google",
      },
      {
        title: "Social Growth Engine",
        desc: "Premium content on Instagram, Facebook, YouTube and LinkedIn; followers +78%",
      },
    ],
    highlights: [
      "Calls from Google more than quadrupled in 3 months",
      "Improved average ranking position by 31.6%",
      "Click-through rate improved by 11.3%",
    ],
  },
  {
    id: "seo-03",
    title: "High-Intent Property Searches for a 24-Year-Old Firm",
    subtitle:
      "Delhi, Gurugram and Goa: 65+ projects and 2,000+ clients. Results over 3 months.",
    category: "Real Estate",
    client: "Khalsa Property Dealers",
    url: "https://www.khalsapropertydealers.com/",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Captured high-intent commercial and residential real estate searches across Delhi, Gurugram, and Goa.",
    keyMetrics: [
      { label: "ORGANIC CLICKS", value: "+1,133%" },
      { label: "IMPRESSIONS", value: "+872%" },
      { label: "AVG. POSITION", value: "+20.9%" },
      { label: "PROFILE VIEWS", value: "+248%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      { name: "Local SEO", tag: "Google Business Profile", icon: "globe" },
      { name: "Content Strategy", tag: "Property Searches", icon: "search" },
      { name: "Social Media", tag: "Reels & Reach", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Local SEO Engine",
        desc: "Interactions +194% and calls +51% in 3 months",
      },
      {
        title: "Social Growth Engine",
        desc: "Profile clicks +633% and followers +59% across four platforms",
      },
    ],
    highlights: [
      "More than eleven times the organic clicks in 3 months",
      "Search impressions up 872%",
      "Average keyword position improved by 20.9%",
    ],
  },
  {
    id: "seo-04",
    title: "Turning Search Traffic into Orders",
    subtitle: "Jewellery, accessories and women's fashion in a crowded market",
    category: "E-Commerce & Retail",
    client: "Pearls India",
    url: "https://pearlsindia.co.in/",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Transformed high-intent fashion and jewellery keywords into direct e-commerce transactions and catalog revenue.",
    keyMetrics: [
      { label: "ORDERS", value: "+380%" },
      { label: "ORGANIC TRAFFIC", value: "+391%" },
      { label: "CLICKS", value: "+328%" },
      { label: "IMPRESSIONS", value: "+623%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      {
        name: "Content Strategy",
        tag: "Product & Category Pages",
        icon: "layers",
      },
      { name: "Keyword Research", tag: "High-Intent Terms", icon: "search" },
      { name: "Social Media", tag: "Instagram Growth", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Smart Visibility Engine",
        desc: "Keyword and on-page work that lifted CTR by 66.7%",
      },
      {
        title: "Social Growth Engine",
        desc: "Instagram users +185%, profile clicks +160%, followers +22%",
      },
    ],
    highlights: [
      "Orders nearly quintupled in 3 months",
      "Website users up 391%",
      "Search impressions up 623%",
    ],
  },
  {
    id: "seo-05",
    title: "From a Brand-New Website to Page-1 Visibility",
    subtitle:
      "Built from scratch, the site went from zero to 648 organic clicks and 69.4K search impressions in 3 months.",
    category: "Healthcare & Clinics",
    client: "Dr Himanshu Verma",
    url: "https://www.drhimanshuverma.com/",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Designed and optimized a fast, trust-first medical website from ground zero to achieve page-1 rankings in 90 days.",
    keyMetrics: [
      { label: "CLICKS GROWTH (3 MONTHS)", value: "+26%" },
      { label: "IMPRESSIONS GROWTH (3 MONTHS)", value: "+28%" },
      { label: "CTR (3 MONTHS)", value: "0.9%" },
      { label: "CTR (LATEST WEEK)", value: "1.4%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      { name: "Content Strategy", tag: "Patient Searches", icon: "search" },
      { name: "Keyword Research", tag: "High-Intent Terms", icon: "layers" },
      { name: "Reporting", tag: "Search Console Tracking", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Website Build",
        desc: "A fast, trust-first site designed for patient searches from day one",
      },
      {
        title: "Reporting Loop",
        desc: "Weekly Search Console tracking to scale what's working",
      },
    ],
    highlights: [
      "Launched with no search history and held an average position of 7.0 (page 1) within 3 months",
      "Daily clicks rose 26% and daily impressions rose 28% from the earlier months to the latest month",
      "Click-through rate climbed from 0.9% to 1.4% in the latest week",
    ],
  },
  {
    id: "seo-06",
    title: "From a Brand-New Website to Page-1 Visibility",
    subtitle:
      "Built from scratch, the site went from zero to 135 organic clicks and 14.7K search impressions in 3 months.",
    category: "Healthcare & Clinics",
    client: "Dr Manish Aggarwal",
    url: "https://www.drmanishaggarwal.com/",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Built and scaled a clinical website from scratch, elevating search positions from page 2 into top page 1 rankings.",
    keyMetrics: [
      { label: "CLICKS GROWTH (3 MONTHS)", value: "+61%" },
      { label: "IMPRESSIONS GROWTH (3 MONTHS)", value: "+37%" },
      { label: "AVG. POSITION (3 MONTHS)", value: "+31%" },
      { label: "CTR (LATEST MONTH)", value: "1.0%" },
    ],
    techPillars: [
      { name: "Technical SEO", tag: "Site Health & Speed", icon: "zap" },
      { name: "Content Strategy", tag: "Patient Searches", icon: "search" },
      { name: "Keyword Research", tag: "High-Intent Terms", icon: "layers" },
      { name: "Reporting", tag: "Search Console Tracking", icon: "award" },
    ],
    featuredDeliverables: [
      {
        title: "Website Build",
        desc: "A fast, credible site designed for patient searches from day one",
      },
      {
        title: "Reporting Loop",
        desc: "Weekly Search Console tracking to scale what's working",
      },
    ],
    highlights: [
      "Launched with no search history and moved from page 2 to page 1 within 3 months",
      "Daily clicks rose 61% and daily impressions rose 37% from the earlier months to the latest month",
      "Average position improved by 31%",
    ],
  },
];

// Helper to render relevant icon based on metric label
function getMetricIcon(label: string) {
  const uppercaseLabel = label.toUpperCase();
  if (
    uppercaseLabel.includes("TRAFFIC") ||
    uppercaseLabel.includes("GROWTH") ||
    uppercaseLabel.includes("ORDER")
  ) {
    return <TrendingUp className="w-4 h-4 text-emerald-400" />;
  }
  if (
    uppercaseLabel.includes("CLICK") ||
    uppercaseLabel.includes("SEARCH") ||
    uppercaseLabel.includes("CTR")
  ) {
    return <Search className="w-4 h-4 text-cyan-300" />;
  }
  if (uppercaseLabel.includes("IMPRESSION") || uppercaseLabel.includes("VIEW")) {
    return <Globe className="w-4 h-4 text-blue-300" />;
  }
  return <BarChart2 className="w-4 h-4 text-amber-300" />;
}

export default function SEOPortfolio() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    seoProjectsData[0].id
  );

  const activeProject =
    seoProjectsData.find((p) => p.id === selectedProjectId) || seoProjectsData[0];

  return (
    <section className="relative overflow-x-clip text-gray-900 py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto space-y-8 md:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#023859] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#4e6cba]" />
            <span>SEO Performance Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#011c40] tracking-tight">
            Proven Organic Search Excellence
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Explore how BigWig Media Digital leverages technical precision, topical authority, and continuous optimization to drive organic revenue across industries.
          </p>
        </div>

        {/* Main Reference Layout Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
          {/* LEFT SIDEBAR: Sticky Fixed Vertical Project Navigation */}
          <div className="lg:col-span-3 sticky top-16 lg:top-24 bg-[#011c40] text-white rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl space-y-2 border border-[#023859] z-20">
            <p className="hidden lg:block px-3 pb-2 text-md font-semibold uppercase tracking-wider text-cyan-300 border-b border-white/10">
              Select Case Study
            </p>

            {/* Scrollable list with scrollbars hidden across Browsers */}
            <div className="flex gap-2 overflow-x-auto lg:block lg:space-y-1.5 lg:gap-0 lg:max-h-[calc(100vh-260px)] lg:min-h-[380px] lg:overflow-x-visible lg:overflow-y-auto lg:pr-1 lg:pb-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {seoProjectsData.map((project) => {
                const isSelected = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProjectId(project.id)}
                    className={`shrink-0 lg:shrink lg:w-full text-left p-2.5 lg:p-3.5 rounded-2xl transition-all duration-300 group flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? "bg-gradient-to-r from-[#023859] to-[#011c40] text-white border-cyan-400/50 shadow-md translate-x-1"
                        : "bg-transparent text-gray-300 border-transparent hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block ${
                          isSelected ? "text-cyan-300" : "text-gray-400 group-hover:text-cyan-200"
                        }`}
                      >
                        {project.category}
                      </span>
                      <h3
                        className={`text-md font-medium leading-snug line-clamp-1 ${
                          isSelected ? "text-white" : "text-gray-200"
                        }`}
                      >
                        {project.client}
                      </h3>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                        isSelected
                          ? "text-cyan-300 translate-x-1"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Subtle Gradient Fade & Animated Downward Chevron Indicator */}
            <div className="hidden lg:flex absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#011c40] via-[#011c40]/90 to-transparent rounded-b-3xl pointer-events-none items-end justify-center pb-2">
              <ChevronDown className="w-5 h-5 text-cyan-300 animate-bounce opacity-90" />
            </div>
          </div>

          {/* RIGHT SHOWCASE: Feature Card */}
          <div className="lg:col-span-9">
            <TiltCard max={2.5} hoverScale={1.005} radius="0.75rem">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20, rotateY: -18, rotateX: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, rotateY: 18, rotateX: -6, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformPerspective: 1400 }}
                  className="bg-[#023859] text-white rounded-xl p-4 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-[#011c40] space-y-8"
                >
                  {/* Background Ambient Glow */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

                  {/* Top Action Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold tracking-wider uppercase border border-white/15">
                        {activeProject.category}
                      </span>
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-medium text-white mt-3">
                        {activeProject.title}
                      </h2>
                      <p className="text-sm text-cyan-100/80 mt-1 font-medium">
                        {activeProject.subtitle}
                      </p>
                    </div>

                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white text-[#023859] hover:text-[#011c40] transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-lg group"
                      aria-label="Visit Website"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#011c40] transition-colors" />
                    </a>
                  </div>

                  {/* Project Image Preview & Dynamic Key Metrics Tiles */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 items-stretch">
                    {/* Image Card */}
                    <div className="md:col-span-5 relative h-[220px] md:h-auto rounded-2xl overflow-hidden shadow-lg border border-white/15 group">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011c40]/90 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-widest">
                          Client Partner
                        </span>
                        <p className="text-sm font-bold text-white leading-tight">
                          {activeProject.client}
                        </p>
                      </div>
                    </div>

                    {/* Dynamic Stat Tiles Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 gap-3">
                      {activeProject.keyMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between"
                        >
                          <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold uppercase">
                            {getMetricIcon(metric.label)}
                            <span className="line-clamp-1">{metric.label}</span>
                          </div>
                          <p className="text-2xl sm:text-3xl font-medium text-white mt-2">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Proven Tech Expertise */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      Proven SEO Engineering Pillars
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeProject.techPillars.map((pillar, idx) => (
                        <div
                          key={idx}
                          className="bg-white text-gray-900 p-4 rounded-2xl shadow-md flex flex-col items-center text-center justify-center space-y-1.5 transition-transform hover:-translate-y-1"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#023859]/10 text-[#023859] flex items-center justify-center">
                            {pillar.icon === "zap" && <Zap className="w-4 h-4" />}
                            {pillar.icon === "layers" && <Layers className="w-4 h-4" />}
                            {pillar.icon === "search" && <Search className="w-4 h-4" />}
                            {pillar.icon === "award" && <Award className="w-4 h-4" />}
                            {pillar.icon === "globe" && <Globe className="w-4 h-4" />}
                          </div>
                          <span className="text-xs font-extrabold text-[#011c40]">
                            {pillar.name}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-500">
                            {pillar.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Featured Deliverables */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      Implemented SEO Modules
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeProject.featuredDeliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-[#011c40]/80 border border-white/10 flex items-center justify-between gap-3 shadow-md hover:border-cyan-400/40 transition-all"
                        >
                          <div>
                            <p className="text-sm font-bold text-white">{item.title}</p>
                            <p className="text-xs text-gray-300 mt-0.5">{item.desc}</p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#011c40]/60 border border-white/10 space-y-2 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Execution Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {activeProject.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-200 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}