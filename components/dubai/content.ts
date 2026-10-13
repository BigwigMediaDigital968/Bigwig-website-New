// Copy and photos for the Dubai page sections. Unsplash (images.unsplash.com is allowed in next.config).

const BASE = "/digital-marketing-agency-dubai-uae";

/** What each service row lists when it opens, keyed by the service page link in dubaiData. */
export const serviceDetails: Record<string, { bullets: string[] }> = {
  [`${BASE}/seo-services-in-dubai-uae`]: {
    bullets: [
      "Arabic and English keyword research for UAE searches",
      "Google Business Profile set-up for each Dubai location",
      "Technical audits, site speed and Core Web Vitals fixes",
      "Links and mentions from UAE publications and directories",
    ],
  },
  [`${BASE}/social-media-marketing-services-in-dubai-uae`]: {
    bullets: [
      "Monthly content calendars for Instagram, TikTok, Snapchat and LinkedIn",
      "Bilingual posts and reels for Ramadan, DSF and National Day",
      "Community management and replies within working hours",
      "Paid social campaigns with a monthly results report",
    ],
  },
  [`${BASE}/ppc-services-in-dubai-uae`]: {
    bullets: [
      "Google Search, Performance Max and YouTube campaigns",
      "Meta, TikTok and Snapchat ads for UAE audiences",
      "Conversion tracking with GA4, pixels and offline leads",
      "Weekly bid and budget tuning, reported in AED",
    ],
  },
  [`${BASE}/content-marketing-services-in-dubai-uae`]: {
    bullets: [
      "Blogs and landing page copy in Arabic and English",
      "Topic clusters planned around what your buyers search",
      "Case studies and LinkedIn thought leadership",
      "Scripts for short-form video and brand films",
    ],
  },
  [`${BASE}/website-designing-services-in-dubai-uae`]: {
    bullets: [
      "Fast, mobile-first sites on Next.js or WordPress",
      "Arabic right-to-left layouts alongside English",
      "Lead forms, WhatsApp chat and CRM connections",
      "SEO-ready structure, hosting and monthly upkeep",
    ],
  },
  [`${BASE}/email-marketing-services-in-dubai-uae`]: {
    bullets: [
      "Welcome, abandoned-cart and win-back automations",
      "Segmented newsletters by interest, spend and emirate",
      "A/B tests on subject lines, offers and send times",
      "SPF, DKIM and DMARC set-up so emails reach the inbox",
    ],
  },
  [`${BASE}/social-media-optimization-services-in-dubai-uae`]: {
    bullets: [
      "Profile, bio and highlight clean-up on every platform",
      "Hashtag and posting-time plans for UAE audiences",
      "Grid layouts and link-in-bio pages that convert",
      "Quarterly engagement audits with clear next steps",
    ],
  },
  [`${BASE}/graphic-designing-services-in-dubai-uae`]: {
    bullets: [
      "Logos, brand identities and usage guidelines",
      "Ad creatives sized for every placement",
      "Reels and TikTok edits with motion graphics",
      "Product, food and property shoot retouching",
    ],
  },
  [`${BASE}/affiliate-marketing-services-in-dubai-uae`]: {
    bullets: [
      "Recruiting coupon, cashback and content partners in the GCC",
      "Tracking links, commission plans and payout rules",
      "Fraud checks on clicks, leads and orders",
      "Monthly partner reports with top performers",
    ],
  },
  [`${BASE}/influencer-marketing-services-in-dubai-uae`]: {
    bullets: [
      "Creator shortlists by niche, audience and engagement",
      "Creators holding a valid UAE advertiser permit",
      "Briefs, contracts, approvals and posting schedules",
      "Reach, clicks and sales tracked per creator",
    ],
  },
  [`${BASE}/orm-services-in-dubai-uae`]: {
    bullets: [
      "Review monitoring across Google, Tripadvisor and social",
      "Replies to reviews in Arabic and English",
      "Campaigns that ask happy customers for reviews",
      "A response plan ready before a crisis hits",
    ],
  },
};

export const industries = [
  {
    name: "Real estate",
    desc: "Off-plan launches, broker lead funnels and listing campaigns that fill viewing calendars.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    alt: "A modern white villa with a long swimming pool",
  },
  {
    name: "Hospitality & tourism",
    desc: "Direct bookings for hotels, tours and desert experiences, for visitors and residents alike.",
    img: "https://images.unsplash.com/photo-1739900225202-5d7b707f2f5c?auto=format&fit=crop&w=1200&q=80",
    alt: "A red 4x4 driving over the dunes on a Dubai desert safari",
  },
  {
    name: "Retail & e-commerce",
    desc: "Mall footfall, online stores and marketplace listings, all tracked to sales.",
    img: "https://images.unsplash.com/photo-1562280963-8a5475740a10?auto=format&fit=crop&w=900&q=80",
    alt: "Shoppers on several levels of the Dubai Mall",
  },
  {
    name: "Food & beverage",
    desc: "Launches, delivery-app visibility and content made for Instagram.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Plated dishes and wine glasses on a busy restaurant table",
  },
  {
    name: "Beauty & wellness",
    desc: "Clinic and salon bookings driven by reviews, reels and local search.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    alt: "A client receiving a facial treatment at a skin clinic",
  },
  {
    name: "Tech & startups",
    desc: "Product launches, app installs and B2B pipelines for growing UAE startups.",
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
    alt: "A smartphone showing a shopping app on a white desk",
  },
];
