import React from "react";
import Helmet from "react-helmet";
import cover from "../pages/templates/cover.jpg";
const TITLE = "王沪宁《政治的人生》";
const DESCRIPTION = `1994 diary of a Communist ideologue`;

function SEO({ description = ``, lang = `en`, meta = [], title }) {
  const metaDescription = description || DESCRIPTION;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${TITLE}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: `iamswain25`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          property: "og:image",
          content: "https://iamswain25.github.io" + cover
        }
      ].concat(meta)}
    />
  );
}

export default SEO;
