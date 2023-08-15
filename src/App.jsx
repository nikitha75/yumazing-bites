import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Landing, About, Recipe, Newsletter, HomeLayout, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
