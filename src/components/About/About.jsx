import { motion } from 'framer-motion';
import { User, Code2, Smartphone, Terminal, Briefcase } from 'lucide-react';
import styles from './About.module.css';

const stats = [
  { icon: <Briefcase size={24} />, title: '3+ Years Experience', description: 'Building professional apps' },
  { icon: <Code2 size={24} />, title: 'Web Development', description: 'React, Vue, Next.js' },
  { icon: <Smartphone size={24} />, title: 'Mobile Development', description: 'Flutter cross-platform' },
  { icon: <Terminal size={24} />, title: 'Problem Solving', description: 'Clean & scalable code' },
];

const About = () => {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={styles.content}
          >
            <h2 className="section-title">About Me</h2>
            <p className={styles.description}>
              I'm Akhil Anitha Gregory, a passionate software developer with over 3 years of professional experience in crafting high-quality web and mobile applications. I specialize in modern frontend technologies and cross-platform mobile development, focusing on delivering seamless user experiences and scalable architectures.
            </p>
            <p className={styles.description}>
              My approach combines technical expertise with a keen eye for design, ensuring that every project not only functions flawlessly but also looks stunning and intuitive.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.statsCard}
          >
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  {stat.icon}
                </div>
                <div>
                  <h4 className={styles.statTitle}>{stat.title}</h4>
                  <p className={styles.statDesc}>{stat.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
