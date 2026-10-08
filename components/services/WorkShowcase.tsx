"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { SectionHead, fadeUp, focusRing, inView, stagger } from "../ui";
import { TrackControls, trackList, useTrack } from "../service/ServiceSections";

// YouTube Shorts we've produced for clients
const shorts = [
  "nz-sGjIfJSk",
  "9RbnGh2c1lY",
  "vZpS3YOo4sU",
  "ProixyGfpWg",
  "oDfl6su2N6w",
  "QOliP83rb_M",
  "TZBevC0YBPY",
  "fDmgCuiWxJY",
  "YdWbM5aPGD4",
  "Lb0HkhJHSgc",
];

const control = `flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)]/70 text-white ring-1 ring-inset ring-white/20 backdrop-blur-md transition-transform duration-300 hover:scale-105 cursor-pointer ${focusRing}`;

/** Muted, looping Short. Play/pause and mute go to the player over postMessage, so the iframe never reloads. */
function ShortCard({ id, index }: { id: string; index: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const command = (func: string) =>
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");

  const togglePlay = () => {
    command(playing ? "pauseVideo" : "playVideo");
    setPlaying(!playing);
  };

  const toggleMute = () => {
    command(muted ? "unMute" : "mute");
    setMuted(!muted);
  };

  return (
    <motion.li
      variants={fadeUp}
      className="relative aspect-[9/16] w-[64%] flex-none snap-start overflow-hidden rounded-[24px] bg-[var(--ink)] sm:w-[280px]"
    >
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3`}
        title={`Client short ${index + 1}`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // scaled up so YouTube's own chrome is cropped off
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.35]"
      />

      {!playing && (
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--ink)]/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--ink)]">
            <Play size={22} className="ml-0.5" />
          </span>
        </div>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(1,28,64,0.8),transparent)]"
      />

      <div className="absolute inset-x-3 bottom-3 flex justify-end gap-2">
        <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"} className={control}>
          {playing ? <Pause size={15} aria-hidden /> : <Play size={15} aria-hidden className="ml-0.5" />}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} className={control}>
          {muted ? <VolumeX size={15} aria-hidden /> : <Volume2 size={15} aria-hidden />}
        </button>
      </div>
    </motion.li>
  );
}

const profiles = [
  { name: "Behance", href: "https://www.behance.net/bigwigdigital1", icon: <FaBehance />, color: "#1769FF" },
  { name: "Dribbble", href: "https://dribbble.com/bigwig-digital", icon: <FaDribbble />, color: "#EA4C89" },
];

/** Portfolio link: brand-coloured logo chip, two-line label, and an arrow that turns on hover. */
function ProfilePill({ name, href, icon, color }: (typeof profiles)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex h-14 items-center gap-3 rounded-full bg-[var(--surface)] pl-1.5 pr-2 ring-1 ring-inset ring-[var(--line)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-18px_rgba(1,28,64,0.45)] ${focusRing}`}
    >
      <span
        aria-hidden
        style={{ backgroundColor: color }}
        className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-white transition-transform duration-300 group-hover:scale-105"
      >
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs text-[var(--muted)]">More work on</span>
        <span className="text-[0.95rem] font-semibold">{name}</span>
      </span>
      <span
        aria-hidden
        className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper)] transition-[transform,background-color] duration-300 group-hover:rotate-45 group-hover:bg-[var(--cyan)]"
      >
        <ArrowUpRight size={16} />
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Track of client Shorts with links to our Behance and Dribbble. Defaults are the SMO page's copy. */
export function WorkShowcase({
  lead = "Proven results",
  title = "Real Campaigns. Real Growth.",
  intro = "Explore how we’ve helped brands across industries increase reach, engagement, leads, and revenue through data-driven social media.",
}: {
  lead?: string;
  title?: string;
  intro?: React.ReactNode;
}) {
  const track = useTrack();
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <SectionHead
          lead={lead}
          title={title}
          actions={profiles.map((p) => (
            <ProfilePill key={p.name} {...p} />
          ))}
        />
        <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          {intro}
        </motion.p>

        <motion.ul ref={track.ref} {...inView} variants={stagger(0.06, 0.1)} className={`${trackList} mt-12 md:mt-14`}>
          {shorts.map((id, i) => (
            <ShortCard key={id} id={id} index={i} />
          ))}
        </motion.ul>

        <TrackControls track={track} count={shorts.length} className="mt-8" />
      </div>
    </section>
  );
}
