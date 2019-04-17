import React from 'react'
import AboutPage from '../pages/about'
import BlogPage from '../pages/blog'
import ContactPage from '../pages/contact'
import IndexPage from '../pages/index'

const Header = () => {
  return (
    <div>
      <h1>Evan Sparkman - Blog of Mystery</h1>
      <nav>
        <ul>
          <li>
            <IndexPage />
          </li>
          <li>
            <AboutPage />
          </li>
          <li>
            <BlogPage />
          </li>
          <li>
            <ContactPage />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header