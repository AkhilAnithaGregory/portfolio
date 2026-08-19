import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.label}
          >
            <Code size={16} />
            <span>SOFTWARE DEVELOPER</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            Building digital experiences with <span className="gradient-text">modern technologies.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.description}
          >
            Hi, I'm Akhil Anitha Gregory, a software developer passionate about building modern, scalable and user-focused web and mobile applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.actions}
          >
            <Link to="/works" className={styles.primaryBtn}>
              View My Work
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={styles.visual}
        >
          <div className={styles.abstractShape}>
            <div className={styles.glow}></div>
            <div className={styles.codeSnippet}>
              <pre>
                <code>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = {'{'}
                  <br/>
                  {'  '}name: <span className={styles.string}>'Akhil'</span>,
                  <br/>
                  {'  '}passion: <span className={styles.string}>'UI/UX'</span>,
                  <br/>
                  {'  '}build: () =&gt; <span className={styles.string}>'Awesome Apps'</span>
                  <br/>
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
