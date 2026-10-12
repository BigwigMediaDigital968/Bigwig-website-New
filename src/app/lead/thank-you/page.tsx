import type { Metadata } from "next";
import ThankYou from "../../../../components/lp/ThankYou";

export const metadata: Metadata = {
  title: "Thank you | Bigwig Media Digital",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYou />;
}
