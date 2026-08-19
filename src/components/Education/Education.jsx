import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import styles from './Education.module.css';

const educationData = [
  {
    id: 1,
    degree: 'Masters in Interactive Media',
    institution: 'FH Oberösterreich • University of Applied Sciences, Upper Austria',
    year: 'Present',
    description: ''
  },
  {
    id: 2,
    degree: "Bachelor Degree in Computer Science and Engineering(BTECH)",
    institution: 'APJ Abdul Kalam Technological University • Thiruvananthapuram, Kerala',
    year: 'June 2022',
    description: 'CGPA : 7.05'
  },
  {
    id: 3,
    degree: "Board of Higher Secondary Examination",
    institution: 'St.Xaviers Hss Peyad High School • Thiruvananthapuram',
    year: 'March 2017',
    description: 'Grade : 69.4%'
  },
  {
    id: 4,
    degree: 'SSLC (Board of general education Kerala)',
    institution: 'DVMNNMHSS • Maranalloor,Thiruvananthapuram',
    year: 'April 2015',
    description: 'Grade : 80%'
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
                <div className={styles.year}>
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>
                <div className={styles.contentHeader}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  
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
