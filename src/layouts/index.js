import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => {
  const currentPathname = typeof window !== 'undefined' && window.location.pathname;
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'sample, something' },
          { property: 'og:title', content: data.site.siteMetadata.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:description', content: data.site.siteMetadata.description },
          { property: 'og:image', content: 'https://img2.secretchina.com/pic/2017/11-18/p2035071a907147589-ss.jpg' },
          { property: 'og:url', content: 'https://iamswain25.github.io/political-life/' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} currentPathname={currentPathname} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`