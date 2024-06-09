import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/error/error-page.jsx";
import { Welcome } from "./routes/welcome/welcome.jsx";
import { Hoteles } from "./routes/hoteles/hoteles.jsx";
import { Register } from "./routes/register/register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const DOMAIN = "http://127.0.0.1:8000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register domain={DOMAIN} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hotels",
    element: <Hoteles domain={DOMAIN} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
