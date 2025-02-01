
interface ParagraphProps {
    content?: string;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ content = "This Is Paragraph", className }) => {
    return <span className={`text-lg font-medium font-outfit text-light ${className}`}>{content}</span>;
};

export default Paragraph;