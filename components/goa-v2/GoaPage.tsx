"use client";

import Gallery from "./Gallery";
import Hero from "./Hero";
import Plan from "./Plan";
import Seasons from "./Seasons";
import Sectors from "./Sectors";
import { Faq, Local, Reviews } from "./Sections";
import { PlanProvider } from "./media";

/**
 * v2 of the Goa page: photography-led and editorial, in the site's navy and type (serif headlines). Goa is
 * carried by real photographs (the coast, Fontainhas, Panjim's church, Dudhsagar in the monsoon), revealed
 * with wipes and drifting with the scroll. Sector cards pre-fill the form. The site footer closes the page.
 * Fully separate from v1 (components/goa).
 */
export default function GoaPage() {
  return (
    <PlanProvider>
      <main style={{ "--porcelain": "#f8f7f4", "--ochre": "#d9a441" } as React.CSSProperties}>
        <Hero />
        <Sectors />
        <Seasons />
        <div className="h-16 md:h-24" aria-hidden />
        <Gallery />
        <div className="h-16 md:h-24" aria-hidden />
        <Local />
        <Plan />
        <Reviews />
        <Faq />
      </main>
    </PlanProvider>
  );
}
