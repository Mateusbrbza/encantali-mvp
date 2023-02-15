import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";
import ProductProvider from "./contexts/ProductContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProductProvider>
);