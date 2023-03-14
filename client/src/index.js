import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "flowbite";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
