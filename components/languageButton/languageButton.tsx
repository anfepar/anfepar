import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from "react";
import styles from "./languageButton.module.css";

enum Languages {
  ENG = "Eng",
  SPA = "Spa",
}

const languages = [Languages.ENG, Languages.SPA];

export default function LanguageButton() {
  const [selectLanguage, setLanguage] = useState<Languages>(Languages.ENG);
  return (
    <ButtonGroup
      className={styles.container}
      color="primary"
      aria-label="outlined primary button group"
    >
      {languages.map((language) => (
        <Button
          key={language}
          variant={selectLanguage === language ? "contained" : "outlined"}
          onClick={() => setLanguage(language)}
        >
          {language}
        </Button>
      ))}
    </ButtonGroup>
  );
}
