import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ProblemSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="problems" className="py-18 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.problem.eyebrow}
          title={copy.sections.problem.title}
          description={copy.sections.problem.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.problemCards.map((card) => (
            <SurfaceCard key={card.title} className="p-6 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-accent">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[1.375rem] font-semibold leading-8 text-[color:var(--foreground-on-panel)] sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-8 text-[color:var(--foreground-soft-on-panel)] sm:text-sm sm:leading-7">
                {card.description}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
