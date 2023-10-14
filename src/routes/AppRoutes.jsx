import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../shared/Routes";

const Dashboard = lazy(() => import("../views/Dashboard"))
const Products = lazy(() => import("../views/Products"))
const Customers = lazy(() => import("../views/Customers"))
const Income = lazy(() => import("../views/Income"))
const Promote = lazy(() => import("../views/Promote"))
const Help = lazy(() => import("../views/Help"))

export const AppRoutes = [
    {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <Dashboard />,
        title: "Dashboard"
    },
    {
        path: ROUTE_CONSTANTS.PRODUCT,
        element: <Products />,
        title: "Products"
    },
    {
        path: ROUTE_CONSTANTS.CUSTOMERS,
        element: <Customers />,
        title: "Customers"
    },
    {
        path: ROUTE_CONSTANTS.INCOME,
        element: <Income />,
        title: "Income"
    },
    {
        path: ROUTE_CONSTANTS.PROMOTE,
        element: <Promote />,
        title: "Promote"
    },
    {
        path: ROUTE_CONSTANTS.HELP,
        element: <Help />,
        title: "Help"
    },

]