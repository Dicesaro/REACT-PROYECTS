import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./views/error/error-page.jsx";
import { Welcome } from "./routes/Welcome/welcome.jsx";
import { Hoteles } from "./routes/Hoteles/hoteles.jsx";
import Logic from "./views/logic/logic.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Logic />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hoteles",
    element: <Hoteles />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
