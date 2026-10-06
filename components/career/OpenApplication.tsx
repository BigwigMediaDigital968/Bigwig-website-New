"use client";

import { PillLink, WhatsAppPill } from "../ui";
import { CAREERS_WHATSAPP_HREF } from "./jobs";

/** Closing prompt for people who didn't see a matching role. */
export default function OpenApplication() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 rounded-[28px] bg-[var(--ink)] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <p className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">Didn’t find a role?</p>
            <p className="mt-2 text-white/70">
              Send your resume and we’ll keep it on file for future opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 self-start md:self-auto">
            <PillLink href="/contact" tone="cyan">
              Contact us
            </PillLink>
            <WhatsAppPill href={CAREERS_WHATSAPP_HREF} dark />
          </div>
        </div>
      </div>
    </section>
  );
}
