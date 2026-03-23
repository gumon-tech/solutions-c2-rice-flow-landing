import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductPreview } from "@/components/ui/product-preview";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

function HeroCta({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary["hero"];
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        href={`/${locale}/contact`}
        className="group min-h-14 w-full border-0 bg-[linear-gradient(135deg,#1db777_0%,#19a46f_60%,#f1d66d_100%)] px-7 text-base font-semibold text-[#f9f7ef] shadow-[0_18px_48px_rgba(24,165,111,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,165,111,0.26)] sm:w-auto"
      >
        <span>{copy.primaryCta}</span>
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </Button>
      <Button
        href={`/${locale}${copy.secondaryCtaHref}`}
        variant="secondary"
        className="min-h-14 w-full border-[#d5e4d8] bg-[rgba(255,252,243,0.82)] px-7 text-base text-[#35584c] hover:border-[#b7d8c3] hover:bg-[rgba(241,249,243,0.95)] sm:w-auto"
      >
        {copy.secondaryCta}
      </Button>
    </div>
  );
}

export function HeroSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/processed/rice-industrial-hero.jpg"
          alt="Large-scale rice and grain facility"
          fill
          priority
          className="object-cover object-center opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,226,0.92)_0%,rgba(244,249,242,0.94)_48%,rgba(248,251,246,0.97)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,165,111,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(241,214,109,0.18),transparent_20%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-grid-fade bg-[size:42px_42px] opacity-[0.05]" />

      <Container>
        <div className="max-w-[74rem]">
          <div className="max-w-[66rem]">
            <Badge className="border-[#d5e4d8] bg-[rgba(255,252,243,0.9)] text-[#5a7668]">{copy.hero.kicker}</Badge>
            <h1 className="mt-7 max-w-[16ch] text-pretty font-display text-[2.9rem] font-semibold leading-[1.06] tracking-tight text-[#153a2f] sm:text-[3.6rem] lg:text-[5.1rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-8 max-w-[58rem] text-pretty text-[1.18rem] leading-9 text-[#5d776b] sm:text-[1.28rem]">
              {copy.hero.summary}
            </p>
            <div className="mt-9">
              <HeroCta locale={locale} copy={copy.hero} />
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <ProductPreview locale={locale} copy={copy.productPreview} />
          </div>
        </div>
      </Container>
    </section>
  );
}
