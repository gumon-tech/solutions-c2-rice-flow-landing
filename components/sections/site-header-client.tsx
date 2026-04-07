"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getExternalLinks } from "@/lib/external-links";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { cn } from "@/lib/utils";
import { localeLabels, stripLocaleFromPathname, withLocale } from "@/lib/i18n";

function AppleStoreMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M8 18.5h8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="m9 15 6-10"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="m15.5 15-7-4.2"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="m12.5 9.5 3.6 6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayStoreMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M5 4.8v14.4l7.7-7.2L5 4.8Z" fill="#21c28b" />
      <path d="m12.7 12 3.7-3.5-8-3.7L12.7 12Z" fill="#ffd25f" />
      <path d="m12.7 12 3.7 3.5-8 3.7 4.3-7.2Z" fill="#18a56f" />
      <path
        d="m16.4 8.5 2.6 1.3a2.5 2.5 0 0 1 0 4.4l-2.6 1.3L12.7 12l3.7-3.5Z"
        fill="#1f7a58"
      />
    </svg>
  );
}

function AdminMark() {
  return (
    <></>
    // <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    //   <rect x="4" y="4" width="6" height="6" rx="1.6" fill="currentColor" />
    //   <rect
    //     x="14"
    //     y="4"
    //     width="6"
    //     height="6"
    //     rx="1.6"
    //     fill="currentColor"
    //     opacity="0.9"
    //   />
    //   <rect
    //     x="4"
    //     y="14"
    //     width="6"
    //     height="6"
    //     rx="1.6"
    //     fill="currentColor"
    //     opacity="0.75"
    //   />
    //   <rect
    //     x="14"
    //     y="14"
    //     width="6"
    //     height="6"
    //     rx="1.6"
    //     fill="currentColor"
    //     opacity="0.55"
    //   />
    // </svg>
  );
}

