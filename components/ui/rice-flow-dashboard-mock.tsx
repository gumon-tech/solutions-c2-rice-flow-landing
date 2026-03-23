import type { Locale } from "@/lib/i18n";

const chartData = [
  { label: "06:00", value: 34 },
  { label: "08:00", value: 42 },
  { label: "10:00", value: 47 },
  { label: "12:00", value: 58 },
  { label: "14:00", value: 54 },
  { label: "16:00", value: 66 },
  { label: "18:00", value: 61 },
];

const labels = {
  en: {
    live: "Live",
    sites: "3 sites",
    devices: "24 devices",
    mode: "Supervisory view",
    title: "Operational state across mill sites",
    description: "One control surface for moisture, response ownership, and site-level readiness.",
    chartLabel: "Moisture trend",
    chartTitle: "Shift-level performance",
    chartRange: "Last 12 hours",
    insightTitle: "Active anomaly",
    insightBody: "Dryer Line 2 exceeded its moisture threshold and triggered an assigned response path.",
    insightMetaA: "Assigned owner",
    insightValueA: "Ops lead",
    insightMetaB: "Escalation",
    insightValueB: "5 min SLA",
    sitesLabel: "Site visibility",
    incidentLabel: "Response path",
    incidentSteps: ["Signal captured", "Alert assigned", "Supervisor notified"],
  },
  th: {
    live: "Live",
    sites: "3 ไซต์",
    devices: "24 อุปกรณ์",
    mode: "มุมมองกำกับดูแล",
    title: "มองเห็นสถานะการปฏิบัติการข้ามหลายไซต์",
    description: "รวมความชื้น การรับผิดชอบการตอบสนอง และความพร้อมของแต่ละไซต์ไว้ในหน้าจอเดียว",
    chartLabel: "แนวโน้มความชื้น",
    chartTitle: "ประสิทธิภาพตลอดช่วงปฏิบัติงาน",
    chartRange: "ย้อนหลัง 12 ชั่วโมง",
    insightTitle: "เหตุผิดปกติที่กำลังดำเนินการ",
    insightBody: "Dryer Line 2 มีค่าความชื้นเกินเกณฑ์และถูกส่งต่อไปยังผู้รับผิดชอบแล้ว",
    insightMetaA: "ผู้รับผิดชอบ",
    insightValueA: "หัวหน้าปฏิบัติการ",
    insightMetaB: "การยกระดับ",
    insightValueB: "ภายใน 5 นาที",
    sitesLabel: "มุมมองหลายไซต์",
    incidentLabel: "เส้นทางการตอบสนอง",
    incidentSteps: ["รับสัญญาณ", "มอบหมายการแจ้งเตือน", "แจ้งผู้กำกับดูแล"],
  },
} as const;

const siteCards = {
  en: [
    { label: "Site A", value: "12.6%", sub: "Moisture avg", tone: "bg-accent" },
    { label: "Site B", value: "03", sub: "Open alerts", tone: "bg-[#7aa7ff]" },
    { label: "Site C", value: "98%", sub: "Signal health", tone: "bg-[#ffb37a]" },
  ],
  th: [
    { label: "Site A", value: "12.6%", sub: "ค่าเฉลี่ยความชื้น", tone: "bg-accent" },
    { label: "Site B", value: "03", sub: "การแจ้งเตือนที่เปิดอยู่", tone: "bg-[#7aa7ff]" },
    { label: "Site C", value: "98%", sub: "ความสมบูรณ์สัญญาณ", tone: "bg-[#ffb37a]" },
  ],
} as const;

export function RiceFlowDashboardMock({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const sites = siteCards[locale];

  return (
    <div className="rounded-[26px] bg-[linear-gradient(180deg,#fdfbf2_0%,#eff8f2_100%)] p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#d9e7db] bg-[rgba(255,252,243,0.84)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#86a094]">{copy.live}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d7e6da] bg-[rgba(255,252,243,0.88)] px-3 py-1 text-[11px] text-[#557166]">{copy.sites}</span>
          <span className="rounded-full border border-[#d7e6da] bg-[rgba(255,252,243,0.88)] px-3 py-1 text-[11px] text-[#557166]">{copy.devices}</span>
        </div>
      </div>

      <div className="mt-4 rounded-[24px] border border-[#d7e6da] bg-[linear-gradient(180deg,#fffdf6_0%,#edf8f1_100%)] p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#86a094]">{copy.mode}</p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_18rem]">
          <div>
            <h4 className="max-w-[22rem] text-[1.7rem] font-semibold leading-[1.15] text-[#173b30]">{copy.title}</h4>
            <p className="mt-3 max-w-[30rem] text-sm leading-6 text-[#5d786b]">{copy.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {sites.map((site) => (
                <div key={site.label} className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.92)] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#86a094]">{site.label}</p>
                  <div className={`mt-3 h-1.5 w-16 rounded-full ${site.tone}`} />
                  <p className="mt-4 text-[1.9rem] font-semibold text-[#173b30]">{site.value}</p>
                  <p className="mt-1 text-sm text-[#638074]">{site.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#d7e6da] bg-[rgba(248,251,246,0.92)] p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#86a094]">{copy.insightTitle}</p>
            <p className="mt-3 text-sm leading-6 text-[#35584c]">{copy.insightBody}</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.88)] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#86a094]">{copy.insightMetaA}</p>
                <p className="mt-2 text-sm font-medium text-[#173b30]">{copy.insightValueA}</p>
              </div>
              <div className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.88)] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#86a094]">{copy.insightMetaB}</p>
                <p className="mt-2 text-sm font-medium text-[#173b30]">{copy.insightValueB}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_18rem]">
          <div className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.92)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#86a094]">{copy.chartLabel}</p>
                <p className="mt-2 text-base font-semibold text-[#173b30]">{copy.chartTitle}</p>
              </div>
              <span className="rounded-full border border-[#d7e6da] bg-[rgba(248,251,246,0.92)] px-3 py-1 text-[11px] text-[#557166]">{copy.chartRange}</span>
            </div>

            <div className="mt-6 flex h-48 items-end gap-3">
              {chartData.map((item) => (
                <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative w-full rounded-t-[18px] bg-[#dcefe4]" style={{ height: `${item.value * 1.8}px` }}>
                    <div className="absolute inset-x-0 top-0 h-2 rounded-t-[18px] bg-accent" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#88a095]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#d7e6da] bg-[rgba(248,251,246,0.92)] p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#86a094]">{copy.incidentLabel}</p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-px flex-1 bg-gradient-to-r from-accent via-[#7aa7ff] to-[#ffb37a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffb37a]" />
            </div>
            <div className="mt-5 grid gap-3">
              {copy.incidentSteps.map((step) => (
                <div key={step} className="rounded-2xl border border-[#d7e6da] bg-[rgba(255,252,243,0.88)] px-4 py-3">
                  <p className="text-sm font-medium text-[#35584c]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
