'use client';

import { cn } from '../lib/utils';

const allImages = [
  { id: 1, image: 'https://i.ibb.co.com/xmXhXmk/Frame-134525.png' },
  { id: 2, image: 'https://i.ibb.co.com/L1Vqjfm/31051600-grocery-shop-2.png' },
  {
    id: 3,
    image: 'https://i.ibb.co.com/C8Nmpc0/31051600-grocery-shop-2-1.png',
  },
  {
    id: 4,
    image: 'https://i.ibb.co.com/6Z4T2kb/31051600-grocery-shop-2-2.png',
  },
  {
    id: 5,
    image: 'https://i.ibb.co.com/X2QML5t/31051600-grocery-shop-2-3.png',
  },
  {
    id: 6,
    image: 'https://i.ibb.co.com/ByHhHx0/31051600-grocery-shop-2-4.png',
  },
  {
    id: 7,
    image: 'https://i.ibb.co.com/ByHhHx0/31051600-grocery-shop-2-4.png',
  },
  {
    id: 8,
    image: 'https://i.ibb.co.com/ByHhHx0/31051600-grocery-shop-2-4.png',
  },
  {
    id: 9,
    image: 'https://i.ibb.co.com/ByHhHx0/31051600-grocery-shop-2-4.png',
  },
];


export default function PortfolioSection() {
  return (
    <div id='portfolio' className='px-4 md:px-8 font-poppins mb-28'>
      <h1 className='text-white text-4xl font-bold'>Our Portfolio</h1>
      <p className='text-white w-1/2 my-4'>
        At Creative Hub, our portfolio is a reflection of the impactful work we
        have accomplished across diverse industries. Each project represents our
        dedication to innovation, creativity, and delivering exceptional results
        tailored to our clients' unique needs.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-14'>
        {allImages.map((img) => (
          <div
            key={img.id}
            className='max-w-xs w-full group relative overflow-hidden rounded-md shadow-xl cursor-pointer'
          >
            {/* Background Image */}
            <div
              className={cn(
                'h-96 bg-cover bg-center transition-transform duration-300 group-hover:scale-110'
              )}
              style={{ backgroundImage: `url(${img?.image})` }}
            ></div>

            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <button className='bg-lime hover:bg-deep-lime text-white px-8 py-2 rounded-full text-lg hover:bg-green-600 transition'>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