function DesktopLogoButton({
  href,
  label,
  tone,
  children,
}: {
  href: string;
  label: string;
  tone: "dark" | "light" | "accent";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      aria-label={label}
      className={cn(
        "group inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition hover:-translate-y-0.5",
        tone === "dark" &&
          "border-[#122231] bg-[#0e1a2c] text-white shadow-[0_14px_30px_rgba(8,16,29,0.26)] hover:bg-[#13243a]",
        tone === "light" &&
          "border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-[color:var(--foreground)] shadow-[0_12px_28px_var(--theme-shadow-soft)] hover:bg-[color:var(--theme-surface-2)]",
        tone === "accent" &&
          "border-[color:var(--accent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_88%,white_12%)_0%,var(--accent)_65%,#0f7f57_100%)] text-[color:var(--accent-foreground)] shadow-[0_16px_34px_var(--theme-shadow-accent)] hover:brightness-105",
      )}
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function MobileAccessCard({
  href,
  label,
  description,
  action,
  tone,
  children,
}: {
  href: string;
  label: string;
  description: string;
  action: string;
  tone: "dark" | "light" | "accent";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start gap-4 rounded-[1.4rem] border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-4 py-4 transition hover:border-[color:var(--theme-border-strong)] hover:bg-[color:var(--theme-surface-2)]"
    >
      <span
        className={cn(
          "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
          tone === "dark" && "border-[#122231] bg-[#0e1a2c] text-white",
          tone === "light" &&
            "border-[color:var(--theme-border-soft)] bg-white text-[color:var(--foreground)]",
          tone === "accent" &&
            "border-[color:var(--accent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_88%,white_12%)_0%,var(--accent)_65%,#0f7f57_100%)] text-[color:var(--accent-foreground)]",
        )}
      >
        {children}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-[color:var(--foreground)]">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-6 text-[color:var(--foreground-soft)]">
          {description}
        </span>
        <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)] transition group-hover:translate-x-0.5">
          {action}
          <span aria-hidden="true">↗</span>
        </span>
      </span>
    </Link>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeaderClient({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  const normalizedPathname = stripLocaleFromPathname(pathname);
  const localeMenuRef = useRef<HTMLDivElement>(null);
  const { adminUrl, appStoreUrl, playStoreUrl } = getExternalLinks(locale);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLocaleMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!localeMenuRef.current?.contains(event.target as Node)) {
        setIsLocaleMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLocaleMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe9de] bg-[rgba(250,247,236,0.86)] backdrop-blur-xl">
      <Container className="py-3.5 sm:py-4">
        <div className="flex min-h-12 items-center justify-between gap-3 sm:gap-4">
          <Link
            href={withLocale(locale, "/")}
            className="flex items-center gap-3"
          >
            <Image
              src="/brand/favicon-512.png"
              alt={`${copy.brand.name} logo`}
              width={512}
              height={512}
              className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
              priority
            />
            <span className="text-base font-semibold tracking-[0.08em] text-[#176845] sm:text-lg">
              {copy.brand.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {copy.navigation.map((item) => {
              const active = isActivePath(normalizedPathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition",
                    active
                      ? "bg-[#dff4e8] text-[#176845]"
                      : "text-[#587266] hover:bg-[#edf8f0] hover:text-[#176845]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle locale={locale} />
            <div className="relative" ref={localeMenuRef}>
              <button
                type="button"
                className="inline-flex min-h-12 min-w-[150px] items-center justify-between rounded-full border border-[#cee1d3] bg-[rgba(255,252,243,0.92)] px-4 py-3 text-sm font-medium text-[#295243] transition hover:border-[#abd2ba] hover:bg-[#f2faf4]"
                aria-haspopup="menu"
                aria-expanded={isLocaleMenuOpen}
                onClick={() => setIsLocaleMenuOpen((current) => !current)}
              >
                <span>{localeLabels[locale]}</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={cn(
                    "h-4 w-4 text-[#7a9085] transition",
                    isLocaleMenuOpen ? "rotate-180" : "",
                  )}
                >
                  <path
                    d="M5 7.5 10 12.5l5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={cn(
                  "absolute right-0 top-[calc(100%+0.75rem)] w-[200px] overflow-hidden rounded-[22px] border border-[#d7e6da] bg-[rgba(255,252,243,0.96)] p-2 shadow-panel backdrop-blur-xl transition",
                  isLocaleMenuOpen
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
                role="menu"
                aria-label="Language switcher"
              >
                {Object.entries(localeLabels).map(([targetLocale, label]) => {
                  const active = targetLocale === locale;

                  return (
                    <Link
                      key={targetLocale}
                      href={withLocale(
                        targetLocale as Locale,
                        normalizedPathname,
                      )}
                      role="menuitem"
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                        active
                          ? "bg-[#18a56f] text-[#f8f7ef]"
                          : "text-[#35584c] hover:bg-[#eef8f1] hover:text-[#176845]",
                      )}
                    >
                      <span>{label}</span>
                      {active ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="m4.5 10 3.5 3.5 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* <div className="flex items-center gap-2 rounded-full border border-[color:var(--theme-border-soft)] bg-[rgba(255,252,243,0.94)] p-1.5 shadow-[0_12px_28px_var(--theme-shadow-soft)]">
              <DesktopLogoButton href={appStoreUrl} label={copy.externalAccess.appStoreLabel} tone="dark">
                <AppleStoreMark />
              </DesktopLogoButton>
              <DesktopLogoButton href={playStoreUrl} label={copy.externalAccess.playStoreLabel} tone="light">
                <PlayStoreMark />
              </DesktopLogoButton>
              <DesktopLogoButton href={adminUrl} label={copy.externalAccess.adminLabel} tone="accent">
                <AdminMark />
              </DesktopLogoButton>
            </div> */}
            <Button href={withLocale(locale, "/contact")}>
              {copy.header.requestDemoLabel}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d5e4d8] bg-[rgba(255,252,243,0.88)] text-[#255144] transition hover:bg-[#f1f8f3] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? copy.header.closeMenuLabel
                : copy.header.openMenuLabel
            }
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition",
                  isMenuOpen ? "top-[7px] rotate-45" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition",
                  isMenuOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition",
                  isMenuOpen ? "top-[7px] -rotate-45" : "",
                )}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-[max-height,opacity,margin] duration-200 lg:hidden",
            isMenuOpen ? "mt-4 max-h-[560px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="max-h-[70vh] overflow-y-auto rounded-3xl border border-[#d8e7db] bg-[rgba(250,247,236,0.96)] p-4 shadow-panel">
            <ThemeToggle
              locale={locale}
              className="mb-4 flex w-full justify-center"
            />
            <div className="mb-4 rounded-2xl border border-[#d8e7db] bg-[rgba(255,252,243,0.92)] p-2">
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(localeLabels).map(([targetLocale, label]) => {
                  const active = targetLocale === locale;

                  return (
                    <Link
                      key={targetLocale}
                      href={withLocale(
                        targetLocale as Locale,
                        normalizedPathname,
                      )}
                      className={cn(
                        "rounded-2xl px-3 py-3 text-center text-sm transition",
                        active
                          ? "bg-[#18a56f] text-[#f8f7ef]"
                          : "text-[#4e685d] hover:bg-[#eef8f1] hover:text-[#176845]",
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
            <nav className="grid gap-2">
              {copy.navigation.map((item) => {
                const active = isActivePath(normalizedPathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={withLocale(locale, item.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-2xl px-4 py-3.5 text-[0.95rem] transition",
                      active
                        ? "bg-[#dff4e8] text-[#176845]"
                        : "text-[#4e685d] hover:bg-[#eef8f1] hover:text-[#176845]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              href={withLocale(locale, "/contact")}
              className="mt-4 w-full"
            >
              {copy.header.requestDemoLabel}
            </Button>
            <div className="mt-4 rounded-[1.75rem] border border-[color:var(--theme-border-soft)] bg-[image:var(--card-gradient-soft)] p-3 shadow-[0_14px_36px_var(--theme-shadow-soft)]">
              <div className="flex items-center justify-between px-2 pb-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground-muted)]">
                  {copy.externalAccess.appsLabel}
                </p>
                <span className="text-[0.72rem] text-[color:var(--foreground-faint)]">
                  Store & Admin
                </span>
              </div>
              <div className="grid gap-2">
                <MobileAccessCard
                  href={appStoreUrl}
                  label={copy.externalAccess.appStoreLabel}
                  description={copy.externalAccess.appsDescription}
                  action={copy.externalAccess.appStoreLabel}
                  tone="dark"
                >
                  <AppleStoreMark />
                </MobileAccessCard>
                <MobileAccessCard
                  href={playStoreUrl}
                  label={copy.externalAccess.playStoreLabel}
                  description={copy.externalAccess.appsDescription}
                  action={copy.externalAccess.playStoreLabel}
                  tone="light"
                >
                  <PlayStoreMark />
                </MobileAccessCard>
                <MobileAccessCard
                  href={adminUrl}
                  label={copy.externalAccess.adminLabel}
                  description={copy.externalAccess.adminDescription}
                  action={copy.externalAccess.adminAction}
                  tone="accent"
                >
                  <AdminMark />
                </MobileAccessCard>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
