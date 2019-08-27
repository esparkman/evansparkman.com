import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug}) {
      title
      content {
        json
      }
      publishedDate(formatString: "MMMM Do YYYY")
      image {
        file {
          url
        }
      }
      tags
    }
  }
`

const Blog = ({ data }) => {
  const { title, publishedDate, content, image, tags } = data.contentfulPost
  return (
    <Layout>
      <img src={image.file.url} alt="" />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      { documentToReactComponents(content.json) }
      <ul>
        { tags.map((tag, index) => (<li key={index}>{tag}</li>)) }
      </ul>
    </Layout>
  )
}

export default Blog
