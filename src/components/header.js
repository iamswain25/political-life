import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, currentPathname }) => {
  let koUrl, zhUrl, jaUrl;
  const pathArray = currentPathname.split("/");
  const upUrl = currentPathname.substr(0, currentPathname.lastIndexOf("/"));
  switch (pathArray.length) {
    case 0:
    case 1:
    case 2:
      koUrl = "/ko";
      zhUrl = "/zh";
      jaUrl = "/ja";
      break;
    case 3:
      koUrl = "/ko/".concat(pathArray[2]);
      zhUrl = "/zh/".concat(pathArray[2]);
      jaUrl = "/ja/".concat(pathArray[2]);
      break;
  }
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
            to={upUrl}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            {siteTitle}
          </Link>
        </h1>
        <Link
          activeStyle={{ display: "none" }}
          to={koUrl}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          한글
        </Link>
        <Link
          to={zhUrl}
          activeStyle={{ display: "none" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          中文
        </Link>
        <Link
          to={jaUrl}
          activeStyle={{ display: "none" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          日文
        </Link>
      </div>
    </div>
  )
}

export default Header
