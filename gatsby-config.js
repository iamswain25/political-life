module.exports = {
  pathPrefix: 'political-life',
  siteMetadata: {
    title: '王沪宁《政治的人生》',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-transformer-remark'
  ],
}
