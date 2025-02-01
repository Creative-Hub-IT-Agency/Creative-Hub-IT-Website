import Marquee from "react-fast-marquee";

interface AnimatedBanner2Props {
    slider_text: string[];
    slider_text2: string[];
}

const AnimatedBanner2: React.FC<AnimatedBanner2Props> = ({ slider_text, slider_text2 }) => {


    return (
        <div>
            <div className="bg-main_color">
                <Marquee
                    autoFill={true}
                    gradient={true}
                    gradientColor="#222"
                >
                    <div
                        className='flex items-center justify-between bg-main_color py-5 sm:py-10 font-semibold md:text-base min-w-full'
                    >
                        {
                            slider_text.map((text, index) =>
                                <span key={index} className='text-3xl sm:text-6xl mx-8 text-white'>{text}</span>
                            )
                        }
                    </div>
                </Marquee>
            </div>
            <div className="relative overflow-hidden h-48">
                <div className="bg-active_color -rotate-3 overflow-ellipsis">
                    <Marquee
                        autoFill={true}
                        gradient={true}
                        gradientColor="#222"
                        direction="right"
                    >
                        <div
                            className='flex items-center justify-between bg-active_color py-5 sm:py-10 font-semibold md:text-base min-w-full'
                        >
                            {
                                slider_text2.map((text, index) =>
                                    <span key={index} className='text-3xl sm:text-6xl mx-5 text-white'>{text}</span>
                                )
                            }
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default AnimatedBanner2;