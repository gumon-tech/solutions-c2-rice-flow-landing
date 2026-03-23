import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
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
          className="rounded-2xl border border-[#d7e6da] bg-[linear-gradient(180deg,rgba(255,252,243,0.92),rgba(239,248,242,0.82))] px-4 py-4 sm:px-5"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">{item.title}</p>
          <p className="mt-2 text-[0.95rem] leading-6 text-[#537064]">{item.description}</p>
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
          className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.84)] p-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#86a094]">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold text-[#173b30]">{stat.value}</p>
          <p className="mt-1 text-[0.92rem] leading-6 text-[#618074]">{stat.description}</p>
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
    <SurfaceCard className="relative overflow-hidden border-[#dce9de] bg-[linear-gradient(180deg,rgba(250,248,237,0.95),rgba(241,249,243,0.92))] p-4 shadow-[0_24px_64px_rgba(31,92,67,0.1)] sm:p-5 lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,165,111,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(241,214,109,0.12),transparent_24%)]" />

      <div className="relative">
        <div className="flex flex-col gap-4 border-b border-[#dbe9de] pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[30rem]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#84a093]">{copy.eyebrow}</p>
            <h3 className="mt-2 text-[1.6rem] font-semibold text-[#173b30] sm:text-[1.9rem]">{copy.title}</h3>
          </div>
          <Badge className="w-fit border-accent/20 bg-accentSoft text-accent">{copy.badge}</Badge>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.7fr_1.3fr] xl:items-center">
          <div className="order-2 xl:order-1">
            <PreviewNarrative copy={copy} />
          </div>

          <div className="order-1 xl:order-2">
            <div className="rounded-[2rem] border border-[#d7e6da] bg-[linear-gradient(180deg,#fefcf4_0%,#eef8f1_100%)] p-3 shadow-[0_20px_50px_rgba(31,92,67,0.12)] sm:p-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-[#d9e8dc] bg-[#f8fbf6]">
                <Image
                  src="/images/rice-flow-dashboard-placeholder.svg"
                  alt={copy.alt}
                  width={960}
                  height={720}
                  className="h-auto w-full object-cover"
                  priority={locale === "en"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#dbe9de] pt-5">
          <PreviewStats copy={copy} />
        </div>
      </div>
    </SurfaceCard>
  );
}
