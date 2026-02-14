"use client";

import styles from "../styles/HamburgerMenu.module.css";

const HamburgerMenu = ({ isOpen, setIsOpen, darkMode }) => {
  return (
    <button
      className={`${styles.hamburger} ${darkMode ? styles.darkMode : ""}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}>
      <span
        className={`${styles.hamburgerLine} ${isOpen ? styles.open1 : ""}`}
      />
      <span
        className={`${styles.hamburgerLine} ${isOpen ? styles.open2 : ""}`}
      />
      <span
        className={`${styles.hamburgerLine} ${isOpen ? styles.open3 : ""}`}
      />
    </button>
  );
};

export default HamburgerMenu;
