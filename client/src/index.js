import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { GlobalStyle } from "@components";
import { store } from "@store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <GlobalStyle />
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
