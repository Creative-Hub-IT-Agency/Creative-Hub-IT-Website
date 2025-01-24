import "./style.css";
import Frame from "../../assets/Fram.svg";
import Service01 from "../../assets/1.svg";
import Service02 from "../../assets/2.svg";
import Service03 from "../../assets/3.svg";
import Service04 from "../../assets/4.svg";

const services = [
    {
        title: "UI/UX DESIGN",
        description: "Powerful UI/UX that will out\nperform your strongest\ncompetitors",
        icon: Service03,
    },
    {
        title: "WEB DESIGN &\nDEVELOPMENT",
        description: "Custom programming for\nmost complex functions you \ncan think",
        icon: Service04,
    },
    {
        title: "App Design &\nDevelopment",
        description: "Custom programming for\nmost complex functions you \ncan think",
        icon: Service01,
    },
    {
        title: "Branding",
        description: "A solid brand strategy,logo, \nand guidelines help you to get \nYou recognized.",
        icon: Service02,
    },
];

const Services = () => {
    return (
        <section id="services" className=" max-w-[1400px] mx-auto font-poppins ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className=" rounded-lg text-center m-5 md:m-0 shadow-lg md:shadow-none"
                    >
                        {/* Icon with SVG frame as background */}
                        <div className="mb-7 inline-block relative">
                            <div>
                                <img
                                    src={Frame}
                                    alt={service.title}
                                    className="w-[130px] h-[130px] rotating-frame mx-auto  z-10"
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-[55px] h-[55px] mx-auto  z-10"
                                />
                            </div>

                        </div>

                        {/* Title */}
                        <h3 className="text-2xl mb-2 font-semibold text-text whitespace-pre-line">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text text-base font-medium mt-2 whitespace-pre-line">
                            {service.description}
                        </p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Services;
