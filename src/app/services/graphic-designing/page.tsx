import type { Metadata } from "next";
import heroImg from "../../../../Assets/Services hero/Graphic_Design.jpg";
import ServiceHero from "../../../../components/service/ServiceHero";
import {
  OtherServices,
  ServiceArticle,
  ServiceCarousel,
  ServiceFaq,
  ServiceSplitCarousel,
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
const title = "Graphic Designing Services in Delhi | Bigwig Media Digital";
const description =
  "Premium Graphic Designing Services in Delhi; logos, social creatives, brand kits & video editing for high-impact campaigns. Get a Free Sample!";

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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=1500&q=80",
    alt: "Colour swatches beside a tablet with colour sketches",
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&h=1500&q=80",
    alt: "Icon set in a design book beside a tablet and stylus",
  },
  {
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=1200&h=1200&q=80",
    alt: "Abstract 3D ribbon in blue and violet",
  },
  {
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&h=1200&q=80",
    alt: "Blueprint-style website wireframe",
  },
  {
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&h=1200&q=80",
    alt: "Soft 3D render of pastel spheres",
  },
  {
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&h=1200&q=80",
    alt: "Vivid colour gradient study",
  },
];

const designServices: ServiceItem[] = [
  {
    title: "Complete Branding Solutions",
    desc: "Logo design · Brand guidelines · Brand identity systems",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Letter A type sketch on a tablet beside a brand guidelines book",
  },
  {
    title: "Marketing & Promotional Design",
    desc: "Brochures & flyers · Posters & banners · Catalogues & print ads",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Designer drawing on a pen tablet beside colour swatches",
  },
  {
    title: "Digital & Social Media Graphics",
    desc: "Instagram creatives · Facebook ads · YouTube thumbnails · Carousel designs",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Glossy 3D Instagram icon",
  },
  {
    title: "Packaging & Product Design",
    desc: "Labels · Boxes · Custom packaging visuals",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Red and black branded shopping bags",
  },
  {
    title: "UI/UX Graphics",
    desc: "Website layout graphics · App screens · Interface visuals",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mobile app screen designs on a desktop monitor",
  },
];

const process = [
  {
    title: "Research & creative strategy",
    desc: "We start with your goals, audience and style preferences, then study your market and competitors to set a clear creative direction.",
  },
  {
    title: "Concept development",
    desc: "Rough concepts, moodboards and wireframes let us agree the idea before any pixel is polished.",
  },
  {
    title: "Design execution",
    desc: "Our designers build the final artwork in industry-standard tools, true to your brand’s colours, type and voice.",
  },
  {
    title: "Revisions & refinements",
    desc: "You share feedback and we refine. Revision rounds are included until the work matches your vision.",
  },
  {
    title: "Final delivery with brand consistency",
    desc: "Print- and screen-ready files in every format you need, consistent with the rest of your brand.",
  },
];

const videoServices: ServiceItem[] = [
  {
    title: "Corporate & Business Videos",
    desc: "Corporate profiles · Training videos · Employee orientation videos",
  },
  {
    title: "Promotional & Marketing Videos",
    desc: "Brand promo videos · Product ads · YouTube ads",
  },
  {
    title: "Social Media Video Editing",
    desc: "Reels · Shorts · TikTok edits · Influencer videos",
  },
  {
    title: "Event Video Editing",
    desc: "Weddings · Corporate events · Award ceremonies · Launch events",
  },
  {
    title: "Motion Graphics & Animation Editing",
    desc: "Explainer videos · Infographic animations · Title animations · Logo reveal animations",
  },
];

