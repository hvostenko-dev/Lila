import React from "react";
import { ABOUT_CONTENT } from "../data/content";
import styles from "./AboutGame.module.css";

function AboutGame() {
  return (
    <section className={`${styles.section} page`} id="game">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>О методе и практике</span>
          <h2 className={styles.title}>{ABOUT_CONTENT.title}</h2>
          <p className={styles.lead}>{ABOUT_CONTENT.lead}</p>
          <p className={styles.note}>
            <span aria-hidden="true">🧩</span> {ABOUT_CONTENT.note}
          </p>

          <div className={styles.meta}>
            {ABOUT_CONTENT.meta.map((item) => (
              <span key={item.text} className={styles.metaPill}>
                <span aria-hidden="true">{item.icon}</span> {item.text}
              </span>
            ))}
          </div>

          <ul className={styles.badges} aria-label="Темы для проработки">
            {ABOUT_CONTENT.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div className={styles.cards}>
          {ABOUT_CONTENT.cards.map((card) => (
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
          <h3 className={styles.stepsTitle}>{ABOUT_CONTENT.stepsTitle}</h3>
          <ol className={styles.stepsList}>
            {ABOUT_CONTENT.steps.map((step) => (
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
            Перейти к форматам участия
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutGame;
