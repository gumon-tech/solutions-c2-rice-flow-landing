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
            <div className="relative overflow-hidden rounded-[24px] border border-[#d9e7db]">
              <Image
                src="/images/processed/rice-industrial-hero.jpg"
                alt="Large-scale grain silo facility"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,226,0.1)_0%,rgba(241,249,243,0.24)_40%,rgba(247,252,247,0.84)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <Badge className="border-accent/20 bg-accentSoft text-accent">Operations in context</Badge>
                <h3 className="mt-4 max-w-2xl text-[1.65rem] font-semibold leading-tight text-[#153a2f] sm:text-3xl">
                  From field infrastructure to plant-scale execution and management control
                </h3>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-[#4f695d] sm:text-sm">
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