const videoReasons = [
  "Fast turnaround times without compromising on quality.",
  "Cinematic storytelling that keeps viewers engaged from start to finish.",
  "Professional sound mixing for clean, impactful audio output.",
  "High-quality transitions and visual enhancements using industry-leading tools.",
  "Expertise across multiple industries, from corporate to lifestyle to e-commerce.",
  "Customized video editing styles tailored to your brand identity and audience.",
  "Motion graphics and animation capabilities for added visual appeal.",
  "Consistent communication and reliable project management throughout the process.",
  "Multiple revision rounds to ensure complete client satisfaction.",
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What services do you offer in graphic designing and video editing?",
    a: "We provide complete creative solutions including logo design, branding, social media creatives, brochures, packaging, promotional videos, reels, corporate films, product videos, and motion graphics.",
  },
  {
    q: "How do you start a graphic designing or video editing project?",
    a: "Our process begins with understanding your goals, audience, and style preferences. Then we move into concept creation, design/editing development, revisions, and final delivery.",
  },
  {
    q: "What makes your creative agency in Delhi different from others?",
    a: "We offer a rare combination of high-quality graphic designing and professional video editing, ensuring your brand visuals stay consistent across all platforms. Our strategies are data-driven, creative, and tailored to each brand.",
  },
  {
    q: "Can I provide input during the design or editing process?",
    a: "Yes! We encourage collaboration. You can share references, feedback, and changes throughout the project to ensure the final result matches your vision.",
  },
  {
    q: "How long does it take to complete a graphic design or video edit?",
    a: "Basic graphic designs are usually delivered within 2–4 days, while video edits take 2–7 days depending on complexity. Urgent projects are also handled on priority.",
  },
  {
    q: "What is your pricing structure?",
    a: "Pricing depends on project type, complexity, duration, and deliverables. We offer one-time projects as well as monthly creative packages for brands needing regular content.",
  },
  {
    q: "Do you offer revisions if I’m not satisfied with the initial work?",
    a: "Yes, we include revision rounds for both graphic designs and video edits to ensure you receive the perfect final output.",
  },
  {
    q: "What file formats will I receive for designs and videos?",
    a: "Graphic designs are delivered in JPG, PNG, PDF, AI, EPS, or SVG formats, while videos are delivered in high-quality MP4, MOV, or the format of your choice.",
  },
  {
    q: "Do you offer custom packages for graphic designing and video editing together?",
    a: "Yes, we create combined packages specially designed for brands that require both visuals and video content on a monthly or project basis.",
  },
  {
    q: "Will the final designs and videos reflect my brand identity?",
    a: "Absolutely. Every design and video is created from scratch with your brand’s voice, colors, message, and target audience in mind.",
  },
  {
    q: "How do I get started with your services?",
    a: "Simply contact us with your requirements, share your content, and our team will guide you through the process from planning to delivery.",
  },
  {
    q: "I’m not located in Delhi, can I still work with your agency?",
    a: "Yes! We work with clients across India and internationally. Everything can be coordinated online, including briefings, feedback, and final delivery.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function GraphicDesigningPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ServiceHero
        image={heroImg}
        lead="Graphic designing & video editing"
        title="Top Graphic Designing & Video Editing Company in Delhi"
        intro={
          <p>
            <span className="text-white">Visuals that tell your story, and videos that make people stay.</span> From
            logos and social creatives to corporate films and Reels, our creative team helps brands stand out with
            designs and edits delivered with quality, speed, and fresh ideas.
          </p>
        }
        cta="Get a free creative consultation"
        whatsappMessage="Hi BigWig Media Digital! I'm interested in your Graphic Designing & Video Editing services and would like to discuss more."
        formSource="graphic-hero"
        formServices={["Graphic Designing"]}
      />

      <ServiceStatement
        heading="Leading Graphic Designing Company in Delhi"
        lead="We create visually powerful designs that help brands communicate with clarity, creativity, and impact."
        rest="Our designers blend strategy with aesthetics to craft logos, branding, marketing materials, and digital creatives that truly represent your brand’s personality."
        body={
          <p>
            From startups to established businesses, we deliver end-to-end graphic design that enhances visibility,
            builds trust, and drives engagement across every platform. As a reliable graphic designing agency in Delhi,
            we focus on originality, attention to detail, and timely delivery, so every design looks stunning and
            supports your business goals.
          </p>
        }
        cta="Get a free design sample"
        source="graphic-intro"
        image={{ src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80", alt: "Adobe creative apps on a tablet beside a design playbook" }}
      />

      <StaticWorkGallery
        lead="Design work"
        title="Designs That Speak Louder Than Words"
        intro="Brand systems, colour studies, layouts and 3D visuals. A glimpse of the craft our designers bring to every project."
        cta="Start your design project"
        source="graphic-gallery"
        posts={designWork}
      />

      <ServiceCarousel
        id="graphic-services"
        lead="Our expertise"
        title="Our Expertise in Graphic Designing in Delhi"
        intro="Every brand has a unique voice. Our designers work closely with you to translate it into visuals that are both striking and strategic, from brand identity to digital creatives, packaging, marketing collateral, and UI graphics."
        items={designServices}
        cta="Discuss your design needs"
        source="graphic-services"
      />

      <ServiceTimeline
        id="graphic-process"
        heading="Our Graphic Designing Process"
        lead="Five clear steps from first brief to final files."
        rest="You stay involved at every stage, so there are no surprises at the end."
        steps={process}
        cta="Start your design project"
        source="graphic-process"
      />

      <ServiceArticle
        lead="Why us"
        title="Why We Are the Most Trusted Graphic Designing Agency in Delhi"
        cta="Book a free creative consultation"
        source="graphic-why-us"
        body={
          <>
            <p>
              Clients choose us because we go beyond basic visuals. Every design is crafted with purpose, backed by
              research, and aligned with your brand’s identity and goals. We stay committed to originality, so each
              concept is tailored uniquely to your business.
            </p>
            <p>
              Seamless communication, timely delivery, and a professional workflow make the whole process smooth and
              reliable. Whether it’s building a brand from scratch or refreshing an existing identity, we deliver
              end-to-end design excellence that consistently exceeds expectations. That dedication to quality,
              creativity, and client satisfaction is what makes us one of the most trusted graphic designing partners
              in Delhi.
            </p>
          </>
        }
      />

      <ServiceStatement
        heading="Professional Video Editing Company in Delhi"
        lead="We turn raw footage into high-quality, engaging videos that elevate your brand’s story."
        rest="Our editors combine creativity with technical precision in Adobe Premiere Pro, Final Cut Pro, and After Effects for seamless transitions, crisp audio, dynamic effects, and impactful storytelling."
        body={
          <p>
            Whether you need corporate videos, promotional content, YouTube edits, social media Reels, or event
            highlights, every video is crafted with clarity, purpose, and a professional finish.
          </p>
        }
        cta="Get a free video editing consultation"
        source="graphic-video-intro"
        image={{ src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80", alt: "Video editing timeline on a monitor" }}
      />

      <ServiceSplitCarousel
        id="graphic-video-services"
        lead="Video editing in Delhi"
        title="Comprehensive Video Editing for Every Industry"
        intro="Corporate brands, e-commerce, real estate, education, or creators: each sector needs its own storytelling style, and our editors tailor the pacing, messaging, and sound design to match."
        items={videoServices}
        cta="Start your video project"
        source="graphic-video-services"
      />

      <ServiceArticle
        lead="Why choose us"
        title="Why Choose Us as Your Video Editing Agency in Delhi"
        cta="Book a free creative consultation"
        source="graphic-video-why-us"
        image={{ src: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1000&q=80", alt: "Projector beam in a dark screening room" }}
        body={
          <>
            <p>
              The right video editing agency makes all the difference in how your brand is seen, heard, and remembered.
              We combine creativity, technical expertise, and strategic storytelling to bring raw footage to life with
              precision editing, polished transitions, cinematic visuals, and impactful audio, delivered on time and
              aligned with your marketing goals.
            </p>
            <h3 className="pt-2 text-xl font-semibold tracking-tight text-[var(--ink)]">Key reasons to choose us</h3>
            <ul className="space-y-3">
              {videoReasons.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--teal)]" />
                  {r}
                </li>
              ))}
            </ul>
          </>
        }
      />

      <ServiceFaq title="Graphic design & video editing, answered" faqs={faqs} source="graphic-faq" />

      <OtherServices current={PATH} />
    </main>
  );
}
