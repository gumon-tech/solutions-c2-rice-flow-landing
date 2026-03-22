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
            <SurfaceCard key={card.title} className="flex h-full flex-col p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
                <Icon name={card.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
