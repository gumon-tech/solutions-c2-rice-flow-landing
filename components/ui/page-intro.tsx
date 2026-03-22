import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function PageIntro({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-grid-fade bg-[size:42px_42px] opacity-[0.08]" />
      <Container>
        <div className="max-w-4xl">
          <Badge className="mb-5 border-accent/20 bg-accentSoft text-accent">{eyebrow}</Badge>
          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
