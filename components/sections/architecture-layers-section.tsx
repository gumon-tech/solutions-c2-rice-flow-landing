import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ArchitectureLayersSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.architectureLayers.eyebrow}
          title={copy.sections.architectureLayers.title}
          description={copy.sections.architectureLayers.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {copy.architectureLayers.map((layer) => (
            <SurfaceCard key={layer.title} className="p-6">
              <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{layer.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {layer.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
