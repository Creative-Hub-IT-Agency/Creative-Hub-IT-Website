import demoimg from "../../assets/Images/team/team-1-8.jpg"
import TeamMemberSection from "./TeamMemberSection";

const MarketingTeam = () => {
    const members = [
        {
            name: 'Demo Name',
            role: 'MERN Stack Developer',
            image: demoimg
        },
        {
            name: 'Demo Name',
            role: 'MERN Stack Developer',
            image: demoimg
        },
        {
            name: 'Demo Name',
            role: 'MERN Stack Developer',
            image: demoimg
        },
    ]
    const teamLeader = {
        name: 'Demo Name',
        role: 'MERN Stack Developer',
        image: demoimg,
        description: 'With over 3 years of experience in full-stack development, Rashedin is the architect behind our seamless, user-friendly platforms. His problem-solving mindset ensures that our projects stay on the cutting edge of technology.',
    }

    return (
        <div>
            <TeamMemberSection
                teamMembers={members}
                teamLeader={teamLeader}
                title="Meet Our Web Digital Marketing team Staff"
            />
        </div>
    );
};

export default MarketingTeam;