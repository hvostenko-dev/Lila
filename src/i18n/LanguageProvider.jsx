import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import {
  LANGUAGES,
  STORAGE_KEY,
  TRANSLATIONS,
  detectInitialLanguage,
} from "./config";

function setMeta(selector, content) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  const language = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const t = TRANSLATIONS[language.code];

  const setLang = useCallback((code) => {
    if (!TRANSLATIONS[code]) return;
    setLangState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore storage errors */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language.code;
    root.dir = language.dir;

    document.title = t.meta.title;
    setMeta('meta[name="title"]', t.meta.title);
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', language.locale);
    setMeta('meta[name="twitter:title"]', t.meta.title);
    setMeta('meta[name="twitter:description"]', t.meta.description);
  }, [language, t]);

  const value = useMemo(
    () => ({ lang: language.code, dir: language.dir, setLang, t, languages: LANGUAGES }),
    [language, setLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageProvider;
