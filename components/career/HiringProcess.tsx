"use client";

import { PillLink, SectionHead } from "../ui";
import Timeline from "../ui/Timeline";

const steps = [
  { title: "Apply", desc: "A quick application with your resume." },
  { title: "Screen", desc: "A short screening call with our team." },
  { title: "Assignment", desc: "A role-specific task to show your skills." },
  { title: "Interview", desc: "Meet the people you’ll work with." },
  { title: "Offer", desc: "Welcome aboard." },
];

export default function HiringProcess() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Hiring process"
          title="Transparent process, quick decisions."
          actions={
            <PillLink href="#openings" tone="ink">
              See open roles
            </PillLink>
          }
        />
        <Timeline steps={steps} className="mt-16" />
      </div>
    </section>
  );
}
