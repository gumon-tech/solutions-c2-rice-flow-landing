import Image from "next/image";
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
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/processed/rice-industrial-hero.jpg"
          alt="Large-scale rice and grain facility"
          fill
          priority
          className="object-cover object-center opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,28,0.96)_0%,rgba(7,16,28,0.88)_38%,rgba(7,16,28,0.72)_62%,rgba(7,16,28,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(70,214,194,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(122,167,255,0.18),transparent_22%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-grid-fade bg-[size:42px_42px] opacity-[0.08]" />
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
          <div className="max-w-3xl pt-2">
            <Badge className="mb-6 border-accent/20 bg-accentSoft text-accent">
              {copy.hero.badge}
            </Badge>
            <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4.15rem] lg:leading-[1.03]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
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

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Platform posture</p>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">Enterprise-grade</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Built for operational control, policy enforcement, and scalable deployment.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Signal continuity</p>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">Offline-aware</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Preserve operational context even when site connectivity is unstable.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Control surface</p>
                <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">Web + Mobile + Control Room</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  One operational model across management, field execution, and supervisory views.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.hero.supportingCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:pl-2">
            <ProductPreview locale={locale} copy={copy.productPreview} />
          </div>
        </div>
      </Container>
    </section>
  );
}
