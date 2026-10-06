import type { Metadata } from "next";
import ServicesIndex from "../../../components/services/ServicesIndex";
import Steps from "../../../components/home/Steps";
import Testimonials from "../../../components/home/Testimonials";

const title = "Digital Marketing Services in Delhi | SEO, PPC, SMM & More";
const description =
  "Explore Digital Marketing Services in Delhi, SEO, PPC, SMM, Web Dev, ORM & more. Trusted by 500+ brands. Contact Bigwig Media Digital Today!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/services" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/services",
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

export default function ServicesPage() {
  return (
    <main>
      <ServicesIndex />
      <Steps />
      <Testimonials />
    </main>
  );
}
