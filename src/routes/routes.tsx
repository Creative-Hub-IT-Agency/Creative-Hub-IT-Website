import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Contact from "../page/Contact";
import ErrorPage from "../page/ErrorPage";
import OurTeam from "../page/OurTeam";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/our-team', element: <OurTeam /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);