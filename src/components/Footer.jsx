import React from "react";
import { CONTACT_INFO, NAV_ITEMS } from "../data/content";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#hero" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              ✦
            </span>
            <span>Лила: Новый взгляд</span>
          </a>
          <p className={styles.desc}>
            Психологическая трансформационная игра и частные консультации под
            руководством практикующего психотерапевта Иры Тищенко в Ашдоде.
          </p>
        </div>

        <nav aria-label="Навигация в подвале" className={styles.navCol}>
          <span className={styles.colTitle}>Разделы</span>
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <span className={styles.colTitle}>Связь</span>
          <ul className={styles.links}>
            <li>
              <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneDisplay}</a>
            </li>
            <li>
              <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
            </li>
            <li>
              <a
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {CONTACT_INFO.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Ира Тищенко • Все права защищены</span>
        <a href="#hero" className={styles.backToTop}>
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
