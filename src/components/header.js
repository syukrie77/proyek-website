import * as React from "react"
import { Link } from "gatsby"
import gatsbyLogo from "../images/gatsby-icon.png" // Import gambar logo Gatsby

const Header = ({ siteTitle }) => (
  <header className="bg-slate-700 flex items-center justify-between mx-auto max-w-screen-lg px-4 py-4 rounded-t-lg">
    <Link
      to="/"
      className="text-lg font-semibold text-gray-50 hover:text-blue-500 
      focus:text-gray-50 focus:outline-none"
    >
      {siteTitle}
    </Link>
    {/* Navigasi bar */}
    <nav className="flex space-x-4">
      <Link
        to="/"
        className="text-gray-50 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
      >
        Home
      </Link>
      <Link
        to="#"
        className="text-gray-50 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
      >
        About
      </Link>
      <Link
        to="#"
        className="text-gray-50 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
      >
        Blog
      </Link>
      <Link
        to="#"
        className="text-gray-50 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
      >
        Services
      </Link>
    </nav>
    {/* Menggunakan gambar logo resmi dari Gatsby */}
    <img
      alt="Gatsby logo"
      width={30}
      style={{ margin: 0 }}
      src={gatsbyLogo} // Menggunakan variabel yang berisi path gambar logo Gatsby
    />
  </header>
)

export default Header
