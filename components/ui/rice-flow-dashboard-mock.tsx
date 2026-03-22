import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n";

const trendData = [
  { left: "06:00", value: 36 },
  { left: "08:00", value: 42 },
  { left: "10:00", value: 48 },
  { left: "12:00", value: 58 },
  { left: "14:00", value: 52 },
  { left: "16:00", value: 68 },
  { left: "18:00", value: 61 },
];

const alertItems = [
  { title: "Dryer Line 2", state: "Alert condition detected", tone: "bg-[#7aa7ff]" },
  { title: "Site B North", state: "Response assigned", tone: "bg-accent" },
  { title: "Sensor Cluster 14", state: "Maintenance due", tone: "bg-[#ffb37a]" },
];

const labels = {
  en: {
    preview: "Platform preview",
    title: "Rice Flow Operations Center",
    badge: "Supervisory View Ready",
    commandLabel: "Platform command",
    commandTitle: "Operational state across mill sites",
    commandDescription:
      "Bring device signals, incident escalation, and maintenance posture into one supervisory view.",
    liveStatus: "Live",
    siteStatus: "Operational status",
    siteStatusTitle: "Moisture, alerts, and signal quality",
    sites: "3 sites",
    devices: "24 devices",
    trendLabel: "Signal trend",
    trendTitle: "Shift-level moisture pattern",
    trendRange: "Last 12 hours",
    thresholdLabel: "Limit",
    thresholdValue: "13.5% moisture ceiling",
    escalationLabel: "Escalation",
    escalationValue: "Ops lead within 5 min",
    auditLabel: "Audit",
    auditValue: "Every alert is traceable",
    queueLabel: "Response queue",
    queueTitle: "Active alerts and incidents",
    queueOpen: "03 open",
    responseLabel: "Response path",
    responseSignal: "Signal capture",
    responseWorkflow: "Alert workflow",
    responseControl: "Supervisory oversight",
    nodesLabel: "Plant network",
    nodesValue: "24",
    nodesSub: "Connected nodes",
    roomLabel: "Control Room",
    roomValue: "Live",
    roomSub: "Live oversight view",
    maintenanceLabel: "Maintenance",
    maintenanceValue: "06",
    maintenanceSub: "Scheduled checks",
  },
  th: {
    preview: "ตัวอย่างหน้าจอแพลตฟอร์ม",
    title: "Rice Flow Operations Center",
    badge: "พร้อมสำหรับ Control Room",
    commandLabel: "มุมมองสั่งการระบบ",
    commandTitle: "มองเห็นสถานะการปฏิบัติการข้ามหลายไซต์",
    commandDescription:
      "รวมสัญญาณจากอุปกรณ์ การแจ้งเตือน และสถานะการบำรุงรักษาไว้ในมุมมองกำกับดูแลเดียว",
    liveStatus: "Live",
    siteStatus: "สถานะการปฏิบัติการ",
    siteStatusTitle: "ความชื้น การแจ้งเตือน และคุณภาพสัญญาณ",
    sites: "3 ไซต์",
    devices: "24 อุปกรณ์",
    trendLabel: "แนวโน้มสัญญาณ",
    trendTitle: "รูปแบบความชื้นตลอดช่วงปฏิบัติงาน",
    trendRange: "ย้อนหลัง 12 ชั่วโมง",
    thresholdLabel: "เกณฑ์ควบคุม",
    thresholdValue: "เพดานความชื้น 13.5%",
    escalationLabel: "การยกระดับเหตุการณ์",
    escalationValue: "แจ้งหัวหน้าปฏิบัติการภายใน 5 นาที",
    auditLabel: "Audit",
    auditValue: "ทุกการแจ้งเตือนตรวจสอบย้อนหลังได้",
    queueLabel: "คิวตอบสนอง",
    queueTitle: "การแจ้งเตือนและเหตุการณ์ที่กำลังดำเนินการ",
    queueOpen: "เปิดอยู่ 03 รายการ",
    responseLabel: "เส้นทางการตอบสนอง",
    responseSignal: "รับสัญญาณจากหน้างาน",
    responseWorkflow: "ประมวลผลตามเกณฑ์ที่ตั้งไว้",
    responseControl: "กำกับผ่าน Control Room",
    nodesLabel: "เครือข่ายอุปกรณ์",
    nodesValue: "24",
    nodesSub: "โหนดที่เชื่อมต่ออยู่",
    roomLabel: "Control Room",
    roomValue: "Live",
    roomSub: "มุมมองกำกับการปฏิบัติการ",
    maintenanceLabel: "การบำรุงรักษา",
    maintenanceValue: "06",
    maintenanceSub: "รายการตรวจเช็กตามแผน",
  },
} as const;

