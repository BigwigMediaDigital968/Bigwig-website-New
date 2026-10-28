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
const title = "Top Email Marketing Services in Delhi to Reach More Customers";
const description =
  "Connect with the right audience through email marketing services in Delhi. Create engaging campaigns, promote your services and build lasting customer relationships.";

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
        url: "/og-images/email.jpg",
      },
    ],
  },
};

// Photos from Unsplash (images.unsplash.com is allowed in next.config)

const introPhotos = [
  {
    src: "https://images.unsplash.com/photo-1556204975-1851fadab092?auto=format&fit=crop&w=600&q=80",
    alt: "Mail app icon with unread messages",
  },
  {
    src: "https://images.unsplash.com/photo-1758274252219-5f20097548c9?auto=format&fit=crop&w=800&q=80",
    alt: "Woman smiling while reading her phone",
  },
  {
    src: "https://images.unsplash.com/photo-1683117927786-f146451082fb?auto=format&fit=crop&w=900&q=80",
    alt: "Blue envelope icon",
  },
  {
    src: "https://images.unsplash.com/photo-1615840287456-01c4cf540c55?auto=format&fit=crop&w=800&q=80",
    alt: "Hands typing on a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80",
    alt: "Mail app on a phone home screen",
  },
];

const whyChoose: ServiceItem[] = [
  {
    title: "Understanding of the Local Market",
    desc: "We consider your target audience, business goals, local events, and seasonal trends to create email campaigns that are relevant to your customers in Delhi.",
  },
  {
    title: "Complete Email Marketing Support",
    desc: "From campaign planning and email copywriting to automation and performance tracking, we help manage the key parts of your email marketing activities.",
  },
  {
    title: "Email Setup and Deliverability",
    desc: "We help configure email authentication, maintain list quality, and follow deliverability best practices to improve the chances of your emails reaching the inbox.",
  },
  {
    title: "Flexible Solutions for Your Business",
    desc: "Whether you need regular newsletters, promotional campaigns, or automated email sequences, we can plan activities around your business needs and budget.",
  },
  {
    title: "Website and Email Integration",
    desc: (
      <>
        If your business needs it, we can{" "}
        <Link
          href="/services/website-development-company-in-delhi"
          className={inlineLink}
        >
          develop your website
        </Link>{" "}
        with email functionality integrated into your website or admin
        dashboard. The right setup depends on your requirements, email platform,
        and sending volume.
      </>
    ),
  },
];

