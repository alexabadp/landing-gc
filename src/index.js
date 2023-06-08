// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { BrowserRouter as Router } from "react-router-dom";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <>
//     <Router>
//       <App />
//     </Router>
//   </>,
//   rootElement
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
