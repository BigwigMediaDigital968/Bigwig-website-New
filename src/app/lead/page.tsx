import type { Metadata } from "next";
import { DEFAULT_CAMPAIGN, campaigns } from "../../../components/lp/campaigns";
import SqueezePage from "../../../components/lp/SqueezePage";

const c = campaigns[DEFAULT_CAMPAIGN];

// the generic squeeze page, for any ad; kept out of search like every /lead page
export const metadata: Metadata = {
  title: `${c.title} | Bigwig Media Digital`,
  description: c.sub,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SqueezePage campaign={c} />;
}
