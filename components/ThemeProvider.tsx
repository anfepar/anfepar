import React, { useLayoutEffect, useState } from "react";
import { THEMES } from "@/constants/themeTypes";
import ThemeContext from "@/context/ThemeContext";


interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<THEMES>(THEMES.LIGHT);
  useLayoutEffect(() => {
    const selectedTheme = window.localStorage.getItem("theme") as THEMES;
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [theme]);
  const switchTheme = () => {
    switch (theme) {
      case THEMES.LIGHT:
        setTheme(THEMES.DARK);
        window.localStorage.setItem("theme", THEMES.DARK);
        break;
      case THEMES.DARK:
        setTheme(THEMES.LIGHT);
        window.localStorage.setItem("theme", THEMES.LIGHT);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
