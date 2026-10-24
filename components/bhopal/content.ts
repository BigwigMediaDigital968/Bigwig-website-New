// Copy and data for the Bhopal page. Its own design (see BhopalPage): the visitor describes their business in
// one sentence, and the rest of the page reacts to it. No lead sector: every kind of local business is equal.
import type { StaticImageData } from "next/image";
import { clients } from "@/data/clients";
import { testimonials } from "@/data/homeData";
import { whatsappHref } from "../ui";
import cgiCoffee from "../../Assets/gallery/cgi1.png";
import cgiInstagram from "../../Assets/gallery/cgi2.png";
import cgiDonut from "../../Assets/gallery/cgi3.png";
import cgiMeta from "../../Assets/gallery/cgi4.png";
import cgiBerries from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 04_36_48 PM.png";
import cgiShake from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 06_27_27 PM.png";
import cgiChefs from "../../Assets/gallery/ChatGPT Image May 31, 2025, 02_57_46 PM.png";
import postServices from "../../Assets/gallery/BigWig Static Post (4).png";
import postViral from "../../Assets/gallery/BigWig Static Post (5).png";

export const BHOPAL_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Bhopal.",
);

/* ---------- the sentence ---------- */

/** `label` reads inside "I run …"; `search` is what a customer types into Google Maps. */
export type Business = { id: string; label: string; search: string; noun: string };

export const businesses: Business[] = [
  { id: "shop", label: "a shop", search: "shop", noun: "shop" },
  { id: "showroom", label: "a showroom", search: "showroom", noun: "showroom" },
  { id: "clinic", label: "a clinic", search: "clinic", noun: "clinic" },
  { id: "hospital", label: "a hospital", search: "hospital", noun: "hospital" },
  { id: "school", label: "a school", search: "school", noun: "school" },
  { id: "coaching", label: "a coaching institute", search: "coaching classes", noun: "institute" },
  { id: "restaurant", label: "a restaurant", search: "restaurant", noun: "restaurant" },
  { id: "cafe", label: "a café", search: "cafe", noun: "café" },
  { id: "salon", label: "a salon", search: "salon", noun: "salon" },
  { id: "gym", label: "a gym", search: "gym", noun: "gym" },
  { id: "hotel", label: "a hotel", search: "hotel", noun: "hotel" },
  { id: "real-estate", label: "a real estate firm", search: "property dealer", noun: "firm" },
  { id: "ecommerce", label: "an online store", search: "online store", noun: "store" },
  { id: "manufacturing", label: "a factory", search: "manufacturer", noun: "factory" },
  { id: "services", label: "a professional firm", search: "consultant", noun: "firm" },
  { id: "other", label: "a business", search: "business", noun: "business" },
];

/** Neighbourhoods, placed on the page's map. x/y are percentages of the map box (roughly, not to scale). */
export type Area = { id: string; label: string; x: number; y: number };

export const areas: Area[] = [
  { id: "mp-nagar", label: "MP Nagar", x: 69, y: 50 },
  { id: "arera", label: "Arera Colony", x: 62, y: 67 },
  { id: "new-market", label: "New Market", x: 53, y: 57 },
  { id: "old-bhopal", label: "Old Bhopal", x: 52, y: 29 },
  { id: "kolar", label: "Kolar Road", x: 38, y: 86 },
  { id: "hoshangabad", label: "Hoshangabad Road", x: 80, y: 80 },
  { id: "bairagarh", label: "Bairagarh", x: 13, y: 21 },
  { id: "indrapuri", label: "Indrapuri", x: 87, y: 36 },
  { id: "shahpura", label: "Shahpura", x: 51, y: 79 },
  { id: "ayodhya", label: "Ayodhya Bypass", x: 80, y: 15 },
];

/** Wider reach, after the neighbourhoods in the sentence's "from people …" slot. */
export const wider = [
  { id: "bhopal", label: "all over Bhopal" },
  { id: "mp", label: "across Madhya Pradesh" },
  { id: "india", label: "all over India" },
];

