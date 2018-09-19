import React from 'react'
import Calendar from '../components/calendar'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
const IndexPage = ({ data }) => (
  <Layout pathname={window.location.pathname}>
    <div>
      <h2>1994년 왕후닝 &lt;&lt;정치적 인생&gt;&gt; 번역 및 자동번역</h2>
      <Calendar dates={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query koIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
      filter: { fileAbsolutePath: { regex: "//ko//" } }
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
