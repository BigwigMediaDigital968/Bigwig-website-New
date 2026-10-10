"use client";

import { BriefProvider } from "./Brief";
import Hero from "./Hero";
import Local from "./Local";
import { Faq, Process } from "./Sections";
import Showcase from "./Showcase";
import Studio from "./Studio";

/**
 * The Bhopal page, in the site's theme but with its own layout (not the Dubai one). The hero is a
 * fill-in-the-blanks sentence that is also the lead form; the map and the FAQ's plan note read and write that
 * sentence. Two showcases: a project viewer for websites and a phone feed for creatives. No closing band: the
 * site footer right after already ends with a call to action. Every section is kept to about a screen's height.
 */
export default function BhopalPage() {
  return (
    <BriefProvider>
      <main>
        <Hero />
        <Showcase />
        <Studio />
        <Local />
        <Process />
        <Faq />
      </main>
    </BriefProvider>
  );
}
