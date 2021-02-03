import React, { useLayoutEffect, useState } from "react";
import { LANGUAGES } from "@/constants/languageTypes";
import STRINGS from "@/constants/string";
import LangContext from "@/context/LanguageContext";

interface LangProviderProps {
  children: React.ReactNode;
}

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<LANGUAGES>(LANGUAGES.SPANISH);
  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem("language") as LANGUAGES;
    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);
  const switchLang = (language: LANGUAGES) => {
    setLang(language);
    window.localStorage.setItem("language", language);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: STRINGS[lang],
      }}
    >
      {children}
    </LangContext.Provider>
  );
}
