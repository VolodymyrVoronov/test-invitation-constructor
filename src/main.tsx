import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants";

import Constructor from "./pages/Constructor";
import Start from "./pages/Start";

import "./global.css";

import "@fontsource-variable/montserrat";
import "@fontsource-variable/comfortaa";
import "@fontsource/press-start-2p";
import "@fontsource/luckiest-guy";
import "@fontsource/lobster";
import "@fontsource/happy-monkey";
import "@fontsource/special-elite";
import "@fontsource/rampart-one";
import "@fontsource/bungee-shade";
import "@fontsource/ranga/400.css";
import "@fontsource/ranga/700.css";
import "@fontsource-variable/tourney";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/sacramento";
import "@fontsource/twinkle-star";
import "@fontsource/nanum-brush-script";

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
  </React.StrictMode>,
);
