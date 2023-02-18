import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";
import "@/styles/globals.scss";
//providers
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

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
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);