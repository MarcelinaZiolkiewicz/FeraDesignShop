import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import AppProvider from "./context/AppContext";

import GlobalStyle from "./styled/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styled/theme.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <App />
      </AppProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
