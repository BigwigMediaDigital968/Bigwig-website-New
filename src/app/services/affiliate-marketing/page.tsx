import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/affiliate_marketing.jpg";
import introImg from "../../../../Assets/services/affiliate.png";
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
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/affiliate-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Top Affiliate Marketing Services in Delhi to Boost Sales";
const description =
  "Grow your business through affiliate partnerships. Our affiliate marketing services help you find relevant partners, manage campaigns and track performance.";

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

const approach = [
  "Find affiliate partners relevant to your target audience.",
  "Set clear campaign goals and commission terms.",
  "Track agreed actions, such as leads or sales.",
  "Review performance and improve campaigns over time.",
];

const whyChoose: ServiceItem[] = [
  {
    title: "Relevant Affiliate Partner Selection",
    desc: "The right partners can help your brand reach people who are more likely to be interested in your products or services. We help identify suitable affiliate opportunities based on your industry, audience, campaign goals, and programme requirements.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Marketing team planning affiliate partnerships",
  },
  {
    title: "Affiliate Programme Management",
    desc: "An affiliate programme needs clear goals, partner communication, campaign rules, and regular monitoring. We help manage the relevant programme activities so your team can focus on other areas of your business.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team planning a campaign at a whiteboard",
  },
  {
    title: "Performance Tracking and Reporting",
    desc: "Tracking helps businesses understand how affiliate campaigns perform. Depending on your setup, reporting can include clicks, leads, sales, conversion rates, and partner-level results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Affiliate campaign performance analytics",
  },
  {
    title: "Clear Commission Structures",
    desc: "Commission terms should be clear to both businesses and affiliate partners. We help plan commission structures around your campaign goals, product margins, and agreed conversion actions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Affiliate commission planning and reporting",
  },
];

const services: ServiceItem[] = [
  {
    title: "Affiliate Campaign Planning and Strategy",
    desc: "We help define your campaign goals, target audience, suitable commission model, and key performance indicators. This creates a clear starting point for your affiliate programme.",
  },
  {
    title: "Affiliate Recruitment and Partner Selection",
    desc: "We help identify potential affiliate partners whose content, audience, and promotional methods fit your brand. Partner selection should consider relevance, quality, and alignment with your programme rules.",
  },
  {
    title: "Affiliate Training and Support",
    desc: "Affiliate partners need clear information about your products, brand guidelines, approved promotional methods, and campaign terms. We help prepare relevant materials and support communication where included in the agreed scope.",
  },
  {
    title: "Affiliate Tracking, Analytics and Compliance",
    desc: "Tracking helps connect affiliate activity with agreed actions, such as leads or sales. We help review available campaign data, identify performance patterns, and support compliance with programme rules.",
  },
  {
    title: "Commission Planning and Payout Coordination",
    desc: "We help plan commission terms based on campaign objectives, product margins, and approved actions. Payment schedules, validation rules, and payout responsibilities should be agreed upon before the programme launches.",
  },
];

