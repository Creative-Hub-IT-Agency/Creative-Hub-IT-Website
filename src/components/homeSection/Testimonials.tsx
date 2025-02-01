import testimonialImage from '../../assets/testimonials.png';
import aulia from '../../assets/Images/aulia.png';
import alex from '../../assets/Images/alex.png';
import invertComa from '../../assets/“.svg';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div id='testimonials' className='max-w-[1400px] mx-auto mt-[120px] px-5 '>
      <div className='flex flex-col md:flex-row justify-between gap-[65px]'>
        <div className='w-full md:w-1/2 mb-5 md:mb-0'>
          <h1 className='text-lg mb-9 font-medium text-[#8FDC24]'>
            Testimonials
          </h1>
          <p className='text-text text-3xl md:text-4xl lg:text-[55px] font-normal mb-5 italic font-lato'>
            100+ Happy Clients Said To
          </p>
          <p className='text-text text-3xl md:text-4xl lg:text-[55px] font-normal leading-snug italic font-lato'>
            US They Are Satisfied
          </p>
        </div>

        <img
          className='w-full md:w-1/2'
          src={testimonialImage}
          alt='testimonials'
        />
      </div>

      <div className='flex flex-col md:flex-row -mt-16 md:-mt-32 gap-5 justify-center items-center'>
        <div className='w-full md:w-3/4 flex flex-col md:flex-row gap-5 justify-center items-center p-4 md:p-2'>
          <div className='shadow-xl bg-[#95979a] bg-opacity-50 backdrop-blur-md p-5 rounded-2xl relative z-00 hover:bg-opacity-60 transition transform hover:scale-105 max-w-[500px]'>
            <div className=''>
              <img
                className='md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] mb-3'
                src={invertComa}
                alt='testimonials'
              />
              <p className='text-md lg:text-xl font-normal text-text mb-[60px]'>
                Incredible work! They delivered a stunning website that exceeded
                all our expectations. Highly recommend!
              </p>
            </div>
            <hr />
            <div className='flex gap-6 mt-8'>
              <img className='w-[50px] h-[50px]' src={aulia} alt='alex' />
              <div className='text-text'>
                <p className='font-bold'>Aulia Morgan.</p>
                {/* <p>Officer</p> */}
              </div>
            </div>
          </div>
          <div className='shadow-xl bg-[#95979a] bg-opacity-50 backdrop-blur-sm p-5 rounded-2xl  hover:bg-opacity-60 transition transform hover:scale-105 max-w-[500px]'>
            <div className=''>
              <img
                className='md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] mb-3'
                src={invertComa}
                alt='testimonials'
              />
              <p className='text-text text-md lg:text-xl font-normal mb-[60px]'>
                Exceptional service! Our platform looks great and performs even
                better. User engagement has skyrocketed!
              </p>
            </div>
            <hr />
            <div className='flex gap-6 mt-8'>
              <img className='w-[50px] h-[50px]' src={alex} alt='alex' />
              <div className='text-text'>
                <p className='font-bold'>Alex Kordio.</p>
                <p>Business man</p>
              </div>
            </div>
          </div>
        </div>

        {/* See more button */}
        <div className='w-full md:w-1/4 flex justify-center items-center md:mt-14'>
          <button className='bg-lime hover:bg-deep-lime hover:bg-opacity-90 transition transform hover:scale-105 font-bold text-white px-5 py-4 rounded-lg md:mt-16'>
            <Link to="/testimonials" className='border-r-4 px-2 h-4 flex items-center'>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
