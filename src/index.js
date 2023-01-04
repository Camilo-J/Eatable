import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