/** `services` are names from the lead backend's service list (see contact/EnquiryForm). */
export const wants = [
  { id: "calls", label: "phone calls", services: ["Performance Marketing", "SEO"] },
  { id: "walk-ins", label: "walk-ins", services: ["SEO", "Performance Marketing"] },
  { id: "whatsapp", label: "WhatsApp enquiries", services: ["Performance Marketing"] },
  { id: "orders", label: "online orders", services: ["Performance Marketing", "Website Development"] },
  { id: "bookings", label: "bookings", services: ["Performance Marketing", "Website Development"] },
  { id: "reviews", label: "Google reviews", services: ["ORM"] },
  { id: "followers", label: "followers who buy", services: ["SMM", "SMO"] },
];

export const budgets = [
  "under ₹25,000",
  "₹25,000 to ₹75,000",
  "₹75,000 to ₹2 lakh",
  "over ₹2 lakh",
  "not decided yet",
];

/** A mix of sectors for the hero's trust row. */
const PICK_CLIENTS = [
  "Rehnoor Jewels",
  "Dr. Himanshu Verma",
  "Global Technologies India",
  "Granth Dream Homes",
  "Destiny by Numbers",
  "Integrated Lognet",
];
export const heroClients = PICK_CLIENTS.map((n) => clients.find((c) => c.name === n)).filter(
  (c): c is (typeof clients)[number] => Boolean(c),
);

/* ---------- project viewer ---------- */

export type Project = {
  id: string;
  name: string;
  kind: string;
  did: string;
  stat: string;
  statLabel: string;
  /** full-page screenshot in /public and its size, for the scrolling preview */
  img: string;
  width: number;
  height: number;
  url: string;
  href: string;
};

/** Real sites and real numbers from the portfolio (src/app/portfolio/component/PortfolioGrid.tsx). */
export const projects: Project[] = [
  {
    id: "himanshu",
    name: "Dr. Himanshu Verma",
    kind: "Orthopaedic clinic",
    did: "Website, appointment booking and SEO",
    stat: "3×",
    statLabel: "more appointments booked",
    img: "/himanshu-verma.png",
    width: 1920,
    height: 10811,
    url: "drhimanshuverma.com",
    href: "https://www.drhimanshuverma.com/",
  },
  {
    id: "rehnoor",
    name: "Rehnoor Jewels",
    kind: "Jewellery brand",
    did: "E-commerce website and SEO",
    stat: "380%",
    statLabel: "more keyword visibility",
    img: "/rehnoor-jewels-showcase.png",
    width: 1920,
    height: 10892,
    url: "rehnoorjewels.com",
    href: "https://www.rehnoorjewels.com/",
  },
  {
    id: "global-tech",
    name: "Global Technologies India",
    kind: "Industrial manufacturer",
    did: "Corporate website and B2B lead generation",
    stat: "320%",
    statLabel: "more qualified B2B leads",
    img: "/global-tech.png",
    width: 1375,
    height: 6621,
    url: "globaltechnologiesindia.com",
    href: "https://www.globaltechnologiesindia.com/",
  },
  {
    id: "pearls",
    name: "Pearls India",
    kind: "Online store",
    did: "SEO and content",
    stat: "500+",
    statLabel: "keywords on Google’s first page",
    img: "/pearls-india-showcase.png",
    width: 1588,
    height: 8499,
    url: "pearlsindia.co.in",
    href: "https://pearlsindia.co.in/",
  },
  {
    id: "destiny",
    name: "Destiny By Numberrs",
    kind: "Consultation practice",
    did: "Brand website and lead generation",
    stat: "4×",
    statLabel: "more consultations booked",
    img: "/destiny-by-number.png",
    width: 1588,
    height: 7211,
    url: "destinybynumberrs.com",
    href: "https://www.destinybynumberrs.com/",
  },
];

/* ---------- studio: what we make ---------- */

export type Post = { src: StaticImageData; alt: string; caption: string };

