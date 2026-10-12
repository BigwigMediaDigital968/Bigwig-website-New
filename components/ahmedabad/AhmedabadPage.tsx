"use client";

import { clients } from "@/data/clients";
import { coreServices, indiaServices } from "@/data/indiaServices";
import { whatsappHref } from "../ui";
import ClientStrip from "../ui/ClientStrip";
import ServicesAccordion from "../ui/ServicesAccordion";
import { servicePhotos } from "./content";
import Enquire from "./Enquire";
import Hero, { Intro } from "./Hero";
import { Faq, Reviews } from "./Sections";
import Sectors from "./Sectors";
import Social from "./Social";
import Work from "./Work";

/**
 * The Ahmedabad page, in the site's own navy, cyan and teal. The hero is a centred headline over a curved row
 * of cards (the city and our work). Every "free plan" button scrolls to the lead form (Enquire), which
 * sits after the reviews; the FAQ and the site footer close the page.
 */
export default function AhmedabadPage() {
  return (
    <main>
      <Hero />
      <Intro />
      <ClientStrip clients={clients} duration="98s" />
      <div className="mt-14 md:mt-20">
        <ServicesAccordion
          lead="Our digital marketing services in Ahmedabad"
          title="Everything your business needs to grow online"
          services={coreServices()}
          allCount={indiaServices.length}
          source="ahmedabad"
          photos={servicePhotos}
          whatsapp={(t) => whatsappHref(`Hi BigWig Media Digital! I'm interested in ${t} for my business in Ahmedabad.`)}
        />
      </div>
      <Sectors />
      <Social />
      <Work />
      <div className="h-14 md:h-20" aria-hidden />
      <Reviews />
      <Enquire />
      <Faq />
    </main>
  );
}
