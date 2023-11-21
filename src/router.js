import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Test from "./Pages/Test";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
