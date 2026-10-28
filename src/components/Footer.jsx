import React from "react";
import { CONTACT_INFO } from "../data/content";
import { useLanguage } from "../i18n/useLanguage";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useLanguage();
  const footer = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#hero" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              ✦
            </span>
            <span>{footer.brand}</span>
          </a>
          <p className={styles.desc}>{footer.desc}</p>
        </div>

        <nav aria-label={footer.navAria} className={styles.navCol}>
          <span className={styles.colTitle}>{footer.sectionsTitle}</span>
          <ul className={styles.links}>
            {t.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <span className={styles.colTitle}>{footer.contactTitle}</span>
          <ul className={styles.links}>
            <li>
              <a href={CONTACT_INFO.phoneHref} dir="ltr">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.emailHref} dir="ltr">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_INFO.mapLink}
                target="_blank"
                rel="noreferrer noopener"
                dir="ltr"
              >
                {CONTACT_INFO.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {footer.rights}
        </span>
        <a href="#hero" className={styles.backToTop}>
          {footer.backToTop}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
