import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/PPC-1.jpg";
import introImg from "../../../../Assets/services/7.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/performance-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Performance Marketing Services in Delhi | Bigwig Media Digital";
const description =
  "Maximize ROI with Performance Marketing Services in Delhi. Google Ads & Meta Ads campaigns for leads, conversions & revenue. Free Ad Audit!";

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

const whyPartner: ServiceItem[] = [
  {
    title: "Strategic Insights",
    desc: "As a leading performance marketing company in Delhi, we take the time to understand your business model, market landscape, and customer behaviour. This lets us craft strategies that truly connect with your audience and consistently drive conversions.",
  },
  {
    title: "Data-Driven Campaigns",
    desc: "Every campaign we run is powered by data. We make decisions based on analytics, not assumptions, so your budget is optimised for maximum ROI, making us one of the most effective performance-based marketing teams in the region.",
  },
  {
    title: "Comprehensive Service Spectrum",
    desc: (
      <>
        Our performance marketing services in Delhi cover the full range of digital growth channels. From{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          Web Development
        </Link>{" "}
        to SEO and PPC to social media, content marketing, and conversion optimisation, you get a complete, integrated
        marketing solution under one roof.
      </>
    ),
  },
  {
    title: "Transparent Reporting",
    desc: "Clarity is at the core of our approach. As a trusted performance marketing agency in Delhi, we provide clear, easy-to-understand reports that highlight your campaign’s progress, insights, and opportunities for improvement.",
  },
  {
    title: "Adaptive and Agile",
    desc: "The digital world moves fast, and staying static means falling behind. Our team stays ahead of trends, algorithm updates, and consumer shifts to keep your marketing relevant, competitive, and future-ready.",
  },
  {
    title: "Continuous Optimisation",
    desc: "Top performance marketing agencies in Delhi succeed by constantly refining strategies. We monitor industry trends, audience behaviour, and platform changes so your campaigns don’t just perform, but keep outperforming in a crowded marketplace.",
  },
];

const industries: ServiceItem[] = [
  {
    title: "Fashion",
    desc: "Visually compelling, trend-focused campaigns that showcase collections, attract enthusiasts, and drive sales through targeted performance marketing.",
  },
  {
    title: "Electronics & Technology",
    desc: "Whether it’s smartphones, accessories, or advanced gadgets, we use precision targeting to reach tech-savvy audiences, increasing brand awareness and boosting product sales.",
  },
  {
    title: "Healthcare",
    desc: "Compliant, informative, and high-performing campaigns that educate, engage, and convert, helping healthcare providers reach the right patients ethically and effectively.",
  },
  {
    title: "Hospitality & Travel",
    desc: "Hotels, restaurants, and travel agencies trust us to craft captivating visuals and persuasive messaging that attract travellers, boost bookings, and enhance brand visibility.",
  },
  {
    title: "Education & E-Learning",
    desc: "We help institutions and e-learning platforms connect with potential students by promoting courses and programmes through targeted, high-intent advertising.",
  },
  {
    title: "Retail & E-Commerce",
    desc: "From apparel to home goods, we create performance-driven strategies that increase traffic, boost online sales, and improve customer retention across diverse e-commerce niches.",
  },
  {
    title: "Finance & Banking",
    desc: "With an emphasis on security and compliance, we develop campaigns for banks, fintech brands, and financial institutions, promoting loans, investments, and financial products to highly targeted audiences.",
  },
  {
    title: "Automotive",
    desc: "From dealerships to manufacturers, we create campaigns that highlight vehicle features, build interest, and generate qualified leads from potential buyers.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is performance marketing, and how can a performance marketing agency in Delhi benefit my business?",
    a: "Performance marketing is a results-driven approach where you pay only for measurable actions such as clicks, leads, sales, or conversions. Partnering with a performance marketing agency in Delhi helps you scale faster using data, targeting, and optimisation to reach the right audience and maximise ROI. Whether you’re a startup or an established business, performance marketing ensures every rupee spent moves you closer to growth.",
  },
  {
    q: "How do performance marketing agencies in Delhi measure success?",
    a: "A performance marketing company in Delhi measures success using metrics such as click-through rate (CTR), cost per lead (CPL), return on ad spend (ROAS), conversion rate, and customer acquisition cost (CAC). These KPIs ensure transparency and help refine campaigns for better performance.",
  },
  {
    q: "What makes a performance marketing company in Delhi different from traditional marketing agencies?",
    a: "Traditional agencies focus on reach and visibility, while a performance-based digital marketing agency prioritises measurable outcomes. Performance marketing offers real-time tracking, targeted campaigns, ROI-focused strategies, and pay-for-performance models, so you only invest in strategies that bring tangible results.",
  },
  {
    q: "Can performance-based digital marketing agencies help with brand awareness?",
    a: "Absolutely. While performance marketing is known for conversions, it also boosts brand visibility. A performance-based marketing agency uses precise audience targeting, engaging creatives, and strategic placements to increase brand recall and build trust.",
  },
  {
    q: "What services do performance-based marketing agencies offer?",
    a: "A full-service performance marketing agency in Delhi typically provides Google Ads and PPC, social media ads (Meta, Instagram, YouTube, LinkedIn), SEO, content marketing, landing page optimisation, email and automation funnels, and conversion rate optimisation (CRO). These services work together to attract, nurture, and convert customers.",
  },
  {
    q: "How do I choose the right performance marketing services in Delhi for my business?",
    a: "Look for a performance marketing agency with proven industry experience, transparent reporting, data-driven decision-making, customised strategies, and a strong portfolio of results. Choose an agency that understands your goals and aligns its strategies accordingly.",
  },
  {
    q: "What can Bigwig Media Digital do to help my business be the best?",
    a: "As a dedicated performance marketing company in Delhi, we focus on understanding your business deeply (your goals, audience, and challenges), building high-impact marketing systems for consistent growth, and optimising continuously to stay ahead of competitors. Our mission is to help you outperform your market with smart, scalable performance marketing.",
  },
  {
    q: "Is performance marketing expensive?",
    a: "Costs depend on your goals, competition, and industry. The good news is that performance marketing is one of the most cost-effective digital strategies, because you only pay for measurable outcomes. With the right agency, even small budgets can generate strong returns through precise targeting and optimisation.",
  },
  {
    q: "Is performance marketing necessary?",
    a: "Yes, especially in today’s competitive digital ecosystem. Performance marketing reduces wasted ad spend, improves targeting accuracy, delivers faster results, provides clear and trackable ROI, and helps businesses scale predictably. For any brand aiming for growth, it is a strategic necessity.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PerformanceMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Performance marketing"
        title="Performance Marketing Company in Delhi"
        intro={
          <p>
            <span className="text-white">More than just another performance marketing agency in Delhi.</span> We’re a
            team driven by results and creativity, serving businesses across Delhi NCR, including Noida and Gurgaon.
            Whether you need a reliable Google Ads agency in Delhi or a growth partner “near me”, we boost visibility,
            engagement, and ROI with data-backed strategies that actually work.
          </p>
        }
        cta="Get a free ad audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Performance Marketing services and would like to discuss more."
        formSource="performance-hero"
        formServices={["Performance Marketing"]}
      />

      <ServiceIntro
        lead="Performance marketing agency in Delhi"
        title="Build Your Brand with a Leading Performance Marketing Agency in Delhi"
        image={introImg}
        imageAlt="Top PPC Company in Delhi"
        body={
          <>
            <p>
              In the fast-moving digital pulse of India’s capital, businesses need more than just presence. They need
              performance. At Bigwig Media Digital, we stand as a trusted performance marketing company in Delhi,
              helping brands cut through the noise and reach their true growth potential.
            </p>
            <p>
              Amidst the energy and competition of Delhi, our performance marketing agency has built a reputation for
              strategies that aren’t just creative, but measurable and ROI-driven. With a full suite of performance
              marketing services tailored to your goals, we position your brand right at the forefront of your
              industry.
            </p>
            <p>
              As one of the top performance marketing agencies in Delhi, we create tailored strategies that fit your
              business goals, not generic templates. We go beyond generating traffic to deliver meaningful interactions
              that actually convert. From awareness to acquisition, every step is optimised for measurable,
              revenue-focused outcomes.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="why-partner"
        lead="Why partner with us"
        title="Why Partner with a Premier Performance Marketing Company in Delhi?"
        intro="When you’re searching for a performance-driven partner who understands what real growth looks like, we’re here to make it happen."
        items={whyPartner}
        cta="Get started today"
        source="performance-why-partner"
      />

      <ServiceArticle
        lead="Why Bigwig"
        title="Why Bigwig Media Digital, and No One Else?"
        cta="Talk to our team"
        source="performance-why-bigwig"
        body={
          <>
            <p>
              When you’re investing serious money into growth, you deserve to work with the best. At Bigwig Media
              Digital, our team lives and breathes performance marketing. We’re obsessed with the numbers, the strategy
              behind them, and the results they create.
            </p>
            <p>
              We offer complete, end-to-end performance marketing solutions across every channel that matters to your
              business. From crafting compelling ad creatives to decoding analytics, our team of creative thinkers,
              problem-solvers, and data-driven doers ensures every campaign is built for impact.
            </p>
            <p>
              We’re constantly refining ideas, exploring trends, and pushing boundaries. That’s how we deliver fresh,
              high-performing campaigns that don’t just compete, but stand out. If you want a team that’s committed,
              creative, and relentlessly performance-focused, you won’t find a better partner.
            </p>
          </>
        }
      />

      <ServiceCarousel
        lead="Industries we serve"
        title="Industries That Benefit from a Performance Marketing Agency in Delhi"
        items={industries}
        cta="Discuss your industry"
        source="performance-industries"
      />

      <ServiceArticle
        lead="Most trusted agency"
        title="Partner with the Best Performance Marketing Company in Delhi"
        cta="Boost your performance today"
        source="performance-partner"
        body={
          <>
            <p>
              In today’s highly competitive digital world, choosing the right performance marketing agency in Delhi can
              make all the difference. Only a few stand out for their expertise, innovation, and proven results.
              Businesses looking to scale through social media and digital performance channels need a partner that
              knows how to turn visibility into conversions, and conversions into sustainable growth.
            </p>
            <p>
              Working with a top-tier performance marketing company in Delhi ensures every campaign is tailored to your
              audience, built to spark meaningful interactions, and designed to deliver measurable results.
            </p>
            <p>
              With our commitment to excellence and a strong track record of successful campaigns, we offer
              performance-driven solutions crafted around your specific goals. Every strategy, every creative, and
              every optimisation is built with your growth in mind.
            </p>
          </>
        }
      />

      <ServiceFaq title="Performance marketing, answered" faqs={faqs} source="performance-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
