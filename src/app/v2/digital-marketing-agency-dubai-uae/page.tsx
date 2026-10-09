import type { Metadata } from "next";
import ContactBar from "../../../../components/dubai-v2/ContactBar";
import RealEstateAbout from "../../../../components/dubai-v2/RealEstateAbout";
import RealEstateCta from "../../../../components/dubai-v2/RealEstateCta";
import RealEstateHero from "../../../../components/dubai-v2/RealEstateHero";
import RealEstateIndustries from "../../../../components/dubai-v2/RealEstateIndustries";
import RealEstateServices from "../../../../components/dubai-v2/RealEstateServices";
import RealEstateShowcase from "../../../../components/dubai-v2/RealEstateShowcase";
import RealEstateTestimonials from "../../../../components/dubai-v2/RealEstateTestimonials";
import ClientStrip from "../../../../components/ui/ClientStrip";
import { dubaiClients } from "@/data/clients";

// Real-estate-focused v2 of /digital-marketing-agency-dubai-uae. Kept out of search (and canonical to the live
// page) until it replaces v1.
const title = "Real Estate Digital Marketing Agency in Dubai | Bigwig Media Digital";
const description =
  "High-converting websites, targeted social media campaigns and top-ranking SEO for Dubai real estate developers and brokerages. Get a free consultation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/digital-marketing-agency-dubai-uae" },
  robots: { index: false, follow: true },
};

export default function DubaiRealEstatePageV2() {
  return (
    <main>
      <RealEstateHero />
      <ClientStrip clients={dubaiClients} label="Property brands we work with" />
      <RealEstateAbout />
      <RealEstateShowcase />
      <div className="h-2 md:h-3" />
      <RealEstateTestimonials />
      <RealEstateIndustries />
      <RealEstateServices />
      <RealEstateCta />
      <ContactBar />
    </main>
  );
}
