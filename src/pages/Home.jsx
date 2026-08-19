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
    title: 'Matha Fresh Fish',
    description: 'MathaFresh is a Kochi-based e-commerce platform that delivers fresh, hygienically prepared fish, poultry, and meat directly to customers homes through convenient online and mobile ordering.',
    technologies: ['React.js', 'dotNet', 'MySQL', 'Razorpay'],
    category: 'Frontend',
    url: 'https://mathafresh.com/'
  },
  {
    id: 2,
     title: 'B|POS',
    description: 'BPOS is a brand website showcasing its range of products, including self-service kiosks, thermal printers, and other POS hardware solutions.',
    technologies: ['React.js', 'Node.js'],
    category: 'Full Stack',
    url: 'https://bpos.in/'
  },
  {
    id: 3,
    title: 'Xenia CRM',
    description: 'Xenia CRM helps businesses manage customer relationships, streamline sales processes, and drive growth through an intuitive and efficient platform.',
    technologies: ['dotNet', 'HTML', 'MySQL'],
    category: 'Frontend',
    url: 'https://crm.xeniapos.com/'
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
