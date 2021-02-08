import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Date from "../components/date/date";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { useContext } from "react";
import LangContext from "@/context/LanguageContext";
import { Texts } from "@/constants/string";

interface HomeProps {
  allPostsData: any;
}

export default function Home({ allPostsData }: HomeProps) {
  const { lang, currentLangData } = useContext(LangContext);
  const postsData: { id: string; date: string; title: string }[] =
    allPostsData[lang];
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.justifyText}>
          {currentLangData.HOME.PROFILE_DESCRIPTION}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[...id]" as={`/posts/${id}/${lang}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
