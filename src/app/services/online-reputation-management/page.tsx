import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/orm.jpg";
import introImg from "../../../../Assets/services/16.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCards,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  ServicePair,
  ServiceStatement,
  ServiceSteps,
  type ServiceFaqItem,
  type ServiceItem,
  type ServiceStep,
} from "../../../../components/service/ServiceSections";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/online-reputation-management";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Online Reputation Management Services in Delhi | Bigwig Media Digital";
const description =
  "Protect your brand with ORM Services in Delhi. Review monitoring, negative content removal & brand repair by Bigwig Media Digital. Talk to Us!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032945/WhatsApp_Image_2026-02-02_at_4.12.04_PM_2_qj4azj.jpg",
      },
    ],
  },
};

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const unsplash = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const services: ServiceItem[] = [
  {
    title: "Online Reputation Audit",
    desc: "We review your digital footprint to pinpoint strengths, weaknesses, and areas that require immediate attention.",
  },
  {
    title: "Reputation Management",
    desc: "Our tailored ORM strategies help reduce the impact of negative content while elevating positive brand perception.",
  },
  {
    title: "Brand Monitoring",
    desc: "We track brand mentions across all platforms and respond promptly to any negativity to safeguard your reputation.",
  },
  {
    title: "Website Development and Management",
    desc: (
      <>
        As a key part of our ORM services, we offer end-to-end{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          website development
        </Link>{" "}
        to strengthen your brand’s digital credibility.
      </>
    ),
  },
  {
    title: "Social Media Management",
    desc: "Our team manages your social profiles, ensuring consistent branding, strong engagement, and a trustworthy online presence.",
  },
  {
    title: "Review Management",
    desc: "Positive reviews influence customer decisions. We help enhance and maintain review quality across major platforms.",
  },
];

const strengthen: ServiceItem[] = [
  {
    title: "Developing a Positive Brand Image",
    desc: "We build a credible, engaging brand presence through tailored content strategies, review enhancement, and multi-platform reputation management, for higher visibility and stronger customer trust.",
    image: unsplash("1521791136064-7986c2920216", 800),
    imageAlt: "Two people shaking hands over a business deal",
  },
  {
    title: "Brand Monitoring",
    desc: "We track mentions across social media, blogs, review sites, and search engines, spot potential issues early, and keep your brand narrative consistent.",
    image: unsplash("1551288049-bebda4e38f71", 800),
    imageAlt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Responding to Negative Reviews",
    desc: "We respond professionally, address customer concerns, and aim to turn dissatisfaction into positive experiences that restore trust.",
    image: unsplash("1551836022-d5d88e9218df", 800),
    imageAlt: "Two colleagues talking through a customer issue at a desk",
  },
  {
    title: "Positive Content Promotion",
    desc: "We promote reviews, testimonials, case studies, and brand stories across relevant platforms so your brand gains visibility, credibility, and confidence.",
    image: unsplash("1557804506-669a67965ba0", 800),
    imageAlt: "Team planning content at a whiteboard",
  },
  {
    title: "Strengthening Your Social Media Presence",
    desc: "We create tailored content, engage with followers, and make sure your platforms reflect authenticity and professionalism, building recognition and loyalty.",
    image: unsplash("1611162616305-c69b3fa7fbe0", 800),
    imageAlt: "Glossy 3D Instagram icon on pink",
  },
];

const process: ServiceStep[] = [
  {
    title: "Understanding your brand",
    desc: "We begin with a detailed audit to analyse your current digital reputation.",
    image: unsplash("1542744173-8e7e53415bb0"),
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Creating a customised ORM plan",
    desc: "We design a strategy aligned with your goals and brand personality.",
    image: unsplash("1521737604893-d14cc237f11d"),
    imageAlt: "Team working on a plan together at a long table",
  },
  {
    title: "Execution and active monitoring",
    desc: "Using SEO, content marketing, social listening, and engagement tactics, we manage your reputation continuously.",
    image: unsplash("1556761175-b413da4baf72"),
    imageAlt: "Team reviewing brand mentions on a desktop screen",
  },
  {
    title: "Optimisation and reporting",
    desc: "We adjust strategies as needed and keep you updated with clear, transparent reports.",
    image: unsplash("1543286386-713bdd548da4"),
    imageAlt: "Rising growth chart on paper",
  },
];

const industries = [
  "Brand Reputation Management",
  "Corporate Reputation Management",
  "Celebrity Reputation Management",
  "Hotel ORM Services",
  "Hospital ORM Services",
  "Restaurant ORM Services",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is Online Reputation Management (ORM)?",
    a: "ORM is monitoring, influencing, and improving how your brand appears online. It includes review handling, content creation, social media management, and search result optimisation. Businesses hire the best ORM company in Delhi to maintain a strong, positive digital identity.",
  },
  {
    q: "Why is a good online reputation necessary for businesses?",
    a: "Consumers trust online reviews as much as personal recommendations, and most check them before buying. A strong reputation improves trust, conversions, and visibility, while a poor one harms credibility and sales. Online Reputation Management in Delhi keeps your brand trustworthy and highlights positive customer experiences.",
  },
  {
    q: "How long does it take to see results with ORM services?",
    a: "It depends on the complexity of your reputation issues. Minor issues can improve within about 30 days, most brands see results within 4 to 12 weeks, and more serious cases can take 3 to 6 months or longer. ORM is an ongoing effort, and a professional ORM agency in Delhi follows a structured plan for steady, lasting improvement.",
  },
  {
    q: "How much do ORM services cost?",
    a: "Pricing depends on the level of monitoring, content removal needs, review management, and competition in your industry. For an accurate estimate, talk to us and we’ll put together a customised package that matches your goals.",
  },
  {
    q: "How do you fix a damaged reputation?",
    a: "We identify harmful content, publish positive articles, blogs, and testimonials, respond professionally to negative reviews, promote high-quality content to push negative results down, and keep monitoring continuously. Together these restore trust and strengthen your brand image.",
  },
  {
    q: "Is Online Reputation Management the same as SEO?",
    a: "No. SEO focuses on ranking higher in search engines, while ORM focuses on shaping public perception of your brand. ORM uses some SEO techniques, but its main goal is improving your reputation. Many businesses combine SEO with ORM services in Delhi for a stronger online presence.",
  },
  {
    q: "Can negative reviews or content be removed?",
    a: "Only content that violates a platform’s policies, such as spam, fake, abusive, or misleading posts, can be removed directly. Otherwise, ORM reduces its impact by responding professionally, increasing positive feedback, and improving the positive results people see in search.",
  },
  {
    q: "How can you help increase my rating?",
    a: "We encourage satisfied customers to leave reviews, respond professionally to negative ones, identify and report fake or harmful reviews, and improve your overall brand visibility. Boosting customer ratings is a key part of effective ORM services in Delhi.",
  },
  {
    q: "What types of Online Reputation Management do you offer?",
    a: "ORM covers review management, social media reputation management, search result cleanup, crisis management, brand monitoring, and personal reputation management. As an ORM agency in Delhi, we choose the right combination for your industry and goals.",
  },
  {
    q: "Is ORM only suitable for large businesses or brands?",
    a: "No. ORM matters for local businesses, startups, professionals, and large companies alike. Even small businesses benefit from Online Reputation Management in Delhi, since customers often decide based on online reviews.",
  },
  {
    q: "How does ORM help with SEO?",
    a: "ORM supports SEO by creating high-quality content, improving brand trust, and boosting the visibility of positive pages. This pushes negative content down and strengthens your overall digital presence.",
  },
  {
    q: "Why is ORM important for local businesses in Delhi?",
    a: "Local consumers rely heavily on reviews and search results before visiting or buying. Strong ORM services in Delhi improve local search rankings, attract more customers, and build a reliable brand image in a competitive market.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function OnlineReputationManagementPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Online reputation management"
        title="ORM Services in Delhi – Improve Your Brand Image with Us"
        intro={
          <p>
            <span className="text-white">Your online reputation is often the first impression people have of you.</span>{" "}
            We protect your image, handle negative feedback with care, and highlight what makes your brand special, so
            you don’t just manage your reputation, you shape it with confidence.
          </p>
        }
        cta="Get a free reputation audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Online Reputation Management services and would like to discuss more."
        formSource="orm-hero"
        formServices={["ORM"]}
      />

      <ServiceIntro
        lead="Online reputation management company in Delhi"
        title="A Trusted Online Reputation Management Company in Delhi NCR"
        image={introImg}
        imageAlt="Online Reputation Management Services"
        body={
          <>
            <p>
              Are you looking for a trusted Online Reputation Management company in Delhi NCR to strengthen your brand
              image? Bigwig Media Digital provides strategic and effective ORM services in Delhi to help brands build
              credibility and maintain a positive presence online.
            </p>
            <p>
              In today’s digital world, a single negative comment can influence purchasing decisions. That makes Online
              Reputation Management in Delhi essential for businesses that want to stay competitive and keep customer
              trust.
            </p>
            <p>
              Our ORM experts monitor, manage, and enhance your brand’s online reputation using advanced tools and
              real-time tracking.
            </p>
          </>
        }
      />

      <ServiceCards
        id="orm-services"
        lead="What we offer"
        title="Our ORM Services in Delhi"
        items={services}
        cta="Get a free reputation audit"
        source="orm-services"
      />

      <ServiceCarousel
        id="orm-strengthen"
        lead="How it works for you"
        title="How Our ORM Services Strengthen Your Brand"
        items={strengthen}
        cta="Protect your brand"
        source="orm-strengthen"
      />

      <ServiceSteps
        id="orm-process"
        heading="Our Transparent ORM Process"
        lead="Four steps from audit to a reputation you can rely on."
        rest="You see every action and every result along the way."
        steps={process}
      />

      <ServicePair
        cta="Get in touch"
        source="orm-benefits"
        panels={[
          {
            title: "Benefits of Strong Online Reputation Management",
            image: unsplash("1586953208448-b95a79798f07"),
            imageAlt: "Smartphone showing an app on a white desk",
            items: [
              {
                title: "Increase sales",
                desc: "Customers check online reviews before purchasing. A positive reputation increases conversions and trust.",
              },
              {
                title: "Build credibility",
                desc: "Addressing negative reviews promptly keeps you transparent and trusted.",
              },
              {
                title: "Greater ROI",
                desc: "Investors and partners research brands online. A positive image opens new business opportunities.",
              },
              {
                title: "Stronger brand image",
                desc: "Negative material can harm trust quickly. Effective ORM protects your brand’s credibility.",
              },
              {
                title: "Attract top talent",
                desc: "Potential employees review your company online. A strong reputation helps you attract skilled applicants.",
              },
            ],
          },
          {
            title: "Why Choose Bigwig Media Digital as Your ORM Agency in Delhi?",
            intro:
              "Partnering with an experienced team, recognised as one of the best ORM companies in Delhi, means measurable and long-lasting results. What you can expect:",
            image: unsplash("1600880292203-757bb62b4baf"),
            imageAlt: "Two colleagues celebrating with a high five at their desk",
            items: [
              "Advanced tools for monitoring and analysis",
              "Customised ORM strategies",
              "Timely responses to negative reviews",
              "Transparent progress reports",
              "Stronger brand credibility and online visibility",
            ],
            outro: "Choosing us means protecting your digital identity and building a brand people trust.",
          },
        ]}
      />

      <ServiceArticle
        lead="Who we help"
        title="Industries We Support"
        cta="Talk to our ORM team"
        source="orm-industries"
        body={
          <>
            <p>Our reputation management services cover brands, businesses, and people across sectors:</p>
            <ul className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <li
                  key={ind}
                  className="rounded-full bg-[var(--paper)] px-4 py-1.5 text-[0.95rem] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)]"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </>
        }
      />

      <ServiceStatement
        heading="Why Online Reputation Management Matters"
        lead="Today’s consumers, especially those aged 18–34, rely heavily on online reviews. A single negative comment can push them toward a competitor."
        rest="Effective ORM protects your brand, supports sales, and builds long-term trust. We help you keep a positive image and succeed online."
        cta="Start your project today"
        source="orm-cta"
        photos={[
          { src: unsplash("1611262588024-d12430b98920", 600), alt: "3D Instagram icon on a dark background" },
          { src: unsplash("1570172619644-dfd03ed5d881", 800), alt: "A client receiving treatment at a skin clinic" },
          { src: unsplash("1517248135467-4c7edcad34c4", 900), alt: "A modern restaurant dining room" },
          { src: unsplash("1611162618071-b39a2ec055fb", 800), alt: "3D Facebook and Messenger icons" },
          { src: unsplash("1460925895917-afdab827c52f", 600), alt: "Website analytics on a laptop" },
        ]}
      />

      <ServiceFaq title="Online reputation management, answered" faqs={faqs} source="orm-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
