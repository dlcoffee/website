import Link from 'next/link'

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <h1 className="blog-title">Daniel Tea</h1>

      <nav className="main-nav">
        <Link href="/">
          <a className="page-link">home</a>
        </Link>

        <Link href="/resume">
          <a className="page-link">resume</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