const localizedSiteCards = {
  en: [
    { site: "Site A", value: "12.6%", sub: "Moisture avg", tone: "bg-accent" },
    { site: "Site B", value: "03", sub: "Active alerts", tone: "bg-[#7aa7ff]" },
    { site: "Site C", value: "98%", sub: "Signal health", tone: "bg-[#ffb37a]" },
  ],
  th: [
    { site: "Site A", value: "12.6%", sub: "ค่าเฉลี่ยความชื้น", tone: "bg-accent" },
    { site: "Site B", value: "03", sub: "การแจ้งเตือนที่กำลังเปิด", tone: "bg-[#7aa7ff]" },
    { site: "Site C", value: "98%", sub: "ความสมบูรณ์ของสัญญาณ", tone: "bg-[#ffb37a]" },
  ],
} as const;

const localizedAlertItems = {
  en: alertItems,
  th: [
    { title: "Dryer Line 2", state: "ค่าถึงระดับแจ้งเตือน", tone: "bg-[#7aa7ff]" },
    { title: "Site B North", state: "มีการมอบหมายผู้ตอบสนองแล้ว", tone: "bg-accent" },
    { title: "Sensor Cluster 14", state: "ครบกำหนดบำรุงรักษา", tone: "bg-[#ffb37a]" },
  ],
} as const;

export function RiceFlowDashboardMock({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const sites = localizedSiteCards[locale];
  const alerts = localizedAlertItems[locale];

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#08111d] p-4 shadow-panel sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{copy.preview}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{copy.title}</h3>
        </div>
        <Badge className="border-accent/20 bg-accentSoft text-accent">{copy.badge}</Badge>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(24,38,58,0.96),rgba(14,23,36,0.92))] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.commandLabel}</p>
                  <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight text-white">
                    {copy.commandTitle}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{copy.commandDescription}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="text-xs uppercase tracking-[0.22em] text-slate-400">{copy.liveStatus}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/8 bg-[#132236] p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.siteStatus}</p>
                    <p className="mt-2 text-base font-semibold text-white">{copy.siteStatusTitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{copy.sites}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{copy.devices}</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {sites.map((card) => (
                    <div key={card.site} className="rounded-2xl border border-white/8 bg-[#0d1727] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{card.site}</p>
                      <div className={`mt-3 h-2 w-20 rounded-full ${card.tone}`} />
                      <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{card.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/8 bg-[#132236] p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{copy.trendLabel}</p>
                  <p className="mt-2 text-base font-semibold text-white">{copy.trendTitle}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{copy.trendRange}</span>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.42fr]">
                <div className="flex h-36 items-end gap-2 sm:h-40 sm:gap-3">
                  {trendData.map((point, index) => (
                    <div key={point.left} className="flex flex-1 flex-col items-center gap-2">
                      <div className="relative w-full rounded-t-2xl bg-[#1b2a42]" style={{ height: `${point.value * 1.65}px` }}>
                        <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-accent" />
                        {index > 0 ? (
                          <div className="absolute -left-3 top-5 hidden h-0.5 w-6 bg-gradient-to-r from-accent to-[#7aa7ff] md:block" />
                        ) : null}
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{point.left}</span>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/8 bg-[#0d1727] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{copy.thresholdLabel}</p>
                    <p className="mt-2 text-sm font-medium text-slate-200">{copy.thresholdValue}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0d1727] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{copy.escalationLabel}</p>
                    <p className="mt-2 text-sm font-medium text-slate-200">{copy.escalationValue}</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0d1727] px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{copy.auditLabel}</p>
                    <p className="mt-2 text-sm font-medium text-slate-200">{copy.auditValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.responseLabel}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-0.5 flex-1 bg-gradient-to-r from-accent via-[#7aa7ff] to-[#ffb37a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffb37a]" />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Signal</p>
                <p className="mt-2 text-sm font-medium text-slate-200">{copy.responseSignal}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Response</p>
                <p className="mt-2 text-sm font-medium text-slate-200">{copy.responseWorkflow}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-[#132236] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Oversight</p>
                <p className="mt-2 text-sm font-medium text-slate-200">{copy.responseControl}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.queueLabel}</p>
            <p className="mt-2 text-lg font-semibold text-white">{copy.queueTitle}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {copy.commandDescription}
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.queueLabel}</p>
                <p className="mt-2 text-lg font-semibold text-white">{copy.queueTitle}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{copy.queueOpen}</span>
            </div>

            <div className="mt-4 space-y-3">
              {alerts.map((item) => (
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

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.nodesLabel}</p>
              <div className="mt-3 h-2 w-20 rounded-full bg-accent" />
              <p className="mt-4 text-3xl font-semibold text-white">{copy.nodesValue}</p>
              <p className="mt-1 text-sm text-slate-400">{copy.nodesSub}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.roomLabel}</p>
              <div className="mt-3 h-2 w-16 rounded-full bg-[#7aa7ff]" />
              <p className="mt-4 text-3xl font-semibold text-white">{copy.roomValue}</p>
              <p className="mt-1 text-sm text-slate-400">{copy.roomSub}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[#0d1727] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{copy.maintenanceLabel}</p>
              <div className="mt-3 h-2 w-16 rounded-full bg-[#ffb37a]" />
              <p className="mt-4 text-3xl font-semibold text-white">{copy.maintenanceValue}</p>
              <p className="mt-1 text-sm text-slate-400">{copy.maintenanceSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
