import type { Metadata } from "next";
import FaqIndex from "../../../components/faq/FaqIndex";
import { faqTopics } from "@/data/faqData";

const title = "FAQs | Digital Marketing Agency in Delhi | Bigwig Media Digital";
const description =
  "Find answers to common questions about SEO, PPC, SMM & Web Development services by Bigwig Media Digital, Delhi's trusted digital agency.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/faq" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/faq",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqTopics.flatMap((t) =>
    t.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqIndex />
    </>
  );
}
