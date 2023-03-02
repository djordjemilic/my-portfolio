import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/PageLayout.module.scss";

const heightAnim = {
  hidden: {
    height: "0%",
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  visible: {
    height: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const opacityAnim = {
  hidden: {
    opacity: 0,
    ease: "easeInOut",
    when: "afterChildren",
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const PageLayout = ({ children, largeTitle, smallTitle }) => {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.center}>
        {/* LINE */}
        <motion.div
          className={styles.line1}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={heightAnim}
        >
          <AnimatePresence>
            <motion.div className={styles.text} variants={opacityAnim}>
              <div className={styles.textInner}>
                <span className={styles.small}>{smallTitle}</span>
                <span className={styles.large}>{largeTitle}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CONTENT */}
        <div className={styles.content}>
          <div className={styles.inner}>{children}</div>
        </div>

        {/* LINE */}
        <motion.div
          className={styles.line2}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={heightAnim}
        ></motion.div>
      </div>
      <div></div>
    </div>
  );
};

export default PageLayout;
