import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Date } from '@/components/Date';
import { siteTitle } from '@/components/Layout';
import { getSortedPostsData } from '../utils/posts';
import STRINGS from '@/constants/string';

interface HomeProps {
  allPostsData: any
}
const name = 'Felipe Pardo';

export default function Home({ allPostsData }: HomeProps) {
  const postsData: { id: string; date: string; title: string }[] = allPostsData;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{name}</h1>
      <section>
        <p>
          {STRINGS.HOME.PROFILE_DESCRIPTION}
        </p>
      </section>
      <section >
        <h2>Blog</h2>
        <ul>
          {postsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
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
