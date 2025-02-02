import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Contact from "../page/Contact";
import ErrorPage from "../page/ErrorPage";
import Portfolio from "../page/Portfolio";
import TestimonialPage from "../page/TestimonialPage";
// import OurTeam from "../page/OurTeam";
// import Services from "../page/Services";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },  
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
      { path: '/testimonials', element: <TestimonialPage /> },
      // { path: '/services', element: <Services /> },
      // { path: '/our-team', element: <OurTeam /> },
    ],
  },
]);