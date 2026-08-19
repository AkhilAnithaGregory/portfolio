import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    company: 'Xenia Technologies',
    role: 'Software Developer',
    period: '2023 - 2025',
    description: 'Contributing to the development of enterprise applications across frontend, backend, and mobile platforms, using modern technologies to build scalable and user-focused solutions.',
    responsibilities: [
      'Developed responsive web applications and Android apps, ensuring fast performance and seamless user experience.',
      'Implemented complex UI components with a focus on accessibility.',
      'Collaborated with UX designers to translate wireframes into interactive prototypes.',
      'Implemented state management using Zustand, React Query, and JS Cookies to optimize data flow and user sessions.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Flutter', 'React Native', 'Android Development']
  },
  {
    id: 2,
    company: 'Iantz IT Solutions',
    role: 'Junior React Developer',
    period: '2022 - 2023',
    description: 'Mostly worked on building and maintaining web applications, focusing on user experience and performance optimization. Main projects are ERP solutions and websites for clients.',
    responsibilities: [
      'Built responsive and user-friendly web pages using modern front-end technologies.',
      'Integrated RESTful APIs and handled data flow between backend and frontend.',
      'Communicated with clients and team members to clarify tasks and deliver updates.',
      'Gained experience with version control (Git/GitHub) and project workflows.',
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'SCSS', 'Bootstrap']
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
