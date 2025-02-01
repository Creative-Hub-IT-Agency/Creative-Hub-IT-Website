import rashedin from "../../assets/Images/team/rashedin.png"
import any from "../../assets/Images/team/any.jpg"
import hisam from "../../assets/Images/team/hisam.jpg"
import demoimg from "../../assets/Images/team/team-1-8.jpg"
import TeamMemberSection from "./TeamMemberSection";

const DeveloperTeam = () => {
    const members = [
        {
            name: 'Tahamina Haq Any',
            role: 'React Developer',
            image: any
        },
        {
            name: 'Demo Name',
            role: 'MERN Stack Developer',
            image: demoimg
        },
        {
            name: 'Asaduzzaman Hisam',
            role: 'Web Developer',
            image: hisam
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