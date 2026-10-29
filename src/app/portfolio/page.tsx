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

      {/* One shared background for every section below the hero, so there are no seams */}
      <div className="relative overflow-hidden bg-slate-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_600px_at_75%_4%,rgba(103,232,249,0.30),transparent_70%),radial-gradient(600px_600px_at_20%_38%,rgba(103,232,249,0.18),transparent_70%),radial-gradient(600px_600px_at_80%_70%,rgba(103,232,249,0.18),transparent_70%)]"
        />
        <div className="relative">
          <ServiceIntroTabs />
          <PaidPortfolio />
          <PortfolioGrid />
          <SocialPortfolio />
          <SEOPortfolio />
          <PortfolioCTA />
        </div>
      </div>
    </>
  );
}
