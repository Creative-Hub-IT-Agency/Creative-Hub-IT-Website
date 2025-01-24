import "./style.css"
import ideasImg from "../../assets/image.png"
import vector from "../../assets/Vector.svg"
import ellips from "../../assets/Ellipse.svg"

const BoldIdea = () => {
    return (
        <div className=" bg-black mt-[120px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[180px] bg-black text-white max-w-[1400px] mx-auto px-5">
                {/* Left Section with Image */}
                <div className="relative w-full md:w-1/2 ">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={ideasImg}
                            alt="Team Working"
                            className="w-full object-contain mb-14"
                        />
                    </div>
                    <div className="">
                        <p className="text-text text-base text-normal font-poppins">Your ideas are the spark, our code turns them into pure gold.  </p>
                        <p className="text-text text-base text-normal font-poppins md:w-[400px]">Together, we craft success stories..</p>
                    </div>
                </div>

                {/* Right Section with Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className=" text-start text-[40px] lg:text-6xl whitespace-nowrap font-bold font-lato">
                        Where Bold Ideas
                    </h1>

                    <div className="mt-4 flex  gap-5">
                        <div className="flex gap-5 items-center justify-start">
                            <div>
                                <img src={vector} alt="check icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex gap-5">
                                    <p> 12K+</p>
                                    <img src={ellips} alt="check icon" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <p className="whitespace-nowrap">Project perweek</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-4xl md:text-4xl lg:text-6xl whitespace-nowrap font-bold leading-snug font-lato">Find Their</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <p className="text-4xl md:text-4xl lg:text-6xl whitespace-nowrap font-bold leading-snug font-lato">
                                Code/
                            </p>
                        </div>
                        <div className="relative w-[280px] md:w-[200px] lg:w-[330px]">
                            <hr className="bg-[#8FDC24] max-w-[350px] h-1 absolute bottom-0 left-0 right-0" />
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-5 mt-10 font-poppins">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <img src={ellips} alt="check icon" className="w-5 h-5 md:w-6 md:h-6" />
                                <p className="">Your Vision, Our Mission</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <img src={ellips} alt="check icon" className="w-5 h-5 md:w-6 md:h-6" />

                                <p className="">Transform Ideas into Reality</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 ">
                                <img src={ellips} alt="check icon" className="w-5 h-5 md:w-6 md:h-6" />
                                <p className=""> Digital Mastery, Done Right</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <img src={ellips} alt="check icon" className="w-5 h-5 md:w-6 md:h-6" />

                                <p className="">Where Code Meets Creativity</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default BoldIdea;
