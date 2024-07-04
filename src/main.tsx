import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants";

import Spinner from "./components/Spinner/Spinner";
import Start from "./pages/Start";

const Constructor = React.lazy(() => import("./pages/Constructor"));

import "./global.css";

import "@fontsource-variable/comfortaa";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/tourney";
import "@fontsource/bungee-shade";
import "@fontsource/happy-monkey";
import "@fontsource/lobster";
import "@fontsource/luckiest-guy";
import "@fontsource/nanum-brush-script";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/press-start-2p";
import "@fontsource/rampart-one";
import "@fontsource/ranga/400.css";
import "@fontsource/ranga/700.css";
import "@fontsource/sacramento";
import "@fontsource/special-elite";
import "@fontsource/twinkle-star";

const router = createBrowserRouter([
  {
    element: <Start />,
    path: ROUTES.START,
  },
  {
    element: (
      <Suspense fallback={<Spinner className="h-screen" />}>
        <Constructor />
      </Suspense>
    ),
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
  </React.StrictMode>,
);
