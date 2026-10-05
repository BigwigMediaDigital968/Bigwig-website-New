"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Fuse from "fuse.js";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { EASE, PillLead, fadeUp, focusRing, maskUp, stagger } from "../ui";
import { blogCategories, categorySlug } from "@/data/blogCategories";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: string;
  datePublished: string;
  excerpt?: string;
}

const PER_PAGE = 9;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/** Blog listing. Without `category` it lists every article; with it, that category's articles. */
export default function BlogIndex({ category }: { category?: string }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const categoryName = category
    ? blogCategories.find((c) => categorySlug(c) === category) ?? category.replace(/-/g, " ")
    : null;

  useEffect(() => {
    let alive = true;
    setLoading(true);
    const url = category
      ? `${process.env.NEXT_PUBLIC_API_BASE}/category/${category}`
      : `${process.env.NEXT_PUBLIC_API_BASE}/viewblog`;
    axios
      .get<BlogPost[]>(url)
      .then((res) => {
        if (!alive) return;
        const sorted = [...res.data].sort(
          (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
        );
        setPosts(sorted);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
        if (alive) setPosts([]);
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [category]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return posts;
    return new Fuse(posts, { keys: ["title", "author"], threshold: 0.4 }).search(q).map((r) => r.item);
  }, [posts, query]);

  useEffect(() => setPage(1), [query, category]);

  const totalPages = Math.max(1, Math.ceil(results.length / PER_PAGE));
  const pagePosts = results.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  // The newest article leads page 1 of the full list
  const showFeatured = page === 1 && !query.trim() && pagePosts.length > 0;
  const [featured, ...rest] = showFeatured ? pagePosts : [undefined, ...pagePosts];

  const goTo = (p: number) => {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pb-8">
      {/* ---------- header ---------- */}
      <section className="pb-10 pt-14 md:pb-14 md:pt-20">
        <motion.div className="wrap" initial="hidden" animate="show" variants={stagger(0.1, 0.2)}>
          <motion.p variants={fadeUp} className="text-[0.95rem] font-medium text-[var(--link)]">
            {categoryName ? (
              <Link href="/blogs" className={`rounded-sm hover:underline ${focusRing}`}>
                Blog
              </Link>
            ) : (
              "Digital marketing insights from Bigwig Media Digital"
            )}
            {categoryName && <span className="text-[var(--muted)]"> / Category</span>}
          </motion.p>

          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold capitalize leading-[0.95] tracking-[-0.045em]">
              <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                <motion.span variants={maskUp} className="block">
                  {categoryName ?? "Featured Blogs"}
                </motion.span>
              </span>
            </h1>

            <motion.div variants={fadeUp} className="relative w-full lg:max-w-sm">
              <label htmlFor="blog-search" className="sr-only">
                Search articles by title or author
              </label>
              <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" aria-hidden />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or author"
                className="h-12 w-full rounded-full bg-[var(--surface)] pl-12 pr-12 text-[0.95rem] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--link)]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-[var(--paper)] cursor-pointer ${focusRing}`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </motion.div>
          </div>

          {/* categories */}
          <motion.nav variants={fadeUp} aria-label="Blog categories" className="mt-10">
            <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
              <li className="shrink-0">
                <CategoryPill href="/blogs" active={!category}>
                  All articles
                </CategoryPill>
              </li>
              {blogCategories.map((c) => (
                <li key={c} className="shrink-0">
                  <CategoryPill href={`/blogs/category/${categorySlug(c)}`} active={categorySlug(c) === category}>
                    {c}
                  </CategoryPill>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </section>

      {/* ---------- articles ---------- */}
      <section ref={gridRef} className="scroll-mt-28 border-t border-[var(--line)] pt-12 md:pt-16">
        <div className="wrap">
          {loading ? (
            <Skeleton />
          ) : results.length === 0 ? (
            <div className="rounded-[28px] bg-[var(--surface)] px-6 py-16 text-center">
              <p className="text-xl font-semibold">
                {query ? <>No articles match “{query}”.</> : "No articles in this category yet."}
              </p>
              <p className="mt-2 text-[var(--muted)]">
                {query ? "Try a different word, or browse every article." : "Browse every article instead."}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className={`h-12 rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-semibold text-white cursor-pointer ${focusRing}`}
                  >
                    Clear search
                  </button>
                )}
                {category && (
                  <Link
                    href="/blogs"
                    className={`inline-flex h-12 items-center rounded-full px-6 text-[0.95rem] font-semibold ring-1 ring-inset ring-[var(--line-strong)] hover:bg-white ${focusRing}`}
                  >
                    All articles
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${page}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                {featured && <FeaturedCard post={featured} />}

                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={stagger(0.07, featured ? 0.15 : 0)}
                  className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ${featured ? "mt-14" : ""}`}
                >
                  {rest.map((post) => post && (
                    <motion.li key={post._id} variants={fadeUp}>
                      <PostCard post={post} />
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && totalPages > 1 && (
            <Pagination page={page} total={totalPages} onChange={goTo} />
          )}

          {/* closing prompt */}
          <div className="mt-20 flex flex-col gap-6 rounded-[28px] bg-[var(--ink)] p-8 text-white md:mt-28 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <p className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                Want these ideas working for your business?
              </p>
              <p className="mt-2 text-white/70">
                Our team can turn these strategies into a plan for your brand.
              </p>
            </div>
            <PillLead source={category ? "blog-category" : "blog-index"} tone="cyan" className="self-start md:self-auto">
              Get a free strategy session
            </PillLead>
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryPill({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors ${focusRing} ${
        active
          ? "bg-[var(--ink)] text-white"
          : "bg-[var(--surface)] text-[var(--ink)] ring-1 ring-inset ring-[var(--line)] hover:ring-[var(--line-strong)]"
      }`}
    >
      {children}
    </Link>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <Link href={`/blogs/${post.slug}`} className={`group grid gap-8 rounded-[28px] lg:grid-cols-12 lg:items-center lg:gap-12 ${focusRing}`}>
        <div className="overflow-hidden rounded-[28px] bg-[var(--ink)] lg:col-span-7">
          <img
            src={post.coverImage}
            alt=""
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="lg:col-span-5">
          <p className="text-sm text-[var(--muted)]">
            Latest article, <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          </p>
          <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.03em] group-hover:underline group-hover:decoration-[var(--teal)] group-hover:underline-offset-[6px] md:text-[2.6rem]">
            {post.title}
          </h2>
          {post.excerpt && <p className="mt-4 leading-relaxed text-[var(--muted)] line-clamp-3">{post.excerpt}</p>}
          <p className="mt-6 text-sm font-medium">{post.author ?? "Bigwig Media Digital"}</p>
        </div>
      </Link>
    </motion.article>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link href={`/blogs/${post.slug}`} className={`group block rounded-[20px] ${focusRing}`}>
        <div className="overflow-hidden rounded-[20px] bg-[var(--ink)]">
          <img
            src={post.coverImage}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <p className="mt-5 text-sm text-[var(--muted)]">
          {post.author ?? "Bigwig Media Digital"}, <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight line-clamp-3 group-hover:underline group-hover:decoration-[var(--teal)] group-hover:underline-offset-4 md:text-xl">
          {post.title}
        </h3>
      </Link>
    </article>
  );
}

function Pagination({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  // first, last, and two either side of the current page
  const pages = Array.from({ length: total }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === total || Math.abs(p - page) <= 2,
  );
  const btn = `flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-semibold tabular-nums transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${focusRing}`;

  return (
    <nav aria-label="Blog pages" className="mt-16 flex flex-wrap items-center justify-center gap-2">
      <button type="button" onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page" className={`${btn} ring-1 ring-inset ring-[var(--line-strong)] enabled:hover:bg-white`}>
        <ChevronLeft className="h-4 w-4" aria-hidden />
      </button>
      {pages.map((p, i) => (
        <span key={p} className="flex items-center gap-2">
          {i > 0 && p - pages[i - 1] > 1 && <span className="px-1 text-[var(--muted)]" aria-hidden>…</span>}
          <button
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            aria-label={`Page ${p}`}
            className={`${btn} ${p === page ? "bg-[var(--ink)] text-white" : "hover:bg-white"}`}
          >
            {p}
          </button>
        </span>
      ))}
      <button type="button" onClick={() => onChange(page + 1)} disabled={page === total} aria-label="Next page" className={`${btn} bg-[var(--ink)] text-white enabled:hover:bg-[var(--ink-2)]`}>
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}

function Skeleton() {
  return (
    <div aria-busy="true" aria-label="Loading articles">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="aspect-[16/10] animate-pulse rounded-[28px] bg-[var(--line)] lg:col-span-7" />
        <div className="space-y-4 lg:col-span-5">
          <div className="h-4 w-40 animate-pulse rounded-full bg-[var(--line)]" />
          <div className="h-10 w-full animate-pulse rounded-full bg-[var(--line)]" />
          <div className="h-10 w-3/4 animate-pulse rounded-full bg-[var(--line)]" />
        </div>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-[16/10] animate-pulse rounded-[20px] bg-[var(--line)]" />
        ))}
      </div>
    </div>
  );
}
