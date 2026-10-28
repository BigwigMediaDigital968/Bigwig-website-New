import type { StaticImageData } from "next/image";
import seo from "../../Assets/services/SEO.png";
import affiliate from "../../Assets/services/Affiliate Marketing.png";
import content from "../../Assets/services/Content Marketing.png";
import email from "../../Assets/services/Email Marketing.png";
import graphic from "../../Assets/services/Graphic Desining.png";
import influencer from "../../Assets/services/Influencer Marketing.png";
import orm from "../../Assets/services/ORM.png";
import performance from "../../Assets/services/Performance Marketing.png";
import smm from "../../Assets/services/SMM.png";
import smo from "../../Assets/services/SMO.png";
import website from "../../Assets/services/Website Development.png";

export type ServiceCard = {
  title: string;
  tagline: string;
  desc: string;
  href: string;
  icon: StaticImageData;
};

// Order is the order on /services. AI & CGI, landing pages, video shoot and PR pages exist but aren't listed.
export const serviceCards: ServiceCard[] = [
  {
    title: "Website Designing & Development",
    tagline: "Your digital storefront, built to impress!",
    desc: "We craft stunning, responsive websites that turn visitors into customers.",
    href: "/services/website-development-company-in-delhi",
    icon: website,
  },
  {
    title: "Search Engine Optimization",
    tagline: "Be visible when it matters most!",
    desc: "We rank your website on Google so your customers find you before your competitors.",
    href: "/services/search-engine-optimization",
    icon: seo,
  },
  {
    title: "Social Media Optimization",
    tagline: "Be everywhere your audience is!",
    desc: "We optimize your profiles for visibility, engagement, and brand authority across platforms.",
    href: "/services/social-media-optimization",
    icon: smo,
  },
  // {
  //   title: "Social Media Marketing",
  //   tagline: "Turn your followers into loyal customers.",
  //   desc: "We run targeted campaigns, boost engagement, and build a strong brand presence across all social platforms.",
  //   href: "/services/social-media-marketing",
  //   icon: smm,
  // },
  {
    title: "Performance Marketing",
    tagline: "Pay for results, not just clicks!",
    desc: "Target the right audience with laser-focused Google & Meta ads that convert.",
    href: "/services/performance-marketing",
    icon: performance,
  },
  {
    title: "Online Reputation Management",
    tagline: "Your online image matters, protect it!",
    desc: "We monitor, manage, and improve your digital reputation across platforms.",
    href: "/services/online-reputation-management",
    icon: orm,
  },
  {
    title: "Graphic Designing & Video Editing",
    tagline: "Designs that speak louder than words!",
    desc: "We create eye-catching visuals that reflect your brand and grab attention instantly.",
    href: "/services/graphic-designing",
    icon: graphic,
  },
  {
    title: "Email Marketing",
    tagline: "Stay in their inbox and on their mind!",
    desc: "We create powerful campaigns that nurture leads and boost conversions.",
    href: "/services/email-marketing",
    icon: email,
  },
  {
    title: "Affiliate Marketing",
    tagline: "Let others sell for you, smartly!",
    desc: "Grow your brand with trusted affiliates promoting your product for results-based returns.",
    href: "/services/affiliate-marketing",
    icon: affiliate,
  },
  {
    title: "Influencer Marketing",
    tagline: "Real people. Real influence. Real results.",
    desc: "We connect your brand with the right influencers to boost reach and trust authentically.",
    href: "/services/influencer-marketing",
    icon: influencer,
  },
  {
    title: "Content Marketing",
    tagline: "Words that work for your brand!",
    desc: "From blogs to visuals, we create content that educates, engages, and builds trust.",
    href: "/services/content-marketing",
    icon: content,
  },
];
