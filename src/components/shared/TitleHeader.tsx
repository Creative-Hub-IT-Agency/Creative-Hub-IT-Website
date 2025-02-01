interface HeroSectionProps {
    title?: string;
    className?: string;
}

const TitleHeader: React.FC<HeroSectionProps> = ({ title="This Is Title", className }) => {
    return <span className={`text-[54px] font-outfit font-bold text-light ${className}`}>{title}</span>;
};

export default TitleHeader;