import React from 'react'
import Helmet from 'react-helmet'
import Header from '../../components/header'
import './index.css'
import cover from '../../templates/cover.jpg'
import favicon from './favicon.png'
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children, pathname }) => {
  const currentPathname = pathname
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'keywords', content: 'sample, something' },
              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:type', content: 'website' },
              {
                property: 'og:description',
                content: data.site.siteMetadata.description,
              },
              {
                property: 'og:image',
                content: 'https://iamswain25.github.io' + cover,
              },
              {
                property: 'og:url',
                content: 'https://iamswain25.github.io/political-life',
              },
            ]}
            link={[
              { rel: 'shortcut icon', href: favicon, type: 'image/x-icon' },
            ]}
          />
          <Header
            siteTitle={data.site.siteMetadata.title}
            currentPathname={currentPathname}
          />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </div>
      )}
    />
  )
}
export default Layout
