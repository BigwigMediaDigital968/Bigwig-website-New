"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { faqTopics, type FaqTopic } from "@/data/faqData";
import { fadeUp, focusRing, inView, maskUp, stagger } from "../ui";
import { AccordionItem, AskCard } from "../ui/Accordion";

const key = (topicId: string, question: string) => `${topicId}:${question}`;

/** Topics with only the questions containing every word of `query` (every question when it's empty). */
function filterTopics(query: string): FaqTopic[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return faqTopics;
  return faqTopics
    .map((t) => ({
      ...t,
      items: t.items.filter((item) => {
        const text = `${item.question} ${item.answer}`.toLowerCase();
        return words.every((w) => text.includes(w));
      }),
    }))
    .filter((t) => t.items.length > 0);
}

const allKeys = (topics: FaqTopic[]) => topics.flatMap((t) => t.items.map((item) => key(t.id, item.question)));

export default function FaqIndex() {
  const [query, setQuery] = useState("");
  // first question starts open; while searching, every match opens
  const [open, setOpen] = useState<Set<string>>(
    () => new Set([key(faqTopics[0].id, faqTopics[0].items[0].question)]),
  );
  const [activeTopic, setActiveTopic] = useState(faqTopics[0].id);

  const topics = useMemo(() => filterTopics(query), [query]);
  const count = topics.reduce((n, t) => n + t.items.length, 0);

  const search = (value: string) => {
    setQuery(value);
    setOpen(new Set(value.trim() ? allKeys(filterTopics(value)) : []));
  };

  const toggle = (k: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });

  // highlight the topic being read: the last one whose heading has passed 35% down the screen
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = topics[0]?.id;
      for (const t of topics) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top <= line) current = t.id;
      }
      if (current) setActiveTopic(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [topics]);

  return (
    <main className="pb-24 md:pb-32">
      {/* ---------- header ---------- */}
      <section className="pb-12 pt-14 md:pb-16 md:pt-20">
        <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            Your questions, answered
          </motion.p>

          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              {["Frequently asked", "questions"].map((line) => (
                <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={maskUp} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div variants={fadeUp} className="relative w-full lg:max-w-sm">
              <label htmlFor="faq-search" className="sr-only">
                Search the FAQs
              </label>
              <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" aria-hidden />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => search(e.target.value)}
                placeholder="Search questions, e.g. pricing"
                className="h-12 w-full rounded-full bg-[var(--surface)] pl-12 pr-12 text-[0.95rem] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--link)] [&::-webkit-search-cancel-button]:appearance-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => search("")}
                  aria-label="Clear search"
                  className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[var(--paper)] cursor-pointer ${focusRing}`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </motion.div>
          </div>

          <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Straight answers about our services, pricing, contracts and how we work with you.
          </motion.p>
        </motion.div>
      </section>

      {/* ---------- topics + questions ---------- */}
      <section className="border-t border-[var(--line)] pt-10 md:pt-16">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <nav aria-label="FAQ topics">
                <p className="hidden text-sm font-medium text-[var(--muted)] lg:block">Topics</p>
                <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide lg:mx-0 lg:mt-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
                  {faqTopics.map((t) => {
                    const shown = topics.find((x) => x.id === t.id)?.items.length ?? 0;
                    const active = activeTopic === t.id && shown > 0;
                    return (
                      <li key={t.id} className="shrink-0">
                        <a
                          href={`#${t.id}`}
                          aria-current={active ? "true" : undefined}
                          aria-disabled={shown === 0 || undefined}
                          className={`flex h-10 items-center justify-between gap-4 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors lg:h-12 lg:text-[0.95rem] ${focusRing} ${
                            shown === 0
                              ? "pointer-events-none opacity-40 ring-1 ring-inset ring-[var(--line)] lg:ring-0"
                              : active
                                ? "bg-[var(--ink)] text-white"
                                : "bg-[var(--surface)] ring-1 ring-inset ring-[var(--line)] hover:ring-[var(--line-strong)] lg:bg-transparent lg:ring-0 lg:hover:bg-[var(--surface)]"
                          }`}
                        >
                          {t.title}
                          <span className={`tabular-nums ${active ? "text-[var(--cyan)]" : "text-[var(--muted)]"}`}>{shown}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <AskCard source="faq-page" className="mt-8 hidden lg:block" />
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-8">
            {query.trim() && (
              <p className="mb-6 text-sm text-[var(--muted)]" aria-live="polite">
                {count} {count === 1 ? "answer" : "answers"} for “{query.trim()}”
              </p>
            )}

            {topics.length === 0 ? (
              <div className="rounded-[28px] bg-[var(--surface)] px-6 py-16 text-center">
                <p className="text-xl font-semibold">No answers match “{query}”.</p>
                <p className="mt-2 text-[var(--muted)]">Try a different word, or ask our team directly.</p>
                <button
                  type="button"
                  onClick={() => search("")}
                  className={`mt-6 h-12 rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-semibold text-white cursor-pointer ${focusRing}`}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="space-y-16 md:space-y-20">
                {topics.map((t) => {
                  const number = faqTopics.findIndex((x) => x.id === t.id) + 1;
                  return (
                    <section key={t.id} id={t.id} aria-labelledby={`${t.id}-title`} className="scroll-mt-28">
                      <div className="flex items-baseline gap-4">
                        <span aria-hidden className="serif text-4xl leading-none text-[var(--teal)] md:text-5xl">
                          {String(number).padStart(2, "0")}
                        </span>
                        <h2 id={`${t.id}-title`} className="text-2xl font-semibold tracking-tight md:text-3xl">
                          {t.title}
                        </h2>
                      </div>
                      <motion.ul {...inView} variants={stagger(0.05)} className="mt-6 border-t border-[var(--line-strong)]">
                        {t.items.map((item) => {
                          const k = key(t.id, item.question);
                          return (
                            <motion.li key={k} variants={fadeUp} className="border-b border-[var(--line)]">
                              <AccordionItem
                                question={item.question}
                                answer={item.answer}
                                open={open.has(k)}
                                onToggle={() => toggle(k)}
                              />
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </section>
                  );
                })}
              </div>
            )}

            <AskCard source="faq-page" className="mt-16 lg:hidden" />
          </div>
        </div>
      </section>
    </main>
  );
}
