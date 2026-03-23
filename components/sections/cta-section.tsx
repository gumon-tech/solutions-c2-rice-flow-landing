import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function CtaSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SurfaceCard className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[image:var(--overlay-radial)]" />
          <div className="absolute inset-0 bg-[image:var(--overlay-glass)]" />
          <div className="relative">
            <Badge className="mb-5 border-accent/20 bg-accentSoft text-accent">{copy.sections.cta.eyebrow}</Badge>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[44rem]">
                <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl lg:text-[2.95rem] lg:leading-[1.08]">
                  {copy.sections.cta.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-[color:var(--foreground-soft)] sm:text-lg">
                  {copy.sections.cta.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[15rem] lg:flex-col">
                <Button href={`/${locale}/contact`}>{copy.sections.cta.primaryCta}</Button>
                <Button href="mailto:hello@riceflow.app?subject=Rice%20Flow%20Consultation" variant="secondary">
                  {copy.sections.cta.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </Container>
    </section>
  );
}
