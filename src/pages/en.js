import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <div>
    <h2>Year 1994, Wang huning, Political life, original &amp; translation</h2>
    <Calendar dates={data.allMarkdownRemark.edges} />
  </div>
)

export const pageQuery = graphql`
  query enIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//en//" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
export default IndexPage
