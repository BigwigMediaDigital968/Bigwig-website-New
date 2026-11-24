import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import Partners from "../../components/home/Partners";
import About from "../../components/home/About";
import Clients from "../../components/home/Clients";
import Steps from "../../components/home/Steps";
import Services from "../../components/home/Services";
import { faqs } from "@/data/homeData";


// below-the-fold sections load as separate chunks (still server-rendered)
const Testimonials = dynamic(() => import("../../components/home/Testimonials"));
const CaseStudies = dynamic(() => import("../../components/home/CaseStudies"));
const Blogs = dynamic(() => import("../../components/home/Blog"));
const FAQ = dynamic(() => import("../../components/home/Faq"));

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
  description:
    "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 5+ Years | 50+ Clients. Get a Free Strategy Session!",
  keywords:
    "digital marketing agency in Delhi, best digital marketing company Delhi, SEO company in Delhi, social media Optimization agency Delhi, website development company Delhi, performance marketing agency Delhi, online marketing services Delhi",
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Delhi | Bigwig Media Digital",
    description:
      "Top-rated Digital Marketing Agency in Delhi. SEO, PPC, SMM & Web Dev. Google Partner | 5+ Years | 500+ Clients. Get a Free Strategy Session!",
    url: "https://www.bigwigmediadigital.com/",
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
