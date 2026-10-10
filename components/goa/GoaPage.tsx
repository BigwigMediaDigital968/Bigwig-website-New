"use client";

import Calculator from "./Calculator";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Plan from "./Plan";
import Season from "./Season";
import { Faq, Reviews } from "./Sections";

/**
 * The Goa page, in the site's navy and type but with its own idea: the Goan house. An arched window with a
 * carepa (oyster-shell) fanlight frames the hero, the work hangs in arched frames, the reviews sit under
 * azulejo tiles, and the page is planned around Goa's season. Headlines use the site's serif. Ochre (the
 * Fontainhas yellow) is the one accent. The site footer gives the closing call to action.
 */
export default function GoaPage() {
  return (
    <main
      style={
        {
          "--porcelain": "#f8f7f4",
          "--ochre": "#d9a441",
          // ochre deep enough for text and small marks on white
          "--ochre-deep": "#9a6a12",
        } as React.CSSProperties
      }
    >
      <Hero />
      <Season />
      <Gallery />
      <div className="h-14 md:h-20" aria-hidden />
      <Calculator />
      <Plan />
      <Reviews />
      <Faq />
    </main>
  );
}
