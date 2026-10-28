import React from "react";
import { CONTACT_INFO, buildWhatsappLink } from "../data/content";
import { useLanguage } from "../i18n/useLanguage";
import styles from "./Contact.module.css";

/* --- SVG ICONS --- */
const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M9.036 15.47 8.9 19.8a.9.9 0 0 0 1.6.57l2.053-2.53 4.497 3.292c.83.61 2.003.16 2.266-.86l3.65-14.28c.27-1.06-.78-1.96-1.79-1.52L1.39 10.07c-1.16.51-1.07 2.2.13 2.57l5.86 1.81 10.85-9.34a.3.3 0 0 1 .4.44L9.036 15.47Z"
    />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.37.1 11.96c0 2.1.55 4.15 1.6 5.97L0 24l6.24-1.63a12 12 0 0 0 5.82 1.49h.01c6.6 0 11.96-5.37 11.96-11.96 0-3.2-1.25-6.22-3.52-8.42Zm-8.46 18.1h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.95 9.95 0 0 1-1.51-5.32c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.49-4.46 9.94-9.95 9.94Z"
    />
  </svg>
);

const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 12.4 12.4 0 0 0 3.89.62 1 1 0 0 1 1 1V20a2 2 0 0 1-2 2C9.16 22 2 14.84 2 6a2 2 0 0 1 2-2h2.44a1 1 0 0 1 1 1c0 1.36.22 2.68.62 3.89a1 1 0 0 1-.25 1.01l-2.2 2.2Z"
    />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6Zm0 2.85V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.85l-9.34 5.83a2 2 0 0 1-2.12 0L2 8.85Z"
    />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03c4.78-.76 8.44-4.92 8.44-9.94Z"
    />
  </svg>
);

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
    />
  </svg>
);

function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const whatsappBookingHref = buildWhatsappLink(c.bookingMessage);

  return (
    <section className={`${styles.section} page`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{c.eyebrow}</span>
          <h2 className={styles.title}>{c.title}</h2>
          <p className={styles.lead}>
            {c.leadBefore}
            <b>{c.leadHighlight}</b>
            {c.leadAfter}
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.channels}>
            <ul className={styles.contactsList}>
              <li>
                <a
                  className={styles.contactLink}
                  href={whatsappBookingHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className={`${styles.icon} ${styles.wa}`}>
                    <WhatsAppIcon />
                  </span>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <strong className={styles.contactValue} dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </strong>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className={styles.contactLink}
                  href={CONTACT_INFO.telegramHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className={`${styles.icon} ${styles.tg}`}>
                    <TelegramIcon />
                  </span>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Telegram</span>
                    <strong className={styles.contactValue} dir="ltr">
                      {CONTACT_INFO.telegramHandle}
                    </strong>
                  </div>
                </a>
              </li>

              <li>
                <a className={styles.contactLink} href={CONTACT_INFO.phoneHref}>
                  <span className={styles.icon}>
                    <PhoneIcon />
                  </span>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>{c.phoneLabel}</span>
                    <strong className={styles.contactValue} dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </strong>
                  </div>
                </a>
              </li>

              <li>
                <a className={styles.contactLink} href={CONTACT_INFO.emailHref}>
                  <span className={styles.icon}>
                    <MailIcon />
                  </span>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Email</span>
                    <strong className={styles.contactValue} dir="ltr">
                      {CONTACT_INFO.email}
                    </strong>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className={styles.contactLink}
                  href={CONTACT_INFO.facebookHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className={`${styles.icon} ${styles.fb}`}>
                    <FacebookIcon />
                  </span>
                  <div className={styles.contactMeta}>
                    <span className={styles.contactLabel}>{c.socialLabel}</span>
                    <strong className={styles.contactValue}>
                      {c.facebookPage}
                    </strong>
                  </div>
                </a>
              </li>
            </ul>

            <div className={styles.quickActions}>
              <a
                className={`${styles.actionBtn} ${styles.actionPrimary}`}
                href={whatsappBookingHref}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsAppIcon />
                <span>{c.writeWhatsapp}</span>
              </a>
              <a
                className={styles.actionBtn}
                href={CONTACT_INFO.telegramHref}
                target="_blank"
                rel="noreferrer noopener"
              >
                <TelegramIcon />
                <span>{c.writeTelegram}</span>
              </a>
            </div>
          </div>

          <div className={styles.mapCard}>
            <a
              className={styles.addressHeader}
              href={CONTACT_INFO.mapLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={styles.icon}>
                <PinIcon />
              </span>
              <div className={styles.contactMeta}>
                <span className={styles.contactLabel}>{c.addressLabel}</span>
                <strong className={styles.contactValue} dir="ltr">
                  {CONTACT_INFO.address}
                </strong>
              </div>
            </a>

            <div className={styles.mapWrapper}>
              <iframe
                title={c.mapTitle}
                src={CONTACT_INFO.mapEmbedSrc}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
