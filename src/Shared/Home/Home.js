import React from "react";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h1>this is home {allCourses.length}</h1>
    </div>
  );
};

export default Home;
