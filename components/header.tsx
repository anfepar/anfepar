import Image from 'next/image'
import logo from '@/public/images/logo.png'
import classNames from 'classnames'
import styles from '@/styles/components/header.module.sass'

interface HeaderProps {
  dark: boolean,
};

export default function Header({ dark }: HeaderProps) {

  const headerClassNames = classNames(styles.Header, {
    [styles.Header_dark]: dark
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
        <img className={styles.Header__Icon} src={`/images/github-${dark ? 'light' :'dark'}.png`} alt="" />
        <img className={styles.Header__Icon} src={`/images/linkedin-${dark ? 'light' :'dark'}.png`} alt="" />
        <label className={styles.Header__Switch}>
          <input type="checkbox" />
          <span className={styles.Header__Slider}>{dark? "☀️": "🌙"}</span>
        </label>
      </section>
    </header>
  )
}