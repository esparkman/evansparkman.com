import React from "react"

import "../styles/styles.css"

import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className="font-sans container max-w-3xl mx-auto px-4">
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
