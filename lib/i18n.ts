export const locales = ["en", "th"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  th: "ไทย",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path = "/") {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function stripLocaleFromPathname(pathname: string) {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];

  if (!maybeLocale || !isLocale(maybeLocale)) {
    return pathname || "/";
  }

  const remainder = `/${parts.slice(2).join("/")}`.replace(/\/+$/, "");
  return remainder === "" ? "/" : remainder;
}
