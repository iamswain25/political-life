import React from 'react'
import Calendar from '../components/calendar'

const IndexPage = ({ data }) => (
  <div>
    <h2>Год 1994, Wang huning, Политическая жизнь</h2>
    <Calendar dates={data.allMarkdownRemark.edges}/>
  </div>
)

export const pageQuery = graphql`
  query enIndexQuery {
    allMarkdownRemark(
      sort : {fields : [fileAbsolutePath], order: ASC }
      filter : {fileAbsolutePath : {regex : "/\/en\//"} }) {
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
