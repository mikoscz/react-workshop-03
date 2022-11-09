import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage.jsx";
import { Root } from "./routes/Root.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import {CartDetails} from "./components/CartDetails/CartDetails.jsx"
import { ProductDetails } from "./components/ProductDetails/ProductDetails.jsx";
import { ShipmentData } from "./components/ShipmentData/ShipmentData.jsx";
import { Summary } from "./components/Summary/Summary.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/products",
            element: <ProductsList />
        },
        {
            path: "/cart",
             element: <CartDetails />
        },
        {
            path: "/products/:productId",
            element: <ProductDetails />
        },
        {
            path: "/shipment",
            element: <ShipmentData />
        },
        {
            path: "/summary",
            element: <Summary />
        },

      ]
    },
  ]);

export function Router(){
    return(
        <RouterProvider router={router} />
    )
}