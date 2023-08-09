import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import About from "./components/About/About";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import RestaurantCustomMenu from "./components/RestaurantMenu/RestaurantCustomMenu";
// import Grocery from "./components/Grocery";

//  for dynamic-import/on-demand/lazy-load the component we use lazy utility function function which comes from react library, it takes a callback function and  this callback function uses function name is import, and that import function take path of component which I want to on-demand load.

const GroceryPage = lazy(() => import("./components/Grocery"));

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Breakdown your app into smaller logical chunks this process is know as:
//  chunking == code splitting == dynamic bundling == lazy-loading == on-demand loading == dynamic - import

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
        // element: <RestaurantMenu />,
        element: <RestaurantCustomMenu />,
      },
      {
        path: "/grocery",
        // element: <Grocery />,
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

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
