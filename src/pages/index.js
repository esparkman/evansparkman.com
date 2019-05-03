import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        <Link to="/about">I'm Evan</Link>, a full-stack developer living in
        wonderful Atlanta, GA.
      </h2>
      <p>
        Need a Developer? <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
