import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";


export default function Template({ data }) {
    const { markdownRemark: post } = data;
    const lang = "/" + post.fileAbsolutePath.split("/").slice(-2)[0] + "/";
    const urlIndex = parseInt(post.fileAbsolutePath.split("/").pop());//last part of URL
    const nextUrl = lang + (urlIndex + 1).toString().padStart(4, "0");
    const prevUrl = lang + (urlIndex - 1).toString().padStart(4, "0");
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
            fileAbsolutePath
            frontmatter {
                title
            }
        }
    }
`