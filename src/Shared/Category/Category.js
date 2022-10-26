import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
const Category = () => {
  const coursesCategory = useLoaderData();
  return (
    <div>
      {coursesCategory.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Category;
