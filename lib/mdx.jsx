import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()

function firstFourLines(file, options) {
  file.excerpt = file.content.split('\n').slice(0, 4).join(' ')
}

export async function getFileBySlug(slug) {
  const source = fs.readFileSync(path.join(root, 'blog', `${slug}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
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
    const { data, excerpt } = matter(source, { excerpt: firstFourLines })

    return [
      {
        ...data,
        excerpt: excerpt || null,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
