import { FaArrowDown } from 'react-icons/fa';
import FlipWords from './FlipWords';
import { Link } from 'react-router-dom';

const heroStyles = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('/banner.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'darken',
};

const words = [
  'Website Design, Development and Deployment',
  'Digital Marketing and SEO Optimization',
  'Troubleshooting, Debugging and Bug Fixing',
];

const PortfolioBanner = () => {
  return (
    <div
      id='#home'
      className=' bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 px-8 w-full h-[550px] md:h-[600px] lg:h-[650px] flex flex-col justify-center'
      style={heroStyles}
    >
      <div>
        {/* Content */}
        <div className=' z-10 text-center'>
          <div>
            <h1 className='text-4xl md:text-6xl lg:text-8xl uppercase  font-extrabold mb-6 font-poppins '>
              Our Works
            </h1>
            <div className='text-xl md:text-2xl lg:text-3xl font-bold mb-12 '>
              <FlipWords words={words} />
            </div>        
              <a
                href='#portfolio'
                className='bg-lime uppercase hover:bg-deep-lime hover:bg-opacity-90 transition transform hover:scale-105  text-white hover:lime-light font-medium py-5 px-12 rounded-full cursor-pointer'
              >
                Explore More 
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
