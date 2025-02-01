import rashedin from "../../assets/Images/team/rashedin.png"
import TeamMemberSection from "./TeamMemberSection";

const DeveloperTeam = () => {
    const members = [
        {
            name: 'Rashedin Islam',
            role: 'MERN Stack Developer',
            image: rashedin
        },
        {
            name: 'Rashedin Islam',
            role: 'MERN Stack Developer',
            image: rashedin
        },
        {
            name: 'Rashedin Islam',
            role: 'MERN Stack Developer',
            image: rashedin
        },
    ]
    const teamLeader = {
        name: 'Rashedin Islam',
        role: 'MERN Stack Developer',
        image: rashedin,
        description: 'With over 3 years of experience in full-stack development, Rashedin is the architect behind our seamless, user-friendly platforms. His problem-solving mindset ensures that our projects stay on the cutting edge of technology.',
    }

    return (
        <div>
            <TeamMemberSection
                teamMembers={members}
                teamLeader={teamLeader}
            />
        </div>
    );
};

export default DeveloperTeam;