import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

const root = process.cwd()

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(path.join(root, 'blog', `${slug}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content)

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
