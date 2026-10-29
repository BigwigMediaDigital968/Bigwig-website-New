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

export interface SEOProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  url: string;
  image: string;
  overview: string;
  keyMetrics: {
    trafficGrowth: string;
    topKeywords: string;
    domainAuthority: string;
    conversionIncrease: string;
  };
  techPillars: {
    name: string;
    tag: string;
    icon: string;
  }[];
  featuredDeliverables: {
    title: string;
    desc: string;
  }[];
  highlights: string[];
}

const seoProjectsData: SEOProject[] = [
  {
    id: "seo-01",
    title: "Organic Search Authority for FinTech Enterprise",
    subtitle: "Scaling High-Intent Financial Keywords Across India & UAE",
    category: "FinTech & Banking",
    client: "CapitalPulse Financial",
    url: "https://example.com/capitalpulse",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Engineered an enterprise technical SEO restructuring and topical authority architecture that scaled organic search visibility for competitive loan and investment keywords.",
    keyMetrics: {
      trafficGrowth: "+340%",
      topKeywords: "120+ Page 1",
      domainAuthority: "DA 68",
      conversionIncrease: "+185%",
    },
    techPillars: [
      { name: "Technical SEO", tag: "Core Web Vitals", icon: "zap" },
      { name: "Schema Markup", tag: "Financial JSON-LD", icon: "layers" },
      { name: "Content Strategy", tag: "Topical Clusters", icon: "search" },
      { name: "Link Building", tag: "High-DA PR", icon: "award" },
    ],
    featuredDeliverables: [
      { title: "Smart SEO Engine", desc: "Automated schema & dynamic internal linking structure" },
      { title: "Lead Funnel Sync", desc: "Organic landing pages optimized for organic loan signups" },
    ],
    highlights: [
      "Achieved #1 position for 45 primary financial search terms in 6 months",
      "Reduced bounce rate by 28% through Core Web Vitals optimization",
      "Generated 14,000+ monthly organic inbound leads",
    ],
  },
  {
    id: "seo-02",
    title: "Global E-Commerce Organic Traffic Surge",
    subtitle: "Multi-Region Shopify SEO & Category Architecture",
    category: "E-Commerce & Retail",
    client: "UrbanStyle International",
    url: "https://example.com/urbanstyle",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Resolved canonical issues, optimized product category taxonomy, and implemented international Hreflang targeting for a multi-currency retail brand.",
    keyMetrics: {
      trafficGrowth: "+520%",
      topKeywords: "210+ Page 1",
      domainAuthority: "DA 54",
      conversionIncrease: "+210%",
    },
    techPillars: [
      { name: "International SEO", tag: "Hreflang Tags", icon: "globe" },
      { name: "Product Schema", tag: "Merchant Center", icon: "layers" },
      { name: "Speed Tuning", tag: "Sub-1s LCP", icon: "zap" },
    ],
    featuredDeliverables: [
      { title: "Catalog Optimizer", desc: "Automated META & ALT generation for 8,000+ SKUs" },
      { title: "Rich Results Hub", desc: "Dynamic review star & price snippet integrations" },
    ],
    highlights: [
      "210+ keywords ranking in top 3 Google search results",
      "Organic e-commerce revenue grew by 3.4x year-over-year",
    ],
  },
  {
    id: "seo-03",
    title: "Healthcare & Clinical Care Patient Acquisition",
    subtitle: "Local SEO & Hyper-Targeted Medical Intent Search",
    category: "Healthcare & Clinics",
    client: "AuraCare Multispecialty",
    url: "https://example.com/auracare",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Executed E-E-A-T compliant medical content strategies alongside multi-location Google Business Profile optimization across Delhi NCR.",
    keyMetrics: {
      trafficGrowth: "+280%",
      topKeywords: "85+ Page 1",
      domainAuthority: "DA 42",
      conversionIncrease: "+160%",
    },
    techPillars: [
      { name: "E-E-A-T Optimization", tag: "Doctor Verification", icon: "award" },
      { name: "Local SEO 3-Pack", tag: "GBP Management", icon: "globe" },
      { name: "Medical Schema", tag: "HealthTopic", icon: "layers" },
    ],
    featuredDeliverables: [
      { title: "Local Maps Ranker", desc: "Hyper-local geo-targeted neighborhood landing pages" },
      { title: "Patient Appointment Sync", desc: "Instant consultation booking via search snippets" },
    ],
    highlights: [
      "Secured top 3 Google Maps Pack placements for 14 hospital locations",
      "Increased monthly appointment bookings by 180%",
    ],
  },
  {
    id: "seo-04",
    title: "SaaS B2B Search Dominance Strategy",
    subtitle: "Product-Led SEO & High-Intent Commercial Funnels",
    category: "B2B SaaS & Tech",
    client: "CloudSync Systems",
    url: "https://example.com/cloudsync",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Created a scalable programmatic SEO hub targeting alternative competitor keywords and product comparison queries.",
    keyMetrics: {
      trafficGrowth: "+410%",
      topKeywords: "160+ Page 1",
      domainAuthority: "DA 61",
      conversionIncrease: "+290%",
    },
    techPillars: [
      { name: "Programmatic SEO", tag: "Comparison Pages", icon: "search" },
      { name: "Technical Audit", tag: "JavaScript Rendering", icon: "zap" },
      { name: "B2B Backlinks", tag: "SaaS Guest Posts", icon: "award" },
    ],
    featuredDeliverables: [
      { title: "Competitor Comparison Hub", desc: "High-converting vs pages targeting decision makers" },
      { title: "API Docs SEO", desc: "Indexed developer documentation to drive tech lead signups" },
    ],
    highlights: [
      "Captured top positions for high-intent SaaS alternative search terms",
      "Grew organic demo requests by 290%",
    ],
  },
  {
    id: "seo-05",
    title: "Real Estate Portal Organic Scaling",
    subtitle: "Programmatic Location Architecture & Portal SEO",
    category: "Real Estate & PropTech",
    client: "PropRealm Realty",
    url: "https://example.com/proprealm",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Structured thousands of dynamic property listing pages using clean XML sitemap indexing and instant crawl budget optimization.",
    keyMetrics: {
      trafficGrowth: "+630%",
      topKeywords: "310+ Page 1",
      domainAuthority: "DA 58",
      conversionIncrease: "+240%",
    },
    techPillars: [
      { name: "Dynamic Indexing", tag: "Crawl Budget Sync", icon: "zap" },
      { name: "Property Schema", tag: "RealEstateListing", icon: "layers" },
      { name: "Geo-Taxonomy", tag: "City/Locality Hubs", icon: "globe" },
    ],
    featuredDeliverables: [
      { title: "Geo-Hierarchy Map", desc: "Structured breadcrumb & locality navigation engine" },
      { title: "Instant Ingest SEO", desc: "New property listings indexed within minutes" },
    ],
    highlights: [
      "Grew monthly organic visitors to over 850,000",
      "Ranked #1 for premium residential locality search terms",
    ],
  },
  {
    id: "seo-06",
    title: "EdTech & Learning Portal Visibility Drive",
    subtitle: "Course Catalog SEO & Knowledge Graph Alignment",
    category: "Education & EdTech",
    client: "SkillApex Academy",
    url: "https://example.com/skillapex",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Transformed course searchability by structuring Educational Course JSON-LD and optimizing student career outcome guides.",
    keyMetrics: {
      trafficGrowth: "+310%",
      topKeywords: "95+ Page 1",
      domainAuthority: "DA 49",
      conversionIncrease: "+175%",
    },
    techPillars: [
      { name: "Course Schema", tag: "Edu JSON-LD", icon: "layers" },
      { name: "Intent Clusters", tag: "Career Guides", icon: "search" },
    ],
    featuredDeliverables: [
      { title: "Skill Matrix SEO", desc: "Interlinked career roadmap content hubs" },
    ],
    highlights: [
      "Captured top rank for certifications & tech career courses",
      "Increased organic student enrollment by 175%",
    ],
  },
  {
    id: "seo-07",
    title: "Luxury Hospitality & Tourism SEO",
    subtitle: "Multi-Language Travel Destination Search Strategy",
    category: "Hospitality & Travel",
    client: "Grand Heritage Resorts",
    url: "https://example.com/grandheritage",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Optimized hotel booking pages and destination guide hubs to drive direct organic room bookings and bypass OTA commissions.",
    keyMetrics: {
      trafficGrowth: "+260%",
      topKeywords: "70+ Page 1",
      domainAuthority: "DA 45",
      conversionIncrease: "+195%",
    },
    techPillars: [
      { name: "Hotel Schema", tag: "Accommodation LD", icon: "layers" },
      { name: "Local SEO", tag: "Geo-Targeting", icon: "globe" },
    ],
    featuredDeliverables: [
      { title: "Direct Booking Funnel", desc: "SEO landing pages synced directly to booking engine" },
    ],
    highlights: [
      "Reduced dependency on third-party OTAs by 32%",
      "Achieved 195% increase in direct resort bookings via Google",
    ],
  },
  {
    id: "seo-08",
    title: "Logistics & B2B Supply Chain Optimization",
    subtitle: "Enterprise B2B Search Infrastructure",
    category: "Logistics & B2B",
    client: "Velox Freight Logistics",
    url: "https://example.com/veloxfreight",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Targeted high-ticket commercial freight and supply chain search intents across regional industrial hubs.",
    keyMetrics: {
      trafficGrowth: "+190%",
      topKeywords: "55+ Page 1",
      domainAuthority: "DA 39",
      conversionIncrease: "+140%",
    },
    techPillars: [
      { name: "B2B Intent SEO", tag: "Commercial Queries", icon: "search" },
      { name: "Speed Optimization", tag: "Fast Load Times", icon: "zap" },
    ],
    featuredDeliverables: [
      { title: "Service Route Pages", desc: "Inter-city freight lane landing pages" },
    ],
    highlights: [
      "Generated 350+ enterprise quote requests organically",
      "Ranked top 3 for regional commercial transport terms",
    ],
  },
  {
    id: "seo-09",
    title: "Automotive & Dealership Organic Growth",
    subtitle: "Multi-Store Vehicle Inventory SEO",
    category: "Automotive & Retail",
    client: "DriveNation Motors",
    url: "https://example.com/drivenation",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Built dynamic inventory feed SEO pages that allowed users to search used and new cars with live stock status.",
    keyMetrics: {
      trafficGrowth: "+380%",
      topKeywords: "140+ Page 1",
      domainAuthority: "DA 51",
      conversionIncrease: "+220%",
    },
    techPillars: [
      { name: "Vehicle Schema", tag: "Automotive JSON", icon: "layers" },
      { name: "Local SEO", tag: "Dealership Maps", icon: "globe" },
    ],
    featuredDeliverables: [
      { title: "Live Stock SEO Engine", desc: "Indexable inventory filters for models and specs" },
    ],
    highlights: [
      "380% surge in organic test drive booking requests",
      "Captured top rankings for regional used car search queries",
    ],
  },
  {
    id: "seo-10",
    title: "Legal & Corporate Law Firm Search Scale",
    subtitle: "High-Authority Legal Content & Local Citations",
    category: "Legal & Professional Services",
    client: "Vanguard Legal Partners",
    url: "https://example.com/vanguardlegal",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Optimized attorney profile pages and high-value practice area content to attract high-retainer corporate clients.",
    keyMetrics: {
      trafficGrowth: "+230%",
      topKeywords: "65+ Page 1",
      domainAuthority: "DA 47",
      conversionIncrease: "+150%",
    },
    techPillars: [
      { name: "Legal Schema", tag: "Attorney LD", icon: "layers" },
      { name: "Authority Content", tag: "E-E-A-T Compliance", icon: "award" },
    ],
    featuredDeliverables: [
      { title: "Practice Area Hubs", desc: "In-depth legal guides driving corporate inquiry forms" },
    ],
    highlights: [
      "Secured #1 ranking for corporate law terms in Delhi NCR",
      "Increased qualified legal consultation requests by 150%",
    ],
  },
];

export default function SEOPortfolio() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(seoProjectsData[0].id);

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

            {/* Scrollable list with scrollbars hidden across Chrome, Safari, Firefox & Edge */}
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

                {/* Project Image Preview & Key Metrics Banner */}
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

                  {/* 4-Stat Metric Box */}
                  <div className="md:col-span-7 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold uppercase">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>Organic Traffic</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-medium text-white mt-2">
                        {activeProject.keyMetrics.trafficGrowth}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold uppercase">
                        <Search className="w-4 h-4 text-cyan-300" />
                        <span>Keywords</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-medium text-white mt-2">
                        {activeProject.keyMetrics.topKeywords}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold uppercase">
                        <Globe className="w-4 h-4 text-blue-300" />
                        <span>Authority</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-medium text-white mt-2">
                        {activeProject.keyMetrics.domainAuthority}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold uppercase">
                        <BarChart2 className="w-4 h-4 text-amber-300" />
                        <span>Conversions</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-medium text-white mt-2">
                        {activeProject.keyMetrics.conversionIncrease}
                      </p>
                    </div>
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