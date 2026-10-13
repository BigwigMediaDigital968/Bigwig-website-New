import type { Metadata } from "next";
import heroImg from "../../../../Assets/Services hero/SMO.jpg";
import introImg from "../../../../Assets/services/4.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  ServiceResults,
  ServiceSteps,
  type ServiceFaqItem,
  type ServiceItem,
  type ServiceResult,
  type ServiceStep,
} from "../../../../components/service/ServiceSections";
import PartnerBrands from "../../../../components/services/social-media-optimization/PartnerBrands";
import StaticWorkGallery from "../../../../components/services/social-media-optimization/StaticWorkGallery";
import SocialPlatforms from "../../../../components/services/social-media-optimization/SocialPlatforms";
import { WorkShowcase } from "../../../../components/services/WorkShowcase";

const PATH = "/services/social-media-optimization";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "SMO Service in Delhi That Actually Grows Your Brand";
const description =
  "Tired of posting into silence? Delhi's results-driven SMO agency turns dead profiles into revenue. See real client numbers - get your free audit!";

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

const results: ServiceResult[] = [
  { value: "2X–6X", label: "Increase in overall engagement" },
  { value: "50–400%", label: "Growth in qualified leads" },
  { value: "100–1800%", label: "Boost in new followers" },
  { value: "150–900%", label: "Improvement in brand visibility" },
  { value: "Significant", label: "Enhancement in social reach & impressions, campaign-dependent" },
];

