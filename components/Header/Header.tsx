import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import styles from "./Header.module.css";

const menuItems = [
  {
    name: "github",
    url: "https://github.com/anfepar",
    icon: "/images/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anfepar",
    icon: "/images/linkedin.png",
  },
];

export const Header = () => {
  const { t } = useTranslations("Header");

  return (
    <>
      <header className={styles.Header}>
        <Link href="/" className={styles.Header_Link}>
          <Image className={styles.Header_Logo} src="/images/logo.png" alt={t("logo_alt")} width={180} height={45} priority />
        </Link>
        <ul className={styles.Header_Menu}>
          {menuItems.map((item, idx) => {
            const { name, url, icon } = item;

            return (
              <li className={styles.Header_Item} key={`${name}_${idx}`}>
                <Link className={styles.Header_Link} href={url} target="_blank" rel="noreferrer">
                  {icon && <Image src={icon} width={25} height={25} alt={t("icon_alt", { name })} />}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};
