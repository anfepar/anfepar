import { THEMES } from "@/constants/themeTypes";
import React from "react";

interface TLangContext {
  theme: THEMES;
  switchTheme: () => void;
}

const initialState: TLangContext = {
  theme: THEMES.LIGHT,
  switchTheme: () => { },
};

const ThemeContext = React.createContext(initialState);

export default ThemeContext;
