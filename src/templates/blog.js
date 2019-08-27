import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      content {
        json
      }
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
  const { title, content, image, tags } = data.allContentfulPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="body-text">{content}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default Blog
