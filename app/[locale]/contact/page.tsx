import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { PageIntro } from "@/components/ui/page-intro";
import type { LocalePageProps } from "@/app/[locale]/layout";
import { withLocale } from "@/lib/i18n";
import { createLocaleMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/site-copy";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return createLocaleMetadata({
    locale,
    title: copy.pages.contact.metadataTitle,
    description: copy.pages.contact.metadataDescription,
    dictionary: copy,
  });
}

export default async function ContactPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main>
        <PageIntro
          eyebrow={copy.pages.contact.eyebrow}
          title={copy.pages.contact.title}
          description={copy.pages.contact.description}
          primaryCta={{
            label: copy.pages.contact.primaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.contact.primaryCta?.href ?? "/"),
          }}
          secondaryCta={{
            label: copy.pages.contact.secondaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.contact.secondaryCta?.href ?? "/solution"),
          }}
        />
        <ContactSection locale={locale} copy={copy} />
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
