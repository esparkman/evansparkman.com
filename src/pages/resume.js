import React from 'react'
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

const Resume = ({data}) => {
  const { author, job } = data.contentfulResume
  console.log(data)
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        <Link to="/about">I'm Evan</Link>, a full-stack developer living in
        wonderful Atlanta, GA.
      </h2>
      { job.map((job, index) => {
        return (
          <div key={index}>
            <div>
              <h2>{job.company}</h2>
              <span>{job.startDate} - {job.endDate}</span>
            </div>
            <h3>{job.title}</h3>
            { documentToReactComponents(job.description.json) }
          </div>
        )
      })}
    </Layout>
  )
}

export default Resume