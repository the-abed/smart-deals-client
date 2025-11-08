import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import AllProducts from "../Pages/AllProducts";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import MyBids from "../Pages/Dashbord/MyBids";
import PrivateRoute from "./PrivateRoute";
import CreateProduct from "../Components/products/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "/product-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: <PrivateRoute> <ProductDetails></ProductDetails></PrivateRoute>,
      },

      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/my-bids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: "/create-product",
        element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>
      }
    ],
  },
]);

export default router;
