import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';
import AppointmentButton from '../AppointmentButton';


export const NavLinks = () => {
  return (
    <ul className='flex flex-col lg:flex-row justify-start lg:justify-center lg:items-center space-y-4 space-x-8 text-white uppercase'>
      <li>
        <NavLink to='/' className='hover:text-lime font-medium ml-[30px] lg:ml-0 '>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/services' className='hover:text-lime font-medium'>
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to='/portfolio' className='hover:text-lime font-medium'>
          portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className='hover:text-lime font-medium'>
          about
        </NavLink>
      </li>
      <li>
        <NavLink to='/our-team' className='hover:text-lime font-medium'>
          our team
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' className='hover:text-lime font-medium'>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-navbar-bg sticky top-0 py-5 px-6 z-20'>
      <div className='max-w-[1400px]  mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='text-white font-bold text-xl'>
          <NavLink to='/'>
            <img className='h-[60px]' src={logo} alt='creative logo ' />
          </NavLink>
        </div>

        {/* Navigation Links for Desktop */}
        <div className='hidden lg:flex'>
          <NavLinks />
        </div>
        {/* <ul className='hidden lg:flex space-x-8 text-white'>
          <li>
            <a href='/' className='hover:text-lime text-lg font-medium'>
              Home
            </a>
          </li>
          <li>
            <a href='/#about' className='hover:text-lime text-lg font-medium'>
              Services
            </a>
          </li>

          <li>
            <a
              href='/#services'
              className='hover:text-lime text-lg font-medium'
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              href='/#portfolio'
              className='hover:text-lime text-lg font-medium'
            >
              about
            </a>
          </li>
          <li>
            <a
              href='/#testimonials'
              className='hover:text-lime text-lg font-medium'
            >
              our team
            </a>
          </li>
          <li>
            <NavLink to='/contact' className='hover:text-lime text-lg font-medium'>
              Contact
            </NavLink>
          </li>
        </ul> */}

        {/* Consultant Button */}
        <div className='hidden lg:block'>
          <AppointmentButton>Book a free Consultation</AppointmentButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            ></path>
          </svg>
        </button>
        {/* <AppointmentButton>Book A Free Consultation</AppointmentButton> */}
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-navbar-bg z-50 flex flex-col space-y-8 items-center justify-center text-white'>
          <button
            className='absolute top-5 right-5 text-white focus:outline-none'
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
          <div className=' lg:hidden'>
            <NavLinks />
          </div>

          <div className='hidden'>
            <a
              href='/'
              className='text-2xl hover:text-lime'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href='#about'
              className='text-2xl hover:text-lime'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href='#services'
              className='text-2xl hover:text-lime'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href='#portfolio'
              className='text-2xl hover:text-lime'
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href='/contact'
              className='text-2xl hover:text-lime'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          <NavLink
            to='#'
            className='bg-lime text-white py-2 px-4 rounded hover:bg-deep-lime transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Book a free consultation
          </NavLink>
        </div>
      )}
    </nav>
  );
}
