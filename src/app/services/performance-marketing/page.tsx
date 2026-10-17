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
        Meta Ads reach people based on interests, behaviour, and location,
        making them useful for lead forms, e-commerce sales, and brand
        discovery. We build audiences, test image, video, and carousel
        creatives, and allocate budgets to the ads that perform best. Explore
        our{" "}
        <Link href="/services/social-media-marketing" className={inlineLink}>
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
        Even a well-performing ad can fail when it leads to a weak landing page.
        We review your landing pages and forms, recommend improvements, and test
        headlines, layouts, and calls to action to increase conversions.
        Discover our{" "}
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
        Email marketing and automated follow-ups nurture leads after they
        enquire and help bring past customers back. We create targeted email
        sequences that support customer engagement and drive repeat conversions.
        Explore our{" "}
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
        Organic search and valuable content complement paid campaigns by
        building sustainable traffic beyond advertising spend. We help improve
        search visibility and create relevant content through our{" "}
        <Link
          href="/services/search-engine-optimization"
          className={inlineLink}
        >
          Search Engine Optimization
        </Link>{" "}
        and{" "}
        <Link href="/services/content-marketing" className={inlineLink}>
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
    q: "What is performance marketing?",
    a: "Performance marketing is digital advertising measured by results such as clicks, leads and sales. Because each result is tracked, you can see which campaigns work and move budget towards them.",
  },
  {
    q: "What do performance marketing services include?",
    a: "They typically include Google Ads and PPC, social media ads, lead generation campaigns, remarketing, landing page optimisation, conversion tracking and reporting.",
  },
  {
    q: "How much do performance marketing services cost in Delhi?",
    a: "Cost has two parts: your ad spend and the agency fee. Both depend on your industry, competition, platforms and goals. A free audit helps estimate a starting budget.",
  },
  {
    q: "What is the minimum budget for performance marketing?",
    a: "There is no single fixed minimum. The budget needs to be enough to collect useful data, because a very small budget makes testing slow. It depends on how expensive clicks are in your industry, and we recommend a starting figure after reviewing your account.",
  },
  {
    q: "How long does it take to see results?",
    a: "Campaigns can generate enquiries soon after launch, but it usually takes a few weeks of data to optimise and often two to three months to stabilise your cost per lead. The timeline depends on your industry, budget and offer.",
  },
  {
    q: "Do I pay only when I get results?",
    a: "Not exactly. Platforms like Google and Meta charge for clicks or impressions whether or not a click turns into a sale. Performance marketing reduces waste by tracking and optimising towards results. The agency fee depends on the model you agree on.",
  },
  {
    q: "Should I choose Google Ads or Meta Ads?",
    a: "Google Ads reaches people who are already searching for what you sell. Meta Ads reaches people before they search and works well for visual products and lead forms. Many businesses use both.",
  },
  {
    q: "Which metrics do you report on?",
    a: "Common metrics are click-through rate (CTR), cost per click (CPC), conversion rate, cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS) and customer acquisition cost (CAC), depending on your goal.",
  },
  {
    q: "How is ROI measured in performance marketing?",
    a: "ROI is measured by comparing the revenue or lead value from your campaigns with your ad spend and fees, using conversion tracking, ROAS and cost per acquisition.",
  },
  {
    q: "Can performance marketing work for a small business?",
    a: "Yes. You can start with a modest budget, target a specific area and service, and track every enquiry, then scale what works.",
  },
  {
    q: "Is performance marketing better than SEO?",
    a: "They do different jobs. Paid campaigns bring visibility quickly. SEO builds traffic that lasts. Many businesses use both together.",
  },
  {
    q: "Can performance marketing help with lead generation for real estate, education or healthcare?",
    a: "Yes. Lead generation campaigns are ideal for businesses that rely on enquiries, including real estate, education and healthcare. Campaigns are tailored to your target audience and must comply with each platform's advertising policies.",
  },
  {
    q: "Can performance marketing help with brand awareness?",
    a: "Yes. Targeted advertising campaigns and engaging creatives help increase brand visibility, reach the right audience and improve brand recall while supporting your business goals.",
  },
  {
    q: "How is performance marketing different from traditional marketing?",
    a: "Traditional marketing focuses primarily on broad reach and visibility, while performance marketing focuses on measurable outcomes through audience targeting, real-time tracking and data-driven campaign optimisation.",
  },
  {
    q: "What do I need to get started with performance marketing?",
    a: "You need access to your website and advertising accounts, if available, along with your business goals, monthly budget, offer details and target audience. We use this information to build a campaign strategy tailored to your business.",
  },
  {
    q: "Do you work with businesses across Delhi NCR?",
    a: "Yes. We provide performance marketing services to businesses across Delhi NCR, including Noida and Gurgaon, helping them reach relevant audiences and generate quality leads.",
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

export default function PerformanceMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Performance marketing"
        title="Performance Marketing Services in Delhi"
        intro={
          <>
            <div>
              <h2 className="text-xl md:text-2xl font-medium">
                Google Ads, Meta Ads and lead generation campaigns tracked to
                the leads and sales they produce
              </h2>
              <p className="mt-2">
                Bigwig Media Digital is a performance marketing agency in Delhi
                serving businesses across Delhi NCR, including Noida and
                Gurgaon. We plan, launch and optimise paid campaigns on Google,
                Meta and other platforms, and we judge every campaign by the
                leads, enquiries and sales it generates.
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
              Performance marketing is a form of digital advertising where
              results are measured and optimised against specific actions, such
              as a click, a form fill, a phone call or a purchase. Instead of
              judging an ad by how many people saw it, you judge it by what
              those people did next.
            </p>
            <p>
              Platforms such as Google Ads and Meta Ads charge for clicks or
              impressions, so the aim is to make sure that spend turns into
              outcomes you can count. Conversion tracking connects each ad to a
              result, which lets you stop what is not working and put more
              budget behind what is.
            </p>
            <p>
              This is different from traditional marketing, such as print or
              hoardings, where it is hard to link spend to sales. In performance
              marketing, cost per lead, cost per acquisition and return on ad
              spend are visible, so decisions are based on numbers.
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
              Delhi NCR is one of the most competitive markets in India. Many
              businesses in the same area compete for the same searches and the
              same audiences on Google, Instagram, Facebook and YouTube.
            </p>
            <p>
              Performance marketing helps you reach people who are searching for
              your service right now, or who match your ideal customer. Ad
              platforms let you target by city, area and pin code, so you can
              focus on Delhi, Noida, Gurgaon and the rest of NCR.
            </p>
            <p>
              Because results are tracked, you can start with a controlled
              budget, learn what works and scale from there.
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

      {/* B7. Metrics Section */}
      <ServiceArticle
        lead="Metrics that matter"
        title="Performance Marketing Metrics We Track"
        cta="Get a metric-driven audit"
        source="performance-metrics"
        body={
          <>
            <p className="mb-6">
              We monitor granular performance metrics across all active
              campaigns to maintain full transparency and drive predictable
              return on investment.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Metric
                    </th>
                    <th className="p-3 font-semibold text-gray-900">
                      What it tells you
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Click-through rate (CTR)
                    </td>
                    <td className="p-3">
                      How many people who saw your ad clicked it
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Cost per click (CPC)
                    </td>
                    <td className="p-3">What you pay for each click</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Conversion rate
                    </td>
                    <td className="p-3">
                      Share of visitors who take the action you want
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Cost per lead (CPL)
                    </td>
                    <td className="p-3">What you pay to get one enquiry</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Cost per acquisition (CPA)
                    </td>
                    <td className="p-3">
                      What you pay to get one customer or sale
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Return on ad spend (ROAS)
                    </td>
                    <td className="p-3">
                      Revenue earned for every rupee of ad spend
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Customer acquisition cost (CAC)
                    </td>
                    <td className="p-3">
                      Total cost of winning one new customer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        }
      />

      {/* B8. Google Ads vs Meta Ads Section */}
      <ServiceArticle
        lead="Platform Comparison"
        title="Google Ads vs Meta Ads: Which Is Right for Your Business?"
        cta="Find the right channel mix"
        source="performance-channel-comparison"
        body={
          <>
            <p className="mb-4">
              Both platforms work, but they do different jobs. Google Ads
              reaches people who are already searching. Meta Ads reaches people
              while they browse, before they know they need you.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Factor
                    </th>
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Google Ads
                    </th>
                    <th className="p-3 font-semibold text-gray-900">
                      Meta Ads (Facebook and Instagram)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Audience intent
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      High, people are actively searching
                    </td>
                    <td className="p-3">Lower, people are browsing</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Works well for
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      Local services, high-intent leads, products people search
                      for
                    </td>
                    <td className="p-3">
                      Visual products, lead forms, brand discovery, retargeting
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Main formats
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      Search, Display, Shopping, YouTube, Performance Max
                    </td>
                    <td className="p-3">Image, video, carousel, lead forms</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Typical role
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      Capture existing demand
                    </td>
                    <td className="p-3">
                      Create demand and re-engage visitors
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Many businesses use both: Google to capture demand and Meta to
              build it and bring visitors back. We recommend a mix after
              reviewing your goals, budget and market.
            </p>
          </>
        }
      />

      {/* B9. Why Choose Us */}
      <ServiceArticle
        lead="Why Choose Us"
        title="Why Choose Bigwig Media Digital as Your Performance Marketing Company in Delhi"
        cta="Partner with us"
        source="performance-why-choose-us"
        body={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategic Insights
              </h3>
              <p>
                We start by understanding your business model, market and
                customers, so campaigns are built around your goals.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Data-Driven Campaigns
              </h3>
              <p>
                Decisions are based on analytics, not assumptions, so your
                budget goes where it performs.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transparent Reporting
              </h3>
              <p>
                Clear, easy-to-understand reports show campaign progress,
                insights and opportunities to improve.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Continuous Optimisation
              </h3>
              <p>
                We keep refining campaigns as platforms, audiences and
                competition change.
              </p>
            </div>
          </div>
        }
      />

      {/* B10. Industries */}
      <ServiceCarousel
        lead="Sectors We Empower"
        title="Industries We Work With"
        cta="Discuss your industry requirements"
        source="performance-industries-list"
        items={[
          {
            title: "Automotive",
            desc: "Campaigns that highlight vehicle features and offers and bring in qualified enquiries from buyers.",
          },
          {
            title: "Fashion",
            desc: "Visual, trend-focused campaigns that showcase collections and drive online sales.",
          },
          {
            title: "Electronics and Technology",
            desc: "Precise targeting to reach tech-savvy buyers and increase product sales.",
          },
          {
            title: "Healthcare",
            desc: "Compliant, informative campaigns that help patients find the right provider.",
          },
          {
            title: "Hospitality and Travel",
            desc: "Campaigns that attract travellers and increase bookings for hotels, restaurants and travel businesses.",
          },
          {
            title: "Education and E-Learning",
            desc: "Targeted advertising that promotes courses and programmes to prospective students.",
          },
          {
            title: "Retail and E-Commerce",
            desc: "Strategies that increase traffic and online sales, with remarketing to bring shoppers back.",
          },
          {
            title: "Finance and Banking",
            desc: "Compliant campaigns for loans, investments and financial products, built around platform policies.",
          },
        ]}
      />

      {/* B11. Pricing */}
      <ServiceArticle
        lead="Investment & Costs"
        title="How Performance Marketing Pricing Works in Delhi"
        cta="Get a transparent quote"
        source="performance-pricing"
        body={
          <>
            <p className="mb-4">
              Performance marketing cost has two parts: your ad spend, which
              goes to the advertising platform, and the agency fee for planning,
              management and reporting.
            </p>
            <p className="mb-4">
              Agencies commonly charge in one of three ways: a fixed monthly
              fee, a percentage of ad spend, or a hybrid of a base fee and a
              performance-linked component. The right model depends on your
              budget and goals.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              What affects your cost:
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>How competitive your industry and keywords are</li>
              <li>Which platforms you use and how many campaigns you run</li>
              <li>The areas you want to target</li>
              <li>Your conversion rate and the value of each lead or sale</li>
            </ul>

            <p className="mt-4 font-medium text-gray-900">
              Request a free ad audit and we will suggest a starting budget and
              campaign structure for your business.
            </p>
          </>
        }
      />

      {/* B12. Who It Is For, Mistakes, and How to Choose */}
      <ServiceArticle
        lead="Strategic Fit & Best Practices"
        title="Who It Is For, Common Mistakes, and How to Choose"
        cta="Schedule a consultation"
        source="performance-guide"
        body={
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who Should Invest in Performance Marketing?
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Local and service businesses that want a steady flow of
                  enquiries
                </li>
                <li>
                  E-commerce and D2C brands that want to grow online sales
                </li>
                <li>B2B companies that need qualified leads</li>
                <li>
                  Educational institutes, clinics and real estate businesses
                  that run on enquiries
                </li>
                <li>
                  Startups that want to test demand with a controlled budget
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Common Mistakes That Waste Ad Budget
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>No conversion tracking:</strong> You cannot improve
                  what you cannot measure.
                </li>
                <li>
                  <strong>Sending all traffic to the homepage:</strong> A
                  focused landing page converts better.
                </li>
                <li>
                  <strong>Targeting too broadly:</strong> Wide targeting spends
                  budget on people who will never buy.
                </li>
                <li>
                  <strong>No negative keywords:</strong> Irrelevant searches use
                  up your Google Ads budget.
                </li>
                <li>
                  <strong>Judging by clicks alone:</strong> Clicks do not pay
                  the bills, leads and sales do.
                </li>
                <li>
                  <strong>Changing everything too often:</strong> Campaigns need
                  enough data before you judge them.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How to Choose a Performance Marketing Agency in Delhi
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Check for experience in your industry and ask for relevant
                  examples.
                </li>
                <li>
                  Make sure you own your ad accounts and can see your data.
                </li>
                <li>Ask how they report, how often, and which metrics.</li>
                <li>
                  Get clear pricing: the agency fee and your ad spend should be
                  separate.
                </li>
                <li>Ask how they handle underperforming campaigns.</li>
                <li>Look for customised strategy, not a generic package.</li>
              </ul>
            </div>
          </div>
        }
      />

      <ServiceArticle
        lead="Most trusted agency"
        title="Partner with the Best Performance Marketing Company in Delhi"
        cta="Boost your performance today"
        source="performance-partner"
        body={
          <>
            <p>
              In today’s highly competitive digital world, choosing the right
              performance marketing agency in Delhi can make all the difference.
              Only a few stand out for their expertise, innovation, and proven
              results. Businesses looking to scale through social media and
              digital performance channels need a partner that knows how to turn
              visibility into conversions, and conversions into sustainable
              growth.
            </p>
            <p>
              Working with a top-tier performance marketing company in Delhi
              ensures every campaign is tailored to your audience, built to
              spark meaningful interactions, and designed to deliver measurable
              results.
            </p>
            <p>
              With our commitment to excellence and a strong track record of
              successful campaigns, we offer performance-driven solutions
              crafted around your specific goals. Every strategy, every
              creative, and every optimisation is built with your growth in
              mind.
            </p>
          </>
        }
      />

      <ServiceFaq
        title="Performance marketing, answered"
        faqs={faqs}
        source="performance-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
