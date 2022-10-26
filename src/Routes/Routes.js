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
      { path: "/home", element: <Home></Home> },
      { path: "/courses/:id", element: <Courses></Courses> },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
    ],
  },
]);
