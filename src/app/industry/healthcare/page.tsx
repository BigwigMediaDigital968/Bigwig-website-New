import type { Metadata } from "next";
import {
  Activity,
  Baby,
  Bone,
  Building2,
  CalendarCheck,
  ClipboardList,
  HandHeart,
  Hospital,
  LineChart,
  MapPin,
  Megaphone,
  MessageCircle,
  Microscope,
  Rocket,
  Search,
  Share2,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Video,
  Wrench,
} from "lucide-react";
import {
  ServiceCards,
  ServiceFaq,
  ServiceTimeline,
  type ServiceFaqItem,
  type ServiceItem,
} from "../../../../components/service/ServiceSections";
import { RelatedLinks, WhyGrid } from "../../../../components/industry/real-estate/Sections";
import {
  CompliancePanel,
  HealthcareCta,
  HealthcareHero,
  HealthcareServiceTabs,
  HealthcareStats,
  HealthcareTrust,
  HealthcareWorkGrid,
  LocalNcr,
  ServeChips,
  WhySpecialist,
  type HealthcareWork,
  type ServiceTab,
} from "../../../../components/industry/healthcare/Sections";

const PATH = "/industry/healthcare";
const URL = `https://www.bigwigmediadigital.com${PATH}`;
const title = "Healthcare Digital Marketing Agency in Delhi | Bigwig Media";
const description =
  "Bigwig Media Digital builds doctor and hospital websites and runs SEO, social media, local promotion and reputation management that bring patient enquiries.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://www.bigwigmediadigital.com/og-bigwig.png" }],
  },
};

// Free Unsplash photos, linked directly (images.unsplash.com is allowed in next.config). Swap for your own photography later.

// Page-only palette, set on <main> so no other page changes.
// --hc-teal is the brief's #1AA6A6 deepened to pass WCAG contrast as text (5:1 on white).
// --teal overrides the site teal for this page only: the shared card and timeline numbers use it,
// and #54acbf is too light on white (2.6:1).
const palette = {
  "--hc-deep": "#0B3C5D",
  "--hc-teal": "#0E7C7C",
  "--teal": "#2E7D8F",
  "--hc-bg": "#F6FAFB",
  "--hc-cta": "#F57A5B",
} as React.CSSProperties;

const trustLogos = [
  { name: "Dr. Manish Aggarwal", src: "/clients-logo/drmanishaggarwal.png", href: "https://www.drmanishaggarwal.com/" },
  { name: "Dr. Himanshu Verma", src: "/clients-logo/dr.himanshu1.png", href: "https://www.drhimanshuverma.com/" },
  { name: "AVF Care Workshop", src: "/clients-logo/avfcareworkshop.png", href: "https://avfcareworkshop.com/" },
  { name: "MSMC", src: "/clients-logo/msmc.png" },
];

const reasons = [
  {
    title: "Trust comes first",
    desc: "Clear credentials, honest information and genuine reviews help patients feel confident.",
  },
  {
    title: "Patients search locally",
    desc: 'They look for a treatment plus an area, such as "pulmonologist in Pitampura". We build for those searches.',
  },
  {
    title: "Every enquiry needs follow-up",
    desc: "Calls, forms and WhatsApp messages are tracked so none are lost.",
  },
];

const platformServices: ServiceItem[] = [
  { title: "Doctor and Clinic Websites", desc: "Professional sites with credentials, services, reviews and appointment forms." },
  { title: "Hospital and Multi-Department Websites", desc: "Structured sites for departments, doctors and branches." },
  { title: "Condition, Symptom and Procedure Pages", desc: "Clear educational pages that match what patients search for." },
  { title: "Appointment Booking and Callback Forms", desc: "Simple booking, second-opinion and callback flows." },
  { title: "WhatsApp and Click-to-Call Integration", desc: "Instant contact on every page." },
  { title: "Patient Education Hubs", desc: "Blogs, videos, podcast pages and downloadable guides." },
  { title: "Web Apps and Patient Tools", desc: "Self-check tools, diet planners and workshop registration." },
  {
    title: "Speed, Security and Compliance Pages",
    desc: "Fast hosting, SSL, privacy policy, medical disclaimer and editorial policy.",
  },
];

