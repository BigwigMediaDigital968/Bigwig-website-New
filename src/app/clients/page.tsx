import type { Metadata } from "next";
import ClientWall from "../../../components/clients/ClientWall";
import Testimonials from "../../../components/home/Testimonials";

const title = "Our Clients | BigWig Media Digital Portfolio";
const description =
  "Bigwig Media Digital has partnered with 500+ brands across India & Dubai. See how our Digital Marketing Agency in Delhi drives real growth!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/clients" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/clients",
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

export default function ClientsPage() {
  return (
    <main>
      <ClientWall />
      <Testimonials />
    </main>
  );
}
