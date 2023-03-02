import styles from "../styles/Carousel.module.scss";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PropTypes from "prop-types";

const opacityAnim = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const imageAnim = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Carousel = ({ sourcesTable, state, setState }) => {
  const checkIfExists = (index) => {
    if (index < 0) {
      return sourcesTable.length - 1;
    } else if (index > sourcesTable.length - 1) {
      return 0;
    } else {
      return index;
    }
  };

  //SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setState({ ...state, isOpen: false });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [state]);

  //ICON CONTROLS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setState({ ...state, index: checkIfExists(state.index + 1) });
      }
      if (e.key === "ArrowLeft") {
        setState({ ...state, index: checkIfExists(state.index - 1) });
      }
      if (e.key === "Escape") {
        setState({ ...state, isOpen: false });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);

  return (
    <motion.div
      className={styles.carousel}
      variants={opacityAnim}
      initial='hidden'
      animate='visible'
      exit='hidden'
      onPanEnd={(e, info) => {
        if (info.offset.x < 0) {
          setState({ ...state, index: checkIfExists(state.index - 1) });
        } else {
          setState({ ...state, index: checkIfExists(state.index + 1) });
        }
      }}
    >
      <div
        className={styles.close}
        onClick={() => setState({ ...state, isOpen: false })}
      >
        <FaTimes />
      </div>
      <button
        className={styles.prev}
        onClick={() =>
          setState({
            ...state,
            index: checkIfExists(state.index + 1),
          })
        }
      >
        <div className={styles.inner}>
          <MdKeyboardArrowLeft />
        </div>
      </button>
      <AnimatePresence>
        <motion.div
          className={styles.contain}
          variants={imageAnim}
          key={state.index}
        >
          <motion.div className={styles.inner}>
            <Image
              objectFit='contain'
              layout='fill'
              src={sourcesTable[state.index]}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <button
        className={styles.next}
        onClick={() =>
          setState({
            ...state,
            index: checkIfExists(state.index + 1),
          })
        }
      >
        <div className={styles.inner}>
          <MdKeyboardArrowRight />
        </div>
      </button>
    </motion.div>
  );
};

Carousel.propTypes = {
  sourcesTable: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  simulateTouch: false,
};

export default Carousel;
