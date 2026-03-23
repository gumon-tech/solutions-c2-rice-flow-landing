import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PlatformVisual } from "@/components/ui/platform-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function PlatformOverviewSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="platform-overview" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.platform.eyebrow}
          title={copy.sections.platform.title}
          description={copy.sections.platform.description}
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-5">
            {copy.platformPillars.map((pillar) => (
              <SurfaceCard key={pillar.title} className="p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-accent">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[color:var(--foreground-on-panel)]">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft-on-panel)]">
                      {pillar.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm text-[color:var(--foreground-muted)]">
                      {pillar.supportingPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>

          <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <PlatformVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
