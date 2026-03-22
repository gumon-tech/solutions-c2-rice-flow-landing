import { Badge } from "@/components/ui/badge";
import { RiceFlowDashboardMock } from "@/components/ui/rice-flow-dashboard-mock";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function ProductPreview({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary["productPreview"];
}) {
  return (
    <SurfaceCard className="relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(70,214,194,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(54,116,255,0.18),transparent_24%)]" />
      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{copy.eyebrow}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{copy.title}</h3>
          </div>
          <Badge className="border-accent/20 bg-accentSoft text-accent">{copy.badge}</Badge>
        </div>

        <RiceFlowDashboardMock locale={locale} />

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:min-h-[148px]">
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
