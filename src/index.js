import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import App from "./App";
import { store } from "./api/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);