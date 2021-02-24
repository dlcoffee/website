import hydrate from 'next-mdx-remote/hydrate'

import { getFiles, getFileBySlug } from '../../lib/mdx'
import Test from '../../components/Test'

const components = { Test }

export default function TestPage({ source }) {
  const content = hydrate(source, { components })
  return <div className="wrapper">{content}</div>
}

export async function getStaticPaths() {
  const posts = await getFiles()

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { mdxSource } = await getFileBySlug(params.slug)

  return { props: { source: mdxSource } }
}
