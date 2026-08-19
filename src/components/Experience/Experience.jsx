import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    role: 'Frontend Developer',
    period: '2024 - Present',
    description: 'Leading frontend development for enterprise web applications using modern web technologies.',
    responsibilities: [
      'Developed scalable React.js and Next.js applications.',
      'Implemented complex UI components with a focus on accessibility.',
      'Collaborated with UX designers to translate wireframes into interactive prototypes.',
      'Mentored junior developers and conducted code reviews.'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    company: 'Innovate Digital',
    role: 'Software Engineer',
    period: '2022 - 2024',
    description: 'Full-stack development for client projects ranging from e-commerce to internal dashboards.',
    responsibilities: [
      'Built cross-platform mobile applications using Flutter.',
      'Developed RESTful APIs using Node.js and Express.',
      'Optimized database queries and improved application performance by 40%.',
      'Integrated third-party payment gateways and authentication services.'
    ],
    technologies: ['Flutter', 'Node.js', 'Vue.js', 'MongoDB']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExp = experiences.find(exp => exp.id === activeTab);

  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">My Experience</h2>
          <p className="section-subtitle">3+ Years of Building, Learning & Growing</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.tabsList}>
            {experiences.map(exp => (
              <button
                key={exp.id}
                className={`${styles.tabBtn} ${activeTab === exp.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(exp.id)}
              >
                <span className={styles.companyName}>{exp.company}</span>
                <ChevronRight size={18} className={styles.tabIcon} />
              </button>
            ))}
          </div>

          <div className={styles.contentArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.role}>{activeExp.role}</h3>
                    <span className={styles.at}>@</span>
                    <span className={styles.companyHighlight}>{activeExp.company}</span>
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{activeExp.period}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.description}>{activeExp.description}</p>

                <div className={styles.details}>
                  <h4 className={styles.detailsTitle}>Key Responsibilities</h4>
                  <ul className={styles.list}>
                    {activeExp.responsibilities.map((resp, index) => (
                      <li key={index} className={styles.listItem}>
                        <span className={styles.bullet}></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStack}>
                  {activeExp.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
