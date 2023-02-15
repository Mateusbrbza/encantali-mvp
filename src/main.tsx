import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";

//pages
import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";

//components
import Sidebar from "./components/sidebar/Sidebar";
import Product from "./components/product/Product";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CartItem from "./components/cart-item/CartItem";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);