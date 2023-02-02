import { useEffect, useState } from "react";
import STRINGS, { Texts } from "@/constants/string";

export const useTranslations = (viewContext: string) => {
  const [translations, setTranslations] = useState<any>({});
  useEffect(() => {
    const contextTranslations = STRINGS[viewContext as keyof Texts];
    setTranslations(contextTranslations);
  }, []);

  const getTranslation = (key: string, props?: object) => {
    const value = translations[key] || key;
    if (props) {
      try {
        return value(props);
      } catch (error) {
        return value;
      };
    };
    return value;
  };

  return { t: getTranslation };
};