import type { Metadata } from "next";

const title = "Privacy Policy | Bigwig Media Digital";
const description =
  "Review Bigwig Media Digital's Privacy Policy. We are committed to protecting your personal data in compliance with data protection laws.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.bigwigmediadigital.com/privacy-policy" },
  openGraph: {
    title,
    description: "Understand how Bigwig Media Digital collects, uses and protects your personal information.",
    url: "https://www.bigwigmediadigital.com/privacy-policy",
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

const h2 = "mt-12 text-2xl font-semibold tracking-tight text-[var(--ink)]";
const list = "list-disc space-y-2 pl-6 marker:text-[var(--teal)]";

export default function PrivacyPolicy() {
  return (
    <main className="wrap pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="max-w-3xl">
        <p className="text-[0.95rem] font-medium text-[var(--link)]">Legal</p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-[var(--muted)]">Last updated: July 23, 2025</p>

        <div className="mt-10 space-y-4 border-t border-[var(--line)] pt-10 text-[1.05rem] leading-relaxed text-[var(--muted)]">
          <p>
            Welcome to the website of <strong className="font-semibold text-[var(--ink)]">BigWig Media Digital</strong>.
            We are dedicated to safeguarding the privacy of our visitors. This policy explains what happens to any
            personal data that you provide to us, or that we collect from you while you visit our site. We update it
            from time to time, so please review it regularly.
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p>In operating and managing our website we may capture and use the following data about you:</p>
          <ul className={list}>
            <li>
              Details about your use of our website, including details of your visits such as pages viewed and the
              resources that you access. This may include traffic data, location data and other communication data.
            </li>
            <li>Information provided willingly by you, for example when you register for information or purchase a service.</li>
            <li>Information that you provide when you interact with us by any means.</li>
          </ul>

          <h2 className={h2}>Use of your information</h2>
          <p>
            We use the information that we collect from you to provide our services based on the information given. In
            addition, we may use the information for one or more of the following purposes:
          </p>
          <ul className={list}>
            <li>To provide information to you, on your request, relating to our services.</li>
            <li>
              To provide information about other related services that may be of interest to you. Such additional
              information will only be provided when you have consented to receive it.
            </li>
            <li>To inform you about any changes to our website and services.</li>
            <li>To improve our website and customer experience, and to personalise your experience while visiting our website.</li>
            <li>
              If you have previously purchased any service from us, to provide you with details of similar or other
              services that you may be interested in.
            </li>
            <li>To administer a contest, promotion, survey or other site features.</li>
          </ul>
          <p>
            Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other
            person or company for any reason whatsoever without your consent, other than for the purpose of delivering
            the purchased service.
          </p>

          <h2 className={h2}>Storing your personal data</h2>
          <p>
            Sending information over the internet is not totally secure, and on some occasions such information can be
            intercepted. We cannot guarantee the security of data that you choose to send us electronically; sending
            such information is entirely at your own risk. Once we receive your data, we implement appropriate
            safeguards to store it securely.
          </p>

          <h2 className={h2}>Use of cookies</h2>
          <p>
            Cookies provide information regarding the computer used by a visitor. We may use cookies to gather
            information about your computer in order to help us improve our website, and about your general internet
            use. Where used, these cookies are downloaded to your computer and stored on its hard drive.
          </p>
          <p>
            Such information will not identify you personally. It is statistical data and does not identify any
            personal details whatsoever. You can adjust the settings on your computer to decline cookies if you wish, by
            activating the reject-cookies setting in your browser.
          </p>
          <p>
            Our advertisers may also use cookies, over which we have no control. Such cookies (if used) would be
            downloaded once you click on advertisements on our website.
          </p>

          <h2 className={h2}>Disclosing your information</h2>
          <p>
            We will not disclose your personal information to any other party other than in accordance with this
            Privacy Policy and in the circumstances detailed below:
          </p>
          <ul className={list}>
            <li>In the event that we sell any or all of our business to a buyer.</li>
            <li>Where we are legally required by law to disclose your personal information.</li>
            <li>To further fraud protection and reduce the risk of fraud.</li>
          </ul>

          <h2 className={h2}>Third-party links</h2>
          <p>
            On occasion, we include links to third parties on this website. Where we provide a link, it does not mean
            that we endorse or approve that site’s policy towards visitor privacy. You should review their privacy
            policy before sending them any personal data.
          </p>

          <h2 className={h2}>Online privacy policy only</h2>
          <p>
            This privacy policy applies only to information collected through our website and not to information
            collected offline.
          </p>

          <h2 className={h2}>Your consent</h2>
          <p>By using our website, you consent to our privacy policy.</p>

          <h2 className={h2}>Contacting us</h2>
          <p>
            Please do not hesitate to contact us regarding any matter relating to this Privacy Policy at Bigwig Media
            Digital, Plot No. 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, or{" "}
            <a
              href="mailto:support@bigwigmediadigital.com"
              className="font-medium text-[var(--link)] underline underline-offset-4"
            >
              support@bigwigmediadigital.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
