"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Users,
  BarChart3,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export interface SocialCardData {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  metrics: {
    impressions: string;
    engagementRate: string;
    reach: string;
    shares: string;
    followersGained: string;
  };
  summary: string;
  highlights: string[];
}

const socialPortfolioItems: SocialCardData[] = [
  {
    id: "social-01",
    title: "Refreshing Summer Juice Campaign",
    category: "Brand Awareness & Reels",
    client: "Citrus Refresh Co.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "2.4M",
      engagementRate: "8.6%",
      reach: "1.8M",
      shares: "42.5K",
      followersGained: "+12.4K",
    },
    summary:
      "High-impact visual lifestyle Reels campaign designed around vibrant summer refreshment messaging, resulting in viral reach across Instagram & TikTok.",
    highlights: [
      "2.4M organic impressions achieved within 14 days",
      "Over 42,000 saves and shares driven by lifestyle reel templates",
      "8.6% engagement rate, outperforming industry benchmark by 3.2x",
    ],
  },
  {
    id: "social-02",
    title: "Minimalist Apparel Launch",
    category: "Product Launch & Content",
    client: "Aesthetic Apparel",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "1.1M",
      engagementRate: "6.4%",
      reach: "890K",
      shares: "18.2K",
      followersGained: "+8.1K",
    },
    summary:
      "Tactile photography grid showcase highlighting sustainable fabric composition and minimalist urban streetwear styling.",
    highlights: [
      "Drove 1,800+ direct website clicks via Instagram Link in Bio",
      "User-generated content campaign generated 300+ fan posts",
    ],
  },
  {
    id: "social-03",
    title: "Cyberpunk Headwear Drop",
    category: "Influencer Seeding",
    client: "NEO Cap Studio",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "3.8M",
      engagementRate: "11.2%",
      reach: "2.9M",
      shares: "95.0K",
      followersGained: "+24.5K",
    },
    summary:
      "High-contrast moody visual campaign utilizing micro-influencer seeding to position limited-edition streetwear gear.",
    highlights: [
      "Sold out full stock of 1,500 units in under 4 hours",
      "Influencer collaborative reels achieved 11.2% total engagement",
    ],
  },
  {
    id: "social-04",
    title: "Artisanal Canning Branding",
    category: "Package & Video Production",
    client: "Pure Botanical Draft",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "950K",
      engagementRate: "7.1%",
      reach: "720K",
      shares: "14.3K",
      followersGained: "+5.2K",
    },
    summary:
      "Behind-the-scenes craft narrative videos demonstrating the organic production process from source to sleek aluminum packaging.",
    highlights: [
      "Video completion rate hit 68% across Instagram Reels",
      "Generated 450+ wholesale vendor inquiries via Direct Messages",
    ],
  },
  {
    id: "social-05",
    title: "Urban Streetwear Editorial",
    category: "Model Editorial & Reels",
    client: "Vague Studio",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "4.2M",
      engagementRate: "9.8%",
      reach: "3.1M",
      shares: "112.0K",
      followersGained: "+31.0K",
    },
    summary:
      "High-fashion editorial video series shot in metropolitan locations focusing on movement and textured styling.",
    highlights: [
      "Viral audio sync drove 112K user shares",
      "Multiplied account follower base by 40% in 30 days",
    ],
  },
  {
    id: "social-06",
    title: "Eco Tote Bag Campaign",
    category: "Community & Sustainability",
    client: "Earth First Canvas",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "820K",
      engagementRate: "5.9%",
      reach: "610K",
      shares: "9.8K",
      followersGained: "+4.1K",
    },
    summary:
      "Serene outdoor photography set emphasizing zero-waste living and organic canvas production.",
    highlights: [
      "Drove 3,200 newsletter sign-ups via Instagram story polls",
      "Featured in top sustainable fashion curation accounts",
    ],
  },
  {
    id: "social-07",
    title: "Strawberry Splash Soda Drop",
    category: "3D Motion Design & Reels",
    client: "Fruity Burst Drinks",
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "5.6M",
      engagementRate: "12.4%",
      reach: "4.2M",
      shares: "185.0K",
      followersGained: "+45.0K",
    },
    summary:
      "3D hyper-realistic CGI motion graphics showcasing flying strawberries and splash physics around beverage packaging.",
    highlights: [
      "5.6M view count across Meta & TikTok platforms",
      "Achieved lowest CPA ($0.12) for direct ecommerce store visits",
    ],
  },
  {
    id: "social-08",
    title: "Organic Matcha Ritual",
    category: "Lifestyle & Aesthetic",
    client: "Kyoto Tea Co.",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "1.5M",
      engagementRate: "8.1%",
      reach: "1.1M",
      shares: "29.4K",
      followersGained: "+11.8K",
    },
    summary:
      "Soothing morning ritual video aesthetic designed to elevate brand perception and daily habit formation.",
    highlights: [
      "29.4K bookmark saves on recipe reel posts",
      "Boosted repeat customer order rate by 22%",
    ],
  },
  {
    id: "social-09",
    title: "Skincare Glow Serum",
    category: "Beauty & UGC Campaign",
    client: "Lumière Skin",
    image:
      "https://images.unsplash.com/photo-1608248597261-833258657640?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "2.9M",
      engagementRate: "7.9%",
      reach: "2.1M",
      shares: "54.0K",
      followersGained: "+19.2K",
    },
    summary:
      "Authentic before-and-after UGC skincare routine videos paired with high-clarity product photography.",
    highlights: [
      "Generated 850+ verified customer review videos",
      "Increased Shopify sales by 145% during launch week",
    ],
  },
  {
    id: "social-10",
    title: "Artisan Coffee Roasts",
    category: "Direct-to-Consumer Growth",
    client: "Roast & Brew Craft",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    metrics: {
      impressions: "1.8M",
      engagementRate: "6.8%",
      reach: "1.4M",
      shares: "22.1K",
      followersGained: "+9.6K",
    },
    summary:
      "Aesthetic bean roasting video stories focusing on origin sourcing and flavor profiling.",
    highlights: [
      "Built monthly coffee subscription base to 1,200 active members",
      "Achieved average ROAS of 4.2x on meta ad spend",
    ],
  },
];

