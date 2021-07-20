import utilStyles from "@/styles/utils.module.sass";
import Link from "next/link";
import Head from "next/head";
import LanguageButton from "@/components/languageButton/languageButton";
import MediaButton from "@/components/mediaButtons/mediaButtons";
import Header from "@/components/header/header";
import { useContext } from "react";
import LangContext from "@/context/LanguageContext";
import ThemeContext from "@/context/ThemeContext";
import styles from "./layout.module.sass";


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
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="anfepar personal website" />
        <meta name="og:title" content={siteTitle} />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/blog-dd6cf.appspot.com/o/og-image.png?alt=media&token=37775fea-5098-42b8-9d15-383c1369d894"
        />
        <meta property="og:url" content="https://anfepar.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header theme={theme} onThemeSwitch={switchTheme} />
    </>
  );
}
