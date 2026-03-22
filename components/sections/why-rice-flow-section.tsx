import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function WhyRiceFlowSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="why-rice-flow" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={copy.sections.why.eyebrow}
            title={copy.sections.why.title}
            description={copy.sections.why.description}
          />

          <SurfaceCard className="p-5 sm:p-6">
            <div className="space-y-5">
              {copy.positioningPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={index === copy.positioningPoints.length - 1 ? "" : "border-b border-white/10 pb-5"}
                >
                  <h3 className="text-[1.1rem] font-semibold text-white sm:text-lg">{point.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-7 text-slate-300 sm:text-sm">{point.description}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
