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
  "Performance marketing services in Delhi: Google Ads, Meta Ads and lead generation campaigns tracked to leads and sales. Get a free ad audit.";

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

const performanceMarketingServices: ServiceItem[] = [
  {
    title: "Google Ads Management",
    desc: "Google Ads puts your business in front of people at the moment they search for what you offer. We manage Search, Display, Shopping, YouTube, and Performance Max campaigns, using keyword research, ad copy, bid strategies, and regular search-term reviews to reduce wasted clicks.",
  },
  {
    title: "Meta Ads (Facebook and Instagram)",
    desc: (
      <>
        Meta Ads reach people based on interests, behaviour, and location, making them useful for lead forms, e-commerce sales, and brand discovery. We build audiences, test image, video, and carousel creatives, and allocate budgets to the ads that perform best. Explore our{" "}
        <Link
          href="/services/social-media-marketing"
          className={inlineLink}
        >
          Social Media Marketing
        </Link>{" "}
        services.
      </>
    ),
  },
  {
    title: "LinkedIn Ads for B2B",
    desc: "For B2B businesses, LinkedIn lets you target audiences by job title, industry, and company size. We set up lead-generation campaigns that reach decision-makers with a clear offer and a simple way to enquire.",
  },
  {
    title: "Lead Generation Campaigns",
    desc: "Our lead generation campaigns bring in enquiries through calls, forms, and WhatsApp messages. We align your ads, landing pages, and follow-up processes so the leads you receive match your business goals and your sales team's capacity.",
  },
  {
    title: "Remarketing and Retargeting",
    desc: "Most visitors do not convert on their first visit. Remarketing shows relevant ads to people who have visited your website or engaged with your content, encouraging them to return and complete the desired action.",
  },
  {
    title: "Landing Page Optimisation and CRO",
    desc: (
      <>
        Even a well-performing ad can fail when it leads to a weak landing page. We review your landing pages and forms, recommend improvements, and test headlines, layouts, and calls to action to increase conversions. Discover our{" "}
        <Link
          href="/services/website-development-company-in-delhi"
          className={inlineLink}
        >
          Website Development
        </Link>{" "}
        services.
      </>
    ),
  },
  {
    title: "Conversion Tracking and Analytics",
    desc: "Accurate tracking is the foundation of performance marketing. We configure GA4, Google Tag Manager, and advertising platform conversion tracking to measure leads, calls, and sales accurately, giving you clear insights into campaign performance.",
  },
  {
    title: "Email and Automation Funnels",
    desc: (
      <>
        Email marketing and automated follow-ups nurture leads after they enquire and help bring past customers back. We create targeted email sequences that support customer engagement and drive repeat conversions. Explore our{" "}
        <Link href="/services/email-marketing" className={inlineLink}>
          Email Marketing
        </Link>{" "}
        services.
      </>
    ),
  },
  {
    title: "SEO and Content Marketing",
    desc: (
      <>
        Organic search and valuable content complement paid campaigns by building sustainable traffic beyond advertising spend. We help improve search visibility and create relevant content through our{" "}
        <Link
          href="/services/search-engine-optimization"
          className={inlineLink}
        >
          Search Engine Optimization
        </Link>{" "}
        and{" "}
        <Link
          href="/services/content-marketing"
          className={inlineLink}
        >
          Content Marketing
        </Link>{" "}
        services.
      </>
    ),
  },
];

const performanceMarketingProcess: ServiceItem[] = [
  {
    title: "1. Audit and Goals",
    desc: "We review your advertising accounts, website, tracking setup, and competitors to understand your current performance. Together, we define clear goals, such as cost per lead or return on ad spend, to measure success.",
  },
  {
    title: "2. Strategy and Setup",
    desc: "We select the right advertising platforms, allocate budgets, define target audiences, and prepare conversion tracking, ad copy, and landing pages to build a strong foundation for your campaigns.",
  },
  {
    title: "3. Launch",
    desc: "We launch your campaigns with clear performance benchmarks and properly configured tracking, ensuring results can be measured and evaluated from day one.",
  },
  {
    title: "4. Optimise",
    desc: "We regularly review search terms, audience performance, ad creatives, and bidding strategies. By identifying what drives conversions, we continuously refine campaigns and shift budgets towards the best-performing opportunities.",
  },
  {
    title: "5. Report and Scale",
    desc: "You receive transparent reports covering advertising spend, leads, and cost per result. As campaigns demonstrate consistent performance, we scale successful strategies to support sustainable business growth.",
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
        title="Performance Marketing Services in Delhi"
        intro={
          <>
          <div>
            <h2 className="text-xl md:text-2xl font-medium">Google Ads, Meta Ads and lead generation campaigns tracked to the leads and sales they produce</h2>
             <p className="mt-2">
            Bigwig Media Digital is a performance marketing agency in Delhi serving businesses across Delhi NCR, including Noida and Gurgaon. We plan, launch and optimise paid campaigns on Google, Meta and other platforms, and we judge every campaign by the leads, enquiries and sales it generates.
          </p>
          </div>
          </>
         
        }
        cta="Get a free ad audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Performance Marketing services and would like to discuss more."
        formSource="performance-hero"
        formServices={["Performance Marketing"]}
      />

      <ServiceIntro
        lead="Performance marketing agency in Delhi"
        title="What Is Performance Marketing?"
        image={introImg}
        imageAlt="Performance marketing campaign planning"
        body={
          <>
            <p>
              Performance marketing is a form of digital advertising where results are measured and optimised against specific actions, such as a click, a form fill, a phone call or a purchase. Instead of judging an ad by how many people saw it, you judge it by what those people did next.
            </p>
            <p>
              Platforms such as Google Ads and Meta Ads charge for clicks or impressions, so the aim is to make sure that spend turns into outcomes you can count. Conversion tracking connects each ad to a result, which lets you stop what is not working and put more budget behind what is.
            </p>
            <p>
              This is different from traditional marketing, such as print or hoardings, where it is hard to link spend to sales. In performance marketing, cost per lead, cost per acquisition and return on ad spend are visible, so decisions are based on numbers.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="why-partner"
        lead="Why partner with us"
        title="Our Performance Marketing Services in Delhi"
        // intro="When you’re searching for a performance-driven partner who understands what real growth looks like, we’re here to make it happen."
        items={performanceMarketingServices}
        cta="Get started today"
        source="performance-why-partner"
      />

      <ServiceArticle
        lead="Why Bigwig"
        title="Why Delhi Businesses Use Performance Marketing"
        cta="Talk to our team"
        source="performance-why-bigwig"
        body={
          <>
            <p>
             Delhi NCR is one of the most competitive markets in India. Many businesses in the same area compete for the same searches and the same audiences on Google, Instagram, Facebook and YouTube.

            </p>
            <p>
              Performance marketing helps you reach people who are searching for your service right now, or who match your ideal customer. Ad platforms let you target by city, area and pin code, so you can focus on Delhi, Noida, Gurgaon and the rest of NCR.
            </p>
            <p>
              Because results are tracked, you can start with a controlled budget, learn what works and scale from there.
            </p>
          </>
        }
      />

      <ServiceCarousel
        lead="Industries we serve"
        title="How Our Performance Marketing Process Works"
        items={performanceMarketingProcess}
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
