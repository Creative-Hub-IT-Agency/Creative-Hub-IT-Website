import AppointmentButton from "../AppointmentButton";

const Introduction = () => {
    return (
        <section id="about" className="text-center pb-20 max-w-[1400px] mx-auto ">
            {/* Dotted Line */}
            <div className="flex flex-col items-center space-y-2 mt-5 md:mt-0 mb-6">
                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
                <div className="w-1.5 h-7 bg-primary rounded-full"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  px-4 ">
                <h1 className="text-2xl uppercase md:text-3xl lg:text-4xl font-bold text-text mb-7 font-poppins">
                    WE ARE THE ONE OF THE MOST EFFECTIVE WEB &<br className="hidden md:block" />App Design & Development Agency
                </h1>
                <p className="text-text md:text-base uppercase font-normal max-w-3xl">
                    Getting online is easy. Succeeding online is a different story. You’ll need more than just a beautiful website to stand out these days.
                    <span className="font-bold"> ONLINE MARKETING SOLUTIONS.</span>
                    Conversion-based web design coupled with a lead generating marketing plan, your online success is inevitable.
                </p>
            </div>


            {/* Dotted Line */}
            <div className="flex flex-col items-center space-y-2 mt-6">
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            </div>

            <div className="mt-8">
                <AppointmentButton>Book a free Consultation</AppointmentButton>
            </div>
        </section>
    );
};

export default Introduction;