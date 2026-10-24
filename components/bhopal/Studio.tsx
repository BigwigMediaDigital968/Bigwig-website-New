"use client";

import Image from "next/image";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { focusRing } from "../ui";
import { useBrief } from "./Brief";
import { posts, services } from "./content";

/**
 * What we make, shown in the place it ends up: a phone scrolling an Instagram-style feed of the studio's
 * ad creatives and social posts (hover to pause), beside the six services. The feed list is doubled for a
 * seamless loop; the copies are hidden from screen readers.
 */
export default function Studio() {
  const { toForm } = useBrief();
  const feed = [...posts, ...posts];

  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative order-last lg:order-first lg:col-span-5">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cyan)]/50 blur-3xl"
          />
          <div className="mx-auto w-[min(100%,250px)] rounded-[44px] sm:w-[min(100%,300px)] bg-[var(--ink)] p-2.5 shadow-[0_40px_80px_-30px_rgba(1,28,64,0.55)]">
            <div className="relative overflow-hidden rounded-[36px] bg-white">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[var(--ink)]" aria-hidden />
              <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 pb-2.5 pt-10" aria-hidden>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--teal),var(--ink))] text-[11px] font-bold text-white">
                  B
                </span>
                <span className="text-[13px] font-semibold">bigwig.media.digital</span>
              </div>
              <div className="feed-mask h-[340px] overflow-hidden sm:h-[min(62vh,500px)]">
                <ul className="feed-scroll">
                  {feed.map((p, i) => {
                    const copy = i >= posts.length;
                    return (
                      <li key={i} aria-hidden={copy || undefined} className="pb-3">
                        <div className="relative aspect-square">
                          {/* eager: lazy images never load inside the clipped, moving feed until they scroll into it */}
                          <Image src={p.src} alt={copy ? "" : p.alt} fill sizes="300px" loading="eager" className="object-cover" />
                        </div>
                        <div className="flex items-center gap-3 px-3 pt-2 text-[var(--ink)]" aria-hidden>
                          <Heart className="h-4 w-4" />
                          <MessageCircle className="h-4 w-4" />
                          <Send className="h-4 w-4" />
                          <Bookmark className="ml-auto h-4 w-4" />
                        </div>
                        <p className="px-3 pt-1 text-[12px] text-[var(--muted)]" aria-hidden>
                          {p.caption}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="h-section max-w-[18ch]">One studio for everything your customers see.</h2>
          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-[var(--muted)]">
            Our digital marketing agency in Bhopal shoots your reels, builds your pages, runs your
            ads and looks after your Google listing, all under one roof.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-5 sm:gap-x-8">
            {services.map((s) => (
              <li key={s.name} className="border-t border-[var(--line)] py-3.5 sm:py-4">
                <h3 className="text-[0.95rem] font-semibold leading-snug sm:text-base">{s.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{s.does}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => toForm("bhopal-studio")}
            className={`mt-6 inline-flex h-12 items-center rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-[var(--ink-2)] active:scale-[0.97] cursor-pointer ${focusRing}`}
          >
            Plan my marketing
          </button>
        </div>
      </div>
    </section>
  );
}