const process: ServiceStep[] = [
  {
    title: "Profile creation & optimization",
    desc: "We optimize your social media profiles with keyword-rich descriptions, visually appealing graphics, call-to-actions, and branded elements to build a strong digital identity.",
    image: unsplash("1611162617474-5b21e879e113"),
    imageAlt: "Social media app icons on a phone screen",
  },
  {
    title: "Engaging content & creative graphics",
    desc: "Our creative team produces high-quality posts, videos, infographics, carousels, and stories that resonate with your audience and drive continuous engagement.",
    image: unsplash("1658863025658-4a259cc68fc9"),
    imageAlt: "Printed design samples and brochures",
  },
  {
    title: "Target audience refinement",
    desc: "We help you attract users who are genuinely interested in your products or services, ensuring maximum relevance and conversion potential.",
    image: unsplash("1517048676732-d65bc937f952"),
    imageAlt: "Team planning around a meeting table",
  },
  {
    title: "Audience interaction & engagement",
    desc: "We manage comments, messages, and interactions in real time, helping your brand stay active, responsive, and customer-friendly.",
    image: unsplash("1758274252219-5f20097548c9"),
    imageAlt: "Woman smiling while reading her phone",
  },
  {
    title: "Analytics & performance reporting",
    desc: "From reach and impressions to follower growth and engagement metrics, our detailed reports help you understand the impact of your SMO campaigns.",
    image: unsplash("1551288049-bebda4e38f71"),
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

const benefits: ServiceItem[] = [
  {
    title: "Enhanced Brand Visibility Across Social Platforms",
    desc: "High-quality and consistent social media optimization ensures your brand becomes more visible and memorable. With strategic content and profile optimization, your business appears frequently in search results, trending categories, and platform recommendations.",
  },
  {
    title: "Higher Engagement & Stronger Customer Relationships",
    desc: "Through professional Social Media Optimization Services in Delhi, you can create meaningful interactions with your audience. Engaging posts, quick responses, and community management help build trust and long-term customer loyalty.",
  },
  {
    title: "Increase in Targeted Traffic & Quality Leads",
    desc: "SMO helps drive highly relevant traffic to your website. Because users actively engage with your content, the chances of generating high-quality, conversion-ready leads increase significantly.",
  },
  {
    title: "Improved Brand Reputation & Online Credibility",
    desc: "Positive engagement, active posting, and reputation management make your brand appear reliable and authoritative. With well-managed SMO Services in Delhi, your online reputation improves across platforms.",
  },
  {
    title: "Better Search Engine Rankings (Indirect SEO Benefits)",
    desc: "Optimized social profiles and strong engagement send positive social signals to search engines. This contributes to better rankings and enhances your overall digital presence.",
  },
  {
    title: "Cost-Effective Marketing With High ROI",
    desc: "Compared to paid advertising, Social Media Services in Delhi offer long-term value at a minimal cost. With the right strategy, you can achieve measurable growth without overspending.",
  },
  {
    title: "Insightful Analytics & Data-Driven Decisions",
    desc: "Performance reports and analytics help you understand user behavior, content performance, and audience demographics. These insights help refine your strategy for continuous improvement.",
  },
  {
    title: "Competitive Advantage in Your Industry",
    desc: "With consistent and optimized social media efforts, your brand stays ahead of competitors who are either inactive or not leveraging SMO effectively.",
  },
  {
    title: "Increased Followers & Community Growth",
    desc: "Professional SMO Services in Delhi ensure steady follower growth through strategic content, trends, and engagement tactics. A larger community naturally amplifies your brand reach.",
  },
  {
    title: "Strengthened Brand Authority & Trust",
    desc: "Publishing valuable content and maintaining an active presence helps position your brand as a leader in your niche. High authority translates into greater customer confidence.",
  },
];

const goals = [
  "Increase your social media followers",
  "Improve brand visibility",
  "Strengthen online reputation",
  "Generate more leads",
  "Boost website traffic",
  "Build an active online community",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What exactly is included in your SMO services?",
    a: "Our SMO services cover everything your brand needs to build a strong and engaging online presence, including profile setup and optimization, creative content production, post scheduling, hashtag strategy, audience engagement, trend analysis, brand monitoring, reputation management, and detailed performance reporting. We deliver everything as one connected strategy rather than outsourcing individual tasks.",
  },
  {
    q: "Which social media platforms do you actually work on?",
    a: "We manage Facebook, Instagram, LinkedIn, Twitter (X), Pinterest, and YouTube. Our team recommends the platforms that best match your target audience, ensuring your brand focuses on the channels where your customers are most active.",
  },
  {
    q: "How do you decide what content to create?",
    a: "We begin with audience research and competitor analysis, identify trending content formats, and create graphics, captions, reels, and stories that align with your brand voice. Every piece of content is designed to strengthen your brand identity and generate meaningful engagement.",
  },
  {
    q: "How do you actually engage with our audience, not just post at them?",
    a: "Our team actively manages your social media communities by responding to comments and messages, participating in relevant conversations, and using platform-specific features like polls, reels, and trending audio to encourage genuine audience interaction.",
  },
  {
    q: "Will your approach change based on how big or small our company is?",
    a: "Yes. We customize every SMO strategy based on your business size, goals, industry, and budget. Whether you're a startup, SME, or enterprise, we create a tailored social media plan instead of using a one-size-fits-all approach.",
  },
  {
    q: "Do you actually study our competitors, or is that just a line in the pitch?",
    a: "Competitor analysis is an ongoing part of our SMO process. We evaluate competitors' content strategies, engagement levels, hashtags, posting frequency, and audience behavior to identify opportunities that help your brand stand out.",
  },
  {
    q: "How will we know if it's actually working?",
    a: "We provide transparent performance reports that track key metrics such as follower growth, reach, impressions, engagement rate, click-through rate, content performance, and community interactions. Weekly or monthly reports keep you informed about the progress and results of your social media campaigns.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Social Media Optimization (SMO) Service",
  name: title,
  description,
  url: URL,
  provider: {
    "@type": "Organization",
    name: "Bigwig Media Digital",
    url: "https://www.bigwigmediadigital.com",
    logo: "https://www.bigwigmediadigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBigwig_logo__final.f181d8a8.png&w=828&q=75",
    image: "https://www.bigwigmediadigital.com/assets/office-team.jpg",
    telephone: "+91-9685892813",
    email: "support@bigwigmediadigital.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot # 2, Sanjay Nagar, Gulabi Bagh",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110007",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/bigwigmediadigital",
      "https://www.instagram.com/bigwigmediadigital",
      "https://www.linkedin.com/company/bigwigmediadigital",
      "https://twitter.com/bigwigmediadigital",
      "https://www.youtube.com/@bigwigmediadigital",
    ],
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Startups, SMEs, and Enterprises in Delhi and Delhi-NCR seeking social media growth",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    areaServed: "Delhi, Delhi-NCR",
    url: URL,
    description: "Custom SMO packages priced according to business size, platforms, and scope. Contact for a tailored quote.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SocialMediaOptimizationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Social media optimization"
        title="SMO Service in Delhi That Turns Silent Followers Into Paying Customers"
        intro={
          <p>
            <span className="text-white">
              Most brands post consistently and still see nothing move: no leads, no real engagement, just numbers that
              don’t translate into revenue.
            </span>{" "}
            We fix that specific problem. We don’t just manage your profiles; we re-engineer them to convert, drawing on
            5+ years of learning what keeps brands active, relevant, and genuinely engaging on every major platform.
          </p>
        }
        cta="Get your free SMO audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Social Media Optimization services and would like to discuss more."
        formSource="smo-hero"
        formServices={["SMO"]}
      />

      <ServiceIntro
        lead="SMO company in Delhi"
        title="The Social Media Optimization Company in Delhi Built on Results, Not Promises"
        image={introImg}
        imageAlt="Social Media Optimization Services"
        body={
          <>
            <p>
              Bigwig Media Digital has spent more than five years as a social media service in Delhi, and in that time
              we’ve learned the difference between agencies that post content and agencies that build growth engines.
              We’re the second kind. Our comprehensive SMO services connect your brand with the audience that actually
              buys from you, not just an audience that likes your posts and scrolls on.
            </p>
            <p>
              As a social media service agency in Delhi, our certified professionals combine proven frameworks, original
              creative, and continuous data analysis to move three specific numbers: visibility, engagement, and
              qualified leads. Nothing we do is guesswork. Every content decision traces back to what’s already working
              for your audience, and every underperforming post gets diagnosed, not ignored.
            </p>
          </>
        }
      />

      <PartnerBrands />

      <WorkShowcase />

      <StaticWorkGallery />

      <ServiceResults
        lead="Client results"
        title="5+ Years, Real Clients, Numbers You Can Verify"
        intro="We don’t ask you to take our word for it. Here’s what more than five years of running SMO campaigns in Delhi has actually produced for clients."
        items={results}
        note="These ranges exist because every business starts from a different baseline. A brand with zero social presence sees a very different growth curve than one that’s already active but underperforming. As a trusted social media optimization company in Delhi, we’d rather show you a realistic range backed by actual reviews than a single inflated number designed to impress."
        cta="Get your free SMO audit"
        source="smo-results"
      />

      <SocialPlatforms />

      <ServiceSteps
        id="smo-process"
        heading="How Our SMO Process Works"
        lead="From profile to report, every step is built to move visibility, engagement, and leads."
        rest="Here’s what we do for your brand, in order."
        steps={process}
      />

      <ServiceCarousel
        id="smo-benefits"
        lead="Benefits"
        title="Benefits of Social Media Optimization Services in Delhi"
        items={benefits}
        cta="Start growing with SMO"
        source="smo-benefits"
      />

      <ServiceArticle
        lead="Why us"
        title="The SMO Agency in Delhi Businesses Actually Stick With"
        cta="Start your project today"
        source="smo-why-us"
        body={
          <>
            <p>
              Plenty of agencies win a first project. Fewer keep clients for years. Our reviews and portfolio reflect
              the second kind of relationship, built on results clients can verify and a process transparent enough to
              survive scrutiny. Clients across India work with us because we focus on delivering long-term value,
              whether the goal is to:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {goals.map((g) => (
                <li key={g} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {g}
                </li>
              ))}
            </ul>
            <p>
              Every strategy is personalized to your industry, goals, and target audience, because a strategy built for
              a real estate brand in South Delhi has almost nothing in common with one built for a D2C skincare label,
              and pretending otherwise is how agencies produce forgettable results.
            </p>
          </>
        }
      />

      <ServiceFaq title="Social media optimization, answered" faqs={faqs} source="smo-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
