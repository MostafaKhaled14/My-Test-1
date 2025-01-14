import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ErrorPage from "./Components/Error/Error";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
    { basename: "/My-Test-1" }
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
