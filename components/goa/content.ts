// Copy and data for the Goa page. Its own design (see GoaPage): the Goan house. Arched windows with carepa
// (oyster-shell) lattice frame the hero and the work gallery; the page is built around Goa's season.
import { testimonials } from "@/data/homeData";
import { whatsappHref } from "../ui";

export const GOA_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Goa.",
);

/* ---------- photos (images.unsplash.com is allowed in next.config) ---------- */

export const photos = {
  /** the view through the hero's arched window */
  hero: { src: "", alt: "" },
};

/* ---------- the Goa year ---------- */

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export type Phase = {
  id: string;
  name: string;
  /** month indexes (0 = Jan) this phase covers, in order */
  months: number[];
  tone: "peak" | "shoulder" | "monsoon" | "build";
  what: string;
  we: string[];
};

/** The season, from the visitor's side: what's happening, and what we do about it. */
export const phases: Phase[] = [
  {
    id: "peak",
    name: "Peak season",
    months: [9, 10, 11, 0, 1, 2],
    tone: "peak",
    what: "Shacks open, charters land, and every search is ‘near me’. The months most of your year depends on.",
    we: [
      "Most of the ad budget goes here, by market and language",
      "Google Maps, reviews and Instagram kept fresh every week",
      "Every enquiry sent to WhatsApp the moment it arrives",
    ],
  },
  {
    id: "shoulder",
    name: "Shoulder months",
    months: [3, 4],
    tone: "shoulder",
    what: "Fewer flights, more weekend drives from Mumbai, Pune and Bengaluru.",
    we: [
      "Short-break offers for drive-in markets",
      "Bring past guests back with email and WhatsApp",
      "Collect the season’s reviews and photos",
    ],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: [5, 6],
    tone: "monsoon",
    what: "Shacks close and the coast goes quiet. The best time to fix what peak season had no time for.",
    we: [
      "New website or booking pages, built and tested",
      "SEO and content that ranks by October",
      "Green-season stays and monsoon offers",
    ],
  },
  {
    id: "pre",
    name: "Pre-season",
    months: [7, 8],
    tone: "build",
    what: "It’s still raining, but winter trips are being planned. Be the place people find first.",
    we: [
      "Early-bird campaigns in the markets that fly in",
      "Retarget everyone who looked last year",
      "Creative shot and ready before the rush",
    ],
  },
];

/* ---------- work gallery ---------- */

export type Work = {
  id: string;
  name: string;
  kind: string;
  stat: string;
  statLabel: string;
  img: string;
  width: number;
  height: number;
  href: string;
};

/** Real sites and numbers from the portfolio (src/app/portfolio/component/PortfolioGrid.tsx). */
export const work: Work[] = [
  {
    id: "mondus",
    name: "Mondus Properties",
    kind: "Luxury real estate",
    stat: "3×",
    statLabel: "qualified property leads",
    img: "/mondus-webpage.png",
    width: 1920,
    height: 14611,
    href: "https://www.mondusproperties.ae/",
  },
  {
    id: "crownpoint",
    name: "Crownpoint Estates",
    kind: "Luxury real estate",
    stat: "420%",
    statLabel: "growth in local search visibility",
    img: "/crownpoint-estates-leads.png",
    width: 1920,
    height: 12291,
    href: "https://www.crownpointestates.com/",
  },
  {
    id: "himanshu",
    name: "Dr. Himanshu Verma",
    kind: "Orthopaedic clinic",
    stat: "3×",
    statLabel: "more appointments booked",
    img: "/himanshu-verma.png",
    width: 1920,
    height: 10811,
    href: "https://www.drhimanshuverma.com/",
  },
  {
    id: "rehnoor",
    name: "Rehnoor Jewels",
    kind: "Jewellery brand",
    stat: "380%",
    statLabel: "more keyword visibility",
    img: "/rehnoor-jewels-showcase.png",
    width: 1920,
    height: 10892,
    href: "https://www.rehnoorjewels.com/",
  },
  {
    id: "ethical",
    name: "Ethical Infrastructures",
    kind: "Real estate developer",
    stat: "300%+",
    statLabel: "qualified property enquiries",
    img: "/ethical-infrastructures-showcase.png",
    width: 1588,
    height: 7903,
    href: "https://www.ethicalinfrastructures.com/",
  },
  {
    id: "pearls",
    name: "Pearls India",
    kind: "Online store",
    stat: "500+",
    statLabel: "keywords on Google’s first page",
    img: "/pearls-india-showcase.png",
    width: 1588,
    height: 8499,
    href: "https://pearlsindia.co.in/",
  },
];

