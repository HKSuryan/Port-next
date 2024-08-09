"use client";

import styles from '../styles/HamburgerMenu.module.css';

const HamburgerMenu = ({ isOpen, setIsOpen , darkMode}) => {
  return (
    <div className={`${styles.hamburger} ${darkMode ? styles.darkMode : ''}` } onClick={() => setIsOpen(!isOpen)}>
      <div className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerOpen1 : ''}`} />
      <div className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerOpen2 : ''}`} />
      <div className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerOpen3 : ''}`} />
    </div>
  );
};

export default HamburgerMenu;
