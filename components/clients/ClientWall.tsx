"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clients, type Client } from "@/data/clients";
import { useLeadPopup } from "../LeadPopup";
import { PillLead, PillLink, fadeUp, focusRing, inView, maskUp, scaleIn, stagger } from "../ui";

// Chessboard: white and navy squares alternate in reading order. With an odd number of
// columns (3 on phones, 5 from tablet up) that alternation is a true checkerboard.
const whites = clients.filter((c) => c.square === "white");
const navies = clients.filter((c) => c.square === "navy");
const board: Client[] = [];
for (let i = 0; i < Math.max(whites.length, navies.length); i++) {
  if (whites[i]) board.push(whites[i]);
  if (navies[i]) board.push(navies[i]);
}

export default function ClientWall() {
  return (
    <>
      {/* ---------- header ---------- */}
      <section className="pb-14 pt-14 md:pb-20 md:pt-20">
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
              <PillLink href="/our-works">View our work</PillLink>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ---------- logo wall ---------- */}
      <section className="px-2 md:px-3">
        <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-[var(--line)]">
          <motion.ul
            {...inView}
            variants={stagger(0.04)}
            aria-label="Client logos"
            // 1px gaps over the line colour draw the grid rules between tiles
            className="grid grid-cols-3 gap-px md:grid-cols-5"
          >
            {board.map((c) => (
              <motion.li
                key={c.img}
                variants={scaleIn}
                className={c.square === "navy" ? "bg-[var(--ink)]" : "bg-[var(--surface)]"}
              >
                <Tile client={c} />
              </motion.li>
            ))}
            {/* the last navy square: 19 logos + this tile fill both the 3- and 5-column boards */}
            <motion.li variants={scaleIn} className="col-span-2 md:col-span-1">
              <NextClientTile />
            </motion.li>
          </motion.ul>
        </div>
      </section>
    </>
  );
}

function Tile({ client }: { client: Client }) {
  // square logos from public/clients-logo carry their own even padding, so they fill the tile's height;
  // the rest are bare logos, capped so they don't grow too large
  const logo = (
    <img
      src={client.tile ?? client.img}
      alt={client.name}
      loading="lazy"
      draggable={false}
      className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
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
      className={`group relative flex aspect-[4/3] items-center justify-center transition-colors duration-300 ${pad} ${focusRing} focus-visible:-outline-offset-2 ${
        client.square === "navy" ? "hover:bg-[var(--ink-2)]" : "hover:bg-[var(--paper)]"
      }`}
    >
      {logo}
      <span className="sr-only">(opens {client.name} website in a new tab)</span>
      {/* revealed on hover / focus */}
      <span
        aria-hidden
        className={`absolute inset-x-4 bottom-3 hidden sm:flex translate-y-2 items-center justify-between text-xs font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 ${
          client.square === "navy" ? "text-white/70" : "text-[var(--muted)]"
        }`}
      >
        <span className="truncate">{client.name}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0" />
      </span>
    </a>
  );
}

function NextClientTile() {
  const { open } = useLeadPopup();
  return (
    <button
      type="button"
      onClick={() => open("clients-wall")}
      className={`group flex h-full w-full flex-col justify-between gap-3 bg-[var(--ink)] p-4 text-left text-white transition-colors duration-300 hover:bg-[var(--ink-2)] cursor-pointer sm:p-6 md:aspect-[4/3] md:p-8 ${focusRing}`}
    >
      <span className="text-lg font-semibold leading-tight tracking-tight sm:text-xl md:text-2xl">Your brand could be next.</span>
      <span className="flex items-center justify-between gap-3 text-sm font-medium text-[var(--cyan)]">
        Start a project
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </span>
    </button>
  );
}
