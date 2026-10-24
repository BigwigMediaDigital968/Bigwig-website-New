import type { Metadata } from "next";
import ClientWall from "../../../components/clients/ClientWall";
import Testimonials from "../../../components/home/Testimonials";
import ClientWall2 from "../../../components/clients/ClientWall2";

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
        url: "https://www.bigwigmediadigital.com/og-bigwig.png",
      },
    ],
  },
};

export default function ClientsPage() {
  return (
    <main>
      {/* <ClientWall /> */}
      <ClientWall2 />
      <Testimonials />
    </main>
  );
}
