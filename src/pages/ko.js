import React from 'react'
import Calendar from '../components/calendar'

const IndexPage = ({ data }) => (
  <div>
    <h2>1994년</h2>
    <Calendar dates={data.allMarkdownRemark.edges}/>
    {/* {data.allMarkdownRemark.edges.map(({node})=> {
      return(<div>{node.frontmatter.title}</div>)
    })} */}
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
