import type { Locale } from "@/lib/i18n";

const trendBars = [
  { time: "06:00", height: 34 },
  { time: "08:00", height: 46 },
  { time: "10:00", height: 54 },
  { time: "12:00", height: 61 },
  { time: "14:00", height: 58 },
  { time: "16:00", height: 72 },
  { time: "18:00", height: 64 },
];

const copy = {
  en: {
    badge: "Platform experience",
    title: "Rice Flow Command Center",
    subtitle: "A single operational surface for moisture, alerts, maintenance, and multi-site oversight.",
    sitesLabel: "Site operations",
    telemetryLabel: "Signal lane",
    telemetryTitle: "Moisture trend with operating limits",
    telemetryRange: "Latest shift",
    queueLabel: "Incident queue",
    queueCount: "03 open",
    deviceLabel: "Device health",
    maintenanceLabel: "Maintenance queue",
    accessLabel: "Access scope",
    auditLabel: "Traceability",
    auditTitle: "Traceability across every operational step",
    auditBadge: "Export-ready",
    queueTitle: "Alerts, incidents, and assigned response",
    kpi1Label: "Moisture avg",
    kpi1Value: "12.6%",
    kpi2Label: "Signal continuity",
    kpi2Value: "98.4%",
    kpi3Label: "Assigned response",
    kpi3Value: "05 min",
    sites: [
      { name: "Site A", state: "Drying line stable", metric: "01 alert" },
      { name: "Site B", state: "Alert escalation in progress", metric: "12.9% moisture" },
      { name: "Site C", state: "Maintenance scheduled", metric: "4 sensors" },
    ],
    queue: [
      { title: "Dryer Line 2", state: "Operating limit exceeded", tone: "bg-[#7aa7ff]" },
      { title: "North Intake", state: "Response acknowledged", tone: "bg-accent" },
      { title: "Cluster 14", state: "Service due tomorrow", tone: "bg-[#ffb37a]" },
    ],
    maintenance: [
      "Sensor calibration - Site C",
      "Gateway battery check - Site A",
      "Dryer relay inspection - Site B",
    ],
    access: ["3 organizations", "12 supervisors", "24 field devices"],
    audit: ["Every alert logged", "Operator action stamped", "Export-ready event history"],
    thresholds: ["13.5% limit", "Ops lead in 5 min", "Escalate after 2 missed checks"],
    signalSteps: [
      { title: "Field", description: "Sensors and gateways stream events from active equipment." },
      { title: "Rules", description: "Operating rules and escalation timing define the next response." },
      { title: "Control", description: "Managers, operators, and service teams act from shared context." },
    ],
  },
  th: {
    badge: "ตัวอย่างระบบ",
    title: "Rice Flow Command Center",
    subtitle: "มุมมองปฏิบัติการเดียวสำหรับความชื้น การแจ้งเตือน การบำรุงรักษา และการกำกับหลายไซต์",
    sitesLabel: "สถานะหน้างาน",
    telemetryLabel: "สัญญาณหน้างาน",
    telemetryTitle: "แนวโน้มความชื้นเทียบกับเกณฑ์ควบคุม",
    telemetryRange: "ตลอดช่วงปฏิบัติงานล่าสุด",
    queueLabel: "คิวเหตุการณ์",
    queueCount: "เปิดอยู่ 03 รายการ",
    deviceLabel: "สุขภาพอุปกรณ์",
    maintenanceLabel: "คิวบำรุงรักษา",
    accessLabel: "ขอบเขตการเข้าถึง",
    auditLabel: "การตรวจสอบย้อนหลัง",
    auditTitle: "ตรวจสอบย้อนหลังได้ในทุกขั้นของการปฏิบัติการ",
    auditBadge: "พร้อมส่งออก",
    queueTitle: "การแจ้งเตือน เหตุการณ์ และการมอบหมายตอบสนอง",
    kpi1Label: "ค่าเฉลี่ยความชื้น",
    kpi1Value: "12.6%",
    kpi2Label: "ความต่อเนื่องของสัญญาณ",
    kpi2Value: "98.4%",
    kpi3Label: "เวลาตอบสนอง",
    kpi3Value: "05 นาที",
    sites: [
      { name: "Site A", state: "สายอบทำงานคงที่", metric: "01 แจ้งเตือน" },
      { name: "Site B", state: "กำลังยกระดับเหตุการณ์ตามเกณฑ์ที่ตั้งไว้", metric: "12.9% moisture" },
      { name: "Site C", state: "มีแผนบำรุงรักษา", metric: "4 sensors" },
    ],
    queue: [
      { title: "Dryer Line 2", state: "ค่าเกินระดับที่กำหนด", tone: "bg-[#7aa7ff]" },
      { title: "North Intake", state: "ผู้รับผิดชอบรับงานแล้ว", tone: "bg-accent" },
      { title: "Cluster 14", state: "ครบกำหนดเข้าตรวจพรุ่งนี้", tone: "bg-[#ffb37a]" },
    ],
    maintenance: [
      "สอบเทียบ sensor - Site C",
      "ตรวจแบตเตอรี่ gateway - Site A",
      "ตรวจ relay เครื่องอบ - Site B",
    ],
    access: ["3 องค์กร", "12 ผู้กำกับดูแล", "24 อุปกรณ์หน้างาน"],
    audit: ["บันทึกทุกการแจ้งเตือน", "ประทับเวลาการสั่งงาน", "ส่งออกประวัติเหตุการณ์ได้"],
    thresholds: ["เพดานความชื้น 13.5%", "แจ้งหัวหน้าภายใน 5 นาที", "ยกระดับหลังตรวจพลาด 2 รอบ"],
    signalSteps: [
      { title: "Field", description: "Sensor และ gateway ส่งเหตุการณ์จากอุปกรณ์ที่กำลังทำงานเข้าสู่ระบบ" },
      { title: "Rules", description: "เกณฑ์ควบคุมและเงื่อนไขการยกระดับกำหนดลำดับการตอบสนองถัดไป" },
      { title: "Control", description: "ผู้จัดการ ผู้ปฏิบัติงาน และทีมบริการทำงานจากบริบทเดียวกัน" },
    ],
  },
} as const;

