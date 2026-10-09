"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import type { Client } from "@/data/clients";
import { EASE, focusRing } from ".";

/**
 * Full-width navy band of client logos, scrolling as a marquee. Logos are white silhouettes (all have transparent
 * backgrounds). Hovering pauses the strip, dims the other logos and lifts the hovered one with a cyan
 * glow and underline; every logo with a site is also a link, so the effect isn't hover-only.
 */
export default function ClientStrip({
  clients,
  label = "Our clients",
  className = "",
}: {
  clients: Client[];
  /** heading for screen readers; the strip has no visible title */
  label?: string;
  /** spacing around the band, e.g. a margin that separates it from a neighbouring panel */
  className?: string;
}) {
  // unique per instance, so the strip can appear more than once on a page
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className={`border-t border-white/10 bg-[var(--ink)] text-white ${className}`}>
      <h2 id={headingId} className="sr-only">
        {label}
      </h2>
      <motion.div
        className="marquee-mask group/strip overflow-hidden py-6 md:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <ul className="marquee items-center" style={{ animationDuration: "20s" }}>
          {/* the set is doubled so the loop is seamless; the copy is hidden from screen readers and tab order */}
          {[...clients, ...clients].map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length || undefined}
              className="flex-none px-3 transition-opacity duration-300 group-hover/strip:opacity-40 hover:!opacity-100 motion-reduce:transition-none md:px-5"
            >
              <Logo client={c} copy={i >= clients.length} />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function Logo({ client, copy }: { client: Client; copy: boolean }) {
  const body = (
    <>
      <img
        src={client.img}
        alt={copy ? "" : client.name}
        loading="lazy"
        draggable={false}
        className="max-h-9 w-full object-contain opacity-70 brightness-0 invert transition-[opacity,translate,scale,filter] duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-100 group-hover:drop-shadow-[0_0_14px_rgba(167,235,242,0.55)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100 md:max-h-10"
      />
      {/* underline that grows from the centre */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-2 mx-auto h-0.5 w-0 rounded-full bg-[var(--cyan)] transition-[width] duration-300 ease-out group-hover:w-10 motion-reduce:transition-none"
      />
    </>
  );
  const box = "group relative flex h-20 w-[150px] items-center justify-center px-5 md:w-[190px] md:px-7";

  if (!client.link) return <div className={box}>{body}</div>;
  return (
    <a
      href={client.link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      tabIndex={copy ? -1 : undefined}
      title={client.name}
      className={`${box} rounded-xl ${focusRing}`}
    >
      {body}
      <span className="sr-only">(opens {client.name} website in a new tab)</span>
    </a>
  );
}
