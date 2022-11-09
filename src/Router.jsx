import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ErrorPage } from "./routes/ErrorPage.jsx";
import { Root } from "./routes/Root.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/products",
            // element: <ProductsList />
            element:<div>productsList</div>
        },
      ]
    },
  ]);

export function Router(){
    return(
        <RouterProvider router={router} />
    )
}