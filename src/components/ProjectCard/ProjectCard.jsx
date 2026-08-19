import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={styles.card}
      onClick={() => onProjectClick(project)}
    >
      <div className={styles.imageContainer}>
        <div className={styles.placeholderImage}>
          <span>{project.category}</span>
        </div>
        <div className={styles.overlay}>
          <button className={styles.viewBtn}>
            <span>View Project</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.category}>{project.category}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
