import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/affiliate_marketing.jpg";
import introImg from "../../../../Assets/services/12.jpg";
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

const PATH = "/services/affiliate-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Affiliate Marketing Services in Delhi | Bigwig Media Digital";
const description =
  "Performance-based Affiliate Marketing Services in Delhi. Build affiliate networks that drive consistent sales & revenue. Start Growing Today!";

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

const approach = [
  "Build strong affiliate relationships",
  "Bring qualified traffic",
  "Convert leads into measurable revenue",
  "Optimize campaigns continuously",
];

const whyChoose: ServiceItem[] = [
  {
    title: "Industry Expertise & Trusted Affiliate Network",
    desc: "We work with a strong network of high-quality publishers, influencers, and performance marketers across India. This ensures your brand is promoted through trusted, relevant, and result-oriented channels, making us a preferred affiliate marketing agency in Delhi for high-growth brands.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Two business partners shaking hands",
  },
  {
    title: "Complete End-to-End Affiliate Management",
    desc: "From strategy creation to onboarding affiliates, tracking performance, managing payouts, and optimizing results, our affiliate marketing company in Delhi handles everything so you can focus on scaling your business.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team planning a campaign at a whiteboard",
  },
  {
    title: "Data-Driven Performance Optimization",
    desc: "We use advanced affiliate tracking tools and analytics to identify top-performing partners, eliminate low-quality traffic, and maximize ROI. Our data-driven approach ensures you get the most from your affiliate marketing services in Delhi.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Transparent, Performance-Based Growth",
    desc: "With affiliate marketing, you only pay for actual results: clicks, leads, or sales. This makes our affiliate marketing in Delhi extremely cost-effective and risk-free.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Customer paying by phone at a shop counter",
  },
];

const services: ServiceItem[] = [
  {
    title: "Campaign Planning & Strategy Development",
    desc: "We design customized affiliate strategies based on your industry, goals, and customer behavior. Each campaign is tailored to bring high-quality traffic and maximize conversions.",
  },
  {
    title: "Affiliate Recruitment & Partner Selection",
    desc: "Our affiliate marketing agency in Delhi connects you with vetted affiliates who align with your brand’s audience. We carefully onboard partners who can bring real business value.",
  },
  {
    title: "Affiliate Training & Support",
    desc: "We provide marketing materials, creatives, guidelines, and continuous support to affiliates. This ensures they can promote your brand effectively.",
  },
  {
    title: "Tracking, Analytics & Compliance Management",
    desc: "Our advanced tracking systems monitor clicks, leads, sales, conversions, and ROI. We also implement fraud-prevention measures to protect your brand.",
  },
  {
    title: "Commission Structuring & Payout Management",
    desc: "We create fair, motivating commission models that drive high performance, and manage payments smoothly to keep affiliates engaged and productive.",
  },
];

