"use client";

import { PillLead, SectionHead } from "../ui";
import Timeline from "../ui/Timeline";

const stages = [
  {
    title: "Understanding the Landscape",
    desc: "We analyze markets, competition, and audience behavior to uncover real opportunities.",
  },
  {
    title: "Strategic Blueprinting",
    desc: "We map clear, data-led directions that align with your brand’s objectives.",
  },
  {
    title: "Creative Engineering",
    desc: "Concepts turn into compelling visuals, content, and experiences.",
  },
  {
    title: "Precision Deployment",
    desc: "Campaigns go live with tactical execution across chosen platforms.",
  },
  {
    title: "Optimization & Evolution",
    desc: "We track, refine, and scale because great performance should never plateau.",
  },
];

export default function Blueprint() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Our blueprint for success"
          title="Turning smart ideas into measurable outcomes."
          actions={<PillLead source="about-blueprint">Start with a free strategy session</PillLead>}
        />
        <Timeline steps={stages} className="mt-16" />
      </div>
    </section>
  );
}