const process: ServiceStep[] = [
  {
    title: "Research and Strategy",
    desc: "We learn about your business, target customers, and marketing goals. Based on this information, we create an email strategy focused on objectives such as lead generation, sales, or customer retention.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning around a meeting table",
  },
  {
    title: "Email List Segmentation",
    desc: "We organise your consent-based subscriber list into relevant groups based on customer interests, activity, and buying stage. This helps us send more useful and relevant messages to each audience.",
    image:
      "https://images.unsplash.com/photo-1783115259399-3a5a3e0e4592?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing a subscriber spreadsheet",
  },
  {
    title: "Email Design and Copywriting",
    desc: "We create clear subject lines, engaging email copy, and mobile-friendly designs that match your brand. Each email is planned around a specific message and action.",
    image:
      "https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Copywriter working on a laptop",
  },
  {
    title: "Automation Setup",
    desc: "We set up suitable automated email journeys, such as welcome emails, lead nurturing, abandoned-cart reminders, and customer re-engagement campaigns, depending on your business needs and email platform.",
    image:
      "https://images.unsplash.com/photo-1743385779347-1549dabf1320?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hand-drawn workflow diagram on a desk",
  },
  {
    title: "Testing and Optimisation",
    desc: "We test relevant elements such as subject lines, email content, calls to action, and send times. These tests help identify opportunities to improve campaign performance and make future emails more effective.",
    image:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Two people sketching test ideas on a whiteboard",
  },
  {
    title: "Reporting and Improvement",
    desc: "We review available campaign data, including clicks, conversions, and revenue where tracking is configured. We use these insights to recommend practical improvements for future campaigns.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

const emailTypes: ServiceItem[] = [
  {
    title: "Email Campaign Management",
    desc: "We plan and manage newsletters, promotional emails, announcements, and product launch campaigns to keep your audience informed and engaged.",
  },
  {
    title: "Email Automation & Drip Campaigns",
    desc: "We create automated email sequences that deliver relevant messages at different stages of the customer journey, from welcoming new subscribers to nurturing leads.",
  },
  {
    title: "Transactional Emails",
    desc: "We help set up essential service-related emails, including order confirmations, account notifications, and password reset messages, where supported by your systems.",
  },
  {
    title: "B2B Email Marketing",
    desc: "We help B2B businesses nurture prospects through useful content, follow-up emails, and targeted communication that supports longer sales cycles.",
  },
  {
    title: "E-commerce Email Marketing",
    desc: "We help online stores engage customers through product updates, abandoned-cart reminders, post-purchase emails, and repeat-purchase campaigns.",
  },
  {
    title: "Local Business Email Campaigns",
    desc: "We create targeted email campaigns for local businesses to share offers, announce events, promote services, and maintain strong connections with subscribers.",
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
    q: "What do email marketing services include?",
    a: "Email marketing services can include campaign planning, copywriting, template design, audience segmentation, automation, scheduling, and performance tracking. At Bigwig Media Digital, we tailor our approach to your business goals and marketing needs.",
  },
  {
    q: "How much should email marketing cost?",
    a: "The cost of email marketing depends on your contact list size, email volume, platform features, and service requirements. Small businesses may start with a basic email platform, while businesses needing strategy, design, automation, and reporting may require a larger budget.",
  },
  {
    q: "How much does an email marketing agency cost?",
    a: "Email marketing agency costs vary based on campaign frequency, subscriber list size, automation requirements, and reporting needs. Contact Bigwig Media Digital to discuss your goals and receive a quote tailored to your business.",
  },
  {
    q: "How much does it cost to send 1,000 emails?",
    a: "The cost of sending 1,000 emails depends on your email marketing platform, pricing plan, and included features. Some providers offer free plans with sending limits, while others charge monthly or based on usage. Compare current provider pricing before choosing a plan.",
  },
  {
    q: "What are the 7 types of emails?",
    a: "Seven common types of marketing emails are welcome emails, newsletters, promotional emails, transactional emails, lead-nurturing emails, abandoned-cart emails, and re-engagement emails. The right mix depends on your audience and business objectives.",
  },
  {
    q: "What is the 80/20 rule in email marketing?",
    a: "The 80/20 rule is a general marketing guideline suggesting that around 80% of your email content should provide useful information or value, while around 20% can focus on promotions. It is not a strict rule, so test different content mixes to find what works for your audience.",
  },
  {
    q: "Is email marketing still worth it in 2026?",
    a: "Yes, email marketing can still be valuable in 2026 when campaigns are relevant, permission-based, and focused on customer needs. It can help businesses nurture leads, share updates, build relationships, and encourage repeat purchases. Results depend on your strategy, audience, and execution.",
  },
  {
    q: "What is email automation, and does my business need it?",
    a: "Email automation sends messages automatically when a customer takes a specific action or reaches a certain stage. Examples include welcome emails, follow-up messages, and abandoned-cart reminders. It can help your business save time and communicate with customers more consistently.",
  },
  {
    q: "How can I stop my marketing emails from going to spam?",
    a: "Use a permission-based email list, authenticate your sending domain, create relevant content, and remove invalid or inactive addresses when appropriate. Make unsubscribing easy and follow applicable email marketing rules. These practices can improve deliverability but cannot guarantee inbox placement.",
  },
  {
    q: "How often should a business send marketing emails?",
    a: "The ideal email frequency depends on your audience, industry, and content. Some businesses send weekly newsletters, while others send emails less often or use automated messages based on customer activity. Monitor engagement and unsubscribe rates to find a suitable schedule.",
  },
  {
    q: "How do you measure whether an email campaign is successful?",
    a: "Email campaign performance can be measured through delivery rates, clicks, conversions, leads, sales, unsubscribes, and revenue where tracking is available. The most important metrics depend on your campaign goals. Open rates can also be tracked, although privacy features may make them less reliable.",
  },
  {
    q: "Can email marketing help generate leads and sales?",
    a: "Yes, email marketing can support lead generation and sales by sharing useful content, nurturing potential customers, promoting relevant offers, and following up with interested users. Results depend on list quality, audience targeting, campaign content, and the overall customer journey.",
  },
  {
    q: "Which email marketing platform is best for my business?",
    a: "The best email marketing platform depends on your budget, contact list size, automation needs, integrations, and reporting requirements. Compare current features, sending limits, ease of use, and pricing before choosing a platform for your business.",
  },
  {
    q: "Can email marketing connect with my website, CRM, or online store?",
    a: "Yes, many email marketing platforms integrate with websites, customer relationship management (CRM) systems, and online stores. These integrations can help collect sign-ups, organise customer data, track conversions, and send relevant automated emails. Available integrations depend on the tools your business uses.",
  },
  {
    q: "What is the 60/40 rule in email marketing?",
    a: "The 60/40 rule is sometimes used as a guideline for balancing email content or design elements, but its meaning varies by source. It is not a universal email marketing standard. Focus on clear messaging, useful content, and testing different formats with your audience.",
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

export default function EmailMarketingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Email marketing"
        title="Email Marketing Services in Delhi"
        intro={
          <p>
            Turn your email list into stronger customer relationships and
            business growth. Bigwig Media Digital provides email marketing
            services in Delhi to help businesses connect with the right audience
            through relevant, well-planned email campaigns.
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
          <>
            <p>
              Your customers receive many emails every day. To get noticed, your
              messages need to be relevant, useful, and easy to act on. We
              combine campaign planning, email content, audience segmentation,
              and performance tracking to support your business goals.
            </p>
            <p>
              Our email marketing services in Delhi can help you nurture leads,
              stay connected with customers, and support repeat purchases. We
              plan campaigns around your audience and review results to identify
              what can be improved.
            </p>
          </>
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
        lead="A good email campaign starts with a clear plan."
        rest=" We follow a structured process to understand your audience, create relevant messages, and improve campaign performance over time."
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
        lead="A strong email list is built on permission and genuine customer interest."
        rest="We help businesses organise their subscriber data, improve list quality, and send relevant emails to people who want to hear from them."
        icon={<SlidersHorizontal size={20} />}
        items={[
          {
            title: "Opt-in Forms and Lead Magnets",
            desc: "We help plan sign-up forms and useful incentives that encourage interested visitors to subscribe to your emails.",
            image:
              "https://images.unsplash.com/photo-1762330471687-a05c0f99a046?auto=format&fit=crop&w=600&q=80",
            imageAlt: "Sign-up screen with email option",
          },
          {
            title: "Subscriber Preferences",
            desc: "Where supported, we help organise subscription preferences so people can choose the types of emails they want to receive.",
            image:
              "https://images.unsplash.com/photo-1790749871439-a1762c75af2a?auto=format&fit=crop&w=1400&q=80",
            imageAlt: "Woman reading email on her phone in a café",
          },
          {
            title: "List Cleaning & bounce management",
            desc: "We review list quality, manage bounced addresses, and identify inactive subscribers to help maintain a healthier sending list.",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
            imageAlt: "Laptop showing email list health metrics",
          },
        ]}
      />

      <ServicePair
        panels={[
          {
            title: "Key Features of Our Email Marketing Services in Delhi",
            image:
              "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Printed design samples and brochures",
            items: [
              {
                title: "Professional Email Design",
                desc: "We create clean, mobile-friendly email templates that reflect your brand and make your message easy to read.",
              },
              {
                title: "Campaign Tracking and Analytics",
                desc: "We monitor available performance data, such as clicks, conversions, and campaign engagement, to help you understand what is working.",
              },
              {
                title: "Deliverability Support",
                desc: "We follow email authentication, list hygiene, and sending best practices to help improve inbox placement.",
              },
              {
                title: "CRM & e-commerce integration",
                desc: "Where compatible, we connect email platforms with CRM systems or online stores to support better data use, segmentation, and automation.",
              },
            ],
          },
          {
            title: "Creating Email Content That Encourages Action",
            image:
              "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Content team working together around a table",
            items: [
              {
                title: "Understand Your Audience",
                desc: "We consider customer needs, interests, and behaviour to make email messages more relevant to the people receiving them.",
              },
              {
                title: "Write Clear Subject Lines",
                desc: "We write subject lines that communicate value and encourage subscribers to open the email without misleading promises.",
              },
              {
                title: "Use Relevant Personalisation",
                desc: "Where suitable data is available, we tailor messages, offers, and recommendations to different subscriber groups.",
              },
              {
                title: "Include a Clear Call to Action",
                desc: "Each email should guide readers towards a useful next step, such as visiting a page, exploring a product, or contacting your team.",
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
            title: "Improving Email Deliverability",
            intro:
              "Sending an email does not guarantee that it will reach the inbox. Deliverability depends on several factors, including sender reputation, authentication, subscriber engagement, and list quality.",
            items: [
              "SPF, DKIM, and DMARC configuration support.",
              "Sender reputation monitoring and appropriate warm-up practices.",
              "List cleaning and bounce management.",
              "Permission-based email practices and unsubscribe management.",
              "Review of sending patterns and campaign engagement.",
            ],
            outro:
              "These practices help create a healthier email program and reduce avoidable delivery issues. Actual inbox placement depends on the email provider, audience behaviour, and other factors.",
          },
          {
            title: "Benefits of Email Marketing for Your Business",
            intro:
              "Email marketing gives businesses a direct way to communicate with subscribers and existing customers. When planned well, it can support several business goals.",
            items: [
              "Better customer relationships: Share useful updates and stay connected with your audience.",
              "Targeted communication: Send relevant messages to different subscriber groups.",
              "Support for sales and leads: Guide interested customers towards enquiries, purchases, or other actions.",
              "Measurable performance: Track clicks, conversions, and other available campaign metrics.",
              "Time-saving automation: Schedule campaigns and automate suitable customer journeys.",
              "Continuous improvement: Use campaign data to improve future email content and strategy.",
            ],
          },
        ]}
      />

      {/* Practical, Results-Focused Approach */}
      <ServiceArticle
        lead="Our Approach"
        title="A Practical, Results-Focused Approach to Email Marketing"
        cta="Build your email strategy"
        source="email-practical-approach"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              At Bigwig Media Digital, we focus on building email campaigns
              around your business goals and customer needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1">
                  Strategy before sending
                </h3>
                <p className="text-sm text-gray-700">
                  We plan campaigns around clear objectives and audience needs.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1">
                  Relevant messaging
                </h3>
                <p className="text-sm text-gray-700">
                  We focus on useful content rather than unnecessary promotional
                  emails.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1">Reliable setup</h3>
                <p className="text-sm text-gray-700">
                  We pay attention to list quality, authentication, and sending
                  practices.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1">
                  Performance tracking
                </h3>
                <p className="text-sm text-gray-700">
                  We review campaign data and identify areas for improvement.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-1">
                  Flexible execution
                </h3>
                <p className="text-sm text-gray-700">
                  We tailor the approach to your business, audience, and
                  available tools.
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Our goal is to help you build a more organised and effective email
              marketing program.
            </p>
          </>
        }
      />

      {/* <ServicePair
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
            outro:
              "This loop makes each campaign smarter and more profitable over time.",
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
      /> */}

      <ServiceArticle
        lead="Why us"
        title="Why We’re the Email Marketing Agency in Delhi You Should Choose"
        cta="Book a free strategy call"
        source="email-strategy-call"
        image={{
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
          alt: "Email marketing team working together on laptops",
        }}
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
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]"
                  />
                  {d}
                </li>
              ))}
            </ul>
            <h3 className="pt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
              Industries we serve
            </h3>
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
              If you’re ready to turn your email list into predictable revenue,
              let’s talk. Book a free strategy call, share your goals, and we’ll
              send a tailored roadmap and sample campaign plan.
            </p>
          </>
        }
      />

      <ServiceFaq
        title="Email marketing, answered"
        faqs={faqs}
        source="email-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
