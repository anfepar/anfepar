import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import Head from "next/head";
import LanguageButton from "@/components/languageButton/languageButton";
import MediaButton from "@/components/mediaButtons/mediaButtons";
import { useContext } from "react";
import LangContext from "@/context/LanguageContext";
const name = "Felipe Pardo";
export const siteTitle = "anfepar";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const { currentLangData } = useContext(LangContext);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="anfepar personal website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <LanguageButton />
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <MediaButton />
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>{currentLangData.POST.BACK_ARROW}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
