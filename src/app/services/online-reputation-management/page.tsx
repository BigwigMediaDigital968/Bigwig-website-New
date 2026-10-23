import type { Metadata } from "next";
import Link from "next/link";
import heroImg from "../../../../Assets/Services hero/orm.jpg";
import introImg from "../../../../Assets/services/16.jpg";
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

const PATH = "/services/online-reputation-management";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Best Online Reputation Management Services in Delhi";
const description =
  "Take control of your digital reputation with expert ORM services in Delhi. Track brand mentions, respond to reviews, and improve customer confidence.";

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

const services: ServiceItem[] = [
  {
    title: "Online Reputation Audit",
    desc: "We review your digital footprint across Google, Maps, review sites, social media, and news to pinpoint strengths, weaknesses, and issues that need immediate attention. You get a clear, prioritized summary, not a data dump.",
  },
  {
    title: "Reputation Management",
    desc: "Our tailored ORM strategies help reduce the impact of negative content while improving positive brand perception. Every plan is built around your specific challenge, whether it is a falling rating, a damaging article, or a competitor attack.",
  },
  {
    title: "Brand Monitoring",
    desc: "We track brand mentions across platforms and respond promptly to negative feedback. Early alerts help your team address potential reputation issues before they spread.",
  },
  {
    title: "Negative Content Removal & Search Repair",
    desc: "Where content violates platform policies or applicable law, we pursue removal through the appropriate reporting and review processes. When content cannot be removed, we publish accurate, useful, positive content to strengthen your online presence and help reduce the visibility of damaging search results over time.",
  },
  {
    title: "Social Media Management",
    desc: "Our team manages your social profiles, keeping branding consistent, engagement active, and responses to comments and complaints professional. This helps your online presence feel reliable and trustworthy.",
  },
  {
    title: "Review Management",
    desc: "Positive reviews influence customer decisions. We help you collect genuine customer reviews, respond professionally to negative feedback, and report fake or policy-violating reviews across Google, Justdial, and other major platforms.",
  },
];

const strengthen: ServiceItem[] = [
  {
    title: "Developing a Positive Brand Image",
    desc: "We build a credible, engaging brand presence through tailored content strategies, review enhancement, and multi-platform reputation management. The result is stronger visibility and more trust from customers who are still deciding.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Two people shaking hands over a business deal",
  },
  {
    title: "Brand Monitoring",
    desc: "We track mentions across social media, blogs, review sites, and search engines, spot potential issues early, and keep your brand narrative consistent. You hear about a problem from us, not from a customer.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Responding to Negative Reviews",
    desc: "We respond professionally, address the customer's concern, and aim to turn dissatisfaction into a positive outcome. A calm, helpful reply is often read by future customers as proof that you care.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Two colleagues talking through a customer issue at a desk",
  },
  {
    title: "Positive Content Promotion",
    desc: "We promote reviews, testimonials, case studies, and brand stories across relevant platforms, so your best work is easy to find and can strengthen your visibility and credibility in search results.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team planning content at a whiteboard",
  },
  {
    title: "Strengthening Your Social Media Presence",
    desc: "We create tailored content, engage with followers, and make sure your platforms reflect authenticity and professionalism, building recognition and loyalty over time.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Glossy 3D Instagram icon on pink",
  },
];

const process: ServiceStep[] = [
  {
    title: "Understanding Your Brand",
    desc: "We begin with a detailed audit of your current digital reputation, including search results, reviews, social mentions, and competitors. Within about a week, you'll know what's helping, what's hurting, and what to fix first.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Strategy meeting around a conference table",
  },
  {
    title: "Creating a Customised ORM Plan",
    desc: "We design a strategy aligned with your goals and brand personality, including priority platforms, the content we'll create, and a clear scope for content removal efforts versus search repair.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team working on a plan together at a long table",
  },
  {
    title: "Execution and Active Monitoring",
    desc: "Using SEO, content marketing, social listening, and engagement tactics, we manage your reputation continuously. Many brands may begin to see measurable movement within 4–12 weeks, depending on the starting point, issue, and scope of work.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team reviewing brand mentions on a desktop screen",
  },
  {
    title: "Optimisation and Reporting",
    desc: "We adjust the strategy as needed and share clear monthly reports covering ratings, sentiment, search results, and the actions taken. You'll have a transparent view of progress, ongoing priorities, and recommended next steps.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rising growth chart on paper",
  },
];

