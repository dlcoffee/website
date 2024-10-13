import UnderlinedLink from '@/components/UnderlinedLink'
import { Badge } from '@/components/ui/badge'

function WorkExperience({
  company,
  title,
  dates,
}: {
  company: string
  title: string
  dates: string
}) {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="text font-semibold">{company}</h4>
        <p className="font-mono text-xs">{title}</p>
      </div>
      <div>
        <Badge>{dates}</Badge>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-4">
      <div className="space-y-2">
        <p className="text-sm">Welcome to my slice on the internet!</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="text-sm">
          I&apos;ve been working as a software developer for over a decade. I
          built my first websites on{' '}
          <UnderlinedLink
            href="https://en.wikipedia.org/wiki/Angelfire"
            target="_blank"
          >
            angelfire
          </UnderlinedLink>{' '}
          and{' '}
          <UnderlinedLink
            href="https://en.wikipedia.org/wiki/GeoCities"
            target="_blank"
          >
            geocities
          </UnderlinedLink>{' '}
          and I learned HTML+CSS by copy and pasting on{' '}
          <UnderlinedLink href="https://www.neopets.com" target="_blank">
            neopets
          </UnderlinedLink>
          .
        </p>

        <p className="text-sm">
          I wrote my first computer program in an &quot;intro to python&quot;
          class as a freshman math major and decided to add computer science to
          my degree. After graduation, I got a job working on a Rails +
          Angular.js application and I&apos;ve been living in the
          &quot;fullstack&quot; space ever since.
        </p>

        <p className="text-sm">
          In my professional career, I&apos;ve had the opportunity to use many
          different languages and technologies and consider myself a lifelong
          learner.
        </p>

        <p className="text-sm">
          Outside of programming, I&apos;m interested in playing music, drinking
          coffee, catching up on{' '}
          <UnderlinedLink
            href="https://en.wikipedia.org/wiki/One_Piece_(1999_TV_series)"
            target="_blank"
          >
            one piece
          </UnderlinedLink>
          , chipping away at my video game library, traveling, and hanging out
          with my dogs.
        </p>
      </div>

      <hr className="mx-auto my-4 w-full border-zinc-300"></hr>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Work Experience</h3>

        <WorkExperience
          company="Toumei Consulting"
          title="Senior Software Engineer"
          dates="2018 - Present"
        />

        <WorkExperience
          company="Sony Pictures Entertainment (Toumei Consulting)"
          title="Senior Software Engineer"
          dates="2022 - 2024"
        />

        <WorkExperience
          company="Sony Electronics (Toumei Consulting)"
          title="Senior Software Engineer"
          dates="2022 - 2022"
        />

        <WorkExperience
          company="Disney Studios (Toumei Consulting)"
          title="Software Engineer"
          dates="2018 - 2021"
        />

        <WorkExperience
          company="ONEHOPE Wine"
          title="Frontend Engineer"
          dates="2017 - 2018"
        />

        <WorkExperience
          company="Sony Pictures Entertainment"
          title="Software Engineer"
          dates="2014 - 2017"
        />
      </div>

      <hr className="mx-auto my-4 w-full border-zinc-300"></hr>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Education</h3>

        <div className="flex justify-between">
          <div>
            <h4 className="text font-semibold">
              University of California, Santa Barbara
            </h4>
            <p className="text-sm">
              Computer Science, B.S., Mathematical Sciences, B.S.
            </p>
          </div>
          <div>
            <Badge>2010 - 2014</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
