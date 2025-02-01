import HeroSection from "../components/shared/hero/HeroSection"
import teamBackground from "../assets/Images/team/teamBackground.png"
import AnimatedBanner2 from "../components/AnimatedBanner2"

const OurTeam = () => {
  const slider_text = ['+', 'DESIGN', '+', 'WEB DEVELOPMENT', '+', 'BRANDING']
  const slider_text2 = ['+', 'Hire us now']

  return (
    <div>
      <HeroSection
        bgImage={teamBackground}
        title={'Our team'}
        description={'At Creative Hub, our team is the heart of everything we do. We are a group of passionate, talented, and dedicated professionals who thrive on creativity, collaboration, and innovation. Each member brings unique expertise, enabling us to deliver extraordinary results and exceed client expectations.'}
      />
      <div className="my-12 sm:my-[100px]">
        <AnimatedBanner2
          slider_text={slider_text}
          slider_text2={slider_text2}
        />
      </div>
    </div>
  )
}
export default OurTeam