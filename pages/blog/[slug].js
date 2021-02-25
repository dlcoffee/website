import hydrate from 'next-mdx-remote/hydrate'

import Layout from '../../components/Layout'

import { getFiles, getFileBySlug } from '../../lib/mdx'

// TODO: set up MDX components
const components = {}

export default function BlogPost({ source, frontMatter }) {
  const content = hydrate(source, { components })
  const { title, date, categories } = frontMatter

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{new Date(date).toISOString()}</h2>
        <p>{categories}</p>
      </div>
      {content}
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles()

  return {
    paths: posts.map((p) => ({
      params: {
        // use the post/file name as the slug, without the `.mdx`
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { mdxSource, frontMatter } = await getFileBySlug(params.slug)

  return { props: { source: mdxSource, frontMatter } }
}
