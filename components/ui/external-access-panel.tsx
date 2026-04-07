import { Button } from "@/components/ui/button";
import { getExternalLinks } from "@/lib/external-links";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

interface ExternalAccessPanelProps {
  locale: Locale;
  copy: SiteDictionary["externalAccess"];
  variant?: "hero" | "compact";
  className?: string;
}

function AdminGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7.5 9.5h9M7.5 13h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14.7 5.1c.7-.8 1.1-1.8 1-2.9-.9.1-2 .7-2.7 1.5-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.7-1.4Z"
        fill="currentColor"
      />
      <path
        d="M16.7 12.5c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9 .7 1 1.5 2.2 2.6 2.2s1.5-.7 2.8-.7c1.3 0 1.7.7 2.8.7 1.1 0 1.9-1 2.6-2 .8-1.1 1.1-2.3 1.2-2.4-.1 0-2-.8-2-4.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6.5 5.2c-.4.3-.6.8-.6 1.4v10.8c0 .6.2 1.1.6 1.4l8.1-6.8-8.1-6.8Z"
        fill="currentColor"
      />
      <path
        d="m15.7 11.2 2.4-2c.7-.6.7-1.5 0-2l-2.2-1.8-2.8 2.4 2.6 3.4Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="m15.9 12.8-2.8 2.4 2.2 1.8c.7.6 1.7.6 2.4 0l.4-.3c.7-.5.7-1.5 0-2l-2.2-1.9Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

export function ExternalAccessPanel({
  locale,
  copy,
  variant = "hero",
  className,
}: ExternalAccessPanelProps) {
  const { adminUrl, appStoreUrl, playStoreUrl } = getExternalLinks(locale);
  const isCompact = variant === "compact";

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient-soft)] shadow-panel",
          isCompact
            ? "rounded-[28px] p-5 lg:p-6"
            : "rounded-[34px] p-6 lg:p-7 xl:p-8 2xl:px-10 2xl:py-9",
        )}
      >
        <div className="absolute inset-0 bg-[image:var(--overlay-radial-soft)]" />
        <div
          className={cn(
            "relative grid gap-6",
            !isCompact &&
              "2xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] 2xl:items-start 2xl:gap-10",
          )}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-soft)] shadow-[0_10px_22px_var(--theme-shadow-soft)]">
              <span>Mobile Access</span>
            </div>
            <div
              className={cn(
                "mt-5",
                isCompact ? "max-w-[38rem]" : "max-w-[46rem]",
              )}
            >
              <p
                className={cn(
                  "font-display font-semibold tracking-tight text-[color:var(--foreground)]",
                  isCompact
                    ? "text-[1.3rem]"
                    : "text-[1.72rem] xl:text-[1.92rem]",
                )}
              >
                {copy.appsLabel}
              </p>
              <p
                className={cn(
                  "mt-2 leading-7 text-[color:var(--foreground-soft)]",
                  isCompact ? "text-sm" : "text-[0.98rem] xl:text-[1.02rem]",
                )}
              >
                {copy.appsDescription}
              </p>
            </div>
          </div>

          <div
            className={cn(
              "grid gap-3 md:grid-cols-2",
              !isCompact && "2xl:self-end",
            )}
          >
            <Button
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group min-h-[96px] w-full justify-start gap-4 rounded-[26px] border-[color:var(--theme-border-strong)] bg-[image:var(--card-gradient)] px-5 py-5 text-left text-[color:var(--foreground)] shadow-[0_18px_38px_var(--theme-shadow-soft)] hover:border-[color:var(--theme-border-strong)] hover:bg-[color:var(--theme-surface-2)] md:col-span-2"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[0_10px_24px_var(--theme-shadow-accent)]">
                <AdminGlyph />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  {copy.adminAction}
                </span>
                <span className="mt-1 text-sm font-semibold text-[color:var(--foreground)] xl:text-[0.98rem]">
                  {copy.adminLabel}
                </span>
                <span className="mt-1 text-sm leading-6 text-[color:var(--foreground-soft)]">
                  {copy.adminDescription}
                </span>
              </span>
              <span className="text-[color:var(--foreground-faint)] transition group-hover:translate-x-1">
                &gt;
              </span>
            </Button>
            <Button
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group min-h-[88px] w-full justify-start gap-4 rounded-[24px] border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-4 py-4 text-left text-[color:var(--foreground)] shadow-[0_14px_30px_var(--theme-shadow-soft)] hover:border-[color:var(--theme-border-strong)] hover:bg-[color:var(--theme-surface-2)]"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#1a2639_0%,#0b111b_100%)] text-[#f6f7fb] shadow-[0_10px_22px_var(--theme-shadow-soft)]">
                <AppleGlyph />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  iPhone & iPad
                </span>
                <span className="mt-1 text-sm font-semibold text-[color:var(--foreground)] xl:text-[0.98rem]">
                  {copy.appStoreLabel}
                </span>
              </span>
              <span className="text-[color:var(--foreground-faint)] transition group-hover:translate-x-1">
                &gt;
              </span>
            </Button>
            <Button
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group min-h-[88px] w-full justify-start gap-4 rounded-[24px] border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-4 py-4 text-left text-[color:var(--foreground)] shadow-[0_14px_30px_var(--theme-shadow-soft)] hover:border-[color:var(--theme-border-strong)] hover:bg-[color:var(--theme-surface-2)]"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--theme-border-soft)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_12%,var(--theme-surface-2))_0%,var(--theme-surface-3)_100%)] text-[color:var(--accent)] shadow-[0_10px_22px_var(--theme-shadow-soft)]">
                <PlayGlyph />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  Android Devices
                </span>
                <span className="mt-1 text-sm font-semibold text-[color:var(--foreground)] xl:text-[0.98rem]">
                  {copy.playStoreLabel}
                </span>
              </span>
              <span className="text-[color:var(--foreground-faint)] transition group-hover:translate-x-1">
                &gt;
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
