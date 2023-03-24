import React from "react";
import ReactDOM from "react-dom";
import OpeningAnima from "./components/OpeningAnima";
import App from "./App";
import "./components/OpeningAnima.css";

ReactDOM.render(
  <React.StrictMode>
    <OpeningAnima />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
