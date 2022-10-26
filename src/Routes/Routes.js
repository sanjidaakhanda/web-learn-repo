import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Shared/Category/Category";
import Courses from "../Shared/Courses/Courses/Courses";
import Home from "../Shared/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
