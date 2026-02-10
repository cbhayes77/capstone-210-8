import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

// Portfolio pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
/*import Contact from "./pages/Contact.jsx";*/
import Project from "./pages/Project.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      /*{ path: "contact", element: <Contact /> },*/
      { path: "portfolio/:slug", element: <Project /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
