import video from "../../../assets/video/video-01.mp4";
import rightarrow from "../../../assets/Rightarrow.svg"

export default function WhyChoose() {
  return (
    <section className="mt-[120px]  p-3 md:p-0">
      <div className="relative h-[600px] flex justify-center items-center overflow-hidden px-5">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-25"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container mx-auto  flex flex-col md:flex-row gap-5 md:gap[240px]">
          {/* Left Section */}
          <div className="text-text text-start mb-5 md:mb-0 w-full md:w-1/2">
            <h2 className=" text-3xl mb-4 font-semibold  text-[#8FDC24]">Why Choose Us</h2>
            <div className="font-lato">
              <h2 className="text-4xl md:text-6xl text-text leading-snug font-normal italic md:mb-6">
                Empowering Your Project Journey
              </h2>
              <p className="text-lg md:text-2xl font-medium md:mb-6 font-poppins">
                Scalable Solutions for Tomorrow
              </p>
              <p className="text-normal max-w-full md:max-w-[250px] font-poppins">
                We don’t just develop for today—we build solutions that grow with your business.
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="hidden md:block border-l-2 mx-10 border-gray-500 "></div>

          {/* Right Section */}
          <div className="flex flex-col w-[500px]   md:w-1/2">
            {/* 1st Column */}
            <div className="flex gap-5">
              <img src={rightarrow} alt="check icon" className="w-8 h-8" />
              <div>
                <p className="text-lg md:text-xl text-white font-bold font-poppins md:mb-4">End-to-End Expertise</p>
                <p className="text-text text-sm md:text-normal pt-2 mb-5 md:mb-10 font-poppins leading-6">
                  From concept to deployment, we manage every <br /> step of your digital journey.
                </p>
              </div>
            </div>

            {/* 2nd Column */}
            <div className="flex gap-5">
              <img src={rightarrow} alt="check icon" className="w-8 h-8" />
              <div>
                <p className="text-lg md:text-xl text-white font-bold font-poppins md:mb-4">User-Centered Approach</p>
                <p className="text-text text-sm md:text-normal pt-2 mb-5 md:mb-10 font-poppins">
                  Your users are at the heart of everything we build.
                </p>
              </div>
            </div>

            {/* 3rd Column */}
            <div className="flex gap-5">
              <img src={rightarrow} alt="check icon" className="w-8 h-8" />
              <div>
                <p className="text-lg md:text-xl text-white font-bold font-poppins md:mb-4">Proven Success Across Industries</p>
                <p className="text-text text-sm md:text-normal pt-2 md:mb-10 font-poppins leading-6">
                  From startups to enterprises, we’ve helped clients <br /> in diverse industries achieve digital success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
