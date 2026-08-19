import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    url: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile application for productivity and task management with real-time sync.',
    technologies: ['Flutter', 'Firebase', 'Provider'],
    category: 'Mobile',
    url: null
  },
  {
    id: 3,
    title: 'Fintech Dashboard',
    description: 'Financial dashboard with interactive charts, dark mode, and real-time data visualization.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Chart.js'],
    category: 'Frontend',
    url: 'https://example.com'
  },
  {
    id: 4,
    title: 'Portfolio Design System',
    description: 'A comprehensive design system and component library built from scratch.',
    technologies: ['Next.js', 'SCSS', 'Storybook'],
    category: 'UI/UX',
    url: 'https://example.com'
  },
  {
    id: 5,
    title: 'Social Media API',
    description: 'A scalable REST API for a social media platform featuring auth, posts, and real-time messaging.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'Full Stack',
    url: 'https://example.com'
  },
  {
    id: 6,
    title: 'Weather Utility App',
    description: 'A clean, minimal weather application using open weather API and geolocation.',
    technologies: ['React.js', 'Vanilla CSS', 'REST API'],
    category: 'Frontend',
    url: 'https://example.com'
  }
];

const categories = ['All', 'Frontend', 'Full Stack', 'Mobile', 'UI/UX'];

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
