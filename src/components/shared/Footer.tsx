import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white container mx-auto">
      <div className="px-3 pt-[90px] pb-[10px]">
        {/* Top Footer Section */}
        <div className="max-w-[1400px] mx-auto  flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl my-10">
            <Link to="/">
              <img src={logo} className='h-[80px] w-[95px]' alt=" logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center space-x-6 text-white">
            <li><a href="/" className="hover:text-green text-green">Home</a></li>
            <li><a href="/#about" className="hover:text-green">About</a></li>
            <li><a href="/#services" className="hover:text-green">Services</a></li>
            <li><a href="/#portfolio" className="hover:text-green">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-green">Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 my-8 md:my-0">
            <a href="https://www.facebook.com/profile.php?id=61571843844811&sk=about" target="_blank" rel="noopener noreferrer" className="bg-green p-2 rounded-full hover:bg-opacity-90">
              <FaFacebookF className="text-white" />
            </a>
            <a href="https://chat.whatsapp.com/FkwCAj4WTloEZwkE2XsfdW" target="_blank" rel="noopener noreferrer" className="bg-green p-2 rounded-full hover:bg-opacity-90">
              <FaTwitter className="text-white" />
            </a>
            <a href="https://chat.whatsapp.com/FkwCAj4WTloEZwkE2XsfdW" target="_blank" rel="noopener noreferrer" className="bg-green p-2 rounded-full hover:bg-opacity-90">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61571843844811&sk=about" target="_blank" rel="noopener noreferrer" className="bg-green p-2 rounded-full hover:bg-opacity-90">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className=" border-gray-500" />

        {/* Footer Bottom Section */}
        <div className="container mx-auto  text-center text-sm">

          <div className=''>
            <p className="my-10 text-xs ">Copyright. Creative Hub It Agency 2025 | All Right Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
