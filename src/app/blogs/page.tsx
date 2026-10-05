import type { Metadata } from "next";
import BlogIndex from "../../../components/blog/BlogIndex";

const title = "Digital Marketing Blogs | SEO, SMO & Marketing Tips";
const description =
  "Read expert Digital Marketing blogs from Bigwig Media Digital, Delhi. Latest insights on SEO, PPC, SMM & Content Marketing. Explore Now!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/blogs" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/blogs",
    siteName: "Bigwig Media Digital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyum0r6gf/image/upload/v1770032945/WhatsApp_Image_2026-02-02_at_4.12.04_PM_2_qj4azj.jpg",
      },
    ],
  },
};

export default function Blogs() {
  return <BlogIndex />;
}
