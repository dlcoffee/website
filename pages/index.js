import Head from 'next/head'
import Layout from '../components/Layout'

import PostPreview from '../components/PostPreview'

import { getAllFilesFrontMatter } from '../lib/mdx'

const Index = ({ posts }) => {
  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return (
    <div className="wrapper">
      <div className="home">
        <ul className="post-list">
          {sortedPosts.map((frontMatterPost) => {
            return (
              <PostPreview key={frontMatterPost.title} {...frontMatterPost} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter()

  return { props: { posts } }
}

export default function WrappedIndex(props) {
  return (
    <Layout>
      <Head>
        <title>Daniel Tea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index {...props} />
    </Layout>
  )
}
