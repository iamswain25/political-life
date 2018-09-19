import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
const IndexPage = ({ data }) => (
  <Layout pathname={window.location.pathname}>
    <div>
      <h2>1994年</h2>
      <Calendar dates={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query jaIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//ja//" } }
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
