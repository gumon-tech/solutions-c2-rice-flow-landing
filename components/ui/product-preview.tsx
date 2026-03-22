import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteDictionary } from "@/lib/site-copy";

export function ProductPreview({
  copy,
}: {
  copy: SiteDictionary["productPreview"];
}) {
  return (
    <SurfaceCard className="relative overflow-hidden p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(70,214,194,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(54,116,255,0.18),transparent_24%)]" />
      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{copy.eyebrow}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{copy.title}</h3>
          </div>
          <Badge className="border-accent/20 bg-accentSoft text-accent">{copy.badge}</Badge>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
          <Image
            src="/images/rice-flow-dashboard-placeholder.svg"
            alt={copy.alt}
            width={960}
            height={720}
            className="h-auto w-full rounded-xl border border-white/10"
            priority
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
