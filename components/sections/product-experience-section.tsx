import { Container } from "@/components/ui/container";
import { RiceFlowCommandCenter } from "@/components/ui/rice-flow-command-center";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Operational product view",
    title: "A product experience built for control, response, and traceability",
    description:
      "Rice Flow is designed as an operational workspace, not just a reporting screen. Teams can monitor, respond, assign, and review decisions from one coordinated system.",
    cards: [
      {
        title: "Shared operational context",
        description:
          "Executives, site managers, and field teams see the same operational signal path from detection to response.",
      },
      {
        title: "Actionable supervision",
        description:
          "Alerts, incidents, maintenance tasks, and historical records stay connected to the same operating model.",
      },
      {
        title: "Ready for scaled deployment",
        description:
          "The interface is structured for multi-site visibility, partner delivery, and future recurring service models.",
      },
    ],
  },
  th: {
    eyebrow: "มุมมองผลิตภัณฑ์",
    title: "ประสบการณ์ของระบบที่ออกแบบมาเพื่อการควบคุม การตอบสนอง และการตรวจสอบย้อนหลัง",
    description:
      "Rice Flow ถูกออกแบบเป็นพื้นที่ทำงานด้านปฏิบัติการ ไม่ใช่เพียงหน้าจอแสดงข้อมูล ทีมงานจึงสามารถติดตาม ตอบสนอง มอบหมายงาน และตรวจสอบการตัดสินใจได้จากระบบเดียวกัน",
    cards: [
      {
        title: "มองภาพปฏิบัติการร่วมกัน",
        description:
          "ผู้บริหาร ผู้จัดการไซต์ และทีมหน้างานเห็นเส้นทางข้อมูลเดียวกันตั้งแต่การตรวจจับไปจนถึงการตอบสนอง",
      },
      {
        title: "กำกับดูแลและลงมือได้จริง",
        description:
          "การแจ้งเตือน เหตุการณ์ การบำรุงรักษา และประวัติการทำงานเชื่อมอยู่บน operating model เดียวกัน",
      },
      {
        title: "พร้อมต่อยอดหลายไซต์",
        description:
          "โครงหน้าจอรองรับการมองเห็นหลายไซต์ การส่งมอบผ่านพันธมิตร และการขยายเป็นบริการแบบต่อเนื่องในอนาคต",
      },
    ],
  },
} as const;

export function ProductExperienceSection({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {copy.cards.map((card) => (
                <SurfaceCard key={card.title} className="p-5 sm:p-6">
                  <p className="max-w-[16ch] text-[1.04rem] font-semibold leading-[1.45] text-white sm:text-[1.08rem]">
                    {card.title}
                  </p>
                  <p className="mt-3 max-w-[28ch] text-[0.98rem] leading-7 text-slate-300 sm:max-w-none sm:text-sm">
                    {card.description}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <SurfaceCard className="p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">{copy.eyebrow}</p>
              <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight text-white">
                {locale === "th" ? "ภาพรวมหน้าจอสำหรับการมอนิเตอร์และตอบสนอง" : "A focused view for monitoring and response"}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-slate-300">
                {locale === "th"
                  ? "บนมือถือเราเน้นเฉพาะสาระสำคัญก่อน แล้วค่อยเปิดดูรายละเอียดเชิงลึกในมุมมองที่เหมาะกับจอใหญ่กว่า"
                  : "On mobile we prioritize the essential operational story first, then leave deeper workspace detail to larger screens."}
              </p>
            </SurfaceCard>
          </div>

          <div className="hidden lg:block">
            <RiceFlowCommandCenter locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
}
