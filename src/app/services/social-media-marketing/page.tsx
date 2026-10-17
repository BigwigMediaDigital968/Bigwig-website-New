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
const title = "Social Media Marketing Agency in Delhi | Bigwig Media Digital";
const description =
  "Social media marketing services in Delhi: strategy, content, community management and paid social, reported in leads. Get a free social media audit.";

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
    a: "Our social media marketing services typically include strategy development, a monthly content calendar, post and reel creation, community management, paid social campaigns where needed, and performance reporting.",
  },
  {
    q: "How much do social media marketing services cost in Delhi?",
    a: "Social media marketing costs depend on your management fee, advertising budget, number of platforms, content requirements, industry and business goals. We offer a free audit to help estimate a suitable starting budget.",
  },
  {
    q: "How many posts will you publish each month?",
    a: "Most plans include 12 to 20 posts per month, along with stories and reels, depending on your package, content strategy and business goals.",
  },
  {
    q: "Which social media platforms should my business use?",
    a: "The right platforms depend on your target audience and goals. Instagram and Facebook work well for many consumer and local businesses, LinkedIn suits B2B and professional services, and YouTube is ideal for video-focused brands. We recommend the right mix after an initial audit.",
  },
  {
    q: "How long does it take to see results from social media marketing?",
    a: "Paid campaigns can start generating enquiries within a few weeks once conversion tracking is configured and creatives are tested. Organic growth typically takes several months of consistent posting and engagement. Results depend on your industry, budget, audience and content quality.",
  },
  {
    q: "Do you manage paid social media ads as well?",
    a: "Yes. We manage paid campaigns across platforms such as Meta, LinkedIn and YouTube, using audience targeting, A/B testing and conversion tracking to improve campaign performance. Your advertising budget is paid directly to the respective platform.",
  },
  {
    q: "Do I need paid ads, or is organic social media marketing enough?",
    a: "Organic content builds trust, strengthens brand identity and keeps your audience engaged, while paid campaigns help you reach new audiences faster. Many businesses benefit from combining both, with the right balance based on their goals and budget.",
  },
  {
    q: "How do you measure the success of social media marketing?",
    a: "We track metrics relevant to your goals, including reach, impressions, engagement rate, follower growth, click-through rate (CTR), cost per click (CPC), cost per lead (CPL) and return on ad spend (ROAS).",
  },
  {
    q: "Is social media marketing better than SEO?",
    a: "They serve different purposes. Social media marketing builds brand awareness, engagement and visibility, while SEO helps attract long-term organic traffic from search engines. Many businesses use both strategies together for stronger digital growth.",
  },
  {
    q: "Can social media marketing help with lead generation?",
    a: "Yes. Lead forms, messaging campaigns and targeted advertisements can generate enquiries for businesses in real estate, education, healthcare and other service industries. Campaigns must comply with the advertising policies of each platform.",
  },
  {
    q: "Can social media marketing work for a small business?",
    a: "Yes. Small businesses can start with a manageable budget, focus on one or two relevant platforms, track enquiries and engagement, and gradually scale the strategies that deliver results.",
  },
  {
    q: "How is social media marketing different from social media optimisation?",
    a: "Social media optimisation (SMO) focuses on improving your profiles, business information and discoverability. Social media marketing includes ongoing content creation, community management and paid campaigns to grow your audience, engagement and enquiries.",
  },
  {
    q: "How is social media marketing different from performance marketing?",
    a: "Social media marketing includes organic content, community management and paid social campaigns. Performance marketing focuses on measurable advertising outcomes such as leads, sales and conversions across channels such as Google Ads and Meta Ads. Both can work together to support business growth.",
  },
  {
    q: "What do I need to get started with social media marketing?",
    a: "You will need access to your social media pages and advertising accounts, if available, along with your business goals, monthly budget, offer details and target audience. We use this information to develop a tailored social media strategy.",
  },
  {
    q: "Do you provide social media marketing services across Delhi NCR?",
    a: "Yes. We serve businesses across Delhi NCR, including Noida and Gurgaon, helping them build their online presence, engage relevant audiences and generate business enquiries.",
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

export default function SocialMediaMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Enhance Your Social Media Presence"
        title="Social Media Marketing Services in Delhi"
        intro={
          <p>
            <span className="text-white">
              Bigwig Media Digital is a social media marketing agency in Delhi
            </span>{" "}
            serving businesses across Delhi NCR, including Noida and Gurgaon. We
            plan your content, manage your Instagram, Facebook, LinkedIn and
            YouTube pages, and run paid social campaigns when you are ready to
            scale. Every plan is judged by the reach, engagement, leads and
            enquiries it produces.
          </p>
        }
        cta="Get a Free Social Media Audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Social Media Marketing services and would like to discuss more."
        formSource="smm-hero"
        formServices={["SMM"]}
      />

      {/* B2. What Is Social Media Marketing */}
      <ServiceIntro
        lead="Social media marketing agency in Delhi"
        title="What Is Social Media Marketing?"
        image={introImg}
        imageAlt="Social media marketing planning for a Delhi business"
        body={
          <>
            <p>
              Social media marketing is the use of platforms such as Instagram,
              Facebook, LinkedIn and YouTube to build awareness, start
              conversations and bring in customers. It combines content,
              community management and paid advertising.
            </p>
            <p>
              It works in two ways. Organic social media builds trust and keeps
              your audience engaged through regular posts, reels, stories and
              replies. Paid social puts your content in front of a chosen
              audience and can drive enquiries, sales or website visits.
            </p>
            <p>
              Unlike print or hoardings, social media shows you who saw your
              content and what they did next. Reach, engagement, clicks and
              leads are visible, so decisions are based on numbers.
            </p>
          </>
        }
      />

      {/* B3. Why Delhi Businesses Use It */}
      <ServiceArticle
        lead="Why Bigwig"
        title="Why Delhi Businesses Use Social Media Marketing"
        cta="Talk to our team"
        source="smm-why-delhi"
        body={
          <>
            <p>
              Delhi NCR is one of the most competitive markets in India.
              Businesses in the same area compete for the same customers, and
              most of those customers spend time on Instagram, Facebook, YouTube
              and LinkedIn every day.
            </p>
            <p>
              Social media lets you stay visible to people who live or work in
              your area, show your work, answer questions and build trust before
              a customer ever calls. Ad platforms let you target by city, area,
              age and interest, so you can focus on Delhi, Noida, Gurgaon and
              the rest of NCR.
            </p>
            <p>
              Because results are tracked, you can start with a plan that fits
              your budget, see what works and grow from there.
            </p>
          </>
        }
      />

      {/* B4. Services */}
      <ServiceCarousel
        id="our-services"
        lead="What we offer"
        title="Our Social Media Marketing Services in Delhi"
        cta="Get started today"
        source="smm-services"
        items={[
          {
            title: "Social Media Strategy and Audit",
            desc: "We review your accounts, competitors and audience, then set goals and a content plan. You see what to fix and what to focus on before you spend on ads.",
          },
          {
            title: "Content Creation",
            desc: (
              <>
                Posts, carousels, reels and stories written and designed to fit
                your brand. You approve a monthly content calendar before
                anything goes live. Discover our{" "}
                <Link href="/services/graphic-designing" className={inlineLink}>
                  Graphic Designing
                </Link>{" "}
                and{" "}
                <Link href="/services/content-marketing" className={inlineLink}>
                  Content Marketing
                </Link>{" "}
                services.
              </>
            ),
          },
          {
            title: "Social Media Management and Community Engagement",
            desc: "Scheduling, replies to comments and messages, hashtag research and brand-voice control, so your pages stay active and consistent.",
          },
          {
            title: "Instagram and Facebook Marketing",
            desc: "These platforms suit most consumer and local businesses. We plan reels, stories and posts, build audiences, and use lead forms and messaging to turn followers into enquiries.",
          },
          {
            title: "LinkedIn Marketing for B2B",
            desc: "For B2B and professional services, LinkedIn reaches decision-makers by job title, industry and company size. We manage your company page and thought-leadership content and run lead-generation campaigns.",
          },
          {
            title: "YouTube Marketing",
            desc: "Video helps customers see your work and builds recall. We help with channel setup, video content, and in-feed and in-stream ads.",
          },
          {
            title: "Paid Social Advertising",
            desc: (
              <>
                Paid campaigns on Meta, LinkedIn and YouTube with audience
                targeting, A/B testing, and pixel and conversion tracking. For
                full paid-media detail, see our{" "}
                <Link
                  href="/services/performance-marketing"
                  className={inlineLink}
                >
                  Performance Marketing
                </Link>{" "}
                page.
              </>
            ),
          },
          {
            title: "Influencer Marketing",
            desc: (
              <>
                We shortlist creators whose audience matches yours and brief
                them on your offer. Explore our{" "}
                <Link
                  href="/services/influencer-marketing"
                  className={inlineLink}
                >
                  Influencer Marketing
                </Link>{" "}
                services.
              </>
            ),
          },
          {
            title: "Social Media Optimisation",
            desc: (
              <>
                Profile setup, bios, highlights and posting structure, so your
                pages are easy to find and easy to act on. Explore our{" "}
                <Link
                  href="/services/social-media-optimization"
                  className={inlineLink}
                >
                  Social Media Optimisation
                </Link>{" "}
                services.
              </>
            ),
          },
          {
            title: "Reporting and Analytics",
            desc: "Weekly check-ins and a monthly report covering reach, engagement, leads and cost per lead, plus CTR and ROAS for paid campaigns.",
          },
        ]}
      />

      {/* B5. Process */}
      <ServiceCarousel
        lead="Our method"
        title="How Our Social Media Marketing Process Works"
        cta="Discuss your strategy"
        source="smm-process"
        items={[
          {
            title: "1. Audit and goals",
            desc: "We review your accounts, competitors and audience, then agree on goals such as leads, enquiries or reach.",
          },
          {
            title: "2. Strategy and calendar",
            desc: "We choose the platforms, content themes and posting plan, and prepare your first monthly content calendar for approval.",
          },
          {
            title: "3. Launch",
            desc: "Posts go live on schedule. Tracking is set up for any paid campaigns, so results can be measured from day one.",
          },
          {
            title: "4. Optimise",
            desc: "We review what is working every week, reply to your audience, and refine content and campaigns.",
          },
          {
            title: "5. Report and scale",
            desc: "You receive clear reports on reach, engagement, leads and cost per result. As the plan proves itself, we scale what works.",
          },
        ]}
      />

      {/* B6. Metrics Section */}
      <ServiceArticle
        lead="Metrics that matter"
        title="Social Media Metrics We Track"
        cta="Get a performance audit"
        source="smm-metrics"
        body={
          <>
            <p className="mb-6">
              We track key performance indicators to ensure every content piece
              and ad campaign delivers tangible growth for your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">Reach</h3>
                <p className="text-sm text-gray-600">
                  How many people saw your content
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">Impressions</h3>
                <p className="text-sm text-gray-600">
                  How many times your content was shown
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">Engagement Rate</h3>
                <p className="text-sm text-gray-600">
                  Share of viewers who liked, commented, shared or saved
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">Follower Growth</h3>
                <p className="text-sm text-gray-600">
                  How fast your audience is growing
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">
                  Click-Through Rate (CTR)
                </h3>
                <p className="text-sm text-gray-600">
                  How many people who saw a post or ad clicked the link
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">
                  Cost Per Click (CPC)
                </h3>
                <p className="text-sm text-gray-600">
                  What you pay for each click on paid campaigns
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">
                  Cost Per Lead (CPL)
                </h3>
                <p className="text-sm text-gray-600">
                  What you pay to get one enquiry
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">
                  Return On Ad Spend (ROAS)
                </h3>
                <p className="text-sm text-gray-600">
                  Revenue earned for every rupee of ad spend
                </p>
              </div>
            </div>
          </>
        }
      />

      {/* B7. Platform Guide */}
      <ServiceArticle
        lead="Platform selection"
        title="Which Social Media Platform Is Right for Your Business?"
        cta="Find your ideal platform mix"
        source="smm-platforms"
        body={
          <>
            <p className="mb-6">
              Each platform does a different job. Choose based on where your
              customers spend time.
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 border-l-4 border-pink-500 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900">Instagram</h3>
                <p className="text-gray-700">
                  Best for consumer brands, beauty, retail and events. Strong
                  for reels, stories and visual products.
                </p>
              </div>
              <div className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900">Facebook</h3>
                <p className="text-gray-700">
                  Best for local services, real estate, education and
                  healthcare. Strong for local targeting, community and lead
                  forms.
                </p>
              </div>
              <div className="p-4 border-l-4 border-blue-700 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900">LinkedIn</h3>
                <p className="text-gray-700">
                  Best for B2B, finance, manufacturing and professional
                  services. Strong for reaching decision-makers.
                </p>
              </div>
              <div className="p-4 border-l-4 border-red-600 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900">YouTube</h3>
                <p className="text-gray-700">
                  Best for brand awareness, tutorials and product demos. Strong
                  for long-term recall.
                </p>
              </div>
              <div className="p-4 border-l-4 border-gray-600 bg-gray-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900">Pinterest and X</h3>
                <p className="text-gray-700">
                  Useful for niche and campaign-led use. We manage them when
                  they match your audience.
                </p>
              </div>
            </div>

            <p className="mt-4 font-medium text-gray-900">
              Most businesses do not need every platform. We recommend a mix
              after reviewing your audience, goals and budget.
            </p>
          </>
        }
      />

      {/* B8. Why Choose Us */}
      <ServiceArticle
        lead="Why Bigwig Media Digital"
        title="Why Choose Bigwig Media Digital as Your Social Media Marketing Company in Delhi"
        cta="Partner with us today"
        source="smm-why-choose-us"
        body={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategy First
              </h3>
              <p>
                We start by understanding your business, customers and
                competitors, so content and campaigns are built around your
                goals.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Consistent Content
              </h3>
              <p>
                Most plans include 12 to 20 posts a month, plus stories and
                reels, depending on your package and goals. A monthly calendar
                keeps your pages active and on brand.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transparent Reporting
              </h3>
              <p>
                Clear reports show reach, engagement, leads and cost per result,
                with a plain summary of what to do next.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Continuous Optimisation
              </h3>
              <p>
                We review content and campaigns every week and keep refining as
                platforms, audiences and competition change.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tracking From Day One
              </h3>
              <p>
                Pixel and conversion tracking is set up before paid campaigns go
                live, so leads and sales are counted.
              </p>
            </div>
          </div>
        }
      />

      {/* B9. Industries */}
      <ServiceCarousel
        lead="Sectors We Empower"
        title="Industries We Work With"
        cta="Discuss your industry strategy"
        source="smm-industries"
        items={[
          {
            title: "Real Estate",
            desc: "Location-based lead campaigns and project launch content that bring in qualified enquiries.",
          },
          {
            title: "Beauty",
            desc: "Reels and before-and-after content that show results and drive bookings.",
          },
          {
            title: "Education",
            desc: "Admission-season campaigns and content that speak to students and parents.",
          },
          {
            title: "Finance and Lending",
            desc: "Compliant, lead-focused content and campaigns built around platform policies.",
          },
          {
            title: "Healthcare",
            desc: "Informative, trust-building content that helps patients find the right provider, within advertising rules.",
          },
          {
            title: "Manufacturing",
            desc: "LinkedIn authority content and campaigns that generate business enquiries.",
          },
          {
            title: "Events",
            desc: "Teaser-to-ticket campaigns and live coverage that build attendance.",
          },
          {
            title: "Astrology",
            desc: "Consistent video content that builds an audience and drives consultation bookings.",
          },
        ]}
      />

      {/* B10. Pricing */}
      <ServiceArticle
        lead="Investment & Packages"
        title="How Social Media Marketing Pricing Works in Delhi"
        cta="Request a custom quote"
        source="smm-pricing"
        body={
          <>
            <p className="mb-4">
              Social media marketing cost has two parts: your management fee,
              which covers strategy, content, community management and
              reporting, and your ad spend, which goes to the advertising
              platform if you run paid campaigns.
            </p>
            <p className="mb-4">
              Agencies commonly charge in one of three ways: a fixed monthly fee
              based on a package, a project-based fee for a campaign or launch,
              or a management fee plus a share of ad spend. The right model
              depends on your budget and goals.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              What affects your cost:
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>The number of platforms you want managed</li>
              <li>How many posts, reels and stories you need each month</li>
              <li>
                Whether you run paid campaigns and how large the ad budget is
              </li>
              <li>How competitive your industry and area are</li>
              <li>How much design and video production is needed</li>
            </ul>

            <p className="mt-4 font-medium text-gray-900">
              Request a free social media audit and we will suggest a plan and
              starting budget for your business.
            </p>
          </>
        }
      />

      {/* B11. Who It Is For, Mistakes, and How to Choose */}
      <ServiceArticle
        lead="Strategic Fit & Recommendations"
        title="Who It Is For, Common Mistakes, and How to Choose"
        cta="Claim your free audit"
        source="smm-guide"
        body={
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who Should Invest in Social Media Marketing?
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Local and service businesses that want a steady flow of
                  enquiries
                </li>
                <li>
                  E-commerce and D2C brands that want to grow online sales
                </li>
                <li>B2B companies that need to reach decision-makers</li>
                <li>
                  Educational institutes, clinics and real estate businesses
                  that run on enquiries
                </li>
                <li>
                  Startups that want to build awareness with a controlled budget
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Common Mistakes That Waste Time and Budget
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Posting without a plan:</strong> Random posts do not
                  build an audience.
                </li>
                <li>
                  <strong>Being on every platform:</strong> Spreading thin gives
                  weak results everywhere.
                </li>
                <li>
                  <strong>Ignoring comments and messages:</strong> Replies build
                  trust and bring enquiries.
                </li>
                <li>
                  <strong>Boosting posts without a goal:</strong> Spend needs a
                  clear action, such as a lead or a message.
                </li>
                <li>
                  <strong>Judging by likes alone:</strong> Likes do not pay the
                  bills, leads and sales do.
                </li>
                <li>
                  <strong>Stopping too early:</strong> Social media needs
                  consistent posting over months before you judge it.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How to Choose a Social Media Marketing Agency in Delhi
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Check for experience in your industry and ask for relevant
                  examples.
                </li>
                <li>
                  Make sure you own your social and ad accounts and can see your
                  data.
                </li>
                <li>Ask how they report, how often, and which metrics.</li>
                <li>Ask to see a sample content calendar and past content.</li>
                <li>
                  Get clear pricing: the agency fee and your ad spend should be
                  separate.
                </li>
                <li>
                  Ask how they handle content or campaigns that underperform.
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <ServiceFaq
        title="Social media marketing, answered"
        faqs={faqs}
        source="smm-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
