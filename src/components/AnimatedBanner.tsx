import { motion } from "framer-motion";

const AnimatedBanner = () => {
    return (
        <div className="relative text-white overflow-hidden mb-16">
            {/* Top Section */}
            <div className="relative flex justify-center bg-[#222222] py-6 font-semibold md:text-base z-10">
                <span className="mx-4 text-3xl">DESIGN</span>
                <span className="mx-4 text-3xl">+</span>
                <span className="mx-4 text-3xl">WEB DEVELOPMENT</span>
                <span className="mx-4 text-3xl">+</span>
                <span className="mx-4 text-3xl">BRANDING</span>
            </div>

            {/* Scrolling Banner */}
            <div className="h-32">
                <div className="relative overflow-hidden bg-[#E02166] text-white py-6"
                    style={{ transform: "rotate(-3deg)" }}>
                    <motion.div
                        className="flex whitespace-nowrap md:text-base font-semibold"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    >
                        <span className="mx-4 text-4xl">HIRE US NOW</span>
                        <span className="mx-4 text-4xl">+</span>
                        <span className="mx-4 text-4xl">HIRE US NOW</span>
                        <span className="mx-4 text-4xl">+</span>
                        <span className="mx-4 text-4xl">HIRE US NOW</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedBanner;
