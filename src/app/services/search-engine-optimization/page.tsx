import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/seo.jpg";
import introImg from "../../../../Assets/services/3.jpg";
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

const PATH = "/services/search-engine-optimization";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "SEO Services in Delhi | Best SEO Company | Bigwig Media Digital";
const description =
  "Expert SEO Services in Delhi, Technical SEO, Local SEO, On-Page & Link Building. Rank on Page 1 with Bigwig Media Digital. Free SEO Audit!";

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

const websiteLink = (label: string) => (
  <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
    {label}
  </Link>
);

const seoServices: ServiceItem[] = [
  {
    title: "Enterprise SEO",
    desc: "At Bigwig Media Digital, we offer innovative Enterprise SEO solutions that help large businesses dominate search results and stay ahead of the competition in their industry.",
  },
  {
    title: "International SEO",
    desc: (
      <>
        Expanding globally? We help optimize and {websiteLink("develop your website")} for multiple countries and
        languages so your brand can connect with audiences across borders. From hreflang implementation to
        region-specific keyword strategies, we ensure your global presence is strong, consistent, and search-friendly.
      </>
    ),
  },
  {
    title: "LLM SEO",
    desc: "Our LLM SEO specialists optimise your content so it’s easy for large language models to understand, reference, and deliver in search answers. This boosts your authority and significantly improves your online visibility.",
  },
  {
    title: "AI SEO",
    desc: "We use AI-driven insights to refine keyword targeting, enhance content strategies, and elevate user experience, keeping your website competitive as search trends evolve.",
  },
  {
    title: "Local SEO",
    desc: "We optimise your Google Business Profile and create location-focused content that helps your business attract nearby customers, build trust, and stay visible in key areas.",
  },
  {
    title: "E-commerce SEO",
    desc: "Our team identifies the right keywords and optimises your product pages so customers can easily discover your products when they search online.",
  },
  {
    title: "Technical SEO",
    desc: "We improve the technical foundation of your website for better crawlability, indexing, and performance. From mobile optimisation to faster loading times and improved search engine readability, we ensure your site runs seamlessly.",
  },
  {
    title: "JavaScript SEO",
    desc: "For JavaScript-heavy websites, we ensure proper rendering and indexing so search engines can understand your content. This helps your site gain better visibility and rank higher on SERPs.",
  },
  {
    title: "ORM (Online Reputation Management)",
    desc: "We help brands and professionals build, manage, and safeguard their online reputation, ensuring that their digital presence reflects trust and authority.",
  },
  {
    title: "Off-Page SEO",
    desc: "Since backlinks play a major role in rankings, we audit and strengthen your backlink profile to support your overall SEO strategy and improve your website’s authority.",
  },
];

const seoBenefits: ServiceItem[] = [
  {
    title: "Improve Organic Rankings",
    desc: "Show up at the top of Google search results and make it easier for customers in Delhi and beyond to discover your business.",
  },
  {
    title: "Stay Visible in AI Search",
    desc: "As AI-driven search becomes the new normal, SEO ensures your business appears in answer engines and AI search results, keeping you ahead of your competitors.",
  },
  {
    title: "Attract Targeted Local Traffic",
    desc: "Local SEO helps your business reach people actively searching for services in Delhi NCR, bringing in highly qualified and relevant leads.",
  },
  {
    title: "Cost-Effective Marketing",
    desc: "Reach your ideal audience without overspending on ads. SEO provides long-lasting results and delivers better value over time.",
  },
  {
    title: "Higher Conversions & ROI",
    desc: "By targeting the right keywords and understanding user intent, SEO turns your website visitors into actual leads, boosting conversions and overall ROI.",
  },
  {
    title: "Long-Term Business Growth",
    desc: "With consistent traffic, improved visibility, and better-quality leads, SEO helps your business grow steadily month after month.",
  },
];

