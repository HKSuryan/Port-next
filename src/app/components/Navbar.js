"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(!darkMode ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  };

  // Sync dark mode with system preference
  useEffect(() => {
    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (systemDarkMode) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.logo}>
        <a href="#home">@hksuryan</a>
      </div>
      <HamburgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
      />
      <div className={styles.menuClosed}>
        <a
          href="#about"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}>
          About
        </a>
        <a
          href="#skills"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a
          href="#projects"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a
          href="#experience"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a
          href="#contact"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className={`${isOpen ? styles.menuOpen : styles.mc}`}>
        <a href="#about" className={styles.menuItem}>
          About
        </a>
        <a href="#skills" className={styles.menuItem}>
          Skills
        </a>
        <a href="#projects" className={styles.menuItem}>
          Projects
        </a>
        <a href="#experience" className={styles.menuItem}>
          Experience
        </a>
        <a href="#contact" className={styles.menuItem}>
          Contact
        </a>
        <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
