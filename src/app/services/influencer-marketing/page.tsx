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
const title = "Influencer Marketing Agency in Delhi | Bigwig Media Digital";
const description =
  "Top Influencer Marketing Agency in Delhi. Nano, micro & macro influencer campaigns on Instagram & YouTube. Get a Free Campaign Plan Today!";

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

const promises = [
  "Authentic content",
  "Seamless partnership management",
  "Transparent performance tracking",
  "Campaigns built to trend and convert",
];

const whyChoose: ServiceItem[] = [
  {
    title: "Deep Understanding of Delhi’s Digital Culture",
    desc: "Every city has its own audience psychology. Delhi is driven by lifestyle, aspiration, energy, and relatability, and our localized insights make campaigns feel natural, not forced.",
    image: unsplash("1543269865-cbf427effbad", 800),
    imageAlt: "Friends laughing together around a café table",
  },
  {
    title: "Access to Verified, High-Impact Influencers",
    desc: "From nano and micro creators to celebrities, our network spans fashion, beauty, food, travel, fitness, finance, tech, parenting, and more, matched to your brand’s personality and goals.",
    image: unsplash("1529139574466-a303027c1d8b", 800),
    imageAlt: "Fashion creator posing in bold sunglasses",
  },
  {
    title: "Data-Led Influencer Shortlisting",
    desc: "We evaluate audience relevance, engagement quality, authenticity score, content style & tone, and historical performance, so you only work with influencers who deliver real outcomes.",
    image: unsplash("1551288049-bebda4e38f71", 800),
    imageAlt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Transparent, Authentic Partnerships",
    desc: "No inflated numbers. No fake followers. No unclear deliverables. We guarantee authentic content, full transparency, and proper disclosure guidelines.",
    image: unsplash("1600096194534-95cf5ece04cf", 800),
    imageAlt: "Phone held up beneath a painted like-heart",
  },
  {
    title: "Full Campaign Management",
    desc: "Strategy → influencer selection → negotiation → briefing → content approvals → posting schedules → reporting. You focus on business. We handle the influence.",
    image: unsplash("1521737604893-d14cc237f11d", 800),
    imageAlt: "Campaign team working together at a long table",
  },
  {
    title: "Creative Strategies That Drive Engagement",
    desc: "Scroll-stopping content ideas tailored for Reels, YouTube Shorts, long-form videos, lifestyle posts, and trending formats.",
    image: unsplash("1607968565043-36af90dde238", 800),
    imageAlt: "Phone on a tripod filming a creator video",
  },
];

const services: ServiceItem[] = [
  {
    title: "Influencer Discovery & Shortlisting",
    desc: "We match your brand with influencers who resonate with your audience and category.",
  },
  {
    title: "Campaign Strategy & Creative Direction",
    desc: "Every campaign includes a clear objective, narrative, content plan, winning hooks, and posting schedule.",
  },
  {
    title: "Content Production & Collaboration",
    desc: "We coordinate scripts, concepts, visual themes, and creative alignment so your brand looks premium and authentic.",
  },
  {
    title: "Brand & Influencer Alignment",
    desc: "We help brands find creators who genuinely value and reflect the brand’s message, not just those with followers.",
  },
  {
    title: "Campaign Execution & Optimization",
    desc: "We track real-time engagement and optimize activities for the best ROI.",
  },
  {
    title: "Analytics, Reporting & ROI Tracking",
    desc: "Impressions, engagement, video completion, conversions, traffic, click-throughs, sentiment analysis, and ROI insights.",
  },
];

