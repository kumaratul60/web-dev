import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import About from "./TailwindComponent/About/About";
import Card from "./TailwindComponent/Card/Card";
import Contact from "./TailwindComponent/Contact/Contact";
import Error from "./TailwindComponent/Error/Error";
import Header from "./TailwindComponent/Header/Header";
import RestaurantCustomMenu from "./TailwindComponent/RestaurantMenu/RestaurantCustomMenu";

const GroceryPage = lazy(() => import("./components/Grocery"));

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",

        element: <RestaurantCustomMenu />,
      },
      {
        path: "/grocery",

        element: (
          <Suspense fallback={<h3>loading.....</h3>}>
            <GroceryPage />
          </Suspense>
        ),
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
