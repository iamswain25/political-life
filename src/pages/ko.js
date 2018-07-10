import React from 'react'
import Calendar from '../components/calendar'

const IndexPage = ({ data }) => (
  <div>
    <h2>1994년 왕후닝 &lt;&lt;정치적 인생&gt;&gt; 원문 및 번역</h2>
    <Calendar dates={data.allMarkdownRemark.edges} />
  </div>
)

export const pageQuery = graphql`
  query koIndexQuery {
    allMarkdownRemark(
      sort : {fields : [fileAbsolutePath], order: ASC }
      filter : {fileAbsolutePath : {regex : "/\/ko\//"} }) {
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
