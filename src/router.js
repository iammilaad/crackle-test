import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingleMovie from "./Pages/SingleMovie";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";
import Test from "./Pages/Test";
import Search from "./Pages/Search";
import NewMovie from "./Pages/NewMovie";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/item/:id",
    element: <SingleMovie />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/new",
    element: <NewMovie />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
