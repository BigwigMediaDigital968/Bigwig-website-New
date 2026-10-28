import PortfolioCTA from "./component/PortfolioCTA";
import PortfolioGrid from "./component/PortfolioGrid";
import PortifolioHero from "./component/PortfolioHero";
import ServiceIntroTabs from "./component/ServiceIntroTabs";

export default function PortfolioPage() {
  return (
    <>
      <PortifolioHero />
      <ServiceIntroTabs />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
}
