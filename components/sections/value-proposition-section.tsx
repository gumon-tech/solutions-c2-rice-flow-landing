import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ValuePropositionSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.sections.value.eyebrow}
            title={copy.sections.value.title}
            description={copy.sections.value.description}
          />

          <SurfaceCard className="p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {copy.valueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3 text-accent">
                    <Icon name={card.icon} className="h-5 w-5" />
                    <h3 className="text-[1.0625rem] font-semibold text-[color:var(--foreground-on-panel)] sm:text-base">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.98rem] leading-8 text-[color:var(--foreground-soft-on-panel)] sm:text-sm sm:leading-7">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
