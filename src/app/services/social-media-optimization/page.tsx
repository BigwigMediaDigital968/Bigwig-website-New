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
import Link from "next/link";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/social-media-optimization";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Social Media Optimization Agency | SMO Services in Delhi";
const description =
  "Improve your digital presence with social media management services in Delhi. Build brand credibility and connect with your target audience.";

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

const results: ServiceResult[] = [
  { value: "2X–6X", label: "Increase in overall engagement" },
  { value: "50–400%", label: "Growth in qualified leads" },
  { value: "100–1800%", label: "Boost in new followers" },
  { value: "150–900%", label: "Improvement in brand visibility" },
  {
    value: "Significant",
    label: "Enhancement in social reach & impressions, campaign-dependent",
  },
];

const process: ServiceStep[] = [
  {
    title: "Profile Creation & Optimization",
    desc: (
      <>
        We rebuild your bio, handle, link, highlights, cover images, and contact
        buttons on each platform, so a first-time visitor knows who you are and
        how to reach you.
        <br />
        <strong>You get:</strong> A consistent profile set across every platform
        we manage.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Social media app icons on a phone screen",
  },
  {
    title: "Engaging Content & Creative Graphics",
    desc: (
      <>
        We plan a monthly calendar of posts, carousels, Reels, and Stories, and
        our in-house design team produces the creatives. You approve the
        calendar before anything goes live.
        <br />
        <strong>You get:</strong> Approximately 16 creatives a month and a
        content calendar.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed design samples and brochures",
  },
  {
    title: "Target Audience Refinement",
    desc: (
      <>
        We map who actually buys from you, including their city, interests, and
        the questions they ask. We then shape content formats, hashtags, and
        posting times around them.
        <br />
        <strong>You get:</strong> An audience and competitor brief.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning around a meeting table",
  },
  {
    title: "Audience Interaction & Engagement",
    desc: (
      <>
        We reply to comments and messages within 24 hours, join relevant
        conversations, and pass genuine enquiries to your team.
        <br />
        <strong>You get:</strong> An active, responsive profile and a list of
        enquiries.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1758274252219-5f20097548c9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Woman smiling while reading her phone",
  },
  {
    title: "Analytics & Performance Reporting",
    desc: (
      <>
        Each month, you receive a report covering reach, impressions, follower
        growth, engagement rate, click-through rate, and your best and weakest
        posts, along with recommendations for the next month.
        <br />
        <strong>You get:</strong> A monthly performance report.
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

const benefits: ServiceItem[] = [
  {
    title: "Be Seen by the Right People",
    desc: "Consistent posting and well-optimized profiles keep your brand in front of the people most likely to need you. Strategic content, hashtags, and profile keywords make it easier for new audiences to discover your business.",
  },
  {
    title: "Stronger Relationships With Customers",
    desc: "Useful posts, quick replies, and active community management turn followers into people who know your brand, trust it, and come back. Meaningful interactions help build lasting customer relationships.",
  },
  {
    title: "More Relevant Visitors and Leads",
    desc: "Content built for the right audience sends more relevant visitors to your website and enquiry channels, helping attract potential customers who are more ready to talk to your team.",
  },
  {
    title: "A Reputation People Can Check",
    desc: "An active, responsive profile shows customers that your business is real and reliable. Prompt replies, useful content, and steady posting help build credibility over time.",
  },
  {
    title: "Easier to Find by Name",
    desc: "Well-optimized social profiles can appear in search results when people look for your brand, helping new customers verify your business before getting in touch. Likes and shares are not a confirmed Google ranking factor, so we never promise ranking gains from them.",
  },
  {
    title: "Organic Reach You Keep",
    desc: "Consistent organic social media work builds an audience and a library of content that can continue attracting attention after each post. Over time, this can reduce reliance on paid ads, which can be added when you want to pursue faster reach.",
  },
  {
    title: "Data to Decide With",
    desc: "Monthly reports show reach, impressions, follower growth, engagement rate, and click-through rate, along with your best-performing posts. These insights help you understand what works and direct your effort and budget toward activities that deliver results.",
  },
  {
    title: "Competitor Awareness",
    desc: "We study what your competitors post, how often they publish, which hashtags they use, and how their audiences respond. The gaps we identify become content ideas and positioning opportunities that help your brand stand out.",
  },
  {
    title: "Community Growth",
    desc: "We grow a steady community of relevant followers through useful content, trends, and genuine interaction. We never buy followers, because inflated numbers do not necessarily translate into meaningful engagement or enquiries.",
  },
  {
    title: "Brand Authority and Trust",
    desc: "Publishing valuable content and maintaining an active presence positions your brand as a dependable name in your niche. A consistent visual identity, brand voice, and profile information across platforms make your business easier to recognize and trust.",
  },
];

const goals = [
  "Grow their social following with relevant people",
  "Improve brand visibility",
  "Strengthen their online reputation",
  "Generate more leads",
  "Bring more traffic to their website",
  "Build an active online community",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is the difference between SMO and social media marketing?",
    a: "SMO improves your organic presence through profile optimization, content, and audience engagement. Social media marketing can also include paid promotion to reach specific audiences faster. SMO builds the foundation, while paid campaigns can extend your reach. See the comparison above for more details.",
  },
  {
    q: "How much do SMO services cost?",
    a: "Pricing depends on the number of platforms, how much content you need each month, and the level of engagement and reporting required. After your free audit, we provide a quote based on the agreed scope, so you pay for the services your business actually needs.",
  },
  {
    q: "How long does it take to see results?",
    a: "Engagement and profile visits may improve first. Steady follower growth and enquiries typically build over the following months, depending on your starting point, industry, audience, and posting frequency. We track performance regularly and refine the strategy based on the data.",
  },
  {
    q: "How often should we post?",
    a: "Posting frequency depends on the platform, your audience, and your available resources. As a general rule, a few high-quality posts each week can be more effective than daily filler. We create a realistic publishing schedule and adjust it based on your performance reports.",
  },
  {
    q: "Can small businesses benefit from SMO?",
    a: "Yes. SMO relies on consistency, relevance, and understanding your audience rather than requiring a large advertising budget. A local business with a clear message, useful content, and an active profile can build visibility and compete effectively within its niche.",
  },
  {
    q: "Who owns our social accounts?",
    a: "You retain ownership and control of your social media accounts. We work through authorized admin or manager access that you can revoke at any time. We never require you to hand over your personal login credentials.",
  },
  {
    q: "Do you guarantee a specific number of followers?",
    a: "No. We do not guarantee a specific follower count or buy followers to inflate numbers. Purchased followers may increase vanity metrics without generating genuine engagement or enquiries. We commit to an agreed scope of work and report performance honestly each month.",
  },
  {
    q: "What do you need from us to get started?",
    a: "We need access to your social media profiles, brand assets such as your logo, colours, and previous creatives, a list of your main products or services, and a short discussion about your goals. We use this information to conduct your audit and identify what should be improved first.",
  },
  {
    q: "How do we choose between SMO and paid ads?",
    a: "SMO builds your organic foundation through profile optimization, content, and community engagement. Paid ads can help you reach targeted audiences faster. If your profiles and content are not ready to convert visitors, advertising may send traffic to a weak destination. We generally recommend strengthening the foundation first, then adding paid campaigns when they support your goals.",
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
    audienceType:
      "Startups, SMEs, and Enterprises in Delhi and Delhi-NCR seeking social media growth",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    areaServed: "Delhi, Delhi-NCR",
    url: URL,
    description:
      "Custom SMO packages priced according to business size, platforms, and scope. Contact for a tailored quote.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SocialMediaOptimizationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Social media optimization"
        title="SMO Services in Delhi That Turn Silent Followers Into Customers"
        intro={
          <p>
            As a social media optimization agency in Delhi, we fix your
            profiles, content, and engagement so they bring enquiries. We have
            done this for 5+ years across every major platform.
          </p>
        }
        cta="Get Your Free Social Audit"
        whatsappMessage="Hi! I’m interested in your SMO (social media optimization) services in Delhi."
        formSource="smo-hero"
        formServices={["SMO"]}
      />

      <ServiceIntro
        lead="SMO company in Delhi"
        title="SMO Services in Delhi Built Around Results"
        image={introImg}
        imageAlt="Social Media Optimization Services"
        body={
          <>
            <p>
              Bigwig Media Digital has spent 5+ years as a social media
              optimization agency in Delhi, and in that time we have learned the
              difference between agencies that post content and agencies that
              build growth engines. We are the second kind. Our SMO services
              connect your brand with the audience that actually buys from you,
              not just an audience that likes your posts and scrolls on.
            </p>
            <p>
              Our team combines proven frameworks, original creative, and
              continuous data analysis to move three specific numbers:
              visibility, engagement, and qualified leads. Nothing we do is
              guesswork. Every content decision traces back to what is already
              working for your audience, and every underperforming post gets
              diagnosed, not ignored.
            </p>
          </>
        }
      />

      {/* 4. What is social media optimization? */}
      <ServiceArticle
        lead="Foundational Growth"
        title="What Is Social Media Optimization?"
        cta="Get a free social audit"
        source="smo-definition"
        body={
          <>
            <p className="mb-4">
              Social media optimization (SMO) is the work of making your social
              profiles and content easier to find, trust, and act on. It covers
              your bio and links, the posts you publish, how you reply to
              people, and how you measure what works.
            </p>
            <p>
              Think of it as the foundation under your social presence. A
              visitor who lands on your Instagram or LinkedIn page should know
              within seconds who you are, what you offer, and how to reach you.
              SMO makes that happen, then keeps it working month after month. As
              a social media optimization agency in Delhi, we handle all of this
              for you.
            </p>
          </>
        }
      />

      <PartnerBrands />

      <WorkShowcase intro="Explore how our SMO services in Delhi have helped brands across industries increase reach, engagement, leads, and revenue through data-driven social media." />

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

      {/* SMO vs Social Media Marketing Section */}
      <ServiceArticle
        lead="Understanding the Difference"
        title="SMO vs Social Media Marketing: What's the Difference?"
        cta="Get a free social media audit"
        source="smo-vs-smm"
        body={
          <>
            <p className="mb-4">
              Social media optimization (SMO) improves your organic presence:
              profile setup, content, engagement, community, and reporting. You
              are building an audience and credibility that last.
            </p>
            <p className="mb-4">
              Social media marketing (SMM) usually adds paid campaigns and
              promotions to reach people faster. It is a separate service,
              covered on our{" "}
              <Link
                href="/services/social-media-marketing"
                className={inlineLink}
              >
                Social Media Marketing
              </Link>{" "}
              page.
            </p>
            <p>
              Many clients start with SMO and add paid ads later. If you are
              unsure which you need, the free audit will tell you.
            </p>
          </>
        }
      />

      {/* 11. Why social media stalls */}
      <ServiceArticle
        lead="Common Bottlenecks"
        title="Why Social Media Stalls for Delhi Brands"
        cta="Fix your social presence"
        source="smo-stalls"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              Most brands we meet are already posting. The problem is that the
              posts are not building anything. These are the six patterns we fix
              first.
            </p>

            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              <li>
                <strong>A crowded market:</strong> Delhi brands compete with
                hundreds of similar businesses for the same local audience, so
                generic posts disappear.
              </li>
              <li>
                <strong>Wrong platforms:</strong> Effort is spread across every
                platform instead of where your buyers actually spend time.
              </li>
              <li>
                <strong>Flat engagement:</strong> Posts get views but no
                comments, saves, or enquiries because there is no clear message
                or call to action.
              </li>
              <li>
                <strong>Algorithm changes:</strong> What worked last year stops
                working, and nobody notices until reach has already dropped.
              </li>
              <li>
                <strong>Inconsistent posting:</strong> Bursts of activity
                followed by silence teach the audience to stop looking.
              </li>
              <li>
                <strong>No tracking:</strong> Without reports, nobody knows
                which posts brought enquiries and which only brought likes.
              </li>
            </ul>
          </>
        }
      />

      <ServiceSteps
        id="smo-process"
        heading="How Our Social Media Optimization Services in Delhi Work, Step by Step"
        lead="Each aspect of our Social Media Optimization Services in Delhi is designed to increase visibility, engagement, and leads. Here is what happens after you sign on."
        steps={process}
      />

      {/* 13. What's included */}
      <ServiceArticle
        lead="Clear Deliverables"
        title="What’s Included in Our SMO Plans in Delhi"
        cta="Get a customized quote"
        source="smo-pricing"
        body={
          <>
            <p className="mb-6">
              Every plan is built around your goals, but here is what a typical
              engagement includes. We share a quote after the free audit, based
              on your scope.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Features
                    </th>
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Starter
                    </th>
                    <th className="p-3 font-semibold text-gray-900 border-r border-gray-200">
                      Growth
                    </th>
                    <th className="p-3 font-semibold text-gray-900">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Platforms
                    </td>
                    <td className="p-3 border-r border-gray-200">1–2</td>
                    <td className="p-3 border-r border-gray-200">3–4</td>
                    <td className="p-3">5–6</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Creatives per month
                    </td>
                    <td className="p-3 border-r border-gray-200">10</td>
                    <td className="p-3 border-r border-gray-200">16</td>
                    <td className="p-3">30</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Reels or videos
                    </td>
                    <td className="p-3 border-r border-gray-200">4</td>
                    <td className="p-3 border-r border-gray-200">7</td>
                    <td className="p-3">12</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Engagement and replies
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      Within 24 Hours
                    </td>
                    <td className="p-3 border-r border-gray-200">
                      Within 24 Hours
                    </td>
                    <td className="p-3">Within 24 Hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Competitor review
                    </td>
                    <td className="p-3 border-r border-gray-200">Quarterly</td>
                    <td className="p-3 border-r border-gray-200">Monthly</td>
                    <td className="p-3">Monthly</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium border-r border-gray-200">
                      Report
                    </td>
                    <td className="p-3 border-r border-gray-200">Monthly</td>
                    <td className="p-3 border-r border-gray-200">
                      Monthly + call
                    </td>
                    <td className="p-3">Monthly + call</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Not sure which fits? Start with the free audit, and we will
              recommend one. Paid ads are not included, and we can add them
              later if you want faster reach.
            </p>
          </>
        }
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
        title="An SMO Agency in Delhi Clients Work With Long Term"
        cta="Start your project today"
        source="smo-why-us"
        body={
          <>
            <p>
              We measure success by whether you keep seeing results. Clients
              across India work with us to:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {goals.map((g) => (
                <li key={g} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]"
                  />
                  {g}
                </li>
              ))}
            </ul>
            <p>
              Every plan is built for your industry, goals, and audience. A real
              estate brand in South Delhi and a D2C skincare label need very
              different strategies.
            </p>
            <p>
              <b>Brands We Work With:</b> Monto · HOCO · Crown Point Estates ·
              Dr Manshi (logos, each linking to its case study or the Clients
              page)
            </p>
          </>
        }
      />

      <ServiceFaq
        title="SMO Services in Delhi: Questions Clients Ask"
        faqs={faqs}
        source="smo-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
