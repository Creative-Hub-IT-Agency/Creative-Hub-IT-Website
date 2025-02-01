import Paragraph from "../shared/Paragraph";
import TitleHeader from "../shared/TitleHeader";
import rashedin from "../../assets/Images/team/rashedin.png"


interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface TeamLeader {
    name: string;
    role: string;
    image: string;
    description: string;
}

interface TeamMemberSectionProps {
    title?: string;
    description?: string;
    teamMembers?: TeamMember[];
    teamLeader?: TeamLeader;
}

const TeamMemberSection: React.FC<TeamMemberSectionProps> = ({
    title = "Meet Our Web Development team Staff",
    description = "Our talented web development team is the backbone of our digital success, combining creativity, technical expertise, and a passion for innovation to bring ideas to life. Here’s a quick introduction to the amazing people who make it all happen:",
    teamMembers,
    teamLeader = {
        name: 'Rashedin Islam',
        role: 'Developer',
        image: rashedin,
        description: 'With over 3 years of experience in full-stack development, Rashedin is the architect behind our seamless, user-friendly platforms. His problem-solving mindset ensures that our projects stay on the cutting edge of technology.',
    }
}) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 mt-20 lg:mt-auto mb-[70px]">
                <TitleHeader
                    title={title}
                    className="!text-4xl lg:!text-[54px] !leading-[1] !text-center md:!w-2/2"
                />
                <Paragraph
                    className="!text-center lg:!w-1/2"
                    content={description} />
            </div>
            <div className="flex flex-col justify-center items-center mb-20">
                <div>
                    <img
                        src={teamLeader?.image}
                        alt="rashedin Photo"
                        className="w-52 md:w-72 lg:w-auto"
                    />
                </div>
                <TitleHeader
                    title={teamLeader?.name}
                    className="!text-2xl md:!text-5xl !font-bold !mt-5"
                />
                <Paragraph
                    className="!text-center md:px-9 lg:px-0 lg:!w-3/6"
                    content={teamLeader?.description} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    teamMembers?.map((member, index) => (
                        <div key={index} className="h-96 lg:h-[490px] flex items-end bg-cover bg-center w-full rounded-2xl"
                            style={{ backgroundImage: `url(${member?.image})` }}>
                            <div className="relative z-10 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409 107" fill="none">
                                    <path d="M2.86836 25.6219C1.63144 49.6119 0.367403 86.9048 2.17311 101.274C2.56142 104.364 5.27231 106.244 8.38669 106.244H399.854C404.272 106.244 407.854 102.662 407.854 98.244V8.76416C407.854 4.34588 404.272 0.76416 399.854 0.76416H124.01C121.809 0.76416 119.705 1.67109 118.193 3.27141L106.564 15.5857C105.053 17.1861 102.949 18.093 100.748 18.093H10.8291C6.59081 18.093 3.0866 21.3892 2.86836 25.6219Z" fill="white" stroke="white" />
                                </svg>
                                <div className="absolute text-slate-950 top-0 right-0 px-4 flex flex-col items-end justify-center h-full">
                                    <TitleHeader
                                        title={member?.name}
                                        className="!text-xl md:!text-xl !font-bold !text-slate-950"
                                    />
                                    <TitleHeader
                                        title={member?.role}
                                        className="!text-base !font-bold !text-[#7cbe21f6] !text-right"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamMemberSection;