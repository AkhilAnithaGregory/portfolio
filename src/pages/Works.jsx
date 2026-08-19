import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const allProjects = [
  {
    id: 1,
    title: 'Matha Fresh Fish',
    description: 'MathaFresh is a Kochi-based e-commerce platform that delivers fresh, hygienically prepared fish, poultry, and meat directly to customers homes through convenient online and mobile ordering.',
    technologies: ['React.js', 'dotNet', 'MySQL', 'Razorpay'],
    category: 'Frontend',
    url: 'https://mathafresh.com/'
  },
  {
    id: 2,
    title: 'Cartino Mart',
    description: 'Cartino Mart is an e-commerce platform for industrial equipment, spare parts, and hand tools, offering businesses easy access to quality products online.',
    technologies: ['React.js', 'dotNet', 'MySQL', 'Stripe'],
    category: 'Frontend',
    url: 'https://cartinomart.com/'
  },
  {
    id: 3,
    title: 'Xenia CRM',
    description: 'Xenia CRM helps businesses manage customer relationships, streamline sales processes, and drive growth through an intuitive and efficient platform.',
    technologies: ['dotNet', 'HTML', 'MySQL'],
    category: 'Frontend',
    url: 'https://crm.xeniapos.com/'
  },
  {
    id: 4,
    title: 'Finix TF',
    description: 'Finix TF is a multi-platform POS solution that streamlines billing, inventory management, and GST/VAT compliance for businesses of all sizes.',
    technologies: ['React.js', 'Tailwind CSS'],
    category: 'Frontend',
    url: 'https://www.finix-tf.com/'
  },
  {
    id: 5,
    title: 'AKCA',
    description: 'All Kerala Caterers Karuthal Trust is a platform that enables caterers across Kerala to register with the Karuthal Trust and access community support, welfare initiatives, and industry resources.',
    technologies: ['React.js', 'dotNet', 'MySQL'],
    category: 'Frontend',
    url: 'https://akca.xeniapos.com/'
  },
  {
    id: 6,
    title: 'Vyapar Store',
    description: 'Vyapar Store is a platform offering business software, POS systems, and hardware solutions, helping businesses streamline operations through reliable technology and a growing franchise network.',
    technologies: ['React.js', 'CSS', 'React Router'],
    category: 'Frontend',
    url: 'https://www.vyaparstore.com/'
  },
  {
    id: 7,
    title: 'Indian Taste Bud',
    description: 'Indian Taste Bud is an online platform offering a wide range of food and beverage products, delivering quality essentials and favorite brands directly to customers through a seamless shopping experience.',
    technologies: ['React.js', 'dotNet', 'MySQL', 'Stripe'],
    category: 'Frontend',
    url: 'https://tastebuds.indiantastebuds.co.uk/'
  },
  {
    id: 8,
    title: 'Indian Taste Bud Menu',
    description: 'Indian Taste Bud is an online platform offering a wide range of food and beverage products, delivering quality essentials and favorite brands directly to customers through a seamless shopping experience.',
    technologies: ['React.js', 'dotNet', 'MySQL', 'Stripe'],
    category: 'Frontend',
    url: 'https://indiantastebuds.co.uk/'
  },
  {
    id: 9,
    title: 'Advent Calender',
    description: 'An Advent Calendar app to create and share digital calendars with friends. Each day reveals a surprise like a message, image, or link, making the countdown to Christmas interactive and fun.',
    technologies: ['React.js', 'Node.js', 'Mongodb', 'Cloudinary'],
    category: 'Full Stack',
    url: 'https://advent-calendar-fhooe.netlify.app/'
  },
  {
    id: 10,
    title: 'Xenia Mobi',
    description: 'Xenia Mobi is an Android billing software designed for restaurants, cafes, and van sale businesses. It is a lightweight, user-friendly application that can be installed on a tablet or mobile device and used to manage sales, inventory, and customer orders.',
    technologies: ['React.js', 'Node.js'],
    category: 'Full Stack',
    url: 'https://xeniamobi.com/'
  },
  {
    id: 11,
    title: 'B|POS',
    description: 'BPOS is a brand website showcasing its range of products, including self-service kiosks, thermal printers, and other POS hardware solutions.',
    technologies: ['React.js', 'Node.js'],
    category: 'Full Stack',
    url: 'https://bpos.in/'
  },
  {
    id: 12,
    title: 'Mobi Pos',
    description: 'Mobi POS is a revolution in Android Billing and Inventory Management. Mobi POS helps you to manage your Products, Customers, Vendors & Stock in a smart way and can maintain your van sales and multiple sales outlets simultaneously.',
    technologies: ['React.js', 'Node.js'],
    category: 'Full Stack',
    url: 'https://mobipos.in/'
  },
  {
    id: 13,
    title: 'Delivery App',
    description: 'A delivery management app that enables employees to receive e-commerce orders, manage deliveries, update order statuses, and efficiently deliver products to customers.',
    technologies: ['React Native', 'Tanstack Query', 'dotNet'],
    category: 'Mobile',
    url: null
  },
  {
    id: 14,
    title: 'KSFE',
    description: 'A self-service kiosk application for KSFE that enables customers to conveniently make loan repayments, view payment details, and complete transactions quickly and securely without staff assistance.',
    technologies: ['React Native', 'Tanstack Query', 'dotNet', 'Razorpay'],
    category: 'Mobile',
    url: null
  },
  {
    id: 15,
    title: 'Nexora',
    description: 'Nexora is an AI-powered image generation platform integrated with Google APIs, featuring Git-inspired version control, edit history, and a visual version tree to help users create, manage, and track their generated images and iterations.',
    technologies: ['React Native', 'Tanstack Query', 'GoogleAPI', 'AI Integration'],
    category: 'Full Stack',
    url: 'https://imagegenfhooe.netlify.app/'
  }
];

const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState('');

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    if (project.url) {
      window.open(project.url, '_blank');
    } else {
      setToastMessage('This project doesn\'t currently have a public URL.');
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  return (
    <div style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            My Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Projects, experiments and digital experiences I've built.
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem'
          }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                border: `1px solid ${activeCategory === category ? 'var(--accent-color)' : 'var(--card-border)'}`,
                backgroundColor: activeCategory === category ? 'var(--accent-color)' : 'transparent',
                color: activeCategory === category ? 'white' : 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onProjectClick={handleProjectClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Simple Toast */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--error-color)',
          color: 'var(--text-primary)',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <strong style={{ color: 'var(--error-color)' }}>Project link unavailable</strong>
          <span style={{ fontSize: '0.9rem' }}>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Works;
