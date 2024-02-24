import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import AppShell from "../Layout/AppShell/index.tsx";
const Teste = React.lazy(() => import("../pages/teste"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" replace />,
      },

      {
        path: "home",
        element: <Teste />,
      },
    ],
  },
]);

const Router: React.FC = () => (
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);

export default Router;
