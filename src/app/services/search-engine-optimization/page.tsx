import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/seo.jpg";
import introImg from "../../../../Assets/services/SEO-service.png";
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
const title = "Best SEO Services in Delhi for Business Growth";
const description =
  "Looking for SEO services in Delhi? Improve your website’s search visibility, reach relevant customers and attract more organic traffic with an SEO strategy tailored to your business.";

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

const websiteLink = (label: string) => (
  <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
    {label}
  </Link>
);

const contentLink = (label: string) => (
  <Link href="/services/content-marketing" className={inlineLink}>
    {label}
  </Link>
);

const ormLink = (label: string) => (
  <Link href="/services/online-reputation-management" className={inlineLink}>
    {label}
  </Link>
);

const seoServices: ServiceItem[] = [
  {
    title: "Enterprise SEO",
    desc: "We help large and complex websites improve their search performance through technical audits, site architecture improvements, content optimisation, and scalable SEO strategies. Our approach supports websites with multiple categories, services, or business locations.",
  },
  {
    title: "International SEO",
    desc: "Reach customers in different countries with an international SEO strategy. We help review country-specific keyword opportunities, language targeting, website structure, and hreflang implementation where appropriate.",
  },
  {
    title: "LLM SEO",
    desc: "Make your website's information clear, useful, and easy to understand. Our LLM SEO approach focuses on helpful content, clear entity information, relevant internal links, and trustworthy information that may support discovery across AI-powered search experiences. Visibility in AI-generated answers cannot be guaranteed.",
  },
  {
    title: "AI SEO",
    desc: "Search behaviour continues to evolve as AI-powered search features develop. We help businesses strengthen their SEO foundations through useful content, technical accessibility, clear page structure, and search-intent analysis to support visibility across changing search experiences.",
  },
  {
    title: "Local SEO",
    desc: "Help nearby customers discover your business. Our local SEO services can include Google Business Profile optimisation, local keyword research, location pages, business information consistency, and review management guidance where appropriate.",
  },
  {
    title: "Ecommerce SEO",
    desc: "Help customers discover your products through organic search. We optimise product and category pages, review product information, improve internal linking, and identify technical issues that may affect crawling, indexing, and product discovery.",
  },
  {
    title: "Technical SEO",
    desc: "We review the technical elements that affect how search engines crawl, render, and index your website. This can include site architecture, XML sitemaps, canonical tags, redirect issues, mobile usability, page performance, and structured data where relevant.",
  },
  {
    title: "JavaScript SEO",
    desc: "Websites built with JavaScript need to present important content in a way search engines can process. We review rendering, internal links, metadata, and indexability to identify issues that may prevent important pages from appearing correctly in search results.",
  },
  {
    title: "Online Reputation Management (ORM)",
    desc: (
      <>
        Your online reputation can influence how customers view your business. Our {ormLink("ORM services")} focus on
        monitoring online brand presence, supporting review management, and improving the consistency and quality of
        your business information across relevant platforms.
      </>
    ),
  },
  {
    title: "Off-Page SEO",
    desc: "Build website authority through relevant, quality-focused off-page SEO activities. Depending on your goals, this can include backlink profile reviews, digital PR opportunities, useful content promotion, and outreach to relevant websites. We avoid promising rankings based on a particular number of backlinks.",
  },
];

const seoBenefits: ServiceItem[] = [
  {
    title: "Improve Organic Rankings",
    desc: "Improve your website's relevance, content, and technical health so search engines can better understand your pages and match them with relevant searches.",
  },
  {
    title: "Build Visibility Across Search Experiences",
    desc: "Strong SEO foundations can support visibility in traditional search results and eligible AI-powered search experiences. Helpful content, accessible pages, and reliable information remain important.",
  },
  {
    title: "Attract Targeted Local Traffic",
    desc: "Reach potential customers searching for services in Delhi NCR through relevant local content, accurate business information, and an effective local SEO strategy.",
  },
  {
    title: "Support Cost-Effective Marketing",
    desc: "SEO can continue attracting relevant visitors after individual improvements are implemented. Results require ongoing work, and the time and investment depend on your website, competition, and objectives.",
  },
  {
    title: "Generate More Qualified Leads",
    desc: "Target relevant search intent and make your website easier to use. Clear service information, useful landing pages, and strong calls to action can help turn relevant visitors into enquiries.",
  },
  {
    title: "Support Long-Term Business Growth",
    desc: "Regular monitoring, content improvements, and technical maintenance help your website respond to changing customer needs and search behaviour over time.",
  },
];

