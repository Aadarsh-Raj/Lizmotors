import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreContext from "./Store/store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext>
    <App />
  </StoreContext>
);

reportWebVitals();
