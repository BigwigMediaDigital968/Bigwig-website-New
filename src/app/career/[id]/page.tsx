import type { Metadata } from "next";
import JobDetail from "../../../../components/career/JobDetail";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const url = `https://www.bigwigmediadigital.com/career/${id}`;
  const description =
    "Apply for an open role at Bigwig Media Digital, a fast-growing Digital Marketing Agency in Delhi.";
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      title: "Careers at Bigwig Media Digital",
      description,
      url,
      siteName: "Bigwig Media Digital",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  return <JobDetail id={id} />;
}