const industries = [
  "Brand Reputation Management",
  "Corporate Reputation Management",
  "Celebrity Reputation Management",
  "Hotel ORM Services",
  "Hospital ORM Services",
  "Restaurant ORM Services",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What is Online Reputation Management (ORM)?",
    a: "ORM is monitoring, influencing, and improving how your brand appears online. It includes review handling, content creation, social media management, and search result optimisation. Businesses work with an ORM agency to keep their digital identity accurate, positive, and trustworthy.",
  },
  {
    q: "Why is a good online reputation necessary for businesses?",
    a: "Consumers trust online reviews almost as much as personal recommendations, and most check them before buying. A strong reputation improves trust, conversions, and visibility, while a poor one harms credibility and sales. ORM in Delhi keeps your brand trustworthy and puts positive customer experiences in front of new buyers.",
  },
  {
    q: "How long does it take to see results with ORM services in Delhi?",
    a: "It depends on the complexity of your reputation issues. Minor issues can improve within about 30 days, many brands may see results within 4 to 12 weeks, and more serious cases can take 3 to 6 months or longer. ORM is an ongoing effort, and a professional agency follows a structured plan for steady, lasting improvement.",
  },
  {
    q: "How much do ORM services cost?",
    a: "Pricing depends on the level of monitoring, content removal needs, review management, and competition in your industry. Contact us for an accurate estimate and a customised package that matches your goals.",
  },
  {
    q: "How do you fix a damaged reputation?",
    a: "We identify harmful content, publish positive articles, blogs, and testimonials, respond professionally to negative reviews, and promote high-quality content to improve the visibility of positive results. We also report content that breaks platform rules and monitor your reputation continuously. Together, these efforts help restore trust and strengthen your brand image.",
  },
  {
    q: "Is Online Reputation Management the same as SEO?",
    a: "No. SEO focuses on improving visibility in search engines, while ORM focuses on shaping public perception of your brand. ORM uses some SEO techniques, but its main goal is improving your reputation. Many businesses combine SEO with ORM for a stronger online presence.",
  },
  {
    q: "Can negative reviews or content be removed?",
    a: "Only content that violates a platform's policies, such as spam, fake, abusive, or misleading posts, may be eligible for removal. The platform makes the final decision. Otherwise, ORM can help reduce its impact by responding professionally, encouraging genuine customer feedback, and improving the visibility of positive results in search.",
  },
  {
    q: "How can you help increase my rating?",
    a: "We encourage satisfied customers to leave genuine reviews, respond professionally to negative ones, report fake or harmful reviews, and improve your overall brand visibility. We never post fake reviews, because they can risk penalties from Google and other platforms.",
  },
  {
    q: "What types of Online Reputation Management do you offer?",
    a: "ORM covers review management, social media reputation management, search result cleanup, crisis management, brand monitoring, and personal reputation management. We choose the right combination for your industry and goals.",
  },
  {
    q: "Is ORM only suitable for large businesses or brands?",
    a: "No. ORM matters for local businesses, startups, professionals, and large companies alike. Even small businesses benefit, since customers often decide based on a handful of online reviews.",
  },
  {
    q: "How does ORM help with SEO?",
    a: "ORM supports SEO by creating high-quality content, improving brand trust, and boosting the visibility of positive pages. These efforts can help positive content become more prominent in search results and strengthen your overall digital presence.",
  },
  {
    q: "Why is ORM important for local businesses in Delhi?",
    a: "Local consumers rely heavily on reviews and search results before visiting or buying. Strong ORM can support your Google Maps and local search presence, attract more customers, and build a reliable brand image in a competitive market.",
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

export default function OnlineReputationManagementPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Online reputation management"
        title="ORM Services in Delhi – Improve Your Brand Image with Us"
        intro={
          <p>
            Your online reputation is often the first impression people have of
            you. Before a customer calls, visits, or signs up, they search your
            name, read your reviews, and scan the first page of Google. As an
            online reputation management company in Delhi, we protect that first
            impression by handling negative feedback with care, correcting what
            can be corrected, and highlighting what makes your brand special, so
            you don’t just manage your reputation; you shape it with confidence.
          </p>
        }
        cta="Get a free reputation audit"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Online Reputation Management services and would like to discuss more."
        formSource="orm-hero"
        formServices={["ORM"]}
      />

      <ServiceIntro
        lead="Online reputation management company in Delhi"
        title="A Trusted Online Reputation Management Company in Delhi"
        image={introImg}
        imageAlt="Online Reputation Management Services"
        body={
          <>
            <p>
              Are you looking for a trusted Online Reputation Management company
              in Delhi NCR to strengthen your brand image? Bigwig Media Digital
              provides strategic and effective ORM services in Delhi to help
              brands build credibility and maintain a positive presence online.
            </p>
            <p>
              In today’s digital world, a single negative review or search
              result can influence a purchasing decision before you ever get to
              speak to the customer. That makes online reputation management in
              Delhi essential for businesses that want to stay competitive and
              keep customer trust, whether you run a clinic in Rohini, a
              restaurant in Connaught Place, or a startup in Gurugram.
            </p>
          </>
        }
      />

      <ServiceCards
        id="orm-services"
        lead="What we offer"
        title="Our ORM Services in Delhi"
        items={services}
        cta="Get a free reputation audit"
        source="orm-services"
      />

      {/* What Can and Can’t Be Removed */}
      <ServiceArticle
        lead="Setting Expectations"
        title="What Can and Can’t Be Removed"
        cta="Get a realistic ORM assessment"
        source="orm-removal-expectations"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              Most negative content can’t simply be deleted, and anyone who
              promises otherwise is overselling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-4 border border-emerald-100 rounded-lg bg-emerald-50/40">
                <h3 className="font-bold text-emerald-900 mb-2">
                  Can often be removed
                </h3>
                <p className="text-sm text-gray-700">
                  Spam, fake reviews, abusive or defamatory posts,
                  impersonation, and personal information shared without
                  consent, when the platform’s policy or the law supports it.
                </p>
              </div>

              <div className="p-4 border border-amber-100 rounded-lg bg-amber-50/40">
                <h3 className="font-bold text-amber-900 mb-2">
                  Usually can’t be removed
                </h3>
                <p className="text-sm text-gray-700">
                  Genuine customer complaints, accurate news coverage, and
                  legitimate criticism.
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              For the second group, we respond professionally, resolve the issue
              where possible, encourage genuine positive feedback, and build
              accurate content that reduces how much one negative result shapes
              your first impression. We never buy fake reviews or create fake
              profiles, because platforms detect them and the penalties can make
              things worse.
            </p>
          </>
        }
      />

      <ServiceCarousel
        id="orm-strengthen"
        lead="Protect your brand"
        title="How Our ORM Services Strengthen Your Brand"
        items={strengthen}
        cta="Protect your brand"
        source="orm-strengthen"
      />

      <ServiceSteps
        id="orm-process"
        heading="Our Transparent ORM Process"
        lead="How our ORM services in Delhi work: four steps from audit to a reputation you can rely on."
        rest="You see every action and every result along the way."
        steps={process}
      />

      <ServicePair
        cta="Get in touch"
        source="orm-benefits"
        panels={[
          {
            title: "Benefits of Strong Online Reputation Management in Delhi",
            image:
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Smartphone showing an app on a white desk",
            items: [
              {
                title: "Increase sales",
                desc: "Customers check online reviews before purchasing. A strong rating and a clean first page remove doubt at the moment it matters, which lifts conversions and trust.",
              },
              {
                title: "Build credibility",
                desc: "Responding to negative reviews promptly and professionally shows that you’re transparent and accountable, which is exactly what hesitant buyers look for.",
              },
              {
                title: "Greater ROI",
                desc: "Reputation lifts everything else you spend on. Ads, SEO and social campaigns convert better when the traffic lands on a brand that looks trustworthy, and partners and investors who research you find a credible picture.",
              },
              {
                title: "Stronger brand image",
                desc: "Negative material can damage trust quickly. Effective ORM gives you early warning and a plan, so one bad incident doesn’t define your brand.",
              },
              {
                title: "Attract top talent",
                desc: "Candidates read employer reviews and search results about your company. A fair, well-managed presence helps you attract skilled applicants.",
              },
            ],
          },
          {
            title:
              "Why Choose Bigwig Media Digital as Your ORM Agency in Delhi?",
            intro:
              "Choosing our online reputation management company in Delhi means protecting your digital identity with a team that shows its work and building a brand people trust. Here’s what you can expect:",
            image:
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
            imageAlt:
              "Two colleagues celebrating with a high five at their desk",
            items: [
              "Clear monitoring across the platforms that matter",
              "A strategy built around your situation",
              "Fast, professional responses to negative reviews",
              "Honest scoping and transparent reporting",
              "Ethical methods that protect your accounts",
            ],
            outro:
              "Choosing us means protecting your digital identity with a team that shows its work, and building a brand people trust.",
          },
        ]}
      />

      <ServiceArticle
        lead="Who we help"
        title="Industries We Support"
        cta="Talk to our ORM team"
        source="orm-industries"
        body={
          <>
            <p>
              Our reputation management services cover brands, businesses, and
              people across sectors:
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
        heading="Why Online Reputation Management Matters"
        lead="Today’s consumers, especially younger ones, rely heavily on online reviews. A single negative comment can push someone toward a competitor before you’ve had a chance to speak to them."
        rest="Effective ORM protects your brand, supports sales, and builds long-term trust. It also matters beyond customers, because partners, investors, and job applicants search for you too. As an online reputation management company in Delhi, we help you keep a positive image and succeed online, and we do it in a way that holds up over time."
        cta="Start your project today"
        source="orm-cta"
        photos={[
          {
            src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=600&q=80",
            alt: "3D Instagram icon on a dark background",
          },
          {
            src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
            alt: "A client receiving treatment at a skin clinic",
          },
          {
            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
            alt: "A modern restaurant dining room",
          },
          {
            src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
            alt: "3D Facebook and Messenger icons",
          },
          {
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
            alt: "Website analytics on a laptop",
          },
        ]}
      />

      <ServiceFaq
        title="Online reputation management, answered"
        faqs={faqs}
        source="orm-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
