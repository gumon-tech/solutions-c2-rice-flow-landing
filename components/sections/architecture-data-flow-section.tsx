import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ArchitectureDataFlowSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.architectureFlow.eyebrow}
          title={copy.sections.architectureFlow.title}
          description={copy.sections.architectureFlow.description}
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-5">
          {copy.architectureFlowSteps.map((step, index) => (
            <SurfaceCard key={step.title} className="relative p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Step {index + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
