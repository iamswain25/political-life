import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
const TITLE = "王沪宁《政治的人生》";

const Header = props => {
  const currentPathname = props.location.pathname;
  let file = "",
    upUrl,
    state = false,
    editUrl = "";
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
    editUrl =
      "https://github.com/iamswain25/political-life/edit/master/src/pages/" +
      pathArray.slice(pathLength - 1).join("/") +
      ".md";
  }
  const langList = [
    ["ko", "한글"],
    ["zh", "中文"],
    ["ja", "日文"],
    ["en", "English"],
    ["ru", "русский"],
    ["fr", "Français"],
    ["es", "Español"],
    ["vi", "Tiếng Việt"],
    ["ms", "Melayu"]
  ];

  return (
    <div
      style={{
        background: "#BA0020"
        // padding: "1.45rem 1.0875rem"
        // marginBottom: "1.45rem"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: 960,
          margin: "0 auto"
        }}
      >
        <div
          style={{
            flexGrow: 1,
            flexBasis: 320,
            overflow: "hidden",
            marginLeft: "1rem",
            marginRight: "1rem",
            paddingTop: "1.45rem",
            paddingBottom: "1.45rem"
          }}
        >
          <Link
            to={upUrl}
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            <h1 style={{ margin: 0, display: "inline-block" }}>{TITLE}</h1>
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            {langList.map(([lang, title], i) => {
              const url = `/${lang}${file}`;
              return (
                <NavLink
                  key={i}
                  className="linkwhite"
                  to={url}
                  isActive={() => currentPathname === url}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div
          style={{
            flexGrow: 0,
            minWidth: 150,
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5
            }}
          >
            <span style={{ color: "black" }}>Text Size:</span>
            <button
              onClick={() => props.setTextSize(props.textSize + 1)}
              className="textSizeChange"
            >
              +
            </button>
            <button
              onClick={() => props.setTextSize(props.textSize - 1)}
              className="textSizeChange"
            >
              -
            </button>
          </div>
          {state && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ color: "black" }}>Edit in Github:</span>
              <a href={editUrl} rel="noopener">
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
