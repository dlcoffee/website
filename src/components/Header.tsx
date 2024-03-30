import Link from 'next/link'
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'

import UnderlinedLink from './UnderlinedLink'

export default function Header() {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Daniel Tea</h1>

        <nav className="my-2">
          <ul className="flex space-x-2 align-middle">
            <li>
              <a href="#">
                <GitHubLogoIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterLogoIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInLogoIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <EnvelopeClosedIcon />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex space-x-1">
            <li>
              <UnderlinedLink href="/">home</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="/writing">writing</UnderlinedLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
