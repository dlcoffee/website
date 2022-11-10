import Link from 'next/link'

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <h1 className="blog-title">Daniel Tea</h1>

      <nav className="main-nav">
        <Link href="/" className="page-link">
          home
        </Link>

        <Link href="/about" className="page-link">
          about
        </Link>

        <a href="/resume.pdf" target="_blank" className="page-link">
          resume
        </a>
      </nav>
    </header>
  );
}

export default Header
