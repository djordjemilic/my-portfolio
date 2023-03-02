import styles from "../styles/Clients.module.scss";
import PageLayout from "../components/PageLayout";
import Form from "../components/Form";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const opacityAnim = {
  hidden: {
    opacity: 0,
    ease: "easeInOut",
    when: "afterChildren",
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const opacityContainer = {
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
      staggerChildren: 0.2,
    },
  },
};

const opacityContainer2 = {
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
      staggerChildren: -0.3,
    },
  },
};

const opacityChild = {
  hidden: {
    opacity: 0,
    ease: "easeInOut",
  },
  visible: {
    opacity: 1,
    ease: "easeInOut",
  },
};

const Description = () => {
  return (
    <motion.div
      className={styles.desc}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={opacityAnim}
    >
      <div className={styles.title}>
        <h3>{`CLIENT'S REVIEWS`}</h3>
        <h2>BACKSTORY</h2>
      </div>
      <div className={styles.paragraphs}>
        <p>
          After years of practice and tons of experience I learned the
          techniques, that helps me in my work with modern brands and companies.
        </p>
        <p>
          But working with famous companies does not prevent me from giving good
          photos to private clients. And this work in private inspires me at
          all.
        </p>
      </div>
      <div className={styles.paragraph}>
        <p>
          Here are some of the most inspiring reviews from my clients. If you
          wish to join this group of satisfied people or have something to say
          you can feel free to fill contact form below. Your opinion is very
          important to me, because I always try to evolve and improve in the
          professional field and work on mistakes.
        </p>
      </div>
    </motion.div>
  );
};

const Testimonial = ({ profession, name, testimonial, profileSrc }) => {
  return (
    <motion.div className={styles.testimonial} variants={opacityChild}>
      <div className={styles.name}>
        <span className={styles.small}>{profession}</span>
        <span className={styles.large}>{name}</span>
      </div>
      <div className={styles.photo}>
        <Image
          src={profileSrc}
          height="100%"
          width="100%"
          objectFit="cover"
          alt="img"
        />
      </div>
      <div className={styles.testimonial}>
        <div className={styles.stars}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>{testimonial}</p>
      </div>
    </motion.div>
  );
};

const clients = () => {
  return (
    <PageLayout smallTitle="WHAT MY CLIENTS SAY" largeTitle="TESTIMONIALS">
      <Description />

      <div className={styles.testimonials}>
        <motion.div
          className={styles.col}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={opacityContainer}
        >
          <Testimonial
            profession="INSTAGRAM MODEL"
            name="ELIZABETH SHOWN"
            testimonial={`Most professional man I've ever seen. His photos are a work of art. Just amazing photos and now I am like a queen in my Instagram profile.`}
            profileSrc={"/clients/1.jpg"}
          />
          <Testimonial
            profession="BEGINNER MODEL"
            name="NELLE NILES"
            testimonial={`I am a web developer. And, as known, good clipart is a half of successful web design. Today is not so easy to find realy good photos for website. And one day I have ordered a clipart for my new project and works of Andrew are fit just amazing for me. Thank you, Andrew, for your work! 5 stars without a doubt!`}
            profileSrc={"/clients/2.jpg"}
          />
          <Testimonial
            profession="RINA FORTUNE"
            name="RINA FORTUNE"
            testimonial={`Webdesigntuts helps our car showroom to make really perfect of selling car photos for our website. On his photos cars look even better, than they are! Fantastic work. Profitable, quick, professional that is why we choose Andrew for partnership!`}
            profileSrc={"/clients/4.jpg"}
          />
        </motion.div>
        <motion.div
          className={styles.col}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={opacityContainer2}
        >
          <Testimonial
            profession="WEB DESIGNER"
            name="TONY NORTON"
            testimonial={`Webdesigntuts helps our car showroom to make really perfect of selling car photos for our website. On his photos cars look even better, than they are! Fantastic work. Profitable, quick, professional that is why we choose Andrew for partnership!`}
            profileSrc={"/clients/3.jpg"}
          />

          <Testimonial
            profession="AGENCY MANAGER"
            name="BETTY JANSON"
            testimonial={`I am a web developer. And, as known, good clipart is a half of successful web design. Today is not so easy to find realy good photos for website. And one day I have ordered a clipart for my new project and works of Andrew are fit just amazing for me. Thank you, Andrew, for your work! 5 stars without a doubt!`}
            profileSrc={"/clients/5.jpg"}
          />
          <Testimonial
            profession="INSTAGRAM MODEL"
            name="JESSA AGRESTA"
            testimonial={`Most professional man I've ever seen. His photos are a work of art. Just amazing photos and now I am like a queen in my Instagram profile.`}
            profileSrc={"/clients/6.jpg"}
          />
        </motion.div>
        <motion.div
          className={`${styles.col} ${styles.colLast}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={opacityContainer}
        >
          <Testimonial
            profession="HAPPY WIFE"
            name="ELIZABETH SHOWN"
            testimonial={`Webdesigntuts helps our car showroom to make really perfect of selling car photos for our website. On his photos cars look even better, than they are! Fantastic work. Profitable, quick, professional that is why we choose Andrew for partnership!`}
            profileSrc={"/clients/7.jpg"}
          />
          <Testimonial
            profession="TRACI HARDEN"
            name="SCOTTIE HARLAN"
            testimonial={`Most professional man I've ever seen. His photos are a work of art. Just amazing photos and now I am like a queen in my Instagram profile.`}
            profileSrc={"/clients/9.jpg"}
          />

          <Testimonial
            profession="FASHION MODEL"
            name="MICAELA DRAPER"
            testimonial={`I am a web developer. And, as known, good clipart is a half of successful web design. Today is not so easy to find realy good photos for website. And one day I have ordered a clipart for my new project and works of Andrew are fit just amazing for me. Thank you, Andrew, for your work! 5 stars without a doubt!`}
            profileSrc={"/clients/8.jpg"}
          />
        </motion.div>
      </div>
      <Form />
    </PageLayout>
  );
};

export default clients;
