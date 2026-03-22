import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { PlatformOverviewSection } from "@/components/sections/platform-overview-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ProductExperienceSection } from "@/components/sections/product-experience-section";
import { SolutionOverviewSection } from "@/components/sections/solution-overview-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { WhyRiceFlowSection } from "@/components/sections/why-rice-flow-section";
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
    title: copy.pages.solution.metadataTitle,
    description: copy.pages.solution.metadataDescription,
    dictionary: copy,
  });
}

export default async function SolutionPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main>
        <PageIntro
          eyebrow={copy.pages.solution.eyebrow}
          title={copy.pages.solution.title}
          description={copy.pages.solution.description}
          primaryCta={{
            label: copy.pages.solution.primaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.solution.primaryCta?.href ?? "/contact"),
          }}
          secondaryCta={{
            label: copy.pages.solution.secondaryCta?.label ?? "",
            href: withLocale(locale, copy.pages.solution.secondaryCta?.href ?? "/architecture"),
          }}
        />
        <ProductExperienceSection locale={locale} />
        <SolutionOverviewSection copy={copy} />
        <ValuePropositionSection copy={copy} />
        <PlatformOverviewSection copy={copy} />
        <WhyRiceFlowSection copy={copy} />
        <CtaSection locale={locale} copy={copy} />
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
