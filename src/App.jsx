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
import { action as newsletterAction } from "./pages/Newsletter";

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
        errorElement: <SinglePageError />,
        loader: singleRecipeLoader,
        element: <Recipe />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
