"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    brand: "Mondus Properties",
    industry: "Real Estate",
    service: "Web Development",
    country: "UAE",
    title: "Elevating Dubai's Luxury Real Estate Presence",
    description:
      "Bigwig Media Digital partnered with Mondus Properties to create a premium digital experience that showcases luxury properties, drives qualified investor leads, and strengthens their position as a trusted real estate advisor in Dubai's competitive property market.",
    image: "/mondus-webpage.png",
    stats: [
      { label: "Qualified Property Leads Generated", value: "3X" },
      { label: "Increase in Website Engagement", value: "185%" },
      { label: "Luxury Listings Showcased", value: "8,000+" },
    ],
    accentColor: "#D4AF37",
    tag: "Luxury Real Estate",
    url: "https://www.mondusproperties.ae/",
    author: "Mondus Properties Management",
    testimonial:
      "Bigwig Media Digital transformed our online presence into a high-converting luxury real estate platform that reflects our brand and attracts serious investors worldwide.",
    tagline: "Connecting Global Investors with Dubai's Finest Properties",
  },
  {
    id: 2,
    brand: "Dr. Himanshu Verma",
    industry: "Healthcare",
    service: "Web Development",
    country: "India",
    title: "Building a Premium Digital Presence for Advanced Orthopedic Care",
    description:
      "Bigwig Media Digital partnered with Dr. Himanshu Verma to create a modern healthcare platform that showcases orthopedic expertise, streamlines appointment bookings, and enhances patient trust through an engaging digital experience.",
    image: "/himanshu-verma.png",
    stats: [
      { label: "Patient Inquiry Growth", value: "240%" },
      { label: "Appointment Booking Increase", value: "3X" },
      { label: "Organic Search Visibility", value: "+180%" },
    ],
    accentColor: "#0F766E",
    tag: "Healthcare",
    url: "https://www.drhimanshuverma.com/",
    author: "Dr. Himanshu Verma",
    testimonial:
      "Bigwig Media Digital helped us establish a professional online presence that reflects our commitment to patient care while making it easier for patients to connect with us and book consultations.",
    tagline: "Transforming Patient Care Through Digital Excellence",
  },
  {
    id: 3,
    brand: "Global Technologies India",
    industry: "Engineering",
    service: "Corporate Website & Lead Generation",
    country: "India",
    title:
      "Digitizing Industrial Excellence for Global Manufacturing Solutions",
    description:
      "Bigwig Media Digital partnered with Global Technologies India to develop a modern industrial website that showcases engineering expertise, automation solutions, and manufacturing capabilities while generating high-quality B2B inquiries from domestic and international markets.",
    image: "/global-tech.png",
    stats: [
      { label: "Increase in Qualified B2B Leads", value: "320%" },
      { label: "Growth in Website Engagement", value: "210%" },
      { label: "Industrial Solutions Showcased", value: "50+" },
    ],
    accentColor: "#1E40AF",
    tag: "Industrial Technology",
    url: "https://www.globaltechnologiesindia.com/",
    author: "Management Team, Global Technologies India",
    testimonial:
      "Bigwig Media Digital successfully transformed our digital presence into a powerful business development platform that effectively communicates our technical expertise and generates valuable industry inquiries.",
    tagline: "Engineering Digital Growth for Industrial Innovation",
  },
  {
    id: 4,
    brand: "Destiny By Numberrs",
    industry: "Astrology",
    service: "Brand Website & Lead Generation",
    country: "India",
    title:
      "Transforming a Personal Numerology Brand into a Digital Growth Engine",
    description:
      "Bigwig Media Digital partnered with Destiny By Numberrs to create a premium digital platform that showcases numerology expertise, streamlines consultation bookings, and attracts clients seeking personalized life, career, relationship, and business guidance.",
    image: "/destiny-by-number.png",
    stats: [
      { label: "Consultation Booking Growth", value: "4X" },
      { label: "Organic Traffic Increase", value: "220%" },
      { label: "Lead Conversion Improvement", value: "175%" },
    ],
    accentColor: "#7C3AED",
    tag: "Personal Branding",
    url: "https://www.destinybynumberrs.com/",
    author: "Team Destiny By Numberrs",
    testimonial:
      "Bigwig Media Digital helped us establish a strong digital presence that reflects our brand philosophy while making it easier for clients worldwide to discover our services and book consultations.",
    tagline: "Guiding Life Decisions Through the Power of Numbers",
  },
  {
    id: 5,
    brand: "Ethical Infrastructures",
    industry: "Real Estate",
    service: "Web Development",
    country: "India",
    title:
      "Driving Premium Real Estate Leads Through a Modern Digital Experience",
    description:
      "Bigwig Media Digital partnered with Ethical Infrastructures to build a high-converting real estate platform that showcases premium residential and commercial properties across Delhi NCR while streamlining lead acquisition, property discovery, and client engagement.",
    image: "/ethical-infrastructures-showcase.png",
    stats: [
      { label: "Qualified Property Inquiries", value: "300%+" },
      { label: "Property Categories Showcased", value: "50+" },
      { label: "Growth in User Engagement", value: "210%" },
    ],
    accentColor: "#0F766E",
    tag: "Real Estate",
    url: "https://www.ethicalinfrastructures.com/",
    author: "Sorabh Chopra, Founder",
    testimonial:
      "Bigwig Media Digital helped us transform our online presence into a powerful real estate lead-generation platform. The new experience reflects our commitment to transparency while helping buyers, sellers, and investors connect with the right opportunities.",
    tagline:
      "Building Trust, Driving Growth, and Connecting People with Premium Properties",
  },
  {
    id: 6,
    brand: "Pearls India",
    industry: "eCommerce",
    service: "SEO",
    country: "India",
    title: "Scaling Organic Revenue for a Growing eCommerce Brand",
    description:
      "Bigwig Media Digital partnered with Pearls India to execute a comprehensive SEO strategy focused on technical optimization, category-page rankings, content marketing, and high-intent keyword targeting. The campaign significantly improved organic visibility, increased qualified traffic, and drove sustainable revenue growth through search engines.",
    image: "/pearls-india-showcase.png",
    stats: [
      { label: "Organic Traffic Growth", value: "320%" },
      { label: "Keywords Ranked on Page 1", value: "500+" },
      { label: "Increase in Organic Revenue", value: "245%" },
    ],
    accentColor: "#0F4C81",
    tag: "SEO",
    url: "https://pearlsindia.co.in/",
    author: "Marketing Team, Pearls India",
    testimonial:
      "Bigwig Media Digital helped us achieve remarkable search visibility and consistent organic growth. Their SEO strategy significantly increased our online reach, qualified traffic, and eCommerce sales.",
    tagline: "Driving Sustainable eCommerce Growth Through Search Excellence",
  },
  {
    id: 7,
    brand: "Rehnoor Jewels",
    industry: "eCommerce",
    service: "Web Development",
    country: "India",
    title: "Crafting a High-Converting Jewelry eCommerce Experience",
    description:
      "Bigwig Media Digital partnered with Rehnoor Jewels to design and develop a premium eCommerce platform that showcases gold-plated jewelry collections, streamlines online shopping, and drives sales through a mobile-first user experience optimized for conversions and customer trust.",
    image: "/rehnoor-jewels-showcase.png",
    stats: [
      { label: "Happy Customers Served", value: "50K+" },
      { label: "Unique Jewelry Designs", value: "500+" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    accentColor: "#D4AF37",
    tag: "eCommerce",
    url: "https://www.rehnoorjewels.com/",
    author: "Team Rehnoor Jewels",
    testimonial:
      "Bigwig Media Digital helped us transform our online store into a premium shopping experience that perfectly reflects our brand while making it easier for customers across India to discover and purchase our collections.",
    tagline: "Bringing Timeless Jewelry Elegance to the Digital World",
  },
  {
    id: 8,
    brand: "Crownpoint Estates",
    industry: "Luxury Real Estate",
    service: "Local SEO & Performance Marketing",
    country: "India",
    title: "Building a Predictable Lead Engine for Gurgaon Real Estate",
    description:
      "Through advanced local SEO, location-specific landing pages, technical optimization, and conversion-focused content, Bigwig Media Digital transformed Crownpoint Estates into a highly visible real estate brand that consistently attracts buyers, sellers, investors, and NRI clients searching for premium properties in Gurgaon.",
    image: "/crownpoint-estates-leads.png",
    stats: [
      { label: "Local Search Visibility Growth", value: "420%" },
      { label: "Monthly Qualified Leads", value: "500+" },
      { label: "Organic Conversion Rate Increase", value: "225%" },
    ],
    accentColor: "#1E3A8A",
    tag: "Lead Generation",
    url: "https://www.crownpointestates.com/",
    author: "Crownpoint Estates Team",
    testimonial:
      "The SEO and lead generation strategy transformed our digital presence into a reliable source of high-quality property inquiries and investment opportunities.",
    tagline: "Where Search Visibility Meets Real Estate Growth",
  },
  {
    id: 12,
    brand: "Rehnoor Jewels",
    industry: "eCommerce",
    service: "SEO",
    country: "India",
    title: "Dominating Search Rankings in the Online Jewelry Market",
    description:
      "Through strategic SEO, content optimization, and technical improvements, Bigwig Media Digital helped Rehnoor Jewels strengthen its online presence, outrank competitors, and attract high-intent shoppers actively searching for premium jewelry collections.",
    image: "/portfolio/rehnoor-jewels-showcase.png",
    stats: [
      { label: "Keyword Visibility Growth", value: "380%" },
      { label: "Organic Conversion Increase", value: "215%" },
      { label: "Monthly Organic Visitors", value: "100K+" },
    ],
    accentColor: "#B8860B",
    tag: "SEO",
    url: "https://www.rehnoorjewels.com/",
    author: "Digital Growth Team",
    testimonial:
      "The SEO campaign delivered exceptional results, helping us reach more customers organically while reducing dependence on paid advertising.",
    tagline: "Building Long-Term eCommerce Growth Through Search Excellence",
  },
];


// Website showcase only: SEO / marketing case studies stay in the data but aren't shown here
const websiteItems = portfolioItems.filter((item) => /web/i.test(item.service));

const TABS = [
  "All",
  ...Array.from(new Set(websiteItems.map((item) => item.industry))),
];

// --- Sub-components ---

function AutoScrollImage({ src, active }: { src: string; active: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const calculateDistance = () => {
      const distance = img.offsetHeight - container.offsetHeight;
      setScrollDistance(distance > 0 ? distance : 0);
    };

    // Use ResizeObserver to reliably monitor size modifications of the flexible wrapper
    const resizeObserver = new ResizeObserver(() => {
      calculateDistance();
    });

    resizeObserver.observe(container);
    if (img.complete) {
      calculateDistance();
    } else {
      img.onload = calculateDistance;
    }

    return () => resizeObserver.disconnect();
  }, [src]);

  const animationDuration =
    scrollDistance > 0 ? Math.max(6, scrollDistance / 60) : 0;

  return (
    <div ref={containerRef} className="absolute inset-0 pt-9 overflow-hidden">
      <img
        ref={imgRef}
        src={src}
        draggable={false}
        style={
          {
            "--scroll-dist": scrollDistance,
            animationDuration: `${animationDuration}s`,
          } as React.CSSProperties
        }
        className={`w-full object-cover vertical-align-top ${
          active && scrollDistance > 0 ? "animate-yoyo-scroll" : ""
        }`}
        alt="Portfolio Preview"
      />
    </div>
  );
}

