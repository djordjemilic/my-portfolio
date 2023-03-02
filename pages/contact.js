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
      <motion.h2
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={opacityAnim}
      >
        Nice to meet you, friend! My name is Angelos Chostelidis. I’m a
        professional photographer from Thessaloniki, Greece. If you have any
        questions, suggestions or you just want to book a photo session feel
        free to use the contact form below. Lets make something great together!
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
