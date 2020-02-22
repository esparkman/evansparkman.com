import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const copyrightYear = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, ©{copyrightYear} </p>
    </footer>
  )
}

export default Footer
