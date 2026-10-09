import type { Metadata } from "next";
import BuyerMarkets from "../../../../components/dubai-v3/BuyerMarkets";
import Faq from "../../../../components/dubai-v3/Faq";
import FirstMonth from "../../../../components/dubai-v3/FirstMonth";
import Hero from "../../../../components/dubai-v3/Hero";
import OwnLeads from "../../../../components/dubai-v3/OwnLeads";
import PlanBar from "../../../../components/dubai-v3/PlanBar";
import PlanSection from "../../../../components/dubai-v3/PlanSection";
import { PlannerProvider } from "../../../../components/dubai-v3/Planner";
import Playbooks from "../../../../components/dubai-v3/Playbooks";
import Reviews from "../../../../components/dubai-v3/Reviews";
import Sectors from "../../../../components/dubai-v3/Sectors";
import Services from "../../../../components/dubai-v3/Services";
import Work from "../../../../components/dubai-v3/Work";

// v3 of /digital-marketing-agency-dubai-uae: a light, single-goal lead page. Every section leads to the
// growth-plan planner. Kept out of search, and canonical to the live page, until it replaces v1.
const title =
  "Real Estate Digital Marketing Agency in Dubai | Bigwig Media Digital";
const description =
  "Ads, SEO, websites and social media for Dubai developers, brokerages and growing businesses. Get a free growth plan built around your buyers and budget.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical:
      "https://www.bigwigmediadigital.com/digital-marketing-agency-dubai-uae",
  },
  robots: { index: false, follow: true },
};

export default function DubaiPageV3() {
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
