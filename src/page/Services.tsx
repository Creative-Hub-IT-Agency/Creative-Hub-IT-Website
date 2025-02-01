import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Globe,
  Database,
  Layout,
  ShoppingCart,
} from 'lucide-react';

const Services = () => {
  // Static data for services
  const services = [
    {
      title: 'Frontend Development',
      description:
        'Creating responsive, modern, and user-friendly interfaces using the latest web technologies and best practices.',
      icon: <Layout className='w-10 h-10' />,
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Performance Optimization',
        'Cross-browser Compatibility',
      ],
    },
    {
      title: 'Backend Development',
      description:
        'Building robust and scalable server-side solutions to power your web applications.',
      icon: <Server className='w-10 h-10' />,
      features: [
        'API Development',
        'Database Design',
        'Server Management',
        'Security Implementation',
      ],
    },
    {
      title: 'React Development',
      description:
        'Specialized in creating dynamic and interactive web applications using React ecosystem.',
      icon: <Code className='w-10 h-10' />,
      features: [
        'Custom Components',
        'State Management',
        'React Hooks',
        'Performance Optimization',
      ],
    },
    {
      title: 'Next.js Development',
      description:
        'Leveraging Next.js framework for building SEO-friendly and high-performance web applications.',
      icon: <Globe className='w-10 h-10' />,
      features: [
        'Server-side Rendering',
        'Static Site Generation',
        'API Routes',
        'Image Optimization',
      ],
    },
    {
      title: 'WordPress Development',
      description:
        'Custom WordPress solutions tailored to your specific business needs.',
      icon: <Database className='w-10 h-10' />,
      features: [
        'Custom Themes',
        'Plugin Development',
        'E-commerce Integration',
        'Security & Maintenance',
      ],
    },
    {
      title: 'Shopify Development',
      description:
        'Building custom Shopify stores that drive sales and enhance user experience.',
      icon: <ShoppingCart className='w-10 h-10' />,
      features: [
        'Custom Theme Development',
        'App Integration',
        'Store Optimization',
        'Payment Gateway Setup',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-background text-white px-4 py-16 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mx-auto max-w-7xl text-center mb-16'
      >
        <h1 className='text-lg mb-4 font-medium text-primary'>Our Services</h1>
        <p className='text-4xl lg:text-5xl font-normal mb-2'>
          Comprehensive Web Solutions
        </p>
        <p className='text-xl text-muted-foreground mt-4 max-w-2xl mx-auto'>
          We offer end-to-end web development services to help businesses
          establish a strong digital presence
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className='relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300'
          >
            <div className='mb-6 text-primary'>{service.icon}</div>
            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
            <p className='text-muted-foreground mb-6'>{service.description}</p>
            <ul className='space-y-2 mb-6'>
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className='flex items-center text-sm text-foreground/80'
                >
                  <div className='w-1.5 h-1.5 rounded-full bg-primary/60 mr-2' />
                  {feature}
                </li>
              ))}
            </ul>
            <button className='w-full'>
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
