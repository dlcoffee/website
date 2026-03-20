import {
  RiBlueskyFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from 'react-icons/ri'

import UnderlinedNextLink from './UnderlinedNextLink'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Daniel Tea</h1>

          <nav className="my-2">
            <ul className="flex items-center space-x-3">
              <li>
                <a
                  href="https://github.com/dlcoffee"
                  title="github"
                  className="text-[#286983] transition-colors transition-transform hover:scale-105 hover:text-[#56949f] dark:text-[#9ccfd8] dark:hover:text-[#c4a7e7]"
                >
                  <RiGithubFill />
                </a>
              </li>
              <li>
                <a
                  href="https://bsky.app/profile/danieltea.com"
                  title="bluesky"
                  className="text-[#56949f] transition-colors transition-transform hover:scale-105 hover:text-[#286983] dark:text-[#9ccfd8] dark:hover:text-[#ebbcba]"
                >
                  <RiBlueskyFill />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/daniel-tea-1ab14697"
                  title="linkedin"
                  className="text-[#907aa9] transition-colors transition-transform hover:scale-105 hover:text-[#b4637a] dark:text-[#c4a7e7] dark:hover:text-[#ea9a97]"
                >
                  <RiLinkedinBoxFill />
                </a>
              </li>
              <li>
                <a
                  href="mailto:daniel.l.tea@gmail.com"
                  title="email"
                  className="text-[#d7827e] transition-colors transition-transform hover:scale-105 hover:text-[#ea9d34] dark:text-[#ebbcba] dark:hover:text-[#f6c177]"
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

        <ThemeToggle />
      </div>
    </section>
  )
}
