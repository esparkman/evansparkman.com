import React from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulPost.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {blogPosts.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>
                  Written by {edge.node.author.fullName} on{" "}
                  {edge.node.publishedDate}
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query PostsPageQuery {
    allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          slug
          author {
            fullName
          }
          title
          tags
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
