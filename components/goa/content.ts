// Copy and data for v2 of the Goa page: a photography-led, editorial take. Fully separate from components/goa
// (v1). Photos are free-licence Unsplash images, served straight from images.unsplash.com: the URL already
// sizes and compresses them, so they skip Next's image optimizer (see `unoptimized` where they're rendered).
import { testimonials } from "@/data/homeData";
import { whatsappHref } from "../ui";

export const GOA_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Goa.",
);

export type Photo = { src: string; alt: string };

export const photos = {
  hero: { src: "https://images.unsplash.com/photo-1642516864335-2ca9d8b3a511?auto=format&fit=crop&w=2400&q=80", alt: "A Goan cove and headland from above at golden hour" },
  fontainhas: { src: "https://images.unsplash.com/photo-1656155316674-d8fab9e65eab?auto=format&fit=crop&w=2400&q=80", alt: "Yellow and white Indo-Portuguese houses in Fontainhas, Panjim" },
  door: { src: "https://images.unsplash.com/photo-1638797841332-1e5210f670d9?auto=format&fit=crop&w=1200&q=80", alt: "A black door in a green Goan house with white trim" },
  church: { src: "https://images.unsplash.com/photo-1641230538352-c82768fa7db9?auto=format&fit=crop&w=1200&q=80", alt: "The white bell tower of Our Lady of the Immaculate Conception, Panjim" },
} satisfies Record<string, Photo>;

/* ---------- services ---------- */

/** What the overlay on a service photo shows: the thing that service produces. */
export type Proof =
  | { kind: "ad"; brand: string; text: string; cta: string }
  | { kind: "maps"; query: string; name: string; rating: string }
  | { kind: "site"; url: string; cta: string }
  | { kind: "reel"; views: string; caption: string }
  | { kind: "shoot"; label: string }
  | { kind: "review"; text: string };

export type Service = { name: string; line: string; href: string; photo: Photo; proof: Proof };

