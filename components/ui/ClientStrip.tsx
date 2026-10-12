"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import type { Client } from "@/data/clients";
import { EASE, focusRing } from ".";

/** copies of each row, so the strip stays full on wide screens and the -50% marquee loop is seamless */
const REPEAT = 4;

/**
 * Full-width navy band of client logos in two rows that scroll in opposite directions, under a soft teal
 * spotlight. Logos are drawn as white silhouettes (some source files are white artwork); hovering one puts
 * it on a white card as an ink silhouette. Hovering anywhere pauses both rows. Every logo with a site is
 * also a link, so the effect isn't hover-only.
 */
export default function ClientStrip({
  clients,
  label = "Our clients",
  className = "",
  duration = "48s",
}: {
  clients: Client[];
  /** time for one full loop of a row; longer is slower */
  duration?: string;
  /** heading for screen readers; the strip has no visible title */
  label?: string;
  /** spacing around the band, e.g. a margin that separates it from a neighbouring panel */
  className?: string;
}) {
  // unique per instance, so the strip can appear more than once on a page
  const headingId = useId();
  // second row: same brands in a different order, so the two rows don't line up
  const rowTwo = [...clients.slice(Math.ceil(clients.length / 2)), ...clients.slice(0, Math.ceil(clients.length / 2))];

  return (
    <section
      aria-labelledby={headingId}
      className={`relative isolate overflow-hidden border-t border-white/10 bg-[var(--ink)] text-white ${className}`}
    >
      <h2 id={headingId} className="sr-only">
        {label}
      </h2>
      {/* spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_38%_75%_at_50%_50%,rgba(84,172,191,0.32),rgba(38,101,140,0.12)_45%,transparent_75%)]"
      />
      <motion.div
        className="marquee-mask flex flex-col gap-2 overflow-hidden py-8 md:gap-4 md:py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Row clients={clients} duration={duration} />
        <Row clients={rowTwo} duration={duration} reverse hidden />
      </motion.div>
    </section>
  );
}

/** `hidden`: the whole row is a visual repeat, so it stays out of the accessibility tree and tab order */
function Row({
  clients,
  duration,
  reverse = false,
  hidden = false,
}: {
  clients: Client[];
  duration: string;
  reverse?: boolean;
  hidden?: boolean;
}) {
  const items = Array.from({ length: REPEAT }, () => clients).flat();
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`marquee items-center ${reverse ? "marquee-reverse" : ""}`}
      style={{ animationDuration: duration }}
    >
      {items.map((c, i) => {
        const copy = hidden || i >= clients.length;
        return (
          <li key={`${c.name}-${i}`} aria-hidden={(!hidden && copy) || undefined} className="flex-none px-1.5 md:px-2">
            <Logo client={c} copy={copy} />
          </li>
        );
      })}
    </ul>
  );
}

function Logo({ client, copy }: { client: Client; copy: boolean }) {
  const body = (
    <img
      src={client.img}
      alt={copy ? "" : client.name}
      loading="lazy"
      draggable={false}
      className="max-h-10 w-full object-contain opacity-80 brightness-0 invert transition-[opacity,filter,scale] duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:invert-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100 md:max-h-12"
    />
  );
  // the white card fades in behind the logo on hover / focus
  const box = `group relative flex h-20 w-[150px] items-center justify-center rounded-2xl px-6 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] focus-visible:bg-white md:h-24 md:w-[210px] md:px-8`;

  if (!client.link) return <div className={box}>{body}</div>;
  return (
    <a
      href={client.link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      tabIndex={copy ? -1 : undefined}
      title={client.name}
      className={`${box} ${focusRing}`}
    >
      {body}
      <span className="sr-only">(opens {client.name} website in a new tab)</span>
    </a>
  );
}