const seoDifference: ServiceItem[] = [
  {
    title: "Tailored Strategies",
    desc: "We develop recommendations based on your website's current performance, business goals, target audience, and competitive landscape instead of using the same checklist for every business.",
  },
  {
    title: "A Focus on Sustainable SEO",
    desc: "We prioritise useful content, sound technical practices, and relevant authority-building activities to support long-term search visibility.",
  },
  {
    title: "Local and International Expertise",
    desc: "Whether you want to reach customers in Delhi NCR or target audiences in multiple markets, we align keyword research and website optimisation with your intended audience.",
  },
  {
    title: "Clear Performance Reporting",
    desc: "Understand what has been completed, what needs attention, and how your website is performing. Reporting can include agreed SEO activities, organic traffic trends, search impressions, clicks, keyword visibility, and conversions where tracking is available.",
  },
  {
    title: "Adaptation to Search Changes",
    desc: "Search engines and user behaviour change over time. We review performance and adjust recommendations when new opportunities, technical issues, or relevant search developments arise.",
  },
  {
    title: "Business-Focused Outcomes",
    desc: "SEO is not only about rankings. We also consider relevant traffic, enquiries, engagement, and conversions to help connect SEO activities with your business objectives.",
  },
];

const consultantChecklist: { title: string; desc: string }[] = [
  {
    title: "Understand their process",
    desc: "Ask how they conduct keyword research, technical audits, content optimisation, and performance reviews.",
  },
  {
    title: "Look for relevant experience",
    desc: "Ask whether they have worked with businesses, websites, or industries similar to yours.",
  },
  {
    title: "Review their reporting",
    desc: "Make sure they explain important metrics such as organic traffic, search impressions, clicks, enquiries, and conversions where tracking is available.",
  },
  {
    title: "Ask about technical SEO",
    desc: "Your consultant should be able to identify crawling, indexing, website structure, and page performance issues.",
  },
  {
    title: "Understand the strategy",
    desc: "Recommendations should reflect your audience and competition rather than simply repeat a standard list of SEO tasks.",
  },
  {
    title: "Avoid guaranteed-ranking promises",
    desc: "No agency can guarantee a specific Google position or a fixed timeline for results.",
  },
  {
    title: "Check communication and responsibilities",
    desc: "Confirm what the agency will deliver, what your team must provide, and how progress will be reviewed.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What can Bigwig Media Digital do for my business with SEO in Delhi?",
    a: "Bigwig Media Digital can help your business improve its organic search visibility through keyword research, on-page optimisation, technical SEO, content improvements, and relevant off-page activities. The work depends on your website, competition, and business goals. Our aim is to attract relevant visitors and support enquiries, leads, or sales over time.",
  },
  {
    q: "How long before we start seeing SEO results?",
    a: "SEO results vary according to your website's current condition, competition, industry, and the work required. Some improvements may be noticed earlier, while meaningful changes in organic traffic and rankings can take several months. SEO is an ongoing process, and no fixed timeline or ranking can be guaranteed.",
  },
  {
    q: "Do you offer local SEO for businesses targeting Delhi specifically?",
    a: "Yes, local SEO can help businesses reach customers searching for relevant services in Delhi and Delhi NCR. Depending on your needs, the work may include Google Business Profile optimisation, local keyword research, location-page improvements, accurate business information, and review management guidance.",
  },
  {
    q: "What kind of SEO reporting can we expect?",
    a: "Reporting should explain the work completed, website performance, and the next priorities. Depending on the agreed scope and available tracking, reports may cover organic clicks and impressions, relevant keyword visibility, landing-page performance, technical issues, and conversions. We recommend measuring business outcomes alongside rankings.",
  },
  {
    q: "Why should we choose Bigwig Media Digital over another SEO agency in Delhi?",
    a: "Choose an SEO agency based on its process, communication, understanding of your business, reporting, and ability to explain its recommendations. Bigwig Media Digital focuses on tailored strategies, technical and content improvements, and performance tracking. We encourage businesses to discuss their goals and expectations before deciding on an SEO partner.",
  },
  {
    q: "How can I improve my website rankings in Delhi?",
    a: "Start with relevant keyword research, useful service-page content, a technically accessible website, clear internal links, and accurate local business information where applicable. Review your competitors and fix issues that affect crawling, indexing, or user experience. Track performance through tools such as Google Search Console and prioritise improvements based on your business goals.",
  },
  {
    q: "Can SEO help local Delhi businesses compete with national brands?",
    a: "Yes. Local businesses can improve their chances of reaching relevant customers by focusing on specific services, local search intent, accurate business information, useful location-focused content, and strong customer trust signals. Results depend on the market, competition, and quality of execution.",
  },
  {
    q: "What SEO trends should businesses in Delhi focus on?",
    a: "Businesses should focus on helpful content, search intent, technical SEO, local visibility, website usability, and performance measurement. AI-powered search experiences are also changing how people discover information. However, strong SEO fundamentals remain important, and businesses should avoid tactics that promise guaranteed visibility in AI answers.",
  },
  {
    q: "Does Bigwig Media Digital offer AI-driven or LLM-optimised SEO solutions?",
    a: "Our SEO approach can address the changing search landscape through useful, well-structured content, technical accessibility, clear business information, and relevant optimisation. These practices can support discovery across different search experiences, including AI-powered features where a page is eligible. No agency can guarantee that a website will be cited or recommended by a particular AI tool.",
  },
  {
    q: "How does Bigwig Media Digital’s SEO strategy differ from other agencies in Delhi?",
    a: "Our approach begins with your website, target audience, competition, and business objectives. We identify relevant opportunities, prioritise improvements, and monitor performance so the strategy can be refined over time. Before starting, we recommend discussing the scope of work, reporting, responsibilities, and expected outcomes.",
  },
  {
    q: "How much do SEO services cost in Delhi?",
    a: "The cost of SEO services in Delhi depends on your website size, industry competition, target locations, technical requirements, content needs, and business goals. Local SEO for a small business may require a different level of work than SEO for a large ecommerce website or a company targeting multiple markets. Ask for a clear scope of work, deliverables, reporting details, and pricing before choosing a package. Contact our team to discuss your requirements.",
  },
  {
    q: "How do I choose a good SEO company in Delhi?",
    a: "Look for an SEO company that understands your business, explains its process, provides clear reporting, and recommends realistic actions. Ask about technical audits, keyword research, content optimisation, link-building practices, and how success will be measured. Avoid agencies that guarantee the first position on Google or promise results without reviewing your website.",
  },
  {
    q: "Which is better for my business: SEO or PPC?",
    a: "SEO helps improve organic visibility and can support long-term traffic growth, while PPC uses paid advertising to reach potential customers through paid placements. PPC can provide quicker exposure while a campaign is running, whereas SEO generally requires time and ongoing effort. The right choice depends on your budget, goals, competition, and timeline. Some businesses benefit from using both.",
  },
  {
    q: "What are the four main types of SEO?",
    a: "Four commonly discussed types are on-page SEO, off-page SEO, technical SEO, and local SEO. On-page SEO improves page content and elements, off-page SEO focuses on relevant external signals such as quality backlinks, technical SEO addresses crawling and indexing, and local SEO helps businesses reach customers in specific areas. The right mix depends on your website and business goals.",
  },
  {
    q: "How can I optimise my website for Google AI Overviews and AI Search?",
    a: "Start with standard SEO best practices: publish useful and original information, ensure important pages can be crawled and indexed, organise content clearly, maintain a good user experience, and keep business information accurate. Add relevant examples and expert insights where possible. There is no guaranteed method to appear in AI Overviews or AI-generated answers.",
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
          <div className="space-y-4">
            <p>
              <span className="text-white">Your business needs more than website traffic.</span> It needs the right
              people to find your products and services online.
            </p>
            <p>
              Bigwig Media Digital provides SEO services in Delhi NCR to help businesses improve their search
              visibility, attract relevant visitors, and turn website traffic into meaningful enquiries. Our approach
              combines keyword research, useful content, technical improvements, and performance tracking to support
              long-term organic growth.
            </p>
            <p>
              Whether you run a local business, an ecommerce store, or a growing company, we build SEO strategies
              around your goals, audience, and competition.
            </p>
          </div>
        }
        cta="Get a free SEO audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your SEO services and would like to discuss more."
        formSource="seo-hero"
        formServices={["SEO"]}
      />

      <ServiceIntro
        lead="SEO company in Delhi"
        title="SEO Services Company in Delhi Focused on Visibility, Traffic and Conversions"
        image={introImg}
        imageAlt="SEO Solutions for Growing Businesses"
        body={
          <>
            <p>
              When people search online for a product or service, your website needs to be easy to find and useful to
              visit. Professional SEO services help improve your website&apos;s visibility in relevant search results
              and make it easier for potential customers to discover your business.
            </p>
            <p>
              At Bigwig Media Digital, we create SEO strategies based on your business goals, target audience,
              industry, and competitors. Our work can include keyword research, on-page optimisation, technical SEO,{" "}
              {contentLink("content improvements")}, internal linking, and relevant link-building activities.
            </p>
            <p>
              We also focus on the user experience. A {websiteLink("website")} should load properly, work across
              devices, provide clear information, and make it easy for visitors to take the next step.
            </p>
            <p>
              Our process starts with understanding your website and identifying opportunities for improvement. We then
              prioritise actions, implement agreed recommendations, and track progress using relevant performance data.
            </p>
            <p>
              If you are looking for an SEO company in Delhi that focuses on practical improvements and clear
              communication, our team can help you understand where your website stands and what it needs next.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="seo-services"
        lead="What we offer"
        title="SEO Services in Delhi to Support Sustainable Business Growth"
        intro="Every website has different SEO needs. Our SEO services focus on identifying the issues that affect your website, improving its search visibility, and helping the right audience find your business. We recommend activities according to your website, competition, and growth objectives."
        items={seoServices}
        cta="Boost your rankings today"
        source="seo-services"
      />

      <ServiceCards
        lead="Why invest in SEO"
        title="Why Invest in SEO Services in Delhi?"
        intro="SEO helps potential customers discover your business when they search for relevant products, services, and solutions. A well-planned SEO strategy can support visibility, qualified traffic, and long-term business growth."
        items={seoBenefits}
        cta="Start growing with SEO"
        source="seo-benefits"
      />

      <ServiceCarousel
        lead="Why Bigwig"
        title="SEO Services in Delhi Built Around Your Business Goals"
        intro="Choosing an SEO partner means finding a team that understands your goals, explains its work clearly, and focuses on relevant business outcomes. At Bigwig Media Digital, we tailor our SEO approach to your website, audience, competition, and available resources."
        subtitle="What Makes Our SEO Approach Different?"
        items={seoDifference}
        cta="Explore SEO solutions"
        source="seo-difference"
      />

      <ServiceArticle
        lead="Choosing a consultant"
        title="Choosing the Right SEO Consultant for Your Business in Delhi"
        cta="Connect with an SEO Consultant"
        source="seo-consultant"
        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
          alt: "SEO consultant discussing strategy with a business team",
        }}
        body={
          <>
            <p>
              Choosing the right SEO consultant in Delhi can help you make better decisions about your website&apos;s
              search performance. The right partner should understand your business, explain the work clearly, and
              recommend actions that match your goals and budget.
            </p>
            <p>Before selecting an SEO agency or consultant, review the following points:</p>
            <ul className="space-y-3">
              {consultantChecklist.map((c) => (
                <li key={c.title}>
                  <span className="font-semibold text-[var(--ink)]">{c.title}:</span> {c.desc}
                </li>
              ))}
            </ul>
            <p>
              At Bigwig Media Digital, we start by understanding your website and business objectives. We can then
              discuss relevant opportunities, priorities, and the next steps for your SEO strategy.
            </p>
          </>
        }
      />

      <ServiceFaq title="Frequently Asked Questions About SEO Services in Delhi" faqs={faqs} source="seo-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
