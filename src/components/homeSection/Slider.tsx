import Marquee from "react-fast-marquee";

interface SliderProps {
    web: string[]; // Array of image URLs
    app: string[]; // Array of image URLs
}

const Slider: React.FC<SliderProps> = ({ web, app }) => {
    console.log(web);
    return (
        <div className="w-full bg-black  ">
            <Marquee
                direction="right"
                speed={50}
                //   pauseOnHover={true}
                className="flex mb-[50px] cursor-pointer h-[200px]">
                {web?.map((src, index) => (
                    <img
                        key={index}
                        className="mr-5 w-[300px] h-[200px] object-cover rounded-xl"
                        src={src}
                        alt={`Project ${index + 1}`}
                    />
                ))}
            </Marquee>
            <Marquee
                direction="left"
                speed={50}
                //   pauseOnHover={true}
                className="flex cursor-pointer h-[200px]">
                {app?.map((src, index) => (
                    <img
                        key={index}
                        className="mr-5 w-[300px] h-[200px] object-cover rounded-xl"
                        src={src}
                        alt={`Project ${index + 1}`}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Slider;
