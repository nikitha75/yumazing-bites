import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  About,
  Recipe,
  Newsletter,
  HomeLayout,
  Error,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleRecipeLoader } from "./pages/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "recipe/:id",
        element: <Recipe />,
        errorElement: <SinglePageError />,
        loader: singleRecipeLoader,
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
