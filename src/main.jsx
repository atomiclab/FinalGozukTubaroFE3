import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Reducers/Themereducer";
import Context from "./Context/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Context>
  </BrowserRouter>
);
