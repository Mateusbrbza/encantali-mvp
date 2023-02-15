import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import Home from "./pages/home/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);