import Prism from 'prism-react-renderer/prism'
import hydrate from 'next-mdx-remote/hydrate'

import BlogLayout from '../../components/BlogLayout'
import CodeBlock from '../../components/CodeBlock'

import { getFiles, getFileBySlug } from '../../lib/mdx'

// react-prism-render only comes with a subset of languages
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-ruby')

const components = {
  code: CodeBlock,
}

export default function BlogPost({ source, frontMatter }) {
  const content = hydrate(source, { components })
  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
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
