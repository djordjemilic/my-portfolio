import styles from "../styles/Profile.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Profile = ({ setProfile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.close} onClick={() => setProfile(false)}>
        <FaTimes />
      </div>
      {/* PROFILE */}
      <div className={styles.me}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image
              objectFit="cover"
              width="100%"
              height="100%"
              layout="responsive"
              src="/profile.jpg"
              draggable={false}
              alt="me"
            />
          </div>
          <div className={styles.name}>
            <span className={styles.small}>PHOTOGRAPHER</span>
            <span className={styles.large}>ANGELOS CHOSTELIDIS</span>
          </div>
        </div>
        <p className={styles.description}>
          Nice to meet you, friend! My name is Angelos Chostelidis. I am from
          Greece. Photography is my passion. Through the lens the world looks
          different and I would like to show you this difference.
        </p>
        <Link href="/contact">
          <a className={styles.btn}>
            <span>CONTACT ME</span>
            <MdOutlineKeyboardArrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
