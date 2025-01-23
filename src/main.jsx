import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
import './assets/styles/index.css'
import Product from "./components/Products";
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import SignIn from "./components/SingIn";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route} />
  </React.StrictMode>
);
