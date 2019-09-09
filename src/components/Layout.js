import React from "react"

import "../styles/styles.css"
// import "../styles/index.scss"
// import layoutStyles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
