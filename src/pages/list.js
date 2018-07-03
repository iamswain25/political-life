import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h2>1994年</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(({node}) => {
        let convertedPath = node.fileAbsolutePath.split("/").slice(-2).join("/");
        convertedPath = "/" + convertedPath.substring(0, convertedPath.lastIndexOf("."));
        return (
          <li key={node.id}>
            <Link
              to={convertedPath}
            >{node.frontmatter.title}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)
export const pageQuery = graphql`
  query listIndexQuery {
    allMarkdownRemark(
      sort : { fields : [fileAbsolutePath], order: ASC }
      filter : {fileAbsolutePath : {regex : "/\/cn\//"} }) {
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
