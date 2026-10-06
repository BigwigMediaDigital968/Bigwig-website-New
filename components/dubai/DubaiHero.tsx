"use client";

import dubaiImg from "../../Assets/dubai.jpg";
import { whatsappHref } from "../ui";
import ServiceHero from "../service/ServiceHero";

const DUBAI_WHATSAPP_MESSAGE = "Hi BigWig Media Digital! I'm interested in your digital marketing services in Dubai, UAE.";
export const DUBAI_WHATSAPP_HREF = whatsappHref(DUBAI_WHATSAPP_MESSAGE);

export default function DubaiHero() {
  return (
    <ServiceHero
      image={dubaiImg}
      lead="Digital marketing agency in Dubai, UAE"
      title="Transform your business with the best digital marketing agency in Dubai, UAE"
      intro={
        <p>
          <span className="text-white">We help brands grow with proven digital marketing strategies</span> in SEO,
          social media, and performance marketing.
        </p>
      }
      cta={{ label: "Explore our services", href: "#services" }}
      whatsappMessage={DUBAI_WHATSAPP_MESSAGE}
      facts={[
        { value: "8+", label: "Years in digital marketing" },
        { value: "360°", label: "Digital marketing" },
        { value: "UAE & India", label: "Offices", small: true },
      ]}
      formSource="dubai-hero"
      formCountry="ae"
    />
  );
}
