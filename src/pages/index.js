import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>1994年</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></div>
    ))}
  </div>
)
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
export default IndexPage
