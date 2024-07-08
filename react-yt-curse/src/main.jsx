import React from "react";
import ReactDOM from "react-dom/client";
import { Axios } from "./Rest";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Axios />
  </React.StrictMode>
);