const howItWorks: ServiceStep[] = [
  {
    title: "Understand Your Business Goals",
    desc: "We review your products or services, target customers, business goals, and campaign requirements to establish a suitable affiliate marketing plan.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Identify Suitable Affiliate Partners",
    desc: "We look for potential partners whose audience, content, and promotional methods align with your brand and campaign objectives.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Social media apps on a phone screen",
  },
  {
    title: "Set Up Campaigns and Promotional Materials",
    desc: (
      <>
        We help organise campaign terms, approved promotional materials, tracking requirements, and relevant landing
        pages.{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          Website development
        </Link>{" "}
        work, if needed, should be agreed upon separately or included in the confirmed project scope.
      </>
    ),
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sale banner with 50% off and gift boxes",
  },
  {
    title: "Track Campaign Performance",
    desc: "We review available campaign data to understand clicks, leads, sales, conversions, and partner activity, depending on the tracking setup.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team reviewing affiliate campaign results",
  },
  {
    title: "Review Results and Improve Campaigns",
    desc: "We use performance reports to identify opportunities to improve partner selection, promotional materials, campaign terms, or conversion paths.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rising growth chart on paper",
  },
];

const industries = [
  "Ecommerce and Retail",
  "Education and EdTech",
  "Healthcare and Wellness",
  "Finance and Insurance",
  "Real Estate",
  "Automobile",
  "SaaS and Technology",
  "Travel and Hospitality",
  "Lifestyle and Fashion",
  "B2B Services",
];

const preferred = [
  {
    title: "A Structured Campaign Approach",
    desc: "We focus on campaign planning, partner relevance, clear programme terms, and performance reviews to help businesses manage affiliate marketing more effectively.",
  },
  {
    title: "Support Across Campaign Activities",
    desc: "From campaign planning to partner communication and performance reviews, we help coordinate relevant affiliate marketing activities based on the agreed scope of work.",
  },
  {
    title: "Communication and Collaboration",
    desc: "Affiliate programmes often involve business teams and external partners. Clear communication helps keep campaign goals, promotional guidelines, and performance expectations aligned.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "How Much Do Affiliate Marketing Services Cost in India?",
    a: "The cost of affiliate marketing services depends on your campaign goals, programme size, partner recruitment needs, tracking requirements, and management scope. Some programmes use a management fee, while others combine service fees with affiliate commissions. Contact our team to discuss the requirements and costs for your business.",
  },
  {
    q: "How Do I Start My Own Affiliate Program?",
    a: "Start by defining your business goals, choosing the products or services to promote, and deciding how affiliate partners will be rewarded. Next, set programme rules, select a tracking method, recruit suitable partners, and review campaign results. An affiliate marketing agency can help coordinate these activities.",
  },
  {
    q: "How Can I Find Affiliates to Sell My Products?",
    a: "You can find potential affiliates through relevant websites, publishers, content creators, industry communities, and affiliate networks. Look for partners whose audience and content fit your products. Review their promotional methods and audience relevance before inviting them to join your programme.",
  },
  {
    q: "How Does Affiliate Tracking Work?",
    a: "Affiliate tracking connects partner activity with actions such as sales or leads. Depending on the setup, tracking may use unique affiliate links, promotional codes, or other attribution methods. Businesses can use the resulting data to review partner performance and calculate eligible commissions under the agreed programme rules.",
  },
  {
    q: "What Are CPA, CPL, and CPS in Affiliate Marketing?",
    a: "CPA stands for Cost Per Action, CPL stands for Cost Per Lead, and CPS stands for Cost Per Sale. CPA rewards a defined action, CPL focuses on generating leads, and CPS is based on completed sales. The appropriate model depends on your business goals and programme terms.",
  },
  {
    q: "What Is a Good Commission Rate for Affiliates?",
    a: "A suitable commission rate depends on your product margins, selling price, customer value, industry, and campaign goals. The rate should give partners a reason to promote your business while keeping the programme financially sustainable. Review performance and profitability before changing commission terms.",
  },
  {
    q: "How Can a Business Prevent Affiliate Marketing Fraud?",
    a: "Businesses can reduce fraud risks by screening partners, setting clear programme rules, reviewing unusual traffic or conversion patterns, and validating actions before approving commissions. Tracking and regular monitoring can help identify suspicious activity, although no system can guarantee complete fraud prevention.",
  },
  {
    q: "Is Affiliate Marketing Worth It for Businesses in India?",
    a: "Affiliate marketing can be useful for businesses that want to reach relevant audiences and generate sales or leads through partners. Its suitability depends on product demand, profit margins, commission costs, partner quality, and conversion rates. Businesses should measure profitability and campaign performance rather than relying only on traffic.",
  },
  {
    q: "How Do You Choose the Right Affiliates for a Brand?",
    a: "Choose affiliates whose audience, content, and promotional methods match your business. Consider audience relevance, content quality, brand fit, and the partner's ability to reach potential customers. Clear promotional guidelines and regular performance reviews can help maintain a suitable affiliate programme.",
  },
  {
    q: "How Do You Measure Affiliate Marketing Campaign Performance?",
    a: "Campaign performance can be measured through relevant metrics such as clicks, leads, sales, conversion rate, commission costs, and revenue attributed to affiliates. The right metrics depend on your campaign goals. Reviewing these measures helps businesses understand which partners and activities are contributing to results.",
  },
  {
    q: "What Is the Difference Between Affiliate Marketing and Influencer Marketing?",
    a: "Affiliate marketing usually rewards partners for agreed actions, such as sales or leads. Influencer marketing often involves paying creators to produce content or promote a brand, although payment can also depend on performance. Both approaches can overlap, and the right option depends on your campaign goals and audience.",
  },
  {
    q: "Is Affiliate Marketing Suitable for Small Businesses and Ecommerce Brands?",
    a: "Affiliate marketing may suit small businesses and ecommerce brands when their products have demand, their margins support commissions, and suitable partners can reach relevant customers. Start with clear goals and manageable programme terms, then review the results before expanding.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AffiliateMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Affiliate marketing"
        title="Affiliate Marketing Services in Delhi"
        intro={
          <div className="space-y-4">
            <p>
              <span className="text-white">
                Grow your business with affiliate marketing services in Delhi from Bigwig Media Digital.
              </span>{" "}
              We help businesses plan affiliate campaigns, find relevant partners, track campaign performance, and
              improve sales opportunities.
            </p>
            <p>
              Our approach focuses on the right partners, clear commission structures, useful reporting, and continuous
              campaign improvement.
            </p>
          </div>
        }
        cta="Get Started Today"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Affiliate Marketing services and would like to discuss more."
        formSource="affiliate-hero"
        formServices={["Affiliate Marketing"]}
      />

      <ServiceIntro
        lead="Affiliate marketing company in Delhi"
        title="Affiliate Marketing Company in Delhi for Business Growth"
        image={introImg}
        imageAlt="Affiliate Marketing Company in Delhi for Business Growth"
        body={
          <>
            <p>
              Affiliate marketing helps businesses promote their products or services through partners who may earn a
              commission for agreed results, such as sales or qualified leads.
            </p>
            <p>
              At Bigwig Media Digital, we help businesses plan and manage affiliate campaigns based on their goals,
              target audience, products, and budget. Our work can include affiliate partner selection, campaign setup,
              commission planning, performance tracking, and reporting.
            </p>
            <p>
              We focus on building an affiliate programme that fits your business rather than using the same strategy
              for every brand.
            </p>
            <p className="text-[var(--ink)]">Our approach focuses on four key areas:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {a}
                </li>
              ))}
            </ul>
            <p>
              Whether you run an ecommerce store, a SaaS business, an educational platform, or another type of business,
              we can help you explore an affiliate marketing strategy that fits your needs.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="affiliate-why-us"
        lead="Why Bigwig"
        title="Why Choose Our Affiliate Marketing Agency in Delhi?"
        items={whyChoose}
        cta="Get Started Today"
        source="affiliate-why-us"
      />

      <ServiceCards
        id="affiliate-services"
        lead="What we offer"
        title="Our Affiliate Marketing Services in Delhi"
        intro="We help businesses plan, launch, and manage affiliate marketing campaigns according to their goals. Our services can cover partner recruitment, campaign management, tracking, commission planning, and performance reviews."
        items={services}
        cta="Plan Your Affiliate Program"
        source="affiliate-services"
        promo={{
          image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80",
          alt: "Young plant growing from a pile of coins",
          text: "Build a clearer affiliate programme with suitable partners, agreed commission terms, and performance reporting that supports better decisions.",
        }}
      />

      <ServiceSteps
        id="affiliate-process"
        heading="How Our Affiliate Marketing Process Works"
        lead="Every business has different goals."
        rest="Our process starts with understanding your requirements and then focuses on suitable partners, clear campaign setup, tracking, and performance reviews."
        steps={howItWorks}
      />

      <ServicePair
        cta="Get Started Today"
        source="affiliate-benefits"
        panels={[
          {
            title: "Benefits of Hiring an Affiliate Marketing Company in Delhi",
            intro: "Affiliate marketing can support business growth when the programme is planned and managed carefully.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Two colleagues celebrating with a high five at their desk",
            items: [
              {
                title: "Reach Relevant Audiences",
                desc: "Work with partners whose audiences match your target customers.",
              },
              {
                title: "Support Sales and Lead Generation",
                desc: "Use affiliate campaigns to promote products or services and encourage agreed customer actions.",
              },
              {
                title: "Expand Your Partner Network",
                desc: "Build relationships with publishers, content creators, and other suitable promotional partners.",
              },
              {
                title: "Measure Campaign Performance",
                desc: "Review clicks, leads, sales, commissions, and other relevant metrics.",
              },
              {
                title: "Plan Marketing Costs",
                desc: "Choose commission terms that fit your business model and campaign goals.",
              },
              {
                title: "Improve Campaign Decisions",
                desc: "Use performance data to identify stronger partners and areas that need improvement.",
              },
            ],
            outro:
              "Affiliate marketing outcomes depend on factors such as product demand, partner quality, commission structure, tracking, and website conversion performance.",
          },
          {
            title: "Key Features of Our Affiliate Marketing Services in Delhi",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Two women reviewing data on laptops in a server room",
            items: [
              {
                title: "Data-Informed Campaign Decisions",
                desc: "Use available campaign data to review partner performance, traffic quality, leads, sales, and conversion trends. These insights can help guide future campaign decisions.",
              },
              {
                title: "Strategies Based on Your Business Goals",
                desc: "Affiliate campaigns should reflect your products, audience, industry, budget, and growth objectives. We tailor the proposed approach to your requirements and agreed scope.",
              },
              {
                title: "Clear Performance Reporting",
                desc: "Understand how your affiliate programme is performing through relevant reports on partner activity, conversions, commissions, and campaign results, depending on the available tracking setup.",
              },
            ],
          },
        ]}
      />

      <ServiceArticle
        lead="Why us"
        title="Why Work with Bigwig Media Digital?"
        cta="Talk to our affiliate team"
        source="affiliate-preferred"
        image={{ src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80", alt: "Affiliate manager presenting to a team" }}
        body={
          <>
            <ul className="space-y-5">
              {preferred.map((p) => (
                <li key={p.title}>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{p.title}</h3>
                  <p className="mt-1">{p.desc}</p>
                </li>
              ))}
            </ul>
          </>
        }
      />

      <ServiceArticle
        lead="Industries"
        title="Industries We Serve Across Delhi and NCR"
        cta="Discuss your industry"
        source="affiliate-industries"
        body={
          <>
            <p>
              We work with businesses across different sectors. Affiliate marketing suitability depends on the product,
              audience, profit margins, campaign goals, and available partners.
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
        heading="Ready to Grow with Affiliate Marketing in Delhi?"
        lead="Looking to launch an affiliate programme or improve an existing campaign? Bigwig Media Digital can help you explore an approach based on your business goals, target audience, and budget."
        rest="Contact our team to discuss your requirements and the affiliate marketing services that may suit your business."
        cta="Get Started Today"
        source="affiliate-cta"
        photos={[
          { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80", alt: "Shopper paying online with a card and laptop" },
          { src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80", alt: "Customer paying by card at a boutique counter" },
          { src: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=900&q=80", alt: "Online store builder open on a laptop" },
          { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", alt: "Calculator and paperwork for payouts" },
          { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80", alt: "Busy open-plan marketing office" },
        ]}
      />

      <ServiceFaq title="Affiliate marketing, answered" faqs={faqs} source="affiliate-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
