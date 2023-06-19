import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubscriptionSuccessScene from "./scenes/SubscriptionSuccess";
import PricingScene from "./scenes/Pricing";
import SubscriptionCancelledScene from "./scenes/SubscriptionCancelled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PricingScene />,
  },
  {
    path: "/success",
    element: <SubscriptionSuccessScene />,
  },
  {
    path: "/cancelled",
    element: <SubscriptionCancelledScene />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
