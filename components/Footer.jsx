import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const copyrightYear = new Date().getFullYear();

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
};
const Footer = () => {
  return (
    <motion.footer
      className={styles.container}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/djordjemilicc/" target="_blank" rel="noreferrer">
            in
          </a>
        </li>
        <li>
          <a href="https://github.com/djordjemilic" target="_blank" rel="noreferrer">
            github
          </a>
        </li>
      </ul>
      <div className={styles.copyright}>
        <span>COPYRIGHT @{copyrightYear}.</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