function PortfolioCard({
  item,
  active,
}: {
  item: (typeof portfolioItems)[0];
  active: boolean;
}) {
  return (
    <div className="h-full lg:h-[75vh] lg:min-h-[540px] grid grid-cols-1 lg:grid-cols-5 items-stretch rounded-[2rem] border border-slate-200 overflow-hidden bg-white shadow-sm">
      {/* --- Left Side: Content Box (Spans 3 Columns) --- */}
      <div className="w-full lg:col-span-3 p-8 md:p-10 xl:p-12 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-slate-200">
        <div>
          {/* Brand & Tagline Header Row */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
              <div
                className="w-5 h-5 rounded-full border-4"
                style={{ borderColor: item.accentColor }}
              />
            </div>
            <h4 className="text-xl font-bold tracking-tighter text-slate-900 uppercase">
              {item.brand}
            </h4>
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {item.tag}
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 font-medium mb-6 max-w-2xl leading-relaxed">
            {item.tagline}
          </p>

          {/* Core Metrics Array: always one row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 py-5 border-y border-slate-200">
            {item.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 min-w-0">
                <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[10px] xl:text-[11px] uppercase tracking-wider xl:tracking-widest text-slate-500 font-bold leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote Block */}
          <div className="relative pl-6 border-l-2 border-blue-500/50 italic">
            <p className="text-slate-600 text-sm md:text-base mb-2 lg:line-clamp-3">
              "{item.testimonial}"
            </p>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              — {item.author}
            </span>
          </div>
        </div>

        {/* CTA Case Study Link Trigger */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-blue-600 transition-all duration-300 group"
          >
            Request A Case Study Demo
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* --- Right Side: Visual Device Interface (Spans 2 Columns) --- */}
      <div className="w-full lg:col-span-2 relative min-h-[450px] lg:min-h-0 bg-slate-100 overflow-hidden">
        {/* Absolute Window Header Frame Top-bar */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-100/95 backdrop-blur-md flex items-center px-4 z-20 border-b border-slate-200">
          <div className="flex gap-1.5 mr-4">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.brand} website`}
            className="flex-1 min-w-0 flex items-center gap-1.5 text-[10px] text-slate-500 font-mono hover:text-blue-600 transition-colors"
          >
            <span className="truncate">{item.url}</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>

        <AutoScrollImage src={item.image} active={active} />
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [progress, setProgress] = useState({ left: 0, width: 100 });
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });

  const items =
    activeTab === "All"
      ? websiteItems
      : websiteItems.filter((item) => item.industry === activeTab);

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    const card = el.firstElementChild as HTMLElement | null;
    if (card) {
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      setActiveIndex(Math.round(scrollLeft / (card.offsetWidth + gap)));
    }
    setProgress({
      left: (scrollLeft / scrollWidth) * 100,
      width: Math.min(100, (clientWidth / scrollWidth) * 100),
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    const observer = new ResizeObserver(updateProgress);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, [activeTab, updateProgress]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  // Mouse drag-to-scroll; touch already swipes natively through scroll-snap
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!drag.current.active || !el) return;
    const delta = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(delta) > 5) {
      drag.current.moved = true;
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    const el = trackRef.current;
    if (!drag.current.active || !el) return;
    drag.current.active = false;
    el.style.scrollSnapType = "";
    el.style.cursor = "";
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") scrollByCard(1);
    if (e.key === "ArrowLeft") scrollByCard(-1);
  };

  const atStart = progress.left <= 0.5;
  const atEnd = progress.left + progress.width >= 99.5;
  const hasOverflow = progress.width < 99.5;

  return (
    <section className="bg-slate-50 text-slate-900 py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <style>{`
        @keyframes continuousYoyoScroll {
          0%, 10% { transform: translateY(0); }
          50% { transform: translateY(calc(-1px * var(--scroll-dist))); }
          90%, 100% { transform: translateY(0); }
        }
        .animate-yoyo-scroll {
          animation: continuousYoyoScroll 8s ease-in-out infinite;
        }
        .portfolio-track { scrollbar-width: none; }
        .portfolio-track::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .animate-yoyo-scroll { animation: none; }
        }
      `}</style>

      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-blue-600" />
            <span className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em]">
              Website Showcase
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-8 font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text pe-2 bg-gradient-to-r from-slate-900 to-slate-500">
              Portfolio
            </span>
          </h2>

          {/* Industry Tabs */}
          <div
            role="tablist"
            aria-label="Portfolio industries"
            className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2 border-b border-slate-200"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-bold uppercase tracking-widest relative transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Swipeable card track */}
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Website portfolio"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={(e) => {
            // a drag shouldn't count as a click on a card link
            if (drag.current.moved) {
              e.preventDefault();
              e.stopPropagation();
              drag.current.moved = false;
            }
          }}
          className={`portfolio-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mb-2 select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-3xl ${
            hasOverflow ? "cursor-grab" : ""
          }`}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className="shrink-0 snap-start w-[92%] md:w-[94%]"
            >
              <PortfolioCard item={item} active={i === activeIndex} />
            </div>
          ))}
        </div>

        {hasOverflow && (
          <div className="mt-6 flex items-center gap-6">
            {/* Scroll progress */}
            <div
              className="relative h-1 flex-1 rounded-full bg-slate-200 overflow-hidden"
              aria-hidden="true"
            >
              <div
                className="absolute inset-y-0 rounded-full bg-blue-600 transition-[left,width] duration-200"
                style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Previous projects"
                className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-800 flex items-center justify-center hover:border-slate-900 hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Next projects"
                className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-800 flex items-center justify-center hover:border-slate-900 hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
