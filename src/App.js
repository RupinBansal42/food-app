import React from "react";
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
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";

const App = () => {
  return (
    <div className="app">
      <AppLayout />
      <Outlet />
    </div>
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
    element : <ResturantMenu/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
