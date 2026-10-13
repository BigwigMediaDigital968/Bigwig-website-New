// Copy and data for the Ahmedabad page (see AhmedabadPage). In the site's navy theme, with the Sidi Saiyyed jali
// (the city's tree of life) as its one local mark, and the promise that every rupee is accounted for.
import type { StaticImageData } from "next/image";
import { testimonials } from "@/data/homeData";
import cgiCoffee from "../../Assets/gallery/cgi1.png";
import cgiDonut from "../../Assets/gallery/cgi3.png";
import cgiBerries from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 04_36_48 PM.png";
import cgiShake from "../../Assets/gallery/ChatGPT Image Jun 3, 2025, 06_27_27 PM.png";
import cgiChefs from "../../Assets/gallery/ChatGPT Image May 31, 2025, 02_57_46 PM.png";
import { whatsappHref } from "../ui";
import { work as goaWork } from "../goa/content";

export const AHMEDABAD_WHATSAPP_HREF = whatsappHref(
  "Hi BigWig Media Digital! I'm interested in your digital marketing services in Ahmedabad.",
);

/* ---------- photos (images.unsplash.com is allowed in next.config; free Unsplash licence) ---------- */

const unsplash = (id: string, w = 2400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Background per row of the services section (shown when a row opens), keyed by the service page link. */
export const servicePhotos: Record<string, { src: string; alt: string }> = {
  "/services/performance-marketing": { src: unsplash("1651408451633-ff492f347ec1", 1600), alt: "Atal Bridge at sunset" },
  "/services/search-engine-optimization": { src: unsplash("1687840430404-b82859282de4", 1600), alt: "Ahmedabad from above" },
  "/services/social-media-marketing": { src: unsplash("1700170554599-50c74065ecdd", 1600), alt: "Atal Bridge over the Sabarmati" },
  "/services/website-development-company-in-delhi": { src: unsplash("1638006524490-492fdf36ee04", 1600), alt: "The Sabarmati riverfront at night" },
  "/services/graphic-designing": { src: unsplash("1704730827544-ad473ecae95d", 1600), alt: "The orange canopy of Atal Bridge" },
  "/services/online-reputation-management": { src: unsplash("1603651481343-0f71466bb14a", 1600), alt: "The Hutheesing Jain temple" },
};

export const photos = {
  temple: { src: unsplash("1603651481343-0f71466bb14a", 1200), alt: "The Hutheesing Jain temple, Ahmedabad" },
  bridge: { src: unsplash("1704730827544-ad473ecae95d", 1200), alt: "The walkway of Atal Bridge under its orange canopy" },
};

/**
 * The hero's curved row: the city and our work, alternating, with Atal Bridge in the middle. Website screenshots
 * are tall full-page shots, so they show their top (`top: true`).
 */
export const strip: { src: string; alt: string; top?: boolean }[] = [
  { src: unsplash("1687840430404-b82859282de4", 600), alt: "Ahmedabad from above" },
  { src: "/rehnoor-jewels-showcase.png", alt: "The Rehnoor Jewels website we built", top: true },
  { src: unsplash("1603651481343-0f71466bb14a", 600), alt: "The Hutheesing Jain temple, Ahmedabad" },
  { src: unsplash("1700170554599-50c74065ecdd", 800), alt: "Atal Bridge over the Sabarmati riverfront" },
  { src: "/himanshu-verma.png", alt: "The Dr. Himanshu Verma clinic website we built", top: true },
  { src: unsplash("1651408451633-ff492f347ec1", 600), alt: "Atal Bridge at sunset" },
  { src: "/crownpoint-estates-leads.png", alt: "The Crownpoint Estates website we built", top: true },
];

/* ---------- social media: creatives from the studio ---------- */

export type Creative = { src: StaticImageData; alt: string; format: string; caption: string };

export const creatives: Record<"tall" | "shake" | "donut" | "chefs" | "berries", Creative> = {
  tall: { src: cgiCoffee, alt: "Ad creative: a coffee cup the size of a café on a cobbled square at dusk", format: "Reel", caption: "Launch film for a café" },
  shake: { src: cgiShake, alt: "Product shot: a strawberry milkshake splash", format: "Post", caption: "Product shot" },
  donut: { src: cgiDonut, alt: "Ad creative: a giant glazed doughnut kiosk on a city street", format: "Reel", caption: "Street ad" },
  chefs: { src: cgiChefs, alt: "Ad creative: miniature chefs making latte art in a giant cup", format: "Reel", caption: "Café ad" },
  berries: { src: cgiBerries, alt: "Product shot: berries bursting over a meringue", format: "Post", caption: "Product shot" },
};

export const socialIncludes = [
  { name: "Reels & shoots", does: "Shot at your shop, site or factory, then edited for every platform." },
  { name: "Posts & carousels", does: "A month planned ahead, approved by you on WhatsApp." },
  { name: "Meta ads", does: "Boosts and lead ads, paid for by the enquiry." },
  { name: "DMs & comments", does: "Answered fast, with leads passed to your team." },
];

export const festivals = ["Uttarayan", "Navratri", "Diwali & New Year", "Wedding season"];

/* ---------- sectors ---------- */

export type Sector = {
  id: string;
  label: string;
  /** where in and around the city this business tends to be */
  where: string;
  /** what its customers type into Google */
  searches: string[];
  we: string[];
  /** what the client sees in the report every month */
  monthly: string[];
};

export const sectors: Sector[] = [
  {
    id: "manufacturing",
    label: "Manufacturers & exporters",
    where: "Naroda, Vatva, Odhav, Sanand, Changodar and the GIDC estates",
    searches: ["ss pipe fittings manufacturer ahmedabad", "pharma machinery supplier india", "textile exporter gujarat"],
    we: [
      "Product pages that rank for what buyers and dealers search, in India and abroad",
      "Google Ads for high-intent B2B searches, so you rely less on directory leads",
      "LinkedIn campaigns to reach procurement heads and distributors",
    ],
    monthly: ["Qualified enquiries", "Product keyword rankings", "Cost per enquiry"],
  },
  {
    id: "real-estate",
    label: "Real estate",
    where: "SG Highway, Shela, South Bopal, Gota, Science City and GIFT City",
    searches: ["3 bhk flats in shela", "commercial office sg highway", "new projects near gift city"],
    we: [
      "Meta and Google lead campaigns for each project, by budget and location",
      "Landing pages with floor plans, pricing on request and site-visit booking",
      "Leads called back fast, with site visits tracked to the campaign",
    ],
    monthly: ["Leads per project", "Site visits booked", "Cost per site visit"],
  },
  {
    id: "healthcare",
    label: "Clinics & hospitals",
    where: "Satellite, Navrangpura, Bodakdev, Vastrapur, Maninagar and Chandkheda",
    searches: ["dermatologist near satellite", "best ivf centre ahmedabad", "dentist open now"],
    we: [
      "A Google Business Profile that ranks for ‘near me’ searches around the clinic",
      "Search ads for treatments, with call and appointment tracking",
      "More genuine reviews, and calm replies to the difficult ones",
    ],
    monthly: ["Calls and appointment requests", "Map ranking around the clinic", "New reviews"],
  },
  {
    id: "education",
    label: "Schools & coaching",
    where: "Navrangpura, Paldi, Vastrapur, Gurukul and Nikol",
    searches: ["neet coaching in ahmedabad", "cbse school near bopal", "ielts classes navrangpura"],
    we: [
      "Admission campaigns timed to when parents and students decide",
      "Landing pages with results, faculty and a demo-class booking",
      "Every enquiry followed up on WhatsApp the same day",
    ],
    monthly: ["Enquiries by course", "Demo classes booked", "Cost per admission enquiry"],
  },
  {
    id: "retail",
    label: "Retail, food & showrooms",
    where: "CG Road, Law Garden, Prahlad Nagar, Sindhu Bhavan Road and Manek Chowk",
    searches: ["cafe on sindhu bhavan road", "saree shop cg road", "furniture showroom near me"],
    we: [
      "Google Maps and reviews so you’re the first place people walk into",
      "Instagram that shows the product, the place and the offer",
      "Festive campaigns ready before Navratri and Diwali, not during",
    ],
    monthly: ["Calls and direction requests", "Posts and reels, planned ahead", "New reviews"],
  },
  {
    id: "d2c",
    label: "D2C & online brands",
    where: "Selling from Ahmedabad to all of India",
    searches: ["handblock print kurta online", "organic snacks online india", "buy brass decor"],
    we: [
      "Meta and Google Shopping campaigns run on return on ad spend, not clicks",
      "A fast store with clear product pages and checkout",
      "Graphic design and video editing that stop the scroll",
    ],
    monthly: ["Orders and revenue from ads", "Return on ad spend", "New creatives tested"],
  },
];

/* ---------- proof ---------- */

// TODO: swap for Ahmedabad and Gujarat case studies when they're ready. For now, the same work as the Goa page.
export const work = goaWork;

/** Every real Google review from the site's testimonial data, the lead-generation one first (fills the strip). */
export const reviews = [...testimonials].sort(
  (a, b) => Number(b.name === "Manjot Singh") - Number(a.name === "Manjot Singh"),
);

/* ---------- FAQ ---------- */

export const faqs = [
  {
    q: "How much does digital marketing cost in Ahmedabad?",
    a: "It depends on the channels and how much you spend on ads. Most plans are a monthly fee plus an ad budget you pay to Google or Meta directly. Send us a message in the form above and we’ll reply with a written plan and the full cost.",
  },
  {
    q: "We get our leads from IndiaMART. Why do we need ads or SEO?",
    a: "Directory leads are shared with your competitors and compared on price. Leads from your own website and ads come to you alone, from buyers who searched for what you make. Most manufacturers we work with keep both and shift the balance over time.",
  },
  {
    q: "Can we meet in person?",
    a: "Yes. We have an office in Ahmedabad and are happy to meet there, at your office or at your factory. Day to day, most work happens over WhatsApp and calls.",
  },
  {
    q: "How soon will we see enquiries?",
    a: "Ads usually bring enquiries within the first weeks. Google Maps and SEO take three to six months to build, but then keep bringing customers without paying per click.",
  },
  {
    q: "Can you reach buyers outside Gujarat, or abroad?",
    a: "Yes. Campaigns can stay within a few kilometres of your shop, cover Gujarat, reach all of India, or target export markets by country and language.",
  },
  {
    q: "Who owns the ad accounts and the website?",
    a: "You do. Ad accounts, Google Business Profile, analytics and the website are set up in your name, and we work in them with access you can remove at any time.",
  },
];
