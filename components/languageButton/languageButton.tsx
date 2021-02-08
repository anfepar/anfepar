import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { LANGUAGES } from "@/constants/languageTypes";
import styles from "./languageButton.module.css";
import LangContext from "@/context/LanguageContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const languages = [LANGUAGES.ENGLISH, LANGUAGES.SPANISH];

export default function LanguageButton() {
  const { switchLang, lang } = useContext(LangContext);
  const router = useRouter();

  const handleSwitchLanguage = (language: LANGUAGES) => {
    if (router.pathname !== "/") {
      const currentPath = router.asPath;
      const resultPath = currentPath.replace(lang, language);
      router.push(resultPath);
    }
    switchLang(language);
  };

  return (
    <ButtonGroup
      className={styles.container}
      color="primary"
      aria-label="outlined primary button group"
    >
      {languages.map((language) => (
        <Button
          key={language}
          variant={lang === language ? "contained" : "outlined"}
          onClick={() => handleSwitchLanguage(language)}
        >
          {language}
        </Button>
      ))}
    </ButtonGroup>
  );
}
