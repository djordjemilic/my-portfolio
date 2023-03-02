import styles from "../styles/Form.module.scss";
import { motion } from "framer-motion";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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

const Detail = ({ icon, children }) => {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      {children}
    </div>
  );
};

const InputContainer = ({ label, htmlFor, placeHolder, error, textarea }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={htmlFor}>{label}</label>
      <div className={styles.input}>
        {textarea ? (
          <textarea type="text" name={htmlFor} placeholder={placeHolder} />
        ) : (
          <input type="text" name={htmlFor} placeholder={placeHolder} />
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

InputContainer.defaultProps = {
  textarea: false,
  label: "Name",
  htmlFor: "name",
  placeHolder: "Enter your name",
  error: "",
};

const Form = () => {
  return (
    <motion.div
      className={styles.contact}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={opacityAnim}
    >
      <div className={styles.information}>
        <div className={styles.details}>
          <span>
            <h3>MY CONTACTS AND SOCIALS</h3>
            <h2>HOW TO FIND ME</h2>
          </span>

          <Detail icon={<IoLocationOutline />}>
            <span>1250 Random St,Athens, CO 32104</span>
          </Detail>
          <Detail icon={<BsTelephone />}>
            <span>+1 (123) 456 - 78 - 90</span>
          </Detail>
          {/* EMAIL */}
          <Detail icon={<AiOutlineMail />}>
            <span>test@test.com</span>
          </Detail>
          {/* SOCIALS */}
          <Detail icon={<IoShareSocialOutline />}>
            <span>Fb Tw In Px</span>
          </Detail>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.from}>
            <InputContainer label="Name" htmlFor="name" />
            <InputContainer
              label="Email"
              htmlFor="email"
              placeHolder={"Enter your email"}
            />
          </div>
          <InputContainer
            label="Phone"
            htmlFor="phone"
            placeHolder={"Enter your phone"}
          />
          <InputContainer
            label="Message"
            htmlFor="message"
            placeHolder={"Enter your message"}
            textarea={true}
          />
          <button className={styles.submit}>Send Message</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;
