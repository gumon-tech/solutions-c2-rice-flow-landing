export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = Exclude<ThemePreference, "system">;

export const THEME_STORAGE_KEY = "riceflow-theme";

export function getThemeInitScript() {
  return `
    (function () {
      var storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
      var root = document.documentElement;
      var media = window.matchMedia("(prefers-color-scheme: dark)");

      function resolveTheme(preference) {
        if (preference === "dark" || preference === "light") {
          return preference;
        }

        return media.matches ? "dark" : "light";
      }

      var storedPreference = null;

      try {
        storedPreference = window.localStorage.getItem(storageKey);
      } catch (error) {
        storedPreference = null;
      }

      var preference =
        storedPreference === "light" || storedPreference === "dark" || storedPreference === "system"
          ? storedPreference
          : "system";
      var resolvedTheme = resolveTheme(preference);

      root.dataset.themePreference = preference;
      root.dataset.theme = resolvedTheme;
      root.style.colorScheme = resolvedTheme;
    })();
  `;
}
