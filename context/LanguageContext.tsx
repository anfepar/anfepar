import { LANGUAGES } from "@/constants/languageTypes";
import React from "react";

interface TLangContext {
  lang: LANGUAGES;
  currentLangData: any;
  switchLang: (language: LANGUAGES) => void;
}

const initialState: TLangContext = {
  lang: LANGUAGES.SPANISH,
  currentLangData: {},
  switchLang: () => {},
};

const LangContext = React.createContext(initialState);

export default LangContext;
