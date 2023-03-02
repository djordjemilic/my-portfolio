import styles from "../styles/PageWrapper.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GradientCircle from "./GradientCircle";
import { BackgroundContext } from "../context/BackgroundContext";

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <BackgroundContext>
        <Navbar />
        <GradientCircle />
        <div className={styles.page}>{children}</div>
      </BackgroundContext>
      <Footer />
    </div>
  );
};

export default PageWrapper;
