import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />

      <main className="page-content">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
