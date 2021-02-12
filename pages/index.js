import Head from 'next/head'
import Layout from '../components/Layout'

const posts = []

const Index = (props) => {
  return (
    <div className="page-content">
      <div className="wrapper">
        <div className="home">
          <ul className="post-list">
            {posts.map((post) => {
              return (
                <li className="short-post">
                  <header className="post-header">
                    <h2 className="post-title">
                      <a
                        className="post-link"
                        href="{{ post.url | relative_url }}"
                      ></a>
                    </h2>

                    <p className="post-meta">meta</p>
                  </header>

                  <p className="excerpt">exceprt</p>

                  <p className="read-more">
                    <a href="{{ post.url | relative_url }}">Read more...</a>
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function WrappedIndex(props) {
  return (
    <Layout>
      <Head>
        <title>Daniel Tea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Index {...props} />
    </Layout>
  )
}
