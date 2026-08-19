import { motion } from 'framer-motion';
import styles from './Technologies.module.css';

const techStack = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Vue.js', icon: '🖖' },
  { name: 'Next.js', icon: 'N' },
  { name: 'Flutter', icon: '📱' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'SCSS', icon: '💅' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Bootstrap', icon: 'B' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Vite', icon: '⚡' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Technologies = () => {
  return (
    <section className={`section ${styles.technologies}`} id="technologies">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">Tools and technologies I use to build modern digital experiences.</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {techStack.map((tech, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.techCard}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
