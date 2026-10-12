import type { Metadata } from "next";
import AhmedabadPage from "../../../components/ahmedabad/AhmedabadPage";

const title = "Digital Marketing Agency in Ahmedabad | Bigwig Media Digital";
const description =
  "Ads, SEO, Google Maps, websites and social media for Ahmedabad manufacturers, real estate, clinics, schools and shops. Monthly reports that show every enquiry and what it cost. Get a free growth plan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.bigwigmediadigital.com/digital-marketing-agency-ahmedabad",
  },
  openGraph: { title, description },
};

export default function Page() {
  return <AhmedabadPage />;
}
