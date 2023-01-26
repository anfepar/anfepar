import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Date } from '@/components/Date'
import { Layout, siteTitle } from '@/components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import STRINGS from '@/constants/string'

interface HomeProps {
  allPostsData: any
}

export default function Home({ allPostsData }: HomeProps) {
  const postsData: { id: string; date: string; title: string }[] = allPostsData
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.justifyText}>
          {STRINGS.HOME.PROFILE_DESCRIPTION}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
