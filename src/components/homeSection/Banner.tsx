import FlipWords from '../FlipWords';
import './style.css';
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

const Banner = () => {


  return (
    <div
      id='#home'
      className=' bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 px-8 h-[550px] md:h-[600px] lg:h-[650px] flex flex-col items-center justify-center'
      style={heroStyles}
    >
      <div>
  

        {/* Content */}
        <div className=' z-10 max-w-[1400px] text-center mx-auto'>
          <div>
            <h3 className='uppercase tracking-[12px] text-2xl font-bold mb-6   '>
              welcome to
            </h3>
            <h1 className='text-4xl md:text-6xl lg:text-8xl uppercase  font-extrabold mb-6 font-poppins '>
              Creative <span className='text-lime'>hub</span> it agency
            </h1>
            {/* <p>
              <span className='text-green'>Web & App Design & Development</span>{' '}
              ,<span className='text-[#1DF1D3]'>UI/UX Design</span> &{' '}
              <span className='text-[#FF8136]'>Branding</span>
            </p> */}
            <div className='text-xl md:text-2xl lg:text-3xl font-bold mb-12 '>
              <FlipWords words={words} />
            </div>
            <Link
              to='./contact'
              className='bg-lime uppercase hover:bg-deep-lime hover:bg-opacity-90 transition transform hover:scale-105  text-white hover:lime-light font-medium py-5 px-12 rounded-full'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
