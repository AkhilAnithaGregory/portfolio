import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const featuredProjects = [
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
  }
];

const Home = () => {
  const [toastMessage, setToastMessage] = useState('');

  const handleProjectClick = (project) => {
    if (project.url) {
      window.open(project.url, '_blank');
    } else {
      setToastMessage('This project doesn\'t currently have a public URL.');
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Education />
      
      <section className="section" id="featured-works">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Featured Works</h2>
            <p className="section-subtitle">A selection of projects I've worked on.</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onProjectClick={handleProjectClick} 
              />
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link to="/works" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-color)',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              View More Works <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Home;
