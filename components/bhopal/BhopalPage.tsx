"use client";

import Faq from "../dubai-v3/Faq";
import FirstMonth from "../dubai-v3/FirstMonth";
import OwnLeads from "../dubai-v3/OwnLeads";
import PlanBar from "../dubai-v3/PlanBar";
import PlanSection from "../dubai-v3/PlanSection";
import { PlannerProvider } from "../dubai-v3/Planner";
import Reviews from "../dubai-v3/Reviews";
import Sectors from "../dubai-v3/Sectors";
import Work from "../dubai-v3/Work";
import Hero from "./Hero";
import Office from "./Office";
import Services from "./Services";
import {
  comparison,
  faqs,
  firstMonth,
  plannerConfig,
  reviews,
  sectors,
  sites,
} from "./content";

/**
 * The Bhopal lead page: the v3 Dubai layout (every section leads to the growth-plan planner) with Bhopal
 * content, INR budgets and the India number. There's no lead sector, so the Dubai property playbooks are left
 * out and every industry sits in one grid. A client component because the planner config carries icons.
 */
export default function BhopalPage() {
  return (
    <PlannerProvider config={plannerConfig}>
      <main>
        <Hero />
        <PlanSection
          id="plan"
          sectionId="plan"
          title="Get a growth plan built for your business."
        />
        <Services />
        <Work sites={sites} />
        <OwnLeads
          lead="Why boosting posts isn’t enough"
          title="Likes don’t pay the rent. Customers do."
          before="Boosted posts and a freelancer"
          caption="Boosted posts and a freelancer compared with your own lead engine"
          rows={comparison}
        />
        <Sectors
          lead="Who we work with"
          title="Whatever you sell, the plan starts with your customers."
          sectors={sectors}
        />
        <Office />
        <FirstMonth firstMonth={firstMonth} />
        <Reviews reviews={reviews} />
        <Faq faqs={faqs} />
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
