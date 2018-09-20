import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
const IndexPage = ({ data }) => (
  <Layout pathname={typeof window !== 'undefined' && window.location.pathname}>
    <div>
      <h2>
        1994 Wang Huning &lt;&lt; vie politique &gt;&gt; Traduction
        automatique
      </h2>
      <Calendar dates={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query frIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//fr//" } }
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
