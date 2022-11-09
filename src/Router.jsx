import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage.jsx";
import { Root } from "./routes/Root.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import {CartDetails} from "./components/CartDetails/CartDetails.jsx"

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
      ]
    },
  ]);

export function Router(){
    return(
        <RouterProvider router={router} />
    )
}