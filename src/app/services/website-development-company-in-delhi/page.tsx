import type { Metadata } from "next";
// Used by the commented-out showcase section below
// import { Palette, Search, ShieldCheck, Smartphone } from "lucide-react";
import { Code2, Server, ShoppingBag, Sparkles } from "lucide-react";
import heroImg from "../../../../Assets/Services hero/website.jpg";
import introImg from "../../../../Assets/services/website/website-intro.png";
import Partners from "../../../../components/home/Partners";
import Clients from "../../../../components/home/Clients";
import Testimonials from "../../../../components/home/Testimonials";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceStatement,
  ServiceSteps,
  type ServiceStep,
  ServiceCards,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  ServiceTechTabs,
  type TechDomain,
  ServiceSplitCarousel,
  type ServiceFaqItem,
  type ServiceItem,
  ServiceArticle,
} from "../../../../components/service/ServiceSections";
import type { Testimonial } from "@/data/homeData";
import Link from "next/link";

const PATH = "/services/website-development-company-in-delhi";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Website Development Company in Delhi | Bigwig Media Digital";
const description =
  "Need a Website Development Company in Delhi? We build fast, responsive & SEO-friendly websites. Custom | E-Commerce | CMS. Get a Free Quote!";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Website Development Company in Delhi, Web Design Company in Delhi, Website Designing Company in Delhi, Website Development Company in Delhi NCR, Web Development Services Delhi, Website Designer Near Me, Website Development Company in South Delhi, North Delhi, East Delhi, West Delhi",
  alternates: { canonical: URL },
  openGraph: {
    title,
    description:
      "Trusted website development company in Delhi offering responsive, SEO-friendly and high-performance business websites.",
    url: URL,
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032924/WhatsApp_Image_2026-02-02_at_4.12.04_PM_1_ditcz0.jpg",
      },
    ],
  },
};

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const photo = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const processSteps: ServiceStep[] = [
  {
    title: "Understand your goals",
    desc: "We start with a free consultation to learn your business, audience, and goals, so the website is built around what you need it to do.",
    image: photo("1517245386807-bb43f82c33c4"),
    imageAlt: "Client and team discussing a website project",
  },
  {
    title: "Research your competition",
    desc: "We study your Delhi-area competitors and search landscape to find what works and where your site can stand out.",
    image: photo("1615914143778-1a1a6e50c5dd"),
    imageAlt: "Taking research notes beside a laptop",
  },
  {
    title: "Plan the structure",
    desc: "We map pages, user journeys, and SEO architecture, and share a clear timeline and transparent proposal before work starts.",
    image: photo("1503551723145-6c040742065b-v2"),
    imageAlt: "Sticky notes mapping out a site plan",
  },
  {
    title: "Design",
    desc: "Custom, mobile-first designs built around your brand, with clear calls to action and no templates.",
    image: photo("1609921212029-bb5a28e60960"),
    imageAlt: "Website and app designs on a desktop screen",
  },
  {
    title: "Develop & test",
    desc: "We build for speed and SEO, then test thoroughly across devices, browsers, and screen sizes before launch.",
    image: photo("1738255654134-1877cb984a8f"),
    imageAlt: "Website code in an editor",
  },
  {
    title: "Launch & support",
    desc: "We launch, train your team on the CMS, and stay on for updates, backups, security monitoring, and performance tuning.",
    image: photo("1714079761488-e0c9b9ac4138"),
    imageAlt: "Support specialist on a video call",
  },
];

const whyImage = {
  src: photo("1547658719-da2b51169166", 1100),
  alt: "Desk with a website design on screen and tablet",
};

const deliverables = [
  "A creative, personalised design strategy built around your Delhi audience",
  "Modern, adaptive layouts optimised for mobile-first browsing",
  "SEO-ready architecture from the very first page",
  "An easy-to-use CMS so your team can manage content independently",
  "Scalable features that grow as your business grows across Delhi NCR",
  "Thorough QA testing across devices, browsers, and screen sizes before every launch",
];

