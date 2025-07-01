import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/Products";
import Registration from "./components/Registration";
import Cart from "./components/Cart";
import SignIn from "./components/SingIn";
import "./assets/styles/App.css";

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
