import styles from "../styles/Showcase.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Carousel from "../components/Carousel";

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

const ImageContainer = ({ src, alt, setCarousel }) => {
  return (
    <motion.div className={styles.imageContainer} onClick={setCarousel}>
      <Image
        width="100%"
        height="100%"
        objectFit="cover"
        layout="responsive"
        src={src ? src : ""}
        alt={alt ? alt : "album"}
        draggable={false}
      />
    </motion.div>
  );
};

const Description = () => {
  return (
    <div className={styles.description}>
      <motion.h2 initial="hidden" animate="visible" exit="hidden" variants={opacityAnim}>
        {` Personal photo shoot for my friend. An exciting girl, a bright palette
        of colors. What else is needed for good photos? That's right: a
        professional photographer.`}
      </motion.h2>
    </div>
  );
};

const Showcase = () => {
  const sources = [
    "/album1.jpg",
    "/album2.jpg",
    "/album3.jpg",
    "/album6.jpg",
    "/album5.jpg",
    "/album4.jpg",
  ];
  const [carousel, setCarousel] = useState({ isOpen: false, index: 0 });
  return (
    <>
      {/* --- Carousel --- */}
      <AnimatePresence>
        {carousel.isOpen && (
          <Carousel sourcesTable={sources} state={carousel} setState={setCarousel} />
        )}
      </AnimatePresence>
      {/* ------ */}
      <PageLayout smallTitle="PERSONAL SESSION" largeTitle="PURE INNOCENCE">
        <Description />
        <motion.div
          className={styles.album}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={opacityAnim}>
          {sources.map((src, index) => {
            return (
              <ImageContainer
                src={src}
                alt={src}
                key={src}
                setCarousel={() => setCarousel({ isOpen: true, index: index })}
              />
            );
          })}
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Showcase;
