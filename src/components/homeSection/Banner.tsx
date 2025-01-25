import './style.css';
import banner from '../../assets/Images/banner.webp';
import Frame from '../../assets/Fram.svg';
import { Link } from 'react-router-dom';
import vectorImage from '../../assets/Images/Vector 6.png';


const Banner = () => {
  return (
    <div
      id='#home'
      className='relative bg-gradient-to-r from-gray-500 to-gray-700 text-white py-20 px-8 h-[550px] md:h-[600px] lg:h-[650px] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'darken',
      }}
    >
      <div>
        {/* Background Video */}
     

        {/* Vector Image */}
        <div className='absolute inset-0 w-full  -mb-12'>
          <img
            src={vectorImage}
            alt='Vector Illustration'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='absolute inset-0 bg-black bg-opacity-20'></div>

        {/* SVG Icon */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100'>
          <img
            src={Frame} // Replace with your SVG path
            alt='Big Icon'
            className='w-64 h-64 md:w-[500px] md:h-[500px] rotating-frame'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-[1400px] text-center mx-auto'>
          <div>
            <h3 className='uppercase tracking-[12px] text-2xl font-semibold mb-6   '>
              welcome to
            </h3>
            <h1 className='text-4xl md:text-6xl lg:text-8xl uppercase  font-extrabold mb-6 font-poppins '>
              Creative <span className='text-lime'>hub</span> it agency
            </h1>
            <p className='text-xl md:text-2xl font-bold mb-11'>
              <span className='text-green'>Web & App Design & Development</span>{' '}
              ,<span className='text-[#1DF1D3]'>UI/UX Design</span> &{' '}
              <span className='text-[#FF8136]'>Branding</span>
            </p>
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
