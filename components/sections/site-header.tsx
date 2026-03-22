import { SiteHeaderClient } from "@/components/sections/site-header-client";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return <SiteHeaderClient locale={locale} copy={copy} />;
}
