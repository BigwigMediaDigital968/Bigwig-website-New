"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE, PillLink, Reveal, SectionHead, fadeUp, focusRing, inView, stagger, wipeUp } from "../ui";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  coverImage: string;
  datePublished: string;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`);
        const data: BlogPost[] = await res.json();
        setBlogs(
          data
            .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
            .slice(0, 4),
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [featured, ...rest] = blogs;

  return (
    <section className="border-t border-[var(--line)] py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          lead="Our blog"
          title="Insights that Inspire Smarter Decisions"
          actions={<PillLink href="/blogs">View all articles</PillLink>}
        />

        <div className="mt-14">
          {loading ? (
            <div className="grid gap-8 lg:grid-cols-12" aria-busy="true" aria-label="Loading articles">
              <div className="aspect-[16/10] animate-pulse rounded-[24px] bg-[var(--line)] lg:col-span-7" />
              <div className="space-y-4 lg:col-span-5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-24 animate-pulse rounded-[16px] bg-[var(--line)]" />
                ))}
              </div>
            </div>
          ) : !featured ? (
            <p className="rounded-[24px] bg-[var(--surface)] p-10 text-center text-[var(--muted)]">
              No articles to show right now.{" "}
              <Link href="/blogs" className="font-semibold text-[var(--link)] underline underline-offset-4">
                Browse the blog
              </Link>
            </p>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal y={0} className="lg:col-span-7">
              <Link href={`/blogs/${featured.slug}`} className={`group block rounded-[24px] ${focusRing}`}>
                <motion.div {...inView} variants={wipeUp} className="overflow-hidden rounded-[24px]">
                  <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                  <motion.img
                    variants={{ hidden: { scale: 1.2 }, show: { scale: 1, transition: { duration: 1.4, ease: EASE } } }}
                    src={featured.coverImage}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  </div>
                </motion.div>
                <p className="mt-6 text-sm text-[var(--muted)]">
                  {featured.author}, <time dateTime={featured.datePublished}>{formatDate(featured.datePublished)}</time>
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight group-hover:underline group-hover:decoration-[var(--teal)] group-hover:underline-offset-4 md:text-[2rem]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-[65ch] leading-relaxed text-[var(--muted)] line-clamp-3">{featured.excerpt}</p>
              </Link>
              </Reveal>

              <motion.ul {...inView} variants={stagger(0.12, 0.2)} className="border-t border-[var(--line)] lg:col-span-5">
                {rest.map((post) => (
                  <motion.li variants={fadeUp} key={post._id} className="border-b border-[var(--line)]">
                    <Link href={`/blogs/${post.slug}`} className={`group flex items-center gap-5 rounded-md py-5 ${focusRing}`}>
                      <div className="h-24 w-32 shrink-0 overflow-hidden rounded-[16px]">
                        <img
                          src={post.coverImage}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold leading-snug line-clamp-2 group-hover:underline group-hover:decoration-[var(--teal)] group-hover:underline-offset-4">
                          {post.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-[var(--muted)]">
                          <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                        </p>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
