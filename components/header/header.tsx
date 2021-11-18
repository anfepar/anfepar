import STRINGS from '@/constants/string'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/logo.png'
import styles from './header.module.css'

const socialMediaList = [
  {
    name: 'github',
    url: 'https://github.com/anfepar',
    icon: '/images/github.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/anfepar',
    icon: '/images/linkedin.png',
  },
]

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <a className={styles.Header_Logo}>
          <Image src={logo} alt={STRINGS.HEADER.LOGO_ALT} placeholder="blur" />
        </a>
      </Link>
      <ul className={styles.Header_Menu}>
        {socialMediaList.map((media) => (
          <li key={media.name}>
            <button className={styles.Header_Button}>
              <a href={media.url} target="_blank" rel="noreferrer">
                <Image src={media.icon} width="35" height="35" alt={`logo de ${media.name}`} />
              </a>
            </button>
          </li>
        ))}
      </ul>
    </header>
  )
}
