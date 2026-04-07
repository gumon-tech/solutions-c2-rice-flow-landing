import type { Locale } from "@/lib/i18n";

export const externalLinks = {
  admin: "https://admin.riceflow.app/",
  appStore: {
    en: "https://apps.apple.com/us/search?term=rice%20flow",
    th: "https://apps.apple.com/th/search?term=rice%20flow",
  },
  playStore: {
    en: "https://play.google.com/store/search?q=rice%20flow&c=apps&hl=en",
    th: "https://play.google.com/store/search?q=rice%20flow&c=apps&hl=th",
  },
} as const;

export function getExternalLinks(locale: Locale) {
  return {
    adminUrl: externalLinks.admin,
    appStoreUrl: externalLinks.appStore[locale],
    playStoreUrl: externalLinks.playStore[locale],
  };
}
