import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import '../styles.scss'

library.add(faCodepen, faGithub, faLinkedin, faTwitter, faEnvelope)

export default function RootApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
