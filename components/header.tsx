import Image from 'next/image'
import logo from '@/public/images/logo.png'
import classNames from 'classnames'
import { THEMES } from '@/constants/themeTypes'
import styles from '@/styles/components/header.module.sass'


interface HeaderProps {
  theme: THEMES,
  onThemeSwitch: () => void;
};

export default function Header({ theme, onThemeSwitch }: HeaderProps) {

  const headerClassNames = classNames(styles.Header, {
    [styles.Header_dark]: theme === THEMES.DARK
  })

  return (
    <header className={headerClassNames}>
      <figure>
        <Image className={styles.Header__Logo} src={logo} alt="" placeholder="blur" />
      </figure>
      <section className={styles.Header__Menu}>
        <a className={styles.Header__Item}>About me</a>
        <a className={styles.Header__Item}>Blog</a>
        <a className={styles.Header__Item}>Projects</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/anfepar">
          <img className={styles.Header__Icon} src={`/images/github-${theme}.png`} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anfepar/">
          <img className={styles.Header__Icon} src={`/images/linkedin-${theme}.png`} alt="" />
        </a>
        <label className={styles.Header__Switch}>
          <input type="checkbox" checked={theme === THEMES.DARK} onChange={() => onThemeSwitch()} />
          <span className={styles.Header__Slider}>{theme === THEMES.DARK ? "☀️" : "🌙"}</span>
        </label>
      </section>
    </header>
  )
}