import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="pt-4 pb-12">
      <h1 className="font-sans text-6xl font-bold">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul className="flex">
          <li>
            <Link
              className="text-base text-gray-600 mr-5 no-underline hover:text-gray-800"
              activeClassName="border-b-2 border-indigo-400"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-gray-600 mr-5 no-underline hover:text-gray-800"
              activeClassName="border-b-2 border-indigo-400"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-gray-600 mr-5 no-underline hover:text-gray-800"
              activeClassName="border-b-2 border-indigo-400"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-gray-600 mr-5 no-underline hover:text-gray-800"
              activeClassName="border-b-2 border-indigo-400"
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-gray-600 mr-5 no-underline hover:text-gray-800"
              activeClassName="border-b-2 border-indigo-400"
              to="/resume"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
