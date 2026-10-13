import type { Metadata } from "next";

const title = "Terms & Conditions | Bigwig Media Digital";
const description =
  "Read the Terms & Conditions for using Bigwig Media Digital's website and digital marketing services. Review before engaging with us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/terms-and-condition" },
  openGraph: {
    title,
    description,
    url: "https://www.bigwigmediadigital.com/terms-and-condition",
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

const terms: [string, string][] = [
  [
    "General use",
    "All content on this website (excluding third-party materials) is owned by BigWig Media Digital and protected under copyright law. You agree not to copy, modify, distribute, or exploit any material without our written permission.",
  ],
  [
    "Limited license",
    "You are granted a non-exclusive, non-transferable license to access the website for informational purposes. Any attempt to disrupt, damage, or interfere with website operations is strictly prohibited.",
  ],
  [
    "Third-party content",
    "Our site may include third-party links or information. BigWig Media Digital does not endorse, control, or guarantee the accuracy of third-party content and is not responsible for any risks or damages arising from its use.",
  ],
  [
    "No warranties",
    "All content and services are provided on an “as-is” basis without warranties of any kind. We make no assurances regarding accuracy, reliability, completeness, or error-free performance.",
  ],
  [
    "Limitation of liability",
    "BigWig Media Digital is not liable for any damages arising from the use or inability to use our website or services, including loss of profits, business interruption, or data loss.",
  ],
  [
    "Indemnification",
    "You agree to indemnify and hold BigWig Media Digital harmless from any claims, losses, or damages resulting from misuse of our website or violation of these terms.",
  ],
  [
    "Changes to terms",
    "BigWig Media Digital may update these Terms & Conditions at any time. Continued use of the website following updates signifies your acceptance of the revised terms.",
  ],
  [
    "Intellectual property",
    "Clients guarantee that all content provided to BigWig Media Digital is owned or licensed by them. Rights to work created by us are transferred to the client only after full payment is received.",
  ],
  [
    "Payment terms",
    "Payments must be made to “BigWig Media Digital, Delhi.” Late payments may incur a 1.5% monthly interest charge. Recovery or legal fees, if applicable, will be billed to the client.",
  ],
  [
    "Termination & refunds",
    "Clients may cancel ongoing services by providing written notice. Initial deposits are non-refundable, and completed work will be billed up to the date of cancellation.",
  ],
  [
    "Website development",
    "Clients must provide clear project requirements. Modifications after project approval may incur additional charges. Delays caused by third-party integrations or incomplete content may affect delivery timelines.",
  ],
  [
    "Hosting & domains",
    "Clients are responsible for timely renewal of hosting and domain services. BigWig Media Digital is not liable for data loss or downtime due to non-payment or issues with third-party providers.",
  ],
  [
    "Maintenance plans",
    "Maintenance packages include minor updates only and are billed quarterly. Unused hours do not roll over. Additional tasks outside the plan will be billed separately.",
  ],
  [
    "Dedicated resources",
    "Dedicated resource plans require timely client feedback and content. Delays may affect project progress and deadlines.",
  ],
  [
    "Confidentiality & non-solicitation",
    "Both parties agree to maintain confidentiality of shared information. Neither party may hire or solicit the other’s employees for 24 months after project completion.",
  ],
  [
    "Governing law",
    "These terms are governed by Indian law. All disputes will be handled under the jurisdiction of New Delhi courts.",
  ],
  [
    "Entire agreement",
    "These Terms & Conditions constitute the full agreement between you and BigWig Media Digital. Any amendments must be made in writing.",
  ],
];

export default function TermsOfUse() {
  return (
    <main className="wrap pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[0.95rem] font-medium text-[var(--link)]">Legal</p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          Terms &amp; Conditions
        </h1>

        <div className="mt-10 space-y-4 border-t border-[var(--line)] pt-10 text-[1.05rem] leading-relaxed text-[var(--muted)]">
          <p>
            These Terms &amp; Conditions govern your use of BigWig Media Digital’s website and services. By accessing
            or using them, you agree to be bound by these terms. If you do not agree with any part of them, please
            discontinue use of our website and services.
          </p>

          {terms.map(([heading, text], i) => (
            <section key={heading}>
              <h2 className="mt-12 text-2xl font-semibold tracking-tight text-[var(--ink)]">
                {i + 1}. {heading}
              </h2>
              <p className="mt-3">{text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
