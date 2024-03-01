import React from "react";
import AboutUs from "./pages/AboutUs";
// import Store from './pages/Store';
import LandingPage from "./pages/landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sign from "./pages/Signup/sign";
import Login from "./pages/Login/login";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./components/CartPage/CartPage";
import Store from "./components/Store/store";
import { CartProvider } from "./components/CartPage/CartContext";
import SellersPage from "./components/sellerspage/SellersPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <Sign /> },
    { path: "/login", element: <Login /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/cartPage", element: <CartPage /> },
    { path: "/store", element: <Store /> },
    { path: "/sellerdashboard", element: <SellersPage /> },
  ]);

  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
