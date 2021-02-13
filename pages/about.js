import Head from 'next/head'
import Layout from '../components/Layout'

const About = () => {
  return (
    <article className="post">
      <div className="post-content">
        <h2 className="bio-heading">Hi!</h2>

        <div className="bio">
          <p>
            I'm a full stack engineer with a passion for web technologies. I'm a
            believer in collaboration, unit testing, and convention over
            configuration.
          </p>

          <p>
            My initial exposure to HTML/CSS was through a website called{' '}
            <a href="http://www.neopets.com">Neopets</a>. I combined the two to
            create basic designs for my profile for myself and friends, which
            were mostly rip-offs of the "CSS Wizards" on the website. I didn't
            write another line of code until my freshman year in college. Python
            was my first taste of an actual programming language - and I got
            hooked. I took more CS classes and eventually majored in it. Since
            then, I've dabbled in many other languages and technologies; my goal
            is to always be learning.
          </p>

          <p>
            These days you can find me working as a software engineer on a react
            application at <a href="https://www2.onehopewine.com/">ONEHOPE</a>.
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
