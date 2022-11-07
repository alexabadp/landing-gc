import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,
  rootElement
);
