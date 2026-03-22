import type { Metadata } from "next";
import { CoreCapabilitiesSection } from "@/components/sections/core-capabilities-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DesignPrinciplesSection } from "@/components/sections/design-principles-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { PageIntro } from "@/components/ui/page-intro";
import type { LocalePageProps } from "@/app/[locale]/layout";
import { withLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/site-copy";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return {
    title: copy.pages.features.metadataTitle,
    description: copy.pages.features.metadataDescription,
  };
}

export default async function FeaturesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main>
        <PageIntro
          eyebrow={copy.pages.features.eyebrow}
          title={copy.pages.features.title}
          description={copy.pages.features.description}
          primaryCta={{
            label: copy.pages.features.primaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.features.primaryCta?.href ?? "/contact"),
          }}
          secondaryCta={{
            label: copy.pages.features.secondaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.features.secondaryCta?.href ?? "/"),
          }}
        />
        <CoreCapabilitiesSection copy={copy} />
        <ValuePropositionSection copy={copy} />
        <DesignPrinciplesSection copy={copy} />
        <CtaSection locale={locale} copy={copy} />
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
