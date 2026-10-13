"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Script from "next/script";
import { Check, ChevronRight, Clock, Link2, Plus, Share2 } from "lucide-react";

import { useLeadPopup } from "../../../../components/LeadPopup";
import { PillLead, focusRing } from "../../../../components/ui";
import { normalizeBlogHtml } from "../../../../utils/blogHtml";
import { blogCategories, categorySlug } from "@/data/blogCategories";

/* ================= TYPES ================= */

interface FAQ {
  question: string;
  answer: string;
}

interface SchemaSettings {
  article: boolean;
  breadcrumb: boolean;
  faq: boolean;
  organization: boolean;
  speakable: boolean;
  video: boolean;
  image: boolean;
}

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  datePublished: string;
  lastUpdated?: string;
  content: string;
  slug: string;
  category?: string;

  faqs?: FAQ[];
  schemaSettings?: SchemaSettings;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customSchemas?: Record<string, any>[];
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/** about 200 words a minute, at least one */
const readingTime = (html: string) =>
  Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));

/**
 * One article, in the site's light theme like the blog listing. The article body sits on a navy reading panel:
 * every stored post (many with their own <style> and colours) was written and cleaned for the navy background,
 * so it renders there exactly as authored. Nav, footer and the lead popup come from the root layout.
 */
export default function BlogDetailsClient({ slug }: { slug: string }) {
  const { open: openLead } = useLeadPopup();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogType[]>([]);

  /* ================= "open popup" buttons written inside posts ================= */

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-open-popup='true']")) openLead("blog-content");
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, [openLead]);

  /* ================= FETCH BLOG ================= */

  useEffect(() => {
    let alive = true;
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`);
        const list: BlogType[] = res.data;
        const found = list.find((b) => b.slug === slug);
        if (!alive) return;
        if (!found) {
          setError("not-found");
        } else {
          setBlog(found);
          // same category first, then the newest of the rest, so there are always three to read next
          const others = list
            .filter((b) => b.slug !== slug)
            .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
          const same = others.filter((b) => b.category?.toLowerCase() === found.category?.toLowerCase());
          setRelatedBlogs([...same, ...others.filter((b) => !same.includes(b))].slice(0, 3));
        }
      } catch {
        if (alive) setError("failed");
      }
      if (alive) setLoading(false);
    };
    if (slug) fetchBlog();
    return () => {
      alive = false;
    };
  }, [slug]);

  // Theme-safe HTML: fixes unreadable pasted colours, scopes <style> tags, migrates old Quill markup.
  const contentHtml = useMemo(() => (blog ? normalizeBlogHtml(blog.content) : ""), [blog]);

  if (loading) return <ArticleSkeleton />;

  if (error || !blog)
    return (
      <main className="wrap py-24 text-center">
        <p className="text-2xl font-semibold">
          {error === "not-found" ? "This article doesn’t exist." : "We couldn’t load this article."}
        </p>
        <p className="mt-2 text-[var(--muted)]">
          {error === "not-found" ? "It may have moved. Browse every article instead." : "Check your connection and try again."}
        </p>
        <Link
          href="/blogs"
          className={`mt-6 inline-flex h-12 items-center rounded-full bg-[var(--ink)] px-6 text-[0.95rem] font-semibold text-white ${focusRing}`}
        >
          All articles
        </Link>
      </main>
    );

  const pageUrl = `https://www.bigwigmediadigital.com/blogs/${blog.slug}`;
  const currentCategory = blog.category ? categorySlug(blog.category) : "";
  const updated = blog.lastUpdated && blog.lastUpdated !== blog.datePublished ? blog.lastUpdated : null;

  /* ================= SCHEMA GENERATION ================= */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: any[] = [];

  if (blog.schemaSettings?.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      image: blog.coverImage,
      author: { "@type": "Person", name: blog.author },
      publisher: {
        "@type": "Organization",
        name: "Bigwig Media Digital",
        logo: { "@type": "ImageObject", url: "https://www.bigwigmediadigital.com/logo.png" },
      },
      datePublished: blog.datePublished,
      dateModified: blog.lastUpdated || blog.datePublished,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    });
  }

  if (blog.schemaSettings?.breadcrumb) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bigwigmediadigital.com" },
        { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.bigwigmediadigital.com/blogs" },
        { "@type": "ListItem", position: 3, name: blog.title, item: pageUrl },
      ],
    });
  }

  if (blog.schemaSettings?.faq && blog.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  // Stored as { name, json: "<JSON-LD string>" } by the admin editor (older posts may hold raw objects).
  blog.customSchemas?.forEach((s) => {
    if (typeof s?.json === "string") {
      try {
        schemas.push(JSON.parse(s.json));
      } catch {
        /* invalid JSON-LD is skipped rather than breaking the page */
      }
    } else if (s && typeof s === "object") {
      schemas.push(s);
    }
  });

  /* ================= RENDER ================= */

  return (
    <main className="pb-8">
      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`blog-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ---------- header ---------- */}
      <header className="pb-10 pt-12 md:pb-12 md:pt-16">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--muted)]">
              <li>
                <Link href="/blogs" className={`rounded-sm font-medium text-[var(--link)] hover:underline ${focusRing}`}>
                  Blog
                </Link>
              </li>
              {blog.category && (
                <>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  <li>
                    <Link
                      href={`/blogs/category/${currentCategory}`}
                      className={`rounded-sm font-medium text-[var(--link)] hover:underline ${focusRing}`}
                    >
                      {blog.category}
                    </Link>
                  </li>
                </>
              )}
            </ol>
          </nav>

          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">{blog.excerpt}</p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-5 text-sm">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-semibold uppercase text-[var(--cyan)]"
              >
                {(blog.author || "B").trim()[0]}
              </span>
              <span className="font-semibold">{blog.author || "Bigwig Media Digital"}</span>
            </span>
            <span className="text-[var(--muted)]">
              <time dateTime={blog.datePublished}>{formatDate(blog.datePublished)}</time>
              {updated && (
                <>
                  , updated <time dateTime={updated}>{formatDate(updated)}</time>
                </>
              )}
            </span>
            <span className="flex items-center gap-1.5 text-[var(--muted)]">
              <Clock className="h-4 w-4" aria-hidden />
              {readingTime(blog.content)} min read
            </span>
            <ShareButton title={blog.title} className="sm:ml-auto" />
          </div>
        </div>
      </header>

      {/* ---------- article + sidebar ---------- */}
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
        <article className="min-w-0 lg:col-span-8">
          {/* cover at the article's width, shown whole (covers carry their own titles and logos, so never cropped) */}
          <div className="mb-8 overflow-hidden rounded-[24px] bg-[var(--ink)] md:mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.coverImage} alt={blog.title} className="block h-auto w-full" />
          </div>

          {/* navy reading panel: stored posts are written for this background */}
          <div className="rounded-[28px] bg-[var(--ink)] px-3 py-1 text-white sm:px-6 md:rounded-[32px] md:px-10 md:py-4">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>

          {blog.faqs?.length ? <Faqs faqs={blog.faqs} /> : null}

          {/* end of article */}
          <div className="mt-12 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">Found this useful? Pass it on.</p>
            <ShareButton title={blog.title} />
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[24px] bg-[var(--ink)] p-6 text-white">
              <p className="text-xl font-semibold leading-snug tracking-tight">Want this working for your business?</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Our team turns these ideas into a plan for your brand. Free, no obligation.
              </p>
              <PillLead source="blog-sidebar" tone="cyan" className="mt-5">
                Get a free strategy session
              </PillLead>
            </div>

            <nav aria-label="Blog categories" className="rounded-[24px] bg-[var(--surface)] p-6 ring-1 ring-[var(--line)]">
              <p className="font-semibold">Categories</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {blogCategories.map((c) => {
                  const active = categorySlug(c) === currentCategory;
                  return (
                    <li key={c}>
                      <Link
                        href={`/blogs/category/${categorySlug(c)}`}
                        aria-current={active ? "page" : undefined}
                        className={`inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors ${focusRing} ${
                          active
                            ? "bg-[var(--ink)] text-white"
                            : "bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--line)]"
                        }`}
                      >
                        {c}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      </div>

      {/* ---------- read next ---------- */}
      {relatedBlogs.length > 0 && (
        <section className="mt-20 border-t border-[var(--line)] pt-12 md:mt-28 md:pt-16">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="h-section">Read next</h2>
              <Link href="/blogs" className={`rounded-sm text-sm font-semibold text-[var(--link)] hover:underline ${focusRing}`}>
                All articles
              </Link>
            </div>
            <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blogs/${post.slug}`} className={`group block rounded-[20px] ${focusRing}`}>
                    <div className="overflow-hidden rounded-[20px] bg-[var(--ink)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-5 text-sm text-[var(--muted)]">
                      {post.author || "Bigwig Media Digital"}, <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight line-clamp-3 group-hover:underline group-hover:decoration-[var(--teal)] group-hover:underline-offset-4 md:text-xl">
                      {post.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

/* ---------- FAQ: the site's accordion ---------- */

function Faqs({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <section className="mt-14">
      <h2 className="h-section text-[clamp(1.6rem,2.6vw,2.2rem)]">Frequently asked questions</h2>
      <div className="mt-6">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-t border-[var(--line-strong)] last:border-b">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left font-semibold ${focusRing}`}
                >
                  {f.question}
                  <Plus
                    aria-hidden
                    className={`h-5 w-5 flex-none text-[var(--link)] transition-transform duration-200 ease-[var(--ease-out)] ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
              </h3>
              <div id={`${uid}-${i}`} hidden={!isOpen} className="max-w-[68ch] pb-5 leading-relaxed text-[var(--muted)]">
                {f.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- share: the phone's share sheet, or copy the link ---------- */

function ShareButton({ title, className = "" }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* dismissed */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };
  const Icon = copied ? Check : typeof navigator !== "undefined" && "share" in navigator ? Share2 : Link2;
  return (
    <button
      type="button"
      onClick={share}
      className={`inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold ring-1 ring-inset ring-[var(--line-strong)] transition-colors hover:bg-white ${focusRing} ${className}`}
    >
      <Icon className="h-4 w-4" aria-hidden />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}

function ArticleSkeleton() {
  return (
    <main className="wrap pb-16 pt-12 md:pt-16" aria-busy="true" aria-label="Loading article">
      <div className="h-4 w-40 animate-pulse rounded-full bg-[var(--line)]" />
      <div className="mt-6 h-12 w-full max-w-3xl animate-pulse rounded-full bg-[var(--line)]" />
      <div className="mt-3 h-12 w-2/3 max-w-2xl animate-pulse rounded-full bg-[var(--line)]" />
      <div className="mt-10 aspect-[16/9] max-h-[560px] w-full animate-pulse rounded-[28px] bg-[var(--line)]" />
    </main>
  );
}
