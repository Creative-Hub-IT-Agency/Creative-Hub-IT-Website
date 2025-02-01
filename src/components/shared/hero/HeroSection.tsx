interface HeroSectionProps {
    bgImage: string;
    title: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bgImage, title, description }) => {
    return (
        <div
            className="min-h-screen sm:h-[800px] flex justify-center items-center bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center h-full">
                <h1 className="text-white text-5xl sm:text-7xl font-bold font-outfit">{title}</h1>
                <p className="font-outfit text-sm sm:text-lg font-medium text-white uppercase sm:leading-9 sm:tracking-widest text-center mt-3 sm:w-3/4">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HeroSection;