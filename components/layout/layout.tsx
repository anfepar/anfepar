import styles from "./layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import Head from "next/head";
import MediaButton from "@/components/mediaButtons/mediaButtons";
const name = "Felipe Pardo";
export const siteTitle = "anfepar";
import STRINGS from '@/constants/string'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {

  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
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
            <a>{STRINGS.POST.BACK_ARROW}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
