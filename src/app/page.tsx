import type { Metadata } from "next";
import Script from "next/script";

import Nav from "../../components/layout/Nav";
import Hero from "../../components/home/Hero";
import Partners from "../../components/home/Partners";
import About from "../../components/home/About";
import Clients from "../../components/home/Clients";
import Steps from "../../components/home/Steps";
import Services from "../../components/home/Services";
import Testimonials from "../../components/home/Testimonials";
import CaseStudies from "../../components/home/CaseStudies";
import Blogs from "../../components/home/Blog";
import FAQ from "../../components/home/Faq";
import Footer from "../../components/layout/Footer";
import { faqs } from "@/data/homeData";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
  description:
    "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 8+ Years | 500+ Clients. Get a Free Strategy Session!",
  keywords:
    "digital marketing agency in Delhi, best digital marketing company Delhi, SEO company in Delhi, social media marketing agency Delhi, website development company Delhi, performance marketing agency Delhi, online marketing services Delhi",
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
    description:
      "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 8+ Years | 500+ Clients. Get a Free Strategy Session!",
    url: "https://www.bigwigmediadigital.com/",
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032818/WhatsApp_Image_2026-02-02_at_4.12.04_PM_ac0qj8.jpg",
      },
    ],
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };

  return (
    <>
      {/* FAQ JSON-LD ONLY FOR HOME PAGE */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* nav floats over the hero video on the homepage only */}
        <Hero />
        <Partners />
        <About />
        <Clients />
        <Steps />
        <Services />
        <Testimonials />
        <CaseStudies />
        <Blogs />
        <FAQ />
    </>
  );
}