/* ---------- the plan form ---------- */

/** `services` are names from the lead backend's service list (see contact/EnquiryForm). */
export const kinds = [
  { id: "stay", label: "Hotel or boutique stay" },
  { id: "villa", label: "Villa or homestay" },
  { id: "food", label: "Café, restaurant or shack" },
  { id: "real-estate", label: "Real estate" },
  { id: "wellness", label: "Wellness or retreat" },
  { id: "events", label: "Weddings or events" },
  { id: "tours", label: "Water sports or tours" },
  { id: "brand", label: "Local brand" },
  { id: "other", label: "Something else" },
];

export const goals = [
  { id: "direct", label: "Direct bookings", services: ["Performance Marketing", "Website Development"] },
  { id: "enquiries", label: "More enquiries", services: ["Performance Marketing"] },
  { id: "footfall", label: "Footfall and reviews", services: ["SEO", "ORM"] },
  { id: "social", label: "Instagram that sells", services: ["SMM", "SMO"] },
];

/** For the "where are you" select: north to south. */
export const areas = [
  {
    region: "North Goa",
    places: [
      "Arambol, Mandrem, Morjim",
      "Vagator, Anjuna",
      "Baga, Calangute, Candolim",
      "Siolim",
      "Assagao",
      "Mapusa",
    ],
  },
  { region: "Central Goa", places: ["Panjim", "Old Goa", "Vasco"] },
  { region: "South Goa", places: ["Margao", "Colva, Benaulim", "Palolem, Agonda"] },
];

/* ---------- OTA calculator ---------- */

/** Typical OTA commission range; the slider's limits. Sources: Medianama 2017, Skift 2019, Preno (Booking.com). */
export const commission = { min: 10, max: 30, initial: 18 };
/** Monthly OTA booking value, in rupees. */
export const bookings = { min: 100000, max: 3000000, step: 50000, initial: 600000 };

/* ---------- reviews ---------- */

/** Every real Google review from the site's testimonial data, the lead-generation one first (fills the strip). */
export const reviews = [...testimonials].sort(
  (a, b) => Number(b.name === "Manjot Singh") - Number(a.name === "Manjot Singh"),
);

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How do I get more direct bookings and pay OTAs less?",
    a: "A fast booking page on your own site, Google’s free booking links and Hotel Ads, and campaigns that bring back guests who found you on an OTA. OTAs stay useful for reach; the goal is that repeat and high-intent guests book with you.",
  },
  {
    q: "What should we do during the monsoon?",
    a: "Build. It’s the time to fix your website, write the content that ranks by October, and run green-season offers to weekend travellers from Mumbai, Pune and Bengaluru.",
  },
  {
    q: "When should pre-season campaigns start?",
    a: "Around August and September. Many winter trips are planned then, so campaigns that start in October are already late for a share of your guests.",
  },
  {
    q: "Can you reach foreign tourists, like Russian or UK travellers?",
    a: "Yes. We run ads by country and language, timed to when charters and flights start, with creative and landing pages in the right language.",
  },
  {
    q: "How do we rank on Google Maps for searches like ‘café near Anjuna’?",
    a: "A complete Google Business Profile, a steady flow of genuine reviews, fresh photos and the same name, address and number everywhere online. We set it up and keep it maintained.",
  },
  {
    q: "Can we meet you in Goa?",
    a: "Yes. Our office is in Prabhu Chambers, Mapusa. We’re happy to meet there or at your property.",
  },
];
