import { useContext } from 'react';
import classNames from 'classnames';
import { THEMES } from '@/constants/themeTypes';
import LangContext from '@/context/LanguageContext';
import styles from '@/styles/components/header.module.sass';



interface HeaderProps {
  theme: THEMES,
  onThemeSwitch: () => void;
};

export default function Header({ theme, onThemeSwitch }: HeaderProps) {

  const { currentLangData: cld } = useContext(LangContext);
  LangContext
  const headerClassNames = classNames(styles.Header, {
    [styles.Header_dark]: theme === THEMES.DARK
  })

  return (
    <header className={headerClassNames}>
      <figure>
        <img className={styles.Header__Logo} src={'images/logo.png'} alt={cld?.HEADER?.LOGO_ALT}/>
      </figure>
      <section className={styles.Header__Menu}>
        <a className={styles.Header__Item}>{cld?.HEADER?.ABOUT_ME}</a>
        <a className={styles.Header__Item}>{cld?.HEADER?.BLOG}</a>
        <a className={styles.Header__Item}>{cld?.HEADER?.PROJECTS}</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/anfepar">
          <img className={styles.Header__Icon} src={`/images/github-${theme}.png`} alt={cld?.HEADER?.GITHUB_ALT} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anfepar/">
          <img className={styles.Header__Icon} src={`/images/linkedin-${theme}.png`} alt={cld?.HEADER?.LINKEDIN_ALT} />
        </a>
        <label className={styles.Header__Switch}>
          <input type="checkbox" checked={theme === THEMES.DARK} onChange={() => onThemeSwitch()} aria-label={cld?.HEADER?.TOGGLE_MODE_ARIA_LABEL} />
          <span className={styles.Header__Slider}>{theme === THEMES.DARK ? "☀️" : "🌙"}</span>
        </label>
      </section>
    </header>
  )
}