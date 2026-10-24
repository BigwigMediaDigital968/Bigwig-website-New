import type { Metadata } from "next";
import BuyerMarkets from "../../../components/dubai-v3/BuyerMarkets";
import Faq from "../../../components/dubai-v3/Faq";
import FirstMonth from "../../../components/dubai-v3/FirstMonth";
import Hero from "../../../components/dubai-v3/Hero";
import OwnLeads from "../../../components/dubai-v3/OwnLeads";
import PlanBar from "../../../components/dubai-v3/PlanBar";
import PlanSection from "../../../components/dubai-v3/PlanSection";
import { PlannerProvider } from "../../../components/dubai-v3/Planner";
import Playbooks from "../../../components/dubai-v3/Playbooks";
import Reviews from "../../../components/dubai-v3/Reviews";
import Sectors from "../../../components/dubai-v3/Sectors";
import Services from "../../../components/dubai-v3/Services";
import Work from "../../../components/dubai-v3/Work";

// A light, single-goal lead page: every section leads to the growth-plan planner.
const title =
  "Digital Marketing Agency in Dubai | Bigwig Media Digital";
const description =
  "Drive more leads with a digital marketing agency in Dubai. Improve brand visibility through SEO, paid advertising, and social media strategies.";
const url = "https://www.bigwigmediadigital.com/digital-marketing-agency-dubai-uae";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { "en-ae": url } },
  openGraph: {
    title,
    description,
    url,
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

export default function DubaiPage() {
  return (
    <PlannerProvider>
      <main>
        <Hero />
        <PlanSection
          id="plan"
          sectionId="plan"
          title="Get a growth plan built for your business."
        />
        <Services />
        <Work />
        <OwnLeads />
        <Playbooks />
        <BuyerMarkets />
        <Sectors />
        <FirstMonth />
        <Reviews />
        <Faq />
        <PlanSection
          id="final"
          sectionId="contact"
          title="Ready when you are."
          className="pb-3 md:pb-4"
        />
      </main>
      <PlanBar />
    </PlannerProvider>
  );
}
