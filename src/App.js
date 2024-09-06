import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import "./../index.css";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import ContactPage from "./components/ContactDetails";
import Error from "./components/Error";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "../utils/userContext";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState();

  //Authentication - SetUser Name
  useEffect(() => {
    const data = {
      name: "Diplo Sawn",
    };


    setUserName(data.name);
  });
  return (
    <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
      <div className="app">
        <AppLayout />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [],

    errorElement: <Error />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/resturant/:resId",
    element: <ResturantMenu />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense
        fallback={
          <div>
            <h2>Loading........</h2>
          </div>
        }
      >
        <Grocery />
      </Suspense>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
