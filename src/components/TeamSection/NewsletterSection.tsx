import bg from "../../assets/Images/bg.png"
import Paragraph from "../shared/Paragraph";
import TitleHeader from "../shared/TitleHeader";

const NewsletterSection = () => {
    return (
        <div className="h-auto lg:h-[490px] flex flex-col lg:flex-row gap-12 bg-cover bg-center container mx-auto px-4 md:px-16 mt-[110px] py-16 lg:py-0"
            style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col lg:pt-[160px] lg:w-1/3">
                <span className="text-base mb-4 uppercase font-normal text-[#8FDC24] tracking-[3px]">newsletter</span>
                <TitleHeader
                    title={'Subscribe To Our Newsletter'}
                    className="!text-4xl md:!text-[54px] !leading-[1] !text-slate-950"
                />
            </div>
            <div className="flex flex-col gap-4 justify-center flex-grow">
                <TitleHeader
                    title={'Be ready for the ever-changing world.'}
                    className="!text-2xl md:!text-[30px] !leading-[1] !text-[#333787]"
                />
                <Paragraph className="!text-[#64657D]" content="Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra " />
                <div className="w-full mt-8">
                    <div className="mt-2 flex flex-col md:flex-row items-center w-full gap-4">
                        <div className="flex items-center border rounded-md bg-white py-3 px-4 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 w-full">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                placeholder="Email address"
                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-[#64657D] placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                        </div>
                        <button className="text-base font-bold text-white py-4 px-9 rounded-full">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;