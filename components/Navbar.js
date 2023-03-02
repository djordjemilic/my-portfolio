import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";
import useBackground from "../context/BackgroundContext";
import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/ClickOutside";
import Profile from "./Profile";

const OpicityAnim = {
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

const NavbarAnim = {
  hidden: {
    x: "100vw",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};
const NavbarItemAnim = {
  hidden: {
    x: "10vw",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const NavbarBgAnim = {
  hidden: {
    width: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.9,
    },
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const { setBackground } = useBackground();
  const [navOpen, setNavOpen] = useState(false);
  const mobileNav = useRef();
  useOnClickOutside(mobileNav, () => setNavOpen(false));

  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <>
      <motion.nav
        className={styles.container}
        variants={OpicityAnim}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className={styles.logo}>
          <Link href="/">
            <a>A</a>
          </Link>
        </div>
        <ul
          onMouseEnter={() => setBackground(false)}
          onMouseLeave={() => setBackground(true)}
        >
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/showcase">
              <a>SHOWCASE</a>
            </Link>
          </li>
          <li>
            <Link href="/clients">
              <a>CLIENTS</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>

          <button className={styles.mobile} onClick={() => setNavOpen(true)}>
            <FaBars />
          </button>

          <button
            className={styles.more}
            onClick={() => {
              setProfileOpen(true);
              console.log(profileOpen);
            }}
          >
            <HiDotsHorizontal />
          </button>
        </ul>
      </motion.nav>

      {/* MOBILENAV */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.nav
              className={styles.mobileNav}
              ref={mobileNav}
              variants={NavbarAnim}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                className={styles.close}
                onClick={() => setNavOpen(false)}
              >
                <FaTimes />
              </button>
              <div className={styles.links}>
                <ul>
                  <motion.li
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link href="/">
                      <a>HOME</a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link href="/showcase">
                      <a>SHOWCASE</a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link href="/clients">
                      <a>CLIENTS</a>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={NavbarItemAnim}
                    onClick={() => setNavOpen(false)}
                  >
                    <Link href="/contact">
                      <a>CONTACT</a>
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.nav>
            <motion.div
              className={styles.mobileNavBg}
              variants={NavbarBgAnim}
              initial="hidden"
              animate="visible"
              exit="hidden"
            ></motion.div>
          </>
        )}
        {/* PROFILE */}
        {profileOpen && (
          <motion.div
            variants={NavbarAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onPanEnd={(e, info) => {
              if (info.offset.x > 0) {
                setProfileOpen(false);
                setBackground(true);
              }
            }}
            className={styles.profile}
          >
            <Profile setProfile={() => setProfileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
