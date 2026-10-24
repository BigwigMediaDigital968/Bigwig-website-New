import type { Metadata } from "next";
import GoaPage from "../../../components/goa/GoaPage";

const title = "Digital Marketing Agency in Goa | Bigwig Media Digital";
const description =
  "Looking for a digital marketing agency in Goa? Boost your online visibility with SEO, social media marketing, PPC, and content marketing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/digital-marketing-agency-goa",
  },
  openGraph: { title, description },
};

export default function Page() {
  return <GoaPage />;
}
