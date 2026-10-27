import React from "react";
import { HERO_CONTENT } from "../data/content";
import iraJpg from "../assets/ira.jpg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={`${styles.hero} page`} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span aria-hidden="true">✦</span> {HERO_CONTENT.badge}
          </span>

          <h1 className={styles.title}>
            {HERO_CONTENT.titlePrefix}{" "}
            <span className={styles.highlight}>
              {HERO_CONTENT.titleHighlight}
            </span>
          </h1>

          <p className={styles.subtitle}>{HERO_CONTENT.subtitle}</p>

          <ul className={styles.points}>
            {HERO_CONTENT.points.map((point) => (
              <li key={point}>
                <span className={styles.check} aria-hidden="true">
                  ✦
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className={styles.bio}>{HERO_CONTENT.bio}</p>

          <div className={styles.actions}>
            <a href="#pricing" className={styles.cta}>
              Выбрать формат участия
            </a>
            <a href="#game" className={styles.secondary}>
              Подробнее об игре
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <figure className={styles.posterWrap}>
            <img
              src={iraJpg}
              alt="Ира Тищенко — практикующий психотерапевт и ведущая игры Лила"
              className={styles.poster}
              loading="eager"
              decoding="async"
            />
            <figcaption className={styles.overlay}>
              <strong className={styles.captionName}>
                {HERO_CONTENT.facilitatorName}
              </strong>
              <span className={styles.captionRole}>
                {HERO_CONTENT.facilitatorRole}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
