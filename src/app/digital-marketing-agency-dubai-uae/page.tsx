import type { Metadata } from "next";
import DubaiClients from "../../../components/dubai/DubaiClients";
import DubaiHero from "../../../components/dubai/DubaiHero";
import DubaiIntro from "../../../components/dubai/DubaiIntro";
import DubaiServices from "../../../components/dubai/DubaiServices";
import DubaiWhyUs from "../../../components/dubai/DubaiWhyUs";

const title = "Digital Marketing Agency in Dubai UAE | Bigwig Media Digital";
const description =
  "Bigwig Media Digital, a Digital Marketing Agency in Dubai UAE. SEO, SMM, PPC & Web Development to grow your business in UAE. Contact Us!";
const url = "https://www.bigwigmediadigital.com/digital-marketing-agency-dubai-uae";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
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

export default function DubaiPage() {
  return (
    <main>
      <DubaiHero />
      <DubaiClients />
      <DubaiIntro />
      <DubaiServices />
      <DubaiWhyUs />
    </main>
  );
}
