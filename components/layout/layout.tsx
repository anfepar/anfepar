import styles from './layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
const name = 'Felipe Pardo'
export const siteTitle = 'anfepar'
import STRINGS from '@/constants/string'
import { Header } from '../header/header'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
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
      <Header />
      <div className={styles.container}>
        <div className={styles.info}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.infoProfileImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : null}
        </div>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              {STRINGS.POST.BACK_ARROW}
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
