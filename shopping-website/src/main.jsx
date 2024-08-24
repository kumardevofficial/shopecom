import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CreateProduct from "./components/CreateProduct.jsx";
import "./index.css";
import ShowItemList from "./components/ShowItemList.jsx";
import EmptyCart from "./components/EmptyCart.jsx";
import SearchPage from "./components/SerachPage.jsx";
import Mycart from "./components/Mycart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ShowItemList /> },
      { path: "/create-product", element: <CreateProduct /> },
      { path: "/cart", element: <Mycart /> },
      { path: "/search-item", element: <SearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
