import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import { GlobalStyle } from "./globalStyle";
import { Button, ConfigProvider, Space } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#fe601f",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <GlobalStyle />
      <Router />
    </ConfigProvider>
  </Fragment>
);
