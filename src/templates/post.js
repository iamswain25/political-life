import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({ data }) {
    const { markdownRemark: post } = data;
    const curruentURL = typeof window !== 'undefined' && window.location.href;
    const urlIndex = parseInt(curruentURL.toString().split("/").pop());//last part of URL
    const nextUrl = (urlIndex + 1).toString().padStart(4, "0");
    const prevUrl = (urlIndex - 1).toString().padStart(4, "0");
    return (
        <div>
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {urlIndex > 0 ? <Link to={prevUrl}>←prev</Link> : ""}
            <Link to={nextUrl} style={{ float: "right" }}>next→</Link>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostById($id: String!) {
        markdownRemark( id: {eq: $id }) {
            html
            id
            frontmatter {
                title
            }
        }
    }
`