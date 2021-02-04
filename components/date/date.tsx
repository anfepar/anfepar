import { LANGUAGES } from "@/constants/languageTypes";
import LangContext from "@/context/LanguageContext";
import { parseISO, format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useContext } from "react";

interface DateProps {
  dateString: string;
}

const dateLanguages = { [LANGUAGES.ENGLISH]: enUS, [LANGUAGES.SPANISH]: es };
export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  const { lang } = useContext(LangContext);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: dateLanguages[lang] })}
    </time>
  );
}
