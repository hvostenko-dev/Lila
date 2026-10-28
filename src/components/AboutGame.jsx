import React from "react";
import { useLanguage } from "../i18n/useLanguage";
import styles from "./AboutGame.module.css";

function AboutGame() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section className={`${styles.section} page`} id="game">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{about.eyebrow}</span>
          <h2 className={styles.title}>{about.title}</h2>
          <p className={styles.lead}>{about.lead}</p>
          <p className={styles.note}>
            <span aria-hidden="true">🧩</span> {about.note}
          </p>

          <div className={styles.meta}>
            {about.meta.map((item) => (
              <span key={item.text} className={styles.metaPill}>
                <span aria-hidden="true">{item.icon}</span> {item.text}
              </span>
            ))}
          </div>

          <ul className={styles.badges} aria-label={about.badgesAria}>
            {about.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div className={styles.cards}>
          {about.cards.map((card) => (
            <article className={styles.card} key={card.id}>
              <div className={styles.icon} aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.steps}>
          <h3 className={styles.stepsTitle}>{about.stepsTitle}</h3>
          <ol className={styles.stepsList}>
            {about.steps.map((step) => (
              <li key={step.number} className={styles.stepItem}>
                <span className={styles.stepNum} aria-hidden="true">
                  {step.number}
                </span>
                <div className={styles.stepBody}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.ctaWrap}>
          <a href="#pricing" className={styles.cta}>
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutGame;