const webServices: ServiceItem[] = [
  {
    title: "Responsive Web Design",
    desc: "Most visitors in India browse on mobile, so a responsive website is essential. With 65%+ of Delhi’s internet users browsing on mobile, a responsive website is non-negotiable.",
  },
  {
    title: "Static Website Design",
    desc: "Clean, fast-loading static websites for businesses that need a professional online presence without complex back-end systems. Perfect for local service providers, consultants, and professionals across Delhi.",
  },
  {
    title: "Dynamic Website Design",
    desc: "Dynamic websites for businesses that need real-time content, user interaction, and custom functionality, ideal for Delhi-based portals, directories, booking platforms, and membership sites.",
  },
  {
    title: "Startup Website Design",
    desc: "We’ve partnered with numerous Delhi NCR startups from the ground up, helping them launch fast, look professional, and compete with established players from day one.",
  },
  {
    title: "Website Redesign",
    desc: "Is your current website losing you customers? We transform outdated websites into modern, high-performing platforms with faster load times, lower bounce rates, and higher lead conversions.",
  },
  {
    title: "Corporate Website Design",
    desc: "Enterprise-level corporate websites for large Delhi-based organisations, built to handle high traffic, complex operations, multi-department content, and global audiences with a strong brand identity.",
  },
  {
    title: "Landing Page Design",
    desc: (
      <>
        High-converting landing pages with compelling copy, strong visual
        hierarchy, and clear CTAs, built to support your Google Ads, Meta Ads,
        and
        <Link href="/services/performance-marketing" className="text-blue-600">
          {" "}
          performance marketing{" "}
        </Link>
        campaigns.
      </>
    ),
  },
  {
    title: "SEO-Friendly Website Design",
    desc: "Clean code structure, fast Core Web Vitals, proper heading hierarchy, schema markup, and mobile-first indexing. We build websites designed to compete in Delhi’s search landscape.",
  },
  {
    title: "PSD to HTML Design",
    desc: "We convert Photoshop and Figma designs into pixel-perfect, responsive HTML, preserving every design detail while ensuring fast load times and cross-browser compatibility.",
  },
  {
    title: "E-commerce Website Development",
    desc: "Online stores built for sales: product pages, cart, checkout, payment setup and order management on platforms such as Shopify and WordPress. We help you choose the platform that fits your catalogue and budget.",
  },
  {
    title: "WordPress and CMS Development",
    desc: "We build on WordPress and other CMS platforms so your team can manage pages, blogs and images without technical knowledge. We provide training and documentation so you can update your site confidently.",
  },
];

const customWebsite: ServiceItem[] = [
  {
    title: "Mobile Responsive",
    desc: "Most of your Delhi audience is browsing on their phones. Every website we build delivers a smooth experience on all screen sizes.",
  },
  {
    title: "Customised Website",
    desc: "First impressions are largely design-driven. A custom website makes your business stand out immediately and communicates your brand values in a way template sites simply can’t.",
  },
  {
    title: "User-Friendly Website",
    desc: "Many visitors leave a website after a poor experience and switch to a competitor. We design intuitive navigation, fast load times, and clear journeys that keep users engaged.",
  },
  {
    title: "Well-Designed Website",
    desc: "Visitors often judge a company’s credibility by its website design. If your website looks outdated, customers will trust your competitors instead.",
  },
  {
    title: "Your Website Reflects Your Brand",
    desc: "Your website is your most powerful marketing asset, active 24/7 for customers across Delhi, India, and the world. We build true extensions of your brand, not digital brochures.",
  },
  {
    title: "We Shape Digital Experiences",
    desc: "We go beyond design to craft connected digital experiences that engage users, communicate value, and drive measurable business results.",
  },
];

const benefits: ServiceItem[] = [
  {
    title: "Customised Web Design",
    desc: "Every website is designed exclusively for your business, with no templates and no shortcuts. We understand your audience, competitors, and goals before writing a single line of code.",
  },
  {
    title: "Technical Expertise",
    desc: "Our developers are proficient in React, Next.js, WordPress, Shopify, Node.js, and more, giving you enterprise-grade capability at agency pricing.",
  },
  {
    title: "Scalability",
    desc: "Whether you’re a startup in Noida today or a multi-city enterprise tomorrow, our architecture supports seamless expansion without expensive rebuilds.",
  },
  {
    title: "Consistency & Branding",
    desc: "From colour palette to typography to tone of voice, we keep strict brand consistency across every page so visitors always experience a cohesive, trustworthy brand.",
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Your website works flawlessly on Chrome, Safari, Firefox, and Edge, across every device your customers use.",
  },
  {
    title: "UI & UX Design",
    desc: "We design around the user’s journey, with clear CTAs, logical page flow, and intuitive interfaces that guide visitors from landing to conversion.",
  },
  {
    title: "Faster Load Times",
    desc: "We optimise every website for Core Web Vitals. Faster load times mean lower bounce rates and better Google rankings for competitive Delhi keywords.",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "We don’t disappear after launch. Our support team handles maintenance, security updates, performance monitoring, and troubleshooting round the clock.",
  },
];

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

