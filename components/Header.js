import Link from 'next/link'

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <h1 className="blog-title">Daniel Tea</h1>

      <nav className="main-nav">
        <Link href="/">
          <a className="page-link">home</a>
        </Link>

        <Link href="/about">
          <a className="page-link">about</a>
        </Link>

        <a href="/resume.pdf" target="_blank" className="page-link">
          resume
        </a>
      </nav>
    </header>
  )
}

export default Header
