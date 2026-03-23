import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";

const layers = [
  {
    title: "Field Devices",
    points: ["Moisture sensors", "Machine signals", "Device identity"],
  },
  {
    title: "Edge & Ingestion",
    points: ["Offline buffering", "Secure transport", "Telemetry continuity"],
  },
  {
    title: "Platform Core",
    points: ["Rules engine", "Alerts & incidents", "Audit & reporting"],
  },
  {
    title: "Applications",
    points: ["Web management", "Mobile operations", "Control Room"],
  },
];

const statusCards = [
  { label: "Organizations", value: "12", tone: "bg-accent" },
  { label: "Active Alerts", value: "03", tone: "bg-[#7aa7ff]" },
  { label: "Connected Sites", value: "24", tone: "bg-[#ffb37a]" },
  { label: "Signal Health", value: "98.4%", tone: "bg-accent" },
];

export function ControlInfrastructureVisual() {
  return (
    <SurfaceCard className="overflow-hidden p-5 sm:p-6">
      <div className="rounded-[28px] border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient)] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--foreground-muted)]">Platform topology</p>
            <h3 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">Rice Flow Control Infrastructure</h3>
          </div>
          <Badge className="border-accent/20 bg-accentSoft text-accent">Control Room Ready</Badge>
        </div>

        <div className="rounded-[24px] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] p-5">
          <div className="grid gap-4 lg:grid-cols-[0.8fr_0.8fr_1.2fr_1fr]">
            {layers.map((layer, index) => (
              <div key={layer.title} className="relative">
                {index < layers.length - 1 ? (
                  <div className="absolute right-[-14px] top-1/2 hidden h-0.5 w-7 -translate-y-1/2 bg-gradient-to-r from-accent to-accent/20 lg:block" />
                ) : null}

                <div className="rounded-[24px] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-3)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">{layer.title}</p>
                  <div className="mt-4 space-y-3">
                    {layer.points.map((point, itemIndex) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-4 py-3"
                      >
                        <div
                          className={`mb-3 h-2 rounded-full ${
                            itemIndex === 1 && index > 1
                              ? "bg-[#7aa7ff]"
                              : itemIndex === 2 && index > 1
                                ? "bg-[#ffb37a]"
                                : "bg-accent"
                          }`}
                          style={{
                            width: `${58 + ((index + itemIndex) % 3) * 14}px`,
                          }}
                        />
                        <p className="text-sm text-[color:var(--foreground-soft)]">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statusCards.map((card) => (
            <div
              key={card.label}
              className="rounded-[24px] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-3)] p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">{card.label}</p>
              <div className={`mt-4 h-2 w-20 rounded-full ${card.tone}`} />
              <p className="mt-4 text-3xl font-semibold text-[color:var(--foreground)]">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