// Same technologies as before, grouped. Add a domain (e.g. Mobile Apps, AI) by adding an entry here.
const techDomains: TechDomain[] = [
  {
    name: "Frontend",
    desc: "Fast, responsive interfaces built on modern frameworks",
    icon: <Code2 size={20} />,
    items: [
      { name: "HTML5", logo: devicon("html5/html5-original") },
      { name: "CSS3", logo: devicon("css3/css3-original") },
      { name: "JavaScript", logo: devicon("javascript/javascript-original") },
      { name: "TypeScript", logo: devicon("typescript/typescript-original") },
      { name: "React", logo: devicon("react/react-original") },
      { name: "Next.js", logo: devicon("nextjs/nextjs-original") },
      {
        name: "Tailwind CSS",
        logo: devicon("tailwindcss/tailwindcss-original"),
      },
      { name: "Vite", logo: devicon("vitejs/vitejs-original") },
    ],
  },
  {
    name: "Animation & Motion",
    desc: "Smooth interactions and scroll effects that bring pages to life",
    icon: <Sparkles size={20} />,
    items: [
      {
        name: "GSAP",
        logo: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007605/gsap_1_lkfznz.png",
      },
      {
        name: "Framer Motion",
        logo: devicon("framermotion/framermotion-original"),
      },
      { name: "AOS", emoji: "🌊" },
    ],
  },
  {
    name: "Backend & Database",
    desc: "Reliable servers, APIs, and data storage",
    icon: <Server size={20} />,
    items: [
      { name: "Node.js", logo: devicon("nodejs/nodejs-original") },
      { name: "MongoDB", logo: devicon("mongodb/mongodb-original") },
    ],
  },
  {
    name: "CMS & E-commerce",
    desc: "Websites and stores your team can manage without code",
    icon: <ShoppingBag size={20} />,
    items: [
      { name: "WordPress", logo: devicon("wordpress/wordpress-plain") },
      {
        name: "Shopify",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
    ],
  },
];

// Google reviews that mention our website work; quoted as written.
const reviews: Testimonial[] = [
  {
    name: "Ravinder Bisala",
    rating: 5,
    image: "",
    review:
      "I recently partnered with bigwig media digital for my business online campaign and I must say they truly live up to their reputation. They created the best website which helped us a lot in boosting our business.",
  },
  {
    name: "Amit Gambhir",
    rating: 5,
    image: "",
    review:
      "We wanted a complete digital marketing strategy for our startup, and BigWig delivered beyond expectations. From website design and SEO to content marketing and paid ads, they covered everything. The best part is their personalized approach—no generic strategies, just tailor-made solutions. Thank you guys.",
  },
  {
    name: "Chetan Pandey",
    rating: 5,
    image: "",
    review:
      "We have been working with Big Wig Media digital for nearly a year and their Website and SEO combination strategy is giving us steady results. Unlike agencies that over promise they deliver consistent improvements and focus on long term growth.",
  },
  {
    name: "Aparajita Pandey",
    rating: 5,
    image: "",
    review:
      "I liked how Big Wig media digital took time to analyse our competitors before suggesting a plan. Their Website Creation services helped our restaurant.",
  },
  {
    name: "Vaibhav Soni",
    rating: 5,
    image: "",
    review:
      "They are professional, experienced and enthusiastic in their profession. Best digital marketing services in all verticals specially website creation.",
  },
  {
    name: "Eshaan Aggarwal",
    rating: 5,
    image: "",
    review:
      "What I loved most is that they didn’t offer me a one-size-fits-all plan. The website they created was tailor-made for my startup’s goals, and it worked beautifully.",
  },
  {
    name: "Suresh kumar",
    rating: 5,
    image: "",
    review:
      "Their transparency and data-driven strategies won me over. They have the best website creation strategies. I can easily check and manage my data at the backend.",
  },
  {
    name: "Chesta Gupta",
    rating: 5,
    image: "",
    review:
      "I have an ecommerce business for which I took help from Bigwig Media Digital for an online e-commerce store setup. They have given me the best solution for it and now my website is booming.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "How much does it cost to develop a website in Delhi?",
    a: "The cost depends on the type of website, number of pages, design complexity, features, and integrations. A simple business website costs less than an e-commerce store or a custom web application. After a free consultation, we share a detailed proposal so you know exactly what you are paying for.",
  },
  {
    q: "How much does an e-commerce website cost in Delhi?",
    a: "An online store costs more than a business website because it needs product management, a cart, payments, shipping, and order handling. The final cost depends on the number of products, the platform, such as Shopify or WordPress, and the integrations you need.",
  },
  {
    q: "Why do website prices vary so much between companies?",
    a: "Prices differ because the project scope differs. A template website, a custom-designed website, and a custom web application are very different projects. Costs also depend on design effort, technology, SEO requirements, testing, and post-launch support. Always compare quotes based on what is included, not just the price.",
  },
  {
    q: "Are domain and hosting included in the website cost?",
    a: "Domain registration and hosting are usually separate annual costs, although some website packages include them. Ask for these details to be clearly listed in the proposal so you understand any recurring charges before the project begins.",
  },
  {
    q: "Is a website builder cheaper than custom development?",
    a: "Website builders such as Wix and Squarespace can be cheaper initially, but they offer less flexibility for custom features and functionality. Custom development usually costs more upfront but allows you to build around your business requirements and scale as your needs grow.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website typically takes 4 to 8 weeks from briefing to launch. The timeline depends on the number of pages, design complexity, content readiness, and revision rounds. E-commerce websites and custom web applications may take longer.",
  },
  {
    q: "What do you need from me to start a website project?",
    a: "We need to understand your business goals, brand identity, preferred pages, website content, design preferences, and required features, such as payments or bookings. If your content is not ready, let us know and we can plan content preparation as part of the project.",
  },
  {
    q: "Which is better for my business: a static or a dynamic website?",
    a: "A static website suits businesses that mainly need to share information, such as consultants and local service providers. A dynamic website is better for businesses that need user accounts, bookings, search functionality, or frequently updated content. We recommend the right option after understanding your business requirements.",
  },
  {
    q: "Should I choose WordPress or a custom-coded website?",
    a: "WordPress is a good choice when you want to update content easily and launch efficiently. A custom-coded website, for example using React or Next.js, is suitable for projects that need greater flexibility, custom functionality, or specific performance requirements. The right choice depends on your goals, budget, and growth plans.",
  },
  {
    q: "Can you build an e-commerce website on Shopify or WordPress?",
    a: "Yes. We build online stores on platforms such as Shopify and WordPress, including product pages, shopping carts, checkout, and payment integration. We help you choose the platform that best fits your product catalogue, business requirements, and budget.",
  },
  {
    q: "What is the difference between a website and a web application?",
    a: "A website mainly presents information through pages, images, and contact forms. A web application allows users to perform tasks such as logging in, managing data, making bookings, or accessing dashboards. Web applications generally require more planning and development than informational websites.",
  },
  {
    q: "Do you redesign an existing website?",
    a: "Yes. Our website redesign services can improve your design, loading speed, mobile experience, usability, and conversions. We review your existing website first to understand what works well and identify areas that need improvement.",
  },
  {
    q: "Is SEO included in website development?",
    a: "We build websites with an SEO-ready foundation, including clean code, proper heading structure, mobile-friendly layouts, fast loading, and relevant schema markup where appropriate. Ongoing SEO services, such as keyword targeting and link building, are separate services that can be added after launch.",
  },
  {
    q: "Does website speed affect Google rankings?",
    a: "Yes. Website performance and Core Web Vitals are among the factors Google uses to evaluate page experience. Slow pages can also frustrate visitors and reduce conversions. We optimise images, code, and loading behaviour to support a fast, user-friendly experience.",
  },
  {
    q: "Will a new website affect my existing Google rankings?",
    a: "It can if the redesign or migration is not handled properly. We plan URL redirects, preserve relevant page titles and content, review technical SEO settings, and prepare an updated sitemap for submission to Google. These steps help protect existing organic traffic, although rankings cannot be guaranteed.",
  },
  {
    q: "How much does website maintenance cost?",
    a: "Maintenance costs depend on your website's size and requirements, including software updates, backups, security checks, bug fixes, and performance monitoring. We can include a suitable support plan in your proposal so the ongoing costs are clear from the start.",
  },
  {
    q: "Do you provide ongoing support after the website is launched?",
    a: "Yes. We offer post-launch support based on your chosen plan, which may include software updates, backups, security monitoring, bug fixes, and performance optimisation. We explain the support scope and response arrangements so you know what assistance is available after launch.",
  },
  {
    q: "Will I be able to update the website myself once it's live?",
    a: "Yes. We can build your website with a user-friendly content management system, such as WordPress, so you can update text, images, blogs, and pages without coding. We can also provide training after launch. For custom-coded websites, editing options depend on the content management features included in the project.",
  },
  {
    q: "Why should you hire a web design company in Delhi?",
    a: "Hiring a professional web design company in Delhi gives your business an opportunity to stand out in a competitive digital market. A well-designed website can build credibility with local customers, improve user engagement, support search visibility, and generate more enquiries. Our team delivers custom-designed solutions tailored to your brand and Delhi audience.",
  },
  {
    q: "How to pick a web design and development company in Delhi?",
    a: "Review the company's portfolio, check whether its websites are built for speed and SEO, ask about its process and timelines, and make sure the quote clearly lists the project scope and deliverables. Also, check what support is available after launch. A free consultation is a useful way to assess whether the team understands your business.",
  },
  {
    q: "Which is the best website development company in Delhi?",
    a: "There is no single best company for every business. The right choice depends on your goals, budget, and timeline. Evaluate each company based on its portfolio, project process, transparent pricing, performance and SEO practices, post-launch support, and verifiable client reviews. Book a free consultation with Bigwig Media Digital to discuss your requirements and request a written proposal.",
  },
  {
    q: "Is web design still in demand in 2026?",
    a: "Yes. Businesses still need effective websites to market their services, reach customers, and support online sales. Expectations now include fast loading, mobile-first design, an SEO-ready structure, accessibility, and clear paths to enquire or buy. Website builders and AI tools can create basic pages, but thoughtful design and tailored functionality remain valuable for building a distinctive brand and supporting business growth.",
  },
  {
    q: "Do you work with businesses across Delhi NCR?",
    a: "Yes. We work with businesses across Delhi NCR, including Delhi, Noida, and Gurgaon, providing website design and development solutions tailored to different business needs.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Website Development Company in Delhi | Bigwig Media Digital",
    url: URL,
    description:
      "Looking for the best website development company in Delhi? Bigwig Media Digital builds responsive, SEO-friendly websites for businesses across Delhi NCR.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Bigwig Media Digital",
      url: "https://www.bigwigmediadigital.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bigwigmediadigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.bigwigmediadigital.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Website Development Company in Delhi",
          item: URL,
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bigwig Media Digital",
    url: URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "71",
      bestRating: "5",
      worstRating: "1",
    },
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main>
      {schemas.map((s) => (
        <script
          key={s["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <ServiceHero
        image={heroImg}
        lead="Website development"
        title="Best Website Development Company in Delhi"
        intro={
          <p>
            <span className="text-white">
              We don’t just design websites. We engineer digital growth engines.
            </span>{" "}
            With 5+ years of hands-on experience, we build websites for
            businesses across Delhi NCR, from Connaught Place startups to
            Gurugram enterprises and Noida e-commerce brands, that attract the
            right audience and turn visitors into customers.
          </p>
        }
        cta="Request a free website consultation"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Website Development services and would like to discuss more."
        formSource="website-hero"
        formServices={["Website Development"]}
      />

      <Partners />

      <ServiceIntro
        lead="Website development company in Delhi NCR"
        title="Best Website Development Company in Delhi NCR"
        image={introImg}
        imageAlt="Best Web Development Company in Delhi"
        // collage={{
        //   // Placeholder photos from Unsplash, to be replaced with designed images
        //   images: [
        //     {
        //       src: "/website/website-intro.png",
        //       alt: "Responsive website on a phone",
        //     },
        //     {
        //       src: "/website/website-intro.png",
        //       alt: "Website wireframe sketch",
        //     },
        //   ],
        // }}
        body={
          <>
            <p>
              We help businesses across Delhi NCR, from real estate firms in
              Greater Noida to healthcare clinics in Rohini, build a strong,
              credible online presence. Our process is straightforward: we
              understand your business goals, research your competition, plan a
              focused digital strategy and deliver a website that converts.
            </p>
            <p>
              Delhi’s market is competitive. Whether you’re targeting customers
              in Saket, Vasant Kunj, Lajpat Nagar or beyond, your website needs
              to stand out in both design and search performance. We combine
              strong design standards with an understanding of the local
              business landscape.
            </p>
          </>
        }
      />

      {/* <ServiceStats items={stats} label="Bigwig Media Digital in numbers" /> */}

      <ServiceCarousel
        id="website-services"
        lead="Web design company in Delhi"
        title="Top Services by the Best Website Development Company in Delhi"
        intro="End-to-end website design and development for businesses of all sizes, from solo entrepreneurs in Karol Bagh to corporate groups headquartered in Aerocity. Every website we build is custom-coded, performance-optimised, and SEO-ready from day one."
        items={webServices}
        cta="Get a free quote"
        source="website-services"
      />

      <ServiceCards
        lead="Website designing company in Delhi"
        title="Why Do Delhi Businesses Need a Custom Website?"
        intro="A generic, template-based website won’t cut it in Delhi’s fast-moving market. Custom-designed websites give your business a distinct identity, build trust with local customers, and are built to perform, not just look good."
        items={customWebsite}
        cta="Book a website strategy call"
        source="website-custom"
      />

      <ServiceSteps
        id="website-process"
        heading="Our Website Development Process in Delhi"
        lead="A standard business website goes from brief to launch in 4 to 8 weeks."
        rest="Here’s what happens at each step, and what you can expect from us."
        steps={processSteps}
      />

      <ServiceSplitCarousel
        lead="Website development company near me"
        title="Benefits of Hiring Bigwig Media Digital"
        intro="We understand the local market and build websites designed to generate enquiries and sales."
        items={benefits}
        cta="Get a website consultation"
        source="website-benefits"
      />

      <ServiceTechTabs
        lead="Our tech stack"
        title="Technologies We Work On"
        domains={techDomains}
        cta="Discuss your project"
        source="website-tech"
      />

      <ServiceStatement
        heading="Why Choose Bigwig Media Digital as Your Website Development Partner in Delhi?"
        lead="Your website is the first handshake between your brand and your audience."
        rest="We blend 5+ years of design expertise with a deep understanding of Delhi’s digital landscape to deliver websites that don’t just impress, they perform."
        body={
          <>
            <p>
              We’ve worked with real estate developers in Greater Noida,
              healthcare providers in Rohini, e-commerce brands in Lajpat Nagar,
              educational institutions in Dwarka, and financial services firms
              in Connaught Place. We remove the pain points (slow websites,
              cluttered layouts, poor mobile experience, weak SEO) and replace
              them with websites your customers love and Google rewards.
            </p>
            <h3 className="pt-2 font-semibold text-[var(--ink)]">
              What we deliver
            </h3>
            <ul className="grid gap-x-6 gap-y-2.5 text-[0.95rem] sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </>
        }
        cta="Start your website project"
        source="website-why-us"
        image={whyImage}
      />

      <Clients />

      <Testimonials
        items={reviews}
        title="What Our Clients Say About Our Website Development Services"
        source="website-testimonials"
      />

      {/* Website Development Cost in Delhi: What Affects the Price */}
      <ServiceArticle
        lead="Investment & Timelines"
        title="Website Development Cost in Delhi: What Affects the Price"
        cta="Get a Free Website Consultation"
        source="web-dev-cost"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              The cost of a website depends on what it needs to do. A simple
              business website costs less than an online store or a custom web
              application. After a free consultation, we share a detailed
              proposal so you know exactly what you are paying for.
            </p>

            {/* Cost & Timeline Table */}
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Project type
                    </th>
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Best for
                    </th>
                    <th className="p-3 font-semibold text-gray-900">
                      Typical timeline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200 text-gray-900">
                      Business website
                    </td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">
                      Service businesses, consultants, local companies
                    </td>
                    <td className="p-3 text-gray-700">4 to 8 weeks</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200 text-gray-900">
                      E-commerce website
                    </td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">
                      Retailers and brands selling online
                    </td>
                    <td className="p-3 text-gray-700">
                      Longer, depends on products and features
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200 text-gray-900">
                      Corporate website
                    </td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">
                      Larger organisations with many pages and departments
                    </td>
                    <td className="p-3 text-gray-700">Depends on scope</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200 text-gray-900">
                      Custom web application
                    </td>
                    <td className="p-3 border-r border-gray-200 text-gray-700">
                      Portals, dashboards, booking and membership platforms
                    </td>
                    <td className="p-3 text-gray-700">Depends on scope</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost Factors List */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What affects the cost:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Number of pages and design complexity</li>
                <li>Features and integrations, such as payments or bookings</li>
                <li>The platform and technology used</li>
                <li>Content writing, images and SEO setup</li>
                <li>Support and maintenance after launch</li>
              </ul>
            </div>
          </>
        }
      />

      <ServiceFaq
        title="Website development, answered"
        faqs={faqs}
        source="website-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
