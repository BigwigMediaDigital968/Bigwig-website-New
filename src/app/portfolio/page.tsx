import Footer from "../../../components/layout/Footer";
import Nav from "../../../components/layout/Nav";
import PortfolioCTA from "./component/PortfolioCTA";
import PortfolioGrid from "./component/PortfolioGrid";
import PortifolioHero from "./component/PortfolioHero";

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <PortifolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
      <Footer />
    </>
  );
}
