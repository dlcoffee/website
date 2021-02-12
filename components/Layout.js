import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>

      <footer className="site-footer">
        <nav className="site-footer-nav">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a href="https://github.com/dlcoffee" title="github">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li className="social-media-item">
              <a
                href="https://twitter.com/{{ site.twitter_username }}"
                title="twitter"
              >
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li className="social-media-item">
              <a
                href="https://codepen.io/{{ site.codepen_username }}"
                title="codepen"
              >
                <i className="fa fa-codepen fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li className="social-media-item">
              <a href="mailto:{{ site.email }}" title="email">
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </a>
            </li>

            <li className="social-media-item">
              <a
                href="https://linkedin.com/in/{{ site.linkedin_username }}"
                title="linkedin"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
