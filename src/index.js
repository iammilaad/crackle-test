import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { GlobalStyle } from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <GlobalStyle />
    <Router />
  </Fragment>
);
