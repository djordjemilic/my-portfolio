import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <Link href="">
            <a>Fb</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Tw</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>In</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Yt</a>
          </Link>
        </li>
      </ul>
      <div className={styles.copyright}>
        <span>COPYRIGHT @ {new Date().getFullYear}.</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