export function RiceFlowCommandCenter({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,31,0.96),rgba(7,13,24,0.92))] p-4 shadow-panel sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{t.badge}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.7rem]">{t.title}</h3>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-slate-300 sm:text-sm">{t.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {t.thresholds.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[0.95fr_1.2fr_0.85fr]">
        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.sitesLabel}</p>
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
            <div className="mt-4 space-y-3">
              {t.sites.map((site) => (
                <div key={site.name} className="rounded-2xl border border-white/8 bg-[#132236] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{site.name}</p>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                      {site.metric}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{site.state}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            <MetricCard label={t.kpi1Label} value={t.kpi1Value} tone="bg-accent" />
            <MetricCard label={t.kpi2Label} value={t.kpi2Value} tone="bg-[#7aa7ff]" />
            <MetricCard label={t.kpi3Label} value={t.kpi3Value} tone="bg-[#ffb37a]" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.telemetryLabel}</p>
                <p className="mt-2 text-base font-semibold text-white">{t.telemetryTitle}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {t.telemetryRange}
              </span>
            </div>

            <div className="mt-5 rounded-[20px] border border-white/8 bg-[#132236] p-4">
              <div className="relative h-40 sm:h-48">
                <div className="absolute inset-x-0 top-[22%] border-t border-dashed border-[#ffb37a]/70" />
                <div className="absolute inset-x-0 top-[52%] border-t border-dashed border-[#7aa7ff]/50" />
                <div className="flex h-full items-end gap-2 sm:gap-3">
                  {trendBars.map((bar, index) => (
                    <div key={bar.time} className="flex flex-1 flex-col items-center gap-2">
                      <div className="relative w-full rounded-t-2xl bg-[#1b2a42]" style={{ height: `${bar.height * 1.75}px` }}>
                        <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-accent" />
                        {index > 0 ? (
                          <div className="absolute -left-3 top-6 hidden h-0.5 w-6 bg-gradient-to-r from-accent to-[#7aa7ff] md:block" />
                        ) : null}
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{bar.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-3">
              {t.signalSteps.map((step) => (
                <SignalStep key={step.title} title={step.title} description={step.description} />
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.auditLabel}</p>
                <p className="mt-2 text-base font-semibold text-white">{t.auditTitle}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {t.auditBadge}
              </span>
            </div>
            <div className="mt-4 grid gap-3 lg:grid-cols-3">
              {t.audit.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.queueLabel}</p>
                <p className="mt-2 text-base font-semibold text-white">{t.queueTitle}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {t.queueCount}
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {t.queue.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-[#132236] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.state}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.maintenanceLabel}</p>
            <div className="mt-4 space-y-3">
              {t.maintenance.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{t.accessLabel}</p>
            <div className="mt-4 grid gap-3">
              {t.access.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <div className={`mt-3 h-2 w-16 rounded-full ${tone}`} />
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

function SignalStep({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{description}</p>
    </div>
  );
}
