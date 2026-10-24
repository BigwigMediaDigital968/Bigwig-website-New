import type { Metadata } from "next";
import BhopalPage from "../../../components/bhopal/BhopalPage";

const title = "Digital Marketing Agency in Bhopal | Bigwig Media Digital";
const description =
  "Looking for a digital marketing company in Bhopal? Boost online visibility with SEO, social media marketing, Google Ads, and PPC services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical:
      "https://www.bigwigmediadigital.com/digital-marketing-agency-bhopal",
  },
  openGraph: { title, description },
};

export default function Page() {
  return <BhopalPage />;
}
