import Head from 'next/head'
import Layout from './Layout'

const BlogLayout = ({ children, frontMatter }) => {
  const { title, date, categories } = frontMatter
  const time = new Date(date).toLocaleString('default', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <Layout>
      <Head>
        <title>Daniel Tea | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="post">
        <header className="post-header">
          <h1 className="post-title">{title}</h1>
          <p className="post-meta">
            <time dateTime={date}>{time}</time>
          </p>
          {/* <p>{categories}</p> */}
        </header>

        <div className="post-content">{children}</div>
      </article>
    </Layout>
  )
}

export default BlogLayout
