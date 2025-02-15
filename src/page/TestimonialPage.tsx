import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import aulia from '../assets/Images/aulia.png';
import alex from '../assets/Images/alex.png';
import sarah from '../assets/Images/dev1.jpg';
import james from '../assets/Images/dev3.jpg';
import elena from '../assets/Images/dev5.jpg';
import david from '../assets/Images/dev6.jpg';
import Consultation from '../components/shared/hero/Consultation';

const TestimonialPage = () => {
  // Static data for testimonials
  const testimonials = [
    {
      content:
        'Incredible work! They delivered a stunning website that exceeded all our expectations. Highly recommend!',
      author: 'Aulia Morgan',
      role: 'Officer',
      imgUrl: aulia,
    },
    {
      content:
        'Exceptional service! Our platform looks great and performs even better. User engagement has skyrocketed!',
      author: 'Alex Kordio',
      role: 'Business man',
      imgUrl: alex,
    },
    {
      content:
        "The team's attention to detail and creative solutions transformed our digital presence. They truly understand modern web design.",
      author: 'Sarah Chen',
      role: 'Marketing Director',
      imgUrl: sarah,
    },
    {
      content:
        'Working with this team was a game-changer for our startup. They delivered a beautiful, functional website ahead of schedule.',
      author: 'James Wilson',
      role: 'Tech Entrepreneur',
      imgUrl: james,
    },
    {
      content:
        'Their expertise in responsive design and user experience is outstanding. Our mobile traffic has increased by 200% since launch.',
      author: 'Elena Rodriguez',
      role: 'Product Manager',
      imgUrl: elena,
    },
    {
      content:
        'Professional, creative, and incredibly responsive. They turned our vision into reality with remarkable precision.',
      author: 'David Park',
      role: 'Creative Director',
      imgUrl: david,
    },
  ];

  // Static data for statistics
  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '120+', label: 'Projects Completed' },
    { number: '90%', label: 'Success Rate' },
  ];

  return (
    <div className='min-h-screen bg-background text-white py-16'>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=' text-center mb-16'
      >
        <h1 className='text-2xl mb-4 leading-relaxed font-semibold text-lime '>
          Testimonials
        </h1>
        <p className='text-3xl lg:text-4xl xl:text-5xl font-normal mb-2 italic'>
          <span className='text-lime text-4xl lg:text-5xl xl:text-6xl font-semibold'>
            {' '}
            100+
          </span>{' '}
          Happy Clients Said
        </p>
        <p className='text-4xl lg:text-5xl xl:text-6xl font-semibold italic'>
          They Are Satisfied
        </p>
      </motion.div>

      {/* Statistics Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20'>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#616364] via-[#464747] to-[#363636] backdrop-blur-sm border border-slate-100 p-8 shadow-lg'
          >
            <div className='relative z-10'>
              <h3 className='text-4xl text-lime mb-2 text-foreground'>
                {stat.number}
              </h3>
              <p className='text-xl font-semibold'>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#616364] via-[#464747] to-[#363636] backdrop-blur-sm border border-border/50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <Quote className='w-8 h-8 text-lime mb-6' />
            <p className='text-lg font-semibold mb-8 leading-relaxed'>
              {testimonial.content}
            </p>
            <div className='flex items-center gap-4 mt-6 pt-6 border-t border-border/50'>
              <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                <span className='text-lg font-light text-primary'>
                  {testimonial.imgUrl ? (
                    <img src={testimonial.imgUrl} className='rounded-full h-10 w-10' />
                  ) : (
                    testimonial.author.charAt(0)
                  )}
                </span>
              </div>
              <div>
                <p className='font-medium text-foreground'>
                  {testimonial.author}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Consultation/>
    </div>
  );
};

export default TestimonialPage;
