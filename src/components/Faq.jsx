import React, { useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import styles from "./Faq.module.css";

function Faq() {
  const { t } = useLanguage();
  const faq = t.faq;
  const [openId, setOpenId] = useState(faq.items[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`${styles.section} page`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{faq.eyebrow}</span>
          <h2 className={styles.title}>{faq.title}</h2>
          <p className={styles.lead}>{faq.lead}</p>
        </div>

        <div className={styles.accordion}>
          {faq.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-btn`;

            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <h3 className={styles.questionHeading}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.chevron} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
