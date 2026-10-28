import React from "react";
import { useLanguage } from "../i18n/useLanguage";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.languageAria}
      className={`${styles.switcher} ${className}`}
    >
      {languages.map((item) => {
        const isActive = item.code === lang;
        return (
          <button
            key={item.code}
            type="button"
            lang={item.code}
            className={`${styles.option} ${isActive ? styles.active : ""}`}
            aria-pressed={isActive}
            aria-label={item.name}
            title={item.name}
            onClick={() => setLang(item.code)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
