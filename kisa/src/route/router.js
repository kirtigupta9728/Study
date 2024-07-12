import { createBrowserRouter } from "react-router-dom";
import Cart from "../component/Cart";
import Dashboard from "../component/Dashboard";
import Login from "../component/Login";
import ProductDetails from "../component/ProductDetails";
import { Routes } from "./config";

const router = createBrowserRouter([
    {path: Routes.Dashboard, element: <Dashboard/>},
    {path: Routes.login, element: <Login/>},
    {path: Routes.cart, element: <Cart/>},
    {path: Routes.productDetails, element: <ProductDetails/>},
]);
export default router;