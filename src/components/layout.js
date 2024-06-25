import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

/*
const Layout = ( { isHomePage, children }) => {
  return (
    <div className="">
      <header className="global-header">
      </header>

      <main>{children}</main>
    
    </div>
  )
}
*/

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className=" bg-gray-50 mx-auto max-w-screen-lg px-4">
        <main>{children}</main>
        <footer className="bg-slate-900 text-slate-50 text-center mt-5 text-sm">
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="text-blue-500 hover:text-blue-700">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout