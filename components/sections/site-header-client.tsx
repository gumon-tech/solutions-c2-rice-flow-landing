"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { cn } from "@/lib/utils";
import { localeLabels, stripLocaleFromPathname, withLocale } from "@/lib/i18n";

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
          <Link href={withLocale(locale, "/")} className="flex items-center gap-3">
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
                  className={cn("h-4 w-4 text-[#7a9085] transition", isLocaleMenuOpen ? "rotate-180" : "")}
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
                      href={withLocale(targetLocale as Locale, normalizedPathname)}
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
                        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
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
            <Button href={withLocale(locale, "/contact")}>{copy.header.requestDemoLabel}</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d5e4d8] bg-[rgba(255,252,243,0.88)] text-[#255144] transition hover:bg-[#f1f8f3] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? copy.header.closeMenuLabel : copy.header.openMenuLabel}
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
            <ThemeToggle locale={locale} className="mb-4 flex w-full justify-center" />
            <div className="mb-4 rounded-2xl border border-[#d8e7db] bg-[rgba(255,252,243,0.92)] p-2">
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(localeLabels).map(([targetLocale, label]) => {
                  const active = targetLocale === locale;

                  return (
                    <Link
                      key={targetLocale}
                      href={withLocale(targetLocale as Locale, normalizedPathname)}
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
            <Button href={withLocale(locale, "/contact")} className="mt-4 w-full">
              {copy.header.requestDemoLabel}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
