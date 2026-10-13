// Copy and data for the v3 Dubai page: a single-goal landing page where every section leads to the growth-plan
// planner. Unsplash photos (images.unsplash.com is allowed in next.config).
import { Building2, KeyRound, Landmark, type LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import { testimonials } from "@/data/homeData";
import cgiCoffee from "../../Assets/gallery/cgi1.png";
import cgiInstagram from "../../Assets/gallery/cgi2.png";
import cgiDonut from "../../Assets/gallery/cgi3.png";
import cgiMeta from "../../Assets/gallery/cgi4.png";
import cgiBerries from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 04_36_48 PM.png";
import cgiShake from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 06_27_27 PM.png";
import cgiChefs from "../../Assets/gallery/ChatGPT Image May 31, 2025, 02_57_46 PM.png";
import postServices from "../../Assets/gallery/BigWig Static Post (4).png";
import postViral from "../../Assets/gallery/BigWig Static Post (5).png";

const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  /** white villa with an infinity pool: the hero's phone ad */
  villa: unsplash("1600596542815-ffad4c1539a9", 700),
};

/* ---------- real work ---------- */

export type Site = {
  name: string;
  url: string;
  src: string;
  width: number;
  height: number;
  tag: string;
};

/** Full-page screenshots in /public, shown scrolling inside a browser frame. */
export const sites: Site[] = [
  {
    name: "Mondus Properties",
    url: "mondusproperties.ae",
    src: "/mondus-webpage.png",
    width: 1920,
    height: 14611,
    tag: "Dubai real estate",
  },
  // {
  //   name: "Crownpoint Estates",
  //   url: "crownpointestates.com",
  //   src: "/crownpoint-estates-leads.png",
  //   width: 1920,
  //   height: 12291,
  //   tag: "Real estate lead site",
  // },public/portfolio/fortuneasia.webp
  {
    name: "Fortune Asia",
    url: "fortuneasia.ae",
    src: "/portfolio/fortuneasia.webp",
    width: 1920,
    height: 12291,
    tag: "Real estate lead site",
  },
  {
    name: "Ethical Infrastructures",
    url: "ethicalinfrastructures.com",
    src: "/ethical-infrastructures-showcase.png",
    width: 1588,
    height: 7903,
    tag: "Developer brand",
  },
];

export type Creative = { src: StaticImageData; alt: string };

/** Ad creatives and social posts made by the design team. */
export const creatives: Creative[] = [
  {
    src: cgiDonut,
    alt: "Ad creative: a giant glazed doughnut kiosk on a city street",
  },
  {
    src: cgiInstagram,
    alt: "Ad creative: a building shaped like the Instagram logo",
  },
  {
    src: cgiCoffee,
    alt: "Ad creative: a coffee cup the size of a café on a cobbled square",
  },
  {
    src: cgiChefs,
    alt: "Ad creative: miniature chefs making latte art in a giant cup",
  },
  { src: cgiMeta, alt: "Ad creative: a character flying with a drone" },
  { src: cgiBerries, alt: "Product shot: berries bursting over a meringue" },
  { src: cgiShake, alt: "Product shot: a strawberry milkshake splash" },
  { src: postServices, alt: "Social post listing services in bold type" },
  { src: postViral, alt: "Social post: we can make your brand go viral" },
];

export const heroCreatives = {
  ad: photos.villa,
  social: [cgiDonut, cgiChefs, cgiInstagram, cgiShake],
  cgi: cgiCoffee,
};

/** Granth Dream Homes, a real estate site we built: the services section's website example */
export const granthSite = { url: "Fortune Asia", src:"/portfolio/fortuneasia.webp" };

/* ---------- planner ---------- */

export type Industry = {
  id: string;
  label: string;
  hint?: string;
  icon?: LucideIcon;
  property?: boolean;
};

