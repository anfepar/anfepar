import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import styles from './header.module.css';

const menuItems = [
  { name: 'blog', url: '/blog' },
  { name: 'projects', url: '/projects' },
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

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const getItems = useCallback(() => {
    const socialMediaItems: any = [];
    const links: any = [];

    menuItems.forEach((item) => {
      const { name, url, icon } = item;

      const itemEntry = (
        <Link className={`${styles.Header_Link} ${styles.Header_Link__SocialMedia}`} href={url} target={item.target || '_self'} rel="noreferrer">
          {icon && <Image src={icon} width={25} height={25} alt={t('icon_alt', { name })} />}
          {!icon && <p className={styles.Header_Text}>{t(`url_${name}`)}</p>}
        </Link>
      );

      if (icon) socialMediaItems.push(itemEntry);
      else links.push(<li className={styles.Header_Item} key={name}>{itemEntry}</li>);
    });
    return (
      <>
        {links}
        <li className={styles.Header_Item}>
          {socialMediaItems}
        </li>
      </>
    );
  }, [t]);

  return (
    <>
      <header className={styles.Header}>
        <Link href="/" className={styles.Header_Link}>
          <Image className={styles.Header_Logo} src="/images/logo.png" alt={t('logo_alt')} width={200} height={50} priority />
        </Link>
        <ul className={styles.Header_Menu}>
          {getItems()}
        </ul>
        <button className={styles.Header_Mobile_Menu}>
          <Image src="/images/menu.png" alt={t('logo_alt')} onClick={handleOpenMenu} width={25} height={25} priority />
        </button>
      </header>
      {menuIsOpen && (
        <ul className={styles.Header_Mobile_List}>
          {getItems()}
        </ul>
      )}
    </>
  );
};
