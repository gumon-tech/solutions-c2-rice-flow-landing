import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function CoreCapabilitiesSection({ copy }: { copy: SiteDictionary }) {
  return (
    <section id="capabilities" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={copy.sections.capabilities.eyebrow}
          title={copy.sections.capabilities.title}
          description={copy.sections.capabilities.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.capabilityCards.map((card) => (
            <SurfaceCard key={card.title} className="flex h-full flex-col p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-accent">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--foreground-on-panel)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft-on-panel)]">{card.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
