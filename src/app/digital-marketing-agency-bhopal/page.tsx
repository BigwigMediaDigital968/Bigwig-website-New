import type { Metadata } from "next";
import BhopalPage from "../../../components/bhopal/BhopalPage";

const title = "Digital Marketing Agency in Bhopal | Bigwig Media Digital";
const description =
  "Ads, SEO, Google Maps, websites and social media for Bhopal businesses, from a team with an office in the city. Get a free growth plan built around your customers and budget.";

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