/** Property comes first and gets the big tiles; everything else is a chip underneath. */
export const propertyIndustries: Industry[] = [
  {
    id: "off-plan",
    label: "An off-plan launch",
    hint: "Sell units before handover",
    icon: Building2,
    property: true,
  },
  {
    id: "brokerage",
    label: "A brokerage or agency",
    hint: "Win buyers, sellers and listings",
    icon: KeyRound,
    property: true,
  },
  {
    id: "developer",
    label: "A developer brand",
    hint: "Build demand across projects",
    icon: Landmark,
    property: true,
  },
];

export const otherIndustries: Industry[] = [
  { id: "hospitality", label: "Hospitality & F&B" },
  { id: "healthcare", label: "Clinics & wellness" },
  { id: "retail", label: "Retail & e-commerce" },
  { id: "education", label: "Education" },
  { id: "services", label: "Professional services" },
  { id: "other", label: "Something else" },
];

export const allIndustries = [...propertyIndustries, ...otherIndustries];

/** `services` are names from the lead backend's service list (see contact/EnquiryForm). */
export type Goal = {
  id: string;
  label: string;
  hint: string;
  services: string[];
};

export const goals: Goal[] = [
  {
    id: "leads",
    label: "More qualified leads",
    hint: "Google & Meta ads",
    services: ["Performance Marketing"],
  },
  {
    id: "seo",
    label: "Ranking on Google",
    hint: "SEO and local search",
    services: ["SEO"],
  },
  {
    id: "website",
    label: "A website that converts",
    hint: "Sites and landing pages",
    services: ["Website Development"],
  },
  {
    id: "social",
    label: "Social media that sells",
    hint: "Content, reels and ads",
    services: ["SMM", "SMO"],
  },
  {
    id: "creative",
    label: "Standout creative",
    hint: "Graphic design and video editing",
    services: ["Graphic Designing", "Content Marketing"],
  },
  {
    id: "reputation",
    label: "Reviews and reputation",
    hint: "Google reviews and ORM",
    services: ["ORM"],
  },
];

export const budgets = [
  "Under AED 10,000",
  "AED 10,000 – 25,000",
  "AED 25,000 – 50,000",
  "Over AED 50,000",
  "Not sure yet",
];

/* ---------- portal leads vs your own ---------- */

export const comparison = [
  {
    topic: "Who gets the buyer",
    portal: "Every agent on the listing",
    own: "Only your sales team",
  },
  {
    topic: "Where they land",
    portal: "A portal page beside your competitors",
    own: "Your own project or listing page",
  },
  {
    topic: "How fast you reply",
    portal: "An email in a shared inbox",
    own: "A WhatsApp alert the moment they enquire",
  },
  {
    topic: "What you keep",
    portal: "Nothing once the listing ends",
    own: "Your audience, data and Google rankings",
  },
];

/* ---------- buyer markets ---------- */

/** Share of international purchasing activity in Dubai property, early 2026 (Khaleej Times). */
export const buyerMarkets = [
  { country: "India", share: 20.6 },
  { country: "United Kingdom", share: 13.3 },
  { country: "Egypt", share: 12.6 },
  { country: "United States", share: 9 },
  { country: "Pakistan", share: 6.9 },
];

/* ---------- property playbooks ---------- */

export type Playbook = {
  id: string;
  tab: string;
  title: string;
  desc: string;
  points: string[];
  cta: string;
  img: string;
  alt: string;
};