const processSteps = [
  { step: "#01", title: "Strategy & Planning" },
  { step: "#02", title: "Design & Development" },
  { step: "#03", title: "Launch & Growth" },
  { step: "#04", title: "Ongoing Support" },
];

export default function SocialPortfolio() {
  const [activeCenterIndex, setActiveCenterIndex] = useState(3);
  const [selectedItem, setSelectedItem] = useState<SocialCardData | null>(null);

  const handleNext = () => {
    setActiveCenterIndex((prev) => (prev + 1) % socialPortfolioItems.length);
  };

  const handlePrev = () => {
    setActiveCenterIndex(
      (prev) => (prev - 1 + socialPortfolioItems.length) % socialPortfolioItems.length
    );
  };

  // Helper to compute 3D curved sphere perspective offsets
  const getCardTransform = (index: number) => {
    const total = socialPortfolioItems.length;
    let offset = index - activeCenterIndex;

    // Handle circular array wrapping
    if (offset < -total / 2) offset += total;
    if (offset > total / 2) offset -= total;

    const absOffset = Math.abs(offset);

    // Spherical Curve Parameters
    const translateX = offset * 115; // horizontal spacing
    const translateY = Math.pow(absOffset, 1.8) * 12; // downward curve at edges
    const rotateY = offset * -22; // Y rotation for spherical curvature
    const rotateZ = offset * -2.5; // slight Z rotation for arch tilt
    const scale = Math.max(0.72, 1 - absOffset * 0.08); // center card larger
    const zIndex = 30 - absOffset * 2;
    const opacity = absOffset > 3.5 ? 0 : Math.max(0.4, 1 - absOffset * 0.2);

    return {
      translateX,
      translateY,
      rotateY,
      rotateZ,
      scale,
      zIndex,
      opacity,
      isCenter: offset === 0,
    };
  };

  return (
    <section className="relative w-full text-slate-900 py-14 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-8xl mx-auto space-y-8 text-center">
        {/* Header Section matching design reference */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-[#f26522] tracking-wider uppercase">
            Behind the Designs
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Curious What Else We’ve Created?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Explore more brand identities, packaging, and digital design work in our extended portfolio.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setSelectedItem(socialPortfolioItems[activeCenterIndex])}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-800 shadow-sm hover:border-slate-800 hover:bg-slate-900 hover:text-white transition-all cursor-pointer group"
            >
              <span>See more Projects</span>
              <div className="w-5 h-5 rounded-full bg-[#f26522] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop / Tablet 3D Spherical Carousel */}
        <div className="hidden md:block relative h-[420px] lg:h-[480px] my-6 perspective-[1200px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {socialPortfolioItems.map((item, index) => {
              const transform = getCardTransform(index);

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: `${transform.translateX}%`,
                    y: `${transform.translateY}px`,
                    rotateY: transform.rotateY,
                    rotateZ: transform.rotateZ,
                    scale: transform.scale,
                    opacity: transform.opacity,
                    zIndex: Math.round(transform.zIndex),
                  }}
                  whileHover={transform.isCenter ? { rotateX: -4, y: -6 } : undefined}
                  style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    if (transform.isCenter) {
                      setSelectedItem(item);
                    } else {
                      setActiveCenterIndex(index);
                    }
                  }}
                  className={`absolute w-[220px] lg:w-[260px] h-[320px] lg:h-[370px] rounded-[12px] overflow-hidden shadow-xl cursor-pointer bg-slate-900 transform-gpu group transition-shadow duration-300 ${
                    transform.isCenter
                      ? "ring-1 ring-[#0051e9]/50 shadow-2xl scale-105"
                      : "hover:opacity-50"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-left text-white">
                    <span className="self-start px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-slate-200 border border-white/20">
                      {item.category}
                    </span>

                    <div>
                      <p className="text-[10px] text-[#f26522] font-bold uppercase tracking-wider">
                        {item.client}
                      </p>
                      <h3 className="text-base font-bold leading-tight text-white line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-slate-300 mt-2 font-medium flex items-center gap-1">
                        <span>Click to view results</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side Nav Triggers */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg border border-slate-200 backdrop-blur-md transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg border border-slate-200 backdrop-blur-md transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile View: Simple Touch-Friendly Slider */}
        <div className="block md:hidden my-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {socialPortfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="snap-center shrink-0 w-[72vw] max-w-[260px] h-[340px] rounded-[24px] overflow-hidden shadow-lg relative bg-slate-900 border border-slate-200"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-left text-white">
                  <span className="self-start px-3 py-1 rounded-full bg-black/50 text-[10px] font-bold text-slate-200">
                    {item.category}
                  </span>
                  <div>
                    <p className="text-[10px] text-[#f26522] font-bold uppercase">{item.client}</p>
                    <h3 className="text-base font-bold text-white line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Step Indicators matching reference footer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/80">
          {processSteps.map((s) => (
            <div key={s.step} className="text-center space-y-1">
              <span className="text-[11px] font-bold text-[#f26522]">{s.step}</span>
              <h4 className="text-xs font-semibold text-slate-800">{s.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pb-28 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 border border-slate-100 max-h-full md:max-h-[90vh]"
            >
              {/* Close button pinned to the top-right corner of the card */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-md hover:bg-white hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Left Image */}
              <div className="md:w-1/2 relative h-[200px] shrink-0 md:h-auto md:min-h-full bg-slate-900">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{selectedItem.title}</h3>
                </div>
              </div>

              {/* Modal Right Content */}
              <div className="md:w-1/2 min-h-0 p-5 sm:p-8 flex flex-col justify-between gap-6 overflow-y-auto overscroll-contain">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-[#f26522] uppercase tracking-wider">
                        {selectedItem.client}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        {selectedItem.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedItem.summary}
                  </p>

                  {/* Standard Social Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase">
                        <Eye className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Impressions</span>
                      </div>
                      <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                        {selectedItem.metrics.impressions}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Eng. Rate</span>
                      </div>
                      <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                        {selectedItem.metrics.engagementRate}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase">
                        <Users className="w-3.5 h-3.5 text-blue-500" />
                        <span>Reach</span>
                      </div>
                      <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                        {selectedItem.metrics.reach}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase">
                        <Share2 className="w-3.5 h-3.5 text-purple-500" />
                        <span>Shares</span>
                      </div>
                      <p className="text-lg font-extrabold text-slate-900 mt-0.5">
                        {selectedItem.metrics.shares}
                      </p>
                    </div>
                  </div>

                  {/* Campaign Highlights */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5">
                      {selectedItem.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f26522] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
                >
                  Close Results
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}