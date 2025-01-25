import Slider from './Slider';

// Import portfolio images
import Portfolio01 from '../../assets/Images/portfolio/portfolio01.png';
import Portfolio02 from '../../assets/Images/portfolio/portfolio02.png';
import Portfolio03 from '../../assets/Images/portfolio/portfolio03.png';
import Portfolio04 from '../../assets/Images/portfolio/porfolio04.png';
import Portfolio05 from '../../assets/Images/portfolio/portfolio05.png';
import Portfolio06 from '../../assets/Images/portfolio/portfolio06.png';
import limeButton from '../shared/limeButton';

const Portfolio = () => {
  // Use imported images in the array
  const appPort = [
    Portfolio01,
    Portfolio02,
    Portfolio03,
    Portfolio01,
    Portfolio02,
    Portfolio03,
    Portfolio01,
  ];
  const webPort = [
    Portfolio04,
    Portfolio05,
    Portfolio06,
    Portfolio04,
    Portfolio05,
    Portfolio06,
    Portfolio04,
  ];

  return (
    <div id='portfolio' className='w-full bg-black p-85 md:p-0 mt-[120px]'>
      <div className=' max-w-[1400px] mx-auto mb-[90px] px-5'>
        <p className='uppercase text-base mb-2 font-semibold text-[#8FDC24] font-lato'>
          satisfaction
        </p>
        <p className='text-5xl font-bold text-white font-lato'>
          Our Portfolios
        </p>
      </div>

      <Slider web={webPort} app={appPort} />
      <div className='max-w-[1400px] mx-auto text-center flex justify-center items-center mt-[50px]'>
        <limeButton text='View all portfolios' />
      </div>
    </div>
  );
};

export default Portfolio;
