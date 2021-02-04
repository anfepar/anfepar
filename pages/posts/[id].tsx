import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date/date";
import utilStyles from "../../styles/utils.module.css";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from "next/head";

export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
} ){
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async() =>  {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
}