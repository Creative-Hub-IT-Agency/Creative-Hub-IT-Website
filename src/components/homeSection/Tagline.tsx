
const Tagline = () => {
    return (
        <section className="container mx-auto mt-[120px] flex flex-col md:flex-row gap-10 md:gap-[85px]">
            <div className="md:w-2/3 px-5">
                <h2 className=" text-4xl italic text-left md:text-5xl lg:text-6xl text-italic font-normal font-lato text-text lg:leading-[75px]">
                    Where Cutting-Edge Technology Meets Bold Creativity to Build Your Digital Future
                </h2>
            </div>
            <div className="mb-4 md:w-1/3 font-poppins flex flex-col justify-end px-5">
                <p className="text-[#8FDC24] text-xl font-bold text-left mb-3">Our Latest Works</p>
                <p className="text-text text-xl text-left font-normal ">
                    We push the boundaries of <br /> what's possible with expert <br />development and creative <br /> thinking.
                </p>
            </div>

        </section>
    );
};

export default Tagline;