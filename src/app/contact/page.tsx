import type { Metadata } from "next";
import ContactIntro from "../../../components/contact/ContactIntro";
import Offices from "../../../components/contact/Offices";

const title = "Contact BigWig Media Digital | Get Free Consultation";
const description =
  "Contact Bigwig Media Digital, Digital Marketing Agency in Delhi. Call +91 96858 92813 or visit us at Gulabi Bagh, Delhi. Get in Touch Now!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/contact" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/contact",
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

// Office addresses are already published as LocalBusiness schema in the root layout.
export default function ContactPage() {
  return (
    <main>
      <ContactIntro />
      <Offices />
    </main>
  );
}
