import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import About from "./TailwindComponent/About/About";
import Card from "./TailwindComponent/Card/Card";
import Contact from "./TailwindComponent/Contact/Contact";
import Error from "./TailwindComponent/Error/Error";
import Header from "./TailwindComponent/Header/Header";
import RestaurantCustomMenu from "./TailwindComponent/RestaurantMenu/RestaurantCustomMenu";
import Cart from "./TailwindComponent/Cart";

const GroceryPage = lazy(() => import("./components/Grocery"));

import appStore from "./Redux/store";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call send username and password
    const userData = {
      name: "Atul Awasthi",
    };
    setUserName(userData.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
