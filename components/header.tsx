import Image from 'next/image'
import logo from '@/public/images/logo.png'
import styles from '@/styles/components/header.module.sass'


export default function Header() {
  return (
    <header className={styles.Header}>
      <figure>
        <Image className={styles.Header_Logo} src={logo} alt="" placeholder="blur" />
      </figure>
      <section className={styles.Header_Menu}>
        <a className={styles.Header_Menu_Item}>About me</a>
        <a className={styles.Header_Menu_Item}>Blog</a>
        <a className={styles.Header_Menu_Item}>Projects</a>
        <img className={styles.Header_Icon} src="/images/github-light.png" alt="" />
        <img className={styles.Header_Icon} src="/images/linkedin-light.png" alt=""/>
        <label className={styles.Header_Switch}>
          <input className={styles.Header_Checkbox} type="checkbox"/>
          <span className={styles.Header_Slider}>{"💡"}</span>
        </label>
      </section>
    </header>
  )
}