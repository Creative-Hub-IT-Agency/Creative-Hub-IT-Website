import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Contact from "../page/Contact";
import ErrorPage from "../page/ErrorPage";
import OurTeam from "../page/OurTeam";
import Portfolio from "../page/Portfolio";
import TestimonialPage from "../page/TestimonialPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },  
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/our-team', element: <OurTeam /> },
      { path: '/contact', element: <Contact /> },
      { path: '/testimonials', element: <TestimonialPage /> },
    ],
  },
]);