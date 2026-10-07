import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/smm.jpg";
import introImg from "../../../../Assets/services/5.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCards,
  ServiceCarousel,
  ServiceFaq,
  ServiceIntro,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/social-media-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Social Media Marketing Services in Delhi | Bigwig Media Digital";
const description =
  "Result-driven Social Media Marketing Services in Delhi. Instagram, Facebook, YouTube & LinkedIn campaigns. Creative content + targeted ads. Book Now!";

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

const adServices: ServiceItem[] = [
  {
    title: "Meta Ads (Facebook & Instagram Advertising)",
    desc: "Our advanced Social Media Marketing Services in Delhi include high-performing Meta Ads that capture attention and drive action. Whether your goal is brand awareness, engagement, or conversions, we design visually compelling and strategically optimised ad campaigns across Facebook and Instagram.",
  },
  {
    title: "LinkedIn Ads for High-Intent B2B Marketing",
    desc: "Reach CEOs, decision-makers, and industry leaders with precision. As part of our comprehensive Social Media Services in Delhi, we manage LinkedIn Ads that generate qualified B2B leads through sponsored content, lead-gen forms, and retargeting campaigns.",
  },
  {
    title: "Snapchat Ads for Mobile-First Audiences",
    desc: "Our Social Media Advertising expertise also includes Snapchat Ads designed for brands targeting younger, mobile-first users. Through immersive story ads, dynamic ads, and interactive formats, we help businesses boost engagement and build awareness.",
  },
  {
    title: "Twitter (X) Ads for Real-Time Visibility",
    desc: "Stay relevant with trending campaigns powered by Twitter (X) Ads. Using hashtag targeting, interest targeting, and keyword-based advertising, our Social Media Ads help brands spark conversations, increase visibility, and reach active audiences in real time.",
  },
  {
    title: "YouTube Ads for Strong Video Branding",
    desc: "As a key component of our Social Media Marketing Services in Delhi, we create YouTube ad campaigns that enhance brand recall and visibility. From skippable and non-skippable ads to bumper and in-feed formats, we ensure your message reaches the right viewers through high-impact video content.",
  },
];

const whyBigwig: ServiceItem[] = [
  {
    title: "Platform-Specific Expertise",
    desc: "Every platform works differently, and so do our strategies. Whether it’s Meta, LinkedIn, Snapchat, YouTube, or Twitter (X), we craft platform-specific Social Media Advertising campaigns based on real-time algorithms, ad formats, audience behaviour, and industry trends.",
  },
  {
    title: "Creative + Strategy Approach",
    desc: "Great results demand more than just good visuals. Our experts combine eye-catching creatives, persuasive copywriting, and data-driven targeting to craft campaigns that resonate with your audience and keep your brand’s message memorable.",
  },
  {
    title: "Conversion-Focused Funnels",
    desc: "From awareness to engagement to final purchase, we build full-funnel strategies that guide your audience through a seamless buyer journey. Our Social Media Services in Delhi focus on generating not just traffic, but actual leads and conversions.",
  },
  {
    title: "Transparent Reporting & Weekly Optimisation",
    desc: "You get detailed insights on CPC, CTR, ROAS, CPL, and more. Our team optimises every week to improve performance continuously, so your investment in Social Media Marketing Services in Delhi delivers maximum value.",
  },
  {
    title: "Budget-Friendly Scaling",
    desc: "Whether you’re starting with ₹5,000 or scaling up to ₹5,00,000, our smart budget allocation ensures your campaigns achieve maximum output with minimum wastage, for sustainable and profitable growth across every platform.",
  },
];

