import React from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulPost.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <div className={blogStyles.posts}>
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query PostsPageQuery {
    allContentfulPost(limit: 100) {
      edges {
        node {
          id
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
    }
  }
`
