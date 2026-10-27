import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/content";
import styles from "./Faq.module.css";

function Faq() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`${styles.section} page`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Ответы на вопросы</span>
          <h2 className={styles.title}>Частые вопросы перед встречей</h2>
          <p className={styles.lead}>
            Всё, что важно знать перед вашей первой игрой «Лила» или личной
            консультацией.
          </p>
        </div>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item) => {
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