export const playbooks: Playbook[] = [
  {
    id: "off-plan",
    tab: "Off-plan launches",
    title: "Sell out the launch before the hoarding goes up.",
    desc: "A launch plan that builds a waitlist, fills the launch event and keeps enquiries coming through construction.",
    points: [
      "Project page with payment plan, floor plans and brochure download",
      "Campaigns in the buyer markets that matter for your project",
      "Video walkthroughs and launch creative for every placement",
      "Leads sent to your sales team on WhatsApp within moments",
    ],
    cta: "Plan my launch",
    img: unsplash("1486406146926-c627a92ad1ab", 1400),
    alt: "Glass residential towers seen from street level",
  },
  {
    id: "brokerage",
    tab: "Brokerages",
    title: "Your own buyers, not the portal’s.",
    desc: "Lead campaigns and search rankings that send buyers and sellers straight to your agents.",
    points: [
      "Listing and area pages that rank for searches like “apartments in Dubai Marina”",
      "Seller and buyer lead campaigns on Google and Meta",
      "Agent personal brands on Instagram, TikTok and LinkedIn",
      "Google Business Profile and review growth",
    ],
    cta: "Grow my brokerage",
    img: unsplash("1600596542815-ffad4c1539a9", 1400),
    alt: "White villa with an infinity pool under a blue sky",
  },
  {
    id: "developer",
    tab: "Developer brands",
    title: "A name buyers trust before they see the price.",
    desc: "Brand, content and search that make every future launch easier to sell.",
    points: [
      "Brand website that showcases every project in one place",
      "Long-term SEO and content for investor searches",
      "Video, photography and social content between launches",
      "Reputation management across Google and social",
    ],
    cta: "Build my brand",
    img: unsplash("1582407947304-fd86f028f716", 1400),
    alt: "Modern residential towers against a clear sky",
  },
];

/* ---------- other industries ---------- */

export const sectors = [
  {
    id: "hospitality",
    name: "Hospitality & F&B",
    desc: "Direct bookings, reservations and footfall.",
  },
  {
    id: "healthcare",
    name: "Clinics & wellness",
    desc: "Booked appointments from local search and ads.",
  },
  {
    id: "retail",
    name: "Retail & e-commerce",
    desc: "Online sales, tracked from click to checkout.",
  },
  {
    id: "education",
    name: "Education",
    desc: "Admissions and course enquiries, every intake.",
  },
  {
    id: "services",
    name: "Professional services",
    desc: "Consultation requests from decision-makers.",
  },
  {
    id: "other",
    name: "Something else?",
    desc: "Tell us what you sell and we’ll plan it.",
  },
];

/* ---------- first 30 days ---------- */

export const firstMonth = [
  {
    when: "Day 1",
    title: "Strategy call",
    desc: "We learn your projects, buyers, budget and what has and hasn’t worked.",
  },
  {
    when: "Week 1",
    title: "Audit and plan",
    desc: "Competitor, keyword and audience research turned into a written plan.",
  },
  {
    when: "Week 2",
    title: "Launch",
    desc: "Pages, tracking and campaigns go live, with WhatsApp lead alerts set up.",
  },
  {
    when: "Day 30",
    title: "First report",
    desc: "Leads, cost per lead and what we’ll change next month, in plain numbers.",
  },
];

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How much does digital marketing cost in Dubai?",
    a: "It depends on how many channels you need and how much you want to spend on ads. Most plans combine a monthly management fee with an ad budget paid directly to Google or Meta. Tell us your budget in the planner and we’ll build the plan around it.",
  },
  {
    q: "How soon will we start getting leads?",
    a: "Paid campaigns usually start bringing in enquiries within the first weeks after launch. SEO takes longer, typically three to six months to build strong rankings, but those leads keep coming without paying per click.",
  },
  {
    q: "Can you reach buyers outside the UAE?",
    a: "Yes. We plan campaigns by buyer market, so targeting, creative and timing match where your buyers actually live, whether that’s India, the UK, Europe or the GCC.",
  },
  {
    q: "Do you only work with real estate?",
    a: "Property is our main focus in Dubai, but we run the same lead-focused approach for hospitality, clinics, retail, education and professional services.",
  },
  {
    q: "How do leads reach our team?",
    a: "We can send every enquiry to WhatsApp, email or your CRM the moment it arrives, so your team can reply while the buyer is still interested.",
  },
];

/** Real Google reviews from the site's testimonial data, picked for lead generation, web and SEO results. */
const PICK = ["Manjot Singh", "Chetan Pandey", "Kashvi Chhabra"];
export const reviews = PICK.map((n) =>
  testimonials.find((t) => t.name === n),
).filter((t): t is (typeof testimonials)[number] => Boolean(t));
