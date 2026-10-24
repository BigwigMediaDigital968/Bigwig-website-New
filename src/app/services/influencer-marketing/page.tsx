import type { Metadata } from "next";
import heroImg from "../../../../Assets/Services hero/Influencer_marketing.jpg";
import introImg from "../../../../Assets/services/15.jpg";
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

const PATH = "/services/influencer-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Best Influencer Marketing Agency in Delhi";
const description =
  "Boost your brand with influencer marketing services in Delhi. From creator selection to campaign execution, we drive engagement and reach.";

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
        url: "https://www.bigwigmediadigital.com/og-bigwig.png",
      },
    ],
  },
};

// Photos from Unsplash (images.unsplash.com is allowed in next.config)

const promises = [
  "Authentic content",
  "Smooth partnership management",
  "Transparent performance tracking",
  "Campaigns built to trend and convert",
];

const whyChoose: ServiceItem[] = [
  {
    title: "Local Insight",
    desc: "Delhi audiences respond to lifestyle, aspiration, and content that feels relatable. We study what people in the city watch, save, and share, then plan content that fits their habits instead of forcing a generic message on them.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Friends laughing together around a café table",
  },
  {
    title: "Verified Creators",
    desc: "Our network covers fashion, beauty, food, travel, fitness, finance, tech, parenting, and more, from nano creators to celebrities. We match each creator to your brand’s tone, audience, and goals, so the partnership feels natural to their followers.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fashion creator posing in bold sunglasses",
  },
  {
    title: "Data-Led Shortlisting",
    desc: "We score every creator on audience relevance, engagement quality, authenticity, content style, and past performance. You see why each creator made the shortlist, so decisions rest on data and not on follower count alone.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Honest Numbers",
    desc: "We check follower quality using tools like Influish before any creator is approved. You get clear deliverables, agreed timelines, and proper disclosure on every post, so you know exactly what you are paying for.",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Phone held up beneath a painted like-heart",
  },
  {
    title: "Full Campaign Management",
    desc: "Strategy, creator selection, negotiation, briefing, content approvals, posting schedules, and reporting are all handled by us. You get one point of contact and regular updates, so your team can focus on running the business.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Campaign team working together at a long table",
  },
  {
    title: "Content Made for the Platform",
    desc: "We plan Reels, YouTube Shorts, long-form videos, and lifestyle posts around how people actually watch on each platform. Hooks, length, and format are chosen for the platform, helping content hold attention and drive action.",
    image:
      "https://images.unsplash.com/photo-1607968565043-36af90dde238?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Phone on a tripod filming a creator video",
  },
];

import Link from "next/link";

const services: ServiceItem[] = [
  {
    title: "Creator Discovery & Shortlisting",
    desc: (
      <>
        We match your brand with creators your audience already follows. Every
        shortlist is tailored to your category, budget, and campaign goals, so
        you only review creators who are the right fit. Our approach works
        alongside our{" "}
        <Link
          href="/services/social-media-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          social media marketing
        </Link>{" "}
        strategies to build stronger audience connections.
      </>
    ),
  },
  {
    title: "Campaign Strategy & Creative Direction",
    desc: (
      <>
        Every campaign starts with a clear objective, compelling story,{" "}
        <Link
          href="/services/content-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          content plan
        </Link>
        , strong hooks, and posting schedule. We align the creative direction
        with your brand and get your approval before creators begin work.
      </>
    ),
  },
  {
    title: "Content Production & Collaboration",
    desc: (
      <>
        We coordinate scripts, concepts, and{" "}
        <Link
          href="/services/graphic-designing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          visual design
        </Link>{" "}
        to create polished content that feels genuine. Creators retain their
        unique voice while ensuring your brand's key message comes through.
      </>
    ),
  },
  {
    title: "Brand & Creator Alignment",
    desc: (
      <>
        We partner your brand with creators who genuinely connect with your
        message, not just those with large follower counts. The right alignment
        builds trust and makes recommendations feel authentic to their audience,
        strengthening your overall{" "}
        <Link
          href="/services/brand-strategy"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          brand strategy
        </Link>
        .
      </>
    ),
  },
  {
    title: "Campaign Execution & Optimization",
    desc: (
      <>
        We monitor engagement throughout the campaign and optimize content
        formats, posting times, and creator strategies to improve performance
        and return on spend. Our{" "}
        <Link
          href="/services/performance-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          performance marketing
        </Link>{" "}
        expertise helps turn campaign insights into measurable improvements
        while the campaign is still live.
      </>
    ),
  },
  {
    title: "Analytics, Reporting & ROI Tracking",
    desc: (
      <>
        Get clear reports covering reach, impressions, engagement, video
        completion, clicks, conversions, audience sentiment, and ROI. We use
        these insights to refine future campaigns and strengthen your{" "}
        <Link
          href="/services/digital-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          digital marketing
        </Link>{" "}
        strategy for continued growth.
      </>
    ),
  },
];

