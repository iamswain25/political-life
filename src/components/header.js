import React from 'react'
import Link from 'gatsby-link'


const Header = ({ siteTitle, currentURL }) => {
  currentURL = currentURL.toString();
  let urlIndex = currentURL.split("/").pop();

  return (
  <div
    style={{
      background: '#BA0020',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <h1 style={{ margin: 0, display: "inline-block" }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}>
          {siteTitle}
        </Link>
      </h1>
      <Link
          activeStyle={{display: "none"}}
          to={"/kr/" + urlIndex}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          한글
        </Link>
        <Link
          to={"/cn/" + urlIndex}
          activeStyle={{display: "none"}}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          中文
        </Link>
    </div>
  </div>
)}

export default Header
