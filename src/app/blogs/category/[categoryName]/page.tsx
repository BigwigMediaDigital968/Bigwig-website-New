import type { Metadata } from "next";
import BlogIndex from "../../../../../components/blog/BlogIndex";
import { blogCategories, categorySlug } from "@/data/blogCategories";

type Props = { params: Promise<{ categoryName: string }> };

const nameFor = (slug: string) =>
  blogCategories.find((c) => categorySlug(c) === slug) ?? slug.replace(/-/g, " ");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = decodeURIComponent((await params).categoryName);
  const name = nameFor(slug);
  return {
    title: `${name} Blogs | Bigwig Media Digital`,
    description: `Articles on ${name} from Bigwig Media Digital, a digital marketing agency in Delhi.`,
    alternates: { canonical: `https://www.bigwigmediadigital.com/blogs/category/${slug}` },
  };
}

export default async function CategoryBlogs({ params }: Props) {
  const slug = decodeURIComponent((await params).categoryName);
  return <BlogIndex category={slug} />;
}
