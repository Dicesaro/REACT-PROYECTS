import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Board from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
