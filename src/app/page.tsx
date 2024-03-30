import UnderlinedLink from '@/components/UnderlinedLink'

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-4">
      <div className="space-y-2">
        <p>Welcome to my slice on the internet!</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p>
          I&apos;ve been working as a software developer for over a decade. I
          built my first websites on{' '}
          <UnderlinedLink href="#">angelfire</UnderlinedLink> and{' '}
          <UnderlinedLink href="#">geocities</UnderlinedLink> and I learned
          HTML+CSS by copy and pasting on{' '}
          <UnderlinedLink href="#">neopets</UnderlinedLink>.
        </p>

        <p>
          I wrote my first computer program in an &apos;intro to python&apos;
          class as a freshman math major and decided to add computer science to
          my degree. After graduation, I got a job working on a Rails +
          Angular.js application and I&apos;ve been living in the
          &apos;fullstack&apos; space ever since.
        </p>

        <p>
          In my professional career, I&apos;ve had the opportunity to use many
          different languages and technologies and consider myself a lifelong
          learner.
        </p>

        <p>
          Outside of programming, I&apos;m interested in playing music, drinking
          coffee, catching up one piece, chipping away at my video game library,
          traveling, and just hanging out with my dogs.
        </p>
      </div>
    </section>
  )
}
