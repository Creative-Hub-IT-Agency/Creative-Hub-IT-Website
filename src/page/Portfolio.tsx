
import PortfolioBanner from '../components/portfolioSection/BannerPortfolio';
import AnimatedBanner from '../components/portfolioSection/AnimatedBanner';
import PortfolioSection from '../components/portfolioSection/PortfolioSection';
import Consultation from '../components/shared/hero/Consultation';

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <AnimatedBanner />
      <PortfolioSection />
      <Consultation/>
    </div>
  );
}
export default Portfolio