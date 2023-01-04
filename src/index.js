import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
