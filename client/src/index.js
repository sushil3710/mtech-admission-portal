import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "flowbite";
import axios from "axios";
axios.defaults.baseURL = 'https://mtech-admission-server.onrender.com/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
