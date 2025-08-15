import { createBrowserRouter } from "react-router-dom";
import { ShoppingList } from "../components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ShoppingList/>
    }
])