const seoDifference: ServiceItem[] = [
  {
    title: "Tailored for You, Not Templates",
    desc: "Every business is unique, and your SEO strategy should be too. We create custom plans that match your goals, industry, and audience.",
  },
  {
    title: "SEO That Builds Brands",
    desc: "We don’t chase rankings for the sake of it. We help you build long-term authority that strengthens your brand.",
  },
  {
    title: "Local + Global SEO Expertise",
    desc: "Whether you want to dominate your city or expand internationally, our team knows how to scale your visibility effectively.",
  },
  {
    title: "Transparent Growth Tracking",
    desc: "Expect clear, easy-to-understand reports with zero jargon. You’ll always know exactly where your growth is coming from.",
  },
  {
    title: "Ahead of Every Algorithm Update",
    desc: "We stay on top of industry trends and updates so your SEO strategy remains future-proof.",
  },
  {
    title: "More Than Just Visibility: Real Impact",
    desc: "We focus on authority, trust, and conversions, turning your online presence into real business growth.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What can Bigwig Media Digital do for my business with SEO in Delhi?",
    a: "The SEO services from Bigwig Media Digital help you improve visibility for the right search terms. This allows you to attract more qualified traffic and generate leads that truly matter. We have earned a strong reputation for delivering transformational growth for our clients, and we can do the same for you.",
  },
  {
    q: "How long before we start seeing results?",
    a: "SEO is a long-term strategy. Still, it usually takes 3 to 6 months to begin seeing measurable progress. Bigwig Media Digital focuses on building a strong foundational strategy to ensure your organic growth aligns with your business and revenue goals.",
  },
  {
    q: "Do you offer local SEO for businesses targeting Delhi specifically?",
    a: "Yes! Bigwig Media Digital provides local SEO services for businesses that want to reach customers in Delhi. Our services include optimising your Google Business Profile, improving local citations, and creating location-specific content to boost your visibility in “near me” searches and strengthen your presence in local markets.",
  },
  {
    q: "What kind of reporting can we expect?",
    a: "We believe transparency is essential. You’ll receive detailed monthly reports with keyword rankings, traffic insights, and complete campaign performance breakdowns. Our team is always available to walk you through the results and discuss strategies for the next phase.",
  },
  {
    q: "Why should we choose Bigwig Media Digital over another SEO agency in Delhi?",
    a: "Bigwig Media Digital is not just another vendor. We aim to be your trusted partner in driving real business growth, something many of our clients can confirm. With years of experience and proven expertise, we focus on delivering meaningful outcomes, not just rankings.",
  },
  {
    q: "How to improve my website rankings in Delhi?",
    a: "Improving rankings in Delhi requires targeted keywords, strong local SEO strategies, quality backlinks, fast-loading pages, and engaging content that resonates with Delhi audiences while meeting Google’s quality standards.",
  },
  {
    q: "Can SEO help local Delhi businesses compete with national brands?",
    a: "Yes. Local SEO helps build strong visibility for local intent searches, enabling Delhi-based businesses to appear for region-specific keywords, attract nearby customers, and effectively compete with much larger national brands.",
  },
  {
    q: "What are the top SEO trends businesses in Delhi should focus on?",
    a: "Delhi businesses should prioritise AI-ready SEO, voice search optimisation, local listings, high-quality content, mobile-first experiences, and strong E-E-A-T signals to build credibility and achieve long-term growth.",
  },
  {
    q: "Does Bigwig Media Digital offer AI-driven or LLM-optimised SEO solutions?",
    a: "Yes, Bigwig Media Digital delivers AI-driven and LLM-optimised SEO strategies that improve brand visibility across platforms such as ChatGPT, Gemini, and Perplexity by aligning your website content with evolving search and language model algorithms.",
  },
  {
    q: "How does Bigwig Media Digital’s SEO strategy differ from other agencies in Delhi?",
    a: "Bigwig Media Digital combines data-driven insights, AI tools, and proven SEO frameworks. Our strategies are built around measurable ROI, ethical SEO practices, and a deep understanding of Delhi’s competitive digital ecosystem.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SeoPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Search engine optimization"
        title="SEO Services in Delhi NCR"
        intro={
          <p>
            <span className="text-white">Your business deserves real, meaningful growth.</span> We help businesses
            across Delhi show up at the top of Google search, again and again. And when your visibility increases, so
            do your clicks, your leads, and ultimately, your sales.
          </p>
        }
        cta="Get a free SEO audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your SEO services and would like to discuss more."
        formSource="seo-hero"
        formServices={["SEO"]}
      />

      <ServiceIntro
        lead="SEO company in Delhi"
        title="SEO Services Company in Delhi Focused on Visibility, Traffic & Conversions"
        image={introImg}
        imageAlt="Best SEO Company in India"
        body={
          <>
            <p>
              SEO plays a crucial role in strengthening your online presence and boosting your visibility on the
              internet. And choosing the right SEO services in Delhi can be the difference between a business that
              struggles and a business that grows year after year. That’s exactly where Bigwig Media Digital comes in.
              We dig deep into the world of search engine optimisation and use it to fuel your business growth.
            </p>
            <p>
              As a dedicated SEO services provider in Delhi, our goal is simple: to create strategies that are tailored
              to the unique needs of every client. Our team brings together technical expertise and creative thinking to
              help you {websiteLink("develop a website")} and rise to the top of search engine results. With years of
              experience behind us, we focus on driving organic traffic, increasing visibility, and turning clicks into
              loyal customers.
            </p>
            <p>
              What truly sets us apart is our approach. We believe in transparency and results you can measure. We use
              advanced analytics and share clear, actionable reports and roadmaps, so you always know what’s working.
              From keyword research and content optimisation to high-quality backlink building, we use a holistic SEO
              strategy that supports long-term success for your brand, whether you’re just starting out or already
              established.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="seo-services"
        lead="What we offer"
        title="Expert SEO Services in Delhi to Maximise Your Online Success"
        intro="Bigwig Media Digital has built a strong reputation for delivering transformational growth across industries. Our SEO services evolve with changing trends and best practices, ensuring long-term growth and competitive advantage for our clients."
        items={seoServices}
        cta="Boost your rankings today"
        source="seo-services"
      />

      <ServiceCards
        lead="Why invest in SEO"
        title="Why Your Business Should Invest in SEO Services in Delhi"
        intro="SEO isn’t just about ranking higher on Google. It’s about boosting visibility, connecting with the right audience, and building long-term growth. Here’s why investing in SEO services in Delhi is essential for every modern business:"
        items={seoBenefits}
        cta="Start growing with SEO"
        source="seo-benefits"
      />

      <ServiceCarousel
        lead="Why Bigwig"
        title="The Best SEO Services in Delhi, and Beyond!"
        intro="Choosing the right digital growth partner isn’t just about getting higher rankings. It’s about finding a team that values trust, transparency, and real business impact. At Bigwig Media Digital, we elevate SEO services in Delhi with strategies designed for meaningful, long-term growth."
        subtitle="What Makes Us Truly Different as an SEO Services Provider in Delhi?"
        items={seoDifference}
        cta="Explore SEO solutions"
        source="seo-difference"
      />

      <ServiceArticle
        lead="Choosing a consultant"
        title="Choosing the Right SEO Consultant for Your Business in Delhi"
        cta="Connect with an SEO consultant"
        source="seo-consultant"
        body={
          <>
            <p>
              In today’s digital-first world, where online presence defines business success, partnering with the best
              SEO services in Delhi has become essential. A skilled SEO consultant in Delhi can significantly enhance
              your website’s visibility, outrank competitors, attract quality traffic, and ultimately boost conversions
              and sales. Whether you’re a small business in Delhi or anywhere in the NCR, hiring a professional who
              offers expert SEO services can bring remarkable benefits to your organisation.
            </p>
            <p>
              A reliable SEO consultant brings deep market understanding and strategic insight. They analyse your
              audience, your competitors, and your industry landscape to ensure your business ranks high for the most
              relevant search terms. Their work goes far beyond basic optimisations, from keyword research and on-page
              optimisation to link building and local SEO strategies. A dedicated SEO consultant equips your business
              with the right tools, techniques, and resources to reach your target audience effectively.
            </p>
            <p>
              With the guidance of the right SEO consultant, your business in Delhi can gain sustainable visibility,
              stronger brand authority, and steady growth in both traffic and conversions.
            </p>
          </>
        }
      />

      <ServiceFaq title="SEO services in Delhi, answered" faqs={faqs} source="seo-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
