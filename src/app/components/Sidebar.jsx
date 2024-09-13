"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
    <>
      <div className={styles.logo}>
        <a href="#home">@hksuryan</a>
      </div>
      <div className={styles.hamburger1} onClick={toggleSidebar}>
        <span
          className={`${styles.bar} ${isOpen ? styles.hamburgerOpen1 : ""}`}></span>
        <span
          className={`${styles.bar} ${isOpen ? styles.hamburgerOpen2 : ""}`}></span>
        <span
          className={`${styles.bar} ${isOpen ? styles.hamburgerOpen3 : ""}`}></span>
      </div>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
