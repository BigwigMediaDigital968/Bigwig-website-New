import type { Metadata } from "next";

import Clients from "../../../components/home/Clients";
import AboutHero from "../../../components/about/AboutHero";
import Story from "../../../components/about/Story";
import WhoWeAre from "../../../components/about/WhoWeAre";
import Blueprint from "../../../components/about/Blueprint";
import WhyUs from "../../../components/about/WhyUs";
import Motto from "../../../components/about/Motto";

const title = "About BigWig Media Digital | Digital Marketing Agency Delhi";
const description =
  "Bigwig Media Digital, 360° Digital Marketing Agency in Delhi. 5+ Years | 50+ Experts | 500+ Clients. Google & Meta Partner. Know Our Story!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/about" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/about",
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

export default function About() {
  return (
    <main>
      <AboutHero />
      <Story />
      <WhoWeAre />
      <Blueprint />
      <WhyUs />
      <Clients />
      <Motto />
    </main>
  );
}