const howItWorks: ServiceStep[] = [
  {
    title: "Understanding Your Business Goals",
    desc: "We analyze your industry, competitors, target audience, and business objectives to build a strong affiliate marketing blueprint.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Identifying High-Value Affiliates",
    desc: "Our affiliate marketing company in Delhi connects you with niche-specific affiliates who can bring qualified traffic and genuine conversions.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Social media apps on a phone screen",
  },
  {
    title: "Creating Campaign Assets",
    desc: (
      <>
        Banners, landing pages, coupon codes, and creatives for every promotion, with high-converting landing pages
        built by our{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          Website Development
        </Link>{" "}
        team so affiliate traffic turns into real leads and sales.
      </>
    ),
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sale banner with 50% off and gift boxes",
  },
  {
    title: "Continuous Optimization",
    desc: "We measure every affiliate’s performance and optimize partnerships, creatives, and promotions for maximum profitability.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team discussing results around laptops",
  },
  {
    title: "ROI Reporting & Insights",
    desc: "Transparent reports on sales, conversions, revenue generated, top affiliates, and campaign improvements.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rising growth chart on paper",
  },
];

const industries = [
  "E-commerce & Retail",
  "Education & EdTech",
  "Healthcare & Wellness",
  "Finance & Insurance",
  "Real Estate",
  "Automobile",
  "SaaS & Tech Companies",
  "Travel & Hospitality",
  "Lifestyle & Fashion",
  "B2B Services",
];

const preferred = [
  {
    title: "Proven Track Record",
    desc: "We have helped brands across India achieve high-performance affiliate results with consistent ROI improvements.",
  },
  {
    title: "Expert Affiliate Managers",
    desc: "Our team deeply understands affiliate strategies, tools, and partner psychology, making us a top affiliate marketing company in Delhi.",
  },
  {
    title: "Strong Communication & Collaboration",
    desc: "We work closely with your internal team and affiliates to ensure marketing goals are met with precision.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What are the advantages of affiliate marketing?",
    a: "Affiliate marketing brings higher traffic, increased brand visibility, better conversions, cost-effective growth, and performance-based sales. Our affiliate marketing services in Delhi ensure you pay only for real results.",
  },
  {
    q: "Is affiliate marketing expensive?",
    a: "No. Affiliate marketing is one of the most budget-friendly digital marketing methods because you pay only when affiliates deliver real sales or leads. This makes affiliate marketing in Delhi highly profitable for businesses of all sizes.",
  },
  {
    q: "How do you ensure high-quality affiliates?",
    a: "We vet affiliates based on niche relevance, traffic quality, content authenticity, and performance history. As a trusted affiliate marketing agency in Delhi, we match you only with affiliates who can drive genuine, high-converting traffic.",
  },
  {
    q: "How do you track affiliate performance?",
    a: "We use industry-grade tracking tools to monitor clicks, conversions, attribution, payouts, and fraud detection. Our affiliate marketing company in Delhi provides real-time dashboards and transparent insights.",
  },
  {
    q: "How do I find affiliates for my business?",
    a: "We recruit affiliates from our verified network, niche publishers, influencers, bloggers, and ad partners. Our affiliate marketing services in Delhi include complete affiliate onboarding and management.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We offer affiliate marketing in Delhi for e-commerce, finance, health, education, real estate, SaaS, lifestyle, B2B, travel, and more. Each industry receives a tailored affiliate strategy.",
  },
  {
    q: "What is an affiliate network?",
    a: "An affiliate network is a platform that connects businesses with affiliates, manages tracking, payouts, and campaign performance. Many brands prefer working through an affiliate marketing agency in Delhi to manage these networks efficiently.",
  },
  {
    q: "How do I become an affiliate marketer?",
    a: "You join affiliate programs, promote products using your links, and earn commissions for each successful sale or lead. We also help individuals and creators join programs through our affiliate marketing company in Delhi.",
  },
  {
    q: "How much can I earn through affiliate marketing?",
    a: "Earnings depend on your niche, traffic, content quality, audience trust, and commission structure. High-performing affiliates partnering through our affiliate marketing services in Delhi can earn consistently.",
  },
  {
    q: "Is affiliate marketing safe?",
    a: "Yes. With proper tracking, fraud detection, and compliance measures, affiliate marketing is secure. Our affiliate marketing agency in Delhi ensures your campaigns follow ethical practices and brand safety rules.",
  },
  {
    q: "Can affiliate marketing work for any business?",
    a: "Yes. Whether you’re small, mid-sized, or enterprise-level, affiliate marketing can scale your traffic and revenue. Our affiliate marketing company in Delhi customizes strategies for every business model.",
  },
  {
    q: "What are the best practices for successful affiliate marketing?",
    a: "Use quality affiliates, strong creatives, optimized landing pages, transparent communication, and continuous performance tracking. Our affiliate marketing services in Delhi implement all best practices to ensure maximum ROI.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AffiliateMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Affiliate marketing"
        title="Affiliate Marketing Services in Delhi"
        intro={
          <p>
            <span className="text-white">A performance-driven way to scale your business.</span> Our affiliate
            marketing services in Delhi help you grow faster, reduce marketing risk, and drive high-intent sales through
            trusted partners, and you only pay for real results.
          </p>
        }
        cta="Get started today"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Affiliate Marketing services and would like to discuss more."
        formSource="affiliate-hero"
        formServices={["Affiliate Marketing"]}
      />

      <ServiceIntro
        lead="Affiliate marketing company in Delhi"
        title="Leading Affiliate Marketing Company in Delhi to Scale Your Brand Sustainably"
        image={introImg}
        imageAlt="Best Affiliate Marketing Company in Delhi"
        body={
          <>
            <p>
              Affiliate marketing is one of the most cost-effective growth channels, but only with proper strategy,
              vetted affiliates, and performance monitoring. It also depends on a fast, conversion-optimized website,
              which is why our affiliate strategies are backed by professional{" "}
              <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
                Website Development Services
              </Link>
              . We help brands build profitable affiliate ecosystems, minimize fraud, and maximize genuine conversions.
            </p>
            <p className="text-[var(--ink)]">Our approach is simple:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {a}
                </li>
              ))}
            </ul>
            <p>
              Whether you’re a startup, e-commerce store, SaaS platform, educational brand, or enterprise, your growth
              becomes predictable with our structured affiliate marketing services in Delhi.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="affiliate-why-us"
        lead="Why Bigwig"
        title="Why Choose Our Affiliate Marketing Agency in Delhi?"
        items={whyChoose}
        cta="Get started today"
        source="affiliate-why-us"
      />

      <ServiceCards
        id="affiliate-services"
        lead="What we offer"
        title="Our Affiliate Marketing Services in Delhi"
        intro="Complete affiliate marketing solutions that scale conversions, strengthen partnerships, and maximize ROI, with every part of your affiliate ecosystem, from planning to payouts, professionally managed."
        items={services}
        cta="Plan your affiliate program"
        source="affiliate-services"
        promo={{
          image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80",
          alt: "Young plant growing from a pile of coins",
          text: "Pay only for real results: clicks, leads, or sales.",
        }}
      />

      <ServiceSteps
        id="affiliate-process"
        heading="How Our Affiliate Marketing in Delhi Works"
        lead="A step-by-step process for qualified traffic, consistent conversions, and measurable ROI."
        rest="Here’s how we build performance-driven affiliate systems that scale smoothly and profitably."
        steps={howItWorks}
      />

      <ServicePair
        cta="Get started today"
        source="affiliate-benefits"
        panels={[
          {
            title: "Benefits of Hiring an Affiliate Marketing Company in Delhi",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Two colleagues celebrating with a high five at their desk",
            items: [
              "Increased sales & revenue through targeted partner promotions",
              "Higher brand visibility with strategic affiliate placements",
              "Expanded audience reach across Delhi & NCR",
              "Cost-effective marketing with performance-based payouts",
              "Strong brand credibility from established affiliate endorsements",
              "Boosted website traffic from high-intent visitors",
              "Better conversions with targeted affiliate audiences",
              "Low-risk, high-reward growth model",
            ],
            outro:
              "These advantages are why many brands trust an expert affiliate marketing agency in Delhi instead of running campaigns manually.",
          },
          {
            title: "Key Features of Our Affiliate Marketing Services in Delhi",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Two women reviewing data on laptops in a server room",
            items: [
              {
                title: "Data & insights for smarter decisions",
                desc: "Data-backed insights on affiliate performance, customer behavior, sales trends, and traffic quality.",
              },
              {
                title: "Flexible strategies tailored to your business",
                desc: "Whether you want to scale aggressively or grow steadily, our affiliate marketing services in Delhi can be fully customized.",
              },
              {
                title: "Full transparency & real-time reporting",
                desc: "Complete visibility into clicks, conversions, partner performance, and payouts.",
              },
            ],
          },
        ]}
      />

      <ServiceArticle
        lead="Why us"
        title="Why We Are the Most Preferred Affiliate Marketing Agency in Delhi"
        cta="Talk to our affiliate team"
        source="affiliate-preferred"
        image={{ src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80", alt: "Affiliate manager presenting to a team" }}
        body={
          <>
            <ul className="space-y-5">
              {preferred.map((p) => (
                <li key={p.title}>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{p.title}</h3>
                  <p className="mt-1">{p.desc}</p>
                </li>
              ))}
            </ul>
            <h3 className="pt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
              Industries we serve across Delhi & NCR
            </h3>
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
        heading="Ready to Grow with Performance-Driven Affiliate Marketing in Delhi?"
        lead="If you’re ready to scale your sales, increase your visibility, and achieve predictable growth, our affiliate marketing services in Delhi are designed to deliver results."
        rest="Get in touch today for a customized strategy tailored to your business goals."
        cta="Get started today"
        source="affiliate-cta"
        photos={[
          { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80", alt: "Shopper paying online with a card and laptop" },
          { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80", alt: "Customer paying by card at a boutique counter" },
          { src: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=900&q=80", alt: "Online store builder open on a laptop" },
          { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", alt: "Calculator and paperwork for payouts" },
          { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80", alt: "Busy open-plan marketing office" },
        ]}
      />

      <ServiceFaq title="Affiliate marketing, answered" faqs={faqs} source="affiliate-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
