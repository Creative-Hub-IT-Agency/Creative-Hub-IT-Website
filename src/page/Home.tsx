import { useEffect } from 'react';
import Banner from '../components/homeSection/Banner';
import BoldIdea from '../components/homeSection/BoldIdea';
import Introduction from '../components/homeSection/Introduction';
import Portfolio from '../components/homeSection/Portfolio';
import ProjectSlider from '../components/homeSection/ProjectSlider';
import Services from '../components/homeSection/Services';
import Tagline from '../components/homeSection/Tagline';
import Testimonials from '../components/homeSection/Testimonials';
import Consultation from '../components/shared/hero/Consultation';
import WhyChoose from '../components/shared/hero/WhyChoose';
import PortfolioSection from '../components/portfolioSection/PortfolioSection';
import AnimatedBanner from '../components/portfolioSection/AnimatedBanner';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <AnimatedBanner />
      <Introduction />
      <PortfolioSection />
      <Services />
      <Tagline />
      <ProjectSlider />
      <BoldIdea />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Consultation />
    </div>
  );
}
