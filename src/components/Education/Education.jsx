import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import styles from './Education.module.css';

const educationData = [
  {
    id: 1,
    degree: 'Current Education',
    institution: 'Continuous Learning & Certifications',
    year: 'Present',
    description: 'Actively learning new technologies and best practices in frontend and mobile development.'
  },
  {
    id: 2,
    degree: "Master's Degree in Computer Science",
    institution: 'University of Technology',
    year: '2020 - 2022',
    description: 'Specialized in Software Engineering and Advanced Web Technologies.'
  },
  {
    id: 3,
    degree: "Bachelor's Degree in Computer Applications",
    institution: 'State University',
    year: '2017 - 2020',
    description: 'Core focus on programming logic, database management, and web fundamentals.'
  },
  {
    id: 4,
    degree: 'High School',
    institution: 'Public High School',
    year: '2015 - 2017',
    description: 'Major in Mathematics and Computer Science.'
  }
];

const Education = () => {
  return (
    <section className={`section ${styles.education}`} id="education">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and continuous learning.</p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineIcon}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <div className={styles.year}>
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>
                </div>
                <h4 className={styles.institution}>{item.institution}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
