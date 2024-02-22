"use client";

import { useEffect, useState } from "react";

import { ThemeSwitcher } from "@/ui";
// import { Theme } from '@types';
// import { localStorageService } from '@services';

export const NextThemeSwitcher = () => {
  // const initialTheme = localStorageService.getValue('theme', 'light' as Theme); // FIXME: Restore saving in local storage after fixing the issue with the server-side rendering
  const [isDarkTheme, setDarkTheme] = useState(true);

  const onThemeChange = () => {
    setDarkTheme(!isDarkTheme);

    // localStorageService.setValue('theme', !isDarkTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    isDarkTheme ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return <ThemeSwitcher {...{ isDarkTheme, toggleDarkTheme: onThemeChange }} />;
};
