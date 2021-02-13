import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="site-footer">
      <nav className="site-footer-nav">
        <ul className="social-media-list">
          <li className="social-media-item">
            <a href="https://github.com/dlcoffee" title="github">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a href="https://twitter.com/_dlcoffee" title="twitter">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a href="https://codepen.io/dlcoffee" title="codepen">
              <FontAwesomeIcon icon={['fab', 'codepen']} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a href="mailto:daniel.l.tea@gmail.com" title="email">
              <FontAwesomeIcon icon={'envelope'} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a
              href="https://linkedin.com/in/daniel-tea-1ab14697"
              title="linkedin"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
