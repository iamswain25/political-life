import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Index from "./pages";
import List from "./pages/list";
import Post from "./pages/templates/post";

import "./index.css";
const App: React.FC = () => {
  const [textSize, setTextSize] = useState(23);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route
        path="/"
        component={(props: Object) => (
          <Header {...props} setTextSize={setTextSize} textSize={textSize} />
        )}
      />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
          fontSize: textSize
        }}
      >
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/:lang" exact component={List} />
          <Route path="/:lang/:page" exact component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
