import React from "react";
import { useLanguage } from "../i18n/useLanguage";
import iraJpg from "../assets/ira.jpg";
import styles from "./Hero.module.css";

function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className={`${styles.hero} page`} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span aria-hidden="true">✦</span> {hero.badge}
          </span>

          <h1 className={styles.title}>
            {hero.titlePrefix}{" "}
            <span className={styles.highlight}>{hero.titleHighlight}</span>
          </h1>

          <p className={styles.subtitle}>{hero.subtitle}</p>

          <ul className={styles.points}>
            {hero.points.map((point) => (
              <li key={point}>
                <span className={styles.check} aria-hidden="true">
                  ✦
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className={styles.bio}>{hero.bio}</p>

          <div className={styles.actions}>
            <a href="#pricing" className={styles.cta}>
              {hero.ctaPrimary}
            </a>
            <a href="#game" className={styles.secondary}>
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <figure className={styles.posterWrap}>
            <img
              src={iraJpg}
              alt={hero.imageAlt}
              className={styles.poster}
              loading="eager"
              decoding="async"
            />
            <figcaption className={styles.overlay}>
              <strong className={styles.captionName}>
                {hero.facilitatorName}
              </strong>
              <span className={styles.captionRole}>
                {hero.facilitatorRole}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
