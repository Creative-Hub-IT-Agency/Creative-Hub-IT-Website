import Marquee from 'react-fast-marquee';

const AnimatedBanner = () => {
    return (
      <div className='relative text-white overflow-hidden pt-16 h-96'>
        {/* first one */}
        <div style={{ transform: 'rotate(6deg)' }}>
          <Marquee direction='right'>
            <div className='flex justify-center bg-[#222222] py-6 font-semibold md:text-base min-w-full'>
              <span className='mx-4 text-3xl'>DESIGN</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>WEB DEVELOPMENT</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>BRANDING</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>DESIGN</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>WEB DEVELOPMENT</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>BRANDING</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>DESIGN</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>WEB DEVELOPMENT</span>
              <span className='mx-4 text-3xl'>+</span>
              <span className='mx-4 text-3xl'>BRANDING</span>
            </div>
          </Marquee>
        </div>

        {/* second one */}

        <div className='-mt-[70px]' style={{ transform: 'rotate(-6deg)' }}>
          <Marquee>
            <div className='relative overflow-hidden bg-[#E02166] text-white text-center py-6 min-w-full'>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
              <span className='mx-4 text-4xl'>+</span>
              <span className='mx-4 text-4xl'>HIRE US NOW</span>
            </div>
          </Marquee>
        </div>
      </div>
    );
};

export default AnimatedBanner;
