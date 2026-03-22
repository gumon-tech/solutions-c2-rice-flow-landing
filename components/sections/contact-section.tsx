import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";

export function ContactSection({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SurfaceCard className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{copy.sections.contact.eyebrow}</p>
            <h2 className="mt-4 text-[2rem] font-semibold tracking-tight text-white sm:text-3xl">
              {copy.sections.contact.title}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-slate-300 sm:text-sm">{copy.sections.contact.description}</p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{copy.sections.contact.emailLabel}</p>
                <p className="mt-2 break-all text-sm text-slate-200">{copy.footer.contactEmail}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{copy.sections.contact.discussionLabel}</p>
                <p className="mt-2 text-sm text-slate-200">{copy.sections.contact.discussionValue}</p>
              </div>
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-6 sm:p-8">
            <ContactForm locale={locale} copy={copy.form} messages={copy.messages} />
          </SurfaceCard>
        </div>
      </Container>
    </section>
  );
}
