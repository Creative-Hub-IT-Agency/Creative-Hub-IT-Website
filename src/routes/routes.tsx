import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Contact from "../page/Contact";
import ErrorPage from "../page/ErrorPage";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/> ,
    children: [
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact /> },
    ]
}])