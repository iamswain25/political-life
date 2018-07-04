import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, currentPathname }) => {
  currentPathname = String(currentPathname);
  let koUrl, zhUrl, jaUrl, enUrl, file = "";
  const pathArray = currentPathname.split("/").filter(String);
  const pathLength = pathArray.length - 1;
  const upUrl = pathArray.slice(0, pathLength).join("/");

  if(pathArray.length >= 2 && pathArray[pathLength].length > 2) {
    file = "/".concat(pathArray[pathLength]);
  }
  koUrl = "/ko".concat(file);
  zhUrl = "/zh".concat(file);
  jaUrl = "/ja".concat(file);
  enUrl = "/en".concat(file);
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
          activeStyle={{ color: "black" }}
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
          activeStyle={{ color: "black" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          中文
        </Link>
        <Link
          to={jaUrl}
          activeStyle={{ color: "black" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          日文
        </Link>
        <Link
          to={enUrl}
          activeStyle={{ color: "black" }}
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: 5
          }}>
          English
        </Link>
      </div>
    </div>
  )
}

export default Header
