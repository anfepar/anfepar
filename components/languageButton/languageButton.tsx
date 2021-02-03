import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { LANGUAGES } from "@/constants/languageTypes";
import styles from "./languageButton.module.css";
import LangContext from "@/context/LanguageContext";
import { useContext } from "react";

const languages = [LANGUAGES.ENGLISH, LANGUAGES.SPANISH];

export default function LanguageButton() {
  const { switchLang, lang } = useContext(LangContext);

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
          onClick={() => switchLang(language)}
        >
          {language}
        </Button>
      ))}
    </ButtonGroup>
  );
}
