import { motion } from 'framer-motion';
import styles from './Technologies.module.css';
import ReactLogo from '../../assets/technologies/react.png';
import VueLogo from '../../assets/technologies/vue.png';
import NextLogo from '../../assets/technologies/next.png';
import FlutterLogo from '../../assets/technologies/flutter.png';
import NodeLogo from '../../assets/technologies/node.png';
import HTMLLogo from '../../assets/technologies/html.png';
import CSSLogo from '../../assets/technologies/css.png';
import SCSSLogo from '../../assets/technologies/sass.png';
import JavaScriptLogo from '../../assets/technologies/javascript.png';
import BootstrapLogo from '../../assets/technologies/bootstrap.png';
import TailwindLogo from '../../assets/technologies/tailwind.png';
import ViteLogo from '../../assets/technologies/vite.png';

const techStack = [
  { name: 'React.js', icon: ReactLogo },
  { name: 'Vue.js', icon: VueLogo },
  { name: 'Next.js', icon: NextLogo },
  { name: 'Flutter', icon: FlutterLogo },
  { name: 'Node.js', icon: NodeLogo },
  { name: 'HTML', icon: HTMLLogo },
  { name: 'CSS', icon: CSSLogo },
  { name: 'SCSS', icon: SCSSLogo },
  { name: 'JavaScript', icon: JavaScriptLogo },
  { name: 'Bootstrap', icon: BootstrapLogo },
  { name: 'Tailwind CSS', icon: TailwindLogo },
  { name: 'Vite', icon: ViteLogo },
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
              <div className={styles.techIcon}>
                <img
                  className={styles.techImage}
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                />
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
