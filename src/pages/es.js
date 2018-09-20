import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
const IndexPage = ({ data }) => (
  <Layout pathname={window.location.pathname}>
    <div>
      <h2>
        1994 Wang Ning &lt;&lt; Vida política &gt;&gt; Traducción automática
      </h2>
      <Calendar dates={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query esIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//es//" } }
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
