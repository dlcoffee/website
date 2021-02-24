import fs from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'

const root = process.cwd()

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(path.join(root, 'blog', `${slug}.mdx`), 'utf8')

  const mdxSource = await renderToString(source)

  return { mdxSource }
}

export async function getFiles() {
  return fs.readdirSync(path.join(root, 'blog'))
}
