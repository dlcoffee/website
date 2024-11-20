import Link from 'next/link'

import {
  RiBlueskyFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from 'react-icons/ri'

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
                <RiGithubFill />
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/danieltea.com" title="bluesky">
                <RiBlueskyFill />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/daniel-tea-1ab14697"
                title="linkedin"
              >
                <RiLinkedinBoxFill />
              </a>
            </li>
            <li>
              <a
                href="
                mailto:daniel.l.tea@gmail.com"
                title="email"
              >
                <RiMailFill />
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
