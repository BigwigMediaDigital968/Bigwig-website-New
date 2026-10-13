import type { Metadata } from "next";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import heroImg from "../../../../Assets/Services hero/Email_Marketing.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceBento,
  ServiceCards,
  ServiceCarousel,
  ServiceFaq,
  ServicePair,
  ServiceStatement,
  ServiceSteps,
  type ServiceFaqItem,
  type ServiceItem,
  type ServiceStep,
} from "../../../../components/service/ServiceSections";
import { inlineLink } from "../../../../components/service/inlineLink";

const PATH = "/services/email-marketing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Email Marketing Services in Delhi | Bigwig Media Digital";
const description =
  "Personalized Email Marketing Services in Delhi. Automated campaigns, newsletters & drip emails to boost open rates & retention. Contact Us!";

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

const introPhotos = [
  { src: "https://images.unsplash.com/photo-1556204975-1851fadab092?auto=format&fit=crop&w=600&q=80", alt: "Mail app icon with unread messages" },
  { src: "https://images.unsplash.com/photo-1758274252219-5f20097548c9?auto=format&fit=crop&w=800&q=80", alt: "Woman smiling while reading her phone" },
  { src: "https://images.unsplash.com/photo-1683117927786-f146451082fb?auto=format&fit=crop&w=900&q=80", alt: "Blue envelope icon" },
  { src: "https://images.unsplash.com/photo-1615840287456-01c4cf540c55?auto=format&fit=crop&w=800&q=80", alt: "Hands typing on a laptop" },
  { src: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80", alt: "Mail app on a phone home screen" },
];

const whyChoose: ServiceItem[] = [
  {
    title: "Deep Local Market Knowledge",
    desc: "We understand Delhi’s market dynamics, from festivals and sales cycles to audience preferences across neighbourhoods, so your emails feel timely and relevant.",
  },
  {
    title: "End-to-End Email Marketing Services",
    desc: "List building, segmentation, creative design, copywriting, automation, transactional emails, and analytics. One email marketing company in Delhi for all of it.",
  },
  {
    title: "Technology & Deliverability Expertise",
    desc: "We work with HubSpot, Klaviyo, Mailchimp, and major SMTP providers, and manage SPF/DKIM/DMARC and IP reputation so your emails land in inboxes, not spam.",
  },
  {
    title: "ROI-Focused & Scalable Solutions",
    desc: "Whether you need high-volume promotional sends or automated drip journeys, our email marketing services scale to your goals and budget.",
  },
  {
    title: "Send from Your Own Website",
    desc: (
      <>
        We can also{" "}
        <Link href="/services/website-development-company-in-delhi" className={inlineLink}>
          develop your website
        </Link>{" "}
        with an admin dashboard that sends bulk emails, so your campaigns run from your own site.
      </>
    ),
  },
];

const process: ServiceStep[] = [
  {
    title: "Research & strategy",
    desc: "We start with your business goals, customers, and existing data, then define a measurable email strategy aligned with your KPIs: revenue, leads, and retention.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning around a meeting table",
  },
  {
    title: "List building & segmentation",
    desc: "Clean lists and smart segments (behavioural, demographic, lifecycle stage) are the backbone of effective email. They let every message feel personal.",
    image: "https://images.unsplash.com/photo-1783115259399-3a5a3e0e4592?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing a subscriber spreadsheet",
  },
  {
    title: "Creative & copy",
    desc: "Compelling subject lines, concise benefit-led copy, and mobile-first design raise open and click rates, written in your brand’s voice for Delhi audiences.",
    image: "https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Copywriter working on a laptop",
  },
  {
    title: "Automation & workflow setup",
    desc: "Welcome series, onboarding flows, cart recovery, and win-back campaigns turn one email into dozens of revenue opportunities.",
    image: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hand-drawn workflow diagram on a desk",
  },
  {
    title: "Testing & optimisation",
    desc: "A/B subject tests, send-time experiments, and content variants help us improve performance with every send.",
    image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Two people sketching test ideas on a whiteboard",
  },
  {
    title: "Monitoring & reporting",
    desc: "We track deliverability, opens, clicks, conversions, and revenue, then turn results into clear recommendations to grow ROI month over month.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

const emailTypes: ServiceItem[] = [
  {
    title: "Email Campaign Management",
    desc: "Promotional campaigns, newsletters, and product launches crafted for maximum engagement.",
  },
  {
    title: "Email Automation & Drip Campaigns",
    desc: "Welcome sequences, onboarding flows, cart recovery, and lifecycle automations that nurture leads automatically.",
  },
  {
    title: "Transactional Emails",
    desc: "Order confirmations, password resets, and system notifications optimised for clarity and conversion.",
  },
  {
    title: "B2B Email Marketing",
    desc: "Account-based campaigns and nurture sequences designed for longer, more complex B2B sales cycles.",
  },
  {
    title: "E-commerce Email Marketing",
    desc: "Abandoned cart recovery, personalised product recommendations, and post-purchase flows that increase repeat purchases.",
  },
  {
    title: "Local Business Email Campaigns",
    desc: "Location-based promotions and event invites crafted for Delhi neighbourhood audiences.",
  },
];

const industries = [
  "E-commerce",
  "SaaS & Technology",
  "Healthcare",
  "Real Estate",
  "Logistics & Supply Chain",
  "Legal & Consulting",
  "Luxury Brands",
  "Local Delhi Businesses",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "Why is email marketing important for businesses?",
    a: "Email marketing offers high ROI, personalised communication, and direct customer reach. When handled by an experienced email marketing company in Delhi, it boosts sales, nurtures leads, and strengthens long-term customer relationships.",
  },
  {
    q: "How can an email marketing agency in Delhi/NCR benefit my business?",
    a: "A trusted email marketing agency in Delhi helps you develop a tailored strategy, create engaging content, improve deliverability, and automate workflows, resulting in higher engagement, conversions, and revenue.",
  },
  {
    q: "What services do you offer as an email marketing company in Delhi?",
    a: "Our email marketing services in Delhi include newsletters, drip automation, transactional emails, template design, segmentation, copywriting, A/B testing, analytics, and deliverability monitoring.",
  },
  {
    q: "Can you provide email marketing services in Delhi NCR and nearby cities?",
    a: "Yes, we serve clients across Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and other NCR regions. As a leading email marketing company in Delhi, we also support clients across India and overseas.",
  },
  {
    q: "How do I get started with email marketing?",
    a: "We begin by helping you build or refine your list, choose a platform, create a strategy, and set up your campaigns. Working with an email marketing agency in Delhi ensures smooth implementation and faster results.",
  },
  {
    q: "How often should I send emails to my subscribers?",
    a: "Most brands send 1–4 emails per week, depending on goals and audience behaviour. Our experts help you find the ideal frequency for engagement without overwhelming your subscribers.",
  },
  {
    q: "How do you prevent emails from going to spam?",
    a: "We avoid spam triggers, verify domains, maintain list quality, and use proper authentication, ensuring high deliverability for every campaign.",
  },
  {
    q: "What email marketing tools or platforms do you recommend?",
    a: "We use Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and enterprise SMTP systems. As a modern email marketing agency in Delhi, we select the best platform for your needs.",
  },
  {
    q: "How do you measure email campaign success?",
    a: "We evaluate engagement, conversions, sales, and ROI. Our email marketing services in Delhi include detailed analytics dashboards and monthly performance reports.",
  },
  {
    q: "How do you create engaging email content?",
    a: "We use persuasive copy, personalised messaging, strong visuals, and compelling CTAs. As a leading email marketing company in Delhi, we create content that drives clicks and conversions.",
  },
  {
    q: "How do you build an effective email list?",
    a: "We use opt-in forms, lead magnets, landing pages, and sign-up incentives, so your email marketing targets qualified, engaged subscribers.",
  },
  {
    q: "What’s included in your email marketing services packages?",
    a: "Packages include campaign creation, automation setup, template design, segmentation, testing, analytics, optimisation, and full support from our email marketing agency in Delhi.",
  },
  {
    q: "Can email marketing work for B2B companies?",
    a: "Yes. Email is one of the most powerful channels for B2B lead nurturing. We build tailored sequences that improve conversions and shorten sales cycles.",
  },
  {
    q: "Can you integrate email marketing with CRM or shopping cart systems?",
    a: "Yes. We integrate email tools with CRMs like HubSpot, Zoho, and Salesforce, and e-commerce platforms like Shopify, WooCommerce, and Magento, strengthening your automation and tracking.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function EmailMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Email marketing"
        title="Email Marketing Services in Delhi"
        intro={
          <p>
            <span className="text-white">Email that lands in the inbox and gets opened.</span> We design, build, and
            run high-performing email programs that increase opens, clicks, and conversions for startups, e-commerce
            brands, B2B firms, and local businesses across Delhi.
          </p>
        }
        cta="Book a free email consultation"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Email Marketing services and would like to discuss more."
        formSource="email-hero"
        formServices={["Email Marketing"]}
      />

      <ServiceStatement
        heading="Leading Email Marketing Company in Delhi for Measurable Growth"
        lead="Delhi’s inboxes are crowded. Standing out takes strategy, relevance, and flawless execution."
        rest="We combine data, copywriting, and automation to send personal emails that convert."
        body={
          <p>
            From audience segmentation to deliverability, our email marketing in Delhi focuses on business outcomes:
            higher revenue, repeat purchases, and greater customer lifetime value.
          </p>
        }
        cta="Get started today"
        source="email-intro"
        photos={introPhotos}
      />

      <ServiceCarousel
        id="email-why-us"
        lead="Why Bigwig"
        title="Why Choose Bigwig Media Digital as an Email Marketing Agency in Delhi?"
        intro="Deep market insight, solid technical expertise, and creative, high-performing campaigns that help businesses grow consistently."
        items={whyChoose}
        cta="Talk to our email team"
        source="email-why-us"
      />

      <ServiceSteps
        id="email-process"
        heading="Our Complete Process for Email Marketing in Delhi"
        lead="From strategy to reporting, every step is built to be measured."
        rest="Here’s how our process delivers scalable results for brands in Delhi."
        steps={process}
      />

      <ServiceCards
        lead="What we offer"
        title="Types of Email Marketing Services We Offer in Delhi"
        intro="Every major category, from campaigns to automation, transactional workflows, and personalised engagement."
        items={emailTypes}
        cta="Plan your email program"
        source="email-types"
      />

      <ServiceBento
        heading="Building & Managing High-Quality Email Lists"
        lead="A smaller list of people who want your emails beats a big one that ignores them."
        rest="We grow, manage, and clean your list so every send counts."
        icon={<SlidersHorizontal size={20} />}
        items={[
          {
            title: "Opt-in strategies & lead magnets",
            desc: "Sign-up flows and high-value incentives that attract engaged subscribers, not just raw volume.",
            image: "https://images.unsplash.com/photo-1762330471687-a05c0f99a046?auto=format&fit=crop&w=600&q=80",
            imageAlt: "Sign-up screen with email option",
          },
          {
            title: "Subscription management",
            desc: "Preference centres let subscribers choose topics and frequency, reducing unsubscribes and boosting retention.",
            image: "https://images.unsplash.com/photo-1790749871439-a1762c75af2a?auto=format&fit=crop&w=1400&q=80",
            imageAlt: "Woman reading email on her phone in a café",
          },
          {
            title: "List hygiene & bounce management",
            desc: "We regularly remove bounces and inactive users to protect sender reputation and keep deliverability high.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
            imageAlt: "Laptop showing email list health metrics",
          },
        ]}
      />

      <ServicePair
        panels={[
          {
            title: "Key Features of Our Email Marketing Services in Delhi",
            image: "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Printed design samples and brochures",
            items: [
              {
                title: "Professional templates & responsive design",
                desc: "Custom-built responsive templates that strengthen your brand identity and improve engagement.",
              },
              {
                title: "Advanced tracking & analytics",
                desc: "Beyond opens and clicks, we track behaviour, conversions, purchases, and lifetime value to show real ROI.",
              },
              {
                title: "Dedicated deliverability management",
                desc: "Authenticated sending, IP warming, and list hygiene keep your campaigns reaching the inbox.",
              },
              {
                title: "Easy CRM & e-commerce integration",
                desc: "Seamless integration with leading CRMs and platforms to personalise communication at scale.",
              },
            ],
          },
          {
            title: "Crafting Engaging Email Content That Converts",
            image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Content team working together around a table",
            items: [
              {
                title: "Understand your audience",
                desc: "We study intent, behaviour, and purchase trends so each email speaks directly to your readers’ needs.",
              },
              {
                title: "Write compelling subject lines",
                desc: "Curiosity, urgency, and value-driven messaging maximise open rates.",
              },
              {
                title: "Personalisation & dynamic content",
                desc: "Localised recommendations, personalised offers, and smart segmentation increase conversions.",
              },
              {
                title: "Clear calls to action",
                desc: "Every email is built around one strong CTA to drive action and revenue.",
              },
            ],
          },
        ]}
      />

      <ServicePair
        cta="Book a free consultation"
        source="email-benefits"
        panels={[
          {
            title: "Ensuring Maximum Deliverability for Email Marketing in Delhi",
            intro: "Deliverability is technical but non-negotiable. We manage everything that gets your emails to the inbox.",
            items: [
              "SPF, DKIM, and DMARC setup",
              "IP reputation and warming",
              "List hygiene to remove bounces and inactive subscribers",
              "Compliance with anti-spam laws and opt-in best practices",
            ],
            outro: "These steps keep your emails consistently reaching the inbox.",
          },
          {
            title: "Benefits of Email Marketing in Delhi",
            items: [
              "High ROI from one of the most cost-effective channels",
              "Direct customer access with no reliance on algorithms",
              "Personalisation and relevance at scale",
              "Measurable performance with clear attribution",
              "Automation that saves time and increases revenue",
              "Fast testing and optimisation for continuous improvement",
            ],
          },
        ]}
      />

      <ServicePair
        cta="Boost your email marketing today"
        source="email-invest"
        panels={[
          {
            title: "How Do Email Marketing Services Work?",
            numbered: true,
            items: [
              "Collect consented leads",
              "Segment audiences intelligently",
              "Send personalised, targeted messages",
              "Measure performance across KPIs",
              "Optimise continuously based on data",
            ],
            outro: "This loop makes each campaign smarter and more profitable over time.",
          },
          {
            title: "Why Invest in an Email Marketing Company in Delhi?",
            items: [
              "End-to-end strategy and execution",
              "Technical setup (SPF, DKIM, DMARC)",
              "Automation and personalisation",
              "Creative design and conversion copywriting",
              "Transparent reporting and ROI tracking",
              "Less wasted spend and higher conversions",
            ],
          },
        ]}
      />

      <ServiceArticle
        lead="Why us"
        title="Why We’re the Email Marketing Agency in Delhi You Should Choose"
        cta="Book a free strategy call"
        source="email-strategy-call"
        image={{ src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80", alt: "Email marketing team working together on laptops" }}
        body={
          <>
            <ul className="space-y-3">
              {[
                "Data-driven strategies with measurable outcomes.",
                "Dedicated strategists and copywriters focused on conversions.",
                "Deep expertise in deliverability and platform integrations.",
                "Transparent reporting and actionable insights.",
                "Local market knowledge combined with global best practices.",
              ].map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {d}
                </li>
              ))}
            </ul>
            <h3 className="pt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">Industries we serve</h3>
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
            <h3 className="pt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
              Ready to grow with email marketing services in Delhi?
            </h3>
            <p>
              If you’re ready to turn your email list into predictable revenue, let’s talk. Book a free strategy call,
              share your goals, and we’ll send a tailored roadmap and sample campaign plan.
            </p>
          </>
        }
      />

      <ServiceFaq title="Email marketing, answered" faqs={faqs} source="email-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
