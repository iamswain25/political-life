import React from 'react'
import Calendar from '../components/calendar'

const IndexPage = ({ data }) => (
  <div>
  <h2>1994年</h2>
  <Calendar dates={data.allMarkdownRemark.edges}/>
  {/* {data.allMarkdownRemark.edges.map(({node})=> {
    return(<div>{node.frontmatter.title}</div>)
  })} */}
</div>
)
export const pageQuery = graphql`
  query jaIndexQuery {
    allMarkdownRemark(
      sort : { fields : [fileAbsolutePath], order: ASC }
      filter : {fileAbsolutePath : {regex : "/\/ja\//"} }) {
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
