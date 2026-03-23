"use client";

import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import type { Locale } from "@/lib/i18n";
import type { ResolvedTheme } from "@/lib/theme";

const themeLabels = {
  en: {
    light: "Light",
    dark: "Dark",
    aria: "Theme switcher",
  },
  th: {
    light: "สว่าง",
    dark: "มืด",
    aria: "สลับธีม",
  },
} satisfies Record<Locale, { light: string; dark: string; aria: string }>;

const themeOptions: Array<{
  value: ResolvedTheme;
  icon: ReactElement;
}> = [
  {
    value: "light",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <circle cx="10" cy="10" r="3.1" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2.5v2.1M10 15.4v2.1M17.5 10h-2.1M4.6 10H2.5M15.3 4.7l-1.5 1.5M6.2 13.8l-1.5 1.5M15.3 15.3l-1.5-1.5M6.2 6.2 4.7 4.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path
          d="M12.7 3.2a6.3 6.3 0 1 0 4.1 10.9A7 7 0 1 1 12.7 3.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ThemeToggle({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const { resolvedTheme, setThemePreference } = useTheme();
  const labels = themeLabels[locale];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[color:var(--theme-border-strong)] bg-[color:var(--theme-surface-2)] p-1 shadow-[0_14px_36px_var(--theme-shadow-soft)] backdrop-blur-xl",
        className,
      )}
      role="group"
      aria-label={labels.aria}
    >
      {themeOptions.map((option) => {
        const active = resolvedTheme === option.value;
        const label = labels[option.value];

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setThemePreference(option.value)}
            aria-pressed={active}
            aria-label={label}
            className={cn(
              "inline-flex min-h-10 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition sm:text-sm",
              active
                ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[0_12px_30px_var(--theme-shadow-accent)]"
                : "text-[color:var(--muted)] hover:bg-[color:var(--theme-surface-1)] hover:text-[color:var(--foreground)]",
            )}
          >
            {option.icon}
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
