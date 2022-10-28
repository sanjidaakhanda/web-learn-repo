import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Shared/Blog/Blog/Blog";

import Category from "../Shared/Category/Category";
import CheckOut from "../Shared/CheckOut/CheckOut";
import Courses from "../Shared/Courses/Courses/Courses";
import Home from "../Shared/Home/Home";
import Login from "../Shared/Login/Login/Login";
import Register from "../Shared/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://web-learn-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`https://web-learn-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://web-learn-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://web-learn-server.vercel.app/checkOut/${params.id}`),
      },

      { path: "/blog", element: <Blog></Blog> },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1 variant="warning">No data found</h1>
      </div>
    ),
  },
]);
