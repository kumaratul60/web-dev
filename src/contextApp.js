import React, { lazy, Suspense, useEffect, useState } from "react";
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
    //  if want to use userContext.provider for specific component then we can do also by wrapping it in with only that component
    //  we wrap it with nested userContext.provider also, and change the name so only that name will reflect in  nested wrapped component , rest of component will use  global userContext.

    //  Default
    // <UserContext.Provider value={{ loggedInUser: userName }}>
    // {/* Atul Awasthi */}
    //   <div className="app">
    //   {/* Mark */}
    //   <UserContext.Provider value={{ loggedInUser: "Mark" }}>
    //     <Header />
    //     </UserContext.Provider>
    //     <Outlet />
    //   </div>
    // </UserContext.Provider>

    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
