"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

type ThemeContextValue = {
  resolvedTheme: ResolvedTheme;
  themePreference: ThemePreference;
  setThemePreference: (theme: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(preference: ThemePreference) {
  const resolvedTheme = preference === "system" ? getSystemTheme() : preference;
  const root = document.documentElement;

  root.dataset.themePreference = preference;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch (error) {
    // Ignore storage errors in restrictive browsing contexts.
  }

  return resolvedTheme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const preference = root.dataset.themePreference as ThemePreference | undefined;
    const initialPreference =
      preference === "light" || preference === "dark" || preference === "system"
        ? preference
        : "system";
    const initialResolvedTheme =
      root.dataset.theme === "dark" || root.dataset.theme === "light"
        ? (root.dataset.theme as ResolvedTheme)
        : getSystemTheme();

    setThemePreferenceState(initialPreference);
    setResolvedTheme(initialResolvedTheme);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemThemeChange() {
      if (themePreference !== "system") {
        return;
      }

      setResolvedTheme(applyTheme("system"));
    }

    media.addEventListener("change", handleSystemThemeChange);

    return () => {
      media.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themePreference]);

  function setThemePreference(theme: ThemePreference) {
    setThemePreferenceState(theme);
    setResolvedTheme(applyTheme(theme));
  }

  return (
    <ThemeContext.Provider value={{ resolvedTheme, themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
