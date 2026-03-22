import Image from "next/image";
import { SurfaceCard } from "@/components/ui/surface-card";

export function PlatformVisual() {
  return (
    <SurfaceCard className="p-4 sm:p-5">
      <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-3">
        <Image
          src="/images/rice-flow-architecture-placeholder.svg"
          alt="Rice Flow platform architecture placeholder"
          width={1200}
          height={760}
          className="h-auto w-full rounded-xl"
        />
      </div>
    </SurfaceCard>
  );
}
