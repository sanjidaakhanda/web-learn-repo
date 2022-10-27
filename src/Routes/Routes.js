import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Shared/Category/Category";
import CheckOut from "../Shared/CheackOut/CheckOut";
import Courses from "../Shared/Courses/Courses/Courses";
import Home from "../Shared/Home/Home";
import Login from "../Shared/Login/Login/Login";
import Register from "../Shared/Login/Register/Register";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkOut/${params.id}`),
      },
    ],
  },
]);
