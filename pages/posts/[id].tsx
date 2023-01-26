
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/utils/posts';
import { Date } from '@/components/Date';
import utilStyles from '@/styles/utils.module.css';



export default function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <>
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
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
