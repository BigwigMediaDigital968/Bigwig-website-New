// Ad landing pages (squeeze pages) under /lead/<slug>. One entry per campaign: change the headline to match the
// ad the visitor clicked. The page has no site nav or footer (see isLanding in components/ui), and isn't indexed.

export type Campaign = {
  slug: string;
  /** page <title>, also shown in the lead message */
  title: string;
  /** should repeat the ad's promise, word for word where possible */
  headline: string;
  sub: string;
  points: string[];
  /** first option is the placeholder-free default; "Something else" is always added */
  businesses: string[];
  /** names from the lead backend's service list (see contact/EnquiryForm) */
  services: string[];
  whatsappMessage: string;
};

/** The default squeeze page, for any ad, city or business: /lead and /lead/free-growth-plan. */
export const DEFAULT_CAMPAIGN = "free-growth-plan";

export const campaigns: Record<string, Campaign> = {
  "free-growth-plan": {
    slug: "free-growth-plan",
    title: "Free growth plan for your business",
    headline: "Get more enquiries for your business.",
    sub: "Google Ads, Meta ads, SEO and Google Maps, planned around your customers and budget. Get a free written plan.",
    points: [
      "A call back within one working day",
      "A written plan: channels, budget and what to expect",
      "No lock-in. Ad accounts stay in your name",
    ],
    businesses: [
      "Manufacturer or exporter",
      "Real estate",
      "Clinic or hospital",
      "School or coaching",
      "Shop, showroom or restaurant",
      "Hotel or travel",
      "Online brand",
      "Professional services",
    ],
    services: ["Performance Marketing", "SEO"],
    whatsappMessage: "Hi BigWig Media Digital! I'd like a free growth plan for my business.",
  },
  ahmedabad: {
    slug: "ahmedabad",
    title: "Free growth plan for Ahmedabad businesses",
    headline: "More enquiries for your Ahmedabad business.",
    sub: "Google Ads, Meta ads and Google Maps, run by our team in Ahmedabad. Get a free written plan.",
    points: [
      "A call back within one working day",
      "A written plan: channels, budget and what to expect",
      "No lock-in. Ad accounts stay in your name",
    ],
    businesses: [
      "Manufacturer or exporter",
      "Real estate",
      "Clinic or hospital",
      "School or coaching",
      "Shop, showroom or restaurant",
      "Online brand",
    ],
    services: ["Performance Marketing", "SEO"],
    whatsappMessage: "Hi BigWig Media Digital! I'd like a free growth plan for my business in Ahmedabad.",
  },
};
