import Link from 'next/link'
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'

import UnderlinedNextLink from './UnderlinedNextLink'

export default function Header() {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Daniel Tea</h1>

        <nav className="my-2">
          <ul className="flex space-x-2 align-middle">
            <li>
              <a href="https://github.com/dlcoffee" title="github">
                <GitHubLogoIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_dlcoffee" title="twitter">
                <TwitterLogoIcon />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/daniel-tea-1ab14697"
                title="linkedin"
              >
                <LinkedInLogoIcon />
              </a>
            </li>
            <li>
              <a
                href="
                mailto:daniel.l.tea@gmail.com"
                title="email"
              >
                <EnvelopeClosedIcon />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex space-x-1">
            <li>
              <UnderlinedNextLink href="/">home</UnderlinedNextLink>
            </li>
            <li>
              <UnderlinedNextLink href="/writing">writing</UnderlinedNextLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
