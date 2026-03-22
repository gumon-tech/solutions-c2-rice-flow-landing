import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ProblemSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="problems" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.problem.eyebrow}
          title={copy.sections.problem.title}
          description={copy.sections.problem.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.problemCards.map((card) => (
            <SurfaceCard key={card.title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
