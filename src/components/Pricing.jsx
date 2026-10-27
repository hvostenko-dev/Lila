import React from "react";
import { CONTACT_INFO, PRICING_PLANS } from "../data/content";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <section className={`${styles.section} page`} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Участие и консультации</span>
          <h2 className={styles.title}>Форматы работы и стоимость</h2>
          <p className={styles.lead}>
            Выберите комфортный для себя формат: живая динамика в камерной
            мини-группе, глубокая индивидуальная игра или личная консультация.
          </p>
        </div>

        <div className={styles.grid}>
          {PRICING_PLANS.map((plan) => {
            const bookingUrl = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
              plan.whatsappText
            )}`;

            return (
              <article
                key={plan.id}
                className={`${styles.card} ${
                  plan.featured ? styles.cardFeatured : ""
                }`}
              >
                <div className={styles.cardTop}>
                  <span
                    className={`${styles.badge} ${
                      plan.featured ? styles.badgeFeatured : ""
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <h3 className={styles.cardTitle}>{plan.title}</h3>
                  <p className={styles.cardSubtitle}>{plan.subtitle}</p>

                  <div className={styles.priceBox}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.priceNote}>{plan.priceNote}</span>
                  </div>

                  <ul className={styles.list}>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.ctaWrap}>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`${styles.cta} ${
                      plan.featured ? styles.ctaFeatured : styles.ctaSecondary
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
