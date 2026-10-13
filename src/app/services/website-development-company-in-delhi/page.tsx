import type { Metadata } from "next";
// Used by the commented-out showcase section below
// import { Palette, Search, ShieldCheck, Smartphone } from "lucide-react";
import { Code2, Server, ShoppingBag, Sparkles } from "lucide-react";
import heroImg from "../../../../Assets/Services hero/website.jpg";
import introImg from "../../../../Assets/services/1.jpg";
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
  // ServiceShowcase,
  // ServiceStats,
  type ServiceFaqItem,
  // type ServiceFeature,
  type ServiceItem,
  // type ServiceStat,
} from "../../../../components/service/ServiceSections";
import type { Testimonial } from "@/data/homeData";

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

/* Stat cards and image showcase, commented out for now (see the JSX below).

// Photos from Unsplash (images.unsplash.com is allowed in next.config)

const stats: ServiceStat[] = [
  {
    value: "100+",
    label: "Delhi businesses",
    desc: "Real estate firms, clinics, retailers, and startups across Delhi NCR trust us with their websites.",
    image: "https://images.unsplash.com/photo-1627599936744-51d288f89af4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Web developers working at desks in an office",
  },
  {
    value: "5.0",
    label: "Google rating",
    desc: "Rated 5.0 across 71 Google reviews from our clients.",
    image: "https://images.unsplash.com/photo-1787647561667-7f3b6b34487c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team reviewing design printouts together",
  },
  {
    value: "65%",
    label: "Mobile visits",
    desc: "Of web visits in India come from phones, so every site we build is mobile-first.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hand holding a phone showing a responsive dashboard",
  },
  {
    value: "94%",
    label: "Design-led first impressions",
    desc: "First impressions are design-driven. A custom website makes yours count.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Watercolour wireframe sketches of website layouts",
  },
  {
    value: "4–8",
    label: "Weeks to launch",
    desc: "Typical time from brief to launch for a business website, with a clear timeline up front.",
    image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hand-drawn website wireframe on paper",
  },
];

const whyFeatures: ServiceFeature[] = [
  {
    icon: <Palette size={18} />,
    title: "Personalised design",
    desc: "A creative design strategy built around your Delhi audience.",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Mobile-first layouts",
    desc: "Modern, adaptive layouts optimised for mobile browsing.",
  },
  {
    icon: <Search size={18} />,
    title: "SEO-ready build",
    desc: "Search-friendly architecture and an easy-to-use CMS from the first page.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Tested before launch",
    desc: "Thorough QA across devices, browsers, and screen sizes, with scalable features.",
  },
];
*/

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const photo = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Steps follow what the page already promises: consultation, competitor research, a clear plan and
// timeline, custom design, QA across devices, CMS training, and post-launch support.
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

const whyImage = { src: photo("1547658719-da2b51169166", 1100), alt: "Desk with a website design on screen and tablet" };

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
    desc: "We build fully responsive websites for businesses across South Delhi, West Delhi, and Delhi NCR that look sharp and load fast on every device. With 65%+ of Delhi’s internet users browsing on mobile, a responsive website is non-negotiable.",
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
    desc: "High-converting landing pages with compelling copy, strong visual hierarchy, and clear CTAs, built to support your Google Ads, Meta Ads, and performance marketing campaigns.",
  },
  {
    title: "SEO-Friendly Website Design",
    desc: "Clean code structure, fast Core Web Vitals, proper heading hierarchy, schema markup, and mobile-first indexing. We build websites that rank in Delhi’s competitive search landscape.",
  },
  {
    title: "PSD to HTML Design",
    desc: "We convert Photoshop and Figma designs into pixel-perfect, responsive HTML, preserving every design detail while ensuring fast load times and cross-browser compatibility.",
  },
];

