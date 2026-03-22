import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function getLocaleOgImage(locale: Locale) {
  return locale === "th" ? "/images/og/rice-flow-og-th.svg" : "/images/og/rice-flow-og-en.svg";
}

export function createLocaleMetadata({
  locale,
  title,
  description,
  dictionary,
}: {
  locale: Locale;
  title: string;
  description: string;
  dictionary: SiteDictionary;
}): Metadata {
  const image = getLocaleOgImage(locale);

  return {
    title,
    description,
    keywords: dictionary.metadata.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
