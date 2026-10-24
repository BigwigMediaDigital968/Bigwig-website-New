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
const title = "Best Content Marketing Services in Delhi That Engage & Convert";
const description =
  "Turn your ideas into engaging content. Our content marketing services in Delhi help businesses create useful blogs, website content and marketing materials that connect with their audience.";

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
    desc: "We create informative, search-focused blogs and articles that answer audience questions, target relevant keywords, and support your website's organic visibility.",
  },
  {
    title: "Content-Driven Websites & Landing Pages",
    desc: (
      <>
        We create clear content structures and page messaging that communicate
        your value, address customer needs, and guide visitors towards relevant
        actions. For website development, explore our{" "}
        <Link
          href="/services/website-development-company-in-delhi"
          className={inlineLink}
        >
          website development services
        </Link>
        .
      </>
    ),
  },
  {
    title: "Website Copywriting & Landing Page Content",
    desc: "We write audience-focused copy for service pages, landing pages, and other website sections to explain your offerings clearly, address customer concerns, and support conversion goals.",
  },
  {
    title: "Social Media Content Creation",
    desc: "We create platform-specific captions, carousel copy, creative concepts, reels scripts, and storytelling content to help your brand communicate consistently across social media.",
  },
  {
    title: "Video Scripts & Storyboards",
    desc: "We develop scripts and storyboards for explainer videos, brand films, testimonials, YouTube videos, and short-form content, tailored to your message and target audience.",
  },
  {
    title: "Email Newsletter Content",
    desc: "We create relevant email newsletters and nurture sequences that share useful information, communicate offers, and maintain relationships with your audience.",
  },
  {
    title: "Case Studies & Success Stories",
    desc: "We turn verified project information and customer experiences into clear case studies that explain challenges, solutions, and outcomes to help potential customers make informed decisions.",
  },
  {
    title: "E-books & Whitepapers",
    desc: "We develop in-depth, research-based resources that explain important topics, demonstrate expertise, and support relevant lead-generation campaigns.",
  },
  {
    title: "Infographics & Visual Content",
    desc: "We help turn information, data, and ideas into clear visual content that makes complex topics easier for your audience to understand.",
  },
  {
    title: "Content Strategy & Editorial Planning",
    desc: "We create content plans based on audience needs, relevant search opportunities, content formats, business goals, and practical publishing schedules.",
  },
  {
    title: "Content Distribution & Amplification",
    desc: "We plan content distribution across suitable channels, including social media, email, and other relevant platforms, to help your content reach its intended audience.",
  },
];

const whyChooseUs: ServiceItem[] = [
  {
    title: "SEO-Driven Content That Ranks",
    desc: "We create content around relevant search intent, keyword research, readability and on-page SEO practices to help search engines and readers understand your content.",
  },
  {
    title: "End-to-End Execution",
    desc: "From content planning and writing to editing and distribution, we help coordinate the content activities included in your agreed service scope.",
  },
  {
    title: "Experienced Strategists & Industry Experts",
    desc: "Our content approach considers your audience, industry, brand voice and business objectives to create content that is relevant to your customers.",
  },
  {
    title: "Consistent Delivery & Quality Assurance",
    desc: "We review content for clarity, grammar, accuracy, readability and consistency before delivery or publication.",
  },
  {
    title: "Customised Strategies for Every Business",
    desc: "We tailor content plans to your business goals, audience needs and industry, whether you want to improve visibility, explain your services or support lead generation.",
  },
];

const process: ServiceItem[] = [
  {
    title: "Research & Competitor Analysis",
    desc: "We review your audience, competitors, existing content and relevant search queries to identify opportunities and understand what your customers need.",
  },
  {
    title: "Content Strategy Development",
    desc: "We define content goals, key topics, formats, messaging and a publishing plan based on your business priorities and audience needs.",
  },
  {
    title: "Content Creation",
    desc: "We create content for relevant stages of the customer journey, helping your audience understand their options and learn more about your business.",
  },
  {
    title: "Optimisation & Editing",
    desc: "We review content for readability, grammar, relevance, keyword use and on-page SEO before it is published.",
  },
  {
    title: "Publishing & Distribution",
    desc: "We prepare content for suitable platforms and plan its distribution to help it reach the intended audience.",
  },
  {
    title: "Performance Tracking & Reporting",
    desc: "We review available metrics such as organic traffic, engagement, leads and conversions to understand performance and identify opportunities for improvement.",
  },
];

const benefits: ServiceItem[] = [
  {
    title: "Build Long-Term Authority",
    desc: "Consistent, useful content helps your audience understand your expertise and develop greater confidence in your brand over time.",
  },
  {
    title: "Generate High-Quality Leads",
    desc: "Content that answers relevant customer questions can attract people who are actively researching solutions related to your business.",
  },
  {
    title: "Improve Search Engine Rankings",
    desc: "Search-focused, useful content can support organic visibility when combined with relevant keywords, strong website structure and good SEO practices. Rankings are not guaranteed.",
  },
  {
    title: "Increase Website Traffic & Engagement",
    desc: "Relevant content can help your business reach potential customers, answer their questions and encourage them to explore more of your website.",
  },
  {
    title: "Support Conversions with Educational Content",
    desc: "Guides, case studies, service pages and landing pages help potential customers understand your offering and make informed decisions.",
  },
];

// Photos from Unsplash (images.unsplash.com is allowed in next.config)
const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

