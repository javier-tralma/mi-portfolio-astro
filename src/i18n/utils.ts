import type { UILanguage, TranslationKey } from "./types";
import { getTranslation } from "./ui";

const defaultLocale: UILanguage = "es";
const locales: UILanguage[] = ["es", "en"];

export function getLangFromUrl(url: URL): UILanguage {
  const [, lang] = url.pathname.split("/");
  if (locales.includes(lang as UILanguage)) {
    return lang as UILanguage;
  }
  return defaultLocale;
}

export function useTranslations(lang: UILanguage) {
  return function t(key: TranslationKey): string {
    return getTranslation(lang, key);
  };
}

export function getRouteFromUrl(url: URL): string {
  const segments = url.pathname.split("/").filter(Boolean);

  if (locales.includes(segments[0] as UILanguage)) {
    segments.shift();
  }

  return `/${segments.join("/")}`;
}
