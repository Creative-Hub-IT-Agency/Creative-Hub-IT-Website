import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';

const AnimatedBanner = () => {
    return (
      <div className='relative text-white overflow-hidden mb-16 pt-16 h-80'>
        {/* Top Section */}
        {/* 
    <motion.div
          className='relative flex whitespace-nowrap md:text-base font-semibold z-10'
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
        ></motion.div>          
    
      {/* Scrolling Banner */}
        <div className=''>
          <motion.div
            className='flex whitespace-nowrap md:text-base font-semibold'
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'linear',
            }}
          ></motion.div>
        </div>

      
        {/* first one */}
        <Marquee>
          <div
            className='flex justify-center bg-[#222222] py-6 font-semibold md:text-base min-w-full'
            style={{ transform: 'rotate(6deg)' }}
          >
            <span className='mx-4 text-3xl'>DESIGN</span>
            <span className='mx-4 text-3xl'>+</span>
            <span className='mx-4 text-3xl'>WEB DEVELOPMENT</span>
            <span className='mx-4 text-3xl'>+</span>
            <span className='mx-4 text-3xl'>BRANDING</span>
          </div>
        </Marquee>
        <Marquee>
          <div
            className='relative overflow-hidden bg-[#E02166] text-white text-center py-6 min-w-full'
            style={{ transform: 'rotate(-6deg)' }}
          >
            <span className='mx-4 text-4xl'>HIRE US NOW</span>
            <span className='mx-4 text-4xl'>+</span>
            <span className='mx-4 text-4xl'>HIRE US NOW</span>
            <span className='mx-4 text-4xl'>+</span>
            <span className='mx-4 text-4xl'>HIRE US NOW</span>
          </div>
        </Marquee>
      </div>
    );
};

export default AnimatedBanner;
