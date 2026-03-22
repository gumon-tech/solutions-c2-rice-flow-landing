import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SurfaceCard } from "@/components/ui/surface-card";
import { ControlInfrastructureVisual } from "@/components/ui/control-infrastructure-visual";

export function OperationsVisualSection() {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="overflow-hidden p-2.5 sm:p-3">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10">
              <Image
                src="/images/processed/rice-industrial-hero.jpg"
                alt="Large-scale grain silo facility"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <Badge className="border-accent/20 bg-accentSoft text-accent">Operations in context</Badge>
                <h3 className="mt-4 max-w-2xl text-[1.65rem] font-semibold leading-tight text-white sm:text-3xl">
                  From field infrastructure to plant-scale execution and management control
                </h3>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-slate-200 sm:text-sm">
                  Rice Flow is positioned between field conditions, industrial plant operations,
                  and the decisions leadership needs to manage with confidence.
                </p>
              </div>
            </div>
          </SurfaceCard>

          <ControlInfrastructureVisual />
        </div>
      </Container>
    </section>
  );
}
