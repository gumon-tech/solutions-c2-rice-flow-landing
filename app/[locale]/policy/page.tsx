import type { Metadata } from "next";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { LocalePageProps } from "@/app/[locale]/layout";
import { createLocaleMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/site-copy";

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PolicyContent = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  contactLabel: string;
  contactValue: string;
  summaryTitle: string;
  summaryItems: string[];
  sections: PolicySection[];
};

const contentByLocale: Record<"en" | "th", PolicyContent> = {
  en: {
    metadataTitle: "Rice Flow Privacy Policy",
    metadataDescription:
      "Public privacy policy for Rice Flow web and mobile experiences, provided for Apple App Store and Google Play review.",
    eyebrow: "Privacy Policy",
    title: "Rice Flow Privacy Policy",
    description:
      "This page explains how Rice Flow and C2 TECH COMPANY LIMITED collect, use, disclose, and protect information when organizations, operators, and reviewers access the Rice Flow website, web application, dashboard, or mobile application.",
    effectiveDateLabel: "Effective date",
    effectiveDate: "7 April 2026",
    contactLabel: "Privacy contact",
    contactValue: "hello@riceflow.app",
    summaryTitle: "At a glance",
    summaryItems: [
      "Rice Flow is a business operations platform for rice mill monitoring, alerts, and workflow management.",
      "We may process account details, operational records, device identifiers, and usage logs needed to provide the service.",
      "We do not sell personal information. We only share data with service providers, affiliated operators, or when required by law.",
      "Authorized customers may request access, correction, or deletion of personal data, subject to contractual and legal obligations.",
    ],
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          "This Privacy Policy applies to public visitors, prospective customers, business users, and authorized operators who access Rice Flow through websites, dashboards, or mobile applications made available by C2 TECH COMPANY LIMITED.",
          "If your organization deploys Rice Flow under a separate agreement, that agreement may contain additional data protection terms specific to your environment.",
        ],
      },
      {
        title: "2. Information We Collect",
        paragraphs: [
          "Depending on the services and features in use, we may collect information directly from users, from connected devices, and from system activity generated while operating the platform.",
        ],
        bullets: [
          "Identity and account information, such as name, work email address, organization, role, and login details.",
          "Operational content, such as moisture readings, alerts, incident notes, maintenance records, workflow actions, photos, and audit history entered by authorized users.",
          "Technical information, such as device identifiers, browser type, operating system, app version, IP address, crash diagnostics, and security logs.",
          "Contact details and business communications submitted through request-demo or support forms.",
        ],
      },
      {
        title: "3. How We Use Information",
        paragraphs: [
          "We use information only for legitimate business and operational purposes related to providing, securing, supporting, and improving Rice Flow.",
        ],
        bullets: [
          "Provide monitoring, alerting, workflow, reporting, and administrative functions.",
          "Authenticate users, enforce permissions, and maintain service security.",
          "Investigate incidents, troubleshoot errors, and monitor service performance.",
          "Respond to requests, provide customer support, and communicate service updates.",
          "Meet legal obligations, maintain records, and protect our rights, customers, and users.",
        ],
      },
      {
        title: "4. Sharing and Disclosure",
        paragraphs: [
          "We do not sell personal information. We disclose information only when there is a valid business, contractual, or legal basis to do so.",
        ],
        bullets: [
          "To the customer organization and its authorized administrators or operators.",
          "To infrastructure, analytics, communications, or support providers acting on our behalf under appropriate safeguards.",
          "To comply with applicable law, legal process, or enforceable governmental requests.",
          "To protect the security, integrity, or rights of Rice Flow, our customers, or the public.",
        ],
      },
      {
        title: "5. Data Retention",
        paragraphs: [
          "We retain information for as long as needed to provide the service, maintain operational history, satisfy contractual requirements, resolve disputes, and comply with applicable law.",
          "Retention periods may vary depending on the customer deployment model, the category of data, and documented operational or legal requirements.",
        ],
      },
      {
        title: "6. Security",
        paragraphs: [
          "We use reasonable administrative, technical, and organizational measures to protect information against unauthorized access, loss, misuse, or alteration.",
          "No system can guarantee absolute security. Customers and authorized users are also responsible for protecting credentials, endpoints, and local device access.",
        ],
      },
      {
        title: "7. User Rights and Choices",
        paragraphs: [
          "Subject to applicable law and contractual obligations, users or customer administrators may request access to, correction of, or deletion of personal data that we control.",
          "Where Rice Flow acts as a processor or service provider for a customer organization, requests may need to be submitted through that organization first.",
        ],
      },
      {
        title: "8. Children’s Privacy",
        paragraphs: [
          "Rice Flow is designed for business and operational use. It is not directed to children, and we do not knowingly collect personal information from children.",
        ],
      },
      {
        title: "9. Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect service changes, legal requirements, or operational practices. Material changes will be posted on this page with an updated effective date.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          "Questions about this Privacy Policy or data protection practices may be sent to hello@riceflow.app.",
          "Controller / Operator: C2 TECH COMPANY LIMITED",
        ],
      },
    ],
  },
  th: {
    metadataTitle: "นโยบายความเป็นส่วนตัว | Rice Flow",
    metadataDescription:
      "นโยบายความเป็นส่วนตัวสาธารณะสำหรับ Rice Flow เพื่อใช้ประกอบการตรวจสอบบน Apple App Store และ Google Play.",
    eyebrow: "นโยบายความเป็นส่วนตัว",
    title: "นโยบายความเป็นส่วนตัวของ Rice Flow",
    description:
      "หน้านี้อธิบายวิธีที่ Rice Flow และ C2 TECH COMPANY LIMITED เก็บ ใช้ เปิดเผย และปกป้องข้อมูล เมื่อองค์กร ผู้ปฏิบัติงาน หรือผู้ตรวจสอบ เข้าถึงเว็บไซต์ เว็บแอป แดชบอร์ด หรือแอปมือถือของ Rice Flow.",
    effectiveDateLabel: "วันที่มีผลบังคับใช้",
    effectiveDate: "7 เมษายน 2569",
    contactLabel: "ช่องทางติดต่อเรื่องข้อมูลส่วนบุคคล",
    contactValue: "hello@riceflow.app",
    summaryTitle: "สรุปโดยย่อ",
    summaryItems: [
      "Rice Flow เป็นแพลตฟอร์มสำหรับการติดตาม การแจ้งเตือน และ workflow ด้านปฏิบัติการของโรงสีข้าว.",
      "ระบบอาจประมวลผลข้อมูลบัญชีผู้ใช้ ข้อมูลการปฏิบัติการ รหัสอุปกรณ์ และบันทึกการใช้งานที่จำเป็นต่อการให้บริการ.",
      "เราไม่มีนโยบายขายข้อมูลส่วนบุคคล และจะเปิดเผยข้อมูลเท่าที่จำเป็นต่อการให้บริการ ตามสัญญา หรือเมื่อกฎหมายกำหนด.",
      "ลูกค้าและผู้ใช้งานที่ได้รับอนุญาตสามารถขอเข้าถึง แก้ไข หรือลบข้อมูลได้ ภายใต้ข้อกำหนดตามกฎหมายและสัญญาที่เกี่ยวข้อง.",
    ],
    sections: [
      {
        title: "1. ขอบเขตของนโยบาย",
        paragraphs: [
          "นโยบายนี้ใช้กับผู้เยี่ยมชมเว็บไซต์ ผู้สนใจบริการ ลูกค้าองค์กร และผู้ปฏิบัติงานที่ได้รับสิทธิ์ให้เข้าใช้งาน Rice Flow ผ่านเว็บไซต์ แดชบอร์ด หรือแอปมือถือที่ให้บริการโดย C2 TECH COMPANY LIMITED.",
          "หากองค์กรของคุณใช้งาน Rice Flow ภายใต้สัญญาเฉพาะ สัญญาดังกล่าวอาจมีข้อกำหนดด้านการคุ้มครองข้อมูลเพิ่มเติมที่ใช้กับสภาพแวดล้อมขององค์กรนั้นโดยเฉพาะ.",
        ],
      },
      {
        title: "2. ข้อมูลที่เราเก็บรวบรวม",
        paragraphs: [
          "ตามลักษณะบริการและฟีเจอร์ที่เปิดใช้งาน เราอาจเก็บข้อมูลจากผู้ใช้โดยตรง จากอุปกรณ์ที่เชื่อมต่อ และจากกิจกรรมในระบบที่เกิดขึ้นระหว่างการใช้งานแพลตฟอร์ม.",
        ],
        bullets: [
          "ข้อมูลระบุตัวตนและบัญชีผู้ใช้ เช่น ชื่อ อีเมลองค์กร องค์กร ตำแหน่ง และข้อมูลการเข้าสู่ระบบ.",
          "ข้อมูลการปฏิบัติการ เช่น ค่าความชื้น การแจ้งเตือน บันทึกเหตุการณ์ ข้อมูลบำรุงรักษา ขั้นตอนการทำงาน รูปภาพ และประวัติการตรวจสอบที่ผู้ใช้บันทึกเข้าสู่ระบบ.",
          "ข้อมูลทางเทคนิค เช่น รหัสอุปกรณ์ ประเภทเบราว์เซอร์ ระบบปฏิบัติการ เวอร์ชันแอป IP address ข้อมูล crash diagnostics และ security logs.",
          "ข้อมูลการติดต่อและการสื่อสารทางธุรกิจที่ส่งผ่านฟอร์มขอเดโมหรือช่องทางสนับสนุน.",
        ],
      },
      {
        title: "3. วัตถุประสงค์ในการใช้ข้อมูล",
        paragraphs: [
          "เราใช้ข้อมูลเท่าที่จำเป็นต่อวัตถุประสงค์ทางธุรกิจและการปฏิบัติการที่เกี่ยวข้องกับการให้บริการ การรักษาความปลอดภัย การสนับสนุน และการปรับปรุง Rice Flow.",
        ],
        bullets: [
          "ให้บริการด้าน monitoring, alerting, workflow, reporting และการบริหารจัดการระบบ.",
          "ยืนยันตัวตนผู้ใช้ บังคับใช้นโยบายสิทธิ์ และรักษาความมั่นคงปลอดภัยของบริการ.",
          "ตรวจสอบเหตุการณ์ แก้ไขปัญหา และติดตามประสิทธิภาพของระบบ.",
          "ตอบกลับคำขอ ให้การสนับสนุนลูกค้า และสื่อสารข้อมูลสำคัญเกี่ยวกับบริการ.",
          "ปฏิบัติตามกฎหมาย เก็บบันทึกที่จำเป็น และคุ้มครองสิทธิของ Rice Flow ลูกค้า และผู้ใช้งาน.",
        ],
      },
      {
        title: "4. การเปิดเผยข้อมูล",
        paragraphs: [
          "เราไม่มีนโยบายขายข้อมูลส่วนบุคคล และจะเปิดเผยข้อมูลเฉพาะเมื่อมีฐานทางธุรกิจ สัญญา หรือกฎหมายรองรับอย่างเหมาะสม.",
        ],
        bullets: [
          "ให้แก่องค์กรลูกค้าและผู้ดูแลระบบหรือผู้ปฏิบัติงานที่ได้รับอนุญาต.",
          "ให้แก่ผู้ให้บริการด้านโครงสร้างพื้นฐาน การวิเคราะห์ การสื่อสาร หรือการสนับสนุน ที่ดำเนินการแทนเราโดยมีมาตรการคุ้มครองที่เหมาะสม.",
          "เพื่อปฏิบัติตามกฎหมาย กระบวนการทางกฎหมาย หรือคำขอจากหน่วยงานรัฐที่มีผลบังคับใช้.",
          "เพื่อปกป้องความมั่นคงปลอดภัย ความถูกต้องของระบบ หรือสิทธิของ Rice Flow ลูกค้า หรือสาธารณะ.",
        ],
      },
      {
        title: "5. ระยะเวลาการเก็บรักษาข้อมูล",
        paragraphs: [
          "เราจะเก็บข้อมูลเท่าที่จำเป็นต่อการให้บริการ การรักษาประวัติการปฏิบัติการ การปฏิบัติตามข้อกำหนดในสัญญา การระงับข้อพิพาท และการปฏิบัติตามกฎหมายที่เกี่ยวข้อง.",
          "ระยะเวลาการเก็บรักษาอาจแตกต่างกันตามรูปแบบการติดตั้งใช้งาน ประเภทของข้อมูล และข้อกำหนดด้านการปฏิบัติการหรือกฎหมายของลูกค้าแต่ละราย.",
        ],
      },
      {
        title: "6. ความมั่นคงปลอดภัยของข้อมูล",
        paragraphs: [
          "เราใช้มาตรการด้านการบริหาร เทคนิค และองค์กรตามสมควร เพื่อปกป้องข้อมูลจากการเข้าถึง การสูญหาย การใช้ผิดวัตถุประสงค์ หรือการแก้ไขโดยไม่ได้รับอนุญาต.",
          "อย่างไรก็ดี ไม่มีระบบใดรับประกันความปลอดภัยได้อย่างสมบูรณ์ ลูกค้าและผู้ใช้ที่ได้รับสิทธิ์ยังมีหน้าที่ต้องดูแลข้อมูลเข้าสู่ระบบ อุปกรณ์ปลายทาง และการเข้าถึงในเครื่องของตนเอง.",
        ],
      },
      {
        title: "7. สิทธิของเจ้าของข้อมูล",
        paragraphs: [
          "ภายใต้กฎหมายที่ใช้บังคับและข้อผูกพันตามสัญญา ผู้ใช้หรือผู้ดูแลระบบฝั่งลูกค้าอาจขอเข้าถึง ขอแก้ไข หรือลบข้อมูลส่วนบุคคลที่เราเป็นผู้ควบคุมได้.",
          "ในกรณีที่ Rice Flow ทำหน้าที่เป็นผู้ประมวลผลข้อมูลให้แก่องค์กรลูกค้า คำขอบางประเภทอาจต้องยื่นผ่านองค์กรนั้นก่อน.",
        ],
      },
      {
        title: "8. ข้อมูลของเด็ก",
        paragraphs: [
          "Rice Flow ออกแบบมาสำหรับการใช้งานเชิงธุรกิจและการปฏิบัติการ ไม่ได้มีวัตถุประสงค์เพื่อเด็ก และเราไม่มีเจตนาเก็บข้อมูลส่วนบุคคลจากเด็ก.",
        ],
      },
      {
        title: "9. การเปลี่ยนแปลงนโยบาย",
        paragraphs: [
          "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราวเพื่อให้สอดคล้องกับการเปลี่ยนแปลงของบริการ ข้อกำหนดทางกฎหมาย หรือแนวปฏิบัติในการดำเนินงาน โดยจะประกาศบนหน้านี้พร้อมวันที่มีผลบังคับใช้ล่าสุด.",
        ],
      },
      {
        title: "10. การติดต่อ",
        paragraphs: [
          "หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวหรือแนวปฏิบัติด้านข้อมูลส่วนบุคคล กรุณาติดต่อ hello@riceflow.app.",
          "ผู้ควบคุม / ผู้ให้บริการ: C2 TECH COMPANY LIMITED",
        ],
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const copy = getDictionary(locale);
  const page = contentByLocale[locale];

  return createLocaleMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    dictionary: copy,
  });
}

