import type { Metadata } from "next";
import { ArchitectureDataFlowSection } from "@/components/sections/architecture-data-flow-section";
import { ArchitectureLayersSection } from "@/components/sections/architecture-layers-section";
import { ArchitecturePrinciplesSection } from "@/components/sections/architecture-principles-section";
import { CtaSection } from "@/components/sections/cta-section";
import { PlatformOverviewSection } from "@/components/sections/platform-overview-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ArchitectureSystemMap } from "@/components/ui/architecture-system-map";
import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import type { LocalePageProps } from "@/app/[locale]/layout";
import { withLocale } from "@/lib/i18n";
import { createLocaleMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/site-copy";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return createLocaleMetadata({
    locale,
    title: copy.pages.architecture.metadataTitle,
    description: copy.pages.architecture.metadataDescription,
    dictionary: copy,
  });
}

export default async function ArchitecturePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main>
        <PageIntro
          eyebrow={copy.pages.architecture.eyebrow}
          title={copy.pages.architecture.title}
          description={copy.pages.architecture.description}
          primaryCta={{
            label: copy.pages.architecture.primaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.architecture.primaryCta?.href ?? "/contact"),
          }}
          secondaryCta={{
            label: copy.pages.architecture.secondaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.architecture.secondaryCta?.href ?? "/features"),
          }}
        />
        <Container className="pb-4">
          <ArchitectureSystemMap locale={locale} />
        </Container>
        <ArchitectureLayersSection copy={copy} />
        <ArchitecturePrinciplesSection copy={copy} />
        <ArchitectureDataFlowSection copy={copy} />
        <PlatformOverviewSection copy={copy} />
        <CtaSection locale={locale} copy={copy} />
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
