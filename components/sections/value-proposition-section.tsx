import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ValuePropositionSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow={copy.sections.value.eyebrow}
            title={copy.sections.value.title}
            description={copy.sections.value.description}
          />

          <SurfaceCard className="p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {copy.valueCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3 text-accent">
                    <Icon name={card.icon} className="h-5 w-5" />
                    <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
