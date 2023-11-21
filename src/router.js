import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingleMovie from "./Pages/SingleMovie";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
