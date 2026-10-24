import type { Metadata } from "next";
import heroImg from "../../../../Assets/Services hero/Graphic_Design.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCarousel,
  ServiceFaq,
  ServiceStatement,
  ServiceTimeline,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import StaticWorkGallery, {
  type GalleryPosts,
} from "../../../../components/services/social-media-optimization/StaticWorkGallery";

const PATH = "/services/graphic-designing";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Best Creative Graphic Designing Services in Delhi for Your Brand";
const description =
  "Make your brand stand out with creative graphic designing services in Delhi. Get eye-catching visuals for social media, advertisements and business promotions.";

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
// placeholder photos; replace each URL with a real design (first two 4:5 portraits, then four squares)
const designWork: GalleryPosts = [
  {
    image: "/assets/graphic/1.jpg",
    alt: "Creative digital marketing poster featuring a relaxed golden retriever on a yellow background with branding and marketing elements",
  },
  {
    image: "/assets/graphic/2.jpg",
    alt: "Luxury jewellery promotional design showcasing an emerald green necklace display and limited edition collection",
  },
  {
    image: "/assets/graphic/3.jpg",
    alt: "Luxury jewellery brand creatives featuring gold rings, artisan craftsmanship, premium packaging, and elegant product photography",
  },
  {
    image: "/assets/graphic/4.jpg",
    alt: "Digital marketing agency promotional poster featuring a woman holding a newspaper with a best digital marketing agency headline",
  },
  {
    image: "/assets/graphic/5.jpg",
    alt: "Premium jewellery catalogue design featuring a model wearing a necklace alongside elegant jewellery product layouts",
  },
  {
    image: "/assets/graphic/6.jpg",
    alt: "Luxury jewellery promotional artwork featuring diamond rings and earrings arranged on a rich burgundy textured background",
  },
];

const designServices: ServiceItem[] = [
  {
    title: "Logo & Brand Identity Design",
    desc: "Logo concepts · Brand visuals · Consistent brand identity",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Logo design concepts and brand identity guidelines displayed on a designer's workspace",
  },
  {
    title: "Marketing & Promotional Design",
    desc: "Brochures & flyers · Promotional graphics · Banners & posters",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Graphic designer creating marketing and promotional materials using a digital pen tablet",
  },
  {
    title: "Social Media Post Design",
    desc: "Social media creatives · Product updates · Promotional campaigns",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Creative social media graphic design for brand promotions and digital campaigns",
  },
  {
    title: "Packaging & Print Design",
    desc: "Product packaging · Labels · Business cards & brochures",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Branded packaging and printed promotional materials for product presentation",
  },
  {
    title: "Website & Digital Graphics",
    desc: "Website graphics · Landing page visuals · Digital campaign creatives",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Website interface and digital graphic designs displayed on a desktop monitor",
  },
];

