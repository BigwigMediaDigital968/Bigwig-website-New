import PaidPortfolio from "./component/PaidPortfolio";
import PortfolioCTA from "./component/PortfolioCTA";
import PortfolioGrid from "./component/PortfolioGrid";
import PortifolioHero from "./component/PortfolioHero";
import SEOPortfolio from "./component/SEOPortfolio";
import ServiceIntroTabs from "./component/ServiceIntroTabs";
import SocialPortfolio from "./component/SocialPortfolio";

export default function PortfolioPage() {
  return (
    <>
      <PortifolioHero />
      <ServiceIntroTabs />
      <PaidPortfolio />
      <PortfolioGrid />
      <SocialPortfolio />
      <SEOPortfolio />
      <PortfolioCTA />
    </>
  );
}
