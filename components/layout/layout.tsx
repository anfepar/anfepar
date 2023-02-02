import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./layout.module.css";

export const siteTitle = "anfepar";

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
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
      <main className={styles.Layout_Container}>
        <>
          {children}
        </>
      </main>
    </>
  );
};