const process = [
  {
    title: "Understanding Your Requirements",
    desc: "We discuss your business, target audience, design preferences, and project goals to understand your needs before starting the work.",
  },
  {
    title: "Research & Planning",
    desc: "We review your requirements and plan a visual direction that aligns with your brand identity, audience, and the purpose of the design.",
  },
  {
    title: "Design Creation",
    desc: "We develop design concepts based on your brief, brand style, and agreed project requirements to create visuals suited to your business.",
  },
  {
    title: "Review & Revisions",
    desc: "You review the designs and share your feedback. We make revisions according to the scope and terms agreed upon before the project begins.",
  },
  {
    title: "Final Delivery",
    desc: "Once the designs are approved, we deliver the final files in the agreed formats, ready for their intended print or digital use.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What graphic designing services do you offer in Delhi?",
    a: "We offer graphic design solutions such as logo design, brand identity, social media graphics, marketing materials, packaging design, and digital graphics. Available services depend on your project requirements.",
  },
  {
    q: "How much do graphic designing services cost in Delhi?",
    a: "The cost of graphic design depends on the type of design, project complexity, number of deliverables, timeline, and revision requirements. Contact Bigwig Media Digital with your project details to discuss a suitable quote.",
  },
  {
    q: "How much does it cost to design a logo in Delhi?",
    a: "Logo design costs vary depending on the project scope, design complexity, concepts required, and final files. Share your business details and requirements with us to receive a project-specific quote.",
  },
  {
    q: "How much do video editing services cost in Delhi?",
    a: "Video editing costs depend on video length, raw footage, editing complexity, graphics, subtitles, revisions, and delivery requirements. We can review your brief and provide a quote based on the project scope.",
  },
  {
    q: "Can you edit videos for Instagram Reels and YouTube Shorts?",
    a: "Yes, you can enquire about short-form video editing for Instagram Reels and YouTube Shorts. Depending on your requirements, editing may include vertical formatting, captions, text overlays, transitions, and audio adjustments.",
  },
  {
    q: "What does video editing include?",
    a: "Video editing may include trimming footage, arranging clips, improving pacing, adding transitions, adjusting audio, inserting text, and preparing the final video in an agreed format. Deliverables depend on your project requirements.",
  },
  {
    q: "How long does a graphic design or video editing project take?",
    a: "Project timelines depend on the scope, complexity, number of deliverables, and feedback process. We discuss the expected timeline with you after understanding your requirements.",
  },
  {
    q: "Can I request changes to my design or video?",
    a: "Yes, you can share feedback during the agreed review process. The number of included revisions and any additional charges are confirmed before the project begins.",
  },
  {
    q: "Which file formats will I receive for designs and videos?",
    a: "Final file formats depend on the service and agreed deliverables. Tell us where you plan to use your designs or videos so we can confirm suitable formats before starting the project.",
  },
  {
    q: "Can I get graphic designing and video editing services together?",
    a: "Yes, you can enquire about combining graphic design and video editing services for your business. Coordinating both can help maintain a consistent visual style across your branding, social media posts, and videos.",
  },
  {
    q: "What information should I provide to get a quote?",
    a: "Share the service you need, your business details, project goals, estimated number of designs or videos, preferred timeline, and reference examples. This helps us understand your requirements and prepare a relevant quote.",
  },
  {
    q: "Do you work with clients outside Delhi?",
    a: "You can contact Bigwig Media Digital to discuss your location and project requirements. Remote collaboration may be possible depending on the scope of work and delivery needs.",
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

export default function GraphicDesigningPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceHero
        image={heroImg}
        lead="Engaging visuals that make your brand unforgettable."
        title="Graphic Designing & Video Editing Services in Delhi"
        intro={
          <p>
            <span className="text-white">
              Looking for professional graphic designing services in Delhi for
              your business?
            </span>{" "}
            Bigwig Media Digital helps businesses create attractive designs and
            engaging videos that support their brand identity and marketing
            goals.
          </p>
        }
        cta="Get a Free Quote"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Graphic Designing & Video Editing services and would like to discuss more."
        formSource="graphic-hero"
        formServices={["Graphic Designing"]}
      />

      <ServiceStatement
        heading="Professional Graphic Designing Services in Delhi"
        lead="Your brand's visual identity plays an important role in how people recognise and remember your business."
        rest="Our graphic designing services in Delhi help businesses communicate their message through clear, creative and professional designs."
        body={
          <p>
            We create visual content for branding, marketing campaigns, social
            media and other business requirements. Every design is planned
            around your brand style, target audience and purpose.
            <br />
            <br />
            Whether you need a new logo, promotional graphics or creative social
            media posts, we help you present your business consistently across
            different platforms.
          </p>
        }
        cta="Get a free design sample"
        source="graphic-intro"
        image={{
          src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
          alt: "Adobe creative apps on a tablet beside a design playbook",
        }}
      />

      <StaticWorkGallery
        lead="Designs That Speak Louder Than Words"
        title="Our Graphic Design Portfolio"
        intro="Explore our graphic design portfolio to see examples of creative work across different design categories. Our projects demonstrate how visual design can support branding, marketing and online communication."
        cta="Get a Graphic Design Quote"
        source="graphic-gallery"
        posts={designWork}
      />

      <ServiceCarousel
        id="graphic-services"
        lead="Our expertise"
        title="Creative Graphic Design Solutions for Your Business"
        intro="Every business needs strong visuals to communicate with its audience. Our graphic design solutions help you maintain a professional and consistent brand image across digital platforms and marketing materials."
        items={designServices}
        cta="Discuss your design needs"
        source="graphic-services"
      />

      <ServiceTimeline
        id="graphic-process"
        heading="Our Graphic Design Process"
        lead="We follow a clear process to understand your requirements and deliver designs that match your business goals."
        rest="Each project is handled according to its scope, timeline and deliverables."
        steps={process}
        cta="Get a Graphic Design Quote"
        source="graphic-process"
      />

      {/* SECTION 6 — WHY CHOOSE US FOR GRAPHIC DESIGNING */}
      <ServiceArticle
        lead="Why Bigwig Media Digital"
        title="Why Choose Bigwig Media Digital for Graphic Designing?"
        cta="Talk to Our Team"
        source="graphic-design-why-choose-us"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              Choosing the right design partner can help your business build a
              consistent and professional visual identity. We focus on
              understanding your needs and creating designs that suit your brand
              and marketing objectives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Designs That Match Your Brand
                </h3>
                <p className="text-sm text-gray-700">
                  We consider your brand style, target audience and business
                  goals before developing design concepts.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Creative and Clear Visuals
                </h3>
                <p className="text-sm text-gray-700">
                  We aim to create designs that communicate your message clearly
                  and help your audience understand your business.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Solutions for Different Business Needs
                </h3>
                <p className="text-sm text-gray-700">
                  From logo design to social media graphics and promotional
                  materials, we can help with a range of visual design
                  requirements.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  A Clear Working Process
                </h3>
                <p className="text-sm text-gray-700">
                  We discuss project scope, timelines, deliverables and revision
                  terms before beginning the work.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Graphic Design and Video Editing Support
                </h3>
                <p className="text-sm text-gray-700">
                  You can discuss both graphic design and video editing
                  requirements with our team to maintain a consistent visual
                  style across your marketing content.
                </p>
              </div>
            </div>
          </>
        }
      />

      <ServiceStatement
        heading="Professional Video Editing Services in Delhi"
        lead="Videos help businesses explain their services, promote products and connect with their audience."
        rest="Our video editing services in Delhi help turn raw footage into clear and engaging videos for business communication and digital marketing."
        body={
          <p>
            We work on different types of video projects, including promotional
            videos, corporate videos, social media content and event videos.
            Depending on your requirements, editing may include clip
            arrangement, transitions, text overlays, audio adjustments and
            visual effects.
            <br />
            <br />
            Whether you need videos for your website, YouTube channel, Instagram
            or a marketing campaign, we work to understand your goals and the
            type of content you want to create.
          </p>
        }
        cta="Get a free video editing consultation"
        source="graphic-video-intro"
        image={{
          src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
          alt: "Video editing timeline on a monitor",
        }}
      />

      {/* SECTION 8 — TYPES OF VIDEO EDITING SERVICES */}
      <ServiceArticle
        lead="Video Solutions"
        title="Video Editing Solutions for Different Needs"
        cta="Discuss Your Video Project"
        source="video-editing-solutions"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              Different videos serve different purposes. We provide video
              editing solutions based on your content, target audience, platform
              and project requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Corporate and Business Video Editing
                </h3>
                <p className="text-sm text-gray-700">
                  Create professional videos for company introductions, business
                  presentations, service explanations and internal
                  communication. Editing may include clip arrangement, titles,
                  transitions and audio adjustments.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Promotional and Marketing Video Editing
                </h3>
                <p className="text-sm text-gray-700">
                  Present your products, services and campaigns through
                  promotional videos. We help organise footage and highlight key
                  messages to suit your marketing objectives.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Social Media Video Editing
                </h3>
                <p className="text-sm text-gray-700">
                  Create short-form videos for platforms such as Instagram Reels
                  and YouTube Shorts. Depending on your brief, editing can
                  include vertical formatting, captions, text overlays and
                  transitions.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Event Video Editing
                </h3>
                <p className="text-sm text-gray-700">
                  Turn event footage into an organised video that captures
                  important moments. This service may suit business events,
                  product launches, celebrations and other occasions.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Motion Graphics and Animated Videos
                </h3>
                <p className="text-sm text-gray-700">
                  Make your message more engaging with animated text, graphic
                  elements and motion-based visuals. The style and complexity
                  depend on your project requirements.
                </p>
              </div>
            </div>
          </>
        }
      />

      {/* SECTION 9 — WHY CHOOSE US FOR VIDEO EDITING */}
      <ServiceArticle
        lead="Video Editing Expertise"
        title="Why Choose Bigwig Media Digital for Video Editing?"
        cta="Request a Video Editing Quote"
        source="video-editing-why-choose-us"
        body={
          <>
            <p className="mb-6 font-medium text-gray-800">
              A well-edited video can help communicate your message clearly and
              hold your audience&apos;s attention. We consider your content,
              target audience and publishing platform when planning a video
              editing project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Editing Based on Your Goals
                </h3>
                <p className="text-sm text-gray-700">
                  We consider whether your video is intended for marketing,
                  social media, business communication or another purpose.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Platform-Ready Video Formats
                </h3>
                <p className="text-sm text-gray-700">
                  We can prepare videos in agreed aspect ratios, resolutions and
                  file formats based on where you plan to publish them.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clear Communication
                </h3>
                <p className="text-sm text-gray-700">
                  We discuss project scope, delivery timelines, required files
                  and the feedback process before starting the edit.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consistent Brand Style
                </h3>
                <p className="text-sm text-gray-700">
                  We aim to keep your videos visually consistent with your brand
                  identity and other marketing materials.
                </p>
              </div>

              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Project-Based Editing Solutions
                </h3>
                <p className="text-sm text-gray-700">
                  Share your footage, references and objectives with us so we
                  can understand the editing support your project requires.
                </p>
              </div>
            </div>
          </>
        }
      />

      <ServiceFaq
        title="Frequently Asked Questions About Graphic Design and Video Editing"
        faqs={faqs}
        source="graphic-faq"
      />

      <OtherServices current={PATH} />
    </main>
  );
}
