import PortfolioCTA from "./component/PortfolioCTA";
import PortfolioGrid from "./component/PortfolioGrid";
import PortifolioHero from "./component/PortfolioHero";

export default function PortfolioPage() {
  return (
    <>
      <PortifolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
}
