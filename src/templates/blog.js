import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author {
        fullName
        profileImage {
          file {
            url
          }
        }
      }
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
const Code = ({ children }) => <pre><code className="w-full whitespace-pre inline-block font-italic bg-gray-200 my-4 mx-4 py-4 px-4">{ children }</code></pre>
const Text = ({ children }) => <p className="font-sans text-base font-medium my-2">{ children }</p>

const Blog = ({ data }) => {
  const {
    author,
    title,
    publishedDate,
    content,
    image,
    tags,
  } = data.contentfulPost

  const options = {
    renderMark: {
      [MARKS.CODE]: text => <Code>{text}</Code> 
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
    }
  }

  return (
    <Layout>
      { 
        image &&
        <img src={image.file.url} alt="" />
      }
      <h1 className="font-sans font-semibold text-2xl mb-1">{title}</h1>
      <p className="font-sans font-lite text-sm mb-4">
        Written by {author.fullName} on {publishedDate}
      </p>
      {documentToReactComponents(content.json, options)}
      <ul>
        {tags.map((tag, index) => (
          <li key={index} className="inline-block px-2 py-1 mr-2 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {tag}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
