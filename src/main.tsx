import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants";

import Constructor from "./pages/Constructor";
import Start from "./pages/Start";

const router = createBrowserRouter([
  {
    element: <Start />,
    path: ROUTES.START,
  },
  {
    element: <Constructor />,
    path: ROUTES.CONSTRUCTOR,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

