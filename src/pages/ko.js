import React from 'react'
import Calendar from '../components/calendar'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h2>1994年</h2>
    <Calendar dates={data.allMarkdownRemark.edges}/>
    {/* <Calendar dates={data.allMarkdownRemark.edges.map(({node})=> node.frontmatter.title) }/> */}
    {/* <div>{data.allMarkdownRemark.edges.toString()}</div> */}
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
