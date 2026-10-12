import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns } from "../../../../components/lp/campaigns";
import SqueezePage from "../../../../components/lp/SqueezePage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(campaigns).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = campaigns[slug];
  if (!c) return {};
  // ad landing pages stay out of search, so they don't compete with the city pages
  return { title: `${c.title} | Bigwig Media Digital`, description: c.sub, robots: { index: false, follow: false } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = campaigns[slug];
  if (!c) notFound();
  return <SqueezePage campaign={c} />;
}
