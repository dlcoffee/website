import Head from 'next/head'
import Layout from '../components/Layout'

import PostPreview from '../components/PostPreview'

import { getAllFilesFrontMatter } from '../lib/mdx'

const Index = ({ posts }) => {
  return (
    <div className="wrapper">
      <div className="home">
        <ul className="post-list">
          {posts.map((frontMatterPost) => {
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
