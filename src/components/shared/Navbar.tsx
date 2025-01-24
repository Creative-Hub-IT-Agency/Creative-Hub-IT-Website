import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/Images/webLogo/logo.png'
import AppointmentButton from '../AppointmentButton';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <nav className="bg-navbar-bg sticky top-0 py-5 px-6 z-20">
      <div className="max-w-[1400px]  mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link to="/">
            <img className='h-[60px]' src={logo} alt="creative logo " />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="/" className="hover:text-primary text-lg font-medium">Home</a></li>
          <li><a href="/#about" className="hover:text-primary text-lg font-medium">About</a></li>

          <li><a href="/#services" className="hover:text-primary text-lg font-medium">Services</a></li>
          <li><a href="/#portfolio" className="hover:text-primary text-lg font-medium">Portfolio</a></li>
          <li><a href="/#testimonials" className="hover:text-primary text-lg font-medium">testimonials</a></li>
          <li><Link to="/contact" className="hover:text-primary text-lg font-medium">Contact</Link></li>
        </ul>

        {/* Consultant Button */}
        <div className="hidden md:block">

          <AppointmentButton>Book a free Consultation</AppointmentButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        {/* <AppointmentButton>Book A Free Consultation</AppointmentButton> */}
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navbar-bg z-50 flex flex-col space-y-8 items-center justify-center text-white">
          <button
            className="absolute top-5 right-5 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="/" className="text-2xl hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="text-2xl hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="text-2xl hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="text-2xl hover:text-primary" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="/contact" className="text-2xl hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <Link to="#" className="bg-primary text-white py-2 px-4 rounded hover:bg-lime-500 transition" onClick={() => setIsMenuOpen(false)}>Book a free consultation</Link>
        </div>
      )}
    </nav>
  );
}


