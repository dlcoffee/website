import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getFiles() {
  return fs.readdirSync(path.join(root, 'content'))
}

export async function getFileBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(root, 'content', `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = matter(source)

  return {
    mdxSource: content,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  }
}

type FrontMatter = {
  title?: string
  date?: string
  categories?: string
  slug: string
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'content'))

  const frontmatter = files.reduce<FrontMatter[]>((allPosts, fileName) => {
    const source = fs.readFileSync(path.join(root, 'content', fileName), 'utf8')
    const { data, excerpt } = matter(source)

    return [
      {
        ...data,
        slug: fileName.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])

  return frontmatter.sort(
    (a, b) => Number(new Date(b.date!)) - Number(new Date(a.date!))
  )
}