export default async function PolicyPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale);
  const page = contentByLocale[locale];

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />
      <main>
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-grid-fade bg-[size:42px_42px] opacity-[0.08]" />
          <div className="absolute inset-0 -z-20 bg-[image:var(--overlay-top-tight)]" />
          <Container>
            <div className="max-w-[58rem]">
              <Badge className="mb-5 border-accent/20 bg-accentSoft text-accent">
                {page.eyebrow}
              </Badge>
              <h1 className="text-balance font-display text-[2.7rem] font-semibold leading-[1.05] tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]">
                {page.title}
              </h1>
              <p className="mt-5 max-w-[48rem] text-[1rem] leading-7 text-[color:var(--foreground-soft)] sm:mt-6 sm:text-lg sm:leading-8">
                {page.description}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] p-5 shadow-[var(--shadow-panel)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    {page.effectiveDateLabel}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[color:var(--foreground)]">
                    {page.effectiveDate}
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] p-5 shadow-[var(--shadow-panel)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                    {page.contactLabel}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[color:var(--foreground)]">
                    {page.contactValue}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <aside className="rounded-[2rem] border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient-soft)] p-6 shadow-[var(--shadow-panel)] lg:sticky lg:top-24">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">
                  {page.summaryTitle}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  {page.summaryItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-2)] px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="space-y-5">
                {page.sections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[2rem] border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient)] p-6 shadow-[var(--shadow-panel)] sm:p-8"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[0.98rem] leading-8 text-[color:var(--foreground-soft)]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-5 space-y-3 text-[0.98rem] leading-8 text-[color:var(--foreground-soft)]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
