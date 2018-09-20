import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
const IndexPage = ({ data }) => (
  <Layout pathname={typeof window !== 'undefined' && window.location.pathname}>
    <div>
      <h2>Год 1994, Wang huning, Политическая жизнь</h2>
      <Calendar dates={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)
export const pageQuery = graphql`
  query ruIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//ru//" } }
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
