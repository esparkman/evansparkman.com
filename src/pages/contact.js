import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Get in touch with me</h1>
      <ul>
        <li>
          <a
            href="//github.com/esparkman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="//instagram.com/esparkman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          Stay in touch on Twitter!{" "}
          <a
            href="//twitter.com/esparkman"
            target="_blank"
            rel="noopener noreferrer"
          >
            @esparkman
          </a>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default ContactPage
