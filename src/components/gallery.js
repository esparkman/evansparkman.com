import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "nuka-carousel"

const Gallery = () => {
  const gallery = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "2018-2019" } }) {
        frontmatter {
          title
          gallery_images
        }
      }
    }
  `)

  return (
    <Carousel>
      {gallery.markdownRemark.frontmatter.gallery_images.map((image, index) => {
        return <img alt="Heyo 1" src={image} key={index} />
      })}
    </Carousel>
  )
}

export default Gallery
