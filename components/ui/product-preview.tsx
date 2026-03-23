import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import { ThemedDashboardImage } from "@/components/ui/themed-dashboard-image";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

function PreviewNarrative({
  copy,
}: {
  copy: SiteDictionary["productPreview"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
      {copy.annotations.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient)] px-4 py-4 sm:px-5"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">{item.title}</p>
          <p className="mt-2 text-[0.95rem] leading-6 text-[color:var(--foreground-soft)]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function PreviewStats({
  copy,
}: {
  copy: SiteDictionary["productPreview"];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {copy.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] p-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">{stat.value}</p>
          <p className="mt-1 text-[0.92rem] leading-6 text-[color:var(--foreground-soft)]">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductPreview({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary["productPreview"];
}) {
  return (
    <SurfaceCard className="relative overflow-hidden border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient-soft)] p-4 shadow-[0_24px_64px_var(--theme-shadow-soft)] sm:p-5 lg:p-6">
      <div className="absolute inset-0 bg-[image:var(--overlay-radial-soft)]" />

      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-[color:var(--theme-border-soft)] pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[30rem]">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--foreground-muted)]">{copy.eyebrow}</p>
            <h3 className="mt-2 text-[1.6rem] font-semibold text-[color:var(--foreground)] sm:text-[1.9rem]">
              {copy.title}
            </h3>
          </div>
          <Badge className="w-fit border-accent/20 bg-accentSoft text-accent">{copy.badge}</Badge>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.7fr_1.3fr] xl:items-center">
          <div className="order-2 xl:order-1">
            <PreviewNarrative copy={copy} />
          </div>

          <div className="order-1 xl:order-2">
            <div className="rounded-[2rem] border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient)] p-3 shadow-[0_20px_50px_var(--theme-shadow-soft)] sm:p-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-3)]">
                <ThemedDashboardImage alt={copy.alt} priority={locale === "en"} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[color:var(--theme-border-soft)] pt-5">
          <PreviewStats copy={copy} />
        </div>
      </div>
    </SurfaceCard>
  );
}
