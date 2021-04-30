import Head from 'next/head'
import Layout from '../components/Layout'

const About = () => {
  return (
    <article className="post">
      <div className="post-content">
        <h2 className="bio-heading">Hi!</h2>

        <div className="bio">
          <p>
            I'm a software engineer with a passion for web technologies. I'm a
            believer in collaboration, open communication, investing in others,
            and self-improvement.
          </p>

          <p>
            My initial exposure to HTML/CSS was through a website called{' '}
            <a href="http://www.neopets.com">Neopets</a>. I combined the two to
            create basic designs for my profile for myself and friends, which
            were mostly rip-offs of others on the website. I didn't write
            another line of code until my freshman year in college. Python was
            my first taste of an actual programming language - and I got hooked.
            I took more CS classes and eventually majored in it. Since then,
            I've dabbled in many other languages and technologies; my goal is to
            always be learning.
          </p>

          <p>
            These days you can catch me working on internal systems at{' '}
            <a href="https://thewaltdisneycompany.com/">
              The Walt Disney Company
            </a>{' '}
            as a consultant. I get to work with a lot great people supporting
            workstreams that power{' '}
            <a href="https://www.disneyplus.com/">Disney+</a>. My day to day
            generally consists of frontend work with{' '}
            <a href="https://reactjs.org/">React</a>, backend work in{' '}
            <a href="https://nodejs.org/">node</a>.
          </p>
        </div>
      </div>
    </article>
  )
}

export default function WrappedIndex(props) {
  return (
    <Layout>
      <Head>
        <title>Daniel Tea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About {...props} />
    </Layout>
  )
}