const workflow: ServiceStep[] = [
  {
    title: "Understanding Your Brand & Audience",
    desc: (
      <>
        We review your business goals, product positioning, competitors, and
        target customers to define a clear campaign direction. Our{" "}
        <Link
          href="/services/brand-strategy"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          brand strategy
        </Link>{" "}
        approach helps ensure every campaign reaches the right audience with the
        right message.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Identifying the Right Creators",
    desc: (
      <>
        We use analytics tools to identify creators who genuinely influence your
        target audience. Before shortlisting, we assess engagement quality,
        audience relevance, and previous brand collaborations to support your{" "}
        <Link
          href="/services/social-media-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          social media marketing
        </Link>{" "}
        goals.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Glossy 3D Instagram icon on pink",
  },
  {
    title: "Planning the Content Story",
    desc: (
      <>
        We develop a compelling story for each platform, defining the hook,
        format, and key message for every creator. Our{" "}
        <Link
          href="/services/content-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          content marketing
        </Link>{" "}
        expertise helps create engaging, platform-specific content that aligns
        with your brand. You review and approve the plan before production
        begins.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning a campaign at a whiteboard",
  },
  {
    title: "Collaboration & Content Creation",
    desc: (
      <>
        Creators produce authentic content that resonates with their followers.
        We coordinate creative briefs, feedback, and approvals while protecting
        each creator's unique voice. Our{" "}
        <Link
          href="/services/graphic-designing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          visual design
        </Link>{" "}
        expertise complements the creative process to maintain a consistent
        brand identity.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Creator studio with camera, monitors and lighting",
  },
  {
    title: "Campaign Management & Optimization",
    desc: (
      <>
        We monitor campaign performance and adjust content formats, posting
        times, and creator partnerships while the campaign is live. Our{" "}
        <Link
          href="/services/performance-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          performance marketing
        </Link>{" "}
        approach helps focus your budget on what works and improve campaign
        results.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team reviewing a campaign on a desktop screen",
  },
  {
    title: "Reporting & Insights",
    desc: (
      <>
        Get clear reports on ROI, reach, engagement, conversions, and audience
        sentiment, along with actionable next steps. We identify what worked,
        what needs improvement, and how to strengthen future campaigns through
        data-driven{" "}
        <Link
          href="/services/digital-marketing"
          className="font-medium underline underline-offset-4 hover:opacity-75"
        >
          digital marketing
        </Link>{" "}
        strategies.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rising growth chart on paper",
  },
];

const industries = [
  "Fashion & Lifestyle",
  "Beauty & Skincare",
  "Food & Beverage",
  "Technology & Gadgets",
  "Healthcare & Wellness",
  "Real Estate",
  "Education & EdTech",
  "Finance & Investment",
  "Travel & Hospitality",
  "Automotive",
  "D2C Brands",
  "SaaS & Apps",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What makes a good influencer marketing agency in Delhi?",
    a: "A good agency has a vetted creator network, plans campaigns using audience data, and reports real results. We connect brands with verified creators who understand Delhi and Indian audiences and track reach, engagement, and ROI.",
  },
  {
    q: "How does Bigwig Media Digital support influencers?",
    a: "We give creators clear briefs, brand background, timely communication, fair payment, and creative guidance. This helps them make content that feels natural and performs well.",
  },
  {
    q: "How do you measure the success of influencer campaigns?",
    a: "We track reach, impressions, engagement rate, saves, shares, cost per engagement, clicks, and conversions. You receive a dashboard so you can see exactly what the campaign earned.",
  },
  {
    q: "Can influencers outside Delhi work with you?",
    a: "Yes. Delhi is our base, but we work with creators across India and internationally. We choose regions, languages, and niches to match your audience.",
  },
  {
    q: "Which industries do you work with?",
    a: "Fashion, beauty, food, tech, fitness, real estate, education, travel, finance, lifestyle, and more. We match creators to the categories where they perform best.",
  },
  {
    q: "How do you make sure creators fit my brand?",
    a: "We check niche, audience demographics, engagement quality, past collaborations, and content tone before shortlisting.",
  },
  {
    q: "How do you keep partnerships authentic?",
    a: "Creators keep their own storytelling style and share honest opinions. We monitor content in real time for quality, disclosure, and genuine audience response.",
  },
  {
    q: "What campaign ideas have you used?",
    a: "Reel challenges, product seeding, storytelling videos, unboxings, live sessions, testimonial-style content, and trend-based formats. Each idea is built around your goal.",
  },
  {
    q: "How do you handle negotiation and creator payments?",
    a: "We manage shortlisting, negotiation, contracts, payments, and deliverable tracking, so you get fair value, and creators get paid on time.",
  },
  {
    q: "How do you monitor performance during a campaign?",
    a: "We use tools for live tracking, audience analytics, engagement checks, and fake-follower detection, and adjust the plan while the campaign runs.",
  },
  {
    q: "Should I hire an influencer marketing agency in Delhi or work with influencers myself?",
    a: "Working directly can suit a single small collaboration. An agency makes more sense when you need vetted creators, negotiated rates, contracts, approvals, and reporting handled in one place, so your team can stay focused on the business.",
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

export default function InfluencerMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Creator campaigns for brands"
        title="Influencer Marketing Agency in Delhi for Brands Who Want Sales"
        intro={
          <p>
            People trust creators more than ads. We connect your brand with the
            right Instagram and YouTube creators, manage the whole campaign, and
            report on the views, leads, and sales it earned.
          </p>
        }
        cta="Get a free influencer shortlist"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Influencer Marketing services and would like to discuss more."
        formSource="influencer-hero"
        formServices={["Influencer Marketing"]}
      />

      <ServiceIntro
        lead="Delhi focus"
        title="Creator Campaigns Built for Delhi Audiences"
        image={introImg}
        imageAlt="Influencer Marketing Services"
        body={
          <>
            <p>
              Delhi has its own language of influence. Trends start in Khan
              Market, spread from Connaught Place, and travel through creators
              people already trust. As an influencer marketing agency in Delhi,
              we pair your brand with creators who understand this audience and
              back every decision with data.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]"
                  />
                  {p}
                </li>
              ))}
            </ul>
            <p>
              Brands work with us when they want creator campaigns that earn
              attention and sales, not just views.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="influencer-why-us"
        lead="Why Bigwig"
        title="Why Brands Choose Bigwig Media Digital as Their Influencer Marketing Agency in Delhi"
        items={whyChoose}
        cta="Get a free influencer shortlist"
        source="influencer-why-us"
      />

      <ServiceCards
        id="influencer-services"
        lead="What we offer"
        title="Our Influencer Marketing Services in Delhi"
        items={services}
        cta="Plan your campaign"
        source="influencer-services"
      />

      {/* 5. Types of Influencers */}
      <ServiceArticle
        lead="Creator Tiers"
        title="Nano, Micro, Macro, and Celebrity Creators: Which Fits Your Goal?"
        cta="Get a free influencer shortlist"
        source="influencer-types"
        body={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  1. Nano creators (about 1K to 10K followers)
                </h3>
                <p>
                  Small, tight-knit audiences and high trust. Good for product
                  seeding and local launches.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  2. Micro creators (about 10K to 100K)
                </h3>
                <p>
                  Strong engagement in a clear niche. Often the best balance of
                  cost and results.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  3. Macro creators (about 100K to 1M)
                </h3>
                <p>Wide reach for awareness pushes and big launches.</p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  4. Celebrity creators (1M and above)
                </h3>
                <p>
                  Maximum visibility for brand moments. Best paired with smaller
                  creators for conversion.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Follower ranges vary by platform and category. We recommend a mix
              based on your goal and budget.
            </p>
          </>
        }
      />

      <ServiceSteps
        id="influencer-process"
        heading="Our 6-Step Influencer Campaign Process"
        lead="How our influencer marketing agency in Delhi takes you from brief to ROI report in six steps."
        rest="Every stage is planned, measured, and shared with you."
        steps={workflow}
      />

      <ServicePair
        cta="Talk to Our Industry Team"
        source="influencer-benefits"
        panels={[
          {
            title:
              "Benefits of Working With an Influencer Marketing Agency in Delhi",
            intro:
              "A specialist team gets you authentic reach and measurable growth without the trial and error. Here is what you gain:",
            image:
              "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Smiling creator in glasses by the water",
            items: [
              "Build trust faster than traditional ads",
              "Reach tightly targeted audiences",
              "Create moments people talk about and share",
              "Send more visitors to your website and turn them into customers",
              "Strengthen brand credibility",
              "Stay in people’s minds for longer",
              "Measure ROI on every campaign",
              "Build presence across Instagram, YouTube, and more",
            ],
          },
          {
            title: "What Sets Us Apart",
            image:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
            imageAlt:
              "Two colleagues celebrating with a high five at their desk",
            items: [
              {
                title: "Measurable Results You Can Verify",
                desc: "For Rehnoor Jewels, a gold-plated jewellery brand, our Instagram creator collaborations in September generated 85.5K and 71.3K views across two Reels, exceeding 156,000 combined views, with over 1,100 likes and 26 shares. We track campaign metrics transparently so you can understand what your investment delivers.",
              },
              {
                title: "Expert Team of Strategists & Content Specialists",
                desc: "Our strategists and content specialists combine cultural insight, creative thinking, and analytics to deliver effective campaigns. The same team that develops your strategy also briefs creators, manages execution, and analyses performance, ensuring consistency from planning to reporting.",
              },
              {
                title: "Long-Term Creator Relationships",
                desc: "We build lasting partnerships with creators who understand our briefing process, approval workflows, and delivery standards. These established relationships support better reliability, faster turnaround, consistent content quality, and stronger collaboration over time.",
              },
              {
                title: "Flexible, Scalable Campaign Options",
                desc: "From startups testing their first influencer campaign to established brands managing multiple collaborations, our packages adapt to your budget and objectives. Start with a focused group of creators, measure performance, and scale your investment based on what works.",
              },
            ],
          },
        ]}
      />

      <ServiceArticle
        lead="Industries"
        title="Industries We Serve"
        cta="Talk to our influencer team"
        source="influencer-industries"
        body={
          <>
            <p>
              As an influencer marketing agency in Delhi, we run creator
              campaigns for brands in these categories:
            </p>
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
        heading="Ready to Boost Your Brand with Influencer Marketing in Delhi?"
        lead="Let’s build stories that move people. Let’s create influence that delivers impact. Let’s make your brand the talk of the city."
        rest="Get in touch with the leading influencer marketing agency in Delhi and launch your next viral campaign today."
        cta="Start your campaign"
        source="influencer-cta"
        photos={[
          {
            src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=600&q=80",
            alt: "3D Instagram icon on a dark background",
          },
          {
            src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
            alt: "Beauty products flat lay for a product seeding post",
          },
          {
            src: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?auto=format&fit=crop&w=900&q=80",
            alt: "Giant winking smiley sign",
          },
          {
            src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
            alt: "3D Facebook and Messenger icons",
          },
          {
            src: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?auto=format&fit=crop&w=600&q=80",
            alt: "Hand holding a phone showing an app",
          },
        ]}
      />

      <ServiceFaq
        title="Influencer marketing, answered"
        faqs={faqs}
        source="influencer-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
