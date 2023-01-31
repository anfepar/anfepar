import STRINGS from '@/constants/string';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import logo from '@/public/images/logo.png';
import styles from './header.module.css';

const menuItems = [
  { name: 'blog', text: 'blog', url: '/blog' },
  { name: 'projects', text: 'projects', url: '/projects' },
  {
    name: 'github',
    url: 'https://github.com/anfepar',
    icon: '/images/github.png',
    target: '_blank'
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/anfepar',
    icon: '/images/linkedin.png',
    target: '_blank'
  },
];

export const Header = () => {
  const { t } = useTranslations('Header');
  return (
    <header className={styles.Header}>
      <Link href="/" className={styles.Header_Link}>
        <Image className={styles.Header_Logo} src={logo} alt={t('logo_alt')} width={200} height={50} priority />
      </Link>
      <ul className={styles.Header_Menu}>
        {menuItems.map((item) => {
          const { name, url, icon, text } = item;

          return (
            <li className={styles.Header_Item} key={name}>
              <Link className={styles.Header_Link} href={url} target={item.target || '_self'} rel="noreferrer">
                {icon && <Image src={icon} width={25} height={25} alt={t('icon_alt', { name })} />}
                {text && <p className={styles.Header_Text}>{t(`url_${name}`)}</p>}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
