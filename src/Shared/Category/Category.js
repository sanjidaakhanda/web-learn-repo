import React from "react";
import { useLoaderData } from "react-router-dom";
const Category = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h3>this is category {courses.length}</h3>
    </div>
  );
};

export default Category;
