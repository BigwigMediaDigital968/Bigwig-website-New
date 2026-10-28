import type { Metadata } from "next";
import Link from "next/link";
import sitemap from "../sitemap";

const title = "Sitemap | Bigwig Media Digital";
const description =
  "Browse every page on the Bigwig Media Digital website, including our services, locations, and blogs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/sitemap.html" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/sitemap.html",
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.bigwigmediadigital.com/og-bigwig.png",
      },
    ],
  },
};

// Rebuild hourly so new blogs show up without a redeploy
export const revalidate = 3600;

const baseUrl = "https://www.bigwigmediadigital.com";

// Labels where the slug doesn't read well on its own
const LABELS: Record<string, string> = {
  "/": "Home",
  "/faq": "FAQs",
  "/terms-and-condition": "Terms & Conditions",
  "/services/website-development-company-in-delhi": "Website Design & Development",
  "/services/online-reputation-management": "Online Reputation Management (ORM)",
  "/digital-marketing-agency-dubai-uae": "Digital Marketing Agency Dubai, UAE",
};

async function getBlogTitles(): Promise<Record<string, string>> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/viewblog`, {
      next: { revalidate },
    });
    if (!res.ok) return {};
    const blogs = await res.json();
    return Object.fromEntries(blogs.map((blog: any) => [`/blogs/${blog.slug}`, blog.title]));
  } catch (error) {
    console.error("Sitemap page blog fetch error:", error);
    return {};
  }
}

function labelFor(path: string, blogTitles: Record<string, string>) {
  if (LABELS[path]) return LABELS[path];
  if (blogTitles[path]) return blogTitles[path];
  const slug = path.split("/").filter(Boolean).pop() ?? "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function SitemapPage() {
  // Same entries as sitemap.xml, so both stay in sync
  const [entries, blogTitles] = await Promise.all([sitemap(), getBlogTitles()]);
  const paths = entries.map((entry) => entry.url.replace(baseUrl, "") || "/");

  const groups = [
    {
      name: "Pages",
      paths: paths.filter(
        (p) =>
          !p.startsWith("/services/") &&
          !p.startsWith("/blogs/") &&
          !p.startsWith("/digital-marketing-agency-"),
      ),
    },
    { name: "Services", paths: paths.filter((p) => p.startsWith("/services/")) },
    { name: "Locations", paths: paths.filter((p) => p.startsWith("/digital-marketing-agency-")) },
    { name: "Blogs", paths: paths.filter((p) => p.startsWith("/blogs/")) },
  ].filter((group) => group.paths.length > 0);

  return (
    <main>
      <section className="pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="wrap">
          <p className="text-[0.95rem] font-medium text-[var(--link)]">Find your way around</p>
          <h1 className="mt-4 text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            Sitemap
          </h1>
        </div>
      </section>

      <div className="wrap grid gap-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <section
            key={group.name}
            className={group.name === "Blogs" ? "md:col-span-2 lg:col-span-3" : undefined}
          >
            <h2 className="mb-5 border-b border-[var(--line)] pb-3 text-2xl font-semibold tracking-tight text-[var(--ink)]">
              {group.name}
            </h2>
            <ul
              className={`space-y-3 ${
                group.name === "Blogs" ? "md:columns-2 lg:columns-3 md:gap-12 [&>li]:break-inside-avoid" : ""
              }`}
            >
              {group.paths.map((path) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-[var(--muted)] transition-colors hover:text-[var(--ink)] hover:underline"
                  >
                    {labelFor(path, blogTitles)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
