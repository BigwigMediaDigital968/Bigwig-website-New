import type { Metadata } from "next";
import CareerHero from "../../../components/career/CareerHero";
import Openings from "../../../components/career/Openings";
import Perks from "../../../components/career/Perks";
import HiringProcess from "../../../components/career/HiringProcess";
import OpenApplication from "../../../components/career/OpenApplication";

const title = "Careers at Bigwig Media Digital | Digital Marketing Jobs in Delhi";
const description =
  "Join Bigwig Media Digital, Delhi's fast-growing Digital Marketing Agency. Hiring SEO experts, designers & marketers. Apply Today!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/career" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/career",
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

export default function CareerPage() {
  return (
    <main>
      <CareerHero />
      <Openings />
      <Perks />
      <HiringProcess />
      <OpenApplication />
    </main>
  );
}
