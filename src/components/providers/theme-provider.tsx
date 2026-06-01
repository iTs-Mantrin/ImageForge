"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { ThemePreference } from "@/types/tool";
import { useAppStore } from "@/store/use-app-store";

type ThemeContextValue = {
  theme: ThemePreference;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storeTheme = useAppStore((state) => state.theme);
  const setStoreTheme = useAppStore((state) => state.setTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("imagekit-theme") as ThemePreference | null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      setStoreTheme(saved);
    }
  }, [setStoreTheme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const nextTheme = storeTheme === "system" ? (media.matches ? "dark" : "light") : storeTheme;
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      setResolvedTheme(nextTheme);
      window.localStorage.setItem("imagekit-theme", storeTheme);
    };
    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [storeTheme]);

  const value = useMemo(() => ({ theme: storeTheme, resolvedTheme, setTheme: setStoreTheme }), [resolvedTheme, setStoreTheme, storeTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