const customWebsite: ServiceItem[] = [
  {
    title: "100% Mobile Responsive",
    desc: "With mobile accounting for nearly 65.49% of all web visits in India, your Delhi audience is browsing on their phones. Every website we build delivers a flawless experience on all screen sizes.",
  },
  {
    title: "A Customised Website",
    desc: "94% of first impressions are design-driven. A custom website makes your business stand out immediately and communicates your brand values in a way template sites simply can’t.",
  },
  {
    title: "A User-Friendly Website",
    desc: "89% of users abandon a website after a poor experience and switch to a competitor. We design intuitive navigation, fast load times, and clear journeys that keep users engaged.",
  },
  {
    title: "A Well-Designed Website",
    desc: "75% of users judge a company’s credibility by its website design. If your website looks outdated, customers will trust your competitors instead.",
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

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

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
      { name: "Tailwind CSS", logo: devicon("tailwindcss/tailwindcss-original") },
      { name: "Vite", logo: devicon("vitejs/vitejs-original") },
    ],
  },
  {
    name: "Animation & Motion",
    desc: "Smooth interactions and scroll effects that bring pages to life",
    icon: <Sparkles size={20} />,
    items: [
      { name: "GSAP", logo: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1765007605/gsap_1_lkfznz.png" },
      { name: "Framer Motion", logo: devicon("framermotion/framermotion-original") },
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
      { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
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
    q: "Why should you hire a web design company in Delhi?",
    a: "Hiring a professional web design company in Delhi gives your business a competitive edge in one of India’s most crowded digital markets. A well-designed website increases traffic, builds credibility with local customers, improves user engagement, and generates more leads. If you’re searching for the best website designers near me, our team delivers custom-designed solutions tailored to your brand and your Delhi audience.",
  },
  {
    q: "How do I hire a web design company?",
    a: "Set a clear project budget, define your goals and requirements, review the agency’s portfolio and case studies, ask about their process and timelines, and finalise the contract with a clearly defined scope of work. We recommend scheduling a free consultation with us. We’ll walk you through exactly what your website needs and what it will cost.",
  },
  {
    q: "How much time does website design take?",
    a: "A standard business website typically takes 4 to 8 weeks from briefing to launch, depending on design complexity, number of pages, content readiness, and revision rounds. E-commerce websites or custom web applications may take longer. We always provide a clear timeline before starting so you know exactly what to expect.",
  },
  {
    q: "How much does a custom website design cost?",
    a: "Website design costs vary based on the number of pages, design complexity, required features, and integrations. After an initial consultation, we provide a transparent, detailed pricing proposal with no hidden charges. We offer packages suitable for Delhi startups, growing SMEs, and large corporates alike.",
  },
  {
    q: "How can I get started with your website design services?",
    a: "Simply reach out via our website contact form, email us at support@bigwigmediadigital.com, or call us at +91 96858 92813. We’ll schedule a free strategy session to understand your business goals and craft a website plan tailored to your needs.",
  },
  {
    q: "What important features do you consider when designing a web page?",
    a: "We incorporate your branding elements (colours, typography, logos, and taglines) alongside a well-planned navigation structure, visual hierarchy, whitespace, infographics, and clear calls to action. Every design decision is made to enhance credibility, improve user experience, and drive conversions.",
  },
  {
    q: "What is the best website design company in Delhi?",
    a: "The best website design company delivers custom solutions at fair, transparent prices, blending creative design with technical expertise and a genuine understanding of your local market. At Bigwig Media Digital, our 5+ years of experience, 100+ Delhi-area clients, and 5.0 Google rating reflect our commitment to delivering websites that truly work for businesses like yours.",
  },
  {
    q: "Do you provide ongoing support after the website is launched?",
    a: "Yes. We offer comprehensive post-launch support including regular updates, automated backups, security monitoring, bug fixes, and continuous performance optimisation, so your website stays fast, secure, and up to date at all times.",
  },
  {
    q: "Will I be able to update the website myself once it’s live?",
    a: "Absolutely. We build most websites on user-friendly CMS platforms like WordPress, so you can update text, images, blogs, and pages without any technical knowledge. We also provide hands-on training after launch so your team feels fully confident managing the site.",
  },
  {
    q: "Why is Bigwig Media Digital the top choice for website design in Delhi?",
    a: "We combine creative design, technical depth, local market knowledge, and genuine client focus. Our designers stay current with the latest trends, our developers build for speed and SEO, and our project managers ensure timely, on-budget delivery every time. Our 71 five-star Google reviews from Delhi-area clients speak for themselves.",
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
    isPartOf: { "@type": "WebSite", name: "Bigwig Media Digital", url: "https://www.bigwigmediadigital.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bigwigmediadigital.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.bigwigmediadigital.com/services" },
        { "@type": "ListItem", position: 3, name: "Website Development Company in Delhi", item: URL },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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

const strong = "font-semibold text-[var(--ink)]";

export default function WebsiteDevelopmentPage() {
  return (
    <main>
      {schemas.map((s) => (
        <script key={s["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <ServiceHero
        image={heroImg}
        lead="Website development"
        title="Best Website Development Company in Delhi"
        intro={
          <p>
            <span className="text-white">We don’t just design websites. We engineer digital growth engines.</span>{" "}
            With 5+ years of hands-on experience, we build websites for businesses across Delhi NCR, from Connaught
            Place startups to Gurugram enterprises and Noida e-commerce brands, that attract the right audience and turn
            visitors into customers.
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
        collage={{
          // Placeholder photos from Unsplash, to be replaced with designed images
          images: [
            {
              src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
              alt: "Responsive website on a phone",
            },
            {
              src: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=800&q=80",
              alt: "Website wireframe sketch",
            },
          ],
        }}
        body={
          <>
            <p>
              As a trusted <strong className={strong}>Website Development Company in Delhi NCR</strong>, we’ve helped
              100+ local businesses, from real estate firms in Greater Noida to healthcare clinics in Rohini, establish
              a powerful, credible online presence. Our process is straightforward: we understand your business goals,
              research your competition, plan a focused digital strategy, and deliver a website that converts.
            </p>
            <p>
              Delhi’s market is competitive. Whether you’re targeting clients in Saket, Vasant Kunj, Lajpat Nagar, or
              beyond, your website needs to stand out in both design and search performance. Businesses searching for a
              reliable <strong className={strong}>website development company near me</strong> in Delhi trust us
              because we combine global design standards with a deep understanding of the local business landscape.
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
        title="Benefits of Hiring Bigwig Media Digital for Your Business Website"
        intro="Delhi businesses choose us because we understand the local market, deliver on time, and build websites that generate real results."
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
              We’ve worked with real estate developers in Greater Noida, healthcare providers in Rohini, e-commerce
              brands in Lajpat Nagar, educational institutions in Dwarka, and financial services firms in Connaught
              Place. We remove the pain points (slow websites, cluttered layouts, poor mobile experience, weak SEO) and
              replace them with websites your customers love and Google rewards.
            </p>
            <h3 className="pt-2 font-semibold text-[var(--ink)]">What we deliver</h3>
            <ul className="grid gap-x-6 gap-y-2.5 text-[0.95rem] sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
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

      {/* Image-led alternative to the section above, commented out for now.
      <ServiceShowcase
        heading="Why choose Bigwig Media Digital as your website development partner in Delhi?"
        statement="Your website is the first handshake between your brand and your audience. We blend 5+ years of design expertise with a deep understanding of Delhi’s digital landscape to deliver websites that don’t just impress, they perform."
        body={
          <>
            <p>
              We’ve worked with real estate developers in Greater Noida, healthcare providers in Rohini, e-commerce
              brands in Lajpat Nagar, educational institutions in Dwarka, and financial services firms in Connaught
              Place.
            </p>
            <p>
              We remove the pain points (slow websites, cluttered layouts, poor mobile experience, weak SEO) and
              replace them with websites your customers love and Google rewards.
            </p>
          </>
        }
        features={whyFeatures}
        image={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
        imageAlt="Laptop showing code on a bright developer desk"
        quote="The website they created was tailor-made for my startup’s goals, and it worked beautifully."
        quoteBy="Eshaan Aggarwal, Google review"
        cta="Start your website project"
        source="website-why-us"
      />
      */}

      <Clients />

      <Testimonials
        items={reviews}
        title="What Our Clients Say About Our Website Development Services"
        source="website-testimonials"
      />

      <ServiceFaq title="Website development, answered" faqs={faqs} source="website-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