/** Ad creatives and social posts from the design team, shown as a phone feed. */
export const posts: Post[] = [
  { src: cgiDonut, alt: "Ad creative: a giant glazed doughnut kiosk on a city street", caption: "Launch ad" },
  { src: postViral, alt: "Social post: we can make your brand go viral", caption: "Brand post" },
  { src: cgiShake, alt: "Product shot: a strawberry milkshake splash", caption: "Product shot" },
  { src: cgiInstagram, alt: "Ad creative: a building shaped like the Instagram logo", caption: "Concept ad" },
  { src: cgiChefs, alt: "Ad creative: miniature chefs making latte art in a giant cup", caption: "Café ad" },
  { src: postServices, alt: "Social post listing services in bold type", caption: "Offer post" },
  { src: cgiBerries, alt: "Product shot: berries bursting over a meringue", caption: "Product shot" },
  { src: cgiCoffee, alt: "Ad creative: a coffee cup the size of a café on a cobbled square", caption: "Street ad" },
  { src: cgiMeta, alt: "Ad creative: a character flying with a drone", caption: "Character ad" },
];

export const services = [
  { name: "Google Maps & local SEO", does: "Rank higher on Google Maps and local search, so people near you find and call you first." },
  { name: "Google & Meta ads", does: "Campaigns tracked to the lead, with cost per lead reported every month, not likes or clicks." },
  { name: "Websites & landing pages", does: "Fast pages with call, WhatsApp and enquiry buttons, built to turn visitors into customers." },
  { name: "Social media", does: "Reels, posts and festive campaigns for Bhopal audiences, with DMs and comments answered." },
  { name: "Graphic designing & video editing", does: "Logos, ad creatives and edited video that stop the scroll." },
  { name: "Reviews & reputation", does: "More five-star Google reviews, and calm, professional replies to the rest." },
];

/* ---------- after you send it ---------- */

export const steps = [
  {
    title: "We call you",
    desc: "Our digital marketing agency in Bhopal starts with your business, customers and what you’ve tried. Or visit the office.",
  },
  { title: "You get a written plan", desc: "Channels, costs and what we expect them to bring." },
  { title: "We go live", desc: "Listings, pages and ads launched, enquiries sent to your WhatsApp." },
  { title: "You see the numbers", desc: "A monthly report: calls, enquiries and cost per lead." },
];

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How much does digital marketing cost in Bhopal?",
    a: "A digital marketing agency in Bhopal usually charges a monthly fee plus an ad budget you pay to Google or Meta directly. The total depends on the channels you pick and your goals. Choose your budget in the sentence at the top and we’ll plan around it.",
  },
  {
    q: "Do you work with my kind of business?",
    a: "Yes. As a digital marketing agency in Bhopal, we work with clinics, real estate firms, jewellers, manufacturers, coaching and consultation practices, restaurants and online stores. If your customers search on Google or scroll Instagram, we can plan for them.",
  },
  {
    q: "Can we meet in person?",
    a: "Yes. Visit our digital marketing agency in Bhopal at Plot Number 2, near Hanuman Mandir, Idgah Hills, or call or WhatsApp us on +91 96858 92813 to fix a time that suits you.",
  },
  {
    q: "How soon will the phone ring?",
    a: "A digital marketing agency in Bhopal can start ads soon after launch, but Google Maps and SEO usually take a few months to build. Your written plan says what to expect from each channel before you spend anything.",
  },
  {
    q: "Can you reach customers outside Bhopal?",
    a: "Yes. Our digital marketing agency in Bhopal runs campaigns for clients across India, with offices in Delhi, Goa and Dubai. Whether you want customers in Indore, Delhi or across the country, we set the targeting to match.",
  },
];

/** Every real Google review from the site's testimonial data, the lead-generation one first. */
export const reviews = [...testimonials].sort(
  (a, b) => Number(b.name === "Manjot Singh") - Number(a.name === "Manjot Singh"),
);
