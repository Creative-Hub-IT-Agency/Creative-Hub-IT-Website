import Slider from "./Slider";


// Import all images
import ProjectImage01 from "../../assets/Images/ProjectImage/project-01.png";
import ProjectImage02 from "../../assets/Images/ProjectImage/project02.png";
import ProjectImage03 from "../../assets/Images/ProjectImage/project03.png";
import ProjectImage04 from "../../assets/Images/ProjectImage/project04.png";
import ProjectImage05 from "../../assets/Images/ProjectImage/project05.png";
import ProjectImage06 from "../../assets/Images/ProjectImage/project06.png";

// Array of image imports
const web = [
    ProjectImage01,
    ProjectImage02,
    ProjectImage03,
    ProjectImage01,
    ProjectImage02,
    ProjectImage03,
    ProjectImage01,
];
const app = [

    ProjectImage04,
    ProjectImage05,
    ProjectImage06,
    ProjectImage04,
    ProjectImage05,
    ProjectImage06,
    ProjectImage04,
];


const ProjectSlider = () => {
    return (
        <div className="w-full bg-black mt-[100px]">
            <Slider web={web} app={app} />
        </div>
    );
};

export default ProjectSlider;
