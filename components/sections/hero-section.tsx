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
        className="group min-h-14 w-full border-0 bg-[linear-gradient(135deg,#67f0dc_0%,#46d6c2_48%,#7aa7ff_100%)] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_48px_rgba(70,214,194,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(70,214,194,0.38)] sm:w-auto"
      >
        <span>{copy.primaryCta}</span>
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </Button>
      <Button
        href={`/${locale}${copy.secondaryCtaHref}`}
        variant="secondary"
        className="min-h-14 w-full border-white/12 bg-white/[0.03] px-7 text-base text-white/86 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,28,0.96)_0%,rgba(7,16,28,0.92)_48%,rgba(7,16,28,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(70,214,194,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(122,167,255,0.12),transparent_18%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-grid-fade bg-[size:42px_42px] opacity-[0.04]" />

      <Container>
        <div className="max-w-[74rem]">
          <div className="max-w-[66rem]">
            <Badge className="border-white/10 bg-white/[0.05] text-white/90">{copy.hero.kicker}</Badge>
            <h1 className="mt-7 max-w-[16ch] text-pretty font-display text-[2.9rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-[3.6rem] lg:text-[5.1rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-8 max-w-[58rem] text-pretty text-[1.18rem] leading-9 text-slate-300 sm:text-[1.28rem]">
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
