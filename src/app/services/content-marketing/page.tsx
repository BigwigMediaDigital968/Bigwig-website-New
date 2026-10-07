import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/Content_Marketing.jpg";
import introImg from "../../../../Assets/services/8.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceCards,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/content-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Content Marketing Services in Delhi | Bigwig Media Digital";
const description =
  "Strategic Content Marketing Services in Delhi. SEO blogs, landing pages & brand storytelling that ranks and converts. Request a Free Audit!";

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

const contentServices: ServiceItem[] = [
  {
    title: "SEO-Friendly Blogs & Articles",
    desc: "Informative, keyword-rich blogs that improve rankings, attract organic traffic, and establish domain authority.",
  },
  {
    title: "Content-Driven Websites & Landing Pages",
    desc: (
      <>
        We{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          develop content-driven websites
        </Link>{" "}
        and high-converting landing pages that engage audiences, strengthen brand messaging, and turn traffic into
        qualified leads.
      </>
    ),
  },
  {
    title: "Website Copywriting & Landing Page Content",
    desc: "High-converting copy optimised for user experience, messaging clarity, and search intent, crafted by professional writers.",
  },
  {
    title: "Social Media Content Creation",
    desc: "Platform-specific content, including creatives, scripts, captions, memes, carousels, reels, and storytelling posts.",
  },
  {
    title: "Video Scripts & Storyboards",
    desc: "Engaging scripts for brand films, explainer videos, testimonials, YouTube videos, short reels, and educational content.",
  },
  {
    title: "Email Newsletter Content",
    desc: "Conversion-focused newsletters and drip sequences that nurture leads and strengthen brand relationships.",
  },
  {
    title: "Case Studies & Success Stories",
    desc: "Data-driven narratives that highlight your achievements and build trust with high-intent prospects.",
  },
  {
    title: "E-books & Whitepapers",
    desc: "In-depth, research-backed resources that build authority and attract qualified leads.",
  },
  {
    title: "Infographics & Visual Content",
    desc: "High-quality graphics, visual storytelling assets, and educational illustrations that simplify complex information.",
  },
  {
    title: "Content Strategy & Editorial Planning",
    desc: "A full content roadmap covering topics, formats, SEO opportunities, funnel mapping, and publishing schedules.",
  },
  {
    title: "Content Distribution & Amplification",
    desc: "We promote your content across social media, email, communities, PR, and paid channels to maximise reach and engagement.",
  },
];

const whyChooseUs: ServiceItem[] = [
  {
    title: "SEO-Driven Content That Ranks",
    desc: "Every piece is optimised for search intent, keywords, readability, and semantic relevance, so your brand captures the right audience at the right time.",
  },
  {
    title: "End-to-End Execution",
    desc: "From research to writing, design to distribution, we manage everything: blogs, videos, case studies, newsletters, website copy, social content, and more.",
  },
  {
    title: "Experienced Strategists & Industry Experts",
    desc: "Your content is managed by writers, editors, SEO specialists, designers, and strategists who understand your market and create content that resonates.",
  },
  {
    title: "Consistent Delivery & Quality Assurance",
    desc: "Strict editorial guidelines, plagiarism checks, and quality reviews ensure every piece is accurate, engaging, and conversion-focused.",
  },
  {
    title: "Customised Strategies for Every Business",
    desc: "We tailor your content roadmap to your industry, audience intent, and goals, whether you want more traffic, thought leadership, or leads.",
  },
];

const process: ServiceItem[] = [
  {
    title: "Research & Competitor Analysis",
    desc: "We study your audience, competitors, keyword ecosystem, market trends, and search behaviour. This becomes the backbone of your strategy.",
  },
  {
    title: "Content Strategy Development",
    desc: "We define your content goals, messaging pillars, formats, tone, SEO themes, and publishing calendar.",
  },
  {
    title: "Content Creation",
    desc: "Our writers and designers create high-quality content tailored to each stage of your funnel: awareness, consideration, and conversion.",
  },
  {
    title: "Optimisation & Editing",
    desc: "Each piece goes through SEO optimisation, readability improvements, grammar checks, and quality review.",
  },
  {
    title: "Publishing & Distribution",
    desc: "We publish your content across your website, social media, email, PR, and other channels for maximum exposure.",
  },
  {
    title: "Performance Tracking & Reporting",
    desc: "We track rankings, traffic, engagement, lead flow, and conversions, then refine the strategy to improve ROI.",
  },
];

const benefits: ServiceItem[] = [
  {
    title: "Build Long-Term Authority",
    desc: "Consistent content builds trust, credibility, and industry leadership.",
  },
  {
    title: "Generate High-Quality Leads",
    desc: "Content marketing attracts customers who are actively searching for solutions in your niche.",
  },
  {
    title: "Improve Search Engine Rankings",
    desc: "Google rewards brands that regularly publish valuable, fresh, and optimised content.",
  },
  {
    title: "Increase Website Traffic & Engagement",
    desc: "Strategic content helps you reach a broader audience and keep them engaged for longer.",
  },
  {
    title: "Boost Conversions with Educational Content",
    desc: "Case studies, guides, landing pages, and webinars help customers make confident buying decisions.",
  },
];

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const photo = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

const industries: ServiceItem[] = [
  {
    title: "Healthcare",
    desc: "Accurate, trustworthy healthcare content that makes you a credible authority.",
    image: photo("1532938911079-1b06ac7ceec7"),
    imageAlt: "Doctor holding a stethoscope",
  },
  {
    title: "E-Commerce",
    desc: "Product descriptions, SEO pages, buying guides, and sales-driven content.",
    image: photo("1664455340023-214c33a9d0bd"),
    imageAlt: "Shopping cart full of parcels",
  },
  {
    title: "EdTech",
    desc: "Educational blogs, course content, curriculum storytelling, and SEO-led funnels.",
    image: photo("1513258496099-48168024aec0"),
    imageAlt: "Student learning on a laptop",
  },
  {
    title: "Real Estate",
    desc: "Hyperlocal SEO content, brochures, property descriptions, and project storytelling.",
    image: photo("1515263487990-61b07816b324"),
    imageAlt: "Modern residential building",
  },
  {
    title: "Finance & Banking",
    desc: "Compliance-friendly, research-backed content for financial institutions.",
    image: photo("1633158829585-23ba8f7c8caf"),
    imageAlt: "Hands stacking coins",
  },
  {
    title: "Technology & SaaS",
    desc: "Technical blogs, product pages, feature explanations, and automation guides.",
    image: photo("1572021335469-31706a17aaef"),
    imageAlt: "Software team gathered around a laptop",
  },
  {
    title: "Automotive",
    desc: "Content that educates buyers about vehicles, technology, and brand differentiation.",
    image: photo("1692406069831-0bb7ea297645"),
    imageAlt: "Car showroom",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is content marketing, and how does it help businesses?",
    a: "Content marketing is the strategic creation and distribution of valuable content to attract, educate, and convert customers. Working with a content marketing agency in Delhi helps you build authority, grow organic traffic, and generate qualified leads.",
  },
  {
    q: "How long does content marketing take to show results?",
    a: "You’ll see engagement improvements in 30–45 days. SEO, traffic growth, and consistent lead generation typically take 3–6 months.",
  },
  {
    q: "Do you provide SEO along with content marketing services?",
    a: "Yes. As a full-service content marketing company in Delhi, we include keyword research, on-page SEO, and content optimisation in all strategies.",
  },
  {
    q: "Can you create content for any industry?",
    a: "Absolutely. We work across healthcare, real estate, finance, SaaS, e-commerce, education, and more.",
  },
  {
    q: "Do you offer content for social media and video platforms?",
    a: "Yes: reels, scripts, shorts, animations, carousels, captions, and more.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ContentMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Content marketing"
        title="Content Marketing Services in Delhi"
        intro={
          <p>
            <span className="text-white">Content is the backbone of brand authority and digital growth.</span> As a
            leading content marketing agency in Delhi, we create powerful stories, high-performing content assets, and
            data-driven strategies that educate, engage, and convert, whether you want to build awareness, outrank
            competitors, or nurture leads.
          </p>
        }
        cta="Request a free content audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Content Marketing services and would like to discuss more."
        formSource="content-hero"
        formServices={["Content Marketing"]}
      />

      <ServiceIntro
        lead="Content marketing company in Delhi"
        title="Leading Content Marketing Company in Delhi for High-Impact Growth"
        image={introImg}
        imageAlt="Content Marketing Services in Delhi"
        body={
          <>
            <p>
              Delhi’s digital landscape is competitive, with thousands of brands fighting for attention every day. To
              stand out, you need more than just blogs and social media posts. You need strategy, storytelling, and
              consistent content execution.
            </p>
            <p>
              As a full-stack content marketing company in Delhi, we combine research, creativity, SEO, and
              distribution to create content that drives organic traffic, enhances credibility, and supports every
              stage of your customer journey.
            </p>
            <p>Our approach ensures your brand becomes discoverable, memorable, and trusted.</p>
          </>
        }
      />

      <ServiceCarousel
        id="content-services"
        lead="What we offer"
        title="Our Complete Content Marketing Services in Delhi"
        intro="End-to-end services to help brands build a strong content foundation and scale organically."
        items={contentServices}
        cta="Plan your content"
        source="content-services"
      />

      <ServiceCards
        lead="Why Bigwig"
        title="Why Choose Our Content Marketing Agency in Delhi"
        items={whyChooseUs}
        cta="Get started today"
        source="content-why-us"
        promo={{
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80",
          alt: "Writing desk with an open notebook and laptop",
          text: "Content that ranks, engages, and converts.",
        }}
      />

      <ServiceCarousel
        lead="How we work"
        title="Our Process for Strategic Content Marketing in Delhi"
        items={process}
        cta="Start with a content audit"
        source="content-process"
      />

      <ServiceCards
        lead="Why content marketing"
        title="The Power of Content Marketing for Your Business"
        items={benefits}
        cta="Grow with content"
        source="content-benefits"
      />

      <ServiceCarousel
        lead="Industries we serve"
        title="Content Marketing for Every Industry"
        items={industries}
        cta="Discuss your industry"
        source="content-industries"
      />

      <ServiceFaq title="Content marketing, answered" faqs={faqs} source="content-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
