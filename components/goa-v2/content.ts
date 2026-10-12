// Copy and data for v2 of the Goa page: a photography-led, editorial take. Fully separate from components/goa
// (v1). Photos are free-licence Unsplash images, served straight from images.unsplash.com: the URL already
// sizes and compresses them, so they skip Next's image optimizer (see `unoptimized` where they're rendered).
import { testimonials } from "@/data/homeData";
import { whatsappHref } from "../ui";

export const GOA_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Goa.",
);

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Photo = { src: string; alt: string };

export const photos = {
  hero: { src: unsplash("1642516864335-2ca9d8b3a511", 2400), alt: "A Goan cove and headland from above at golden hour" },
  fontainhas: { src: unsplash("1656155316674-d8fab9e65eab", 2400), alt: "Yellow and white Indo-Portuguese houses in Fontainhas, Panjim" },
  door: { src: unsplash("1638797841332-1e5210f670d9", 1200), alt: "A black door in a green Goan house with white trim" },
  church: { src: unsplash("1641230538352-c82768fa7db9", 1200), alt: "The white bell tower of Our Lady of the Immaculate Conception, Panjim" },
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
    line: "Campaigns by market and language, paid for by the booking, not the click.",
    href: "/services/performance-marketing",
    photo: { src: unsplash("1580741186862-c5d0bf2aff33", 900), alt: "A beach resort with a jetty and palm trees in Goa" },
    proof: { kind: "ad", brand: "Your stay", text: "Sea-view rooms for December. Book direct and save.", cta: "Book now" },
  },
  {
    name: "SEO & Google Maps",
    line: "First in the map pack when someone nearby searches for what you offer.",
    href: "/services/search-engine-optimization",
    photo: { src: unsplash("1560179406-1c6c60e0dc76", 900), alt: "Yellow umbrellas and loungers outside a beach shack" },
    proof: { kind: "maps", query: "beach shack near Morjim", name: "Your shack", rating: "4.8" },
  },
  {
    name: "Websites & booking pages",
    line: "Fast sites with a booking engine, WhatsApp and every enquiry tracked.",
    href: "/services/website-development-company-in-delhi",
    photo: { src: unsplash("1653928359063-13eb336a4196", 900), alt: "A white Goan building with a red roof by the sea" },
    proof: { kind: "site", url: "yourplace.com", cta: "Check availability" },
  },
  {
    name: "Social media",
    line: "Reels, posts and stories that make people plan their trip around you.",
    href: "/services/social-media-marketing",
    photo: { src: unsplash("1541738679621-172e4575a81d", 900), alt: "Palm trees leaning over a turquoise Goan bay" },
    proof: { kind: "reel", views: "48.2K", caption: "Sunset at the shack" },
  },
  {
    name: "Video shoots, CGI & AI ads",
    line: "Shoots at your property and CGI that stop the scroll.",
    href: "/services/video-shoot",
    photo: { src: unsplash("1642516864959-0b3a40416c13", 900), alt: "A green Goan headland above a sandy bay" },
    proof: { kind: "shoot", label: "Drone shoot, South Goa" },
  },
  {
    name: "Reviews & reputation",
    line: "More five-star Google reviews, and calm replies to the rest.",
    href: "/services/online-reputation-management",
    photo: { src: unsplash("1512343879784-a960bf40e7f2", 900), alt: "A turquoise bay below a palm-lined beach in Goa" },
    proof: { kind: "review", text: "New 5-star review on Google" },
  },
];

/** Everything else the same team does, so every service is on the page. */
export const moreServices = [
  { name: "Content marketing", href: "/services/content-marketing" },
  { name: "Email marketing", href: "/services/email-marketing" },
  { name: "Influencer marketing", href: "/services/influencer-marketing" },
  { name: "Social media optimisation", href: "/services/social-media-optimization" },
  { name: "Graphic design & video editing", href: "/services/graphic-designing" },
  { name: "AI & CGI marketing", href: "/services/ai-cgi-marketing" },
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
    photo: { src: unsplash("1736347505109-f02e0e5a0200", 1200), alt: "A row of beach cottages under palm trees at dusk" },
  },
  {
    id: "villa",
    name: "Villas & homestays",
    line: "Booked weekends, in season and out.",
    photo: { src: unsplash("1587922546307-776227941871", 900), alt: "Colourful wooden cottages near palm trees on a Goan beach" },
  },
  {
    id: "food",
    name: "Cafés, shacks & restaurants",
    line: "First on Google Maps for ‘near me’.",
    photo: { src: unsplash("1682743710558-b338ba285925", 900), alt: "A beach restaurant lit with string lights at night" },
  },
  {
    id: "real-estate",
    name: "Real estate & second homes",
    line: "Buyers from Mumbai, Bengaluru, Delhi and the Gulf.",
    photo: { src: unsplash("1634714465560-57e9bf8feb88", 900), alt: "A restored yellow Indo-Portuguese building with balconies in Panjim" },
  },
  {
    id: "events",
    name: "Weddings & events",
    line: "Enquiries for the dates that matter.",
    photo: { src: unsplash("1718275520594-8bb2d4fae9f0", 900), alt: "A white Goan church with a cross on top" },
  },
];

/* ---------- seasons ---------- */

export type Season = { id: string; months: string; name: string; line: string; photo: Photo };

export const seasons: Season[] = [
  {
    id: "peak",
    months: "Oct – Mar",
    name: "Peak season",
    line: "Most of the budget, by market and language. Every enquiry straight to WhatsApp.",
    photo: { src: unsplash("1614082242765-7c98ca0f3df3", 800), alt: "Colourful beach huts and palm trees on a sandy shore" },
  },
  {
    id: "shoulder",
    months: "Apr – May",
    name: "Shoulder months",
    line: "Short-break offers for drive-in travellers, and past guests brought back.",
    photo: { src: unsplash("1757702244726-00198554c4a0", 800), alt: "A quiet sandy beach below a green headland" },
  },
  {
    id: "monsoon",
    months: "Jun – Jul",
    name: "Monsoon",
    line: "Build: new pages, SEO and content that ranks by October.",
    photo: { src: unsplash("1786267081755-5ee84640617e", 800), alt: "Dudhsagar waterfall in full monsoon flow above a railway bridge" },
  },
  {
    id: "pre",
    months: "Aug – Sep",
    name: "Pre-season",
    line: "Early-bird campaigns while winter trips are being planned.",
    photo: { src: unsplash("1652820330085-82a0c2b88d78", 800), alt: "A Goan beach and lagoon seen from a green headland" },
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
  { id: "mondus", name: "Mondus Properties", kind: "Luxury real estate", stat: "3×", statLabel: "qualified property leads", img: "/mondus-webpage.png", width: 1920, height: 14611, href: "https://www.mondusproperties.ae/" },
  { id: "crownpoint", name: "Crownpoint Estates", kind: "Luxury real estate", stat: "420%", statLabel: "growth in local search visibility", img: "/crownpoint-estates-leads.png", width: 1920, height: 12291, href: "https://www.crownpointestates.com/" },
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
    q: "How do I get more direct bookings and pay OTAs less?",
    a: "A fast booking page on your own site, Google’s free booking links and Hotel Ads, and campaigns that bring back guests who first found you on an OTA. OTAs stay useful for reach; the goal is that repeat and high-intent guests book with you.",
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
