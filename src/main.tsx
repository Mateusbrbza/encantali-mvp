import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/styles/globals.scss";

//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Profile from "./pages/profile/Profile";
import Payment from "./pages/payment/Payment";

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
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/profile/payment",
    element: <Payment />
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