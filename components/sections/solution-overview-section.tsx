import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function SolutionOverviewSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={copy.sections.solutionOverview.eyebrow}
            title={copy.sections.solutionOverview.title}
            description={copy.sections.solutionOverview.description}
          />
          <SurfaceCard className="p-5 sm:p-6">
            <div className="space-y-5">
              {copy.solutionNarratives.map((item, index) => (
                <div
                  key={item.title}
                  className={index === copy.solutionNarratives.length - 1 ? "" : "border-b border-white/10 pb-5"}
                >
                  <h3 className="text-[1.1rem] font-semibold text-white sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-[0.98rem] leading-7 text-slate-300 sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
