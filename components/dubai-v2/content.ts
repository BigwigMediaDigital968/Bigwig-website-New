// Copy and photos for the v2 Dubai real-estate page. Unsplash (images.unsplash.com is allowed in next.config).
import { testimonials } from "@/data/homeData";

export const photos = {
  /** Sheikh Zayed Road at twilight: towers, Burj Khalifa and light trails */
  hero: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=2400&q=80",
  /** white modern villa with a pool, standing in for a Palm Jumeirah villa render */
  villa: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
  /** Dubai Marina towers at night over the water */
  nightSkyline: "https://images.unsplash.com/photo-1642184453004-86fd10fbcfef?auto=format&fit=crop&w=2400&q=80",
};

export type ShowcaseItem = { title: string; tag: string; img: string; alt: string; layout: string; sizes: string };

/** Bento grid on a 4-column desktop grid (3 rows): tall | wide + square | large featured + tall rect. */
export const showcase: ShowcaseItem[] = [
  {
    title: "Palm Jumeirah villa campaign",
    tag: "Ad creative",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    alt: "White villa with an infinity pool under a blue sky",
    layout: "lg:col-start-1 lg:row-start-1 lg:row-span-3",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Luxury penthouse website",
    tag: "Web design",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
    alt: "Landing page designs open on a desktop monitor, tablet and phone",
    layout: "sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1",
    sizes: "(min-width: 640px) 50vw, 100vw",
  },
  {
    title: "#1 positions in Dubai search",
    tag: "SEO",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    alt: "Analytics dashboard showing search performance",
    layout: "lg:col-start-4 lg:row-start-1",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Off-plan tower launch",
    tag: "Featured campaign",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Glass residential towers seen from street level",
    layout: "sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2",
    sizes: "(min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Social content & lead ads",
    tag: "Social media",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=700&q=80",
    alt: "Glossy 3D Instagram icon on a pink background",
    layout: "lg:col-start-4 lg:row-start-2 lg:row-span-2",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
];

export type Industry = { name: string; short: string; desc: string; points: string[]; img: string; alt: string };

export const industries: Industry[] = [
  {
    name: "Real Estate & Off-Plan Development",
    short: "Real estate",
    desc: "Launch campaigns, broker funnels and property websites that turn international interest into booked viewings.",
    points: [
      "Off-plan launch campaigns",
      "International buyer targeting",
      "Listing and project websites",
      "CRM-ready lead routing",
    ],
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern residential towers against a clear sky",
  },
  {
    name: "Hospitality",
    short: "Hospitality",
    desc: "Direct bookings for hotels, resorts and experiences, for visitors and residents alike.",
    points: ["Direct booking campaigns", "Seasonal offers", "Review growth"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    alt: "Resort pool deck with loungers at sunset",
  },
  {
    name: "High-Ticket E-Commerce",
    short: "E-commerce",
    desc: "Luxury retail and high-value products, tracked from first click to final sale.",
    points: ["Shopping and catalogue ads", "Retargeting", "Conversion-focused stores"],
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
    alt: "A shopper carrying several designer shopping bags",
  },
];

export type CoreService = { title: string; desc: string; img: string; alt: string; href: string };

export const coreServices: CoreService[] = [
  {
    title: "Website Design & Development",
    desc: "High-speed, luxury landing pages and property websites built to convert off-plan interest into inbound buyer inquiries.",
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
    alt: "A laptop showing a property landing page",
    href: "/services/website-development-company-in-delhi",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Ranking your agency and off-plan projects at the top of Google for high-intent searches like “Buy villa Palm Jumeirah”.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Search analytics open on a laptop",
    href: "/services/search-engine-optimization",
  },
  {
    title: "Social Media Marketing & Ads",
    desc: "Targeted Meta, Instagram and LinkedIn campaigns driving high-intent European, GCC and CIS investor leads straight to your team.",
    img: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1400&q=80",
    alt: "Glossy 3D Instagram icon on a dark background",
    href: "/services/social-media-marketing",
  },
];

/** Real Google reviews from the site's testimonial data, picked for lead generation, web and SEO results. */
const PICK = ["Manjot Singh", "Kashvi Chhabra", "Aparajita Pandey", "Amit Paal Siingh", "Chetan Pandey"];
export const reviews = PICK.map((n) => testimonials.find((t) => t.name === n)).filter(
  (t): t is (typeof testimonials)[number] => Boolean(t),
);
