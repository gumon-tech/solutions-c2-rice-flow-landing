import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "System architecture",
    title: "Rice Flow platform topology",
    badge: "Field to Control Room",
    description:
      "A practical architecture for telemetry continuity, supervised response, and controlled scale across organizations, sites, and operating teams.",
    layers: [
      {
        title: "Field",
        points: ["Moisture sensors", "Machine signals", "Operator input"],
      },
      {
        title: "Edge",
        points: ["Gateway buffering", "Offline sync", "Secure transport"],
      },
      {
        title: "Platform",
        points: ["Rules engine", "Incident orchestration", "Audit storage"],
      },
      {
        title: "Applications",
        points: ["Web workspace", "Mobile operations", "Control Room"],
      },
    ],
    lanes: [
      {
        title: "Alert lane",
        description: "Thresholds trigger alerts, assignment, escalation, and acknowledgement.",
        tone: "bg-accent",
      },
      {
        title: "Maintenance lane",
        description: "Device health and service schedules stay connected to operational events.",
        tone: "bg-[#ffb37a]",
      },
      {
        title: "Audit lane",
        description: "Every event, action, and response stays traceable for review and export.",
        tone: "bg-[#7aa7ff]",
      },
    ],
    surfacesTitle: "Control surfaces",
    surfaces: [
      { title: "Web", description: "Management, analytics, configuration, and reporting." },
      { title: "Mobile", description: "On-site response, service work, and incident updates." },
      { title: "Control Room", description: "Supervisory view across sites, alerts, and response posture." },
    ],
    outcomes: [
      { label: "Organizations", value: "12", tone: "bg-accent" },
      { label: "Connected sites", value: "24", tone: "bg-[#7aa7ff]" },
      { label: "Open incidents", value: "03", tone: "bg-[#ffb37a]" },
      { label: "Signal health", value: "98.4%", tone: "bg-accent" },
    ],
  },
  th: {
    eyebrow: "สถาปัตยกรรมระบบ",
    title: "โครงสร้างแพลตฟอร์มของ Rice Flow",
    badge: "จาก Field ถึง Control Room",
    description:
      "สถาปัตยกรรมที่ออกแบบเพื่อความต่อเนื่องของ telemetry การตอบสนองที่กำกับดูแลได้ และการขยายระบบอย่างมีการควบคุมข้ามหลายองค์กรและหลายไซต์",
    layers: [
      {
        title: "Field",
        points: ["เซนเซอร์วัดความชื้น", "สัญญาณจากเครื่องจักร", "ข้อมูลจากผู้ปฏิบัติงาน"],
      },
      {
        title: "Edge",
        points: ["บัฟเฟอร์ที่ gateway", "ซิงก์เมื่อออฟไลน์", "รับส่งข้อมูลอย่างปลอดภัย"],
      },
      {
        title: "Platform",
        points: ["Rules engine", "จัดการเหตุการณ์", "จัดเก็บ audit"],
      },
      {
        title: "Applications",
        points: ["Web workspace", "Mobile operations", "Control Room"],
      },
    ],
    lanes: [
      {
        title: "Alert lane",
        description: "Threshold ทำให้เกิดการแจ้งเตือน การมอบหมาย การยกระดับ และการรับทราบเหตุการณ์",
        tone: "bg-accent",
      },
      {
        title: "Maintenance lane",
        description: "สุขภาพอุปกรณ์และงานบำรุงรักษาเชื่อมอยู่กับเหตุการณ์ปฏิบัติการจริง",
        tone: "bg-[#ffb37a]",
      },
      {
        title: "Audit lane",
        description: "ทุกเหตุการณ์ การสั่งงาน และการตอบสนอง สามารถตรวจสอบย้อนหลังและส่งออกได้",
        tone: "bg-[#7aa7ff]",
      },
    ],
    surfacesTitle: "มุมมองการใช้งาน",
    surfaces: [
      { title: "Web", description: "บริหารจัดการ วิเคราะห์ ตั้งค่า และออกรายงาน" },
      { title: "Mobile", description: "ตอบสนองหน้างาน งานบริการ และอัปเดตเหตุการณ์" },
      { title: "Control Room", description: "มุมมองกำกับดูแลหลายไซต์ หลายเหตุการณ์ และสถานะการตอบสนอง" },
    ],
    outcomes: [
      { label: "องค์กรที่รองรับ", value: "12", tone: "bg-accent" },
      { label: "ไซต์ที่เชื่อมต่อ", value: "24", tone: "bg-[#7aa7ff]" },
      { label: "เหตุการณ์ที่เปิดอยู่", value: "03", tone: "bg-[#ffb37a]" },
      { label: "ความสมบูรณ์สัญญาณ", value: "98.4%", tone: "bg-accent" },
    ],
  },
} as const;

export function ArchitectureSystemMap({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <SurfaceCard className="overflow-hidden p-5 sm:p-6">
      <div className="rounded-[30px] border border-white/10 bg-[#081220] p-5 sm:p-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{t.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.75rem]">{t.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{t.description}</p>
          </div>
          <Badge className="border-accent/20 bg-accentSoft text-accent">{t.badge}</Badge>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[26px] border border-white/10 bg-[#07101c] p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-4">
              {t.layers.map((layer, index) => (
                <div key={layer.title} className="relative">
                  {index < t.layers.length - 1 ? (
                    <div className="absolute right-[-14px] top-1/2 hidden h-0.5 w-7 -translate-y-1/2 bg-gradient-to-r from-accent via-[#7aa7ff] to-[#ffb37a] lg:block" />
                  ) : null}
                  <div className="rounded-[24px] border border-[#203754] bg-[#0c1a2b] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{layer.title}</p>
                    <div className="mt-4 space-y-3">
                      {layer.points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/6 bg-[#132236] px-4 py-3"
                        >
                          <div
                            className={`mb-3 h-2 rounded-full ${
                              pointIndex === 1 && index > 1
                                ? "bg-[#7aa7ff]"
                                : pointIndex === 2 && index > 1
                                  ? "bg-[#ffb37a]"
                                  : "bg-accent"
                            }`}
                            style={{ width: `${56 + ((index + pointIndex) % 3) * 14}px` }}
                          />
                          <p className="text-sm text-slate-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {t.lanes.map((lane) => (
                <div
                  key={lane.title}
                  className="rounded-[22px] border border-white/10 bg-[#0c1728] px-4 py-4 sm:px-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="sm:w-44">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{lane.title}</p>
                      <div className={`mt-3 h-2 w-20 rounded-full ${lane.tone}`} />
                    </div>
                    <div className="flex-1">
                      <div className="h-0.5 w-full bg-gradient-to-r from-white/5 via-white/25 to-white/5" />
                      <p className="mt-3 text-sm leading-7 text-slate-300">{lane.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[26px] border border-white/10 bg-[#0d1727] p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.surfacesTitle}</p>
              <div className="mt-4 space-y-3">
                {t.surfaces.map((surface) => (
                  <div key={surface.title} className="rounded-2xl border border-white/8 bg-[#132236] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{surface.title}</p>
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{surface.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.outcomes.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-[#0d1727] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                  <div className={`mt-4 h-2 w-20 rounded-full ${item.tone}`} />
                  <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}
