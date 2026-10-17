"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Sparkles } from "lucide-react";
import { EASE, SectionHead, WhatsAppPill, fadeUp, focusRing, inView, whatsappHref } from "../../ui";

type Platform = {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  brandColor: string;
  image: string;
  strategy: string;
};

const platforms: Platform[] = [
  {
    id: "facebook",
    name: "Facebook",
    tagline: "Community & lead gen",
    icon: <FaFacebookF />,
    brandColor: "#1877F2",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    strategy: "Targeted group engagement, localized ads, and community-building content.",
  },
  {
    id: "instagram",
    name: "Instagram",
    tagline: "Discovery & Reels",
    icon: <FaInstagram />,
    brandColor: "#E4405F",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    strategy: "High-impact visual stories, trending Reels, and aesthetic profile grids.",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    tagline: "B2B & thought leadership",
    icon: <FaLinkedinIn />,
    brandColor: "#0A66C2",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=900&q=80",
    strategy: "Executive branding, industry insights, decision-maker reach, and carousel decks.",
  },
  {
    id: "twitter",
    name: "Twitter (X)",
    tagline: "Real-time trends",
    icon: <FaXTwitter />,
    brandColor: "#000000",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    strategy: "Bite-sized updates, active conversation threads, and real-time public relations.",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    tagline: "Visual search & e-commerce",
    icon: <FaPinterestP />,
    brandColor: "#E60023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    strategy: "Shoppable pins, mood boards, and long-tail organic search traffic.",
  },
  {
    id: "youtube",
    name: "YouTube",
    tagline: "Long-form video & Shorts",
    icon: <FaYoutube />,
    brandColor: "#FF0000",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
    strategy: "SEO-optimized long-form video, tutorials, and snackable Shorts.",
  },
];

/**
 * Platform picker: a grid of platform tabs beside a navy panel with the chosen platform's photo,
 * strategy and a WhatsApp enquiry for it.
 */
export default function SocialPlatforms() {
  const [active, setActive] = useState(1); // Instagram
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const platform = platforms[active];

  // arrow keys move between tabs, as in a standard tablist
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + platforms.length) % platforms.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="platforms" className="scroll-mt-24 py-14 md:py-20">
      <div className="wrap">
        <SectionHead lead="Platforms we manage" title="One Team, Every Platform Where Your Customers Actually Are" />
        <motion.p {...inView} variants={fadeUp} className="mt-6 max-w-5xl text-base leading-relaxed text-[var(--muted)]">
          Your audience isn&apos;t spread evenly across every platform, and neither is your effort once we know where
          they are. Our social media services cover Facebook, Instagram, LinkedIn, Twitter (X), Pinterest, and YouTube, each
          managed with platform-specific content and posting strategy rather than one post copy-pasted six times. A
          LinkedIn post built for decision-makers looks nothing like an Instagram Reel built for discovery, and treating
          them the same is one of the most common reasons brands plateau.
        </motion.p>

        <motion.div {...inView} variants={fadeUp} className="mt-12 grid gap-3 md:mt-14 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="Social media platforms"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7"
          >
            {platforms.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`platform-tab-${p.id}`}
                  aria-selected={on}
                  aria-controls="platform-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group flex min-h-[150px] flex-col justify-between gap-6 rounded-[20px] p-5 text-left ring-1 ring-inset transition-colors duration-300 cursor-pointer ${focusRing} ${
                    on
                      ? "bg-[var(--ink)] text-white ring-[var(--ink)]"
                      : "bg-[var(--surface)] ring-[var(--line)] hover:bg-[var(--paper)]"
                  }`}
                >
                  <span
                    aria-hidden
                    style={on ? { backgroundColor: p.brandColor } : { color: p.brandColor }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-105 ${
                      on ? "text-white ring-1 ring-inset ring-white/20" : "bg-[var(--paper)]"
                    }`}
                  >
                    {p.icon}
                  </span>
                  <span>
                    <span className="block font-semibold tracking-tight">{p.name}</span>
                    <span className={`mt-1 block text-sm ${on ? "text-white/65" : "text-[var(--muted)]"}`}>
                      {p.tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="platform-panel"
            role="tabpanel"
            aria-labelledby={`platform-tab-${platform.id}`}
            className="relative isolate flex min-h-[380px] flex-col overflow-hidden rounded-[24px] bg-[var(--ink)] p-6 text-white md:p-8 lg:col-span-5"
          >
            {/* photo cross-fades on its own layer; it can't sit inside the sliding copy, whose transform would crop it */}
            <AnimatePresence initial={false}>
              <motion.div
                key={platform.id}
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 -z-20"
              >
                <Image src={platform.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,28,64,0.94)_0%,rgba(1,28,64,0.7)_40%,rgba(1,28,64,0.45)_100%)]"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex flex-1 flex-col"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    style={{ backgroundColor: platform.brandColor }}
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-lg text-white ring-1 ring-inset ring-white/20"
                  >
                    {platform.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[var(--cyan)]">Focused execution</p>
                    <h3 className="text-2xl font-semibold tracking-tight">{platform.name} strategy</h3>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-white/85">{platform.strategy}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/65">
                  <Sparkles size={16} aria-hidden className="text-[var(--cyan)]" />
                  Platform-native creative, copy and format optimization
                </p>

                <div className="mt-auto flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/65">
                    Targeting {platform.name}?
                    <span className="block font-semibold text-white">Get a free platform audit</span>
                  </p>
                  <WhatsAppPill
                    dark
                    href={whatsappHref(
                      `Hello Bigwig Media Digital, I am interested in custom Social Media Optimization for ${platform.name}.`,
                    )}
                  >
                    Enquire
                  </WhatsAppPill>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
