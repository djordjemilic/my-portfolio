import styles from "../styles/Contact.module.scss";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import Form from "../components/Form";

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

const Description = () => {
  return (
    <div className={styles.description}>
      <motion.h2 initial="hidden" animate="visible" exit="hidden" variants={opacityAnim}>
        Currently open to opportunities withing the software engineering discipline and if you feel
        like we would be a great match, I would love to hear from you!
      </motion.h2>
    </div>
  );
};

const contact = () => {
  return (
    <PageLayout smallTitle={"CONTACT DETAILS"} largeTitle={"GET IN TOUCH"}>
      <Description />
      <Form />
    </PageLayout>
  );
};

export default contact;
