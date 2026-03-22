import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { withLocale } from "@/lib/i18n";

export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Image
            src="/brand/riceflow_logo_header.png"
            alt={`${copy.brand.name} logo`}
            width={960}
            height={344}
            className="h-auto w-[180px] sm:w-[210px]"
          />
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">{copy.footer.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{copy.footer.quickLinksLabel}</p>
          <div className="mt-4 space-y-3">
            {copy.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={withLocale(locale, link.href)}
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{copy.footer.contactLabel}</p>
          <p className="mt-4 text-sm text-slate-300">{copy.footer.contactEmail}</p>
          <p className="mt-2 text-sm text-slate-400">{copy.footer.contactDescription}</p>
          <p className="mt-6 text-xs text-slate-500">{copy.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
