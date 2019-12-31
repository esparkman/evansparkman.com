import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query {
    contentfulResume {
      author {
        fullName
        email
      }
      job {
        title
        company
        location
        startDate(formatString: "MMMM YYYY")
        endDate(formatString: "MMMM YYYY")
        description {
          json
        }
      }
    }
  }
`

const Resume = ({ data }) => {
  const { job } = data.contentfulResume
  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-4xl font-bold pb-4">Hello.</h1>
        <h2 className="text-3xl font-semibold">
          I'm{" "}
          <Link className="text-indigo-500" to="/about">
            Evan
          </Link>
          , a full-stack developer living in wonderful Atlanta, GA.
        </h2>
        <p className="pt-4 font-semibold">
          Need a Developer?{" "}
          <Link className="text-indigo-500" to="/contact">
            Contact Me!
          </Link>
        </p>
      </div>
      {job.map((job, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <div className="flex flex-row items-center justify-between">
              <div>
                <p className="font-display text-lg leading-relaxed font-semibold tracking-wider">
                  {job.company}
                </p>
              </div>
              <div>
                <p className="font-display font-semibold">{job.title}</p>
              </div>
              <div>
                <p className="font-display font-semibold">
                  {job.startDate} - {job.endDate || "Present"}
                </p>
              </div>
            </div>
            <div className="mb-4 w-full">
              {documentToReactComponents(job.description.json, {
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="my-3 font-body tracking-wider">{children}</p>
                  ),
                },
              })}
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default Resume
