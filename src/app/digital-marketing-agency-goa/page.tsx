import type { Metadata } from "next";
import GoaPage from "../../../components/goa/GoaPage";

const title = "Digital Marketing Agency in Goa | Bigwig Media Digital";
const description =
  "Direct bookings, enquiries and footfall for Goa hotels, villas, cafés, real estate and local brands, from a team based in Mapusa. Get a free season plan.";

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
