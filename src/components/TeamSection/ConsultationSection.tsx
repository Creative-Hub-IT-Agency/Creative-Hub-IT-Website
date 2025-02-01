import TitleHeader from "../shared/TitleHeader";

const ConsultationSection = () => {
    return (
        <div className="container mx-auto flex flex-col gap-10 lg:flex-row items-center justify-between mt-[110px] px-6">
            <div className="flex flex-col gap-6">
                <TitleHeader
                    title={'Let’s Create Your Next'}
                    className="!text-2xl md:!text-[40px] !font-medium !font-poppins !leading-[1] !text-white"
                />
                <TitleHeader
                    title={'Innovative Project Together.'}
                    className="!text-2xl md:!text-[40px] !font-bold !font-poppins !leading-[1] !text-white"
                />
            </div>
            <div>
                <button className="text-lg font-bold text-white py-4 px-9 rounded-full">Book a free consultation</button>
            </div>
        </div>
    );
};

export default ConsultationSection;