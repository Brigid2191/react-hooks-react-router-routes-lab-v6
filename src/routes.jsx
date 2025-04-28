import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // Make sure ErrorPage.jsx exists!

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // If route fails, show ErrorPage
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id", // Note the colon for dynamic id
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
