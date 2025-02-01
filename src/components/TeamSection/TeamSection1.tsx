import ceo_photo from "../../assets/Images/team/ceo.png"
import Paragraph from "../shared/Paragraph";
import TitleHeader from "../shared/TitleHeader";

const TeamSection1 = () => {
    return (
        <div className="container mx-auto px-4 gap-16 md:gap-32 lg:px-8 flex flex-col md:flex-row items-center lg:mb-[110px]">
            <div className="flex-grow">
                <div className="border border-[#FF8136] rounded-xl inline-block transform md:translate-x-10 lg:translate-x-10">
                    <img
                        src={ceo_photo}
                        alt="CEO Photo"
                        className="transform -translate-x-8 translate-y-10 w-52 md:w-72 lg:w-auto"
                    />
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 space-y-3">
                <span className="text-sm uppercase font-extrabold text-[#8FDC24] tracking-[3px]">Join us</span>
                <TitleHeader
                    title={'Meet Our Team'}
                    className="!text-4xl md:!text-[54px] !leading-[1]"
                />
                <Paragraph className="opacity-60" content="Together, we’re more than just a team — we’re a creative force dedicated to turning your ideas into reality. Let us help you achieve your vision" />
                <div className="flex flex-col">
                    <TitleHeader
                        title={'Md sahkil mirja'}
                        className="!text-2xl md:!text-3xl !font-bold"
                    />
                    <span className="text-sm uppercase text-[#8FDC24] tracking-[4px]">Our Founder</span>
                </div>
            </div>
        </div>
    );
};

export default TeamSection1;