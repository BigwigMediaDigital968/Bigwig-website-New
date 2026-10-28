"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clients, type Client } from "@/data/clients";
import { useLeadPopup } from "../LeadPopup";
import { PillLead, PillLink, fadeUp, focusRing, inView, maskUp, scaleIn, stagger } from "../ui";

const INDUSTRY_ORDER = [
  "Healthcare",
  "D2C",
  "Real Estate",
  "Astrology",
  "Marketing",
  "Forex & Trading",
  "Logistics",
  "Engineering",
  "Hospitality"
];

export default function ClientWall2() {
  // Largest industries first; ties keep INDUSTRY_ORDER since sort is stable
  const groupedClients = INDUSTRY_ORDER.map((industry) => ({
    name: industry,
    items: clients.filter((c) => c.industry === industry),
  }))
    .filter((group) => group.items.length > 0)
    .sort((a, b) => b.items.length - a.items.length);
  const multiGroups = groupedClients.filter((group) => group.items.length > 1);
  // Single-client industries share one row so their lone tiles don't leave empty space
  const singleGroups = groupedClients.filter((group) => group.items.length === 1);

  return (
    <>
      {/* ---------- header ---------- */}
      <section className="pb-10 pt-14 md:pb-16 md:pt-20">
        <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Brands that believe in what we build
          </motion.p>
          <h1 className="mt-4 text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <motion.span variants={maskUp} className="block">
                Our Clients
              </motion.span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-end">
            <motion.div variants={fadeUp} className="max-w-2xl space-y-4 text-lg leading-relaxed text-[var(--muted)] lg:col-span-7">
              <p>
                <span className="text-[var(--ink)]">
                  Bigwig Media Digital has partnered with 500+ brands across India & Dubai.
                </span>{" "}
                As a trusted digital marketing agency in Delhi, we’ve worked with brands across
                industries to deliver measurable growth and strong digital presence.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <PillLead source="clients-hero">Get a free strategy session</PillLead>
              <PillLink href="/portfolio">View our work</PillLink>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ---------- Industry Sections ---------- */}
      <div className="wrap space-y-16 pb-20">
        {multiGroups.map((group) => (
          <section key={group.name} className="mx-auto max-w-[1600px]">
            <div className="mb-6 flex items-center justify-between px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--ink)]">
                {group.name}
              </h2>
            </div>

            {group.items.length > 5 ? (
              <CarouselSection items={group.items} />
            ) : (
              <GridSection items={group.items} />
            )}
          </section>
        ))}

        {singleGroups.length > 0 && (
          <div className="mx-auto flex max-w-[1600px] flex-wrap gap-x-px gap-y-10">
            {singleGroups.map((group) => (
              <section key={group.name}>
                <h2 className="mb-6 px-4 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--ink)]">
                  {group.name}
                </h2>
                <GridSection items={group.items} />
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

{/* Grid view for sections with 5 or fewer items; tiles keep the order from data/clients */}
function GridSection({ items }: { items: Client[] }) {
  return (
    <div className="w-fit max-w-full overflow-hidden bg-[var(--line)]">
      <motion.ul
        {...inView}
        variants={stagger(0.04)}
        aria-label="Client logos"
        className="flex flex-wrap gap-px"
      >
        {items.map((c, i) => (
          <motion.li
            key={`${c.name}-${i}`}
            variants={scaleIn}
            className={`w-[220px] flex-none sm:w-[260px] md:w-[300px] ${c.square === "navy" ? "bg-[var(--ink)]" : "bg-[var(--surface)]"}`}
          >
            <Tile client={c} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

{/* Auto-scrolling chess tiles with no gaps; pauses on hover and only the hovered tile reacts */}
function CarouselSection({ items }: { items: Client[] }) {
  // each half of the loop is at least ~12 tiles wide, so the -50% marquee loop is seamless on wide screens
  const repeat = Math.max(1, Math.ceil(12 / (items.length + 1)));
  const half = Array.from({ length: repeat }, () => [...items,]).flat();
  // const half = Array.from({ length: repeat }, () => [...items, null]).flat();
  const loop = [...half, ...half];
  const duration = `${Math.max(36, half.length * 5)}s`;

  return (
    <div className="marquee-pause overflow-hidden bg-[var(--line)] motion-reduce:overflow-x-auto">
      <ul
        aria-label="Client logos"
        className="marquee gap-px"
        style={{ animationDuration: duration }}
      >
        {loop.map((c, i) => {
          const copy = i >= half.length;
          const surface = !c || c.square === "navy" ? "bg-[var(--ink)]" : "bg-[var(--surface)]";
          return (
            <li
              key={`${c?.name ?? "cta"}-${i}`}
              aria-hidden={copy || undefined}
              className={`w-[220px] flex-none sm:w-[260px] md:w-[300px] ${surface}`}
            >
              {c ? <Tile client={c} copy={copy} /> : <NextClientTile copy={copy} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Tile({ client, copy = false }: { client: Client; copy?: boolean }) {
  const logo = (
    <img
      src={client.tile ?? client.img}
      alt={client.name}
      loading="lazy"
      draggable={false}
      className={`object-contain transition-transform duration-500 group-hover/tile:scale-105 ${
        client.tile ? "h-full w-full" : "max-h-10 w-full max-w-[160px] sm:max-h-14 md:max-h-16"
      }`}
    />
  );
  const pad = client.tile ? "p-1 sm:p-3 md:p-4" : "p-4 sm:p-8 md:p-10";

  if (!client.link) {
    return <div className={`flex aspect-[4/3] items-center justify-center ${pad}`}>{logo}</div>;
  }

  return (
    <a
      href={client.link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      tabIndex={copy ? -1 : undefined}
      className={`group/tile relative flex aspect-[4/3] items-center justify-center transition-colors duration-300 ${pad} ${focusRing} focus-visible:-outline-offset-2 ${
        client.square === "navy" ? "hover:bg-[var(--ink-2)]" : "hover:bg-[var(--paper)]"
      }`}
    >
      {logo}
      <span className="sr-only">(opens {client.name} website in a new tab)</span>
      <span
        aria-hidden
        className={`absolute inset-x-4 bottom-3 hidden sm:flex translate-y-2 items-center justify-between text-xs font-medium opacity-0 transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100 group-focus-visible/tile:translate-y-0 group-focus-visible/tile:opacity-100 ${
          client.square === "navy" ? "text-white/70" : "text-[var(--muted)]"
        }`}
      >
        <span className="truncate">{client.name}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0" />
      </span>
    </a>
  );
}

function NextClientTile({ copy = false }: { copy?: boolean }) {
  const { open } = useLeadPopup();
  return (
    <button
      type="button"
      tabIndex={copy ? -1 : undefined}
      onClick={() => open("clients-wall")}
      className={`group flex aspect-[4/3] w-full flex-col justify-between gap-3 bg-[var(--ink)] p-4 text-left text-white transition-colors duration-300 hover:bg-[var(--ink-2)] cursor-pointer sm:p-6 md:p-8 ${focusRing}`}
    >
      <span className="text-lg font-semibold leading-tight tracking-tight sm:text-xl md:text-2xl">
        Your brand could be next.
      </span>
      <span className="flex items-center justify-between gap-3 text-sm font-medium text-[var(--cyan)]">
        Start a project
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </span>
    </button>
  );
}
