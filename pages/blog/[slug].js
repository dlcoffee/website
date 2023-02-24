import Prism from 'prism-react-renderer/prism'
import { MDXRemote } from 'next-mdx-remote'
import { CodePen } from 'mdx-embed'

import BlogLayout from '../../components/BlogLayout'
import CodeBlock from '../../components/CodeBlock'

import { getFiles, getFileBySlug } from '../../lib/mdx'

// react-prism-render only comes with a subset of languages
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-ruby')

const components = {
  pre: CodeBlock,
  CodePen,
}

export default function BlogPost({ source, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} />
    </BlogLayout>
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
