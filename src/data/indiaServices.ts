/**
 * The services list for the India city pages (Ahmedabad, Bhopal, Goa), shown in the shared ServicesAccordion.
 * Each links to its main service page; bullets are what's included.
 */
export type ServiceItem = { title: string; desc: string; href: string; bullets: string[] };

/** The few services the city pages list; the rest are one click away on /services. */
export const coreServices = (): ServiceItem[] =>
  [
    "Performance Marketing",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Website Designing & Development",
    "Graphic Designing & Video Editing",
    "Online Reputation Management (ORM)",
  ].flatMap((t) => indiaServices.filter((s) => s.title === t));

export const indiaServices: ServiceItem[] = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Rank on Google for the searches your customers make, in your city and across India.",
    href: "/services/search-engine-optimization",
    bullets: [
      "Keyword research for your city, area and products",
      "Technical fixes for speed, mobile and indexing",
      "Service and location pages that rank",
      "Monthly rankings and traffic report",
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Reels, posts and campaigns on Instagram, Facebook and LinkedIn that bring enquiries, not just likes.",
    href: "/services/social-media-marketing",
    bullets: [
      "Monthly content calendar, approved by you",
      "Reels, carousels and festive campaigns",
      "Comments and DMs answered, leads passed on",
      "Monthly reach, engagement and enquiry report",
    ],
  },
  {
    title: "Performance Marketing",
    desc: "Google and Meta ads paid for by the lead, with every rupee and enquiry tracked.",
    href: "/services/performance-marketing",
    bullets: [
      "Google Search, Performance Max and YouTube ads",
      "Meta lead ads and WhatsApp campaigns",
      "Landing pages built to convert",
      "Cost per lead and per sale, every month",
    ],
  },
  {
    title: "Content Marketing",
    desc: "Blogs, guides and page copy that answer what your customers ask, and rank for it.",
    href: "/services/content-marketing",
    bullets: [
      "Topic plans built on real search data",
      "Blogs, guides and landing page copy",
      "Case studies and success stories",
      "Content refreshed as rankings shift",
    ],
  },
  {
    title: "Website Designing & Development",
    desc: "Fast, mobile-first websites with call, WhatsApp and enquiry forms where customers expect them.",
    href: "/services/website-development-company-in-delhi",
    bullets: [
      "Mobile-first design that loads fast",
      "Built on Next.js, WordPress or Shopify",
      "SEO-ready structure from day one",
      "Forms and WhatsApp wired to your team",
    ],
  },
  {
    title: "Email Marketing",
    desc: "Newsletters and automated emails that bring customers back and turn enquiries into sales.",
    href: "/services/email-marketing",
    bullets: [
      "Welcome, follow-up and win-back automations",
      "Newsletters designed and written for you",
      "List clean-up and segmentation",
      "Open, click and sales reporting",
    ],
  },
  {
    title: "Social Media Optimization (SMO)",
    desc: "Profiles, bios and posts set up so people who find you trust you and get in touch.",
    href: "/services/social-media-optimization",
    bullets: [
      "Profile, bio and highlight clean-up",
      "Consistent branding on every platform",
      "Hashtag and posting-time strategy",
      "Contact buttons and links that work",
    ],
  },
  {
    title: "Graphic Designing & Video Editing",
    desc: "Logos, ad creatives, reels and product videos, including CGI and AI-made ads.",
    href: "/services/graphic-designing",
    bullets: [
      "Logos and brand identities",
      "Ad creatives sized for every platform",
      "Reels, product videos and CGI ads",
      "Brochures, banners and print",
    ],
  },
  {
    title: "Affiliate Marketing",
    desc: "Partners and publishers who sell for you and are paid only when they do.",
    href: "/services/affiliate-marketing",
    bullets: [
      "Recruiting coupon, cashback and content partners",
      "Commission plans that protect your margins",
      "Tracking links and fraud checks",
      "Monthly partner performance report",
    ],
  },
  {
    title: "Influencer Marketing",
    desc: "Local and national creators who reach your customers and make them trust you.",
    href: "/services/influencer-marketing",
    bullets: [
      "Creator shortlists by niche, city and audience",
      "Briefs, contracts and approvals handled",
      "Content reused in your ads",
      "Reach, engagement and sales tracked",
    ],
  },
  {
    title: "Online Reputation Management (ORM)",
    desc: "More five-star Google reviews, and calm, quick replies to the rest.",
    href: "/services/online-reputation-management",
    bullets: [
      "Review monitoring across Google and social",
      "Reply templates and fast responses",
      "Steady flow of genuine new reviews",
      "Negative results pushed down in search",
    ],
  },
];
