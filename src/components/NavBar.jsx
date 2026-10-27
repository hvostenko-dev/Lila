import React, { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/content";
import styles from "./NavBar.module.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand} onClick={handleLinkClick}>
          <span className={styles.brandMark} aria-hidden="true">
            ✦
          </span>
          <span className={styles.brandText}>Лила</span>
          <span className={styles.brandSub}>Новый взгляд</span>
        </a>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Основная навигация"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={isActive ? styles.active : ""}
                    aria-current={isActive ? "page" : undefined}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className={styles.navCta}
            onClick={handleLinkClick}
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
