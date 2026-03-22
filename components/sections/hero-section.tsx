import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductPreview } from "@/components/ui/product-preview";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function HeroSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return (
    <section className="relative pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-grid-fade bg-[size:42px_42px] opacity-[0.08]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge className="mb-6 border-accent/20 bg-accentSoft text-accent">
              {copy.hero.badge}
            </Badge>
            <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/contact`}>{copy.hero.primaryCta}</Button>
              <Button href={`/${locale}${copy.hero.secondaryCtaHref}`} variant="secondary">
                {copy.hero.secondaryCta}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {copy.hero.highlights.map((item) => (
                <Badge key={item.label}>{item.label}</Badge>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {copy.hero.supportingCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-4">
            <ProductPreview copy={copy.productPreview} />
          </div>
        </div>
      </Container>
    </section>
  );
}