/** The six core services, each pictured in Goa with what it produces laid over the photo. */
export const services: Service[] = [
  {
    name: "Google & Meta ads",
    line: "Campaigns split by market and language, judged on bookings and enquiries, not clicks.",
    href: "/services/performance-marketing",
    photo: { src: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?auto=format&fit=crop&w=900&q=80", alt: "A beach resort with a jetty and palm trees in Goa" },
    proof: { kind: "ad", brand: "Your stay", text: "Sea-view rooms for December. Book direct and save.", cta: "Book now" },
  },
  {
    name: "SEO & Google Maps",
    line: "Show up in the map pack when someone nearby searches for what you offer.",
    href: "/services/search-engine-optimization",
    photo: { src: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?auto=format&fit=crop&w=900&q=80", alt: "Yellow umbrellas and loungers outside a beach shack" },
    proof: { kind: "maps", query: "beach shack near Morjim", name: "Your shack", rating: "4.8" },
  },
  {
    name: "Websites & booking pages",
    line: "Fast sites with a booking engine, WhatsApp and every enquiry tracked.",
    href: "/services/website-development-company-in-delhi",
    photo: { src: "https://images.unsplash.com/photo-1653928359063-13eb336a4196?auto=format&fit=crop&w=900&q=80", alt: "A white Goan building with a red roof by the sea" },
    proof: { kind: "site", url: "yourplace.com", cta: "Check availability" },
  },
  {
    name: "Social media",
    line: "Reels, posts and stories that make people plan their trip around you.",
    href: "/services/social-media-marketing",
    photo: { src: "https://images.unsplash.com/photo-1541738679621-172e4575a81d?auto=format&fit=crop&w=900&q=80", alt: "Palm trees leaning over a turquoise Goan bay" },
    proof: { kind: "reel", views: "48.2K", caption: "Sunset at the shack" },
  },
  {
    name: "Graphic designing & video editing",
    line: "Logos, ad creatives and edited reels that stop the scroll.",
    href: "/services/graphic-designing",
    photo: { src: "https://images.unsplash.com/photo-1642516864959-0b3a40416c13?auto=format&fit=crop&w=900&q=80", alt: "A green Goan headland above a sandy bay" },
    proof: { kind: "shoot", label: "Reel edit, South Goa" },
  },
  {
    name: "Reviews & reputation",
    line: "More five-star Google reviews, and calm replies to the rest.",    href: "/services/online-reputation-management",
    photo: { src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80", alt: "A turquoise bay below a palm-lined beach in Goa" },
    proof: { kind: "review", text: "New 5-star review on Google" },
  },
];

/** Everything else the same team does, so every service is on the page. */
export const moreServices = [
  { name: "Content marketing", href: "/services/content-marketing" },
  { name: "Email marketing", href: "/services/email-marketing" },
  { name: "Influencer marketing", href: "/services/influencer-marketing" },
  { name: "Social media optimisation", href: "/services/social-media-optimization" },
  { name: "Landing page optimisation", href: "/services/landing-page-optimization" },
  { name: "Affiliate marketing", href: "/services/affiliate-marketing" },
  { name: "Public relations", href: "/services/public-relations" },
];

/* ---------- sectors ---------- */

export type Sector = { id: string; name: string; line: string; photo: Photo };

/** `id`s match the form's business kinds, so a card can pre-fill it. */
export const sectors: Sector[] = [
  {
    id: "stay",
    name: "Hotels & boutique stays",
    line: "Direct bookings that don’t pay an OTA’s cut.",
    photo: { src: "https://images.unsplash.com/photo-1736347505109-f02e0e5a0200?auto=format&fit=crop&w=1200&q=80", alt: "A row of beach cottages under palm trees at dusk" },
  },
  {
    id: "villa",
    name: "Villas & homestays",
    line: "Booked weekends, in season and out.",
    photo: { src: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=900&q=80", alt: "Colourful wooden cottages near palm trees on a Goan beach" },
  },
  {
    id: "food",
    name: "Cafés, shacks & restaurants",
    line: "First on Google Maps for ‘near me’.",
    photo: { src: "https://images.unsplash.com/photo-1682743710558-b338ba285925?auto=format&fit=crop&w=900&q=80", alt: "A beach restaurant lit with string lights at night" },
  },
  {
    id: "real-estate",
    name: "Real estate & second homes",
    line: "Buyers from Mumbai, Bengaluru, Delhi and the Gulf.",
    photo: { src: "https://images.unsplash.com/photo-1634714465560-57e9bf8feb88?auto=format&fit=crop&w=900&q=80", alt: "A restored yellow Indo-Portuguese building with balconies in Panjim" },
  },
  {
    id: "events",
    name: "Weddings & events",
    line: "Enquiries for the dates that matter.",
    photo: { src: "https://images.unsplash.com/photo-1718275520594-8bb2d4fae9f0?auto=format&fit=crop&w=900&q=80", alt: "A white Goan church with a cross on top" },
  },
];

/* ---------- seasons ---------- */

export type Season = { id: string; months: string; name: string; line: string; photo: Photo };

export const seasons: Season[] = [
  {
    id: "peak",
    months: "October to March",
    name: "Peak season",
    line: "Most of the budget goes to the markets and languages that book, with every enquiry sent straight to WhatsApp.",
    photo: { src: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80", alt: "Colourful beach huts and palm trees on a sandy shore" },
  },
  {
    id: "shoulder",
    months: "April to May",
    name: "Shoulder months",
    line: "Short-break offers for drive-in travellers, and past guests brought back.",
    photo: { src: "https://images.unsplash.com/photo-1757702244726-00198554c4a0?auto=format&fit=crop&w=800&q=80", alt: "A quiet sandy beach below a green headland" },
  },
  {
    id: "monsoon",
    months: "June to July",
    name: "Monsoon",
    line: "Build time: new pages, SEO and content that ranks by October.",
    photo: { src: "https://images.unsplash.com/photo-1786267081755-5ee84640617e?auto=format&fit=crop&w=800&q=80", alt: "Dudhsagar waterfall in full monsoon flow above a railway bridge" },
  },
  {
    id: "pre",
    months: "August to September",
    name: "Pre-season",
    line: "Early-bird campaigns while winter trips are being planned.",
    photo: { src: "https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?auto=format&fit=crop&w=800&q=80", alt: "A Goan beach and lagoon seen from a green headland" },
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
  { id: "rphrealty", name: "RPH Realty", kind: "Luxury real estate", stat: "3×", statLabel: "qualified property leads", img: "/portfolio/rphrealty.webp", width: 1920, height: 14611, href: "https://www.rphrealty.com/" },
  { id: "homesandlandgoa", name: "Homes And Land Goa", kind: "Luxury real estate", stat: "3×", statLabel: "qualified property leads", img: "/portfolio/homesandlandgoa.webp", width: 1920, height: 14611, href: "https://homesandlandgoa.com/" },
  { id: "himanshu", name: "Dr. Himanshu Verma", kind: "Orthopaedic clinic", stat: "3×", statLabel: "more appointments booked", img: "/himanshu-verma.png", width: 1920, height: 10811, href: "https://www.drhimanshuverma.com/" },
  { id: "rehnoor", name: "Rehnoor Jewels", kind: "Jewellery brand", stat: "380%", statLabel: "more keyword visibility", img: "/rehnoor-jewels-showcase.png", width: 1920, height: 10892, href: "https://www.rehnoorjewels.com/" },
  { id: "ethical", name: "Ethical Infrastructures", kind: "Real estate developer", stat: "300%+", statLabel: "qualified property enquiries", img: "/ethical-infrastructures-showcase.png", width: 1588, height: 7903, href: "https://www.ethicalinfrastructures.com/" },
  { id: "pearls", name: "Pearls India", kind: "Online store", stat: "500+", statLabel: "keywords on Google’s first page", img: "/pearls-india-showcase.png", width: 1588, height: 8499, href: "https://pearlsindia.co.in/" },
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

export const areas = [
  { region: "North Goa", places: ["Arambol, Mandrem, Morjim", "Vagator, Anjuna", "Baga, Calangute, Candolim", "Siolim", "Assagao", "Mapusa"] },
  { region: "Central Goa", places: ["Panjim", "Old Goa", "Vasco"] },
  { region: "South Goa", places: ["Margao", "Colva, Benaulim", "Palolem, Agonda"] },
];

/* ---------- reviews ---------- */

/** Every real Google review from the site's testimonial data, the lead-generation one first (fills the strip). */
export const reviews = [...testimonials].sort(
  (a, b) => Number(b.name === "Manjot Singh") - Number(a.name === "Manjot Singh"),
);

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How does a digital marketing agency in Goa help us get more direct bookings and pay OTAs less?",
    a: "Start with a fast booking page on your own site, Google’s free booking links and Hotel Ads, then run campaigns that bring back guests who first found you on an OTA. OTAs stay useful for reach. The goal is that repeat and high-intent guests book with you directly, and that you can see which channel produced each booking.",
  },
  {
    q: "What should we do during the monsoon?",
    a: "Use it to build. Speed up slow pages, set up enquiry tracking, tidy your Google Business Profile and publish content for the searches guests make in September. A digital marketing agency in Goa can also run light, offer-led campaigns for drive-in weekend travellers while the SEO work compounds, so you rank when the season opens in October.",
  },
  {
    q: "When should pre-season campaigns start?",
    a: "A digital marketing agency in Goa should start in August, while winter trips are still being planned. Early-bird offers, retargeting of past guests and site visitors, and fresh creatives should be live by September. Starting in October usually means competing with every other stay for the same attention at peak ad costs.",
  },
  {
    q: "Can a digital marketing agency in Goa reach foreign tourists, like Russian or UK travellers?",
    a: "Yes. As a digital marketing agency in Goa, we run Google and Meta campaigns by country and language, with landing pages and ad copy written for each market. Russian, UK and domestic travellers search and book differently, so each gets its own offer, creative and budget. Your site and Google listing need to be ready for international visitors too.",
  },
  {
    q: "How does a digital marketing agency in Goa help us rank on Google Maps for searches like ‘café near Anjuna’?",
    a: "Maps ranking rests on a complete, accurate Google Business Profile, the right categories, fresh photos, steady reviews with replies, and the same name, address and phone number everywhere online. We set these up, keep them current and track your position for the searches that matter around your area. Results build over a few months, so it pays to start well before the season.",
  },
  {
    q: "Can we meet your digital marketing agency in Goa team in person?",
    a: "Yes. Our digital marketing agency in Goa works from SF-15, Prabhu Chambers, Mapusa, and we can come to your property or venue. Call +91 96858 92813 or message us on WhatsApp to fix a time.",
  },
];