const workflow: ServiceStep[] = [
  {
    title: "Understanding your brand & audience",
    desc: "We start with a deep dive into your goals, product positioning, competitive landscape, and target persona.",
    image: unsplash("1542744173-8e7e53415bb0"),
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Identifying ideal influencers",
    desc: "Our analytics tools ensure we find creators who genuinely influence your audience.",
    image: unsplash("1611162616305-c69b3fa7fbe0"),
    imageAlt: "Glossy 3D Instagram icon on pink",
  },
  {
    title: "Planning the content story",
    desc: "We map out the storytelling arc: authentic, engaging, and suited to each platform.",
    image: unsplash("1557804506-669a67965ba0"),
    imageAlt: "Team planning a campaign at a whiteboard",
  },
  {
    title: "Collaboration & content creation",
    desc: "Influencers create content that your audience trusts and engages with.",
    image: unsplash("1598550476439-6847785fcea6"),
    imageAlt: "Creator studio with camera, monitors and lighting",
  },
  {
    title: "Campaign management & optimization",
    desc: "We monitor performance and tweak campaign elements to ensure maximum impact.",
    image: unsplash("1556761175-b413da4baf72"),
    imageAlt: "Team reviewing a campaign on a desktop screen",
  },
  {
    title: "Reporting & insights",
    desc: "Detailed reports that clearly show ROI and audience reaction.",
    image: unsplash("1543286386-713bdd548da4"),
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
    q: "What is the best influencer marketing agency in Delhi?",
    a: "The best influencer marketing agency in Delhi is one that combines deep creator networks, data-driven campaign planning, and strong storytelling. As a leading influencer marketing company in Delhi, we connect brands with verified creators who understand the pulse of Delhi audiences and deliver measurable engagement, reach, and ROI.",
  },
  {
    q: "How does Bigwig Media Digital support influencers?",
    a: "A professional influencer marketing agency in Delhi supports influencers by offering creative guidance, timely communication, transparent collaboration, and fair compensation. We ensure influencers receive clear briefs, brand insights, and access to resources that help them create authentic, high-performing content.",
  },
  {
    q: "How do you measure the success of influencer campaigns?",
    a: "We track success using metrics like reach, impressions, engagement rate, content saves/shares, cost per engagement, and conversions. As a data-first influencer marketing company in Delhi, we provide full performance dashboards so brands can see exactly how influencer marketing in Delhi drives visibility and revenue.",
  },
  {
    q: "Can influencers outside Delhi collaborate with your agency?",
    a: "Yes. While we specialize in influencer marketing services in Delhi, we work with creators across India and international markets. Depending on your campaign goals, we onboard influencers from relevant regions, languages, and niches to ensure accurate audience targeting.",
  },
  {
    q: "Which industries do you work with for influencer marketing?",
    a: "As a full-scale influencer marketing company in Delhi, we work with brands across fashion, beauty, food, tech, fitness, real estate, education, travel, finance, lifestyle, and more. Our diverse influencer network helps us match creators to industries where they perform best.",
  },
  {
    q: "How do you ensure brand alignment when selecting influencers?",
    a: "We evaluate influencers based on niche relevance, audience demographics, engagement authenticity, past collaborations, content tone, and brand fit. This ensures influencer marketing in Delhi maintains authenticity and resonates with your target audience.",
  },
  {
    q: "What steps do you take to maintain engagement and authenticity in influencer partnerships?",
    a: "We encourage creators to maintain their natural storytelling style, use honest messaging, and integrate your brand organically. Our influencer marketing services in Delhi also include real-time content monitoring to ensure quality, compliance, and genuine audience interaction.",
  },
  {
    q: "Can you provide examples of creative campaign strategies implemented for clients?",
    a: "Yes. As a top influencer marketing agency in Delhi, we create strategies like reel challenges, product seeding, storytelling videos, creator collaborations, live sessions, unboxing themes, testimonial storytelling, and trend-based campaign formats. Each strategy is built around your brand goals.",
  },
  {
    q: "How do you negotiate on behalf of clients and manage influencer compensation?",
    a: "Our team handles influencer shortlisting, negotiations, contract drafting, payment processing, and deliverable tracking. This ensures brands get the best value while influencers receive fair compensation, making the entire influencer marketing process smooth and transparent.",
  },
  {
    q: "What systems are used to monitor and control influencer performance during campaigns?",
    a: "We use tools for real-time performance tracking, audience analytics, engagement verification, fraud detection, and reporting. This ensures your influencer marketing in Delhi remains optimized, authentic, and fully measurable throughout the campaign.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function InfluencerMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Influencer marketing"
        title="Influencer Marketing Agency in Delhi"
        intro={
          <p>
            <span className="text-white">Reach audiences who trust real voices more than ads.</span> We connect your
            brand with creators who inspire conversations, drive engagement, and deliver measurable business results,
            whether you’re building awareness, driving sales, or launching a new product.
          </p>
        }
        cta="Get a free campaign plan"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Influencer Marketing services and would like to discuss more."
        formSource="influencer-hero"
        formServices={["Influencer Marketing"]}
      />

      <ServiceIntro
        lead="Influencer marketing company in Delhi"
        title="Leading Influencer Marketing Company in Delhi for Real Influence & Real Results"
        image={introImg}
        imageAlt="Influencer Marketing Services"
        body={
          <>
            <p>
              Delhi isn’t just a city; it’s a culture, a vibe, a marketplace of opinions. From trends born in Khan
              Market to viral moments created in Connaught Place, the capital has its own language of influence. We
              partner with creators who truly understand the Delhi audience, combining creativity, analytics, and
              influencer relationships to make your brand part of Delhi’s daily conversation.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {p}
                </li>
              ))}
            </ul>
            <p>That’s why brands trust us as their preferred influencer marketing company in Delhi.</p>
          </>
        }
      />

      <ServiceCarousel
        id="influencer-why-us"
        lead="Why Bigwig"
        title="Why Choose Our Influencer Marketing Agency in Delhi?"
        items={whyChoose}
        cta="Get a free campaign plan"
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

      <ServiceSteps
        id="influencer-process"
        heading="How Our Influencer Marketing in Delhi Works"
        lead="Six steps from brand brief to ROI report."
        rest="Every stage is planned, measured, and shared with you."
        steps={workflow}
      />

      <ServicePair
        cta="Get started today"
        source="influencer-benefits"
        panels={[
          {
            title: "Benefits of Hiring an Influencer Marketing Agency in Delhi",
            intro:
              "Authentic visibility, powerful storytelling, and measurable growth. Here’s what you gain when experts handle your campaigns:",
            image: unsplash("1588516903720-8ceb67f9ef84"),
            imageAlt: "Smiling creator in glasses by the water",
            items: [
              "Build trust faster than traditional ads",
              "Reach hyper-targeted audiences",
              "Create viral moments that spark conversation",
              "Boost website traffic & conversions",
              "Strengthen brand credibility",
              "Increase long-term brand recall",
              "Achieve measurable ROI from every campaign",
              "Enhance online presence across Instagram, YouTube & more",
            ],
          },
          {
            title: "Why We’re a Trusted Influencer Marketing Company in Delhi",
            image: unsplash("1600880292203-757bb62b4baf"),
            imageAlt: "Two colleagues celebrating with a high five at their desk",
            items: [
              {
                title: "Proven success across multiple campaigns",
                desc: "Our influencer partnerships have delivered millions of impressions, high engagement, and real sales.",
              },
              {
                title: "Expert team of strategists & content specialists",
                desc: "We combine cultural insights, creativity, and analytics to craft campaigns that stand out.",
              },
              {
                title: "Strong relationships with influencers",
                desc: "We work with influencers long-term, ensuring reliability, consistency, and better performance.",
              },
              {
                title: "Flexible, scalable campaign options",
                desc: "From small-budget startups to large enterprises, our packages scale with your goals.",
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
            <p>Our influencer marketing services support a wide range of industries:</p>
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
          { src: unsplash("1611262588024-d12430b98920", 600), alt: "3D Instagram icon on a dark background" },
          { src: unsplash("1596462502278-27bfdc403348", 800), alt: "Beauty products flat lay for a product seeding post" },
          { src: unsplash("1567446537708-ac4aa75c9c28", 900), alt: "Giant winking smiley sign" },
          { src: unsplash("1611162618071-b39a2ec055fb", 800), alt: "3D Facebook and Messenger icons" },
          { src: unsplash("1609921205586-7e8a57516512", 600), alt: "Hand holding a phone showing an app" },
        ]}
      />

      <ServiceFaq title="Influencer marketing, answered" faqs={faqs} source="influencer-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
