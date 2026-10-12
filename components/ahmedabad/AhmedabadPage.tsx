"use client";

import { clients } from "@/data/clients";
import ClientStrip from "../ui/ClientStrip";
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
