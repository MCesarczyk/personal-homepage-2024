"use client";

import { useEffect } from "react";

import { ThemeSwitcher } from "@/ui";
import { useLocalStorage } from "@/app/useLocalStorage";

export type Theme = "light" | "dark";

export default function NextThemeSwitcher() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("theme", "light" as Theme);

  const onThemeChange = () => setDarkTheme(!isDarkTheme);

  useEffect(() => {
    isDarkTheme ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="animate-slideDown">
      <ThemeSwitcher {...{ isDarkTheme, toggleDarkTheme: onThemeChange }} />
    </div>
  );
}
