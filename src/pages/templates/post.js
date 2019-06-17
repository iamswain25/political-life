import React, { useEffect, useState } from "react";
import showdown from "showdown";
// import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";
showdown.setFlavor("github");
export default props => {
  const { lang, page } = props.match.params;
  const reactSwipeEl = React.useRef();
  const urlIndex = Number(page);
  const nextPage = (urlIndex + 1).toString().padStart(4, "0");
  const prevPage = (urlIndex - 1).toString().padStart(4, "0");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const transitionEnd = (index, elem) => {
    const pageNow = elem.dataset.page;
    setContent("");
    setTitle("Loading...");
    props.history.push(pageNow);
  };
  useEffect(() => {
    const converter = new showdown.Converter({ metadata: true });
    fetch(
      `https://raw.githubusercontent.com/iamswain25/political-life/master/src/pages/${lang}/${page}.md`
    )
      .then(res => res.text())
      .then(md => converter.makeHtml(md))
      .then(html => setContent(html))
      .then(() => setTitle(converter.getMetadata().title.slice(1, -1)));
  }, [lang, page]);

  useEffect(() => {
    const keyUpHandler = ev => {
      if (ev.key === "ArrowLeft") {
        reactSwipeEl.current.prev();
      } else if (ev.key === "ArrowRight") {
        reactSwipeEl.current.next();
      }
    };

    document.addEventListener("keyup", keyUpHandler);
    return () => document.removeEventListener("keyup", keyUpHandler);
  }, [reactSwipeEl]);

  return (
    <section>
      <ReactSwipe
        swipeOptions={{
          continuous: false,
          transitionEnd,
          startSlide: 1
        }}
        ref={reactSwipeEl}
      >
        <div data-page={prevPage}>
          <h1>Loading...</h1>
        </div>
        <div data-page={page} style={{ flex: 1 }}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div data-page={nextPage}>
          <h1>Loading...</h1>
        </div>
      </ReactSwipe>
      {urlIndex > 0 && (
        <button onClick={() => reactSwipeEl.current.prev()}>←prev</button>
      )}
      {urlIndex < 200 && (
        <button
          style={{ float: "right" }}
          onClick={() => reactSwipeEl.current.next()}
        >
          next→
        </button>
      )}
    </section>
  );
};