const industries: ServiceItem[] = [
  {
    title: "Healthcare",
    desc: "Clear, carefully reviewed healthcare content that explains services and helps audiences understand relevant health information.",
    image: photo("1532938911079-1b06ac7ceec7"),
    imageAlt: "Doctor holding a stethoscope",
  },
  {
    title: "E-Commerce",
    desc: "Product descriptions, category content, buying guides and useful articles that help customers discover and understand your products.",
    image: photo("1664455340023-214c33a9d0bd"),
    imageAlt: "Shopping cart full of parcels",
  },
  {
    title: "EdTech",
    desc: "Educational blogs, course content and learning resources that explain offerings and address learner questions.",
    image: photo("1513258496099-48168024aec0"),
    imageAlt: "Student learning on a laptop",
  },
  {
    title: "Real Estate",
    desc: "Property descriptions, location-focused content, project information and useful guides for buyers and investors.",
    image: photo("1515263487990-61b07816b324"),
    imageAlt: "Modern residential building",
  },
  {
    title: "Finance & Banking",
    desc: "Clear, research-based financial content that is reviewed for accuracy and applicable compliance requirements.",
    image: photo("1633158829585-23ba8f7c8caf"),
    imageAlt: "Hands stacking coins",
  },
  {
    title: "Technology & SaaS",
    desc: "Technical articles, product pages, feature explanations and educational content that make software offerings easier to understand.",
    image: photo("1572021335469-31706a17aaef"),
    imageAlt: "Software team gathered around a laptop",
  },
  {
    title: "Automotive",
    desc: "Vehicle-related articles, product information and educational content that help customers understand features and available options.",
    image: photo("1692406069831-0bb7ea297645"),
    imageAlt: "Car showroom",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What Are Content Marketing Services?",
    a: "Content marketing services involve planning, creating, optimising and distributing useful content to support business goals. These services may include SEO blogs, website copy, landing pages, social media content, email newsletters and content strategy, depending on the agreed scope.",
  },
  {
    q: "What Does a Content Marketing Agency Do?",
    a: "A content marketing agency helps businesses understand their audience, plan relevant content, create marketing materials and improve how content reaches potential customers. Depending on the service plan, this may also include SEO optimisation, content distribution and performance reporting.",
  },
  {
    q: "How Much Do Content Marketing Services Cost in Delhi?",
    a: "The cost of content marketing services in Delhi depends on the type and volume of content, research requirements, SEO needs and level of ongoing support. Contact Bigwig Media Digital to discuss your business goals and receive a plan based on your requirements.",
  },
  {
    q: "What Services Are Included in Content Marketing?",
    a: "Content marketing can include content strategy, keyword research, blog writing, website content, landing pages, social media content, email newsletters, case studies and content promotion. The exact services depend on your business needs and agreed scope.",
  },
  {
    q: "What Are the Main Types of Content Marketing?",
    a: "Common content marketing formats include blog articles, website content, videos, social media posts, email newsletters, case studies, e-books and infographics. The right mix depends on your target audience, business goals and the channels your customers use.",
  },
  {
    q: "How Can Content Marketing Generate Leads for My Business?",
    a: "Content marketing can support lead generation by answering customer questions, explaining your services and building trust with potential customers. Helpful articles, focused landing pages, case studies and clear calls to action can encourage interested visitors to contact your business.",
  },
  {
    q: "How Long Does Content Marketing Take to Show Results?",
    a: "The timeline depends on factors such as competition, website authority, content quality, publishing consistency and promotion. Some engagement may appear earlier, while meaningful organic traffic and lead growth can take several months. No specific ranking or results timeline can be guaranteed.",
  },
  {
    q: "How Do I Choose the Best Content Marketing Agency in Delhi?",
    a: "Look for an agency that understands your business goals, explains its strategy, provides clear deliverables and communicates how performance will be measured. Review relevant work, reporting practices and the proposed scope before choosing a content marketing agency in Delhi.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContentMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Content ranks, engages, and converts."
        title="Content Marketing Services in Delhi"
        intro={
          <p>
            <span className="text-white">
              Content helps your business build trust, answer customer questions
              and communicate its value.
            </span>{" "}
            At Bigwig Media Digital, our content marketing services in Delhi
            help businesses create useful, engaging and SEO-focused content for
            their target audience. From blog articles and website copy to social
            media content and content strategy, we help you share the right
            message across relevant digital channels and support your business
            goals.
          </p>
        }
        cta="Request a free content audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Content Marketing services and would like to discuss more."
        formSource="content-hero"
        formServices={["Content Marketing"]}
      />

      <ServiceIntro
        lead="Content marketing company in Delhi"
        title="Leading Content Marketing Company in Delhi for Business Growth"
        image={introImg}
        imageAlt="Content Marketing Services in Delhi"
        body={
          <>
            <p>
              Delhi's digital market is competitive, and businesses need more
              than occasional blogs or social media posts to stand out. They
              need useful content that answers customer questions, communicates
              their value and supports their marketing goals.
            </p>
            <p>
              As a content marketing company in Delhi, Bigwig Media Digital
              helps businesses plan, create and optimise content using audience
              research, relevant keywords, clear messaging and suitable
              distribution channels.
            </p>
            <p>
              Our approach focuses on creating content that helps your brand
              build credibility, reach relevant audiences and support customers
              throughout their buying journey.
            </p>
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
          image:
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80",
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

      <ServiceFaq
        title="Content marketing, answered"
        faqs={faqs}
        source="content-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
