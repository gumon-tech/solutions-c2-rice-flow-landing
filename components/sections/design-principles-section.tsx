import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function DesignPrinciplesSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="principles" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.principles.eyebrow}
          title={copy.sections.principles.title}
          description={copy.sections.principles.description}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {copy.principleCards.map((card) => (
            <SurfaceCard key={card.title} className="p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-accent">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[color:var(--foreground-on-panel)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft-on-panel)]">{card.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
