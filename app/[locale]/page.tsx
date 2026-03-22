import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { CoreCapabilitiesSection } from "@/components/sections/core-capabilities-section";
import { DesignPrinciplesSection } from "@/components/sections/design-principles-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformOverviewSection } from "@/components/sections/platform-overview-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { WhyRiceFlowSection } from "@/components/sections/why-rice-flow-section";
import type { LocalePageProps } from "@/app/[locale]/layout";
import { getDictionary } from "@/lib/site-copy";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return {
    title: copy.metadata.siteTitle,
    description: copy.metadata.siteDescription,
  };
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main className="relative overflow-hidden">
        <HeroSection locale={locale} copy={copy} />
        <ProblemSection copy={copy} />
        <ValuePropositionSection copy={copy} />
        <PlatformOverviewSection copy={copy} />
        <CoreCapabilitiesSection copy={copy} />
        <DesignPrinciplesSection copy={copy} />
        <WhyRiceFlowSection copy={copy} />
        <CtaSection locale={locale} copy={copy} />
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
