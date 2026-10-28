import ru from "./locales/ru";
import en from "./locales/en";
import he from "./locales/he";

export const LANGUAGES = [
  { code: "ru", label: "RU", name: "Русский", dir: "ltr", locale: "ru_RU" },
  { code: "en", label: "EN", name: "English", dir: "ltr", locale: "en_US" },
  { code: "he", label: "עב", name: "עברית", dir: "rtl", locale: "he_IL" },
];

export const TRANSLATIONS = { ru, en, he };

export const DEFAULT_LANGUAGE = "ru";
export const STORAGE_KEY = "lila-lang";

export function detectInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && TRANSLATIONS[stored]) return stored;
  } catch {
    /* localStorage may be unavailable (private mode) */
  }

  const browserLangs = navigator.languages ?? [navigator.language];
  for (const lang of browserLangs) {
    const code = lang?.toLowerCase().slice(0, 2);
    if (code === "iw") return "he";
    if (code && TRANSLATIONS[code]) return code;
  }

  return DEFAULT_LANGUAGE;
}
