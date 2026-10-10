// Copy and data for the Bhopal page. It reuses the v3 Dubai lead page's sections (components/dubai-v3) with
// its own content. Unlike Dubai there's no lead sector: every kind of local business gets equal weight.
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { clients } from "@/data/clients";
import { testimonials } from "@/data/homeData";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "../ui";
import { creatives, type Industry, type Site } from "../dubai-v3/content";
import type { PlannerConfig } from "../dubai-v3/Planner";

export const BHOPAL_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Bhopal.",
);

/* ---------- planner ---------- */

/** Every sector on equal footing; the planner lays more than three out two to a row. */
export const industries: Industry[] = [
  { id: "retail", label: "Shop or showroom", icon: Store },
  { id: "healthcare", label: "Clinic or hospital", icon: Stethoscope },
  { id: "education", label: "School or coaching", icon: GraduationCap },
  { id: "food", label: "Restaurant or café", icon: UtensilsCrossed },
  { id: "real-estate", label: "Real estate", icon: Building2 },
  { id: "hospitality", label: "Hotel or events", icon: Hotel },
  { id: "ecommerce", label: "Online store", icon: ShoppingBag },
  { id: "manufacturing", label: "Manufacturing or B2B", icon: Factory },
  { id: "services", label: "Professional services", icon: Briefcase },
  { id: "other", label: "Something else", icon: Sparkles },
];

export const plannerConfig: PlannerConfig = {
  city: "Bhopal",
  source: "bhopal",
  featured: industries,
  others: [],
  budgets: [
    "Under ₹25,000",
    "₹25,000 – ₹75,000",
    "₹75,000 – ₹2 lakh",
    "Over ₹2 lakh",
    "Not sure yet",
  ],
  country: "in",
  phonePlaceholder: "98765 43210",
  whatsappHref: BHOPAL_WHATSAPP_HREF,
  phoneDisplay: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  youGet: [
    "The channels worth your budget, and how to split it",
    "Campaign and creative ideas for your business",
    "A 30-day launch plan with clear next steps",
  ],
};

/* ---------- real work ---------- */

/** Full-page screenshots in /public, one per sector, so no single industry leads. */
export const sites: Site[] = [
  {
    name: "Rehnoor Jewels",
    url: "rehnoorjewels.com",
    src: "/rehnoor-jewels-showcase.png",
    width: 1920,
    height: 10892,
    tag: "Jewellery e-commerce",
  },
  {
    name: "Dr. Himanshu Verma",
    url: "drhimanshuverma.com",
    src: "/himanshu-verma.png",
    width: 1920,
    height: 10811,
    tag: "Orthopaedic clinic",
  },
  {
    name: "Global Technologies India",
    url: "globaltechnologiesindia.com",
    src: "/global-tech.png",
    width: 1375,
    height: 6621,
    tag: "Industrial manufacturer",
  },
];

/** The hero's Instagram ad: a café shake, so with the jewellery site and clinic search the stage spans sectors. */
export const heroAd = creatives[6].src;

/** A mix of sectors for the hero's trust row. */
const PICK_CLIENTS = [
  "Rehnoor Jewels",
  "Dr. Himanshu Verma",
  "Global Technologies India",
  "Granth Dream Homes",
  "Destiny by Numbers",
  "Integrated Lognet",
];
export const heroClients = PICK_CLIENTS.map((n) =>
  clients.find((c) => c.name === n),
).filter((c): c is (typeof clients)[number] => Boolean(c));

/* ---------- the usual way vs us ---------- */

export const comparison = [
  {
    topic: "Who runs it",
    portal: "A freelancer juggling a dozen clients",
    own: "One team: strategist, designer, ads and SEO",
  },
  {
    topic: "What you pay for",
    portal: "Boosted posts, likes and followers",
    own: "Enquiries, calls and walk-ins",
  },
  {
    topic: "How you’re found",
    portal: "Only by people who already know you",
    own: "On Google Maps and search when Bhopal is looking",
  },
  {
    topic: "What you see",
    portal: "A screenshot, now and then",
    own: "A monthly report in plain numbers",
  },
];

/* ---------- sectors ---------- */

/** ids match the planner's industries, so each one answers its first question. */
export const sectors = [
  {
    id: "retail",
    name: "Shops & showrooms",
    desc: "Footfall from Google Maps and local ads.",
  },
  {
    id: "healthcare",
    name: "Clinics & hospitals",
    desc: "Booked appointments, not just profile views.",
  },
  {
    id: "education",
    name: "Schools & coaching",
    desc: "Admissions and demo-class enquiries every session.",
  },
  {
    id: "food",
    name: "Restaurants & cafés",
    desc: "Reservations, orders and reviews that bring people back.",
  },
  {
    id: "real-estate",
    name: "Real estate",
    desc: "Site-visit leads for projects and plots.",
  },
  {
    id: "hospitality",
    name: "Hotels & events",
    desc: "Direct bookings and wedding and event enquiries.",
  },
  {
    id: "ecommerce",
    name: "Online stores",
    desc: "Sales across India, tracked from click to checkout.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & B2B",
    desc: "Dealer, distributor and bulk-order enquiries.",
  },
  {
    id: "other",
    name: "Something else?",
    desc: "Tell us what you sell and we’ll plan it.",
  },
];

/* ---------- local ---------- */

/** Bhopal neighbourhoods we plan local campaigns around. */
export const areas = [
  "MP Nagar",
  "Arera Colony",
  "New Market",
  "Kolar Road",
  "Hoshangabad Road",
  "Bairagarh",
  "Indrapuri",
  "Shahpura",
  "Ayodhya Bypass",
  "Old Bhopal",
];

/** Other cities we reach from Bhopal. */
export const nearby = ["Indore", "Jabalpur", "Gwalior", "Sagar", "Vidisha"];

/* ---------- first 30 days ---------- */

export const firstMonth = [
  {
    when: "Day 1",
    title: "Strategy call",
    desc: "We learn your business, customers, budget and what has and hasn’t worked. In person at our Bhopal office if you like.",
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
    q: "How much does digital marketing cost in Bhopal?",
    a: "It depends on how many channels you need and how much you want to spend on ads. Most plans combine a monthly management fee with an ad budget paid directly to Google or Meta. Tell us your budget in the planner and we’ll build the plan around it.",
  },
  {
    q: "Do you work with my kind of business?",
    a: "Very likely. We work with shops, clinics, schools and coaching institutes, restaurants, real estate, hotels, online stores, manufacturers and professional services. The plan starts from your customers, not a fixed package.",
  },
  {
    q: "Can we meet you in person?",
    a: "Yes. Our Bhopal office is at Idgah Hills, and we’re happy to meet there or at your business. Most day-to-day work happens on WhatsApp and calls.",
  },
  {
    q: "How soon will we start getting leads?",
    a: "Paid campaigns usually start bringing in enquiries within the first weeks after launch. SEO and Google Maps rankings take longer, typically three to six months, but those leads keep coming without paying per click.",
  },
  {
    q: "Can you reach customers outside Bhopal?",
    a: "Yes. We target by area, so a campaign can stay within a few kilometres of your store or reach Indore, the rest of Madhya Pradesh or all of India.",
  },
];

/** Real Google reviews from the site's testimonial data, picked to cover leads, local SEO and social. */
const PICK = ["Manjot Singh", "Aparajita Pandey", "Chanchal Sikha"];
export const reviews = PICK.map((n) =>
  testimonials.find((t) => t.name === n),
).filter((t): t is (typeof testimonials)[number] => Boolean(t));
