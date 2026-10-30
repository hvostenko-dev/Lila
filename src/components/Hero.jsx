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
          <div className={styles.visualContainer}>
            {/* Ambient Multi-Stop Radiant Glow */}
            <div className={styles.ambientGlow} aria-hidden="true" />

            {/* Celestial / Sacred Geometry Accent Rings */}
            <div className={styles.celestialRing} aria-hidden="true">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.ringSvg}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  opacity="0.45"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="66"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                  opacity="0.25"
                />
              </svg>
            </div>

            {/* Subtle sparkling accent stars */}
            <span className={`${styles.sparkle} ${styles.sparkle1}`} aria-hidden="true">✦</span>
            <span className={`${styles.sparkle} ${styles.sparkle2}`} aria-hidden="true">✦</span>
            <span className={`${styles.sparkle} ${styles.sparkle3}`} aria-hidden="true">✦</span>

            {/* Decorative Offset Backdrop Plate */}
            <div className={styles.backdropPlate} aria-hidden="true" />

            {/* Floating Trust Badge: Safe & Confidential Space */}
            <div className={`${styles.floatingBadge} ${styles.floatingBadgeTop}`}>
              <span className={styles.badgePulseDot} aria-hidden="true" />
              <span className={styles.badgeText}>
                {hero.floatingBadge1 || "Безопасное пространство"}
              </span>
            </div>

            {/* Main Arch Portrait Card */}
            <figure className={styles.posterWrap}>
              <div className={styles.innerGleam} aria-hidden="true" />
              <img
                src={iraJpg}
                alt={hero.imageAlt}
                className={styles.poster}
                loading="eager"
                decoding="async"
              />
              <figcaption className={styles.overlay}>
                <div className={styles.captionBadge}>
                  <span className={styles.captionBadgeDot} aria-hidden="true">✦</span>
                  <span className={styles.captionRole}>
                    {hero.facilitatorRole}
                  </span>
                </div>
                <strong className={styles.captionName}>
                  {hero.facilitatorName}
                </strong>
              </figcaption>
            </figure>

            {/* Floating Trust Badge: 1:1 & Mini-Groups */}
            <div className={`${styles.floatingBadge} ${styles.floatingBadgeBottom}`}>
              <span className={styles.badgeStarIcon} aria-hidden="true">✨</span>
              <span className={styles.badgeText}>
                {hero.floatingBadge2 || "Индивидуально и в группах"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
