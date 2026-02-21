"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu from "./HamburgerMenu";
//jjjj
const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Init theme from system preference (and keep synced)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (isDark) => {
      setDarkMode(isDark);
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light",
      );
    };

    apply(mq.matches);
    const handler = (e) => apply(e.matches);

    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.setAttribute(
        "data-theme",
        next ? "dark" : "light",
      );
      return next;
    });
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onNavClick = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.logo} href="#home" onClick={onNavClick}>
          @hksuryan
        </a>

        {/* Desktop links */}
        <div className={styles.desktopMenu}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.menuItem}>
              {l.label}
            </a>
          ))}

          <button
            className={styles.themeBtn}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle theme">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          <button
            className={styles.themeBtn}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle theme">
            {darkMode ? "☀️" : "🌙"}
          </button>

          <HamburgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            darkMode={darkMode}
          />
        </div>
      </nav>

      {/* Mobile overlay + drawer */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayShow : ""}`}
        onClick={onNavClick}
        aria-hidden={!isOpen}
      />

      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!isOpen}>
        <div className={styles.drawerInner}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.drawerItem}
              onClick={onNavClick}>
              {l.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
