"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Sidebar.module.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((p) => !p);

  // Init + sync theme with system preference
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

  // Toggle theme
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

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <div className={styles.mobileTopBar}>
        <a href="#home" className={styles.logo} onClick={close}>
          @hksuryan
        </a>

        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle theme">
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className={styles.hamburger}
            onClick={toggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}>
            <span className={`${styles.bar} ${isOpen ? styles.open1 : ""}`} />
            <span className={`${styles.bar} ${isOpen ? styles.open2 : ""}`} />
            <span className={`${styles.bar} ${isOpen ? styles.open3 : ""}`} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayShow : ""}`}
        onClick={close}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}>
        <nav className={styles.nav}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
