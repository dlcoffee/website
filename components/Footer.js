import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="site-footer">
      <nav className="site-footer-nav">
        <ul className="social-media-list">
          <li className="social-media-item">
            <a
              className="social-media-item-link"
              href="https://github.com/dlcoffee"
              title="github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li className="social-media-item">
            <a
              className="social-media-item-link"
              href="https://twitter.com/_dlcoffee"
              title="twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a
              className="social-media-item-link"
              href="https://codepen.io/dlcoffee"
              title="codepen"
            >
              <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a
              className="social-media-item-link"
              href="mailto:daniel.l.tea@gmail.com"
              title="email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>

          <li className="social-media-item">
            <a
              className="social-media-item-link"
              href="https://linkedin.com/in/daniel-tea-1ab14697"
              title="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
