import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ArchitecturePrinciplesSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.architectureOutcomes.eyebrow}
          title={copy.sections.architectureOutcomes.title}
          description={copy.sections.architectureOutcomes.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {copy.architectureNarratives.map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
