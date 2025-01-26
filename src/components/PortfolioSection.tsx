
export default function PortfolioSection() {
    return (
        <div className="max-w-[1200px] mx-auto font-poppins">
            <h1 className='text-white text-4xl font-bold'>Our Portfolio</h1>
            <p className="text-white w-1/2 my-4">At Creative Hub, our portfolio is a reflection of the impactful work we have accomplished across diverse industries. Each project represents our dedication to innovation, creativity, and delivering exceptional results tailored to our clients' unique needs.</p>
            <div className="grid grid-cols-3 gap-8 my-14">
                {
                    allImages.map((img) => (
                        <img src={img.image} alt="" />
                    ))
                }
            </div>
        </div>
    );
};

const allImages = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/xmXhXmk/Frame-134525.png'
    },
    {
        id: 2,
        image: 'https://i.ibb.co.com/L1Vqjfm/31051600-grocery-shop-2.png'
    },
    {
        id: 3,
        image: 'https://i.ibb.co.com/C8Nmpc0/31051600-grocery-shop-2-1.png'
    },
    {
        id: 4,
        image: 'https://i.ibb.co.com/6Z4T2kb/31051600-grocery-shop-2-2.png'
    },
    {
        id: 5,
        image: 'https://i.ibb.co.com/X2QML5t/31051600-grocery-shop-2-3.png'
    },
    {
        id: 6,
        image: 'https://i.ibb.co.com/ByHhHx0/31051600-grocery-shop-2-4.png'
    },
    {
        id: 7,
        image: 'https://i.ibb.co.com/D5Gv2yy/31051600-grocery-shop-2-5.png'
    },
    {
        id: 8,
        image: 'https://i.ibb.co.com/z8VYJ5T/31051600-grocery-shop-2-6.png'
    },
    {
        id: 9,
        image: 'https://i.ibb.co.com/Pxp9VLB/31051600-grocery-shop-2-7.png'
    },
    {
        id: 10,
        image: 'https://i.ibb.co.com/nm1BpLk/31051600-grocery-shop-2-8.png'
    },
    {
        id: 11,
        image: 'https://i.ibb.co.com/7y0Dtmm/31051600-grocery-shop-2-9.png'
    },
    {
        id: 12,
        image: 'https://i.ibb.co.com/wL8V5b9/31051600-grocery-shop-2-10.png'
    },
]