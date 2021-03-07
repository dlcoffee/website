import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

const root = process.cwd()

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(path.join(root, 'blog', `${slug}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
      ],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  }
}

export async function getFiles() {
  return fs.readdirSync(path.join(root, 'blog'))
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'blog'))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'blog', postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
