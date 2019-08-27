import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Hi! My name is Evan, I'm Software Engineer living in Beautiful Atlanta
        GA. I love all things Frontend and enjoy dabbling with the Backend side
        as well. Some of my favorite things to do are spending time with my
        Beautiful Wife and Amazing Son, our two fur-babies. I also enjoy Cooking
        and most recently have fell in love with the sport of Axe Throwing!
      </p>
      <p>
        <Link to="/contact">Get in touch.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
