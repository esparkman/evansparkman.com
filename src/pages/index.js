import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold pb-4">Hello.</h1>
      <h2 className="text-3xl font-semibold">
        I'm <Link className="text-indigo-500" to="/about">Evan</Link>, a full-stack developer living in
        wonderful Atlanta, GA.
      </h2>
      <p className="pt-4 font-semibold">
        Need a Developer? <Link className="text-indigo-500" to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
