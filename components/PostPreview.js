import Link from 'next/link'

const PostPreview = ({ title, excerpt, date, slug }) => {
  const time = new Date(date).toLocaleString('default', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Los_Angeles', // TODO: get display correct
  })

  return (
    <li className="short-post">
      <header className="post-header">
        <h2 className="post-title">
          <Link href={`/blog/${slug}`}>
            <a className="post-link">{title}</a>
          </Link>
        </h2>

        <p className="post-meta">{time}</p>
      </header>

      <p className="excerpt">{excerpt}</p>

      <p className="read-more">
        <Link href={`/blog/${slug}`}>Read more...</Link>
      </p>
    </li>
  )
}

export default PostPreview
