import { useEffect, useRef, FormEvent } from 'react';
import Consultation from '../components/shared/hero/Consultation';
import phone from '/src/assets/Images/contact/bxs_phone-call.svg';
import location from '../assets/Images/contact/location.svg';
import email from '../assets/Images/contact/email.svg';
import snackArrow from '../assets/Images/contact/letter_send 1.svg';
import buble from '../assets/Images/contact/circle.png';
import emailjs from '@emailjs/browser';
// Import images
import FacebookIcon from '/src/assets/Images/contact/facebook.svg';
import WhatsAppIcon from '/src/assets/Images/contact/whatsApp.svg';
import LinkedInIcon from '/src/assets/Images/contact/linkedin.svg';
import Swal from 'sweetalert2';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      console.log(form);
      emailjs
        .sendForm(
          'service_227fqlc',
          'template_ovp0buf',
          form.current,
          'vxTJEykirHrEUKmrk'
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset(); // Reset the form fields
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your email has been send',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log(error);
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Please try Again',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
    }
  };

  const handleClick = () => {
    // const phoneNumber = "8801607304149"; // Replace with your WhatsApp phone number
    // const message = "Hello! I would like to know more about your services."; // Customize your message
    const whatsappUrl = `https://chat.whatsapp.com/FkwCAj4WTloEZwkE2XsfdW`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className='bg-[#131415] px-5'>
      {/* heading */}
      <div className='text-center text-white pt-[75px] mb-[85px]'>
        <p className='text-[40px] text-center text-white font-bold mb-5'>
          Contact <span className='text-[#9FDC49]'>Us</span>
        </p>
        <p className='text-lg font-medium'>
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className='flex flex-col md:flex-row bg-[#363738] gap-5 lg:gap-[100px] p-6 lg:p-8 mb-5 max-w-[1400px] mx-auto rounded-xl '>
        {/* left side content */}
        <div className='w-full md:w-1/2 bg-[#00000033] md:max-w-[500px] rounded-md p-5 relative'>
          <div className='mb-[86px]'>
            <p className='text-3xl font-semibold text-white'>
              <span className='text-[#9FDC49] mb-3'>Contact</span> Information
            </p>
            <p className='text-text text-lg font-normal'>
              Say something to start a live chat!
            </p>
          </div>

          <div className='flex flex-col gap-[50px] mb-5'>
            <div>
              <div className='flex gap-7 items-center text-white'>
                <img src={phone} alt='phone' />
                <p>+08801607304149</p>
              </div>
            </div>
            <div>
              <div className='flex gap-7 items-center text-white'>
                <img src={email} alt='phone' />
                <p>support@creativehubit.com</p>
              </div>
            </div>
            <div>
              <div className='flex gap-7 text-white'>
                <img src={location} alt='phone' />
                <div>
                  <p>Dhaka Uttara, #1201,</p>
                  <p>Sector: #02</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex gap-5 mt-24 md:mt-32'>
            {/* Facebook Link */}
            <a
              href='https://www.facebook.com/profile.php?id=61571843844811&sk=about'
              target='_blank'
              rel='noopener noreferrer'
              title='Visit us on Facebook'
            >
              <img
                src={FacebookIcon}
                alt='facebook'
                className='w-10 h-10 hover:opacity-80 transition duration-300'
              />
            </a>

            {/* WhatsApp Link */}
            <div
              onClick={handleClick}
              title='Chat with us on WhatsApp'
              className='cursor-pointer'
            >
              <img
                src={WhatsAppIcon}
                alt='whatsApp'
                className='w-10 h-10 hover:opacity-80 transition duration-300'
              />
            </div>

            {/* LinkedIn Link */}
            <a
              href='https://www.facebook.com/profile.php?id=61571843844811&sk=about'
              target='_blank'
              rel='noopener noreferrer'
              title='Connect with us on LinkedIn'
            >
              <img
                src={LinkedInIcon}
                alt='linkedin'
                className='w-10 h-10 hover:opacity-80 transition duration-300'
              />
            </a>
          </div>

          {/* Bottom-Right Image */}
          <img
            src={buble}
            alt='decorative circle'
            className='absolute bottom-0 right-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-md  '
          />
        </div>

        {/* right side form */}
        <div className='w-full md:w-1/2 flex-1'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col p-2'
            action=''
          >
            <div className='flex flex-col md:flex-row  md:gap-[80px] flex-1 md:mb-[45px]'>
              <div className='flex flex-col justify-start mb-5 w-full md:w-1/2'>
                <label className='w-20 inline-block text-white text-left mr-4'>
                  First Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  // placeholder="Your first name"
                  className='border-b-2 p-2 text-white border-white  flex-1 py-2 outline-none focus:border-green-400 bg-transparent'
                />
              </div>

              <div className='flex flex-col justify-start mb-5 w-full md:w-1/2'>
                <label className='w-20 inline-block text-white text-left mr-4'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  // placeholder="Your last name"
                  className='border-b-2 text-white border-white flex-1 py-2 outline-none focus:border-green-400 bg-transparent p-1'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:gap-[80px] flex-1 md:mb-[50px]'>
              <div className='flex flex-col justify-start mb-5 w-full md:w-1/2'>
                <label className='w-20 inline-block text-white text-left mr-4'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  // placeholder="Your email"
                  className='border-b-2 p-1 border-white flex-1 py-2 outline-none focus:border-green-400 bg-transparent text-white'
                />
              </div>

              <div className='flex flex-col justify-start mb-5 w-full md:w-1/2'>
                <label className='w-20 inline-block text-white text-left whitespace-nowrap mr-4'>
                  Phone Number
                </label>
                <input
                  type='number'
                  name='phone'
                  id='phone'
                  required
                  // placeholder="Your phone number"
                  className='border-b-2 border-white flex-1 py-2 outline-none focus:border-green-400 bg-transparent p-2 text-white'
                />
              </div>
            </div>

            <div className='md:mb-[20px]'>
              <div className='flex flex-col justify-start mb-5 w-full'>
                <label className='w-20 inline-block text-white text-left mr-4'>
                  Message
                </label>

                <textarea
                  name='message'
                  id='message'
                  className='border-b-2 border-white flex-1 py-2 outline-none focus:border-green-400 bg-transparent text-white w-full'
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>

            {/* Button and Snake Arrow */}
            <div className='flex justify-end items-center relative'>
              <button
                type='submit'
                className='bg-lime text-xl hover:bg-deep-lime hover:bg-opacity-90  text-white py-3 mb-5 px-6 rounded-md hover:bg-green-400 transition focus:outline-none'
              >
                Send Message
              </button>

              {/* Snake Arrow */}
              <div className='absolute hidden md:block mt-36 right-12'>
                <img
                  className='h-[80px] w-[170px] object-cover'
                  src={snackArrow}
                  alt='phone'
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Consultation />
    </div>
  );
};

export default Contact;
