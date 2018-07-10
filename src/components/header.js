import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle, currentPathname }) => {

  currentPathname = String(currentPathname);
  let koUrl, zhUrl, jaUrl, enUrl, file = "", upUrl, state = false, editUrl = "";
  const pathArray = currentPathname.split("/").filter(String);
  const pathLength = pathArray.length - 1;
  //production
  if (pathArray.length > 0 && pathArray[0].length > 2) {
    upUrl = "/".concat(pathArray.slice(1, pathLength).join("/"));
  }
  //development
  else {
    upUrl = "/".concat(pathArray.slice(0, pathLength).join("/"));
  }

  if (pathArray.length >= 2 && pathArray[pathLength].length > 2) {
    file = "/".concat(pathArray[pathLength]);
    state = true;
    editUrl = "https://github.com/iamswain25/political-life/edit/master/src/pages/"
      + pathArray.slice(pathLength - 1).join("/")
      + ".md";
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
          className="linkwhite">
          한글
        </Link>
        <Link
          to={zhUrl}
          activeStyle={{ color: "black" }}
          className="linkwhite">
          中文
        </Link>
        <Link
          to={jaUrl}
          activeStyle={{ color: "black" }}
          className="linkwhite">
          日文
        </Link>
        <Link
          className="linkwhite"
          to={enUrl}
          activeStyle={{ color: "black" }}>
          English
        </Link>
        {state ? <a className="floatright" href={editUrl} target="_blank"> <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> : null}
      </div>
    </div>
  )
}

export default Header