const marketingTabs: ServiceTab[] = [
  {
    name: "Healthcare SEO",
    icon: <Search size={18} />,
    desc: 'We rank your practice for condition, treatment and "doctor near me" searches with keyword research, on-page and technical SEO, schema markup and patient-friendly content.',
    benefit: "more patients find you without paying for every click.",
    image: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70", alt: "Healthcare SEO analytics dashboard on a laptop" },
  },
  {
    name: "Social Media Marketing",
    icon: <Share2 size={18} />,
    desc: "Educational posts, short reels and doctor branding on Instagram, Facebook, LinkedIn and YouTube.",
    benefit: "build awareness and trust, with content approved by the doctor.",
    image: { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70", alt: "Social media apps on a smartphone" },
  },
  {
    name: "Local Promotion",
    icon: <MapPin size={18} />,
    desc: "Google Business Profile setup and optimisation, maps ranking, local citations and area pages for each clinic or branch.",
    benefit: "appear when patients search nearby.",
    image: { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=70", alt: "Bright clinic reception for local patients" },
  },
  {
    name: "Online Reputation Management",
    icon: <Star size={18} />,
    desc: "Genuine review generation, professional replies and monitoring across Google and other platforms, within platform and medical advertising rules.",
    benefit: "a stronger first impression.",
    image: { src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=70", alt: "Doctor caring for a smiling patient" },
  },
  {
    name: "Paid Advertising",
    icon: <Megaphone size={18} />,
    desc: "Google Ads and Meta Ads for specific treatments, with focused landing pages and call and form tracking.",
    benefit: "faster enquiries while SEO builds.",
    image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70", alt: "Healthcare SEO and local marketing performance dashboard" },
  },
  {
    name: "Content and Video",
    icon: <Video size={18} />,
    desc: "Patient education blogs, FAQs, doctor introduction videos and explainer videos.",
    benefit: "answers patient questions and builds authority.",
    image: { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=70", alt: "Doctor explaining treatment to a patient" },
  },
  {
    name: "Email and WhatsApp Follow-up",
    icon: <MessageCircle size={18} />,
    desc: "Reminders, follow-up messages and educational updates for people who agreed to hear from you.",
    benefit: "fewer missed appointments.",
    image: { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70", alt: "Doctor sending a follow-up message on a phone" },
  },
];

const ncrSetup = [
  "Google Business Profile with services, photos, posts and Q&A",
  "Location pages for each clinic or branch",
  "Consistent name, address and phone details across directories",
  "Review requests that follow platform rules",
  "Area-based content and FAQs",
];

const ncrAreas = ["Delhi", "Gurgaon", "Noida", "Pitampura", "Shalimar Bagh", "Dwarka", "Rohini", "South Delhi", "West Delhi"];

// add an href to a chip once its specialty page is published
const serveChips = [
  { label: "Doctors and surgeons", icon: <Stethoscope size={18} /> },
  { label: "Clinics", icon: <Building2 size={18} /> },
  { label: "Hospitals", icon: <Hospital size={18} /> },
  { label: "Diagnostic and sleep centres", icon: <Microscope size={18} /> },
  { label: "Dentists", icon: <Smile size={18} /> },
  { label: "Dermatologists", icon: <Sparkles size={18} /> },
  { label: "IVF and fertility clinics", icon: <Baby size={18} /> },
  { label: "Orthopaedic centres", icon: <Bone size={18} /> },
  { label: "Healthcare programmes and NGOs", icon: <HandHeart size={18} /> },
  { label: "Health-tech startups", icon: <Rocket size={18} /> },
];

// Results are our own published SEO figures (src/app/portfolio/component/SEOPortfolio.tsx), not clinical outcomes.
const work: HealthcareWork[] = [
  {
    name: "Dr. Manish Aggarwal",
    specialty: "Pulmonology and sleep medicine, Delhi",
    built:
      "A website organised around symptoms, diseases, procedures and sleep care, with an appointment form, WhatsApp contact, FAQ, patient testimonials, blogs and case studies.",
    tags: ["Website design and development", "SEO"],
    site: "https://www.drmanishaggarwal.com/",
    image: "/industry/healthcare/drmanishaggarwal.jpg",
    result: { value: "14.7K", label: "search impressions in the first 3 months" },
  },
  {
    name: "Dr. Himanshu Verma",
    specialty: "Vascular and endovascular surgery, Gurgaon",
    built:
      "A site with around 19 condition-level service pages, a second-opinion and callback flow, a podcast and workshop hub, media coverage, patient stories tagged by condition, and medical disclaimer and editorial policy pages.",
    tags: ["Website design and development", "SEO"],
    site: "https://www.drhimanshuverma.com/",
    image: "/industry/healthcare/drhimanshuverma.jpg",
    result: { value: "648", label: "organic clicks in the first 3 months" },
  },
  {
    name: "AVF Care Workshop",
    specialty: "Patient education for dialysis patients and caregivers",
    built:
      "An education corner, a self-examination guide, links to two patient web apps, workshop registration, a fellowship application and an outcomes section, built and managed by us.",
    tags: ["Website development", "Ongoing management"],
    site: "https://avfcareworkshop.com/",
    image: "/industry/healthcare/avfcareworkshop.jpg",
  },
  {
    name: "MSMC",
    specialty: "Listing platform for hospitals and doctors, India",
    built: "A listing platform that helps patients find hospitals and doctors across India.",
    tags: ["Healthcare platform"],
    logo: { src: "/clients-logo/trimmed/msmc.png", width: 400, height: 400 },
  },
];

const process = [
  { title: "Audit", desc: "We review your website, Google profile, social media, reviews and competitors." },
  { title: "Strategy", desc: "We plan keywords, pages, channels and the enquiry journey around your speciality and area." },
  { title: "Build", desc: "We design and develop the website, pages, forms and tracking." },
  { title: "Launch", desc: "We start SEO, local promotion, social media and ads in a clear sequence." },
  { title: "Track and improve", desc: "We report on calls, forms, WhatsApp enquiries and appointments, and keep improving." },
];

const compliance = [
  "Content is reviewed and approved by the doctor before publishing.",
  "We make no guaranteed-result or medical outcome claims.",
  "We avoid misleading superlatives and follow medical advertising guidelines and platform policies.",
  "Patient testimonials are used only with consent.",
  "We never buy, sell or share patient lists.",
  "Patient data is handled with privacy in mind.",
];

const whyUs = [
  {
    icon: <Wrench size={20} />,
    title: "Website and marketing under one roof",
    desc: "One team builds and promotes your platform.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Healthcare-specific structure",
    desc: "Condition, procedure and location pages built around how patients search.",
  },
  {
    icon: <CalendarCheck size={20} />,
    title: "Tracked to appointments",
    desc: "We report on calls and bookings, not only clicks.",
  },
  {
    icon: <LineChart size={20} />,
    title: "Transparent monthly reporting",
    desc: "Simple reports you can review in minutes.",
  },
  {
    icon: <UserRound size={20} />,
    title: "Dedicated account manager",
    desc: "One point of contact for your practice.",
  },
  {
    icon: <Activity size={20} />,
    title: "Ongoing management",
    desc: "We maintain and improve your site, as we do for AVF Care Workshop.",
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: "What does a healthcare digital marketing agency do?",
    a: "It helps doctors, clinics and hospitals get found online and contacted by patients. This includes website development, SEO, local SEO, social media, paid ads, content and reputation management.",
  },
  {
    q: "How can digital marketing help doctors get more patients?",
    a: "Patients search online for symptoms, treatments and doctors near them. SEO, Google Business Profile and a clear website help your practice appear in those searches. Easy booking and fast follow-up turn visits into appointments.",
  },
  {
    q: "How much does a doctor or hospital website cost?",
    a: "The cost depends on the number of pages, features such as booking and integrations, and content needs. A single-doctor site costs less than a multi-department hospital site. Share your requirements and we will send a free quote.",
  },
  {
    q: "How long does SEO take to work for a clinic?",
    a: "SEO usually takes several months to build lasting rankings. Paid ads can bring enquiries sooner. Results vary and cannot be guaranteed.",
  },
  {
    q: "What is local SEO for doctors?",
    a: 'Local SEO helps your practice appear in map results and "near me" searches. It includes your Google Business Profile, location pages, directory listings and reviews.',
  },
  {
    q: "How do you manage online reviews without breaking any rules?",
    a: "We encourage genuine patient feedback, reply professionally, and never post fake reviews or offer incentives that platforms prohibit. We do not share confidential patient details in replies.",
  },
  {
    q: "Do you work with individual doctors as well as hospitals?",
    a: "Yes. We work with individual specialists, clinics, hospitals and healthcare programmes. The plan is scaled to your size and goals.",
  },
  {
    q: "Can you add appointment booking and WhatsApp to the website?",
    a: "Yes. We add booking forms, callback and second-opinion requests, click-to-call and WhatsApp buttons, and set up tracking for each.",
  },
  {
    q: "How do you measure results?",
    a: "We track organic traffic, keyword rankings, calls, form and WhatsApp enquiries, direction requests, reviews and, where possible, appointments.",
  },
  {
    q: "Do you follow medical advertising guidelines?",
    a: "Yes. We avoid guaranteed-outcome claims, get doctor approval on content, and follow applicable advertising rules and platform policies.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Website Development & Digital Marketing",
    serviceType: "Healthcare digital marketing and website development",
    url: URL,
    provider: {
      "@type": "Organization",
      name: "Bigwig Media Digital",
      url: "https://www.bigwigmediadigital.com",
    },
    areaServed: ["Delhi", "Gurgaon", "Noida", "India"],
    audience: { "@type": "Audience", audienceType: "Doctors, clinics and hospitals" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bigwigmediadigital.com/" },
      { "@type": "ListItem", position: 2, name: "Healthcare Digital Marketing & Web Development", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const waMessage = "Hi BigWig Media Digital! I'd like a free audit of my clinic's website, Google profile and social media.";

export default function HealthcareIndustryPage() {
  return (
    <main style={palette}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HealthcareHero
        image={{ src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=70", alt: "Healthcare website development and digital marketing by Bigwig Media Digital" }}
        eyebrow="Healthcare digital marketing & web development"
        title="Healthcare Website Development & Digital Marketing for Doctors, Clinics and Hospitals"
        intro="We design patient-friendly websites and run SEO, social media, local promotion and reputation management that turn online searches into appointments."
        support="Websites and marketing for doctors in Delhi, Gurgaon and across India."
        cta={{ label: "Get a Free Website & SEO Audit", href: "/contact" }}
      />

      <HealthcareTrust label="Trusted by doctors and healthcare programmes" logos={trustLogos} />

      <WhySpecialist
        lead="Why healthcare needs a specialist agency"
        title="Why Doctors and Hospitals Need a Healthcare-Focused Digital Marketing Agency"
        body="Patients now search before they call. They look up symptoms, compare doctors, read Google reviews and check credentials before booking. A healthcare website has to answer their questions clearly, load fast on a phone and make booking simple. At Bigwig Media Digital, we combine website development with SEO, social media, local promotion and reputation management, so your practice is easy to find, easy to trust and easy to contact."
        reasons={reasons}
        image={{ src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=70", alt: "Patient searching for a doctor online" }}
      />

      <ServiceCards
        lead="Website and platform development"
        title="Healthcare Websites and Platforms Built for Patient Trust"
        intro={
          <>
            A doctor&apos;s website is often the first thing a patient sees. We build fast, secure, mobile-first sites that
            explain your services clearly and make booking effortless. Explore our{" "}
            <a href="/services/website-development-company-in-delhi" className="text-[var(--link)] underline underline-offset-4">
              doctor website design
            </a>{" "}
            services.
          </>
        }
        items={platformServices}
        promo={{
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70",
          alt: "Responsive doctor website design with appointment booking",
          text: "Fast, mobile-first doctor websites with booking built in.",
        }}
        cta="Get a free website quote"
        source="healthcare-platform"
      />

      <HealthcareServiceTabs
        lead="Digital marketing for healthcare"
        title="Healthcare Digital Marketing Services That Bring Patient Enquiries"
        intro="From search rankings to social media and reviews, we manage the channels patients use to find and choose a doctor."
        tabs={marketingTabs}
      />

      <LocalNcr
        lead="Local promotion"
        title="Local Marketing for Clinics and Hospitals in Delhi NCR"
        body={`Patients search by treatment and by area, such as "dentist in Dwarka" or "vascular surgeon in Gurgaon". We build local profiles, area pages and content so your practice shows up in the places you serve, and each branch gets its own profile and page.`}
        setup={ncrSetup}
        areas={ncrAreas}
      />

      <ServeChips lead="Who we serve" title="Digital Marketing for Every Kind of Healthcare Practice" chips={serveChips}
        gallery={[
          { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=70", alt: "Multi-speciality hospital building", label: "Hospitals" },
          { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=70", alt: "Modern dental clinic", label: "Dentists" },
          { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=70", alt: "Orthopaedic doctor reviewing an X-ray", label: "Orthopaedic centres" },
          { src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=600&q=70", alt: "Doctor checking a patient at a clinic", label: "Clinics" },
        ]}
      />

      <HealthcareWorkGrid
        lead="Our healthcare work"
        title="Healthcare Brands We Have Built and Grown Online"
        intro="From individual specialists to patient-education programmes, we create websites and marketing that build trust and make it easier for patients to take the next step."
        work={work}
      />

      <ServiceTimeline
        heading="How We Grow Your Healthcare Practice Online"
        lead="Our process."
        rest="Five steps from the first audit to steady, tracked growth in patient enquiries."
        steps={process}
      />

      <CompliancePanel
        title="Responsible Healthcare Marketing"
        body="Healthcare marketing needs more care than most industries. We follow a simple set of principles."
        points={compliance}
        image={{ src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=70", alt: "Caregiver holding a patient's hand" }}
      />

      <HealthcareStats
        items={[
          { value: "69.4K", label: "search impressions in 3 months for Dr. Himanshu Verma's new website" },
          { value: "648", label: "organic clicks in the same 3 months, from a site built from scratch" },
          { value: "14.7K", label: "search impressions in 3 months for Dr. Manish Aggarwal's website" },
          { value: "4", label: "healthcare brands built and grown online, shown on this page" },
        ]}
        note="Results vary by practice and market."
        quote={{
          text: "Bigwig Media Digital helped us establish a professional online presence that reflects our commitment to patient care while making it easier for patients to connect with us and book consultations.",
          by: "Dr. Himanshu Verma, Vascular and Endovascular Surgeon, Gurgaon",
        }}
      />

      <WhyGrid lead="Why Bigwig" title="Why Healthcare Professionals Choose Bigwig Media Digital" items={whyUs} />

      <ServiceFaq title="Frequently Asked Questions About Healthcare Digital Marketing" faqs={faqs} source="healthcare-faq" />

      <div className="pt-14 md:pt-20">
        <HealthcareCta
          title="Ready to Get More Patient Appointments?"
          text="Get a free audit of your website, Google profile and social media. We will show you what to improve first."
          smallPrint="Your details are kept private. We will only use them to contact you about your enquiry."
          whatsappMessage={waMessage}
          source="healthcare-audit"
        />
      </div>

      <RelatedLinks
        lead="Related services"
        title="Explore Our Healthcare Marketing Services"
        links={[
          { label: "Doctor website design", href: "/services/website-development-company-in-delhi" },
          { label: "Healthcare SEO services", href: "/services/search-engine-optimization" },
          { label: "Social media marketing for doctors", href: "/services/social-media-optimization" },
          { label: "Reputation management for hospitals", href: "/services/online-reputation-management" },
          { label: "Google Ads for clinics", href: "/services/performance-marketing" },
          { label: "Our portfolio", href: "/portfolio" },
          { label: "Blog", href: "/blogs" },
        ]}
      />
    </main>
  );
}