const adManagement: ServiceItem[] = [
  {
    title: "Campaign Strategy",
    desc: "Campaign strategy and full-funnel design tailored to your business goals.",
  },
  {
    title: "Audience Research & Targeting",
    desc: "Audience research and a precise targeting setup for maximum reach.",
  },
  {
    title: "High-Converting Creatives",
    desc: "Ad creatives that convert, including copywriting and visuals.",
  },
  {
    title: "A/B Testing",
    desc: "Testing of creatives, placements, and messaging to find what performs best.",
  },
  {
    title: "Pixel & Conversion Tracking",
    desc: "Accurate tracking set up so every result can be measured.",
  },
  {
    title: "Weekly Reporting",
    desc: "Weekly reports with clear, actionable insights.",
  },
  {
    title: "Continuous Optimisation & Scaling",
    desc: "Ongoing optimisation and scaling for consistent growth.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is included in social media marketing services?",
    a: "At Bigwig Media Digital, our Social Media Marketing Services in Delhi include everything your brand needs to build a strong online presence: content creation, page management, audience engagement, hashtag research, competitor analysis, and strategic posting. We also provide creative design, reels, story creatives, monthly content calendars, and performance tracking. For brands looking to grow faster, we integrate Social Media Advertising and paid campaign management for maximum reach and conversions.",
  },
  {
    q: "What are the benefits of social media marketing services?",
    a: "Our SMM Services in Delhi help businesses increase brand awareness, engage with their audience, generate high-quality leads, and improve customer loyalty. With consistent posting, high-performing creatives, data-driven strategies, and ROI-focused Social Media Ads, you can grow your presence across platforms like Facebook, Instagram, LinkedIn, YouTube, Twitter (X), and Snapchat. Social media marketing also boosts website traffic, reputation, and conversions.",
  },
  {
    q: "Why should you hire a social media marketing agency in India?",
    a: "Hiring a professional agency like Bigwig Media Digital ensures your brand gets expert-led strategy, creative direction, and performance-driven execution. Our team specialises in Social Media Services in Delhi, allowing you to focus on your business while we handle content creation, campaign management, audience targeting, and ongoing optimisation. With deep industry insights, creative capabilities, and proven advertising frameworks, we help your brand achieve consistent, measurable results.",
  },
  {
    q: "How often will you post content on my social media profiles?",
    a: "Posting frequency depends on your package and marketing goals. Typically, we create a structured monthly content calendar that includes 12–20 posts per month, along with stories, reels, and engagement activities. Our Social Media Marketing Services in Delhi ensure your brand stays active, relevant, and consistently visible to your audience.",
  },
  {
    q: "How does Bigwig Media Digital measure the success of social media campaigns?",
    a: "We use advanced tracking tools and detailed analytics to measure KPIs like engagement rate, reach, impressions, CPC, CTR, conversions, ROAS, and follower growth. Our performance reports offer complete transparency, and our team optimises campaigns weekly to ensure continuous improvement. Whether it’s organic growth or Social Media Advertising, we focus on delivering measurable and meaningful results.",
  },
  {
    q: "Can you help with social media advertising?",
    a: "Absolutely! Bigwig Media Digital specialises in high-impact Social Media Advertising across Meta (Facebook & Instagram), LinkedIn, YouTube, Snapchat, and Twitter (X). We create conversion-focused Social Media Ads, handle audience targeting, A/B testing, funnel building, and ongoing optimisation to help you generate leads, sales, and brand awareness at scale.",
  },
  {
    q: "What platforms do you manage?",
    a: "We manage all major social media platforms, including Facebook, Instagram, LinkedIn, YouTube, Twitter (X), Snapchat, and Pinterest. Our Social Media Services in Delhi ensure your brand performs consistently across every platform where your audience is active.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SocialMediaMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Social media marketing"
        title="Best SMM Services in Delhi to Grow Your Brand Online"
        intro={
          <p>
            <span className="text-white">Take your brand to the next level on social.</span> Our Social Media
            Marketing Services in Delhi increase engagement, build brand authority, and generate quality leads through
            strategic content and targeted campaigns, giving your business maximum visibility across every major
            platform.
          </p>
        }
        cta="Book a free SMM consultation"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Social Media Marketing services and would like to discuss more."
        formSource="smm-hero"
        formServices={["SMM"]}
      />

      <ServiceIntro
        lead="SMM company in Delhi"
        title="Why Your Business Needs SMM Services in Delhi"
        image={introImg}
        imageAlt="Social Media Marketing Agency in Delhi"
        body={
          <>
            <p>
              In a competitive market like Delhi, businesses must stay active and visible on social media platforms.
              Professional Social Media Marketing Services in Delhi help you connect with your audience, drive
              engagement, and build a strong brand presence. Whether you want brand awareness, website traffic, or lead
              generation, our specialised SMM Services in Delhi provide the perfect solution.
            </p>
            <p>
              Social media is no longer optional. Your customers expect active communication and consistent content.
              With our Social Media Services in Delhi, we ensure your brand stays ahead of competitors.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="smm-services"
        lead="What we offer"
        title="Our Social Media Advertising Services in India"
        intro="As part of our premium SMM Services in Delhi, we offer targeted, result-driven Social Media Advertising designed to increase brand visibility, generate leads, and maximise ROI. Our performance-focused Social Media Ads help businesses connect with their ideal audience across the most influential platforms in India."
        items={adServices}
        cta="Launch your ad campaign"
        source="smm-services"
      />

      <ServiceArticle
        lead="Targeted results"
        title="Reach Targeted Results With Social Media Marketing Services"
        cta="Start growing with SMM"
        source="smm-results"
        body={
          <>
            <p>
              Your search for powerful, result-driven Social Media Marketing Services in Delhi ends here. At Bigwig
              Media Digital, our expert team crafts data-driven strategies, creative content, and high-impact campaigns
              that help you connect with your ideal audience. With our premium SMM Services in Delhi, we focus on
              building brand visibility, boosting engagement, and driving measurable business growth.
            </p>
            <p>
              From strategic planning to content creation, campaign execution, Social Media Advertising, and detailed
              performance analysis, we offer fully customised Social Media Services in Delhi tailored to your business
              goals. Whether you need organic growth or performance-based Social Media Ads, we ensure every step leads
              to real, trackable results.
            </p>
            <p>
              To maximise conversions, Bigwig Media Digital also specialises in high-converting{" "}
              <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
                Landing Page Development
              </Link>
              . Our landing pages combine compelling UI/UX, persuasive copy, and conversion-optimised layouts that
              complement your social media campaigns, turning clicks into customers and ad spend into measurable growth.
            </p>
          </>
        }
      />

      <ServiceCarousel
        lead="Why Bigwig"
        title="Why Choose Bigwig Media Digital for Social Media Marketing in India"
        intro="We don’t just run basic campaigns. We build strategic, conversion-focused digital ecosystems that amplify your brand presence and deliver measurable results, combining creativity, analytics, and performance marketing expertise so every campaign drives maximum ROI."
        items={whyBigwig}
        cta="Start your growth journey"
        source="smm-why-us"
      />

      <ServiceCards
        lead="Ad management"
        title="What You Get with Our Social Media Ad Management"
        intro="Partnering with Bigwig Media Digital means a complete, end-to-end solution for your Social Media Ads, and a strategic partner dedicated to high-impact, ROI-driven results in Delhi and across India."
        items={adManagement}
        cta="Get a free SMM consultation"
        source="smm-ad-management"
      />

      <ServiceArticle
        lead="Proven results"
        title="A Trusted SMM Company in Delhi Delivering Proven Results"
        cta="Talk to our SMM team"
        source="smm-trusted"
        body={
          <>
            <p>
              As a leading and trusted SMM company in Delhi, we specialise in result-driven social media solutions that
              help businesses grow faster in today’s digital-first world. With years of experience providing premium
              SMM Services in Delhi, our team understands what it takes to build a powerful brand presence across
              multiple platforms. Our comprehensive Social Media Marketing Services in Delhi cover everything from
              content creation, page management, and community engagement to full-funnel Social Media Ads and
              high-performance Social Media Advertising campaigns.
            </p>
            <p>
              We take the time to understand your business goals, target audience, and competition. This lets us craft
              customised strategies that not only elevate your brand but also deliver measurable results month after
              month. Whether you want to build awareness, increase engagement, generate leads, or scale your sales, our
              proven social media frameworks provide a clear growth roadmap, and we continuously optimise campaigns to
              keep your brand ahead in an ever-evolving digital landscape.
            </p>
            <p>
              Businesses across industries trust us for transparent reporting, consistent performance, and innovative
              ideas that make their brand stand out. If you’re looking for a reliable partner to handle everything from
              organic marketing to high-impact Social Media Advertising, we are the SMM company in Delhi you can count
              on for proven, measurable results.
            </p>
          </>
        }
      />

      <ServiceFaq title="Social media marketing, answered" faqs={faqs} source="smm-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
